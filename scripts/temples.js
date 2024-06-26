let text = document.lastModified;
document.getElementById("date-modified").innerHTML = text;

const hamburger = document.querySelector('show');
const pages = document.querySelector('show');

hamburger.addEventListener('click', () => {
    pages.classList.toggle('open');
    title.style.display = pages.classList.contains('open') ? 'none' : 'block';
    hamburger.textContent = pages.classList.contains('open') ? '❌' : '☰';
});

console.log("test");
