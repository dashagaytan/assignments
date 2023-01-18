import React from "react";
import Badge from "./Badge"

function Form(){
    const [userBadge, setUserBadge] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        about: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        setUserBadge(prevState => {
            return {
                ...prevState, 
                [name]: value
            }
        })
    }

    // creating a useState array of badges
    const [badgeArr, setBadgeArr] = React.useState([])

    function handleSubmit(event){
        event.preventDefault();
        setBadgeArr(prevState => [...prevState, userBadge])
        setUserBadge({
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            about: ""
        })
    }

    // maping throygh an array of badges to display each badge in DOM
    const badges = badgeArr.map((badge, index) => <Badge {...badge} key={index}/>)

    return(
        <div className="form-container">
            <h1 className="title"> Name Badge</h1>
            <form name="form" onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="First Name"
                name="firstName"
                value={userBadge.firstName}
                onChange={handleChange}
                required
                />

                <input 
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={userBadge.lastName}
                onChange={handleChange}
                required
                />

                <input 
                type="email"
                placeholder="Email"
                name="email"
                value={userBadge.email}
                onChange={handleChange}
                required
                />

                <input 
                type="tel"
                placeholder="Place of Birth"
                name="placeOfBirth"
                value={userBadge.placeOfBirth}
                onChange={handleChange}
                required
                />

                <input 
                type="number"
                placeholder="Phone Number"
                name="phone"
                minLength="10"
                value={userBadge.phone}
                onChange={handleChange}
                required
                />

                <input
                type="text"
                placeholder="Favorite Food"
                name="favoriteFood"
                value={userBadge.favoriteFood}
                onChange={handleChange}
                /> 

                <textarea 
                className="textArea"
                value={userBadge.about}
                placeholder="Tell us about yourself"
                name="about"
                onChange={handleChange}
                />
                
                <button className="btn">Submit</button>
            </form>
            {badges}
        </div>
    )
}

export default Form;