import * as tf from '@tensorflow/tfjs';
import * as loader from './tf_hook';
import * as ui from './ui';

const HOSTED_URLS = {
  model:
      'https://storage.googleapis.com/tfjs-models/tfjs/translation_en_fr_v1/model.json',
  metadata:
      'https://storage.googleapis.com/tfjs-models/tfjs/translation_en_fr_v1/metadata.json'
};

const LOCAL_URLS = {
  model: 'http://localhost:1235/resources/model.json',
  metadata: 'http://localhost:1235/resources/metadata.json'
};


class Translator {
  /**
   * Initializes the Translation model.
   */
  async init(urls) {
    this.urls = urls;
    const model = await loader.loadHostedPretrainedModel(urls.model);
    await this.loadMetadata();
    this.prepareEncoderModel(model);
    this.prepareDecoderModel(model);
    return this;
  }

  async loadMetadata() {
    const translationMetadata = await loader.loadHostedMetadata(this.urls.metadata);
    this.maxDecoderSeqLength = translationMetadata['max_decoder_seq_length'];
    this.maxEncoderSeqLength = translationMetadata['max_encoder_seq_length'];
    console.log('maxDecoderSeqLength = ' + this.maxDecoderSeqLength);
    console.log('maxEncoderSeqLength = ' + this.maxEncoderSeqLength);
    
    this.inputTokenIndex = translationMetadata['input_token_index'];
    this.targetTokenIndex = translationMetadata['target_token_index'];
    this.reverseTargetCharIndex =
        Object.keys(this.targetTokenIndex)
            .reduce(
                (obj, key) => (obj[this.targetTokenIndex[key]] = key, obj), {});
  }


prepareEncoderModel(model) {
    this.numEncoderTokens = model.input[0].shape[2];
    console.log('numEncoderTokens = ' + this.numEncoderTokens);

    const encoderInputs = model.input[0];
    const stateH = model.layers[2].output[1];
    const stateC = model.layers[2].output[2];
    const encoderStates = [stateH, stateC];

    this.encoderModel =
        tf.model({inputs: encoderInputs, outputs: encoderStates});
  }

  prepareDecoderModel(model) {
    this.numDecoderTokens = model.input[1].shape[2];
    console.log('numDecoderTokens = ' + this.numDecoderTokens);

    const stateH = model.layers[2].output[1];
    const latentDim = stateH.shape[stateH.shape.length - 1];
    console.log('latentDim = ' + latentDim);
    const decoderStateInputH =
        tf.input({shape: [latentDim], name: 'decoder_state_input_h'});
    const decoderStateInputC =
        tf.input({shape: [latentDim], name: 'decoder_state_input_c'});
    const decoderStateInputs = [decoderStateInputH, decoderStateInputC];

    \\lstm retrieval
    const decoderLSTM = model.layers[3];
    const decoderInputs = decoderLSTM.input[0];
    const applyOutputs =
        decoderLSTM.apply(decoderInputs, {initialState: decoderStateInputs});
    let decoderOutputs = applyOutputs[0];
    const decoderStateH = applyOutputs[1];
    const decoderStateC = applyOutputs[2];
    const decoderStates = [decoderStateH, decoderStateC];

    \\fully connected layer
    const decoderDense = model.layers[4];
    decoderOutputs = decoderDense.apply(decoderOutputs);
    this.decoderModel = tf.model({
      inputs: [decoderInputs].concat(decoderStateInputs),
      outputs: [decoderOutputs].concat(decoderStates)
    });
  }