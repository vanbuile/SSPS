import ItemPrinter from "./ItemPrinter";
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import {FunnelIcon} from "@heroicons/react/24/outline";
import SortOptions from "./SortOptions"

const states = [
    {id:-1, name:'Bất kỳ'},
    {id: 0, name: "Bảo trì"},
    {id: 1, name: "Hoạt động"}
]
const papers =[
    {name:'Bất kỳ'},
    {name:'0 - 99'},
    {name:'100 - 399'},
    {name:'400 - 999'},
    {name:'1000 - 1999'},
    {name:'>= 2000'}
]

export default function ListPrinter({ printers, locations }) {
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
                                    <SortOptions option={locations} type={0}  className="flex flex-col justify-center"/>
                                </span>
                                <span className="flex-1 flex flex-row">
                                    <p  className="flex flex-col justify-center mr-1">SL giấy</p>
                                    <SortOptions option={papers} type={0}  className="flex flex-col justify-center"/>
                                </span>
                                <span className="flex-1 flex flex-row">
                                    <p className="flex flex-col justify-center mr-1">Tình trạng</p>
                                    <SortOptions option={states} type={0}  className="flex flex-col justify-center"/>
                                    </span>
                            </div>
                        </div>
                        <div className='ml-1'>
                            <button className='border hover:border-mainBlue px-2 py-2 my-1 hover:bg-lightBlue-300 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 rounded-full'>
                                <FunnelIcon className="h-5 w-5 text-mainBlue flex-none"/>
                            </button>
                        </div>
                        
                    </div>
            </div>
            {
                printers.map((item, idx) =>
                    (
                        <ItemPrinter printer = {item} idx ={idx + 1} key={idx}/>
                    )
                )
            }
        
        </div>
        </>
	);
}
