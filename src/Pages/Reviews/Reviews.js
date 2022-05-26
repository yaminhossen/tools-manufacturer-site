import React, { useEffect, useState } from 'react';
import Review from './Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    console.log(reviews);
    return (
        <div >
            <h3 className='flex justify-center mt-12 text-4xl text-yellow-400'>The Review From Users:{reviews.length}</h3>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>

        </div>
    );
};

export default Reviews;