import { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="primary-color-bg d-flex align-center p-vertical-md">
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
            </div>
        );
    }
}

export default Navbar;