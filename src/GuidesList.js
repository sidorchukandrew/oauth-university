import { Link, useLocation } from "react-router-dom";
import { formatTextToUrl } from "./utils/NavUtils";

export default function GuidesList(props) {

    let currentRoute = useLocation();
    let guides = props.guides?.map(guide => {

        let guideUrl = currentRoute.pathname + "/" + formatTextToUrl(guide.title);
        return (
            <Link key={guide.title} to={guideUrl}>
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