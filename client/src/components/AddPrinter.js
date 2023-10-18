import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'


export default function AddPrinter() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCommit, setIsCommit] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  function openCommitModal(){
    setIsCommit(true)
  }
  function closeCommitModal(){
    setIsCommit(false)
  }
  function openAlert(){
    setIsAlert(true)
  }
  function closeAlert(){
    setIsAlert(false)
    closeCommitModal()
    closeModal()
  }
  function Commit(){
    openAlert()
  }

  return (
    <>  
        <button 
        onClick={openModal} 
        type="button" 
        className="text-white bg-mainBlue hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Thêm máy in
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
                    Thêm thông tin máy in mới
                    
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
                                <input required type="text" name="name" id="name" autocomplete="name" class="focus:outline-none  w-full block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="Từ 1-20 ký tự"/>
                              </div>
                            </div>
                          </div>
                          <div class="sm:col-span-2">
                            <label for="brand" class="block text-sm font-medium leading-6 text-gray-900">Hãng</label>
                            <div class="mt-1">
                              <div class="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-lightBlue-300 sm:max-w-md">
                                <input required type="text" name="brand" id="brand" autocomplete="brand" class=" focus:outline-none  w-full flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Từ 1-20 ký tự"/>
                              </div>
                            </div>
                          </div>
                          <div class="sm:col-span-4">
                            <label for="model" class="block text-sm font-medium leading-6 text-gray-900">Mẫu số</label>
                            <div class="mt-1">
                              <div class="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-lightBlue-300 sm:max-w-md">
                                <input required type="text" name="model" id="model" autocomplete="model" class="focus:outline-none  w-full block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6" placeholder="Từ 1-20 ký tự"/>
                              </div>
                            </div>
                          </div>
                          <div class="sm:col-span-2">
                            <label for="paper" class="block text-sm font-medium leading-6 text-gray-900">SL Giấy</label>
                            <div class="mt-1">
                              <div class="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-lightBlue-300 sm:max-w-md">
                                <input required  type="number" name="paper" id="paper" autocomplete="paper" class=" focus:outline-none  w-full flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Từ 1-20 ký tự"/>
                              </div>
                            </div>
                          </div>
                          <div class="sm:col-span-3">
                            <label for="day" class="block text-sm font-medium leading-6 text-gray-900">Ngày mua</label>
                            <div class="mt-1">
                              <div class="flex rounded-md shadow-sm ring-2 ring-inset ring-gray-300 focus-within:ring-lightBlue-300 sm:max-w-md">
                                <input required  type="date" name="day" id="day" autocomplete="day" class=" focus:outline-none  w-full flex-1 border-0 bg-transparent py-1.5 px-2 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="Từ 1-20 ký tự"/>
                              </div>
                            </div>
                          </div>
                          
                         

                          <div class="col-span-full">
                            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Mô tả</label>
                            <div class="mt-2">
                              <textarea id="about" name="about" rows="3" class="focus:outline-none block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lightBlue-300 sm:text-sm sm:leading-6" placeholder='Không quá 200 kí tự'></textarea>
                            </div>
                          </div>

                          

                          {/* <div class="col-span-full">
                            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                              <div class="text-center">
                                <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                  <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                                </svg>
                                <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                  <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Tải ảnh máy in</span>
                                    <input id="file-upload" name="file-upload" type="file" class="sr-only"/>
                                  </label>
                                  <p class="pl-1">hoặc kéo thả</p>
                                </div>
                                <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF tối đa 10MB</p>
                              </div>
                            </div>
                          </div> */}

                        </div>
                        <fieldset className='mt-2 float-left'>
                            <legend class="text-sm font-semibold leading-6 text-gray-900">Loại máy in</legend>
                            <div class="mt-2 space-y-2">
                              <div class="flex items-center gap-x-3">
                                <input required id="type1" name="type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                <label for="type1" class="block text-sm font-medium leading-6 text-gray-900">In thường</label>
                              </div>
                              <div class="flex items-center gap-x-3">
                                <input required id="type2" name="type" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                <label for="type2" class="block text-sm font-medium leading-6 text-gray-900">In màu</label>
                              </div>
                             
                            </div>
                        </fieldset>
                        <fieldset className='mt-2 float-right mr-6'>
                            <legend class="text-sm font-semibold leading-6 text-gray-900">Tình trạng</legend>
                            <div class="mt-2 space-y-2">
                              <div class="flex items-center gap-x-3">
                                <input required id="state1" name="state" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                                <label for="state1" class="block text-sm font-medium leading-6 text-gray-900">Bảo trì</label>
                              </div>
                              <div class="flex items-center gap-x-3">
                                <input required id="state2" name="state" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
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
                                      Bạn có chắc muốn thêm máy in này không ?
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
                                                            Thêm máy in thành công!
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
