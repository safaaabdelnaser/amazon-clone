import React from "react";
import "./SubTotal.css";
import { useAuth } from "../../Context/contextState";
import { getCartTotal } from "../../Context/appReducer";
import { useNavigate } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
const SubTotal = () => {
  const Data = useAuth();
  const navigate = useNavigate();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({Data.basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(Data.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  );
};

export default SubTotal;
