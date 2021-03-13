import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import GuideDetail from "./GuideDetail";
import Home from "./Home";
import Series from "./Series";
import SeriesDetail from "./SeriesDetail";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import GuidesPage from "./GuidesPage";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#1f2937"
        }
    }
});

class Content extends Component {
    render() {
        return (
            <div className="p-vertical-xl">
                <ThemeProvider theme={theme}>
                    <Switch>
                        <Route path="/series/:name/:guide"><GuideDetail /></Route>
                        <Route path="/series/:name"><SeriesDetail /></Route>
                        <Route path="/series"><Series /></Route>
                        <Route path="/guides/:guide"><GuideDetail /></Route>
                        <Route path="/guides"><GuidesPage /></Route>
                        <Route path="/"><Home /></Route>
                    </Switch>
                </ThemeProvider>
            </div>
        );
    }
}

export default Content;