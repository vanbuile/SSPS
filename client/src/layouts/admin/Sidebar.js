import React from 'react'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import imageBK from '../../assets/images/BK.jpg'
import {
	HiOutlineViewGrid,
	HiPrinter,
	// HiOutlineShoppingCart,
	HiOutlineDocument,
	HiOutlineChartBar,
	HiOutlineChartPie,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiOutlineLogout 
} from 'react-icons/hi'



const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'information',
		label: 'Thông tin các nhân',
		path: '/admin',
		icon: <HiOutlineViewGrid />
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
	}
]

const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Cài đặt',
		path: '/admin/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Hỗ Trợ',
		path: '/admin/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]


const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
	return (
		<div className="bg-neutral-900 w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
				<Link to='/admin'>
					<img src={imageBK} alt='imageBK' width={40} height={40}></img>
				</Link>
				<Link to='/admin'>
					<span className="text-neutral-200 text-lg">Hệ Thống SPSO</span>
				</Link>
			</div>

			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div className={classNames(linkClass, 'cursor-pointer text-red-500')}>
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Đăng xuất
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className={classNames(pathname === link.path ? 'bg-neutral-700 text-white' : 'text-neutral-400', linkClass)}
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}
