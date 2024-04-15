const express = require('express')
const app = express()

app.set("view engine", "ejs")
app.use(express.static('public'))
app.get("/", (req, res)=> {
    res.send("Welcome to My Video Call App")
})
app.listen(3000 , ()=> {
    console.log("Server running on port 3000");
})