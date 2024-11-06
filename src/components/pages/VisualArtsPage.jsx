import { Link } from "react-router-dom";
import SkillsList from "./SkillsList";

function VisualArtsPage() {
    const dataLink = "https://skills-visual-arts-default-rtdb.europe-west1.firebasedatabase.app/skills";

    return (
        
        <div>
            <h1>Visual Art skills:</h1>
            <SkillsList dataLink={dataLink} />
        </div>
    );
}

export default VisualArtsPage;