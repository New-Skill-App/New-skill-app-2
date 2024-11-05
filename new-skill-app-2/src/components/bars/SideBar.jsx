import { NavLink } from "react-router-dom";

function SideBar() {
  return (

<<<<<<< HEAD
      <NavLink to="/about-page">
        <button className="">About Page</button>
      </NavLink>
    </aside>
=======
    <div>

      <aside className="nav flex-column nav-underline position-fixed vh-100"  style={{ width: "100px", top: "100px", left: "20px" }}>
        
        <NavLink to="/">
          <a className="text-sm-center nav-link">Home</a>
        </NavLink>

        <NavLink to="/AboutPage">
          <a className="text-sm-center nav-link">About Page</a>
        </NavLink>
      </aside>

    </div>
>>>>>>> origin/main
  );
};

export default SideBar;