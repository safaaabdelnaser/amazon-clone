import React from "react";
import star from "../../images/star.png";
import "./Product.css";
import { useAuth } from "../../Context/contextState";
const Product = ({ title, price, image, rating, id }) => {
  const { dispatch,basket } = useAuth();
  const addToCart = () => {
    dispatch({
      type:"ADD_TO_CART",
      items: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };
  console.log(basket);
  return (
    <div className="product">
      <div className="product-info">
        <p>
        <strong>  <i>Title: </i></strong>
          {title}
        </p>
        <p className="product-price">
          <strong>
            <i>Price: </i> ${" "}
          </strong>
          <strong>{price}</strong>
        </p>
      </div>
      <div className="product-rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p key={i}>
              <img src={star} alt="rating" />
            </p>
          ))}
      </div>
      <img src={image} alt="product-img" />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
