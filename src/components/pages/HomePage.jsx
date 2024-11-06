import { Link, NavLink } from "react-router-dom"

function HomePage() {
    return (
        <div className="full-screen-container d-flex flex-column align-items-center 100vh position-fixed">

            <div className=" d-flex flex-column align-items-center">
                <h1 className="m-5 project-title">
                    SkillBox
                </h1>


                <div className="d-flex justify-content-center align-items-center">
                    <p className="text-center">Pequena explicação catchy</p>
                </div>
            </div>

            <h2 className="m-5">Categories</h2>


            <div className="card-container">
                <NavLink to="/visual-arts-page">

                    <div
                        className=" card card-1">
                        <h3>Category 1 (Visual Arts)</h3>
                    </div>
                </NavLink>

                <div
                    className="card card-2">
                    <h3>Category 2</h3>
                </div>

                <div
                    className="card card-3">
                    <h3>Category 3</h3>
                </div>
            </div>
        </div >
    )
}
export default HomePage