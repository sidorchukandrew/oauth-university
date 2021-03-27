import { NavLink } from "react-router-dom";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Fragment } from "react";
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from "@material-ui/icons/MenuRounded";

export default function Navbar(props) {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    let toggleSideNavButton = (
        <span
            className="p-vertical-sm p-horiz-lg white-text d-flex align-center justify-center pointer"
            onClick={props.onOpenSideNav}
        >
            <MenuIcon />
        </span>
    );

    let navLinks = (
        <Fragment>
            <NavLink
                activeClassName="active-link"
                to="/"
                className="rounded-sm grey-text-2 p-vertical-sm p-horiz-md m-horiz-sm hov-lighten"
                exact
            >
                Home
            </NavLink>
            <NavLink
                activeClassName="active-link"
                to="/guides"
                className="rounded-sm grey-text-2 p-vertical-sm p-horiz-md m-horiz-sm hov-lighten"
            >
                Guides
            </NavLink>
            <NavLink
                activeClassName="active-link"
                to="/series"
                className="rounded-sm grey-text-2 p-vertical-sm p-horiz-md m-horiz-sm hov-lighten"
            >
                Series
                </NavLink>
        </Fragment>
    );

    return (
        <div className="primary-color-bg d-flex justify-end align-center p-vertical-md">
            { isSmallScreen ? toggleSideNavButton : navLinks}
        </div>
    );
}