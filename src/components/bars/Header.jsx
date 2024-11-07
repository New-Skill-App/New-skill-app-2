function Header() {

  return (
    <div className="header-container nav flex-row nav-underline position-fixed vh-100 shadow-lg">
      <div className="search-bar">
        Search 
        <input type="search" />
      </div>
    </div>

  );
};

export default Header;