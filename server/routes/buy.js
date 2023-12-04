
const express = require("express");
const router = express.Router();
const {CreatePaymentUrl, VnpayReturn} = require('../BusinessLayer/Buy/Buy');


router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/create_payment_url", CreatePaymentUrl);

router.get('/vnpay_return', VnpayReturn);





module.exports = router;