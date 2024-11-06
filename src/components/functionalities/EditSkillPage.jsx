import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditSkillPage({ dataLink }) {
    const { skillId } = useParams();
    const navigate = useNavigate();

    const [skill, setSkill] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [targetAudience, setTargetAudience] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [resources, setResources] = useState("");

    useEffect(() => {
        axios.get(`${dataLink}/${skillId}.json`)
            .then(response => {
                setSkill(response.data);
                setName(response.data.name);
                setDescription(response.data.description);
                setTargetAudience(response.data.targetAudience);
                setImageURL(response.data.imageURL);
                setResources(response.data.resources.join(", "));
            })
            .catch(e => console.log("Error fetching skill details.", e));
    }, [skillId, dataLink]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedSkill = {
            name: name,
            description: description,
            targetAudience: targetAudience,
            imageURL: imageURL,
            resources: resources.split(",").map(resource => resource.trim()),
        };

        axios.put(`${dataLink}/${skillId}.json`, updatedSkill)
            .then(response => {
                console.log("Skill updated successfully!", response);
                navigate(`/visual-arts-page/skills/${skillId}`);
            })
            .catch(e => console.log("Error updating skill.", e));
    };

    if (!skill) return <h3>Loading...</h3>;

    return (
        <div className="skill-details-container">

            <div className="skill-details-card">

                <div className="skill-image-title-container">
                    <h2 className="skill-title">
                        Edit Skill:</h2>

                    {imageURL && <img src={imageURL} alt={name} className="skill-image" />}
                </div>

                <div className="skill-info-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label> Skill Name:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Description:</label>
                            <textarea
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Target Audience:</label>
                            <textarea
                                value={targetAudience}
                                onChange={(e) => setTargetAudience(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Image URL:</label>
                            <textarea
                                value={imageURL}
                                onChange={(e) => setImageURL(e.target.value)}
                                className="form-control"
                            />
                        </div>

                        <div className="form-group">
                            <label>Resources (comma separated):</label>
                            <textarea
                                value={resources}
                                onChange={(e) => setResources(e.target.value)}
                                className="form-control"
                            />
                        </div>
                        <div className="save-btn-container">
                            <button type="submit" className="btn btn-primary m-2">Save Changes</button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}


export default EditSkillPage;