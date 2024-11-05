import axios from "axios"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function SkillsList(props) {

    const [skills, setSkills] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${props.dataLink}.json`)
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
    }, [props.dataLink]);

    if(error){
        return (
            <h2>{error}</h2>
        )
    }

    return (
        <>
            {skills === null
                ? <h2>Loading...</h2>
                : <h2>{skills.length} skills to explore</h2>
            }

            {skills && skills.map((skillDetails) => {
                return (
                    <NavLink key={skillDetails.id} to={`skills/${skillDetails.id}`}>
                        <div className="box">
                            <button>x</button>
                            <h3>{skillDetails.name}</h3>
                            <img src={skillDetails.imageURL} alt="skill image" />
                        </div>
                    </NavLink>
                );
            })}
        </>
    );
}

export default SkillsList;