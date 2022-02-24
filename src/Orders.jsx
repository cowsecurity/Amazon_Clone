import React, { useState, useEffect } from "react";
import Order from "./Order";
import { db } from "./firebase";
import { collection, getDocs, orderBy } from "firebase/firestore";
import "./Orders.css";
import { useStateValue } from "./StateProvider";

const Orders = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(async () => {
    if (user) {
      const ordersRef = collection(db, `users/${user?.uid}/orders`);
      const ordersQuerySnapshot = await getDocs(ordersRef);

      setOrders(
        ordersQuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    } else {
      setOrders([]);
    }
  }, [user]);
  const rev = orders;
  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="orders___order">
        {orders?.map((order) => {
          return <Order order={order} />;
        })}
      </div>
    </div>
  );
};

export default Orders;
