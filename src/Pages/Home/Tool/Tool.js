import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css'

const Tool = ({ tool }) => {
    const { _id, description, name, price, img, minOrder, quantity } = tool;
    const navigate = useNavigate();
    const navigateToPurchase = _id => {
        navigate(`/purchase/${_id}`);
    }
    return (
        <div className='tool'>
            <img src={img} alt="" />
            <br />
            <h3>Name: {name}</h3>
            <h6>Min Order: {minOrder}</h6>
            <h6>Price:{price}</h6>
            <h6>Quantity: {quantity}</h6>
            <p><>Description:{description}</></p>
            <button onClick={() => navigateToPurchase(_id)}>Purchase</button>
        </div>
    );
};

export default Tool;