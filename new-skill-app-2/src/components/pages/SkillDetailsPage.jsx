import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function SkillDetailsPage({ dataLink, basePath }) {
    const { skillId } = useParams();
    const [skill, setSkill] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (dataLink && skillId) {
            const skillUrl = `${dataLink}/${skillId}.json`;

            axios.get(skillUrl)
                .then(response => {
                    setSkill(response.data);
                    setLoading(false);
                })
                .catch(e => {
                    setError("Error fetching skill details. Please try again.");
                    setLoading(false);
                    console.log(e);
                });
        }
    }, [skillId, dataLink]);

    if (loading) {
        return <h2>Loading skill details...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    if (!skill) {
        return <h2>Skill not found</h2>;
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center 100vh "
                style={{
                    width: "90vw",
                    marginLeft: "10vw",
                    background: "linear-gradient(to right, #FFFFFF, #FAF9F6)"
                }}>


                <div className="d-flex flex-row flex-wrap justify-content-center align-items-center"
                    style={{
                        width: "70vw",
                        height: "auto",
                        backgroundColor: "#E2EBF5"
                    }}>

                    <div className="d-flex flex-column align-items-center"
                        style={{
                            width: "40%",
                            height: "100%"
                        }}>
                        <h2>{skill.name}</h2>
                        {skill.imageURL && <img src={skill.imageURL} alt={skill.name} />}
                    </div>

                    <div className="d-flex flex-column justify-content-left"
                        style={{
                            width: "40%",
                            height: "100%"
                        }}>
                        <h5>Target Audience: </h5> <p>{skill.targetAudience}</p>

                        <h5>Description:</h5> <p>{skill.description}</p>

                        {skill.resources && (
                            <>
                                <h5>Resources to improve this skill:</h5>
                                <p>{skill.resources.join(", ")}</p>
                            </>
                        )}
                        <div className="d-flex justify-content-end">
                            <NavLink>
                                <button className="btn btn-primary m-2">Edit</button>
                            </NavLink>
                        </div>

                    </div>
                </div>
                <div>
                    <NavLink to={basePath}>
                        <button className="btn btn-secondary m-3">Back</button>
                    </NavLink>
                </div>
            </div>

        </>
    );
}

export default SkillDetailsPage;