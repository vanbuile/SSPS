
import SortOptions from '../../components/SortOptions'
import ListPrinter from '../../components/ListPrinter'
import PrinterPagination from '../../components/PrinterPagination'
import AddPrinter from '../../components/AddPrinter'
import {useEffect, useState} from 'react'
import APIs from "../../util/API";
import axios from "axios";
import {alert} from "@material-tailwind/react";
const sortOptions= [
	'Bảng chữ cái (A - Z)',
	'Bảng chữ cái (Z - A)',
	'SL giấy (Tăng dần)',
 	'SL giấy (Giảm dần)',
	'Vị trí (Tăng dần)',
	'Vị trí (Giảm dần)'
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
const initialPrinters = []
const initialSort = {id: 0, name: 'Bảng chữ cái (A - Z)'}
const initialFilter = {
	location: 0,
	paper: 0,
	status: 0
}
export default function PrinterAdmin() {

	const [sort, setSort] = useState(0)
	const [printers, setPrinters] = useState(initialPrinters)
	const [filter, setFilter] = useState(initialFilter)
	const [page, setPage] = useState(1)
	const [num, setNum] = useState(0)


	useEffect(()=>{
		const getAPIdata = async () => {
			try {

				const response = await axios.get(APIs.APIadminPrinter,{
					params :{
						page: page,
						sort: sort,
						location: filter.location,
						paper: filter.paper,
						status: filter.status,
					}
				})

				if(response.status === 200){
					setPrinters([...response.data.data])
					setNum(response.data.num)
				}
				else {
					alert("Có lỗi khi truy xuất dữ liệu máy in")
				}

			} catch (error){

				alert(error)
			}
		}
		getAPIdata()

	},[])

	const reload = async (_page, _sort, _location, _paper, _status) => {
		if(!_page) _page = 1
		try {
			const response = await axios.get(APIs.APIadminPrinter,{
				params :{
					page: _page || page,
					sort: _sort || sort,
					location: _location || filter.location,
					paper: _paper || filter.paper,
					status: _status || filter.status
				}
			})
			if (response.status == 200){
				setPrinters(response.data.data)
				setNum(response.data.num)
				if(_page == 1) setPage(1)
			}
			else {
				alert("Có lỗi khi truy xuất dữ liệu máy in")
			}

		} catch (error){
			//alert("Error when load printer data")
			console.error('Error fetching data:', error)
		}
	}

	const handleSortChange = async (sortOpt) => {
		console.log(sortOpt)
		reload(null, sortOpt,null,null, null)
		setSort(sortOpt);
	}
	const handleChangePage = async (pageNum) => {
		console.log(pageNum)
		reload(pageNum, null, null, null, null)
		setPage(pageNum)
	}
	if (!printers) return <></>
	return (
		<div className="container mx-auto">
			{/* First row */}
			<div className="flex flex-row justify-between pb-3 ">
				<div className="left flex flex-row">
					<div className="inline-flex items-center justify-center text-lg me-2 font-bold opacity-50 text-md"><p>Sắp xếp</p></div>
					<div className="inline-flex items-center justify-center">
						<SortOptions Change={handleSortChange} options={sortOptions} option={sort} type={1} />
					</div>
				</div>
				<div className="right">
					<AddPrinter reload={reload}/>
				</div>
			</div>
			<hr className='mb-2'/>
			 {/*Table of printer - Second row*/}
			<ListPrinter
				printers={printers}
				filter={filter}
				setFilter={setFilter}
				reload={reload}
			/>

			<PrinterPagination changePage={handleChangePage} page={page} num={num}/>
		</div>
	);
};