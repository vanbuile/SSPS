import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import EditPrinter from './EditPrinter'
import DeletePrinter from './DeletePrinter'
import { useState } from 'react'
import {CheckCircleIcon} from '@heroicons/react/20/solid'
import {ExclamationCircleIcon} from '@heroicons/react/20/solid'
 export default function ItemPrinter({ printer, idx }) {
    
  return (
    <div className="w-full px-4 my-1">
      <div className="mx-auto w-full rounded-2xl bg-white p-2 flex flex-row shadow-sm">
        <div className="pl-2 pr-4 py-1 z-0 w-9">
            <span className='font-bold opacity-50 '>{idx}</span>
        </div>
        <Disclosure as="div" className='w-full transition-all'>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-lightBlue-200 px-4 py-2 text-left text-sm font-medium text-mainBlue hover:bg-lightBlue-300 focus:outline-none focus-visible:ring focus-visible:ring-lightBlue-300 focus-visible:ring-opacity-75">
                <span className='flex-1'>{printer.name}</span>
                <span className='flex-1'>{printer.location}</span>
                <span className='flex-1'>{printer.paper}</span>
              
                <span className='flex-1'>
                  {(printer.state==1)?
                  <CheckCircleIcon className='h-5 w-5 text-mainBLue flex-none'/>:
                  <ExclamationCircleIcon className='h-5 w-5 text-mainRed flex-none'/>
                  } 
                </span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-mainBLue flex-none`}
                />
              </Disclosure.Button>
              
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 transition-all">
                  <hr/>
                  <p>Mẫu: {printer.model}</p>
                  <p>Loại máy: {printer.type==1?'In thường':'In màu'}</p>
                  <p>Hãng: {printer.brand}</p>
                  <p>Ngày mua: {printer.day}</p>
                  <p>Mô tả: {printer.description}</p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <div className='ml-1'>
           <EditPrinter printer={printer}/>
        </div>
        <div className='ml-1'>
            <DeletePrinter printer={printer}/>
        </div>
        
      </div>
    </div>
  )
}
