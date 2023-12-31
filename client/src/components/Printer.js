import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { BuildingOffice2Icon} from "@heroicons/react/20/solid";
import moment from 'moment-timezone';
import Table from './Printertable';
import axios from 'axios';
import APIs from '../util/API';


export default function MyModal({building}) {
  let [isOpen, setIsOpen] = useState(false)
  let RowID = 0
  const handleRowClick = (rowId) => {
    RowID = rowId
  }
  function closeModal () {
    setIsOpen(false)
  }
  const Savechange = async () => {
    setIsOpen(false)
    const currentDate = moment().tz('Asia/Ho_Chi_Minh');
    const formattedDateTime = currentDate.format('YYYY-MM-DD HH:mm:ss');
    try{
      let pageUpdate = document.cookie.split('; ').find((cookie) => cookie.startsWith(`numPages=`)).split('=')[1]
      let pageCookie = document.cookie.split('; ').find((cookie) => cookie.startsWith(`page=`)).split('=')[1]
      let sideCookie = document.cookie.split('; ').find((cookie) => cookie.startsWith(`side=`)).split('=')[1]
      let sheetCookie = document.cookie.split('; ').find((cookie) => cookie.startsWith(`sheet=`)).split('=')[1]
      let copies = document.cookie.split('; ').find((cookie) => cookie.startsWith(`copies=`)).split('=')[1]
      if (pageCookie == 1) {
      }
      else if (pageCookie == 2){
        pageUpdate = 1
      }
      else {
        pageUpdate = (pageUpdate + 1) / 2
      }
      let x = Math.floor(pageUpdate / sheetCookie);
      if (sheetCookie*x < pageUpdate) {
        pageUpdate = x +1
      }
      else {
        pageUpdate = x
      }
      if (sideCookie == 2){
        if (pageUpdate % 2 == 1) {
          pageUpdate = (pageUpdate+1) / 2
        }
        else {
          pageUpdate = pageUpdate / 2
        }
      }
      pageUpdate = pageUpdate * copies
      const res = await axios.post(APIs.APIaddFile + "/addprinting", {
        id_printer: RowID,
        mssv: document.cookie.split('; ').find((cookie) => cookie.startsWith(`Student_cookie_id=`)).split('=')[1],
        id_file: document.cookie.split('; ').find((cookie) => cookie.startsWith(`file_id=`)).split('=')[1], 
        paper: pageUpdate,
        date: formattedDateTime
      })
      if (res.status === 200){
        console.log("addprinting")
      }
      else{
        console.log("error in addprinting")
      }
      
      const respo = await axios.post(APIs.APIaddFile + "/updatePaper", {
        id_printer: RowID,
        mssv: document.cookie.split('; ').find((cookie) => cookie.startsWith(`Student_cookie_id=`)).split('=')[1],
        paper: pageUpdate
      })
      if (respo.status === 200){
        alert("Printing....")
      }
      else{
        alert("Update Paper Fail")
      }
    }
    catch (e) {
      if (e.response.status == 501) alert("You dont have enough paper, buy more?")
      else{      alert("Error printing: " + e.message); }
      console.error("Error printing:", e);
    }
  }

  function openModal() {
    setIsOpen(true)
  }

  function Showmodal(){
    return(
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
            <div className="fixed inset-0 bg-black/25" />
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
                    className="text-lg font-bold leading-6 text-black-900"
                  >
                     Chọn máy in
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <Table building = {building} onSelectRow={handleRowClick}/>
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={Savechange}
                    >
                      Lưu
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
  return (
    <>
      <div className="flex">
        <button
          type="button"
          onClick={openModal}
          style={{marginLeft: '97px', marginTop: '5px'}}
        >
            <BuildingOffice2Icon className="w-20 h-50"/>
        </button>
      </div>
      {isOpen && Showmodal()}
    </>
  )
}