import { useEffect, useState } from "react";
import HomePageEntry from "./components/HomePageEntry";
import guidesApi from "./api/guides";

export default function Home() {

    const [guides, setGuides] = useState([]);
    const [loading, setLoading] = useState(false);

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


    let threeMostRecent = guides?.slice(0, 3);

    return (
        <div className="constrained-lg d-flex justify-space-between">
            <h1 style={{ marginTop: "0px" }} className="p-right-lg">What's new?</h1>
            <div className="p-horiz-lg">
                {threeMostRecent?.map(guide => <HomePageEntry key={guide.id} item={guide} />)}
            </div>
        </div>
    );
}