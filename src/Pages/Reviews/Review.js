import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Review = ({ review }) => {
    const [user] = useAuthState(auth);
    const { ratings, description } = review;
    return (
        <div>
            <div class="card w-96 bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">User: {user?.displayName}</h2>
                    <p>Description: {description}</p>
                    <h3>Ratings: {ratings}</h3>
                </div>
            </div>
        </div>
    );
};

export default Review;