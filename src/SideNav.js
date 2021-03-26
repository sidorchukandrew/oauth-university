import { Drawer, makeStyles, useTheme } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from "@material-ui/icons/Close";

let useStyles = makeStyles({
    paper: {
        backgroundColor: "#1f2937f5",
        width: "100%",
        backdropFilter: "blur(10px)"
    }
});
export default function SideNav(props) {
    const classes = useStyles();

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    if (!isSmallScreen) {
        props.onClose();
    }

    return (
        <Drawer open={props.open} onClose={props.onClose} classes={classes}>
            <div className="p-lg white-text">
                <span className="pointer" onClick={props.onClose}>
                    <CloseIcon />
                </span>
            </div>
            <div className="d-flex main-font f-column text-center p-horiz-lg">
                <NavLink
                    activeClassName="active-link"
                    to="/"
                    className="rounded-sm flex-grow grey-text-2 p-vertical-md p-horiz-md hov-lighten"
                    exact
                    onClick={props.onClose}
                >
                    Home
            </NavLink>
                <NavLink
                    activeClassName="active-link"
                    to="/guides"
                    className="rounded-sm flex-grow  grey-text-2 p-vertical-md p-horiz-md hov-lighten"
                    onClick={props.onClose}
                >
                    Guides
                </NavLink>
                <NavLink
                    activeClassName="active-link"
                    to="/series"
                    className="rounded-sm  grey-text-2 p-vertical-md p-horiz-md hov-lighten"
                    onClick={props.onClose}
                >
                    Series
                </NavLink>
            </div>
        </Drawer >
    );
}