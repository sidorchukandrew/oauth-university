import { Component } from "react";
import GuidesList from "./GuidesList";
import BreadCrumbs from "./components/BreadCrumbs";
import PageTitle from "./components/PageTitle";

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
            <div className="d-flex justify-center">
                <div className="p-horiz-xl constrained-sm align-justify">
                    <div className="m-bottom-xl" >
                        <BreadCrumbs />
                    </div>
                    <div className="m-bottom-lg">
                        <PageTitle title="Social Login" pageType="SERIES" />
                    </div>

                    <div className="d-flex justify-center grey-text-6 m-bottom-lg double-height">
                        Learn how to include social media platforms like Google and Facebook as ways to login
                        to your sites with OAuth. People won't have to create yet another account with a unique password.
                </div>

                    <GuidesList guides={this.state.guides} />
                </div>
            </div>
        );
    }
}

export default SeriesDetail;