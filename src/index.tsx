import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    HashRouter,
    Route,
} from "react-router-dom";

import MainPage from "./mainPage";
import MakeSong from "./makeSong";

import "../src/index.scss";

ReactDOM.render(
    <HashRouter>
        <div>
            <Route exact path="/" component={MainPage}/>
            <Route path="/start" component={MakeSong}/>
        </div>
    </HashRouter>,
    document.getElementById("root")
);
