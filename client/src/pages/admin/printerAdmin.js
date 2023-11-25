
import SortOptions from '../../components/SortOptions'
import ListPrinter from '../../components/ListPrinter'
import PrinterPagination from '../../components/PrinterPagination'
import AddPrinter from '../../components/AddPrinter'
import {useEffect, useState} from 'react'
import APIs from "../../util/API";
import axios from "axios";
const sortOption= [
	{ id: 1, name: 'Bảng chữ cái (A - Z)', unavailable: false },
	{ id: 2, name: 'Bảng chữ cái (A - Z)', unavailable: false },
	{ id: 3, name: 'SL giấy (Tăng dần)', unavailable: false },
	{ id: 4, name: 'SL giấy (Giảm dần)', unavailable: true },
	{ id: 5, name: 'Vị trí (Tăng dần)', unavailable: false },
	{ id: 6, name: 'Vị trí (Giảm dần)', unavailable: false }
  ]
const printerList= [
	{name:'Brother-HL1202D',type: 1, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 1, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 1, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 2, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 2, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 2, state: 0, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 2, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 2, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 2, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 2, state: 0, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 1, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 1, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 1, state: 0, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 1, state: 0, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 1, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
	{name:'Brother-HL1202D',type: 1, state: 1, paper: 400, location:'102-BKB6',model:'101221', brand:'Brother', description:"Best seller printer from Brother", day:'2020-01-01'},
]
function addNewPrinter(printer){
	printerList.push(printer)
}
const initialFilters = {
	location: "Any",
	paper:"Any",
	status: "Any"
}
export default function PrinterAdmin() {
	const [sortOption, setSortOption] = useState(0)
	const [printers, setPrinters] = useState([])
	const [filters, setFilters] = useState(initialFilters)

	useEffect(()=>{
		const getAPIdata = async (sort) => {
			try {
				const response = await axios.get(APIs.APIadminPrinter,{
					params :{
						sort: sortOption,
						location: filters.location,
						paper: filters.paper,
						status: filters.status
					}
				})
				setPrinters(response.data)
			} catch (error){
				console.error('Error fetching data:', error)
			}
		}
		getAPIdata()
	},[])
	const handleView = async () => {
		try {
			const response = await axios.get(APIs.APIadminPrinter,{
				params :{
					sort: sortOption,
					location: filters.location,
					paper: filter.paper,
					status: filter.status
				}
			})
			setPrinters(response.data)
		} catch (error){
			console.error('Error fetching data:', error)
		}
	}

	return (
		<div className="container mx-auto">
			{/* First row */}
			<div className="flex flex-row justify-between pb-3 ">
				<div className="left flex flex-row">
					<div className="inline-flex items-center justify-center text-lg me-2 font-bold opacity-50 text-md"><p>Sắp xếp</p></div>
					<div className="inline-flex items-center justify-center">
						<SortOptions onChange={setSortOption} option = {sortOption} type={1} />
					</div>
				</div>
				<div className="right">
					<AddPrinter addPrinter={addPrinter}/>
				</div>
			</div>
			<hr className='mb-2'/>
			{/* Table of printer - Second row*/}
			<ListPrinter
				printers={printers}
				setPrinters={setPrinters}
				filters={filters}
				setFilters={setFilters}
				handleView={handleView}
			/>
			<PrinterPagination />
		</div>
	);
};