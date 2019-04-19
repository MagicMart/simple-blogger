// @ts-check
import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";

function Users() {
    return <h2>Users</h2>;
}

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route path="/" component={Home} />
                    <Route render={() => <h1>Page not Found</h1>} />
                </Switch>
            </div>
        </Router>
    );
}
export default App;
