const Stripe = require("stripe");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  try {
    const { courseName, amount } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd", //lkr
            product_data: {
              name: courseName || "MERN Stack Internship Fee",
            },
            unit_amount: amount * 100, // (100 Cents = $1)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/payment-cancel`,
    });

    return res.status(200).json({
      success: true,
      url: session.url, // Stripe Payment Page
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Payment session creation failed",
      error: error.message,
    });
  }
};

module.exports = { createCheckoutSession };
