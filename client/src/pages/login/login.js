import React, { useState } from 'react';
import StudentLogin from '../../components/StudentLogin';
import SPSOLogin from '../../components/SPSOLogin';
import backgroundImage from '../../assets/images/homeBK.jpg'
import logoImage from '../../assets/images/BK.jpg';

export default function Login() {
	const [activeComponent, setActiveComponent] = useState(null);

    const scrollToComponent = (componentId) => {
		if (handleAuthentication(componentId) === false) {
			setActiveComponent(componentId);
			const component = document.getElementById(componentId);
			if (component) {
				component.scrollIntoView({ behavior: 'smooth' });
			}
		}
    };
	const handleAuthentication = (componentId) => {
		const cookies = document.cookie.split('; ');
		for (const cookie of cookies) {
			const [name, value] = cookie.split('=');
			if (componentId === "SPSOLogin" && name === 'SPSO_cookie_id') {
				window.location.href = 'http://localhost:3000/admin';
				return true
			} else if (componentId === "StudentLogin" && name === 'Student_cookie_id') {
				window.location.href = 'http://localhost:3000';
				return true
			}
		}
		return false
	};
	return (
		<div className="w-full h-screen flex justify-center items-center bg-cover " style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className="w-96 h-222 bg-white rounded-2xl flex items-center flex-col">
				<div className="w-20 flex justify-center">
					<a><img src={logoImage} alt="Logo BK" className="mt-8 mb-4 w-full object-cover object-center rounded-md" /></a>
				</div>
				<h1 className="text-gray-700 text-2xl font-bold">Đăng nhập</h1>
				<div className="text-[20px] justify-between mb-8 mt-4">
					<button
						className={`w-80 h-10 rounded-full overflow-hidden bg-[#0F6CBF] text-[#F5F5F5] cursor-pointer flex items-center justify-center mb-4 ${activeComponent === 'StudentLogin' ? 'bg-gray-500' : ''}`}
						onClick={() => scrollToComponent("StudentLogin")}
					>
							Sinh viên
					</button>
					<button
						className={`w-80 h-10 rounded-full overflow-hidden bg-[#0F6CBF] text-[#F5F5F5] cursor-pointer flex items-center justify-center ${activeComponent === 'SPSOLogin' ? 'bg-gray-500' : ''}`}
						onClick={() => scrollToComponent("SPSOLogin")}
						>
							Quản trị viên
					</button>
				</div>
				<div id="StudentLogin" style={{ display: activeComponent === 'StudentLogin' ? 'block' : 'none' }}>
					<h2 className="text-gray-700 text-10 font-bold">Đăng nhập dành cho Sinh viên</h2>
					<StudentLogin />
				</div>
				<div id="SPSOLogin" style={{ display: activeComponent === 'SPSOLogin' ? 'block' : 'none' }}>
					<h2 className="text-gray-700 text-10 font-bold">Đăng nhập dành cho Quản trị viên</h2>
					<SPSOLogin />
				</div>
			</div>
		</div>
	);
}