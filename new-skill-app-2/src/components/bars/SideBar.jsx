import { Link, NavLink } from "react-router-dom";

function SideBar() {
  return (

    <div>

      <aside className="nav flex-column nav-underline position-fixed vh-100"  style={{ width: "100px", top: "100px", left: "20px" }}>
        
        <NavLink to="/">
          <a className="text-sm-center nav-link">Home</a>
        </NavLink>

        <NavLink to="/about-page">
          <a className="text-sm-center nav-link">About Page</a>
        </NavLink>

        <Link to="/skills/create"><a>Add Skill</a></Link>
      </aside>

    </div>
  );
};

export default SideBar;