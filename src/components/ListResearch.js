import React, { Fragment, useEffect, useState } from "react";
import '../styling/component.css';


const FilterResList = () => {
    const [topics, setTopics] = useState([]);
    const [search, setSearch] = useState("");

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
        <Fragment>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="search"
          />
        <div>
      {topics.filter(topic => topic.subj == search).map(filteredTopic => (
        <li>
          {filteredTopic.project}
        </li>
      ))}
    </div>
        </Fragment>
        )

};


export default FilterResList;