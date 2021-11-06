const express = require("express");
const app = express();
let country;
const names = require("./names.json");
const fetch = require("node-fetch");
const cors = require("cors");
fetch("https://ipinfo.io/json?846fb7beeec27d").then(
    response => { return response.json() }
).then(data => {
    country = names[data.country];
})
app.use(cors());

var axios = require("axios").default;

var options = {
    method: 'GET',
    url: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total',
    params: { country: country },
    headers: {
        'x-rapidapi-host': 'covid-19-coronavirus-statistics.p.rapidapi.com',
        'x-rapidapi-key': '28f2d05702mshc8bab443e9e2838p13bf4ejsn6bb43e038c54'
    }
};
let numOfDead;
axios.request(options).then(function(response) {
    numOfDead = response.data.data.deaths;
}).catch(function(error) {
    console.error(error);
});

app.get("/numberofdead", (req, res) => {
    res.json({ numberOfDead: numOfDead })
})

app.listen(3000, () => {
    console.log("App is listening.....");
});