'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const webshot = require('webshot')

// Middleware
app.use( bodyParser.urlencoded({ extended: false }))
app.use( bodyParser.json() )


app.get('/', function(req, res) {
    res.send('Hola, esta es una api, para convertir un string html en un archivo de imagen');
});

app.post('/toimg', function(req, res) {

    let fragment = req.body.html;
    let route = req.body.route;

    webshot(fragment, route , {siteType:'html'}, function(err) {
        // screenshot now saved to hello_world.png

        if(err) return res.status(500).send({
            state: false,
            message: `Error al realizar la petición: ${err} `
        })

        res.status(200).send({
            state: true,
            route: route
        })
    });
});

module.exports = app
