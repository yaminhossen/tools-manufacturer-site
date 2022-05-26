import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/profile')
            .then(res => res.json())
            .then(data => setProfiles(data));
    }, [])
    console.log(profiles);
    const handleUpdated = (event) => {
        event.preventDefault();
        // const ratings = event.target.ratings.value;
        // const description = event.target.description.value;
        // console.log(ratings, description);
        const email = user?.email;

        const myprofile = {
            name: event.target.name.value,
            email: event.target.email.value,
            education: event.target.educationa.value,
            location: event.target.locationa.value,
            number: event.target.numbera.value
        }

        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myprofile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    return toast('Profile is successfully set')
                }
                else {
                    toast.error('Profile is not set')
                }

            })


    }
    return (
        <div className='addReview-form justify-center'>
            <h3 className='flex justify-center mt-12 text-4xl text-yellow-400'>This is My Profile</h3>
            {
                profiles.slice(-1).map(profile => <form onSubmit={handleUpdated}>
                    <input type="text" name="name" placeholder='name' value={user?.displayName} class="input input-bordered w-full max-w-xs" id="" />
                    <input type="text" name="email" placeholder='Email' value={user?.email} class="input input-bordered w-full max-w-xs" id="" />
                    <input type="text" name="education" placeholder='Education' value={profile.education} class="input input-bordered w-full max-w-xs" id="" />
                    <input type="text" name="location" placeholder='Location' value={profile.location} class="input input-bordered w-full max-w-xs" id="" />
                    <input type="number" name="number" placeholder='Number' value={profile.number} class="input input-bordered w-full max-w-xs" id="" />
                    <h3 className='flex justify-center mt-12 text-4xl text-yellow-400'>You Can Update Profile By Input Below the Data</h3>
                    <input type="text" name="educationa" placeholder='Education' class="input input-bordered w-full max-w-xs" id="" />
                    <input type="text" name="locationa" placeholder='Location' class="input input-bordered w-full max-w-xs" id="" />
                    <input type="number" name="numbera" placeholder='Number' class="input input-bordered w-full max-w-xs" id="" />
                    <input type="submit" class="btn btn-warning w-full max-w-xs" value="Update Profile" id="" />
                </form>)
            }
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MyProfile;