const express = require("express")
const path = require("path")
const app = express()

const publicDirectoryPath = path.join(__dirname, "../public")
app.use(express.static(publicDirectoryPath))

const port = process.env.PORT || 3000

app.all("*", (req, res)=>{
    res.render("index.html")
})

app.listen(port, ()=>{
    console.log("The server is up mennnnn!")
})