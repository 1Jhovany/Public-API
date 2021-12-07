const cityElement = document.getElementById("City")
const tempElement = document.getElementById("Temp")
const actualTemp = document.getElementById("ActualFeel")
const locationElement = document.getElementById("submitForm")
const descriptionElement = document.getElementById("theDescript")
const apiKey = '32bd05c06854f18620a8413478125292';

let zipCode = '44125';
let countryCode = 'us';

    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=imperial&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        tempElement.innerText = data.main.temp;
        actualTemp.innerText = data.main.feels_like;
    });

function getLocation(){
    const zipCode = document.getElementById('Zip').value;
    const countryCode = document.getElementById('Country').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=imperial&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        locationElement.innerText = "Your temp is " + data.main.temp;
    });
}
function getDescription(){
    const zipCode = document.getElementById('Zippy').value;
    const countryCode = document.getElementById('Countryyy').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},${countryCode}&units=imperial&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        descriptionElement.innerText = "Your humidity is " + data.main.humidity;
    });
}
