const express = require('express');

const app = express();

const port = 8080;

// GET request: /hello return
//http://localhost:8080
app.get('/hello', (req, res) => {

    res.send("Hello Express JS");

});

//GET request: /user return
//http://localhost:8080/user
app.get('/user', (req, res) => {

    var us = {

        first_name: "Pritesh",
        last_name: "Patel",
    }
    
    res.send(JSON.stringify(us));
});

//POST_ PATH PARAMETER
//http://localhost:8080/user/Pritesh/Patel

app.post('/user/:f_name/:l_name', (req, res) => {

    const firstName = req.params.f_name;
    const lastName = req.params.l_name;

    res.send({

        firstName,
        lastName,
    })
});

app.listen(port, () => {
    
    console.log(`Server is running at: http://localhost:${port}/`);
});