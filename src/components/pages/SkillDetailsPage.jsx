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
        return <div className="skill-details-container"><h2 className="loading-message">Loading skill details...</h2></div>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    if (!skill) {
        return <h2>Skill not found</h2>;
    }

    return (
        <>
            <div className="Main skill-details-container">

                <div className="skill-details-card">

                    <div className="skill-image-title-container">
                        <h2 className="skill-title">{skill.name}</h2>

                        {skill.imageURL && <img src={skill.imageURL} alt={skill.name} className="skill-image" />}
                    </div>

                    <div className="skill-info-container">
                        <h5>Target Audience: </h5> 
                        <p className="skill-info">{skill.targetAudience}</p>

                        <h5>Description:</h5> 
                        <p className="skill-info">{skill.description}</p>

                        {skill.resources && (
                            <>
                                <h5>Resources to improve this skill:</h5>
                                <ul className="skill-info">
                                    {skill.resources.map((resource, index) => (
                                        <li key={index}>
                                            <strong>{resource.type}: </strong> 
                                            <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.name}</a>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                        <div className="d-flex justify-content-center">
                            <Link to={`${basePath}/skills/${skillId}/edit`}>
                            <div className="edit-btn-container">
                                <button className="edit-btn btn btn-dark btn-lg m-2">Edit</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    <NavLink to={basePath}>
                        <button className="back-btn btn btn-secondary btn-sm">Back</button>
                    </NavLink>

                </div>

            </div>

        </>
    );
}

export default SkillDetailsPage;