const axios = require("axios").default;

const instance = axios.create({
    baseURL: 'https://omris-be-nc-games.herokuapp.com/api/',
});

export function getReviews(category, review_id) {

    let endpoint = "/reviews";

    const params = {
        category: category,
        sortBy: "none",
        orderBy: "asc",
    }

    // if (category) {
    //     endpoint += `?category=${category}`
    // }

    if (review_id) {
        endpoint += `/${review_id}`
    }

    return instance.get(endpoint, {params})
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}


export function getCategories() {
    return instance.get("/categories")
    .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}

export function getComments(review_id) {
    return instance.get(`/reviews/${review_id.comment_id}/comments`)
    .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}

// add/remove votes to a review
export function patchReviewVotes(review_id, vote) {

    return instance.patch(`reviews/${review_id}`, { inc_votes: vote })
    .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}

export function getUsers() {
    return instance.get("users")
    .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.log(error);
    })
}

export function postComment(newComment) {
    console.log(newComment)
    return instance.post(`reviews/${newComment.review_id}/comments`, newComment)
    .then((res) => {
        return res.data;
    })
    .catch((error) => {
        console.log(error);
    })
}