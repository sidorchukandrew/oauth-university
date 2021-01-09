import { Component } from "react";
import { Link } from "react-router-dom";

class GuidesList extends Component {
    render() {
        let guides = this.props.guides.map(guide => {
            return (
                <Link key={guide.title} to="#">
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
}

export default GuidesList;