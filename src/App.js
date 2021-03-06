import { useEffect } from 'react';
import Structure from './Structure';
import { initGA, PageView } from "./tracking";

export default function App() {

    useEffect(() => {
        initGA(process.env.REACT_APP_GA_MEASUREMENT_ID);
        PageView();
    }, []);

    return (
        <Structure />
    );
}
