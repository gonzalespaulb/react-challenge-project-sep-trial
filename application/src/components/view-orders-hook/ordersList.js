import React from 'react';
import Order from './order';

const OrdersList = (props) => {

    const { orders } = props;

    const listOfOrders = () => {
        
        if (!props || !props.orders || !props.orders.length) {
            return (
                <div className="empty-orders">
                    <h2>There are no orders to display</h2>
                </div>
            )
        } else return orderMapper();
    }

// ...........................................................................RENDERS ORDERS

    const orderMapper = () => {
        const individualOrder = orders.map((order) => {
            return (
                <Order 
                    key={order._id}
                    order={order}
                >
                </Order>
            )
        })
        return individualOrder;
    }

// ...........................................................................JSX

    return (
        <>
            {listOfOrders()}
        </>
    )

// ...........................................................................JSX

}

// export default OrdersList;
export default OrdersList;