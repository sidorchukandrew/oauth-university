export function sortByOrdinal(items) {
    if (items) {
        return items.sort((itemA, itemB) => itemA.ordinal - itemB.ordinal);
    } else {
        return [];
    }
}