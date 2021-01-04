import React, { useEffect, useState } from "react";
import '../styling/component.css';
import '../styling/compstyles.scss';


const FilterResearch = () => {
    const [topics, setTopics] = useState([]);
    const [search, setSearch] = useState("");

    const getTopics = async () => {
        try {
          const response = await fetch("https://toflu.herokuapp.com/res");
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
        <div className="search" class="search">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by Subject"
          />
          <hr/>
        
      {topics.filter(topic => topic.subj == search).map(filteredTopic => (
        <li>
          {filteredTopic.project}
        </li>
      ))}
    
        </div>
        )

};


export default FilterResearch;