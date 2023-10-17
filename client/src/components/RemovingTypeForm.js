import React, { useState, useEffect } from 'react';
export default function RemovingTypeForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkedValues, setCheckedValues] = useState([]);
    const checkboxData = [
        { id: "checkbox1",label: ".PDF (Portable Document Format)", value: "pdf" },
    ];
    const toggleCheckbox = (value) => {
        if (checkedValues.includes(value)) {
            setCheckedValues(checkedValues.filter((val) => val !== value));
        } else {
            setCheckedValues([...checkedValues, value]);
        }
    };
    useEffect(() => {
        // Reset checkboxes when the component mounts
        setCheckedValues([]);
    }, []);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const modalButton = (label) => {
        return (
            <button className="bg-[#0F6CBF] text-[#F5F5F5] px-4 py-2 rounded-md m-4" onClick={closeModal}>
                {label}
            </button>
        )
    }
    return (
        <div className="ml-20 mr-20 mb-10 mt-10 bg-[#F5F5F5] rounded-[40px] pt-3 pb-4 border-2 border-[#0F6CBF] flex-1 text-center text-[30px]">
			<strong id="form-title" className="text-[#374151] text-[40px]">Danh sách các kiểu file đã được thêm</strong>
            <hr className="border-[#0F6CBF] w-full my-4" />
            <div className="flex grid grid-cols-10 gap-4">
                <div id="form-checkbox" className="col-span-8 ml-5 pr-4">
                    <div className="h-full flex flex-col justify-center">
                        {checkboxData.map((item) => (
                            <div key={item.id} className="mb-4 bg-[#FFFFFF] p-4 flex items-center justify-between">
                                <label htmlFor={item.id}>{item.label}</label>
                                <input
                                    type="checkbox"
                                    value={item.value}
                                    id={item.id}
                                    className="h-6 w-6 bg-[#0F6CBF] rounded-md cursor-pointer"
                                    onChange={() => toggleCheckbox(item.value)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div id="form-button" className="col-span-2 pl-4 pr-4 flex items-center">
                    <button className="w-40 h-30 bg-[#0F6CBF] text-[#F5F5F5] p-2 rounded-md" onClick={openModal}>Xóa</button>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white border-2 border-[#0F6CBF] shadow-lg">
                        <h2 className="text-xl font-bold m-4">Xác nhận</h2>
                        <hr className="border-[#0F6CBF] w-full my-4" />
                        <div className="flex justify-end">
                        <a href={`RemoveType?types=${checkedValues.join(',')}`}>
                                {modalButton("Xác nhận")}
                            </a>
                            {modalButton("Hủy")}
                        </div>
                    </div>
                </div>
            )}
		</div>
    );
}