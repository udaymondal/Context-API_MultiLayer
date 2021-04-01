import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [ increaseShipment, setIncreaseShipment] = useContext(CategoryContext);
    return (
        <div>
            <h3>This is shipment</h3>
            <button onClick={() => setIncreaseShipment(increaseShipment+1)}>Increasing from shipment</button>
        </div>
    );
};

export default Shipment;