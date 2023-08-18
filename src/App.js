import React, { useEffect } from "react";
// to make routes in website
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import { auth } from "./Firebase";
import { useAuth } from "./Context/contextState";
import Home from "./Components/Home/Home";
import CheckOut from "./Components/checkOut/checkOut";
import Payment from "./Components/Payment/Payment";
import Footer from "./Components/Footer/Footer";
import Orders from "./Components/Orders/Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const { dispatch } = useAuth();
  const stripePromise = loadStripe(
    "pk_test_51NemIPJIyBEYoZr1bC34eOeeZ7tU2Max4r5VuvBTJXe3DVQYvGjXvZkdOduETyTWjkea5hdXIZIjleLc4fRCXezt00Vdechlh3"
  );
  useEffect(() => {
    auth.onAuthStateChanged((newUser) => {
      if (newUser) {
        dispatch({ type: "NEW-USER", user: newUser });
      } else {
        dispatch({ type: "NEW-USER", user: null });
      }
    });
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header /> <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <CheckOut />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={stripePromise}>
                {/* wrap componet payment to strip */}
                <Payment />
              </Elements>
              <Footer />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
              <Footer />
            </>
          }
        />

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
