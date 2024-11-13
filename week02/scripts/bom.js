const input = document.querySelector("#favchap");                           //select input field
const button = document.querySelector("button");                            //select Add Chapter button
const list = document.querySelector("#list");                               //select list where chapters are added #to select correctly


button.addEventListener("click", function () {                              //add event listener for button to add new chapter //**added code
    if (input.value.trim() === "") {                                        //message if input is blank //**added code
        alert("Please enter a chapter.");
        input.focus();                                                      //return focus to the input field //**added code
        return;                                                             //exit function //**added code
    }

    if (list.children.length >= 10) {                                       //limit chapters to 10 //**added code
        alert("You've reached the maximum of 10 chapters.");
        input.focus();
        return;
    }

    const chapterExists = Array.from(list.children).some(                   //attempting to prevent duplicates //**added code
        li => li.textContent.replace(" x", "") === input.value
    );
    if (chapterExists) {
        alert("This chapter is already in the list.");
        input.focus();
        return;
    }

    const li = document.createElement("li");                              //makes a new list item
    li.textContent = input.value;                                         //list item set to the input value 

    const deleteButton = document.createElement("button");                //poof, there's now a delete button
    deleteButton.textContent = "x";                                       //delete button is an X
    deleteButton.classList.add("delBtn")                                //added a class to make red in css file //**code added

    li.append(deleteButton);                                            //adding delete button
    list.append(li);                                                    //adding new list item to the list

    input.value = "";                                                   //clear input field box after chapter is added //**added code
    input.focus();                                                      //return focus to the input field //**added code

    deleteButton.addEventListener("click", function () {                //adding an event listener for the delete button to remove chapter //**added code
        list.removeChild(li);                                           //poof, gone //**added code
        input.focus();                                                  //input field is focused making ready for another entry //**added code
    });
});