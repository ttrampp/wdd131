// last date and time modified
let lastModifiedText = document.lastModified;
document.getElementById("date-modified").innerHTML = lastModifiedText;


// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    return 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16));
}

// Function to check if should calculate wind chill
function isWindChillApplicable(temp, windSpeed) {
    return temp <= 50 && windSpeed > 3; // US--Imperial
}

// Set values for temperature and wind speed
let temp = 92;
let windSpeed = 13;

// Calculate and display wind chill
let windChill = isWindChillApplicable(temp, windSpeed)
    ? Math.round(calculateWindChill(temp, windSpeed))
    : "N/A";

document.getElementById("windChill").textContent = windChill !== "N/A" ? `${windChill} ℉` : windChill;

// Update footer with current year and last modified date
//const footerYear = new Date().getFullYear();
//const lastModifiedDate = document.lastModified;

//document.getElementById("date-modified").textContent = lastModifiedDate;
