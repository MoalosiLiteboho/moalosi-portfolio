import {useEffect, useState} from "react";
import {Review} from "@/share/types/review.ts";
import {fetchAllReviews} from "@/services/review-service.ts";

function useReviews() {
    const [loading, setLoading] = useState<boolean>(false);
    const [reviews, setReviews] = useState<Review[]>([]);
    const [error, setError] = useState<string>('')

    function findAllReviews() {
        setLoading(true);
        fetchAllReviews().then(res => {
            setReviews(res.data);
        }).catch(err => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        findAllReviews();
    }, []);

    return {
        loading,
        reviews,
        error
    };
}

export { useReviews as default }