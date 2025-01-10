import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/posts", (req, res) => {
    res.render("posts.ejs")
})

app.get("/contact", (req, res) => {
    res.render("contact.ejs")
})

app.get("/about", (req, res) => {
    res.render("about.ejs")
})

app.post("/submit", (req, res) => {
    res.render("posts.ejs", {
        title: req.body["title"],
        content: req.body["textArea"]
    })
})

app.delete("/submit", (req, res) => {
    res.render("posts.ejs")
})

app.listen(port, () => {
    console.log(`Listening on Port: ${port}`)
})