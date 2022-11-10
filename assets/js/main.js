const date = new Date();
const weekDay = date.getDay();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const hour = date.getHours();
const minute = date.getMinutes();

let textMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let textWeekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",  "Saturday"]


const texto = document.querySelector('.texto');

function zeroLeft(num) {
    return num < 10 ? `0${num}` : num;
}

texto.innerHTML = `${textWeekDay[weekDay]}, ${textMonth[month]} ${zeroLeft(day)}, ${year}. ${zeroLeft(hour)}:${zeroLeft(minute)}.`