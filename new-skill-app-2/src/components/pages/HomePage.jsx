import { Link, NavLink } from "react-router-dom"

function HomePage() {
    return (
        <div
            className="d-flex flex-column align-items-center 100vh "
            style={{
                width: "90vw",
                marginLeft: "10vw",
                background: "linear-gradient(to right, #FFFFFF, #FAF9F6)"
            }}
        >

            <div className=" d-flex flex-column align-items-center">
                <h1
                    className="m-5"
                    style={{
                        fontSize: "80px",
                        fontWeight: "bold",
                        textShadow: "2px 2px 2px #000000", 
                        letterSpacing: "2px"
                    }}>
                    New Skill
                </h1>


                <div className="d-flex justify-content-center align-items-center">
                    <p className="text-center">Pequena explicação catchy</p>
                </div>
            </div>

            <h2 className="m-5">Categories</h2>


            <div className=" d-flex flex-row justify-content-center align-items-center">
                <NavLink to="/visual-arts-page">

                    <div
                        className="card justify-content-center align-items-center mx-3 shadow rounded mb-3" style={{
                            width: "400px",
                            height: "300px",
                            backgroundColor: "#E2EBF5"
                        }}>
                        <h3>Category 1 (Visual Arts)</h3>
                    </div>
                </NavLink>

                <div
                    className="card justify-content-center align-items-center mx-3 shadow rounded mb-3"
                    style={{
                        width: "400px",
                        height: "300px",
                        backgroundColor: "#C5D3E8"
                    }}>
                    <h3>Category 2</h3>
                </div>

                <div
                    className="card justify-content-center align-items-center mx-3 shadow rounded mb-3"
                    style={{
                        width: "400px",
                        height: "300px",
                        backgroundColor: "#A1B6D2"
                    }}>
                    <h3>Category 3</h3>
                </div>
            </div>
        </div >
    )
}
export default HomePage