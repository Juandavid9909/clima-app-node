const axios = require("axios");

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=20b4b4ec00adad74f1296ac4d59a3cce`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}