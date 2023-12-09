import { ro } from 'date-fns/locale';
import React, { useState, useLayoutEffect, useEffect } from 'react';
import Datatable from 'react-data-table-component';
import axios from "axios";
import APIs from "../../util/API";
import { set } from 'date-fns';
function PaymentHistory() {
    const columns = [
        {
            name: 'Mã giao dịchh',
            selector: row => row.ID,
            sortable: true,

        },
        {
            name: 'Ngày giao dịch',
            selector: row => row.date,
            sortable: true,

        },
        {
            name: 'Số giấy in',
            selector: row => row.paper,
            sortable: true,

        },
        {
            name: 'Phương thức thanh toán',
            selector: row => "VNPay"

        },
        {
            name: 'Tông tiền',
            selector: row => row.paper * 2000,
            sortable: true,

        },
    ];
    const data1 = [
        {
            id: 1,
            date: "2021-10-10",
            paper: 10,
            
        },
        {
            id: 2,
            date: "2021-10-10",
            paper: 10,
        },
        {
            id: 3,
            date: "2021-10-10",
            paper: 10,

        }

    ]
    const params = {MSSV: "2113928"}
    const [data, setData] = useState();
    const [searchData, setSearchData] = useState();
    useEffect (() => {
        const fetchApiData = async () => {
            try {
              
              let res = await axios.post(APIs.APIbuy + "/paymenthistory", params);
              console.log(res.data);
              setData(res.data);
              setSearchData(res.data);
              
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchApiData();

      },[]);
      const fetchApiData = async () => {
        try {
          
          let res = await axios.post(APIs.APIbuy + "/paymenthistory", params);
          console.log(res.data);
          setSearchData(res.data);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    const handleChange = (event) => {
        
        if(event.target.value==""){
         fetchApiData();
         return;   
        }
        console.log(event.target.value)
        const newData = data.filter((row) => {
            return row.ID==event.target.value;
        });

        setSearchData(newData);
    }
  return (
    <div>
        <div className="flex flex-col items-center justify-center mt-7 ">
            
            <div className="text-3xl font-semibold font-san text-gray-600">Lịch sử giao dịch</div>

        </div>

        <div className="text-end mr-40 flex justify-end">
            <div className='font-semibold font-san text-gray-600'> Search </div>
            <input type="text" onChange={handleChange} className='border-gray border-2 ml-2'/>
        </div>
        <div className='container mt-5 ml-36'>
    <Datatable

            columns={columns}
            data={searchData}
            pagination
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            paginationPerPage={10}
    >

    </Datatable>
</div>
    </div>


  );
}

export default PaymentHistory;
