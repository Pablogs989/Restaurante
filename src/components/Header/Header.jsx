import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <span>Header</span>
      <nav>
        <span><Link to="/">Home</Link> </span>
        <span><Link to="/Reserve">Reservas</Link> </span>
        <span><Link to="/Menu">Menu</Link> </span>
      </nav>
    </div>
  );
};

export default Header;