import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import './Purchase.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchase = () => {
    const { purchaseId } = useParams();
    const [user] = useAuthState(auth);
    const [tool, setTool] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/tool/${purchaseId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTool(data));
    }, [])
    const handleSubmit = event => {
        event.preventDefault();
        const oQuantity = event.target.orderQuantity.value;
        const toolName = event.target.tname.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const minOrder = event.target.minorder.value;
        const quantity = event.target.quantity.value;
        console.log(toolName, name, email, minOrder, quantity, oQuantity);
        // if (oQuantity < minOrder) {
        //     toast(`Please enter more than ${minOrder}`);
        // }
    }
    return (
        <div>
            <div className='text-center purchase-form'>
                <form onSubmit={handleSubmit}>

                    <div><div className='flex justify-center'>
                        <div class="w-24 rounded">
                            <img src={tool.img} alt="" />
                        </div>
                    </div></div>
                    <h1>{tool.name}</h1>

                    <p>Name: <input type="name" disabled class="input input-bordered w-full max-w-xs" value={user.displayName} name="name" id="" /></p>
                    <p>Email: <input disabled type="email" class="input input-bordered w-full max-w-xs" name="email" value={user.email} id="" /></p>
                    <p>City: <input placeholder='Enter your city name' type="text" class="input input-bordered w-full max-w-xs" name="text" id="" /></p>
                    <p>Phone: <input placeholder='Enter phone number' type="number" class="input input-bordered w-full max-w-xs" name="number" id="" /></p>

                    <p>Tool: <input type="name" disabled name="tname" class="input input-bordered w-full max-w-xs" value={tool.name} id="" /></p>
                    <p>Min-Order: <input type="number" disabled name="minorder" class="input input-bordered w-full max-w-xs" value={tool.minOrder} id="" /></p>
                    <p>Price: <input type="number" disabled name="price" class="input input-bordered w-full max-w-xs" value={tool.price} id="" /></p>
                    <p>Quantity: <input type="number" disabled name="quantity" class="input input-bordered w-full max-w-xs" value={tool.quantity} id="" /></p>
                    {/* <input type="number" placeholder='Enter quantity' name="orderQuantity" class="input input-bordered w-full max-w-xs" id="" /> */}
                    <p>Order-Quantity: <input type="number" placeholder='Enter quantity' name="orderQuantity" class="input input-bordered w-full max-w-xs" id="" /></p>
                    <input type="submit" class="btn btn-warning w-full max-w-xs" value="Purchase" id="" />


                </form>
                {/* <img width={200} src={tool.img} alt="" />
                <h3>User: {user.displayName}</h3>
                <h4>Email: {user.email}</h4>
                <h4>Tool: {tool.name}</h4>
                <h6>Min Order: {tool.minOrder}</h6>
                <h6>Price: $ {tool.price}</h6>
                <h6>Quantity: {tool.quantity}</h6>
                <p>Description:{tool.description}</p>
                <input height={100} type="text" name="text" value={tool.description} id="" /> */}
                <ToastContainer />
            </div>
        </div>
    );
};

export default Purchase;