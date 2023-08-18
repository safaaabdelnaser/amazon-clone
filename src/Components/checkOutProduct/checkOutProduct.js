import React from "react";
import star from "../../images/star.png";
import { useAuth } from "../../Context/contextState";
import "./checkOutProduct.css";
const CheckOutProduct = ({ id, title, photo, price, rating, hiddenButton }) => {
  const { dispatch } = useAuth();
  const removeProduct = () => {
    dispatch({
      type: "REMOVE-PRODUCT-CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={photo} alt="product" className="checkoutProduct-image" />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <p className="checkoutProduct-price">
          <b>
            <small>$ </small>
          </b>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i} className="product-rating">
                <img src={star} alt="rating" />
              </p>
            ))}
        </div>

        {!hiddenButton && (
          <button onClick={removeProduct}>Remove From Cart</button>
        )}
      </div>
    </div>
  );
};

export default CheckOutProduct;
