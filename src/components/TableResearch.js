import React, { Fragment, useEffect, useState } from "react";
import '../styling/component.css';
import '../styling/compstyles.scss';
  
  const TableResearch = () => {
    const [topics, setTopics] = useState([]);
  
    const completeTopic = async id => {
      try {
        const completeTopic = await fetch(`http://localhost:5000/resx/${id}`, {
          method: "PUT"
        });
  
        setTopics(topics.filter(topic => topic.topic_id !== id));
      } catch (err) {
        console.error(err.message);
      }
    };
  
    //delete topic function
  
    const deleteTopic = async id => {
      try {
        const deleteTopic = await fetch(`http://localhost:5000/res/${id}`, {
          method: "DELETE"
        });
  
        setTopics(topics.filter(topic => topic.topic_id !== id));
      } catch (err) {
        console.error(err.message);
      }
    };
  
    const getTopics = async () => {
      try {
        const response = await fetch("http://localhost:5000/res");
        const jsonData = await response.json();
  
        setTopics(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    };
  
    useEffect(() => {
      getTopics();
    }, []);
  
    console.log(topics);
  
    return (
        <div className="tdlist" class="tdlist">
        <h2>Topics</h2>
        <table id={"tdl"} className="tdl" class="tdl">
        <colgroup>
            <col style={{width:"14%"}}/>
              <col style={{width:"8%"}}/>
              <col style={{width:"4%"}}/>
            <col style={{width:"2%"}}/>
            <col style={{width:"2%"}}/>
            </colgroup>
          <thead>
            <tr style={{borderColor: "black"}}>
              <th>Topic</th>
              <th>Subject</th>
              <th>Project</th>
              <th>Complete</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/*<tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr> */}
            {topics.map(topic => (
              <tr key={topic.topic_id}  style={{borderColor: "black"}}>
                <td>{topic.topic}</td>
                <td>{topic.subj}</td>
                <td>{topic.project}</td>
                <td>
                  <button
                     className={"buttonX"} 
                    onClick={() => completeTopic(topic.topic_id)}
                  >
                    &#x2714;
                  </button>
                  </td>
                
                <td>
                  <button
                     className={"buttonX"} 
                    onClick={() => deleteTopic(topic.topic_id)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    );
  };
  
  export default TableResearch;