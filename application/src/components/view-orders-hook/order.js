import React, {useState} from 'react';
import {useHistory } from "react-router-dom";
import { SERVER_IP } from '../../private';

const DELETE_ORDER_URL = `${SERVER_IP}/api/delete-order`;
const EDIT_ORDER_URL = `${SERVER_IP}/api/edit-order`;

const Order = ({order}) => {

    const history = useHistory();

    const [openEditContainer, setOpenEditContainer] = useState(false);
    const [updatedOrderQuantity, setUpdatedOrderQuantity] = useState(order.quantity);

// ........................................................................DELETE

    const deleteOrder = () => {
        history.go(0);
        fetch(DELETE_ORDER_URL, {
            method: 'POST',
            body: JSON.stringify({
                id: order._id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => console.log("Success", JSON.stringify(response)))
        .catch(error => console.error(error));
    }

// ........................................................................UPDATE

    const editOrder = () => {
        history.go(0);
        fetch(EDIT_ORDER_URL, {
            method: 'POST',
            body: JSON.stringify({
                id: order._id,
                ordered_by: order.ordered_by,
                order_item: order.order_item,
                quantity: order.quantity === updatedOrderQuantity ? order.quantity : updatedOrderQuantity,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(response => console.log("Success", JSON.stringify(response)))
        .catch(error => console.error(error));
    }

// ........................................................................TIME STAMP CREATOR

    const createdDate = new Date(order.createdAt);

    const produceOrderTime = () => {
        const hours = createdDate.getHours();
        const minutes = createdDate.getMinutes() < 10 ? `0${createdDate.getMinutes()}` : createdDate.getMinutes();
        const seconds = createdDate.getSeconds() < 10 ? `0${createdDate.getSeconds()}` : createdDate.getSeconds();
        const orderTime = `${hours}:${minutes}:${seconds}`;
        return orderTime;
    }

// ........................................................................EDIT OPTION

    const editContainer = () => {
        if (openEditContainer) {
            return (
                <div className="edit-container">
                <label className="qty-label">Qty:</label>
                    <select value={updatedOrderQuantity} onChange={(e) => setUpdatedOrderQuantity(e.target.value)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                    </select>
                    <button type="button" onClick={editOrder}>Update</button>
                    <button type="button" onClick={() => setOpenEditContainer(false)}>Close</button>
                </div>
            )
        } else return;
    };

// ...........................................................................JSX

    return (
        <div className="view-order-container">
            <div className="row">
                 <div className="col-md-4 view-order-left-col p-3">
                     <h2>{order.order_item}</h2>
                     <p>Ordered by: {order.ordered_by || ''}</p>
                 </div>
                 <div className="col-md-4 d-flex view-order-middle-col">
                     <p>Order placed at {produceOrderTime()}</p>
                     <p>Quantity: {order.quantity}</p>
                 </div>
                 <div className="col-md-4 view-order-right-col">
                     <button className="btn btn-success" onClick={() => setOpenEditContainer(true)}>Edit</button>
                     <button className="btn btn-danger" onClick={deleteOrder}>Delete</button>
                 </div>
             </div>
             {editContainer()}
        </div>
    )

// ...........................................................................JSX

}

export default Order;

