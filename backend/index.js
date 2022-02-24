const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(/** Stripe Secret Key here**/);
const port = process.env.PORT || 5000;
// - App config

const app = express();

// - Middlewares

app.use(cors({ origin: true }));
app.use(express.json());
// - Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  if (total != 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
    });
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  }
});
// - Listen command

app.listen(port, (err) => {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", port);
});
