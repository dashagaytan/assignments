const express = require("express")

const app = express()

app.use(express.json())




app.listen(9000, ()=>{
    console.log("Server is running on port9000")
})

module.exportts = express