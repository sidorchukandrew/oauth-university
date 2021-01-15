import BreadCrumbs from "./components/BreadCrumbs";
import PageTitle from "./components/PageTitle";
import PlaceholderText from "./temp/TempText";
import { useTheme } from '@material-ui/core/styles';
import ButtonGenerator from "./components/ButtonGenerator";

function GuideDetail(props) {

    let quickLinks;
    let theme = useTheme();
    if (theme.breakpoints.up("md")) {
        quickLinks = (
            <div className="flex-grow d-flex justify-end">
                <div className="d-flex f-column p-horiz-xl grey-text-6 font-sm fixed">

                    <span className="secondary-color bold-5 font-md">In this guide</span>
                    <a className="p-vertical-sm hov-secondary-color" href="/series/social-login/login-with-facebook#what">What is?</a>
                    <a className="p-vertical-sm hov-secondary-color" href="/series/social-login/login-with-facebook#why">Why is?</a>
                    <a className="p-vertical-sm hov-secondary-color" href="/series/social-login/login-with-facebook#where">From where?</a>
                    <span className="p-vertical-sm hov-secondary-color">
                        Why?
                </span>
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className="d-flex ">
                {quickLinks}
                <div className="d-flex justify-start constrained-sm f-column p-horiz-lg">
                    <div className="m-bottom-xl" >
                        <BreadCrumbs />
                    </div>
                    <div className="m-bottom-lg">
                        <PageTitle title="Login With Facebook" pageType="GUIDE" />
                    </div>

                    <div className="font-sm grey-text-6">
                        {new Date().toDateString()} &#8226; 5 min read
                    </div>
                    <div className="double-height grey-text-6">
                        <ButtonGenerator oauthUrl="https://www.linkedin.com/oauth/v2/authorization" />
                        {PlaceholderText}
                    </div>
                </div>
                <div className="flex-grow"></div>
            </div>
        </div>
    )
}

export default GuideDetail;