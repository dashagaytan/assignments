// submit event 
const form = document.addItem

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const input = form.title.value 
    form.title.value = " "

    // create new list items in ul
    const ul = document.getElementById("list")
    const li = document.createElement("li")
    li.setAttribute("id", "item")
    document.getElementByTagname("ul").append(li)

    //create list item name 
    const div = document.getElementById("div")
    div.textContent = input
    div.classList.add("newItem")
    document.getElementsByTagName("li").append(div)

    //create edit button for new list item
    const edit = document.getElementById("edit")
    edit.textContent = "edit"
    li.append(edit)

    //create X button to delete a list item
    const deleteBtn = document.getElementById("button")
    deleteBtn.textContent = "X"
    deleteBtn.classList.add("delete")
    li.append(deleteBtn)

    //add action to our delete button 
    deleteBtn.addEventListener("click", function(){
        div.remove()
        edit.remove()
        deleteBtn.remove()
        li.remove
    })

});


