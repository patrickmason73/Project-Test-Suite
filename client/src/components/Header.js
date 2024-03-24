import React from "react";
import { NavLink } from 'react-router-dom';


function Header() {


    return (
  
            <div className="head">
                <nav>
                    <NavLink to="/"
                    className="button-header"
                    >
                     Home   
                    </NavLink>
                    <NavLink to="/menu"
                    className="button-header"
                    >
                     Menu   
                    </NavLink>
                    <NavLink to="/contact"
                    className="button-header"
                    >
                     Contact Us   
                    </NavLink>
                </nav>
            </div>
    )
}


export default Header;