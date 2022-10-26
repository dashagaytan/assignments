import React from "react"
import Header from "./components/Header"
import BlogPost from "./components/BlogPost"
import Footer from "./components/Footer"
import data from "./data"
import styles from "./style.css"

export default function App(){
    const list = data.map(item =>{
        return(
            <BlogPost
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div className="container">
        <Header />
            {list}
             <Footer />
    </div>
    )
}