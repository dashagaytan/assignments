import React from "react"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import BlogList from "./components/BlogList"
import BlogPost from "./components/BlogPost"
import data from "./data"


export default function App(){
    const list = data.map(item =>{
        return(
            <BlogList
                key={item.id}
                {...item}
            />
        )
    })
    return(
        <div className="container">
        <Header />
        <Navbar />
        <section className="listData">
            {list}
            </section>
        <BlogPost />
    </div>
    )
}