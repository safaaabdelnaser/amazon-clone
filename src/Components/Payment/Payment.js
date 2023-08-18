import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useAuth } from "../../Context/contextState";
import { Link, useNavigate } from "react-router-dom";
import CheckOutProduct from "./../checkOutProduct/checkOutProduct";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../../Context/appReducer";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../BaisUrl/axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase";
const Payment = () => {
  const Data = useAuth();
  const navigate = useNavigate();
  const [clientSecret, setClientKey] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState("");
  const handelChange = (e) => {
    setDisabled(e.empty);
    setError(error ? error.message : "");
  };
  useEffect(() => {
    const getClinetScrete = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getCartTotal(Data.basket) * 100}`,
      });
      setClientKey(response.data.clientSecret);
      return response;
    };
    getClinetScrete();
  }, [Data.basket]);
  const handelSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        const ref = doc(
          db,
          "users",
          Data.user?.uid,
          "orders",
          paymentIntent.id
        );
        setDoc(ref, {
          basket: Data.basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });
        setSuccess(true);
        setError(null);
        setProcessing(false);
        navigate("/orders", { replace: true });

        Data.dispatch({
          type: "REMOVE-All-PRODUCT-CART",
        });
      });
  };
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout(<Link to="/checkout">{Data.basket.length} Items</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{Data.user?.email}</p>
            <p>Egypt</p>
          </div>
        </div>
        {/* Products payments */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review Item and Delivery</h3>
          </div>
          <div className="payment-items">
            {Data.basket.map((item) => (
              <CheckOutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                photo={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* payment method */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handelSubmit}>
              {/* Card of payment */}
              <CardElement onChange={handelChange} />
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getCartTotal(Data.basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={" $"}
                />
                <button
                  type="submit"
                  disabled={processing || disabled || success}
                >
                  {processing ? <p>processing</p> : "Buy Now"}
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
