const express = require("express");
const app = express();
const PORT = 8000;

app.use(require("./router/routes"));

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})