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
    return (
        <div id='tools' className='tools'>
            <h3 className='tools-title'>Thsi is our tools: {tools.length}</h3>
            <div className=" w-100 mx-auto container px-4 tools-container">
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;