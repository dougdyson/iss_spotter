// index.js

// The code below is temporary and can be commented out.
const { fetchMyIP } = require('./iss');
const { fetchMyCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const request = require('request');

const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' };
const myIP = '24.84.206.8';


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});

fetchMyCoordsByIP(myIP , (error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coords:' , coords);
});

fetchISSFlyOverTimes( exampleCoords, (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned coords:' , coords);
});

fetchISSFlyOverTimes(exampleCoords, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned flyover times:' , passTimes);
});



