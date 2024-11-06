import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";


function EditSkillPage({ dataLink }) {
    const { skillId } = useParams();
    const navigate = useNavigate();

    const [skill, setSkill] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [targetAudience, setTargetAudience] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [resources, setResources] = useState([{ type: "", name: "", url: "" }]);

    useEffect(() => {
        axios.get(`${dataLink}/${skillId}.json`)
            .then(response => {
                setSkill(response.data);
                setName(response.data.name);
                setDescription(response.data.description);
                setTargetAudience(response.data.targetAudience);
                setImageURL(response.data.imageURL);
                
                if (Array.isArray(response.data.resources)) {
                    setResources(response.data.resources);
                } else {
                    setResources([{ type: "", name: "", url: "" }]);
                }
            })
            .catch(e => console.log("Error fetching skill details.", e));
    }, [skillId, dataLink]);


    const handleResourceChange = (index, field, value) => {
        const newResources = [...resources];
        newResources[index][field] = value;
        setResources(newResources);
    };

    const addResource = () => {
        setResources([...resources, { type: "", name: "", url: "" }]);
    };


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
                            <label>Resources:</label>
                            {resources.map((resource, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        type="text"
                                        placeholder="Type"
                                        value={resource.type}
                                        onChange={(e) => handleResourceChange(index, 'type', e.target.value)}
                                        className="form-control mb-1"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={resource.name}
                                        onChange={(e) => handleResourceChange(index, 'name', e.target.value)}
                                        className="form-control mb-1"
                                    />
                                    <input
                                        type="url"
                                        placeholder="URL"
                                        value={resource.url}
                                        onChange={(e) => handleResourceChange(index, 'url', e.target.value)}
                                        className="form-control mb-1"
                                    />
                                </div>
                            ))}
                            <button type="button" onClick={addResource} className="btn btn-secondary mt-2">
                                Add Resource
                            </button>
                        </div>

                        <div className="save-btn-container">
                            <button type="submit" className="btn btn-primary m-2">Save Changes</button>
                        </div>
                        
                        <NavLink to={`/visual-arts-page/skills/${skillId}`} className="btn btn-secondary">Back</NavLink>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default EditSkillPage;