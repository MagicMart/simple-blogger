import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";

function App() {
    return (
        <Router>
            <div className="container">
                <Route path="/" component={Home} />
            </div>
        </Router>
    );
}
export default App;
