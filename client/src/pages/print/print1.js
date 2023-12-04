import React from 'react';
import ChoosePrintStyle from '../../components/ChoosePrintStyle';
import FileUpload from '../../components/DragDropfile'

function VerticalLine() {
  return (
    <div
      style={{
        marginTop:'65px',
        height: '90%', // Adjust the height as needed
        width: '1px',   // Adjust the thickness of the line
        backgroundColor: 'black', // Adjust the color of the line
      }}
    ></div>
  );
}

export default function Print() {
  const handleAuthorization = (role) => {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [name] = cookie.split('=');
      if(name === role) {
        return true
      }
    }
    window.location.href = 'http://localhost:3000/login';
  }
  if(handleAuthorization('Student_cookie_id') === true) {
    return (
      <div className="flex flex-1"
      style={{marginLeft: "80px"}}
      >
        <div className="w-1/5">
          <h2 className='text-4xl font-bold ml-10'>IN</h2>
          <div className="mt-2 flex items-center gap-x-5">
            <div className="ml-10 w-15 h-15 flex border border-1 rounded-full p-2 justify-center">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 ml-0">
                  <path 
                    fillRule="evenodd" 
                    d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </i>
            </div>
            <p>Số lượng:</p>
            <input type="text" name="copies" id="copies" autocomplete="given-name" class="block w-5 rounded-md border-1 py-1.4 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"placeholder='1'/>
          </div>     
          <p class="text-xl text-[#a3a3a3] font-bold ml-10">Cài đặt</p>
          <div className='ml-10'><ChoosePrintStyle/></div>
        </div>
        <div className='ml-20'><VerticalLine /></div>
        <div className="w-4/5">
        <div className='ml-10'><FileUpload/></div>
        </div>
      </div>
    );
    
  }
}