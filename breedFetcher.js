// const fs  = require('fs');
const request = require('request');
// const yargs = require('yargs').argv;
// console.log(yargs._[0]);


const fetchBreedDescription = function(breedName, callback) {
  console.log("name", breedName);
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    let data = null;

    if (!error) {
      if (JSON.parse(body).length === 0) {
        error = 'invalid breed name';
      } else {
        data = JSON.parse(body)[0]['description'];
      }
    }
    callback(error, data);
    
  });
};

module.exports = { fetchBreedDescription };