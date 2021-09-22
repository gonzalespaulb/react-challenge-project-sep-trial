import React from 'react';

const OrdersList = (props) => {
    const { orders } = props;
    if (!props || !props.orders || !props.orders.length) return (
        <div className="empty-orders">
            <h2>There are no orders to display</h2>
        </div>
    );

    console.log(props);


    return orders.map(order => {
        const createdDate = new Date(order.createdAt);

        const produceOrderTime = () => {
            const hours = createdDate.getHours();
            const minutes = createdDate.getMinutes() < 10 ? `0${createdDate.getMinutes()}` : createdDate.getMinutes();
            const seconds = createdDate.getSeconds() < 10 ? `0${createdDate.getSeconds()}` : createdDate.getSeconds();
            const orderTime = `${hours}:${minutes}:${seconds}`;
            return orderTime;
        }

        return (
            <div className="row view-order-container" key={order._id}>
                <div className="col-md-4 view-order-left-col p-3">
                    <h2>{order.order_item}</h2>
                    <p>Ordered by: {order.ordered_by || ''}</p>
                </div>
                <div className="col-md-4 d-flex view-order-middle-col">
                    <p>Order placed at {produceOrderTime()}</p>
                    <p>Quantity: {order.quantity}</p>
                </div>
                <div className="col-md-4 view-order-right-col">
                    <button className="btn btn-success">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        );
    });
}

export default OrdersList;