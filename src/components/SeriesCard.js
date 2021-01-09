import { Component } from "react";
import image from "./socialmediatools.svg";
import { Link } from "react-router-dom";
import { formatTextToUrl } from "../utils/NavUtils";

class SeriesCard extends Component {
    render() {
        return (
            <Link to={"/series/" + formatTextToUrl(this.props.series.title)}>
                <div className="shadow-md rounded-sm hov-up">
                    <div>
                        <img src={image} alt="Social media icons" width={"100%"} className="rounded-top-sm" />

                        <div className="p-horiz-lg p-vertical-lg bold-4">

                            <div className="m-bottom-md bold-5">
                                {this.props.series.title}
                            </div>
                            <div className="grey-text-6 font-sm m-bottom-lg">
                                {this.props.series.shortDescription}
                            </div>

                            <div className="grey-text-6 font-xs">
                                Updated {this.props.series.lastUpdated.toLocaleDateString()} &#8226; {this.props.series.guides.length} guides
                        </div>
                        </div>

                    </div>
                </div>
            </Link>
        );
    }
}

export default SeriesCard;