import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function ShareModal({ onTextareaChange, onTextareaChange1}) {
  let [isOpen, setIsOpen] = useState(false)
  const [localTextareaValue, setLocalTextareaValue] = useState('');
  const [localTextareaValue1, setLocalTextareaValue1] = useState('');
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  function handleTextareaChange(event) {
    const value = event.target.value;
    setLocalTextareaValue(value);
  }
  function handleTextareaChange1(event) {
    const value = event.target.value;
    setLocalTextareaValue1(value);
  }
  function handleShare() {  
    setIsOpen(false)   
    onTextareaChange(localTextareaValue)
    onTextareaChange1(localTextareaValue1)

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
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Đường liên kết đến file
                  </Dialog.Title>
                  <div className="mt-2">
                    <div> 
                      <textarea style={{ width: "350px", borderRadius: "15px", padding: "15px 0 15px 15px", margin: "20px 0 20px 20px", border: "1px solid gray",}}
                        placeholder="Link...." value={localTextareaValue1} onChange={handleTextareaChange1}
                      />
                    </div>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-gray-900"
                  >
                    Mô tả file
                  </Dialog.Title>
                  <div className="mt-2">
                    <div> 
                      <textarea style={{ width: "350px", borderRadius: "15px", padding: "15px 0 15px 15px", margin: "20px 0 20px 20px", border: "1px solid gray",}}
                        placeholder="Write description...." value={localTextareaValue} onChange={handleTextareaChange}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleShare}
                    >
                      Share
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
      <div className="flex rounded-md bg-textGray px-3 py-2 text-sm font-semibold text-white" style={{marginLeft:'30px'}}>
        <button
          type="button"
          onClick={openModal}
        >
           Chia sẻ 
        </button>
      </div>
      {isOpen && <>{Showmodal()} </>}
    </>
  )
}