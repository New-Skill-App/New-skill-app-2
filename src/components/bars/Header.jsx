import logo from "/images/logo.png"

function Header() {

  return (
    <div className="header-container">

      <img src="images/logo.png" className="logo"  alt="SkillBox Logo" />

      <p className="header-title">{`SkillBox`}</p>


    </div>
  );
};

export default Header;