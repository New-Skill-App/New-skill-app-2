import { Link, NavLink } from "react-router-dom";

function SideBar() {
  return (

    <aside
      className="nav flex-column nav-underline position-fixed vh-100 shadow-lg"
      style={{
        width: "10vw",
        top: "0px",
        left: "0px",
        background: "linear-gradient(to right, #FFFF, #A6AEBF)"
      }}
    >

      <div
        className="d-flex flex-column"
        style={{ paddingTop: "100px", marginLeft: "1vw" }}
      >
        <NavLink to="/">
          <a className="nav-link py-3" style={{ color: "black" }}>
            <i class="bi bi-house-door" style={{ margin: "8px" }}></i>
            Home</a>
        </NavLink>

        <NavLink to="/about-page">
          <a className="nav-link py-3" style={{ color: "black" }}>
            <i class="bi bi-file-earmark-person" style={{ margin: "8px" }}></i>
            About</a>
        </NavLink>

        <NavLink to="/skills/create">
          <a className="nav-link py-3" style={{ color: "black" }}>
            <i class="bi bi-file-earmark-plus" style={{ margin: "8px" }}></i>
            Add Skill</a>
        </NavLink>

        <NavLink to="/">
          <a className="nav-link py-3" style={{ color: "black" }}>
            <i class="bi bi-house-door" style={{ margin: "8px" }}></i>
            Categories</a>
        </NavLink>
      </div>
    </aside>
  );
};

export default SideBar;