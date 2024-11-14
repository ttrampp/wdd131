console.log("temples.js loaded successfully");

// last date and time modified
let lastModifiedText = document.lastModified;
document.getElementById("date-modified").innerHTML = lastModifiedText;


// hamburger button

const hamburger = document.querySelector('.hamburger');
const pages = document.querySelector('.pages');
/*const title = document.querySelector('.title');*/


hamburger.addEventListener('click', () => {
    console.log("Hamburger button clicked");
    pages.classList.toggle('open');
    /*title.style.display = pages.classList.contains('open') ? 'none' : 'block';*/
    hamburger.textContent = pages.classList.contains('open') ? '❌' : '☰';
    /*hamburger.classList.toggle('show');*/
});
