// iss.js
const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    callback(null, ip);
  });
};

const fetchMyCoordsByIP = function(ip, callback) {
 
  request('https://ipvigilante.com/24.84.206.8', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching coords: ${body}`), null);
      return;
    }
    let rtrnObj = JSON.parse(body);
    //console.log(rtrnObj);
    coords = rtrnObj.data.latitude + ', ' + rtrnObj.data.longitude;
    callback(null, coords);
  });
};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
const fetchISSFlyOverTimes = function(coords, callback) {
  console.log(coords);
  request('http://api.open-notify.org/iss-pass.json?lat=49.27670&lon=119.13000', (error, response, body) => {
    if (error) return callback(error, null);

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching ISS flyover times: ${body}`), null);
      return;
    }
    let rtrnObj = JSON.parse(body);
    //console.log(rtrnObj);
    //coords = rtrnObj.data.lat + ', ' + rtrnObj.data.lon;
    callback(null, rtrnObj);
  });
};

module.exports = { fetchMyIP, fetchMyCoordsByIP, fetchISSFlyOverTimes };