function Header() {

  return (
    <div className="navBar">
      
      <div className="search-bar">
        Search 
        <input type="search" />
      </div>

      <div className="header-container">
        <img src="images/logo.png" className="logo" alt="SkillBox Logo" />
        <p className="header-title">{`SkillBox`}</p>
      </div>
    </div>

  );
};

export default Header;