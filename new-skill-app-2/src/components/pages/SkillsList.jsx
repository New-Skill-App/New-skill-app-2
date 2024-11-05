import axios from "axios"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function SkillsList({dataLink}) {

    const [skills, setSkills] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${dataLink}.json`)
            .then((response) => {

                const arr = []
                for (const id in response.data) {
                    arr.push({ id: id, ...response.data[id] })
                }
                console.log(arr);

                setSkills(arr);
            })
            .catch(e => {
                setError("Error getting skills from the API... Please, try again later.")
                console.log(e);
            });
    }, [{dataLink}]);

    if(error){
        return (
            <h2>{error}</h2>
        )
    }


    const deleteSkill = (skillId) => {
        axios.delete(`${dataLink}/${skillId}.json`)
            .then((response) => {
                setSkills((prevSkills) => prevSkills.filter((skill) => skill.id !== skillId));
            })
            .catch(e => {
                console.log("Error deleting skill...", e);
            });
    };

    return (
        <>
            {skills === null
                ? <h2>Loading...</h2>
                : <h2>{skills.length} skills to explore</h2>
            }

            {skills && skills.map((skillDetails) => {
                return (
                        <div key={skillDetails.id} className="box">
                            <button onClick={() => deleteSkill(skillDetails.id)}>x</button>
                            <NavLink to={`skills/${skillDetails.id}`}>
                                <h3>{skillDetails.name}</h3>
                                <img src={skillDetails.imageURL} alt="skill image" />
                            </NavLink>
                        </div>
                    );
            })}
        </>
    );
}

export default SkillsList;