import React from "react";
import "./checkOut.css";
import checkout from "../../images/checkoutAd.jpg";
import { useAuth } from "../../Context/contextState";
import CheckOutProduct from "../checkOutProduct/checkOutProduct";
import SubTotal from "../SubTotal/SubTotal";
const CheckOut = () => {
  const userData = useAuth();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout-ad" src={checkout} alt="checkour" />
        <div>
          <h3>Hello, {userData.user?.email}</h3>
          <h2 className="checkout-title">Your shopping Basket</h2>
          {userData.basket.length > 0 ? (
            userData.basket.map((item) => (
              <CheckOutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                photo={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p className="alert-message">
              You have no items in your Cart.To buy one or more items,click "Add
              to Cart"
            </p>
          )}
        </div>
      </div>
      <div className="checkout-right">
        <SubTotal />
      </div>
    </div>
  );
};

export default CheckOut;
