import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";


function CreateSkill({dataLink}) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const [targetAudience, setTargetAudience] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [resources, setResources] = useState({});
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newSkill = {
            name: name,
            description: description,
            targetAudience: targetAudience,
            imageURL: imageURL,
            resources: resources,
        }

        axios.post(`${dataLink}/`,newSkill)
            .then( response => {
                console.log(response)
            })
            .catch(e => 
                console.log("Error creating a new skill...", e));
    }

    return (
        <div className="createSkill">
            <h3>Add Skill</h3>
            
            <p>
                Choose the category for the new skill:
                <div>
                    <input type="checkbox" id="visualArts" name="visualArts" />
                    <label for="visualArts">Visual Arts</label>
                </div>
            </p>

            <form onSubmit={handleSubmit} className="form">

                <label>
                    Name of the skill:
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="enter the name of the skill" 
                        required
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>

                <label>
                    Description: 
                    <textarea 
                        name="description" 
                        placeholder="enter the description" 
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </label>

                <label>
                    Target Audience: 
                    <textarea 
                        name="targetAudience" 
                        placeholder="enter the target audience" 
                        value={targetAudience}
                        onChange={(e) => { setTargetAudience(e.target.value) }}
                    />
                </label>

                <label>
                    Image URL: 
                    <textarea 
                        name="imageURL" 
                        placeholder="enter the URL to an image related to the new skill" 
                        value={imageURL}
                        onChange={(e) => { setImageURL(e.target.value) }}
                    />
                </label>

                <label>
                    Resources: 
                    <textarea 
                        name="resources" 
                        placeholder="enter some possible resources to improve this skill" 
                        value={resources}
                        onChange={(e) => { setResources(e.target.value) }}
                    />
                </label>

                <button>Create</button>
                <Link to="/" className="btn btn-primary"><button>Back</button></Link>
            </form>
        </div>
    );
}

export default CreateSkill;