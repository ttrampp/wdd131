//<script>
//    let text = document.lastModified;
//    document.getElementById("date-modified").innerHTML = text;
//</script>

// Get the current year
const currentYear = new Date().getFullYear();
document.querySelector("footer p").innerHTML = `©${currentYear} 👀 Tanya Trampp 👀 New Mexico, USA`;

// Get the last modified date
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleDateString("en-US"); // format: DD/MM/YYYY
const formattedTime = lastModified.toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit', second: '2-digit' });

// Insert the date and time in the "Last Modification" paragraph
document.getElementById("copyright").innerHTML = copyrightText;
document.getElementById("date-modified").innerHTML = `${formattedDate} ${formattedTime}`;