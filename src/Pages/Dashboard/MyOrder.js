import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOrder = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?useremail=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }
    }, [user])
    const handleDelete = (email) => {
        fetch(`http://localhost:5000/booking/${email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('successfully deleted')
            })

    }
    return (
        <div>
            <h3>My order: {orders.length}</h3>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Tool</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr
                                key={index}
                            >

                                <th>{index + 1}</th>
                                <td>{order.username}</td>
                                <td>{order.toolname}</td>
                                <td>{order.toolprice}</td>
                                <td>{order.oquantity}</td>
                                <td><button onClick={() => handleDelete(user.email)} className='btn btn-xs btn-error'>Delete</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default MyOrder;