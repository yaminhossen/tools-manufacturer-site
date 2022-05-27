import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = ({ review }) => {
    const [user] = useAuthState(auth);
    const { ratings, description } = review;
    console.log(user);
    return (
        <div>
            <div class="card w-96 text-white bg-gray-500 text-neutral-content">
                <div class="card-body items-center text-center">
                    <p>Description: {description}</p>
                    <h3>Ratings: {ratings}</h3>
                </div>
            </div>
        </div>
    );
};

export default Review;