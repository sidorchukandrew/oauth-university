import { Link } from "react-router-dom";
import { getMonthDate } from "../utils/DateUtils";
import { formatTextToUrl } from "../utils/NavUtils";

export default function HomePageEntry(props) {

    let displayReadTime = (readTime) => {
        if (!readTime || readTime === 0) {
            return "0 mins read";
        } else if (readTime === 1) {
            return "1 min read";
        } else {
            return readTime + " mins read";
        }
    }

    return (
        <div className="border-btm-grey flex-grow p-vertical-md d-flex" style={{ maxWidth: "550px" }}>
            <div
                className="d-flex no-wrap p-right-xl f-column"
            >
                <div>
                    {getMonthDate(new Date(props.item?.created_at))}
                </div>
                <div className="grey-text-6 font-xs">
                    {displayReadTime(props.item?.read_time)}
                </div>
            </div>
            <div>
                <div className="bold-5 font-md">
                    <Link to={"/guides/" + formatTextToUrl(props.item?.title)}>
                        {props.item?.title}
                    </Link>
                </div>
                <div className="grey-text-6 font-sm">
                    {props.item?.description}
                </div>
            </div>
        </div >
    );
}