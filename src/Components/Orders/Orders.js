import React, { useEffect, useState } from "react";
import SingleOrder from "../singleOrder/singleOrder";
import { useAuth } from "../../Context/contextState";
import { db } from "../../Firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import "./Orders.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const Data = useAuth();
  useEffect(() => {
    if (Data.user) {
      const collRef = collection(db, "users", Data.user?.uid, "orders");
      const orderedRef = query(collRef, orderBy("created", "desc"));
      onSnapshot(orderedRef, (querySnapshot) => {
        setOrders(
          querySnapshot.docs.map((doc,i) => ({
            id: doc.id,
            data: doc.data(),
            index:i
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [Data.user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        {orders?.map((order) => (
          <SingleOrder order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
