// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP } = require('./iss');
const { fetchMyCoordsByIP } = require('./coords');
const request = require('request');
let myIP;


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
  myIP = ip;
});

fetchMyCoordsByIP((error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coords:' , coords);
});







