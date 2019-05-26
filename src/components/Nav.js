import React from "react";
import {Link} from "react-router-dom";

function GoBack(props) {
    return props.location.pathname !== "/" ? "<" : null;
}

function Nav(props) {
    return (
        <nav>
            <Link to="/">
                <h1 className="simple-blogger">
                    <GoBack {...props} />
                    Simple Blogger
                </h1>
            </Link>
        </nav>
    );
}

export default Nav;
