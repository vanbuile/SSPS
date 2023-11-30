import React from 'react';
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import checkImage from "../../assets/images/check.png";
import { useNavigate } from "react-router-dom";
function Paymentcheck(props) {
    let [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();
    const navigateToCheck = () => {
      setTimeout(() => {
        navigate("/");
      }, 500);
    };
    function closeModal() {
      setIsOpen(false);
      navigateToCheck();
    }
    
    function openModal() {
      setIsOpen(true);
    }
    
      function openModal() {
        setIsOpen(true);
      }
      const handleAuthorization = (role) => {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
          const [name, value] = cookie.split('=');
          if(name === role) {
            return true
          }
        }
        window.location.href = 'http://localhost:3000/login';
      }
      if(handleAuthorization('Student_cookie_id') == true) {
        return (
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
        );
      }
}

export default Paymentcheck;