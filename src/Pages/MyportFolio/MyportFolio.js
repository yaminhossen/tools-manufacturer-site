import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h3 className='text-3xl font-bold my-8 text-blue-400 text-center'>This is my portfolio</h3>
            <div className='text-center'>
                <h3 className='text-2xl  m-2'>Name: Yamin Hossen</h3>
                <h3 className='text-2xl  m-2'>Email: yaminhossen96@gmail.com</h3>
                <h3 className='text-xl  m-2'>Education: BSc in CSE. Manarat International University</h3>
                <div>
                    <h2 className='text-xl text-blue-700 mt-4'>Technology skill as a web developer</h2>
                    <div>
                        <p>1. HTML5</p>
                        <p>2. CSS3</p>
                        <p>3. JavaScript</p>
                        <p>4. Bootstrap</p>
                        <p>5. Tailwind CSS</p>
                        <p>6. React</p>
                        <p>7. Firebase</p>
                        <p>8. Node</p>
                        <p>9. Express</p>
                        <p>10. MongoDB</p>
                        <p>11. Github</p>
                    </div>
                </div>
                <div>
                    <h2 className='text-xl text-blue-700 mt-4'>My three website link</h2>
                    <p>Link 1. <a target='blank' href="https://fruits-warehouse-management.web.app/" class="text-blue-600 visited:text-purple-600 ...">
                        https://fruits-warehouse-management.web.app/
                    </a></p>
                    <p>Link 2. <a target='blank' href="https://endearing-dieffenbachia-8e3605.netlify.app/home" class="text-blue-600 visited:text-purple-600 ...">
                        https://endearing-dieffenbachia-8e3605.netlify.app/home
                    </a></p>
                    <p>Link 3. <a target='blank' href="https://wild-photographer-e3afa.web.app/" class="text-blue-600 visited:text-purple-600 ...">
                        https://wild-photographer-e3afa.web.app/
                    </a></p>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;