import React from 'react';
import innovaton from '../../images/extra/innovation.png'
import quality from '../../images/extra/quality.png'
import support from '../../images/extra/support.png'

const ExtraSection1 = () => {
    return (
        <div>
            <h3 className='text-center text-cyan-500 text-4xl font-bold mt-32'>Why  Choose Us?</h3>
            <div class="flex  text-center flex-col w-3/5 mx-auto border-opacity-50">
                {/* <div class="grid h-20 card bg-base-300 rounded-box place-items-center">Why  Choose Us?</div> */}
                <div class="divider"></div>
                {/* <div class="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> */}
            </div>
            <h3 className='text-center w-3/4 mx-auto'>ever since, we have dedicated ourselves to making industrial Hand tools with the goal to become the best manufacturers of Hand Tools in India. Here some reasons why we are unique</h3>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
                <div class="card w-3/5 bg-base-100 ml-20  shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={innovaton} alt="innovation" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Expertise & Innovation</h2>
                        <p>Since 1978 we have been supplying the highest quality tools to a variety of specialist markets.</p>
                    </div>
                </div>
                <div class="card w-3/5 bg-base-100  ml-20 shadow-xl">
                    <figure class="px-10 m-8  pt-12">
                        <img src={quality} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Quality</h2>
                        <p>We have developed a culture of continuous improvement. We give guarantee against any manufacturing defect.</p>
                    </div>
                </div>
                <div class="card w-3/5 bg-base-100  ml-20 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={support} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Service & Support</h2>
                        <p>We have invested heavily to ensure that our products, processes and customer service are second to none.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection1;