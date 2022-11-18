import React from "react"

function Form() {
const [nameData, setNameData] = React.useState(
    {
        firstName: "",
        orderList: ""
    }
    
)

  function handleChange(event){
    const {name, value, type} = event.target
    setNameData(prevNameData =>{
        return{
            ...prevNameData,
            [name]: type === value
        }
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(nameData)
  }
  
  return(
    <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Name Entry</h1>

            <input 
            type="text"
            placeholder="Enter name"
            name="firstName"
            onChange={handleChange}
            />
            <br>
            </br>
            <br>
            </br>
            <button>Submit</button>
        </form>
    </div>
  )

}

export default Form;