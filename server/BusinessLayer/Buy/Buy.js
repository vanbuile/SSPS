const moment = require("moment");
const express = require("express");
const { InsertTransaction,IncreasePaper } = require("../../PersistenceLayer/BuyDAO");
const CreatePaymentUrl = async (req, res) => {
  process.env.TZ = "Asia/Ho_Chi_Minh";
  console.log(req.body);
  let date = new Date();
  let createDate = moment(date).format("YYYYMMDDHHmmss");

  let ipAddr =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  let tmnCode = "PB6LSZKB";
  let secretKey = "JOUNKJFVQTKYYZAANRSSUVXKNXOKQEPV";
  let vnpUrl = "https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
  let returnUrl = "http://localhost:3001/api/testbuy/vnpay_return";
  let orderId = moment(date).format("DDHHmmss");
  let amount = req.body.amount;
  let bankCode = "";

  let locale = "vn";

  let currCode = "VND";
  let vnp_Params = {};
  vnp_Params["vnp_Version"] = "2.1.0";
  vnp_Params["vnp_Command"] = "pay";
  vnp_Params["vnp_TmnCode"] = tmnCode;
  vnp_Params["vnp_Locale"] = locale;
  vnp_Params["vnp_CurrCode"] = currCode;
  vnp_Params["vnp_TxnRef"] = orderId;
  vnp_Params["vnp_OrderInfo"] = req.body.MSSV;
  vnp_Params["vnp_OrderType"] = "other";
  vnp_Params["vnp_Amount"] = amount * 100;
  vnp_Params["vnp_ReturnUrl"] = returnUrl;
  vnp_Params["vnp_IpAddr"] = ipAddr;
  vnp_Params["vnp_CreateDate"] = createDate;
  if (bankCode !== null && bankCode !== "") {
    vnp_Params["vnp_BankCode"] = bankCode;
  }

  vnp_Params = sortObject(vnp_Params);

  let querystring = require("qs");
  let signData = querystring.stringify(vnp_Params, { encode: false });
  let crypto = require("crypto");
  let hmac = crypto.createHmac("sha512", secretKey);
  let signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");
  vnp_Params["vnp_SecureHash"] = signed;
  vnpUrl += "?" + querystring.stringify(vnp_Params, { encode: false });
  //send vnpUrl to client
  res.send(vnpUrl);
};

const VnpayReturn = async (req, res) => {
  let vnp_Params = req.query;
  console.log("GET: vnpay_return ");
  let secureHash = vnp_Params["vnp_SecureHash"];

  delete vnp_Params["vnp_SecureHash"];
  delete vnp_Params["vnp_SecureHashType"];

  vnp_Params = sortObject(vnp_Params);

  let tmnCode = "PB6LSZKB";
  let secretKey = "JOUNKJFVQTKYYZAANRSSUVXKNXOKQEPV";

  let querystring = require("qs");
  let signData = querystring.stringify(vnp_Params, { encode: false });
  let crypto = require("crypto");
  let hmac = crypto.createHmac("sha512", secretKey);
  let signed = hmac.update(new Buffer(signData, "utf-8")).digest("hex");

  if (secureHash === signed && vnp_Params["vnp_ResponseCode"] === "00" && vnp_Params["vnp_TransactionStatus"] === "00") {
    //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
    //InsertTransaction(req.body.MSSV, moment().format("YYYY-MM-DD HH:mm:ss"), req.body.amount/2000)
    console.log(vnp_Params["vnp_OrderInfo"]);
    let MSSV = vnp_Params["vnp_OrderInfo"];
    let amount = vnp_Params["vnp_Amount"];
  
    InsertTransaction(
      MSSV,
      moment().format("YYYY-MM-DD HH:mm:ss"),
      amount / 200000
    );
    IncreasePaper(MSSV, amount / 200000);

    res.redirect("http://localhost:3000/buy/paymentcheck");

    //redirect to payment check page
  } else {
    res.redirect("http://localhost:3000");
  }
};

function sortObject(obj) {
  let sorted = {};
  let str = [];
  let key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      str.push(encodeURIComponent(key));
    }
  }
  str.sort();
  for (key = 0; key < str.length; key++) {
    sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
  }
  return sorted;
}

module.exports = {
  CreatePaymentUrl,
  VnpayReturn,
};
