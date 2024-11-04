import { NavLink } from "react-router-dom"

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



            <div className="card">Category 2</div>
            <div className="card">Category 3</div>

        </div >
    )
}

export default HomePage