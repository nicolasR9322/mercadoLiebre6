const express = require("express")
const app = express()
const path = require("path")
const PORT = 3000
app.use(express.static("public"))

app.get("/", (req,res) => {
    return res.sendFile(path.join(__dirname, "/views/home.html"))
})
app.get("/home", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get("/forms", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/forms.html"))
})

app.get("/register", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get("/login", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/login.html"))
})


app.listen(PORT, () => {
    console.log(`Servidor levantado en puerto ${PORT} http://localhost:${PORT}`);
})