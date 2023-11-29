import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DocumentTextIcon, CloudArrowUpIcon } from '@heroicons/react/20/solid';
import ShareModal from './ShareForm';

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

  const handleSaveChanges = () => {
    // Implement the logic to send the file to the backend
    // For example, you can use a fetch or axios to send the file
    navigate('/print/ChoosePrinter');
    console.log('Sending file to the backend:', selectedFile);
  };

  const handleCancel = () => {
    setSelectedFile(null);
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
        <div className='ml-4'>Select a file from your folder.</div>
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
        <p>You can drag and drop files here to add them.</p>
        <input type="file" onChange={handleFileChange} style={{ display: 'none' }} />

        {selectedFile && (
        <div className='text-mainBlue'>
        <p>Selected File: {selectedFile.name}</p>
        </div>
        )}
      </div>
    </div>
    <div className='flex' style={{marginTop: '30px', marginLeft: '110px'}}>
      <button onClick={handleSaveChanges} class="rounded-md bg-mainBlue px-3 py-2 text-sm font-semibold text-white ">Save Changes</button>
      <div style={{marginLeft:'30px'}}>
        <button onClick={handleCancel}  class="rounded-md bg-mainRed px-3 py-2 text-sm font-semibold text-white ">Cancel</button>
      </div>
      <ShareModal/>
    </div>
    </div>
  );
}

export default FileUpload;