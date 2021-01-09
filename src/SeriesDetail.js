import { Component } from "react";
import GuidesList from "./GuidesList";

class SeriesDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guides: [
                {
                    title: "Login with Facebook"
                },
                {
                    title: "Login with Google"
                },
                {
                    title: "Login with Snapchat"
                },
                {
                    title: "Login with LinkedIn"
                },
                {
                    title: "Login with Discord"
                }
            ]
        }
    }

    render() {
        return (
            <div className="p-horiz-xl constrained-sm align-justify">

                <div className="secondary-color d-flex justify-center bold-5 letter-space-sm font-md">SERIES</div>
                <div className="d-flex justify-center font-lg bold-5 m-bottom-lg">
                    Social Login
                </div>

                <div className="d-flex justify-center grey-text-6 m-bottom-lg">
                    Learn how to include social sites like Google and Facebook as ways to login
                    on your sites with OAuth. People won't have to create yet another account with a unique password.
                </div>

                <GuidesList guides={this.state.guides} />
            </div>
        );
    }
}

export default SeriesDetail;