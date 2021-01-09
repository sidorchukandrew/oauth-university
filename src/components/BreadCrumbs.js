import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import { Link, useLocation } from "react-router-dom";
import { toTitleCase } from "../utils/StringUtils";

function BreadCrumbs(props) {
    let currentRoute = useLocation();
    let pathSegments;

    if (currentRoute.pathname.startsWith("/"))
        pathSegments = currentRoute.pathname.substring(1).split("/")
    else
        pathSegments = currentRoute.pathname.split("/");

    let buildingRoute = "";
    let breadCrumbs = pathSegments.map(segment => {

        buildingRoute = buildingRoute + "/" + segment;
        segment = segment.replace("-", " ");
        segment = toTitleCase(segment);
        let crumb =  {
            name: segment,
            path: buildingRoute
        };

        return (
            <div className="d-flex align-center" key={crumb.path}>
                <ChevronRightRoundedIcon fontSize="small" className="m-right-md grey-text-6" />

                <Link to={crumb.path} className="grey-text-6 m-right-md font-sm">
                    { crumb.name }
                </Link>
            </div>
        );
    });

    return (
        <div className="d-flex align-center constrained-sm p-horiz-xl">
            <Link to="/" className="d-flex">
                <HomeRoundedIcon className="m-right-md grey-text-6" fontSize="small" />
            </Link>
            { breadCrumbs }
        </div>
    );
}

export default BreadCrumbs;