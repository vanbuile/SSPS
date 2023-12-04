import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DocumentTextIcon, CloudArrowUpIcon } from '@heroicons/react/20/solid';
import ShareModal from './ShareForm';
import APIs from "../util/API";
import axios from "axios";

const FileUpload = () => {
  function Line() {
    return (
      <div
        style={{
          marginTop:'10px',
          height: '1px', // Adjust the height as needed
          width: '750px',   // Adjust the thickness of the line
          backgroundColor: 'black', // Adjust the color of the line
        }}
      ></div>
    );
  }
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleCancel = () => {
    setSelectedFile(null);
  };
  let description = ""
  const handleTextareaChange = (value) => {
    description = value
  };
  const handleSaveChanges = async () => {
    if (!selectedFile) {
      alert('Please select a file first.');
      return;
    }
    try{
      const mssv = document.cookie.split('; ').find((cookie) => cookie.startsWith(`Student_cookie_id=`)).split('=')[1]
      let isShare = 0
      if (description !== '')  isShare = 1
      const response = await axios.post(APIs.APIaddFile + "/addfile", {
        mssv: mssv,
        name: selectedFile.name,
        description: description,
        link: 'lien ket 3',
        isShare: isShare
      })
      if (response.status === 200) {
        document.cookie = `file_id=${response.data["file_id"]}; max-age=${15 * 60 * 1000}; domain=localhost; path=/;`
        navigate('/print/ChoosePrinter');
      }
    }
    catch (e) {
      console.error("Error uploading file:", e);
      alert("Error uploading file: " + e.message); 
    }
  };

  return (
    <div>
    <div 
    style={{ border: '2px solid black',borderRadius: '10px',marginLeft: '110px', marginTop: '130px', width: '800px', height: '400px', padding: '20px', textAlign: 'center' }}
    >
      <div className='flex'>
        <button  class="rounded-md bg-lightGray w-8 h-8" onClick={() => document.querySelector('input[type="file"]').click()}>
        <DocumentTextIcon/>
        </button>
        <div className='ml-4'>Chọn file</div>
      </div>
      <div><Line/></div>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{ border: '2px dashed #ccc', marginTop: '10px', width: '750px', height: '300px', padding: '90px', textAlign: 'center' }}
        >
        <div style={{marginLeft: '240px'}}>
        <CloudArrowUpIcon className='w-12 h-12'/>
        </div>
        <p>Kéo thả vào đây để thêm file</p>
        <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />

        {selectedFile && (
        <div className='text-mainBlue'>
        <p>File đã chọn: {selectedFile.name}</p>
        </div>
        )}
      </div>
    </div>
    <div className='flex' style={{marginTop: '30px', marginLeft: '110px'}}>
      <button onClick={handleSaveChanges} class="rounded-md bg-mainBlue px-3 py-2 text-sm font-semibold text-white ">Lưu thay đổi</button>
      <div style={{marginLeft:'30px'}}>
        <button onClick={handleCancel}  class="rounded-md bg-mainRed px-3 py-2 text-sm font-semibold text-white ">Hủy</button>
      </div>
      <ShareModal onTextareaChange={handleTextareaChange}/>
    </div>
    </div>
  );
}

export default FileUpload;