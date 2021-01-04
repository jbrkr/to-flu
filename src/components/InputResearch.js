import React, { Fragment, useState } from "react";
import '../styling/component.css';
import $ from 'jquery'; 

const InputResearch = () => {
  const [topic, setTopic] = useState("");
  const [subj, setSubject] = useState("");
  const [project, setProject] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {

      const response = await fetch("http://localhost:5000/res", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
            topic, 
            subj, 
            project
        })
      });

      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1>Todo Entry</h1>
      <form onSubmit={onSubmitForm}>
        I need to learn &nbsp;
        <input
          type="text"
          name="topic"
          id="topic"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          placeholder="Research Topic"/>
        in the &nbsp;
        <input
          type="text"
          name="subj"
          id="subj"
          value={subj}
          onChange={e => setSubject(e.target.value)}
          placeholder="Subject"/>
        &nbsp; domain, for &nbsp;
        <input
          type="text"
          name="project"
          id="project"
          value={project}
          onChange={e => setProject(e.target.value)}
          placeholder="Project"/>
        <button className={"buttonX"}>Add</button>
      </form>
      <br/>
    </Fragment>
  );
};

export default InputResearch;