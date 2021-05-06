const fs  = require('fs');
const request = require('request');
const yargs = require('yargs').argv;
// console.log(yargs._[0]);
const catBreed = yargs._[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${catBreed}`, (error, response, body) => {
  // console.log(response);
  // console.log(typeof body);
  // console.log(body)
  const data = JSON.parse(body);
  console.log(data[0]['description']);
  if (error) {
    console.log('Breed Not Found');
    return;
  }
  fs.writeFile(catBreed, body, function(error) {
    if (error) {
      console.log('Request Failed');
      return;
    }
  });
});