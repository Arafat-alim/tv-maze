import React from "react";
// import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import "./navbar.css";

function NavBar() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <nav>
      <img src={logo2} alt="logo" className="logo" />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Here..." />
      </form>
    </nav>
  );
}

export default NavBar;
