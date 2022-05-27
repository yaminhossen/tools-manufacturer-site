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
        <div className='mt-24'>
            <h3 className='flex justify-center font-bold text-secondary  mt-12 text-4xl '>The Review From Users:{reviews.length}</h3>
            <p className='text-center pb-12'>We have worked with hundreds of different clients around the globe. Check what a selection of them have to say about us.</p>
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