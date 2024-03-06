const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home')
});

app.get('/rollDice', (req, res) => {
    let diceVal = Math.floor( Math.random() * 6 ) + 1;
    res.render('rollDice' ,{ diceVal });
});

app.get('/ig/:username', (req, res) => {
    let { username } = req.params;
    const instaData =  require('./require.json')
    // const followers = ['adam','raj','alice','bob'];
    // res.render('instagram', { username , followers });
    res.render('instagram', { data : instaData[username] });
});

app.listen(port ,(req,res) => {
    console.log(`listening on ${port}`);
});