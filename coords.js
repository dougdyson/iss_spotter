/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require('request');

const fetchMyCoordsByIP = function(callback) {
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

module.exports = { fetchMyCoordsByIP };