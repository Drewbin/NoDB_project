const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const gamesList = require('../app-list.json');
console.log(gamesList);

const app = express();

const favorites = [];

app.use(cors());
app.use(bodyParser.json());

app.post('/api/favorites', (req,res) => {
    const taggedId = req.body.id;

    tagged.push(taggedId);
    res.status(201).send(tagged)
})

app.listen(3002, () => {
    console.log('App up and running at localhost:3002');
});