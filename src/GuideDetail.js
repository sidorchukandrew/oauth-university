import BreadCrumbs from "./components/BreadCrumbs";
import PageTitle from "./components/PageTitle";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { formatPageNameFromUrl } from "./utils/NavUtils";
import guidesApi from "./api/guides";
import SectionsList from "./SectionsList";

export default function GuideDetail(props) {

    const [guide, setGuide] = useState();

    let location = useLocation();

    useEffect(() => {
        async function fetchData() {
            try {
                let pageName = formatPageNameFromUrl(location.pathname);
                let result = await guidesApi.getByFilters({ title: pageName });
                setGuide(result.data[0]);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <div className="d-flex justify-start constrained-sm f-column p-horiz-lg">
                <div className="m-bottom-xl" >
                    <BreadCrumbs />
                </div>
                <div className="m-bottom-lg">
                    <PageTitle title={guide?.title} pageType="GUIDE" />
                </div>

                <div className="font-sm grey-text-6 m-bottom-md">
                    {new Date(guide?.updated_at).toDateString()} &#8226; {guide?.read_time} min read
                </div>

                <SectionsList sections={guide?.sections ? guide.sections : []} />
            </div>
        </div>
    )
}