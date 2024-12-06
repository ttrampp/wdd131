const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectElement = document.querySelector('#product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
});

document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('installDate').setAttribute('max', formattedDate);
});

document.getElementById('dateContainer').addEventListener('click', () => {
    document.getElementById('installDate').focus();
});


document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('reviewForm');

    if (!localStorage.getItem('reviewCount')) {
        localStorage.setItem('reviewCount', '0');
    }

    reviewForm.addEventListener('submit', (event) => {
        console.log('Submit event triggered');
        event.preventDefault();

        let reviewCount = parseInt(localStorage.getItem('reviewCount'), 10) || 0;
        reviewCount++;
        reviewCount = Math.max(0, reviewCount - 1);
        localStorage.setItem('reviewCount', reviewCount);

        console.log('Review count updated to:', reviewCount);

        reviewForm.removeEventListener('submit', arguments.callee);
        reviewCount.submit();
    });
});

/*localStorage.setItem('reviewCount', '0');*/ /*use when wanting to reset review count*/

// last date and time modified
let lastModifiedText = document.lastModified;
document.getElementById("date-modified").innerHTML = lastModifiedText;