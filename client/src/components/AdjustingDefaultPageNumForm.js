import React, { useState } from 'react';
function SelectOptions({ id, name, value, options, onChange, labelText }) {
    return (
        <div className="col-span-1 ml-5 pr-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {labelText}
            </label>
            <select
                id={id}
                name={name}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#0F6CBF] focus:border-[#0F6CBF] sm:text-sm"
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option} value={option}>
                        {labelText === "Chọn số lượng" ? option : `Sau ${option} ngày`}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default function AdjustingDefaultPageNumForm() {
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleDaysChange = (event) => {
        setDays(event.target.value);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [quantity, setQuantity] = useState("100"); // default là 100
    const [days, setDays] = useState("3"); // default là 3
    const selectInputs = [
        {
            id: "quantity",
            name: "quantity",
            value: quantity,
            options: ["100", "150", "200", "250", "300"],
            onChange: handleQuantityChange,
            labelText: "Chọn số lượng",
        },
        {
            id: "days",
            name: "days",
            value: days,
            options: ["3", "4", "5", "6", "7"],
            onChange: handleDaysChange,
            labelText: "Chọn ngày",
        },
    ];
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
        );
    };
    return (
        <div className="ml-20 mr-20 mb-10 mt-10 bg-[#F5F5F5] rounded-[40px] pt-3 pb-4 border-2 border-[#0F6CBF] flex-1 text-center text-[30px]">
            <strong id="form-title" className="text-[#374151] text-[40px]">Cập nhật số lượng trang in mặc định cho mỗi sinh viên và ngày cập nhật thay đổi</strong>
            <hr className="border-[#0F6CBF] w-full my-4" />
            <div id="form-select" className="grid grid-rows-2 gap-4">
                <div className="col-span-1 grid grid-cols-2 gap-4 flex justify-between items-center mt-4">
                    {selectInputs.map((input) => (
                        <SelectOptions
                            key={input.id}
                            id={input.id}
                            name={input.name}
                            value={input.value}
                            options={input.options}
                            onChange={input.onChange}
                            labelText={input.labelText}
                        />
                    ))}
                </div>
                <div id="form-button" className="items-center mt-4">
                    <button className="w-40 h-30 bg-[#0F6CBF] text-[#F5F5F5] p-2 rounded-md" onClick={openModal}>Cập nhật</button>
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white border-2 border-[#0F6CBF] shadow-lg">
                        <h2 className="text-xl font-bold m-4">Xác nhận</h2>
                        <hr className="border-[#0F6CBF] w-full my-4" />
                        <div className="flex justify-end">
                            <a href={`UpdatePageNum?quantity=${quantity}&days=${days}`}>
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
