import { Link, NavLink } from "react-router-dom"

function HomePage() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vw-100">

            <div className="d-flex flex-column justify-content-center align-items-center vw-100">
                <div className="text-center">
                    <h1>New Skill</h1>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center vw-100">
                    <p className="text-center">Pequena explicação catchy</p>
                </div>
            </div>

            <h2>Categories</h2>
            <NavLink to="/visual-arts-page">
                <div className="card">Category 1 (Visual Arts)</div>
            </NavLink>
            
            <div className="card">Category 2</div>
            <div className="card">Category 3</div>

        </div >
    )
}

export default HomePage