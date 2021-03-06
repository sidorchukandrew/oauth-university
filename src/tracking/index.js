import ReactGA from "react-ga";

export const initGA = (trackingId) => {
    ReactGA.initialize(trackingId, {
        debug: true
    });
}

export const PageView = () => {
    console.log(window.location.pathname);
    ReactGA.pageview(window.location.pathname +
        window.location.search);
}