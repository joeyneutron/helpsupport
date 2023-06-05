import React, { useEffect, useState } from "react";
import "../css/App.css";
import logo from "../images/logo.png";

function Header() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const header = document.querySelector(".header");
      const headerHeight = header.offsetHeight;

      if (scrollPosition >= headerHeight) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isHeaderSticky ? "sticky" : ""}`}>
      <img className="headerImg" src={logo} alt="Logo" />
      <div className="title">
        <h1>How Can We Help?</h1>
      </div>
    </div>
  );
}

export default Header;
