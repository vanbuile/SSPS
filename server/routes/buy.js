
const express = require("express");
const router = express.Router();
const {CreatePaymentUrl, VnpayReturn,GetPaymentHistory } = require('../BusinessLayer/Buy/Buy');


router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/create_payment_url", CreatePaymentUrl);

router.get('/vnpay_return', VnpayReturn);
router.post('/paymenthistory',GetPaymentHistory)





module.exports = router;