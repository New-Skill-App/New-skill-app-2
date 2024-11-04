import { NavLink } from "react-router-dom"

function HomePage(){
    return(
        <div>
            <h1>New Skill</h1>
            <p>Pequena explicação catchy</p>

            <h2>Categories</h2>
            <NavLink to="/VisualArtsPage">
                <div className="card">Category 1 (Visual Arts)</div>
            </NavLink>
            
            <div className="card">Category 2</div>
            <div className="card">Category 3</div>

        </div>
    )
}

export default HomePage