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
            <div className="d-flex flex-column align-items-center 100vh "
                style={{
                    width: "90vw",
                    marginLeft: "10vw",
                    background: "linear-gradient(to right, #FFFFFF, #FAF9F6)"
                }}>
                {skills === null
                    ? <h2>Loading...</h2>
                    : <h2 className="m-5"
                        style={{ fontWeight: "bold" }}> {skills.length} Skills To Explore</h2>}


                <div className=" d-flex flex-row flex-wrap justify-content-center align-items-center">

                    {skills && skills.map((skillDetails) => {
                        return (
                            <div >
                                <div key={skillDetails.id} className="card justify-content-center align-items-center mx-3 shadow rounded mb-3"
                                    style={{
                                        width: "400px",
                                        height: "500px",
                                        backgroundColor: "#E2EBF5"
                                    }}>

                                    <button
                                        className="btn btn-link position-absolute"
                                        style={{
                                            top: "10px",
                                            right: "10px",
                                            zIndex: "10",
                                            color: "black"
                                        }}
                                        onClick={() => deleteSkill(skillDetails.id)}>
                                        <i className="bi bi-x-square"></i>
                                    </button>


                                    <NavLink to={`skills/${skillDetails.id}`}>

                                        <img src={skillDetails.imageURL} className="card-img-top" alt="skill image" />
                                        <h3 className="card-title"
                                            style={{ color: "black" }}>
                                            {skillDetails.name}</h3>
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