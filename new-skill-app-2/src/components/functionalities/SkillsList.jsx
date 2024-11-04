import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SkillsList(props){

    const [skill, setSkill] = useState(null);

    useEffect(() => {
        axios.get(props.dataLink)
            .then( (response) => {
               
                const arr = []
                for(const id in response.data){
                    arr.push({id: id, ...response.data[id]})
                }
               console.log(arr);
               
                setSkill(arr);
            })
            .catch( e => {
                console.log("Error getting skills from the API...");
                console.log(e);  
            } );
    }, []);

    return (
        <>
            { skill === null 
                ? <h2>Loading...</h2> 
                : <h2>{skill.length} skills to explore</h2>  
            }

            { skill &&  skill.map( (skillDetails, index) => {
                return (
                    <div key={index} className="box">
                        <button >x</button>
                        <h3>{skillDetails.name}</h3>
                        <img src={skillDetails.imageURL} alt="skill image"/>
                        <Link to={`/skills/visual-arts/${skillDetails.id}`}>More Details</Link>
                    </div>
                );
            } )}
        </>
    );
}

export default SkillsList;