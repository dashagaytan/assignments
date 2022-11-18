import React from "react"

function Form() {
const [nameData, setNameData] = React.useState(
    {
        name: "",
        names: []
    }  
)

  function handleChange(event){
        const {value, name} = event.target
        setNameData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

  function handleSubmit(event) {
    event.preventDefault()
    setNameData(prevState => ({
        name: "",
        names: [...prevState, 
            prevState.name]
    }))
    // console.log(nameData)
  }

  const nameArr = nameData.names.map(name => <li>{name}</li>)

  return(
    <div className="form-container">
        <h1>Name Entry: </h1>
        <form className="form" onSubmit={handleSubmit}>
            <input name="name"
            type="text" onChange={handleChange}
            placeholder="Enter name" value={nameData.name}
            />
            <br></br>
            <br></br>
            <button>Submit</button>
        </form>
            <ol>{nameArr}</ol>
    </div>
  )

}

export default Form;