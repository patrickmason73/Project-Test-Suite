import React from "react";
import { NavLink } from 'react-router-dom';


function Header() {


    return (
  
            <div className="head">
                <nav>
                    <NavLink to="/"
                    className="nav-button"
                    >
                     Home   
                    </NavLink>
                </nav>
            </div>
    )
}


export default Header;