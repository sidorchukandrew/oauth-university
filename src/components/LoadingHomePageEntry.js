import { Skeleton } from "@material-ui/lab";
import { Fragment } from "react";

export default function LoadingHomePageEntry() {
    return (
        <Fragment>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
        </Fragment>
    );
}