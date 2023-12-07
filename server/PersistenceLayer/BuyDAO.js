const connection = require("./DataBase");
const nodemailer = require('nodemailer');

const InsertTransaction = async (MSSV, date, paper) => {
  try {
    let q =
      "INSERT INTO `student_buypage` (`MSSV`, `date`, `paper`) VALUES (?, ?, ?)";
    const [result, fields] = await connection.query(q, [MSSV, date, paper]);
  } catch (e) {
    //console.log(e)
    throw new Error(e);
  }
};

const IncreasePaper = async (MSSV, paper) => {
  try {
    let q = "UPDATE `student` SET `paper` = `paper` + ? WHERE `MSSV` = ?";
    const [result, fields] = await connection.query(q, [paper, MSSV]);
  } catch (e) {
    //console.log(e)
    throw new Error(e);
  }
};

const SendMail = async (email, paper) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "hcmutprintservice@gmail.com",
        pass: "mvim ikbf erql vveu"
    }
});
const mailOptions = {
    from: "hcmutprintservice@gmail.com",
    to: email,
    subject: "Giao dịch thanh toán giấy in đã được xác nhận",
    html: "<h1>Chào bạn</h1><p>Giao dịch thanh toán giấy in đã được xác nhận. Số giấy in đã được cộng vào tài khoản của bạn là: " + paper + "</p>"

}

transporter.sendMail(mailOptions, function (error, info, SendMail) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent: " + info.response);
    }
})


};
module.exports = { InsertTransaction, IncreasePaper, SendMail };
