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
                    className={`w-40 h-30 bg-[#0F6CBF] text-[#F5F5F5] p-2 rounded-md ${activeComponent === 'AddingTypeForm' ? 'bg-gray-500' : ''}`}
                    onClick={() => scrollToComponent("AddingTypeForm")}
                >
                    Thêm kiểu file
                </button>
                <button
                    className={`w-40 h-30 bg-[#0F6CBF] text-[#F5F5F5] p-2 rounded-md ${activeComponent === 'RemovingTypeForm' ? 'bg-gray-500' : ''}`}
                    onClick={() => scrollToComponent("RemovingTypeForm")}
                >
                    Xóa kiểu file
                </button>
                <button
                    className={`w-40 h-30 bg-[#0F6CBF] text-[#F5F5F5] p-2 rounded-md ${activeComponent === 'AdjustingDefaultPageNumForm' ? 'bg-gray-500' : ''}`}
                    onClick={() => scrollToComponent("AdjustingDefaultPageNumForm")}
                >
                    Điều chỉnh số lượng trang in
                </button>
            </div>
            <div id="AddingTypeForm" style={{ display: activeComponent === 'AddingTypeForm' ? 'block' : 'none' }}>
                <AddingTypeForm />
            </div>
            <div id="RemovingTypeForm" style={{ display: activeComponent === 'RemovingTypeForm' ? 'block' : 'none' }}>
                <RemovingTypeForm />
            </div>
            <div id="AdjustingDefaultPageNumForm" style={{ display: activeComponent === 'AdjustingDefaultPageNumForm' ? 'block' : 'none' }}>
                <AdjustingDefaultPageNumForm />
            </div>
        </div>
    );
}
