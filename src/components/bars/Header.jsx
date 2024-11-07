function Header() {

  return (
    <div className="header-container flex-row position-relative">
      <div className="search-bar">
      <i class="bi bi-search"></i> 
        <input type="search" placeholder="Type to search..." />
      </div>
    </div>

  );
};

export default Header;