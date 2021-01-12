import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import GuideDetail from "./GuideDetail";
import Home from "./Home";
import Series from "./Series";
import SeriesDetail from "./SeriesDetail";

class Content extends Component {
    render() {
        return (
            <div className="p-vertical-xl">
                <Switch>
                    <Route path="/series/:name/:guide"><GuideDetail /></Route>
                    <Route path="/series/:name"><SeriesDetail /></Route>
                    <Route path="/series"><Series /></Route>
                    <Route path="/guides"><Guides /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </div>
        );
    }
}

function Guides() {
    return <div>Guides</div>
}

export default Content;