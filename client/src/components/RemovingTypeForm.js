import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APIs from '../util/API';
export default function RemovingTypeForm() {
    const [checkboxData, setdata] = useState([]);
    useEffect(() => {
    // Hàm fetchApiData sử dụng Axios để gửi yêu cầu GET đến API
        const fetchApiData = async () => {
            try {
                const response = await axios.get(APIs.APIadminFileTypes + '/GetPermmitedFileTypesList');
                setdata(response.data);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };

        // Gọi hàm fetchApiData khi component được mount
        fetchApiData();
    }, []); // [] đảm bảo useEffect chỉ chạy một lần khi component được mount
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [checkedValues, setCheckedValues] = useState([]);
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
    const confirmUpdate = async () => {
        let api_url = APIs.APIadminFileTypes + '/RemoveFileTypes?'
        let i = 0
        for (const type of checkedValues) {
            api_url += 'type' + i.toString() + '=' + type
            i++
            if (i === checkedValues.length) {
                break
            }
            api_url += '&'
        }
        try {
          // Make API request to AddFileTypes with checked values
            await axios.get(api_url);
            setIsChecked(true); // Show the success message
            closeModal(); // Close the modal
        } catch (error) {
            console.error('Error adding file types:', error);
        }
    };
    const modalButton = (label, onClick) => (
        <button
            className="bg-[#0F6CBF] text-[#F5F5F5] px-4 py-2 rounded-md m-4"
            onClick={onClick}
        >
            {label}
        </button>
    );
    const handleReload = () => {
        setIsChecked(false); // Reset the isChecked state
        closeModal(); // Close the modal
        // Reload the page
        window.location.reload();
    };
    return (
        <div className="mb-10 mt-10 bg-[#F5F5F5] pt-3 pb-4 border-2 border-[#0F6CBF] flex-1 text-center text-[20px]">
			<strong id="form-title" className="text-[#374151] text-[20px] p-5">Danh Sách Các Kiểu File Đã Được Thêm</strong>
            <hr className="border-[#0F6CBF] w-full my-4" />
            {checkboxData.length == 0 && (
                <p>Trống</p>
            )}
            <div className="flex grid grid-cols-8 gap-4">
                <div id="form-checkbox" className="col-span-6 p-4">
                    <div className="h-full flex flex-col justify-center">
                        {checkboxData.map((item) => (
                            <div key={`checkbox${item.ID}`} className="mb-4 bg-[#FFFFFF] p-4 flex items-center justify-between">
                                <label htmlFor={item.id}>{item.name}</label>
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
                    {checkboxData.length > 0 && ( // Check if checkboxData is not empty
                        <button className="w-40 h-30 bg-[#0F6CBF] text-[#F5F5F5] p-2 rounded-md" onClick={openModal}>
                            Xóa
                        </button>
                    )}
                </div>
            </div>
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white border-2 border-[#0F6CBF] shadow-lg">
                        <h2 className="text-xl font-bold m-4">Xác nhận</h2>
                        <hr className="border-[#0F6CBF] w-full my-4" />
                        <div className="flex justify-end">
                            <a>
                                {modalButton("Xác Nhận", confirmUpdate)}
                            </a>
                            {modalButton("Hủy",closeModal)}
                        </div>
                    </div>
                </div>
            )}
            {isChecked && (
                <div id="confirm" className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white border-2 border-[#0F6CBF] shadow-lg">
                        <h2 className="text-xl font-bold m-4">Cập Nhật Thành Công</h2>
                        <hr className="border-[#0F6CBF] w-full my-4" />
                        {modalButton("Đóng Để Xem Thay Đổi", handleReload)}
                    </div>
                </div>
            )}
		</div>
    );
}
