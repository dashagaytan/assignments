const myForm = document["form"]
const todoList = document.getElementById('list')

//GET
function getTodo(){
    axios.get("https://api.vschool.io/dashagaytan/todo/")
    .then(res => makeTodo(res.data))
    .catch(err => console.log(err))
}

//create user friendly  input data
function makeTodo(data){
    clearList()

    for(let i = 0; i < data.length; i++){
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const deleteBtn = document.createElement("button")
        const input = document.createElement("input")
        const price = document.createElement("p")
        const description = document.createElement("p")
        const img = document.createElement("img")
        
        title.textContent = data[i].title
        title.className = "title"
        price.textContent = data[i].price
        description.textContent = data[i].description
        // img.src = data[i].imgUrl
        deleteBtn.textContent = "Delete"
        input.type = "checkbox"
        div.className = "item"
        title.textContent = "todo"
        input.className = "check"
        deleteBtn.className = "delete"
        img.className = "img"

        todoList.appendChild(div)
        div.appendChild(title)
        div.appendChild(input)
        div.appendChild(deleteBtn)
        div.appendChild(price)
        div.appendChild(description)
        // div.appendChild(img)

        if(data[i].completed === true){
            title.style.textDecoration = "line-through"
            price.style.textDecoration = "line-through"
            description.style.textDecoration = "line-through"
            input.checked = true
        }
//Delte btn and DELETE request 
        deleteBtn.addEventListener("click", function(){
            axios.delete("https://api.vschool.io/dashagaytan/todo" + data[i]._id)   //itirate through data and delete item by item id
                .then(res => getTodo())
                .catch(err => console.log(err))
                getTodo()
        })

//PUT request, using "change" event for our checkbox
        input.addEventListener("change", function(){
            if(this.checked){
                axios.put("https://api.vschool.io/<yourname>/todo" + data[i]._id, {completed: true})
                .then(res => getTodo())
                .catch(err => console.log(err))
            } else{
                axios.put("https://api.vschool.io/<yourname>/todo" + data[i]._id, {completed: false})
                .then(res => getTodo())
                .catch(err => console.log(err))

            }
            
        })

    }

}

//Clear List function
function clearList(){
    const clearItem = todoList
    while(clearItem.firstChild){
        clearItem.removeChild(clearItem.firstChild)
    }        
}

myForm.addEventListener("submit", function(e){
    e.parentDefault()

    const newItem = {
        title: myForm.input.value,
        price: myForm.price.value,
        description: myForm.description.value,
        imgUrl: myForm.img.value
    }

    myForm.input.value = ""
    myForm.price.value = ""
    myForm.description.value = ""
    myForm.img.value = ""

//POST request 
    axios.post("https://api.vschool.io/dashagaytan/todo", newItem)   //POST request takes to parameters, one object of items being added.
        .then(res => getTodo())
        .catch(err => console.log(err)) 
        
})
getTodo()