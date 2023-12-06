import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/24/outline'
import APIs from "../util/API";
import axios from "axios";
import {PencilSquareIcon} from "@heroicons/react/20/solid";

const options = [
  "BKB1",
  "BKB2",
  "BKB3",
  "BKB5",
  "BKB6",
  "A1",
  "A2",
  "A3",
  "A4",
  "A5",
  "A6"
]

export default function EditPrinter({printer, reload}) {
  const [inputs, setInputs] = useState(printer)
  const [isOpen, setIsOpen] = useState(false)
  const [isCommit, setIsCommit] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const [alertContent, setAlertContent] = useState(["Sửa máy in thành công!", "Bạn có thể xem ngay kết quả!"])
  const [isSuccess, setIsSuccess] = useState(true)
  const [isRefill, setIsRefill] = useState(false)
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
  function closeModal() {
    if(handleAuthorization('SPSO_cookie_id') == true) {
      setIsOpen(false)
    }
  }
  function openModal() {
    if(handleAuthorization('SPSO_cookie_id') == true) {
      setIsOpen(true)
    }
  }
  function openCommitModal(){
    if(handleAuthorization('SPSO_cookie_id') == true) {
      setIsCommit(true)
    }
  }
  function closeCommitModal(){
    if(handleAuthorization('SPSO_cookie_id') == true) {
      setIsCommit(false)
    }
  }
  function closeRefill() {
    if(handleAuthorization('SPSO_cookie_id') == true) {
      setIsRefill(false)
      setIsCommit(false)
    }
  }
  function openRefill() {
    setIsRefill(true)
  }
  function openAlertSuccess(){
    setAlertContent(["Sửa máy in thành công!", "Bạn có thể xem ngay kết quả!"])
    setIsSuccess(true)
    setIsAlert(true)
  }
  function openAlertFailed() {
    setAlertContent(["Sửa máy in thất bại!", "Có lỗi đã xảy ra!"])
    setIsSuccess(false)
    setIsAlert(true)
  }
  function closeAlert(){
    if(handleAuthorization('SPSO_cookie_id') == true) {
      setIsAlert(false)
      closeCommitModal()
      closeModal()
    }
  }
  async function Commit(){
    if(handleAuthorization('SPSO_cookie_id') == true) {
      if(!inputs.name) {
        setAlertContent(["Tên máy in không được để trống", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }
      if(!inputs.name.length > 30) {
        setAlertContent(["Tên máy in không được quá 30 kí tự", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }
      if (!inputs.brand) {
        setAlertContent(["Hãng máy in không được để trống", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }
      if(!inputs.brand.length > 30) {
        setAlertContent(["Hãng máy in không được quá 30 kí tự", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }
      if(!inputs.model) {
        setAlertContent(["Model máy in không được để trống", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }
      if(!inputs.model.length > 30) {
        setAlertContent(["Hãng máy in không được quá 30 kí tự", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }

      if (!inputs.paper) {
        setAlertContent(["Số lượng giấy không được để trống", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }
      if (inputs.paper < 0) {
        setAlertContent(["Số lượng giấy không được nhỏ hơn 0", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }
      if (!inputs.day) {
        setAlertContent(["Ngày mua không được để trống", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }
      if(isNaN(Date.parse(inputs.day))) {
        setAlertContent(["Ngày bị sai cú pháp", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }
      if (!inputs.description) {
        setAlertContent(["Mô tả không được để trống", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }

      if (!inputs.building) {
        setAlertContent(["Tòa nhà không được để trống", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }
      if (!inputs.floor) {
        setAlertContent(["Tầng không được để trống", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }
      if (inputs.floor < 0){
        setAlertContent(["Tầng không được nhỏ hơn không", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }

      if (!inputs.state) {
        setAlertContent(["Trạng thái máy in không được để trống", "Vui lòng điền lại thông tin"])
        openRefill()
        return
      }

      try {
        const response = await axios.put(APIs.APIadminPrinter + `/edit`, {
          id: inputs.id,
          name: inputs.name,
          model: inputs.model,
          brand: inputs.brand,
          paper: inputs.paper,
          day: inputs.day,
          building: inputs.building,
          floor: inputs.floor,
          description: inputs.description,
          state: inputs.state
        })
        if (response.status === 200){
          reload(null, null, null, null, null)
          openAlertSuccess()
        }
        else
          openAlertFailed()
      }
      catch (e) {
        openAlertFailed()
        console.log(`Error when edit printer: ${e}`)
      }
    }
  }
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  return (
      <>
        <button
            onClick={openModal}
            type="button"
            className='p-2 hover:bg-lightBlue-300 focus:outline-none focus-visible:ring focus-visible:ring-lightBlue-200 focus-visible:ring-opacity-75 rounded-lg'>
          <PencilSquareIcon className='h-5 w-5 text-mainBlue'/>
        </button>

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
                  <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <button
                        onClick={closeModal}
                        type="button"
                        className='absolute right-2 top-2 p-2 hover:bg-red-100 focus:outline-none focus-visible:ring focus-visible:ring-lightBlue-200 focus-visible:ring-opacity-75 rounded-full'>
                      <XMarkIcon className='h-5 w-5 text-red-600'/>
                    </button>
                    <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Sửa thông tin máy in hiện có

                    </Dialog.Title>
                    <hr className='mt-2'/>

                    <div>
                      <form>
                        <div class="space-y-8">
                          <div class="border-b border-gray-900/10 pb-6">
                            <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                              <div class="sm:col-span-4">
                                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Tên máy in</label>
                                <div class="mt-1">
                                  <div class="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-lightBlue-300 sm:max-w-md">
                                    <input value={printer.name} onChange={handleChange} type="text" name="name" id="name"  class="focus:outline-none  w-full block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="Từ 1-20 ký tự"/>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-2">
                                <label for="brand" class="block text-sm font-medium leading-6 text-gray-900">Hãng</label>
                                <div class="mt-1">
                                  <div class="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-lightBlue-300 sm:max-w-md">
                                    <input value={printer.brand} onChange={handleChange} type="text" name="brand" id="brand" class=" focus:outline-none  w-full flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Từ 1-20 ký tự"/>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-4">
                                <label for="model" class="block text-sm font-medium leading-6 text-gray-900">Mẫu số</label>
                                <div class="mt-1">
                                  <div class="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-lightBlue-300 sm:max-w-md">
                                    <input value={printer.model} onChange={handleChange} type="text" name="model" id="model" autocomplete="model" class="focus:outline-none  w-full block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6" />
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-2">
                                <label for="paper" class="block text-sm font-medium leading-6 text-gray-900">SL Giấy</label>
                                <div class="mt-1">
                                  <div class="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-lightBlue-300 sm:max-w-md">
                                    <input value={printer.paper} onChange={handleChange}  type="number" name="paper" id="paper" class=" focus:outline-none  w-full flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
                                  </div>
                                </div>
                              </div>
                              <div class="sm:col-span-3">
                                <label for="day" class="block text-sm font-medium leading-6 text-gray-900">Ngày mua</label>
                                <div class="mt-1">
                                  <div class="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-lightBlue-300 sm:max-w-md">
                                    <input value={printer.day} onChange={handleChange} type="date" name="day" id="day"  class=" focus:outline-none  w-full flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
                                  </div>
                                </div>
                              </div>
                              <div class="col-span-full">
                                <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Mô tả</label>
                                <div class="mt-2">
                                  <textarea value={printer.description} onChange={handleChange} id="description" name="description" rows="3" class="focus:outline-none block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightBlue-300 sm:text-sm sm:leading-6" ></textarea>
                                </div>
                              </div>
                            </div>



                            {/*<fieldset className='mt-2 float-left'>*/}
                            {/*    <legend class="text-sm font-semibold leading-6 text-gray-900">Vị trí</legend>*/}
                            {/*    /!*<div class="mt-2 space-y-2">*!/*/}
                            {/*    /!*  <div class="flex items-center gap-x-3">*!/*/}
                            {/*    /!*    <input onChange={handleChange} id="type1" name="type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>*!/*/}
                            {/*    /!*    <label for="type1" class="block text-sm font-medium leading-6 text-gray-900">In thường</label>*!/*/}
                            {/*    /!*  </div>*!/*/}
                            {/*    /!*  <div class="flex items-center gap-x-3">*!/*/}
                            {/*    /!*    <input onChange={handleChange} id="type2" name="type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>*!/*/}
                            {/*    /!*    <label for="type2" class="block text-sm font-medium leading-6 text-gray-900">In màu</label>*!/*/}
                            {/*    /!*  </div>*!/*/}
                            {/*    /!* *!/*/}
                            {/*    /!*</div>*!/*/}
                            {/*  */}
                            {/*</fieldset>*/}
                            <fieldset className='mt-2 float-left'>
                              <legend className="text-sm font-semibold leading-6 text-gray-900">Vị trí</legend>
                              <div className="mt-2 space-y-2">
                                <div className="flex items-center gap-x-3">
                                  <label htmlFor="building" className="block text-sm font-medium leading-6 text-gray-900">
                                    Tòa
                                  </label>
                                  <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-lightBlue-300 sm:max-w-md w-full">
                                    <select value={printer.building} name="building" id="building" onChange={handleChange} className="focus:outline-none  w-full flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6">
                                      {
                                        options.map((item, idx) => (
                                            <option value={item} id={idx}>{item}</option>
                                        ))
                                      }
                                    </select>
                                  </div>
                                </div>
                                <div className="flex items-center gap-x-3">
                                  <label htmlFor="floor" className="block text-sm font-medium leading-6 text-gray-900">Tầng</label>
                                  <div className="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-lightBlue-300 sm:max-w-md">
                                    <input value={printer.floor} onChange={handleChange} type="number" name="floor" id="floor"  className=" focus:outline-none  w-full flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
                                  </div>
                                </div>
                              </div>
                            </fieldset>

                            <fieldset className='mt-2 float-right mr-6'>
                              <legend class="text-sm font-semibold leading-6 text-gray-900">Tình trạng</legend>
                              <div class="mt-2 space-y-2">
                                <div class="flex items-center gap-x-3">
                                  <input checked={printer.state == 0} onChange={handleChange} value={1} id="state1" name="status" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                  <label for="state1" class="block text-sm font-medium leading-6 text-gray-900">Bảo trì</label>
                                </div>
                                <div class="flex items-center gap-x-3">
                                  <input checked={printer.state == 1} onChange={handleChange} value={2} id="state2" name="status" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                  <label for="state2" class="block text-sm font-medium leading-6 text-gray-900">Hoạt động</label>
                                </div>
                              </div>
                            </fieldset>
                            <div className='clear-both'></div>
                          </div>




                        </div>

                        <div class="mt-2 flex items-center justify-end gap-x-6">
                          <button type="reset" class="text-sm font-semibold text-gray-900 border border-transparent hover:border-black font-semibold rounded-md px-3 py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Reset</button>
                          <button type="button" onClick={openCommitModal} class="rounded-md bg-transparent hover:bg-mainBlue px-3 py-2 text-sm font-semibold hover:text-white text-mainBlue shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mainBlue border border-mainBlue">Xác nhận</button>
                          <Transition appear show={isCommit} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeCommitModal}>
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
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                      <Dialog.Title
                                          as="h3"
                                          className="text-lg font-medium leading-6 text-gray-900"
                                      >
                                        Bạn có chắc muốn sửa máy in này không ?
                                      </Dialog.Title>

                                      <div className="mt-4">
                                        <button
                                            type="button"
                                            className="float-right inline-flex  ml-1 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={Commit}
                                        >
                                          Có
                                        </button>
                                        <button
                                            type="button"
                                            className="float-right inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeCommitModal}
                                        >
                                          Không
                                        </button>
                                        <Transition show={isRefill} as={Fragment}>
                                          <Dialog as="div" className="relative z-10" onClose={setIsAlert}>
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                            </Transition.Child>

                                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                >
                                                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                      <div className="sm:flex sm:items-start">
                                                        <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-200 sm:mx-0 sm:h-10 sm:w-10`}>

                                                          <XMarkIcon className="h-6 w-6 text-red-600" aria-hidden="true" />

                                                        </div>
                                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                          <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                            {alertContent[0]}
                                                          </Dialog.Title>
                                                          <div className="mt-2">
                                                            <p className="text-sm text-gray-500">
                                                              {alertContent[1]}
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                      <button
                                                          type="button"
                                                          className={`border border-red-600 text-red-600 hover:bg-red-600 inline-flex w-full justify-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold  shadow-sm  hover:text-white sm:ml-3 sm:w-auto`}
                                                          onClick={closeRefill}
                                                      >
                                                        Thoát
                                                      </button>
                                                    </div>
                                                  </Dialog.Panel>
                                                </Transition.Child>
                                              </div>
                                            </div>
                                          </Dialog>
                                        </Transition>
                                        <Transition show={isAlert} as={Fragment}>
                                          <Dialog as="div" className="relative z-10" onClose={setIsAlert}>
                                            <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0"
                                                enterTo="opacity-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                            </Transition.Child>

                                            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                >
                                                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                                      <div className="sm:flex sm:items-start">
                                                        <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${isSuccess? "bg-lime-200": "bg-red-200"} sm:mx-0 sm:h-10 sm:w-10`}>
                                                          {
                                                            isSuccess? (<CheckIcon className="h-6 w-6 text-lime-600" aria-hidden="true" />):(<XMarkIcon className="h-6 w-6 text-red-600" aria-hidden="true" />)
                                                          }
                                                        </div>
                                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                          <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                            {alertContent[0]}
                                                          </Dialog.Title>
                                                          <div className="mt-2">
                                                            <p className="text-sm text-gray-500">
                                                              {alertContent[1]}
                                                            </p>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                                      <button
                                                          type="button"
                                                          className={`border ${isSuccess? "border-lime-600 text-lime-600 hover:bg-lime-600": "border-red-600 text-red-600 hover:bg-red-600"} inline-flex w-full justify-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold  shadow-sm  hover:text-white sm:ml-3 sm:w-auto`}
                                                          onClick={closeAlert}
                                                      >
                                                        Thoát
                                                      </button>
                                                    </div>
                                                  </Dialog.Panel>
                                                </Transition.Child>
                                              </div>
                                            </div>
                                          </Dialog>
                                        </Transition>
                                      </div>
                                    </Dialog.Panel>
                                  </Transition.Child>
                                </div>
                              </div>
                            </Dialog>
                          </Transition>
                        </div>
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
  )
}
