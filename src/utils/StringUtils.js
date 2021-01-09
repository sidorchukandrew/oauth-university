export function toTitleCase(text) {
    if(typeof text !== 'string') return '';

    let titleCased = "";
    let words = text.split(" ");

    words.forEach(word => {
        titleCased = titleCased + word.charAt(0).toUpperCase() + word.substring(1) + " ";
    });

    return titleCased.trim();
}