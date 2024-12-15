document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedText = document.lastModified;
    const lastModifiedElement = document.getElementById("date-modified");
    lastModifiedElement.textContent = lastModifiedText;


    const form = document.getElementById("nameForm");
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const formData = new URLSearchParams(new FormData(form)).toString();
            window.location.href = 'choice.html?${formData}';
        });
    }

    if (window.location.pathname.includes('choice.html')) {
        const params = new URLSearchParams(window.location.search);
        const father = params.get("dad");
        const mother = params.get("mom");

        const congratsDiv = document.createElement("div");
        congratsDiv.textContent = "Congrats, ${father} and ${mother}'s family is now ready to view";

        document.querySelector("main").prepend(congratsDiv);

        const redStar = document.querySelector("img[alt='Red Star']");
        const yellowStar = document.querySelector("img[alt='Yellow Star']");
        if (redStar && yellowStar) {
            redStar.addEventListener("click", () => {
                window.location.href = "pedigree.html?${window.location.search.slice(1)}";
            });
            yellowStar.addEventListener("click", () => {
                window.location.href = 'tree.html?${window.location.search.slice(1)}';
            });
        }
    }

    if (window.location.pathname.includes('pedigree.html')) {
        const params = new URLSearchParams(window.location.search);
        const you = params.get("self");
        const father = params.get("dad");
        const mother = params.get("mom");
        const pGpa = params.get("pGpa");
        const pGma = params.get("pGma");
        const mGpa = params.get("mGpa");
        const mGma = params.get("mGma");
        const pGGpa1 = params.get("pGGpa1");
        const pGGma1 = params.get("pGGma1");
        const pGGpa2 = params.get("pGGpa2");
        const pGGma2 = params.get("pGGma2");
        const mGGpa1 = params.get("mGGpa1");
        const mGGma1 = params.get("mGGma1");
        const mGGpa2 = params.get("mGGpa2");
        const mGGma2 = params.get("mGGma2");

        const pedigreeDiv = document.createElement("div");
        pedigreeDiv.innerHTML = `
            <h2>Pedigree Chart</h2>
            <p>Father: ${father}</p>
            <p>Mother: ${mother}</p>
            <p>Paternal Grandfather: ${pGpa}</p>
            <p>Paternal Grandmother: ${pGma}</p>
            <p>Maternal Grandfather: ${mGpa}</p>
            <p>Maternal Grandmother: ${mGma}</p>
            <p>Paternal Great Grandfather: ${pGGpa1}</p>
            <p>Paternal Great Grandmother: ${pGGma1}</p>
            <p>Paternal Great Grandfather: ${pGGpa2}</p>
            <p>Paternal Great Grandmother: ${pGGma2}</p>
            <p>Maternal Great Grandfather: ${mGGpa1}</p>
            <p>Maternal Great Grandmother: ${mGGma1}</p>
            <p>Maternal Great Grandfather: ${mGGpa2}</p>
            <p>Maternal Great Grandmother: ${mGGma2}</p>
        `;
        document.querySelector("main").appendChild(pedigreeDiv);
    }

    if (window.location.pathname.includes("tree.html")) {
        const params = new URLSearchParams(window.location.search);
        const you = params.get("self");
        const father = params.get("dad");
        const mother = params.get("mom");
        const pGpa = params.get("pGpa");
        const pGma = params.get("pGma");
        const mGpa = params.get("mGpa");
        const mGma = params.get("mGma");
        const pGGpa1 = params.get("pGGpa1");
        const pGGma1 = params.get("pGGma1");
        const pGGpa2 = params.get("pGGpa2");
        const pGGma2 = params.get("pGGma2");
        const mGGpa1 = params.get("mGGpa1");
        const mGGma1 = params.get("mGGma1");
        const mGGpa2 = params.get("mGGpa2");
        const mGGma2 = params.get("mGGma2");

        const treeDiv = document.createElement("div");
        treeDiv.innerHTML = `
            < img src = "images/tree.jpeg alt="Family Tree">
            < div style = "position:absolute; top: 20%; left: 50%," >
                <p>${father}</p>
                <p>${mother}</p>
            </div >
            <div style="position:absolute; top: 20%; left: 50%,">
            <p>${pgpa}</p>
            <p>${pgma}</p>
            </div>
            <div style="position:absolute; top: 20%; left: 50%,">
            <p>${mgpa}</p>
            <p>${mgma}</p>
            </div>
        `}
    document.querySelector("main").appendChild(treeDiv);
});