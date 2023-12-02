import React from "react";
import PropTypes from "prop-types";
import TextFieldInput from "./TextFieldInput";
import { Button } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import checkImage from "../assets/images/check.png";
import { Radio } from "@mui/material";
import vnpayimage from "../assets/images/vnpay.png";
import vnpaycheckimage from "../assets/images/vnpaycheck.png";
import momoimage from "../assets/images/momo.png";
import momocheckimage from "../assets/images/momocheck.png";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import axios from "axios";
import APIs from "../util/API";
const data = [{ name: "Sinh viên 1", MSSV: "2113928" }];
BuyForm.propTypes = {
  onSubmit: PropTypes.func,
};

function BuyForm(props) {
  const form = useForm({
    defaultValues: {
      name: data[0].name,
      MSSV: data[0].MSSV,
      number: 10,
    },
  });
  const navigate = useNavigate();
  const navigateToCheck = () => {
    setTimeout(() => {
      navigate("/buy/paymentcheck");
    }, 500);
  };
  const handleSubmit = (values) => {
    if(handleAuthorization('SPSO_cookie_id') == true) {
      console.log("values: ", values);
  
      console.log("paymethod: ", paymethod);
      const param = { amount: values.number * 2000, name: values.name, MSSV: values.MSSV };
      const fetchApiData = async () => {
        try {
          let res = await axios.post(APIs.APIbuy + "/create_payment_url", param);
          console.log(res);
          //redirect to payment page
          window.location.href = res.data;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      //openModal();
      fetchApiData();
    }
  };
  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
    navigateToCheck();
  }

  function openModal() {
    setIsOpen(true);
  }
  const [paymethod, setPaymethod] = useState("vnpay");
  const handleChange = (event) => {
    setPaymethod(event.target.value);
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex flex-col h-full max-h-96 w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all items-center">
                  <img
                    src={checkImage}
                    height={60}
                    width={60}
                    className=" mb-4"
                  />
                  <Dialog.Title
                    as="h3"
                    className="text-4xl font-medium leading-6 text-green-600 text-center mb-4"
                  >
                    Thanh toán thành công
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-lg text-gray-600 text-center">
                      Giao dịch thanh toán của bạn đã được xác nhận thành công.{" "}
                      <br />
                      Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!
                    </p>
                  </div>

                  <div className="mt-4 justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-lg font-medium text-white hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Về trang chủ
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
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
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <span className="  font-semibold">MSSV</span>
                <TextFieldInput
                  name="MSSV"
                  label="MSSV"
                  type="number"
                  form={form}
                  disabled
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
                      min: 10,
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
                <span className=" font-semibold">Phương thức thanh toán</span>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="paymethod"
                  value={paymethod}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="vnpay"
                    control={
                      <Radio
                        icon={<img src={vnpayimage} height={60} width={60} />}
                        checkedIcon={
                          <img src={vnpaycheckimage} height={60} width={60} />
                        }
                      />
                    }
                  />
                  <FormControlLabel
                    value="momo"
                    control={
                      <Radio
                        icon={<img src={momoimage} height={60} width={60} />}
                        checkedIcon={
                          <img src={momocheckimage} height={60} width={60} />
                        }
                      />
                    }
                  />
                </RadioGroup>
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
      </div>{" "}
    </>
  );
}

export default BuyForm;