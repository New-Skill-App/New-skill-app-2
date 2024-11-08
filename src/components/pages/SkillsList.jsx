import axios from "axios"
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


function SkillsList({ dataLink }) {

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
    }, [{ dataLink }]);

    if (error) {
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
            <div className="skills-list-container d-flex flex-column align-items-center 100vh">
                {skills === null
                    ? <h2 className="loading-message">Loading...</h2>
                    : <h2 className="skills-title">
                        <h2 className="num-skills">{skills.length}</h2>
                        Skills To Explore</h2>}


                <div className="d-flex flex-row flex-wrap justify-content-center align-items-center">

                    {skills && skills.toReversed().map((skillDetails) => {
                        return (
                            <div >
                                <div key={skillDetails.id} className="skill-card">

                                    <button
                                        className="btn btn-link delete-btn"
                                        onClick={() => deleteSkill(skillDetails.id)}>
                                        <i class="bi bi-trash"></i>
                                    </button>


                                    <NavLink to={`skills/${skillDetails.id}`}>
                                        <div className="card-img-container">
                                            <img
                                                src={skillDetails.imageURL}
                                                className="card-img"
                                                alt="skill image" />
                                        </div>
                                        <h3 className="card-title">{skillDetails.name}</h3>
                                    </NavLink>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default SkillsList;