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
    ul.append(li)

    //create list item name 
    const div = document.createElement("div")
    div.textContent = input
    div.classList.add("newItem")
    li.append(div)

    //create edit button for new list item
    const edit = document.createElement("button")
    edit.textContent = "Edit"
    li.append(edit)

    //create X button to delete a list item
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"
    deleteBtn.classList.add("delete")
    deleteBtn.style.marginInline = "20px"
    li.append(deleteBtn)

    //add action to our delete button 
    deleteBtn.addEventListener("click", function(){
        div.remove()
        edit.remove()
        deleteBtn.remove()
        li.remove
    })

    // edit contents of the list 
    edit.addEventListener("click", function(event){
        event.preventDefault()
        div.contentEditable = "true"
    });

});
