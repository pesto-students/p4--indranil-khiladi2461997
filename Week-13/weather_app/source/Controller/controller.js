//TODO: Create controller file to perform weather data application
//* Functions : Weather information function, Forecast information function, Present time information, function to filter all information

// importing axious for API calls
const axios = require('axios')
// importing json data file
const cities = require('./weather_app.json');

// fucntion to get data of particular city
const WeatherInfo = (req, res) => {
    //getting search and page functionality from request
    const { search, page, limit } = req.body;
    //condition for searching
    if (search || (page && limit)) {
        let data;
        //filtering data by search query
        const searchResult = cities.filter(item => item.city.name.toString() === search);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const result = cities.slice(startIndex, endIndex);

        search === '' ? (data = result) : (data = searchResult)
        //returning filtered data and true 
        return res.json({
            status: true,
            data
        });
    } else {
        //if no search then return false
        return res.json({
            status: false,
            message: "Page and limit is required"
        });
    }
}
//function to get forecast information by calling async api using axious
const ForecastInfo = async (req, res) => {

    //getting city from request
    const { city } = req.body;

    //if city is there then filter by id
    if (city) {
        const searchResult = cities.filter(item => (item?.city?.findname).toLowerCase() === city.toLowerCase());
        //code to be run if search result is not null or empty
        if (searchResult !== []) {

            let lat = searchResult[0]?.city?.coord?.lat, lon = searchResult[0]?.city?.coord?.lon;
            //awaiting for api calling process to be completed and using then method performing return json file
            await axios.post(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=e08982f98124c820213f2063b78301de`).then((data) => {
                return res.json({
                    status: true,
                    data
                })
            }).catch((error) => {
                return res.json({
                    status: false,
                    message: error.message
                })
            })

        } else {
            return res.json({
                status: false,
                message: "This city does not exist in list"
            })
        }


    } else {
        return res.json({
            status: false,
            message: "City name is required"
        })
    }

}
//async function to get present time information
const currentInfo = async (req, res) => {
    //Same search logic as above function
    const { city } = req.body;

    if (city) {
        const searchResult = cities.filter(item => (item?.city?.findname).toLowerCase() === city.toLowerCase());

        if (searchResult !== []) {
            let lat = searchResult[0]?.city?.coord?.lat, lon = searchResult[0]?.city?.coord?.lon;

            await axios.post(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e08982f98124c820213f2063b78301de`).then((data) => {

                return res.json({
                    status: true,
                    //Returning particular present time data
                    data: data?.data
                })
            }).catch((error) => {
                return res.json({
                    status: false,
                    message: error.message
                })
            })

        } else {
            return res.json({
                status: false,
                message: "City is not exist"
            })
        }
    } else {
        return res.json({
            status: false,
            message: "City is required"
        })
    }

}
//function to filter all the information collected
const filterInfo = (req, res) => {

    const { search } = req.body;
    //if search is there then performing certain conditions and filtering data according to it
    if (search) {
        const getData = (searchCase) => {
            //auxiliary space to store filtered data
            const result = [];
            let search = searchCase.toLowerCase();
            for (let i = 0; i < cities.length; i++) {

                for (const prop in cities[i]) {
                    //if property is not equal to time then get data using index of search 
                    if (prop != 'time') {
                        let condition = prop == 'weather' ? cities[i][prop][0] : cities[i][prop];

                        for (let l in condition) {
                            //if search is matched then push it to auxiliary space otherwise use the coordinates in condition
                            if (condition[l].toString().toLowerCase().indexOf(search) != -1) result.push(cities[i]);
                            if (l == "coord") {
                                for (let j in condition[l]) {
                                    if (condition[l][j].toString().toLowerCase().indexOf(search) != -1) result.push(cities[i]);
                                }
                            }
                        }
                    }
                }
            }
            //filtering data collected in auxiliary space
            const unique = result.filter(element => {
                //check if result include the city name searched for
                const isDuplicate = result.includes(element.city.name);
                //if isDuplicate is false then add data to auxilliary space
                if (!isDuplicate) {
                    result.push(element.city.name); 
                    return true;
                } 
                return false;
            })

            return unique
        }
        //calling getData function and performing search and filter 
        const data = getData(search);
        return res.json({
            status: true,
            data: data
        })

    } else {
        return res.json({
            status: false,
            message: "Search must be required"
        })
    }

}

module.exports = { WeatherInfo, ForecastInfo, currentInfo, filterInfo }