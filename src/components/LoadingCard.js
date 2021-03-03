import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    text: {
        transform: "scale(1)"
    }
});

export default function LoadingCard() {
    let classes = useStyles();
    return (
        <div className="shadow-md rounded-sm ">
            <Skeleton animation="wave" height="160px" classes={classes} />
            <div className="p-horiz-lg p-vertical-lg">
                <div className="m-bottom-lg">
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                    <Skeleton animation="wave" />
                </div>
                <Skeleton width="60%" animation="wave" />
            </div>

        </div>
    );
}