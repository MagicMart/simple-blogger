import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Nav from "./Nav";

function App() {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/" component={Home} />
                    <Route render={() => <h1>Page not Found</h1>} />
                </Switch>
            </div>
        </Router>
    );
}
export default App;
