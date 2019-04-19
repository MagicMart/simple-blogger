// @ts-check
import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul className="row nav">
                <li>
                    <NavLink className="title" exact to="/">
                        <h1>Simple Blogger</h1>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
