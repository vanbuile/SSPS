import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { TrashIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/24/outline'
export default function DeletePrinter({ printer }) {
  let [isOpen, setIsOpen] = useState(false)
  let [isAlert, setIsAlert] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }
  function openModal() {
    setIsOpen(true)
  }
  function closeAlert(){
    setIsAlert(false)
    closeModal()
  }
  function openAlert(){
    setIsAlert(true)
  }
  function Commit(){
    openAlert();
  }
  return (
    <>

        <button  
        onClick={openModal} 
        type="button"
        className='p-2 hover:bg-lightBlue-300 focus:outline-none focus-visible:ring focus-visible:ring-lightBlue-200 focus-visible:ring-opacity-75 rounded-lg'>
            <TrashIcon className='h-5 w-5 text-mainBlue'/>
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
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Bạn có chắc muốn xóa máy in này không ?
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
                        onClick={closeModal}
                      >
                        Không
                      </button>
                              
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
                                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-lime-200 sm:mx-0 sm:h-10 sm:w-10">
                                          <CheckIcon className="h-6 w-6 text-lime-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                          <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                            Xóa máy in thành công!
                                          </Dialog.Title>
                                          <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                              Bạn có thể xem ngay kết quả.
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                      <button
                                        type="button"
                                        className="border border-lime-600 inline-flex w-full justify-center rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-lime-600 shadow-sm hover:bg-lime-600 hover:text-white sm:ml-3 sm:w-auto"
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
    
    </>
  )
}

