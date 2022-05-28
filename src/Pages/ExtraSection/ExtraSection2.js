import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ExtraSection2 = () => {
    const [user] = useAuthState(auth);
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        fetch('https://damp-eyrie-00701.herokuapp.com/profile')
            .then(res => res.json())
            .then(data => setProfiles(data));
    }, [])
    console.log(profiles);
    const handleUpdated = (event) => {
        event.preventDefault();
    }
    return (
        <div className=' my-20'>

            <div class="hero mt-30 min-h-screen bg-base-200">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">About Our Company</h1>
                        <p class="py-6">It is a world-renowned high-quality Tools manufacturing company. We are a leading supplier of ever-increasing “range” of high-quality tools used in a variety of markets and applications throughout the world.</p>
                    </div>
                    <div class="card mt-32 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body text-black bg-orange-100 ">
                            {
                                profiles.slice(-1).map(profile => <form onSubmit={handleUpdated} className='text-center'>
                                    <h3 className='text-center m-2 text-2xl font-bold '>Request A Callback</h3>
                                    <input className='mb-2 p-2 border-2 rounded-md' type="text" placeholder="Your Name" value={profile.name} class="input input-bordered" />
                                    <input className='mb-2 p-2 border-2 rounded-md' type="text" placeholder="Your Email" value={profile.email} class="input input-bordered" />
                                    <input className='mb-2 p-2 border-2 rounded-md' type="number" placeholder="Phone Number" value={profile.number} class="input input-bordered" />
                                    <input className='mb-2 p-2 border-2 rounded-md' type="text" placeholder="Location" value={profile.location} class="input input-bordered" />

                                    <textarea class="mb-2 p-2 textarea textarea-bordered" placeholder="Enter your description"></textarea>
                                    <input className='m-2 p-2  bg-orange-300 rounded-md' type="submit" value="Request a Callback" />
                                </form>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection2;