import ItemPrinter from "./ItemPrinter";
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import {FunnelIcon} from "@heroicons/react/24/outline";
import axios from "axios";
import SortOptions from "./SortOptions"
import APIs from '../util/API';
import { useState, useEffect } from "react";

const statuses = [
    'Tất cả',
     "Bảo trì",
     "Hoạt động"
]
const papers =[
    'Tất cả',
    '0 - 199',
    '200 - 499',
    '500 - 999',
   '1000 - 1999',
   '>= 2000'
]
const locations = [
    'Tất cả',
    'BKB1',
    'BKB2',
    'BKB3',
    'BKB4',
    'BKB5',
    'BKB6',
     'A1',
     'A2',
    'A3',
   'A4',
     'A5',
     'A6'
]

export default function ListPrinter({printers, setPrinters, filter, setFilter, reload}) {
    const handleChangeLocation = (newLocation) => {
        setFilter({...filter, location: newLocation})
    }
    const handleChangePaper = (newPaper) => {
        setFilter({...filter, paper: newPaper})
    }
    const handleChangeStatus = (newStatus) => {
        setFilter({...filter, status: newStatus})
    }

    return (
		<>
        <div className="w-full">
            <div className="w-full px-4 py-auto sticky top-0 z-10">
                    <div className="mx-auto w-full rounded-2xl bg-white px-2 flex flex-row shadow-sm">
                       
                        <div className="w-full ml-8 mr-14 flex flex-col justify-center">
                            <div className="flex w-full justify-between px-4  text-left text-sm font-medium text-mainBlue">
                                <span className="flex-1 flex flex-col justify-center"><p >Tên máy</p></span>
                                <span className="flex-1 flex flex-row">
                                    <p className="flex flex-col justify-center mr-1">Vị trí</p>
                                    <SortOptions Change={handleChangeLocation} options={locations} option={filter.location} type={0}  className="flex flex-col justify-center"/>
                                </span>
                                <span className="flex-1 flex flex-row">
                                    <p  className="flex flex-col justify-center mr-1">SL giấy</p>
                                    <SortOptions Change={handleChangePaper} options={papers} type={0} option={filter.paper} className="flex flex-col justify-center"/>
                                </span>
                                <span className="flex-1 flex flex-row">
                                    <p className="flex flex-col justify-center mr-1">Tình trạng</p>
                                        <SortOptions Change={handleChangeStatus} options={statuses} option={filter.status} type={0}  className="flex flex-col justify-center"/>
                                    </span>
                            </div>
                        </div>
                        <div className='ml-1'>
                            <button onClick={() => reload(null, null, null, null, null)} className='border hover:border-mainBlue px-2 py-2 my-1 hover:bg-lightBlue-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 rounded-full'>
                                <FunnelIcon className="h-5 w-5 text-mainBlue flex-none"/>
                            </button>
                        </div>
                        
                    </div>
            </div>
            {
                printers.map((item, idx) =>
                    (
                         <ItemPrinter reload={reload} printer = {item} idx={idx + 1} key={idx}/>
                    )
                )
            }
        
        </div>
        </>
	);
}
