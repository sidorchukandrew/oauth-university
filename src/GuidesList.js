import { Link, useLocation } from "react-router-dom";

function GuidesList(props) {

    let currentRoute = useLocation();
    let guides = props.guides.map(guide => {
        return (
            <Link key={guide.title} to={currentRoute.pathname +  "/login-with-facebook"}>
                <div className="p-lg grey-bg-4 border-btm-grey hov-secondary-color">
                    {guide.title}
                </div>
            </Link>
        );
    });

    return (
        <div className="border-top-grey">{guides}</div>
    );
}

export default GuidesList;