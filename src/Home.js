import { useEffect, useState } from "react";
import HomePageEntry from "./components/HomePageEntry";
import guidesApi from "./api/guides";
import { Fragment } from "react";
import LoadingHomePageEntry from "./components/LoadingHomePageEntry";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

export default function Home() {

    const [guides, setGuides] = useState([]);
    const [loading, setLoading] = useState(false);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                let result = await guidesApi.getAll();
                let sortedGuides = result.data?.sort((guideA, guideB) => {
                    return new Date(guideB.created_at) - new Date(guideA.created_at);
                });


                setGuides(sortedGuides);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    let threeMostRecent = guides?.slice(0, 3).map(guide => <HomePageEntry key={guide.id} item={guide} />);
    let loadingIndicator = (
        <Fragment>
            <div style={{ width: "550px" }} className="p-vertical-md">
                <LoadingHomePageEntry />
            </div>
            <LoadingHomePageEntry />
        </Fragment>
    );

    let classes = "constrained-lg d-flex justify-space-between";
    if (isSmallScreen) {
        classes += " f-column";
    }
    return (
        <div className={classes}>
            <h1
                style={{ marginTop: "0px" }}
                className={isSmallScreen ? "p-horiz-lg" : "p-right-lg"}
            >
                What's new?
        </h1>
            <div className="p-horiz-lg">
                {loading ? loadingIndicator : threeMostRecent}
            </div>
        </div>
    );
}