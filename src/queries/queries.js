const axios = require("axios").default;

const instance = axios.create({
    baseURL: 'https://omris-be-nc-games.herokuapp.com/api/',
});

export function GetReviews(category) {

    let endpoint = "/reviews";
    console.log(category)
    // const endpoint = `/reviews?category=${category}`;
    if (category) {
    }

    return instance.get(endpoint, { params: {category: category} })
        .then((res) => {
            console.log(res);
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}


export function GetCategories() {
    return instance.get("/categories")
    .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}

// export default {GetReviews, GetCategories}