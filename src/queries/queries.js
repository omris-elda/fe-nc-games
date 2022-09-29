const axios = require("axios").default;

const instance = axios.create({
    baseURL: 'https://omris-be-nc-games.herokuapp.com/api/',
});

export function GetReviews(category, review_id) {

    let endpoint = "/reviews";


    if (category) {
        endpoint += `?category=${category}`
    }

    if (review_id) {
        endpoint += `/${review_id}`
    }

    return instance.get(endpoint)
        .then((res) => {
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

export function GetComments(review_id) {
    return instance.get(`/reviews/${review_id.comment_id}/comments`)
    .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}

// add/remove votes to a review
export function PatchReviewVotes(review_id, vote) {

    return instance.patch(`reviews/${review_id}`, { inc_votes: vote })
    .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}

export function GetUsers() {
    return instance.get("users")
    .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}

