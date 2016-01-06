//Define functions
/*function to add items to the shopping list using add button and enter*/
function addItem() {
    //defining value of input box list-item .val gets values of form elements
    //the form element here is input tag in html
    var itemValue = $('#list-item').val();
    //if there is no value, browser will alert person to input into text box
    if (itemValue.length === 0) {
        alert("Let's go shopping! Add an item to your list!");
    }
    //if there is a value, this part of the function will run
    else {
        //creat a single row with buttons on each side within shopping list
        var row = $('<li><button class="checkbox">✓</button>' + itemValue + '<button class="delete">x</button></li>');
        //add item to top of row
        //question, better to add to bottom as last child of li
        $('.shopping-list-wrapper').prepend(row);
        //reset value to default after user submits an item to lsit
        itemValue = $('#list-item').val('');
    }
}
//function to check an item off the list by clicking checkbox button
// question, will the append move the row to the bottom
function checkOff() {
    $(this).parent().toggleClass('item-checked');
}

//function to delete an item off the list by clicking x button
function deleteItem() {
    //using this function, so whatever "it" the item is, we want to go back to parent and delete it
    $(this).parent().remove();
}

/*function to clear entire list by mouse click on clear all button*/
function deleteAll() {
    //delete the UL container
    $('.shopping-list-wrapper').empty();
}



//Call functions
$(document).ready(function () {
    //add item after clicking add button
    $('#add-items').on('click', function () {
        addItem();
    });

    //delete all items after clicking clear all button
    //does the button in html need to have a class, I used section class
    $('#deleteall').on('click', function () {
        deleteAll();
    });
});

// these actions happen after document is loaded, because items are added and deleted after page load
// on click check off single item
$(document).on('click', '.checkbox', checkOff);
//on click delte a single item
$(document).on('click', '.delete', deleteItem);
