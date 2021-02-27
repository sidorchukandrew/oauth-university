import { toTitleCase } from "./StringUtils";

export function formatTextToUrl(text) {
    text = text.replace(" ", "-");
    text = text.toLowerCase();
    text = encodeURI(text);
    return text;
}

export function formatPageNameFromUrl(text) {
    let pageName = getPageName(text);
    return formatPageName(pageName);
}

function getPageName(url) {
    let segments = url.split("/");

    if (segments.length > 1) {
        let indexOfPageName = segments.length - 1;
        let pageName = segments[indexOfPageName];

        return pageName;
    } else {
        return url;
    }
}

function formatPageName(pageName) {
    pageName = pageName.replace(/-/g, " ");
    return toTitleCase(pageName);
}