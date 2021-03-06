import { useEffect } from 'react';
import Structure from './Structure';
import GoogleAnalytics from "react-ga";

export default function App() {

    useEffect(() => {
        GoogleAnalytics.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
        GoogleAnalytics.pageview("/series");
    }, []);

    return (
        <Structure />
    );
}
