import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let posts = [{title: "First Post", content: "This is the content of the first post.",},
            {title: "Second Post", content: "This is the content of the second post.",},
            {title: "Third Post", content: "This is the content of the third post.",},
            {title: "Fourth Post", content: "This is the content of the fourth post.",},
            {title: "Fifth Post", content: "This is the content of the fifth post.",},]

app.get("/", (req, res) => {
    res.render("index", {posts: posts});
});

app.get("/create-post", (req, res) => {
    res.render("createpost");
})

app.post("/", (req, res) => {
    //Handle form submission and save the post, Add database later
    const title = req.body.title;
    const content = req.body.content;
    posts.push({title,content});
    res.redirect("/");
});
app.listen(port, () => {
    console.log("Server is running on port " + port);
});