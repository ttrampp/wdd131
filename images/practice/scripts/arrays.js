//  arrays.js
const steps = ["one", "two", "three"];
const listTemplate(step) {
    return <li>${step}</li>    //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = // set the innerHTML ..querySelector("#myList")

    let new_array = arr.map(function callback(currentValue[, index[, array]]) {
        // return element for new_array
    }[, thisArg])