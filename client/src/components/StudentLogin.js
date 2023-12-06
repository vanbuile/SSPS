import React, { useEffect, useState } from 'react';
import axios from 'axios';
import APIs from '../util/API';

export default function StudentLogin() {
    const [formData, setFormData] = useState({
        id: '',
        pass: '',
    });
    const [notification, setNotification] = useState(null);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
    };
    const handleLoginSuccess = (userData) => {
        const expirationTime = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes
        const cookieId = userData.hasOwnProperty('ID') ? userData.ID : userData.MSSV;
        document.cookie = `Student_cookie_id=${cookieId}; expires=${expirationTime.toUTCString()}; domain=localhost; path=/;`;
        window.location.href = 'http://localhost:3000';
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { id, pass } = formData;
        try {
            const response = await axios.post(APIs.APILogin + '/Login', {
                id: id,
                pass: pass,
                role: 'student'
            });
            if (response.data.length === 0) {
                setNotification('Thông tin đăng nhập không đúng !');
                setTimeout(() => {
                setNotification(null);
                }, 1000);
            } else {
                handleLoginSuccess(response.data);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };
    useEffect(() => {
        return () => {
            setNotification(null);
        };
    }, []);
    
    return (
        <div>
            <form className="mt-2" method="post" onSubmit={handleSubmit}>
                <p className="w-80 h-10 mb-3 rounded-full border border-gray-100 overflow-hidden">
                    <input
                        type="text"
                        id="query"
                        name="id"
                        placeholder="Tên Đăng Nhập"
                        className="w-full h-full rounded-2xl border border-gray-200 overflow-hidden px-4 text-base font-semibold bg-gray-200 outline-none"
                        value={formData.id}
                        onChange={handleInputChange}
                        />
                </p>
                <p className="w-80 h-10 mb-3 rounded-full border border-gray-100 overflow-hidden">
                    <input
                        type="password"
                        id="pass"
                        name="pass"
                        placeholder="Mật Khẩu"
                        required
                        value={formData.pass}
                        onChange={handleInputChange}
                        className="w-full h-full rounded-2xl border border-gray-200 overflow-hidden px-4 text-base font-semibold bg-gray-200 outline-none"
                        />
                </p>
                <p className="w-80 h-10 rounded-full overflow-hidden bg-[#0F6CBF] text-[#F5F5F5] cursor-pointer transition duration-300 hover:bg-blue-800 flex items-center justify-center mb-16">
                    <input className="cursor-pointer transition duration-300 hover:bg-blue-800" type="submit" value="Đăng nhập" />
                </p>
            </form>
            {notification && (
                <div className="fixed bottom-4 bg-red-500 text-white p-4 rounded-md">
                {notification}
                </div>
            )}
        </div>
    );
}
