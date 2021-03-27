export function getMonthDate(date) {
    let dateString = date?.toDateString();
    let dateParts = dateString?.split(" ");
    return dateParts[1] + " " + dateParts[2];
}