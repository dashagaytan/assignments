// submit event using arrow function
const form = document.addItem

form.addEventListener("submit", (event) => {
        event.preventDefault();

        const input = form.title.value;
        form.title.value = " ";

        // create new list items in ul
        const ul = document.getElementById("list");

        //create list item name 
        const li = document.createElement("li");
        li.setAttribute("id", "item");
        ul.append(li);

        const div = document.createElement("div");
        li.textContent = input;
        div.classList.add("newItem");
        li.appendChild(div);

        //create edit button for new list item
        const edit = document.createElement("button");
        edit.textContent = "Edit";
        li.appendChild(edit);
    
        //create X button to delete a list item
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete");
        deleteBtn.style.margin = "20px";
        li.appendChild(deleteBtn);

        //add action to our delete button 
        deleteBtn.addEventListener("click", function () {
            //div.remove();
            // edit.remove();
            // deleteBtn.remove();
            li.remove();
        });

        // edit contents of the list using arrow function 
        edit.addEventListener("click", (event) => {
            event.preventDefault();
            div.contentEditable = "true";
        });

    });
