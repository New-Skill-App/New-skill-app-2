function Header() {

  return (
    <div className="d-flex flex-row position-fixed align-items-center" style={{ width: "100vw", top: "20px", marginLeft: "1vw"}}>

      <img src="images/logo.png" className="logo" style={{ width: "40px", height:"auto"}} />

      <h5 className="text-center  m-1">{`NewSkill`}</h5>


    </div>
  );
};

export default Header;