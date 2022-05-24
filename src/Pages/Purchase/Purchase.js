import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { purchaseId } = useParams();
    return (
        <div>
            <h2>This is our purchase page: {purchaseId} </h2>
        </div>
    );
};

export default Purchase;