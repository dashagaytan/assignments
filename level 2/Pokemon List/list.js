// step one - get the data

const xhr = new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

//step two - display the data

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data.results)
    }
}

function showData(arr){
    for(let i = 0; i < arr.length; i++){
        const h3 = document.createElement('h3')
        h3.textContent = arr[i].name
        document.body.appendChild(h3)
    }
}