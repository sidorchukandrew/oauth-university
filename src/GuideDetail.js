import BreadCrumbs from "./components/BreadCrumbs";
import PageTitle from "./components/PageTitle";
import PlaceholderText from "./temp/TempText";
import { useTheme } from '@material-ui/core/styles';

function GuideDetail(props) {

    let quickLinks;
    let theme = useTheme();
    if (theme.breakpoints.up("md")) {
        quickLinks = (
            <div className="d-flex f-column justify-end fixed p-horiz-xl grey-text-6 font-sm">
                <span className="secondary-color bold-5 font-md">In this guide</span>
                <a className="p-vertical-sm hov-secondary-color" href="/series/social-login/login-with-facebook#what">What is?</a>
                <a className="p-vertical-sm hov-secondary-color" href="/series/social-login/login-with-facebook#why">Why is?</a>
                <a className="p-vertical-sm hov-secondary-color" href="/series/social-login/login-with-facebook#where">From where?</a>
                <span className="p-vertical-sm hov-secondary-color">
                    Why?
                </span>
            </div>
        );
    }
    return (
        <div>
            <div className="d-flex">
                {quickLinks}
                <div className="d-flex constrained-sm justify-start f-column p-horiz-lg">
                    <div className="m-bottom-xl" >
                        <BreadCrumbs />
                    </div>
                    <div className="constrained-sm m-bottom-lg">
                        <PageTitle title="Login With Facebook" pageType="GUIDE" />
                    </div>

                    <div className="font-sm grey-text-6">
                        { new Date().toDateString() } &#8226; 5 min read
                    </div>
                    <div className="double-height grey-text-6">
                        {PlaceholderText}
                    </div>
                </div>
                {/* <div className="d-flex justify-center fixed">Possible Ads</div> */}
            </div>
        </div>
    )
}

export default GuideDetail;