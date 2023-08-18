import React from "react";
import moment from "moment";
import CheckOutProduct from "./../checkOutProduct/checkOutProduct";
import CurrencyFormat from "react-currency-format";
import "./singleOrder.css";
const SingleOrder = ({ order }) => {
  return (
    <div className="order">
      <h2>Order {order.index + 1}</h2>
      <p>{moment.unix(order.data.created).format("MMM DD YYYY h:mma")}</p>

      {order.data.basket?.map((item) => (
        <CheckOutProduct
          id={item.id}
          key={item.id}
          title={item.title}
          photo={item.image}
          price={item.price}
          rating={item.rating}
          hiddenButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order-total">
              Order Total: <strong>{value}</strong>
            </h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount * 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default SingleOrder;
