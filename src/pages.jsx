import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

export const HomePage = () => {
  return (
    <>
      <Header />
      <Home />
    </>
  );
};

export const CheckoutPage = () => {
  return (
    <>
      <Header />
      <Checkout />
    </>
  );
};

const promise = loadStripe(
/**  STRIPE CLIENT KEY HERE **/
);

export const PaymentPage = () => {
  return (
    <>
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </>
  );
};

export const OrdersPage = () => {
  return (
    <>
      <Header />
      <Orders />
    </>
  );
};
