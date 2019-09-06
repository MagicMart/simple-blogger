import React from "react";
import {Link} from "react-router-dom";
import avatar from "../assets/boxerdog.jpg";

function GoBack(props) {
    return props.location.pathname !== "/" ? "<" : null;
}

function Nav(props) {
    return (
        <React.Fragment>
            <header className="header">
                <img
                    className="avatar"
                    src={avatar}
                    width="50px"
                    height="50px"
                    alt="avatar"
                />

                <Link to="/">
                    <h1 className="simple-blogger">
                        <GoBack {...props} />
                        Simple Blogger
                    </h1>
                </Link>
            </header>
        </React.Fragment>
    );
}

export default Nav;
