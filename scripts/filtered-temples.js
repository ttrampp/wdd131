console.log("temples.js loaded successfully");          /*test code */

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

document.querySelectorAll('.pages a').forEach(link => {
    link.addEventListener('click', function () {

        if (this.id === "homepage") {
            document.querySelectorAll('.pages a').forEach(l => l.classList.remove('active'));
            return; /*exit this function, skipping the active feature for the homepage only*/
        }
        document.querySelectorAll('.pages a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});


const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Albuquerque New Mexico",
        location: "Albuquerque, New Mexico",
        dedicated: "2000, March, 5",
        area: 34245,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/albuquerque-new-mexico/400x250/albuquerque-temple-lds-137883-wallpaper.jpg"
      },
      {
        templeName: "Monticello Utah",
        location: "Monticello, Utah",
        dedicated: "1998, July, 26",
        area: 11225,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/monticello-utah/400x250/monticello-temple-770706-wallpaper.jpg"
      },
      {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona",
        dedicated: "1927, October, 23",
        area: 113916,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mesa-arizona/400x250/mesa_arizona_temple_news_conference.jpeg"
      },
];


const homielink = document.getElementById("homepage")
const oldielink = document.getElementById("oldie");
const newbielink = document.getElementById("newbie");
const biggielink = document.getElementById("biggie");
const weelittlelink = document.getElementById("weelittle");
const headerhome = document.querySelector("h2");

CreateTempleCards(temples);

homielink.addEventListener("click", () => {
    CreateTempleCards(temples);
    headerhome.textContent = "Home -- All listed temples";
});

oldielink.addEventListener("click", () => {
    const oldtemples = temples.filter((temple) => {
        const year = new Date(temple.dedicated).getFullYear();
        return year < 1900;
    });
    CreateTempleCards(oldtemples);
    headerhome.textContent = "Old -- Temples built before the year 1900"
});

newbielink.addEventListener("click", () => {
    const newtemples = temples.filter((temple) => {
        const year = new Date(temple.dedicated).getFullYear();
        return year > 2000;
    });
    CreateTempleCards(newtemples);
    headerhome.textContent = "New -- Temples built after the year 2000"
});

biggielink.addEventListener("click", () => {
    const bigtemples = temples.filter((temple) =>
        temple.area >= 90000);

    CreateTempleCards(bigtemples);
    headerhome.textContent = "Large -- Temples larger than 90,000 square feet"
});

weelittlelink.addEventListener("click", () => {
    const liltemples = temples.filter((temple) =>
        temple.area < 10000);

    CreateTempleCards(liltemples);
    headerhome.textContent = "Small -- Temples smaller than 10,000 square feet"
});



function CreateTempleCards(templess) {
    document.querySelector(".templelist").innerHTML = "";
    templess.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".templelist").appendChild(card);
    });
}