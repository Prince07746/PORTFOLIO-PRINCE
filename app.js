const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const port = 3030;

app.use(express.static(__dirname));



app.get("/", (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.log("Error reading the file:", err);
            res.status(500).send("Internal Server Error");
            return;  // Stop further execution if there's an error
        }
        res.setHeader("Content-Type", "text/html");
        res.send(data);
    });
});

app.listen(port, (err) => {
    if (err) {
        console.log("Error starting the server:", err);
    } else {
        console.log(`Server is running on http://localhost:${port}`);
    }
});
