import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to={"/contacts"}>Contacts</NavLink>
      <NavLink to={"/add"}>Add</NavLink>
      <NavLink to={"/edit"}>Edit</NavLink>
    </nav>
  );
};

export default Navbar;
