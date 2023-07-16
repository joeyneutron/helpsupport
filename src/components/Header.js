
import React from "react";
import header from "../images/faqheader.png";
import '../css/index.css'
function Header(){
  return (
    <React.Fragment>
      <div className = "head">
        <img src={header} alt="cspimage" />
      </div>
    </React.Fragment>
  );
}

export default Header;
