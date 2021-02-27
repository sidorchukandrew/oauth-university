import GuidesList from "./GuidesList";
import BreadCrumbs from "./components/BreadCrumbs";
import PageTitle from "./components/PageTitle";
import { useEffect, useState } from "react";
import seriesApi from "./api/series";
import { useLocation } from "react-router-dom";
import { formatPageNameFromUrl } from "./utils/NavUtils";

export default function SeriesDetail(props) {
    const location = useLocation();

    const [series, setSeries] = useState(null);

    useEffect(() => {
        async function fetchData() {
            let pageName = formatPageNameFromUrl(location.pathname);
            try {
                let result = await seriesApi.getByFilters({ title: pageName });
                setSeries(result.data[0]);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

                <GuidesList guides={series?.guides} />
            </div>
        </div>
    );
}
