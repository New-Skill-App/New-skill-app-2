import { NavLink } from "react-router-dom"
import logoHomePage from "/images/logoHomePage.png";

function HomePage() {
    return (
        <div className="Main full-screen-container d-flex flex-column align-items-center">

            <div className=" d-flex flex-column align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                    <img className="home-page-img" src={logoHomePage} alt="Logo" />
                </div>


                <div className="text-container">
                    <div className="slogan d-flex justify-content-center align-items-center">
                        <h2 className="text-center">UNLOCK YOUR POTENTIAL</h2>
                    </div>

                    <div className="slogan d-flex justify-content-center align-items-center">
                        <h2 className="text-center">Discover and master new skills</h2>
                    </div>

                    <div className="slogan d-flex justify-content-center align-items-center">
                        <h3 className="text-center">Here you can connect to top schools, courses, and resources for learning and growth</h3>
                    </div>
                </div>
            </div >


            <div className="Main card-container">
                <NavLink to="/visual-arts-page">
                    <div
                        className=" card card-1">
                        <h2>Visual Arts</h2>
                    </div>
                </NavLink>

                <NavLink to="/sports-page">
                    <div
                        className="card card-2">
                        <h2>Sports</h2>
                    </div>
                </NavLink>


                <NavLink to="/music-page">
                    <div
                        className="card card-3">
                        <h2>Music</h2>
                    </div>
                </NavLink>

                {/* <div
                    className="card card-2">
                    <h2>Data Analyzation</h2>
                </div>

                <div
                    className="card card-1">
                    <h2>Coding</h2>
                </div>


                <div
                    className="card card-3">
                    <h2>Languages</h2>
                </div> */}

            </div >
        </div >
    )
}
export default HomePage