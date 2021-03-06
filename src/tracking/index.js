import ReactGA from "react-ga";

export const initGA = (trackingId) => {
    ReactGA.initialize(trackingId);
}

export const PageView = () => {
    ReactGA.pageview(window.location.pathname +
        window.location.search);
}