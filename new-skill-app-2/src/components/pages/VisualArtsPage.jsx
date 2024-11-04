import SkillsList from "../functionalities/SkillsList"


function VisualArtsPage() {
    return (
        <div>
            <h1>Visual Art skills:</h1>
            <SkillsList dataLink="https://skills-visual-arts-default-rtdb.europe-west1.firebasedatabase.app/skills.json"/>
        </div>
    )
}

export default VisualArtsPage;