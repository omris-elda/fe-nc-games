const axios = require("axios").default;

const instance = axios.create({
    baseURL: 'https://omris-be-nc-games.herokuapp.com/api/',
});

export default function GetReviews() {
    return instance.get("/reviews/")
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}

