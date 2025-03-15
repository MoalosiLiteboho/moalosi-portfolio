import axios from "axios";

async function fetchAllReviews() {
    return await axios.get("/json/best-reviews.json")
}

export { fetchAllReviews }