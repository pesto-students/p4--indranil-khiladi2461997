//using express router functionality for endpoint response to client request
const express = require('express');
const router = express.Router();
//importing all the function created in controller file
const { WeatherInfo, ForecastInfo, currentInfo, filterInfo } = require('../Controller/controller');

//creating a route through all function
router.post('/multipleCities', WeatherInfo);

router.post('/forecastData', ForecastInfo);

router.post('/currentData', currentInfo);

router.post('/filterData', filterInfo);

module.exports = router;