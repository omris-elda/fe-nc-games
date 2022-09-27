const axios = require("axios").default;

const instance = axios.create({
    baseURL: 'https://omris-be-nc-games.herokuapp.com/api/',
});

export default function GetReviews(category) {

    let endpoint = "/reviews";

    // if (category) {
    //     endpoint = `/reviews?category=${category}`;
    // }

    return instance.get(endpoint, { params: {category: category} })
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}

