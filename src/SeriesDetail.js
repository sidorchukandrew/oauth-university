import GuidesList from "./GuidesList";
import BreadCrumbs from "./components/BreadCrumbs";
import PageTitle from "./components/PageTitle";
import { useEffect, useState } from "react";
import seriesApi from "./api/series";
import { useLocation } from "react-router-dom";
import { formatPageNameFromUrl } from "./utils/NavUtils";
import Skeleton from "@material-ui/lab/Skeleton";

export default function SeriesDetail(props) {
    const location = useLocation();

    const [series, setSeries] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = "Series";
        async function fetchData() {
            setLoading(true);
            let pageName = formatPageNameFromUrl(location.pathname);
            document.title = "Series | " + pageName;
            try {
                let result = await seriesApi.getByFilters({ title: pageName });
                setSeries(result.data[0]);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    let loadingIndicators = (
        <div>
            <Skeleton animation="wave" height="60px" />
            <Skeleton animation="wave" height="60px" />
            <Skeleton animation="wave" height="60px" />
        </div>
    );
    return (
        <div className="d-flex justify-center">
            <div className="p-horiz-xl constrained-sm align-justify">
                <div className="m-bottom-xl" >
                    <BreadCrumbs />
                </div>
                <div className="m-bottom-lg">
                    <PageTitle title={series?.title} pageType="SERIES" />
                </div>

                <div className="d-flex justify-center grey-text-6 m-bottom-lg double-height">
                    {series?.description}
                </div>

                {loading ? loadingIndicators : <GuidesList guides={series?.guides} />}
            </div>
        </div>
    );
}
