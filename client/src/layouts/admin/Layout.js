import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
	const handleAuthorization = (role) => {
		const cookies = document.cookie.split('; ');
		for (const cookie of cookies) {
		  const [name, value] = cookie.split('=');
		  if(name === role) {
			return true
		  }
		}
		window.location.href = 'http://localhost:3000/login';
	  }
	if(handleAuthorization('SPSO_cookie_id') == true) {
		return (
			<>
				
				<div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
					<Sidebar />
					<div className="flex flex-col flex-1">
						<Header />
						<div className="flex-1 p-4 min-h-0 overflow-auto">
							<Outlet />
						</div>
					</div>
				</div>
			</>
			
		)
	}
}
