
import { Route, Routes } from "react-router-dom";
import SkillsList from "../functionalities/SkillsList";
import SkillDetailsPage from "./SkillDetailsPage";

function VisualArtsPage() {

    const dataLink = "https://skills-visual-arts-default-rtdb.europe-west1.firebasedatabase.app/skills"

    return (
        <div>
            <h1>Visual Art skills:</h1>
            <SkillsList dataLink={dataLink}/>

            <Routes>
                <Route path="skills/:skillId" element={<SkillDetailsPage dataLink={dataLink} />} />
            </Routes>
        </div>
    )
}

export default VisualArtsPage;