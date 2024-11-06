import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditSkill({dataLink, previousSkill}) {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const [targetAudience, setTargetAudience] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [resources, setResources] = useState({});

    const {skillId} = useParams();

    useEffect( () => {
        axios.get(`${dataLink}/${skillId}.json`)
            .then( response => {
                setName(response.data.name);
                setDescription(response.data.description);
                setTargetAudience(response.data.targetAudience);
                setImageURL(response.data.imageURL);
                setResources(response.data.resources);
            })
            .catch((error) => 
                console.log("Error getting project details from the API...", error));
    }, [skillId]);


    const handleFormSubmit = (e) => {
        e.preventDefault();

        const editedSkill = {
            name: name,
            description: description,
            targetAudience: targetAudience,
            imageURL: imageURL,
            resources: resources,
        }


        axios.put(`${dataLink}/${skillId}.json`, editedSkill)
            .then( response => {
                console.log(response)
            })
            .catch(e => console.log("Error updating project...", e));

    }


    return (

        <div className="EditSkill">

            <h3>Edit this Skill</h3>

            <form onSubmit={handleFormSubmit} className="form" >

                <label>
                    Name of the skill:
                    <input
                        type="text"
                        name="title"
                        placeholder={previousSkill.name}
                        required
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>

                <label>
                    Target Audience:
                    <textarea
                        name="targetAudience"
                        placeholder={previousSkill.targetAudience}
                        value={targetAudience}
                        onChange={(e) => { setTargetAudience(e.target.value) }}
                    />
                </label>


                <label>
                    Description:
                    <textarea
                        name="description"
                        placeholder={previousSkill.description}
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    />
                </label>

                
                <label>
                    Image URL:
                    <textarea
                        name="imageURL"
                        placeholder={previousSkill.imageURL}
                        value={imageURL}
                        onChange={(e) => { setImageURL(e.target.value) }}
                    />
                </label>

                <label>
                    Resources:
                    <textarea
                        name="resources"
                        placeholder={previousSkill.resources}
                        value={resources}
                        onChange={(e) => { setResources(e.target.value) }}
                    />
                </label>

                <button>Edit</button>
            </form>

        </div>
    );
}

export default EditSkill;