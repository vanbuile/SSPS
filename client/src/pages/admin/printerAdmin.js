
import SortOptions from '../../components/SortOptions'
import ListPrinter from '../../components/ListPrinter'
import PrinterPagination from '../../components/PrinterPagination'
import AddPrinter from '../../components/AddPrinter'
import { useState } from 'react'
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
const locations = [
	{name:'Bất kỳ'},
	{name:'101-BKB6'},
	{name:'102-BKB6'},
	{name:'103-BKB6'},
	{name:'304-BKB6'},
	{name:'105-BKB1'},
	{name:'207-BKB1'},
	{name:'102-BKB2'},
	{name:'401-BKB3'},
	{name:'103-BKB2'},
]
function addNewPrinter(printer){
	printerList.push(printer)
}
export default function PrinterAdmin() {	
	
	return (
		<div className="container mx-auto">
			{/* First row */}
			<div className="flex flex-row justify-between pb-3 ">
				<div className="left flex flex-row">
					<div className="inline-flex items-center justify-center text-lg me-2 font-bold opacity-50 text-md"><p>Sắp xếp</p></div>
					<div className="inline-flex items-center justify-center">
						<SortOptions option = {sortOption} type={1} />
					</div>
				</div>
				<div className="right">
					<AddPrinter />
				</div>
			</div>
			<hr className='mb-2'/>
			{/* Table of printer - Second row*/}
			<ListPrinter printers={printerList} locations={locations}/>
			<PrinterPagination />
		</div>
	);
};