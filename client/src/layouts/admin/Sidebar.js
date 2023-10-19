import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import imageBK from '../../assets/images/BK.jpg'
import {
	HiOutlineViewGrid,
	HiPrinter,
	HiOutlineDocument,
	HiOutlineChartBar,
	HiOutlineChartPie,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineLogout,
	HiOutlineDocumentDuplicate
} from 'react-icons/hi'
import {FaMinusCircle, FaPlusCircle} from 'react-icons/fa'


const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'information',
		label: 'Thông tin các nhân',
		path: '/admin',
		icon: <HiOutlineViewGrid/>
	},
	{
		key: 'printer',
		label: 'Máy in',
		path: '/admin/printerAdmin',
		icon: <HiPrinter />
	},
	{
		key: 'paper',
		label: 'Giấy in',
		path: '/admin/paperAdmin',
		icon: <HiOutlineDocument />
	},
	{
		key: 'PrinterStatistics',
		label: 'Thống kê máy in',
		path: '/admin/PrinterStatistics',
		icon: <HiOutlineChartBar />
	},
	{
		key: 'RevenueStatistics',
		label: 'Thống kê doanh thu',
		path: '/admin/RevenueStatistics',
		icon: <HiOutlineChartPie />
	},
	{
		key: 'AddingType',
		label: 'Thêm kiểu file',
		path: '/admin/AddingType',
		icon: <FaPlusCircle />
	},
	{
		key: 'RemovingType',
		label: 'Xóa kiểu file',
		path: '/admin/RemovingType',
		icon: <FaMinusCircle />
	},
	{
		key: 'AdjustingDefaultPageNum',
		label: 'Điều chỉnh số lượng trang in',
		path: '/admin/AdjustingDefaultPageNum',
		icon: <HiOutlineDocumentDuplicate />
	}
]

const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Cài đặt',
		path: '/admin/settings',
		icon: <HiOutlineCog/>
	},
	{
		key: 'support',
		label: 'Hỗ Trợ',
		path: '/admin/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]


function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-lightGray text-mainBlue' : 'text-textGray', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}

const linkClass =
	'flex items-center gap-2 px-3 py-2 hover:bg-lightGray hover:no-underline rounded-[12px] text-base font-semibold'

export default function Sidebar() {
	return (
		<div className="bg-white w-60 p-3 pt-11 flex flex-col">
			<p className='text-sm font-semibold text-textGray opacity-50 mb-1'>Chức năng chính</p>

			<div className="flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			
			<div className="flex flex-col gap-0.5 pt-2 rounded-md">
				<p className='text-sm font-semibold text-textGray opacity-50 mb-1'>Chức năng khác</p>
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-mainRed mb-2 hover:bg-lightRed ')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Đăng xuất
				</div>
			</div>
		</div>
	)
}

