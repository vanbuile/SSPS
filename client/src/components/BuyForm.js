import React from "react";
import PropTypes from "prop-types";
import TextFieldInput from "./TextFieldInput";
import { FormHelperText } from "@mui/material";
import { ResponsiveContainer } from "recharts";
const data = [{ name: "Nguyễn Văn An", email: "an.nguyen@hcmutedu.vn" }];
BuyForm.propTypes = {
  onSubmit: PropTypes.func,
};

function BuyForm(props) {
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h1 className="text-3xl font-semibold font-san text-gray-600">
        MUA THÊM ĐƠN VỊ GIẤY
      </h1>
      <form>
        <div className="relative flex-1 flex-col items-center justify-center gap-4 bg-white shadow-2xl m-6 space-y-8 rounded-2xl shrink">
          <div className="flex flex-col  gap-4 py-6 px-16">
            <div id="formName" className="flex flex-col">
              <span className=" mb-2 font-semibold">Họ và tên</span>
              <TextFieldInput
                label="Họ và tên"
                name="Full Name"
                placeHolder="Nhập họ và tên"
                type="text"
                style={{ width: 300 }}
                defaultValue={data[0].name}
              />
            </div>

            <div id="formEmail" className="flex flex-col">
              <span className=" mb-2 font-semibold">Email</span>
              <TextFieldInput
                label="Email"
                name="Email"
                placeHolder="example@hcmut.edu.vn"
                type="email"
                InputProps={{
                  inputProps: {
                    max: 100,
                    min: 10,
                  },
                }}
                defaultValue={data[0].email}
                style={{ width: 300 }}
              />
            </div>

            <div id="formNumber" className="flex flex-col">
              <span className=" mb-2 font-semibold">Số lượng</span>
              <TextFieldInput
                label="Number of paper"
                name="Number of paper"
                placeHolder=""
                type="number"
                InputProps={{
                  inputProps: {
                    min: 1,
                  },
                }}
                style={{ width: 200 }}
                helperText={<>1 tờ A4 = 1 đơn vị giấy</>}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BuyForm;
