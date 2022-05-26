import React from 'react';
import creview from '../../images/extra/creview.png';
import review from '../../images/extra/review.png';
import revenue from '../../images/extra/revenue.png';
import tools from '../../images/extra/tools.png';

const Summury = () => {

    return (
        <div className=' w-full mx-auto '>
            <h3 className='text-center text-4xl font-bold text-blue-500 m-24'>This is our buisness summury</h3>

            <div class="stats ml-24">
                <div class="stat pl-24">
                    {/* <h1> class="stat-figure text-primary"</h1> */}
                    <div class="w-24 rounded-full ">
                        <img src={creview} alt='' />
                    </div>
                    <div class="stat-title">Total Customer</div>
                    <div class="stat-value text-primary">25.6K</div>
                    <div class="stat-desc">20% more than last month</div>
                </div>
            </div>
            <div class="stats  ml-24">
                <div class="stat pl-24">
                    <div class="w-24 pb-3 rounded-full ">
                        <img src={review} alt='' />
                    </div>
                    <div class="stat-title"> Reviews</div>
                    <div class="stat-value text-red-400 ">30.5K +</div>
                    <div class="stat-desc">10% more than last month</div>
                </div>
            </div>
            <div class="stats  ml-24">
                <div class="stat pl-24">
                    <div class="w-28 pb-2 rounded-full ">
                        <img src={revenue} alt='' />
                    </div>
                    <div class="stat-title"> Revenue</div>
                    <div class="stat-value text-green-400">250.6K +</div>
                    <div class="stat-desc">5% more than last month</div>
                </div>
            </div>
            <div class="stats  ml-24">
                <div class="stat pl-24">
                    <div class="w-24 rounded-full ">
                        <img src={tools} alt='' />
                    </div>
                    <div class="stat-title"> Tools</div>
                    <div class="stat-value text-blue-400">500 +</div>
                    <div class="stat-desc">Those are the best tools</div>
                </div>
            </div>
        </div>
    );
};

export default Summury;