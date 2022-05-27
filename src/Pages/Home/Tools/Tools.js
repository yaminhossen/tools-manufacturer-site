import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';
import './Tools.css'

const Tools = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tool')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    console.log(tools);
    return (
        <div id='tools' className='tools'>
            <h3 className='tools-title text-3xl'>This is our tools</h3>
            <div className=" w-100 mx-auto container px-20 tools-container">
                {
                    tools.slice(-6).map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;