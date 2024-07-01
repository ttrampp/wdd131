// last date and time modified
<script>
let text = document.lastModified;
document.getElementById("date-modified").innerHTML = text;
</script>


// hamburger button

const hamburger = document.querySelector('.hamburger');
const pages = document.querySelector('.pages');
const title = document.querySelector('.title');


hamburger.addEventListener('click', () => {
    pages.classList.toggle('open');
    title.style.display = pages.classList.contains('open') ? 'none' : 'block';
    hamburger.textContent = hamburger.classList.contains('show') ? '☰' : '❌';
    hamburger.classList.toggle('show');
});
