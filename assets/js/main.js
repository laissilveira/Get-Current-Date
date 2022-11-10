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

texto.innerHTML = `${textWeekDay[weekDay]}, ${textMonth[month]} ${day}, ${year}. ${hour}:${minute}.`