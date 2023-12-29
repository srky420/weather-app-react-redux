const axios = require('axios');


exports.handler = async function (event, context) {
    try {
        const { lat, lon } = event.queryStringParameters;
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`);
        return {
            statusCode: 200,
            body: JSON.stringify(res.data)
        }
    }
    catch (err) {
        return {
            statusCode: 404,
            body: JSON.stringify(err)
        }
    }
}