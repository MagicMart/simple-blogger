import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <div>
                <NavLink to="/">
                    <h1 className="simple-blogger">Simple Blogger</h1>
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;
