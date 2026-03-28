// Write your code here:
// Name: Katie Summers;
// Description: Shopping List Handler;

// create a new item and add it to the list when the user clicks the button;
function createItem() {

    // get the name of the item from the input field and create a new list item using the template;
    let itemName = document.querySelector("#shopping-form>input").value;
    let template = document.querySelector("template");
    let myNewItem = document.importNode(template.content, true);
    myNewItem.querySelector(".item-text").innerText = itemName;
    myNewItem.querySelector(".remove-btn").addEventListener("click", removeShoppingListItem);
    myNewItem.querySelector("li").addEventListener("click", removeShoppingListItem);

    // take input for list items from the user;
    document.querySelector("#shopping-list").appendChild(myNewItem);

    // remove the text from the input field after the item is added to the list;
    document.querySelector("#shopping-form>input").value = "";
}

// remove the item from the list when the user clicks on the item or the remove button;
function removeShoppingListItem(e) {
    if(e.target.getAttribute("class")==="remove-btn"&&e.currentTarget.getAttribute("class")!="remove-btn"){
        e.currentTarget.remove();
    };

}

// add event listener to the button to create a new item when clicked;
document.querySelector("#shopping-form>button").addEventListener("click", createItem);

