import React, { useState, useEffect } from 'react';
export default function RemovingTypeForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
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
    const confirmUpdate = () => {
        setIsChecked(true); // Show the success message
        closeModal(); // Close the modal
    };
    const modalButton = (label, onClick) => (
        <button
            className="bg-[#0F6CBF] text-[#F5F5F5] px-4 py-2 rounded-md m-4"
            onClick={onClick}
        >
            {label}
        </button>
    );
    return (
        <div className="mb-10 mt-10 bg-[#F5F5F5] pt-3 pb-4 border-2 border-[#0F6CBF] flex-1 text-center text-[20px]">
			<strong id="form-title" className="text-[#374151] text-[20px] p-5">Danh sách các kiểu file đã được thêm</strong>
            <hr className="border-[#0F6CBF] w-full my-4" />
            <div className="flex grid grid-cols-8 gap-4">
                <div id="form-checkbox" className="col-span-6 p-4">
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
                            <a>
                                {modalButton("Xác nhận", confirmUpdate)}
                            </a>
                            {modalButton("Hủy",closeModal)}
                        </div>
                    </div>
                </div>
            )}
            {isChecked && (
                <div id="confirm" className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white border-2 border-[#0F6CBF] shadow-lg">
                        <h2 className="text-xl font-bold m-4">Cập nhật thành công</h2>
                        <hr className="border-[#0F6CBF] w-full my-4" />
                        {modalButton("Đóng", () => setIsChecked(false))}
                    </div>
                </div>
            )}
		</div>
    );
}
