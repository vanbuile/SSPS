import React, { useState } from 'react';
import AddingTypeForm from '../../components/AddingTypeForm';
import RemovingTypeForm from '../../components/RemovingTypeForm';
import AdjustingDefaultPageNumForm from '../../components/AdjustingDefaultPageNumForm';

export default function PaperAdmin() {
    const [activeComponent, setActiveComponent] = useState('ViewFileTypesList');

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
    const scrollToComponent = (componentId) => {
        if(handleAuthorization('SPSO_cookie_id') == true) {
            setActiveComponent(componentId);
            const component = document.getElementById(componentId);
            if (component) {
                component.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };
    if(handleAuthorization('SPSO_cookie_id') == true) {
        return (
            <div>
                <div className="flex text-[20px] justify-between">
                    <button
                        className={`w-100 h-30 bg-[#2563EB] text-[#F5F5F5] p-2 rounded-md ${activeComponent === 'ViewFileTypesList' ? 'bg-gray-500' : ''}`}
                        onClick={() => scrollToComponent("ViewFileTypesList")}
                    >
                        Xem Danh Sách Kiểu File
                    </button>
                    <button
                        className={`w-100 h-30 bg-[#2563EB] text-[#F5F5F5] p-2 rounded-md ${activeComponent === 'AdjustingDefaultPageNumForm' ? 'bg-gray-500' : ''}`}
                        onClick={() => scrollToComponent("AdjustingDefaultPageNumForm")}
                    >
                        Chọn Số Lượng Giấy In Cấp Thêm Cho Toàn Bộ Sinh Viên Của Trường
                    </button>
                </div>
                <div id="ViewFileTypesList" className='flex' style={{ display: activeComponent === 'ViewFileTypesList' ? 'block' : 'none' }}>
                    <AddingTypeForm />
                    <RemovingTypeForm />
                </div>
                <div id="AdjustingDefaultPageNumForm" style={{ display: activeComponent === 'AdjustingDefaultPageNumForm' ? 'block' : 'none' }}>
                    <AdjustingDefaultPageNumForm />
                </div>
            </div>
        );      
    }
}
