import * as tf from '@tensorflow/tfjs';
import {loadGraphModel} from '@tensorflow/tfjs-converter';

const url = {
model: '<your model location e.g https://orangerx.b-cdn.net/model/model.json>',
};

async function loadModel(url) {
try {
// For layered model
// const model = await tf.loadLayersModel(url.model);
// For graph model
// const model = await tf.loadGraphModel(url.model);
setModel(model);
console.log("Load model success")
}
catch (err) {
console.log(err);
}
}
//React Hook
const [model, setModel] = useState();
useEffect(()=>{
tf.ready().then(()=>{
loadModel(url)
loadMetadata(url)
});
},[])