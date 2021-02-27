import { Component } from "react";
import Grid from "@material-ui/core/Grid";
import SeriesCard from "./components/SeriesCard";
import seriesApi from "./api/series";

class Series extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allSeries: []
        }
    }

    async componentDidMount() {
        try {
            let result = await seriesApi.getAll();
            this.setState({ allSeries: result.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        let allSeries = this.state.allSeries;
        let seriesCards = allSeries.map(series => {
            return (
                <Grid key={series.id} item xs={12} sm={6} md={4}>
                    <SeriesCard series={series} />
                </Grid>
            );
        });

        return (
            <div className="p-horiz-xl">
                <div className="d-flex justify-center font-lg bold-5 m-bottom-xl">
                    Series
                </div>

                <div>
                    <Grid container justify="space-between" spacing={3}>
                        {seriesCards}
                    </Grid>
                </div>
            </div>);
    }
}

export default Series;