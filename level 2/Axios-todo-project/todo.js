//GET
function getTodo(){
    axios.get("https://api.vschool.io/dashagaytan/todo")
    .then(res => makeTodo(res.data))
    .catch(err => console.log(err))
}

//create user friendly  input data
function makeTodo(data){
    clearList()

    for(let i = 0; i < data.length; i++){
        const div = document.createElement('div')
        const title = document.createElement('h3')
        const input = document.createElement('input')
        // const img = document.createElement('img')
        const deleteBtn = document.createElement('button')

        title.textContent = data[i].title
        deleteBtn.textContent = "Delete"
        input.type = "checkbox"
        div.className = "item"
        input.className = "check"
        deleteBtn.className = "delete"

        document.getElementById('list').appendChild(div)
        div.appendChild(title)
        div.appendChild(input)
        div.appendChild(deleteBtn)

        if(data[i].completed === true){
            title.style.textDecoration = "line-through"
            checkbox.checked = true
        }

        deleteBtn.addEventListener("click", function(){
            axios.delete("https://api.vschool.io/dashagaytan/todo" + data[i]._id)   //itirate through data and delete item by item id
                .then(res => getTodo())
                .catch(err => console.log(err))
        })

    }

}


//Clear List function
function clearList(){
    const listItem = document.getElementById("list")
    while(listItem.firstChild)
        listItem.removeChild(listItem.firstChild)
}


const myForm = document.myForm

myForm.addEventListener("submit", (e)=>{
    e.parentDefault()

    const newItem = {
        title: "myForm.input.value"
    }

    myForm.input.value = ""

//POST request 
    axios.post("https://api.vschool.io/dashagaytan/todo", + newItem)   //POST request takes to parameters, one object of items being added.
        .then(res => getTodo())
        .catch(err => console.log(err)) 
        
})




