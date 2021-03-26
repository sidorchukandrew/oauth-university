import { Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

export default function LoadingGuide() {
    return (
        <Grid item xs={12} sm={6} md={4}>
            <div className="p-lg">
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
                <Skeleton animation="wave" />
            </div>
        </Grid >
    );
}