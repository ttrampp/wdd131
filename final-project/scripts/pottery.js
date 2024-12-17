document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedText = document.lastModified;
    const lastModifiedElement = document.getElementById("date-modified");
    lastModifiedElement.textContent = lastModifiedText;
});

const classNames = [
    {
        id: "BT1",
        name: "Beginner -- Tuesday evening - 6 weeks -- 1/7/25",
        cost: "$250"
    },
    {
        id: "BT2",
        name: "Beginner -- Tuesday evening - 6 weeks -- 2/25/25",
        cost: "$250"
    },
    {
        id: "BT3",
        name: "Beginner -- Tuesday evening - 6 weeks -- 4/22/25",
        cost: "$250"
    },
    {
        id: "BTH1",
        name: "Beginner -- Thursday afternoon - 6 weeks --1/9/25",
        cost: "$250"
    },
    {
        id: "BTH2",
        name: "Beginner -- Thursday afternoon - 6 weeks --2/27/25",
        cost: "$250"
    },
    {
        id: "BTH3",
        name: "Beginner -- Thursday afternoon - 6 weeks --4/24/25",
        cost: "$250"
    },
    {
        id: "IT1",
        name: "Intermediate -- Tuesday afternoon - 6 weeks -- 1/7/25",
        cost: "$300"
    },
    {
        id: "IT2",
        name: "Intermediate -- Tuesday afternoon - 6 weeks -- 2/25/25",
        cost: "$300"
    },
    {
        id: "IT3",
        name: "Intermediate -- Tuesday afternoon - 6 weeks -- 4/22/25",
        cost: "$300"
    },
    {
        id: "ITH1",
        name: "Intermediate -- Thursday evening - 6 weeks -- 1/9/25",
        cost: "$250"
    },
    {
        id: "ITH2",
        name: "Intermediate -- Thursday evening - 6 weeks -- 2/27/25",
        cost: "$250"
    },
    {
        id: "ITH3",
        name: "Intermediate -- Thursday evening - 6 weeks -- 4/24/25",
        cost: "$250"
    },
    {
        id: "FR1",
        name: "Friday evening/Saturday morning - 2 part class",
        cost: "$40"
    },
    {
        id: "ST1",
        name: "Saturday Touch-ups - Open Workshop",
        cost: "No extra fee"
    }
];

const selectElement = document.querySelector('#className');
if (selectElement) {
    classNames.forEach(className => {
        const option = document.createElement('option');
        option.value = className.id;
        option.textContent = className.name;
        selectElement.appendChild(option);
    });
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayConfirmation() {
    const classID = getQueryParam("className");
    const classDetails = classNames.find(c => c.id === classID);
    const confirmationMessage = document.getElementById("confirmationMessage");

    if (classDetails) {
        confirmationMessage.textContent = `You signed up for: ${classDetails.name}. Cost: ${classDetails.cost}`;
    }
    else {
        confirmationMessage.textContent = "Class details could not be found. Please try again.";
    }
}

document.addEventListener("DOMContentLoaded", displayConfirmation);