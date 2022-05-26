import React from 'react';
import './AddReview.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddReview = () => {
    const handleAddReview = event => {
        event.preventDefault();
        const ratings = event.target.ratings.value;
        const description = event.target.description.value;
        console.log(ratings, description);

        const review = {
            description: event.target.description.value,
            ratings: event.target.ratings.value
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    return toast('Review is successfully set')
                }
                else {
                    toast.error('Review is not set')
                }
            })
    }
    return (
        <div className='addReview-form justify-center'>
            <h3 className='flex justify-center mt-12 text-4xl text-yellow-400'>Please Review This Item</h3>
            <form onSubmit={handleAddReview}>
                <input type="text" placeholder='Description' class="input input-bordered w-full max-w-xs" name="description" id="" />
                <input type="text" placeholder='Ratings' class="input input-bordered w-full max-w-xs" name="ratings" id="" />
                <input type="submit" class="btn btn-warning w-full max-w-xs" value="Add Review" id="" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddReview;