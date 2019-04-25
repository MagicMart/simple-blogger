import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/">
                <h1 className="simple-blogger">Simple Blogger</h1>
            </Link>
        </nav>
    );
}

export default Nav;
