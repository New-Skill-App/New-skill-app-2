import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function SkillDetailsPage({ dataLink }) {
    const { skillId } = useParams();
    const [skill, setSkill] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (dataLink && skillId) {
            const skillUrl = `${dataLink}/${skillId}.json`;
            console.log(`Fetching URL: ${skillUrl}`); // Debug log

            axios.get(skillUrl)
                .then(response => {
                    setSkill(response.data);
                    setLoading(false);
                })
                .catch(e => {
                    setError("Error fetching skill details. Please try again.");
                    setLoading(false); // Ensure loading is stopped
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
        <div className='SkillDetails card'>
            {skill.imageURL && <img src={skill.imageURL} alt={skill.name} />}
            <h2>{skill.name}</h2>
            <h3>Target Audience: {skill.targetAudience}</h3>
            <p>Description: {skill.description}</p>
            {skill.resources && (
                <p>Resources to improve this skill: {skill.resources.join(", ")}</p>
            )}
            <p>
                <Link to="/" className="btn btn-primary">Back</Link>
            </p>
        </div>
    );
}

export default SkillDetailsPage;