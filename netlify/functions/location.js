const axios = require("axios");


exports.handler = async function (event, context) {
    try {
        const { q } = event.queryStringParameters;
        const res = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${q}&limit=5&appid=${process.env.REACT_APP_API_KEY}`);
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