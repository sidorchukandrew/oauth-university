import { useEffect, useState } from "react";
import guidesApi from "./api/guides";
import { PageView } from "./tracking";
import Grid from "@material-ui/core/Grid";
import { Link, useLocation } from "react-router-dom";
import { formatTextToUrl } from "./utils/NavUtils";
import OutlinedInput from "./components/OutlinedInput";
import LoadingGuide from "./components/LoadingGuide";
import { Fragment } from "react";

export default function GuidesPage(props) {
    const [guides, setGuides] = useState([]);
    const [filterQuery, setFilterQuery] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        PageView();
        async function fetchData() {
            setLoading(true);
            try {
                let result = await guidesApi.getAll();
                setGuides(result.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    let baseUrl = useLocation().pathname;
    let filteredGuides = guides.filter(guide => guide.title?.toLowerCase().includes(filterQuery));

    filteredGuides = filteredGuides.map(guide => (
        <Grid item xs={12} sm={6} md={4} key={guide.id}>
            <div className="p-lg">
                <div className="bold-5 m-bottom-sm">
                    <Link to={baseUrl + "/" + formatTextToUrl(guide.title)}>
                        {guide.title}
                    </Link>
                </div>
                <div className="font-sm grey-text-6">
                    {guide.description}
                </div>
            </div>
        </Grid>
    ));

    let loadingPlaceholder = (
        <Fragment>
            <LoadingGuide />
            <LoadingGuide />
            <LoadingGuide />
            <LoadingGuide />
            <LoadingGuide />
            <LoadingGuide />
        </Fragment>
    );

    return (
        <div className="constrained-md">
            <div className="d-flex justify-center font-lg bold-5 m-bottom-lg">
                Guides
            </div>
            <div className="m-bottom-lg d-flex p-horiz-lg">
                <OutlinedInput
                    placeholder="Search"
                    onChange={(event) => setFilterQuery(event.target.value.toLowerCase())}
                />
            </div>
            <Grid container>
                {loading ? loadingPlaceholder : filteredGuides}
            </Grid>
        </div>
    );
}