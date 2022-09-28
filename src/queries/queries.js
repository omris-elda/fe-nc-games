const axios = require("axios").default;

const instance = axios.create({
    baseURL: 'https://omris-be-nc-games.herokuapp.com/api/',
});

export function GetReviews(category, review_id) {

    let endpoint = "/reviews";
    // console.log(category, "This is the category");
    // console.log(review_id, "This is the ID");

    if (category) {
        endpoint += `?category=${category}`
    }

    if (review_id) {
        endpoint += `/${review_id}`
    }

    // Couldn't get parameters to work when they were conditional so

    // const params = {
    //     category: category,
    // };

    return instance.get(endpoint)
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

export function GetComments(review_id) {
    console.log(review_id, "review id in query")
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

// export default {GetReviews, GetCategories}