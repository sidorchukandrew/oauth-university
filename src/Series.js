import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SeriesCard from "./components/SeriesCard";

class Series extends Component {

    constructor(props) {
        super(props);
        this.state = {
            socialSeries: {
                shortDescription: "Learn how to include social sites like Google and Facebook as ways to login "
               + "on your sites with OAuth. People won't have to create yet another account with a unique password.",
                title: "Social Login",
                lastUpdated: new Date(),
                guides: Array(5).fill("")
            }
        }
    }

    render() {
        return (
            <div className="p-horiz-xl">
                <div className="d-flex justify-center font-lg bold-5 m-bottom-xl">
                    Series
                </div>

                <div>
                    <Grid container justify="space-between" spacing={3}>
                        <Grid item xs={12} sm={6} md={4}>
                            <SeriesCard series={this.state.socialSeries}/>
                        </Grid>
                      
                    </Grid>
                </div>
            </div>);
    }
}

export default Series;