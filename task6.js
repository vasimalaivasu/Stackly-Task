let birthDate = new Date("2001-09-1");
let today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
     today.getDate() < birthDate.getDate())
) {
    age--;
}
let difference = today - birthDate;
let daysLived = Math.floor(difference / (1000 * 60 * 60 * 24));
let nextBirthday = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
);
if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
}
let daysLeft = Math.ceil(
    (nextBirthday - today) / (1000 * 60 * 60 * 24)
);
console.log("===== Birthday Calculator =====");
console.log("Date of Birth :", birthDate.toDateString());
console.log("Today's Date  :", today.toDateString());
console.log("-------------------------------");
console.log("Age           :", age, "years");
console.log("Days Lived    :", daysLived, "days");
console.log("Next Birthday :", nextBirthday.toDateString());
console.log("Days Left     :", daysLeft, "days");
