import React from 'react';
import find from '../../images/extra/findProduct.png';

const Blog = () => {
    return (
        <div className='w-3/5 mx-auto mt-10'>
            <h2 className='text-blue-400 text-2xl mt-2 mb-1'>How does prototypical inheritance work?</h2>
            <h3>Answer: The Prototypal Inheritance is a feature in javascript. Each object has a private property which holds a link to another object called its prototype. It is used to add method an properties in object. Its get and set the prototype in object. And we use like Object.getPrototype and Object.setPrototype.</h3>
            <h2 className='text-blue-400 text-2xl mt-2 mb-1'>What is unit test? Why should write unit tests?</h2>
            <h3>Answer: Unit testing is a type software. Unit Testing is the process of checking small pieces of code for any issues. <br />
                Developer should write unit test on their code. Because make sure that there have no issues or bug on their code. And code is correct. And this help to detect bug in future.</h3>
            <h2 className='text-blue-400 text-2xl mt-2 mb-1'>Why you do not set the state directly in react?</h2>
            <h3>Answer: When you directly update the state it won't re render the component. Thats means it does not change this state immediately. And for this method only return the present value. You will lose control of the state across all components.</h3>
            <h2 className='text-blue-400 text-2xl mt-2 mb-1'>How will you improve the performance of a React application?</h2>
            <h3>Answer: For improve the performance to ensure re-rendering a component only happens when necessary. Memoizing React components to prevent unnecessary re-renders. Code-splitting is another important optimization technique for a React application. Because by default all data load at a time.  We can avoid rendering all of the images at once to improve the page load time.</h3>
            <h2 className='text-blue-400 text-2xl mt-2 mb-1'>How will you implement a search to find products by name?</h2>
            <div className='w-3/5'>
                <h2>The answer given below </h2>
                <h2>I dont understand how to give this answer so that take the screenshot my code and given beloy here. Please permit this answer.</h2>
                <img src={find} alt="" />
            </div>
        </div>
    );
};

export default Blog;