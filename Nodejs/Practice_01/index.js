var express = require('express')
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello! How are You?")
})

app.listen(3000, () => {
    console.log(`Server Running on http://localhost:${port}/`)
});