import React, { useState } from 'react';
import AddingTypeForm from '../../components/AddingTypeForm';
import RemovingTypeForm from '../../components/RemovingTypeForm';
import AdjustingDefaultPageNumForm from '../../components/AdjustingDefaultPageNumForm';

export default function PaperAdmin() {
    const [activeComponent, setActiveComponent] = useState(null);

    const scrollToComponent = (componentId) => {
        setActiveComponent(componentId);
        const component = document.getElementById(componentId);
        if (component) {
            component.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="flex text-[20px] justify-between">
                <button
                    className={`w-40 h-30 bg-[#0F6CBF] text-[#F5F5F5] p-2 rounded-md ${activeComponent === 'ViewFileTypesList' ? 'bg-gray-500' : ''}`}
                    onClick={() => scrollToComponent("ViewFileTypesList")}
                >
                    Xem Danh Sách Kiểu File
                </button>
                <button
                    className={`w-40 h-30 bg-[#0F6CBF] text-[#F5F5F5] p-2 rounded-md ${activeComponent === 'AdjustingDefaultPageNumForm' ? 'bg-gray-500' : ''}`}
                    onClick={() => scrollToComponent("AdjustingDefaultPageNumForm")}
                >
                    Cập Nhật Lại Số Lượng Giấy In Cho Toàn Bộ Sinh Viên Của Trường
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
