export function formatTextToUrl(text) {
    text = text.replace(" ", "-");
    text = text.toLowerCase();
    text = encodeURI(text);
    return text;
}