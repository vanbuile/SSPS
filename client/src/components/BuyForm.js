import React from "react";
import PropTypes from "prop-types";
import TextFieldInput from "./TextFieldInput";
import { Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";

const data = [{ name: "Nguyễn Văn An", email: "an.nguyen@hcmutedu.vn" }];
BuyForm.propTypes = {
  onSubmit: PropTypes.func,
};
const handleSubmit = (values) => {
  console.log("values: ", values);
};

function BuyForm(props) {
  const form = useForm({
    defaultValues: {
      name: data[0].name,
      email: data[0].email,
      number: 1,
    },
  });
  return (
    <div className="flex flex-col items-center justify-center mt-6">
      <h1 className="text-3xl font-semibold font-san text-gray-600">
        MUA THÊM ĐƠN VỊ GIẤY
      </h1>

      <form id="buyForm" onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="relative flex-1 flex-col items-center justify-center gap-4 bg-white shadow-2xl m-6 space-y-8 rounded-2xl shrink">
          <div className="flex flex-col  gap-4 py-6 px-16">
            <div className="flex flex-col">
              <span className="  font-semibold">Họ và tên</span>
              <TextFieldInput
                name="name"
                label="Name"
                form={form}
                type="text"
              
               
              />
            </div>
            <div className="flex flex-col">
              <span className="  font-semibold">Email</span>
              <TextFieldInput
                name="email"
                label="Email"
                type="email"
                form={form}
               
              />
            </div>
            <div className="flex flex-col">
              <span className=" font-semibold">Số lượng</span>
              <TextFieldInput
                label="Number of paper"
                name="number"
                placeholder=""
                type="number"
                InputProps={{
                  inputProps: {
                    min: 1,
                  },
                }}
                style={{ width: 200 }}
                helperText={<>1 tờ A4 = 1 đơn vị giấy</>}
                defaultValue={1}
                width={200}
                form={form}
              />
            </div>
            <div className="flex flex-col">
              <Button
                variant="contained"
                type="submit"
                color="primary"
                size="large"
                style={{ width: 300 }}
                form="buyForm"
              >
                Mua thêm
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default BuyForm;
