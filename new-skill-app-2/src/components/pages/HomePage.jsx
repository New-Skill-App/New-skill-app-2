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

            <div className="d-flex flex-row justify-content-center align-items-center vw-100">

                <NavLink to="/visual-arts-page">

                    <div className="card justify-content-center align-items-center mx-3" style={{ width: "400px", height: "300px" }}>

                        <h3>Category 1 (Visual Arts)</h3>

                    </div>
                </NavLink>

                <div className="card justify-content-center align-items-center mx-3" style={{ width: "400px", height: "300px" }}>
                    <h3>Category 2</h3>

                </div>

                <div className="card justify-content-center align-items-center mx-3" style={{ width: "400px", height: "300px" }}>
                    <h3>Category 3</h3>
                </div>
                
            </div>

        </div >
    )
}

export default HomePage