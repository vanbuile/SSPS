import React, { useState, useEffect } from 'react';
import axios from 'axios';
import APIs from '../util/API';

export default function RecentOrders() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await axios.get(APIs.APIadminRevenueStatistics + '/RecentOrders');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchApiData();
  }, []);
  if (!data) return <></>;

  const itemsPerPage = 7;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleDownloadExcel = () => {
    axios({
      method: 'get',
      url: APIs.APIadminRevenueStatistics + '/RecentOrdersDownload',
      responseType: 'blob',
    })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'RecentOrdersInfo.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => console.error('Error downloading Excel:', error));
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i}>
          <a
            href="#"
            className={`px-3 py-2 mx-1 text-sm leading-tight ${
              i === currentPage
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </a>
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
      <strong className="text-gray-700 font-medium">Sinh viên mua giấy</strong>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={handleDownloadExcel}
      >
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download Excel</span>
      </button>

      <div className="border-x border-gray-200 rounded-sm mt-3">
        <table className="w-full text-gray-700">
          <thead className="bg-gradient-to-tr from-indigo-600 to-purple-600 text-white font-bold text-md">
            <tr>
              <th>MSSV</th>
              <th>Tên Sinh Viên</th>
              <th>Số lượng giấy đã mua</th>
              <th>Số lượng giấy còn lại</th>
              <th>Ngày cuối mua</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">{`#${order.MSSV}`}</td>
                <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">{order.name}</td>
                <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">{order.number_pager_buy}</td>
                <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">{order.number_pager_remaining}</td>
                <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">{order.day}</td>
                <td className="text-sm font-bold px-6 py-4 whitespace-nowrap">{order.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav className="flex items-center justify-between pt-4" aria-label="Table navigation">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Số lượng <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstItem + 1}</span>-
            <span className="font-semibold text-gray-900 dark:text-white">{indexOfLastItem}</span> của{' '}
            <span className="font-semibold text-gray-900 dark:text-white">{data.length}</span>
          </span>
          <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  currentPage === 1 && 'cursor-not-allowed opacity-50'
                }`}
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              >
                Trước
              </a>
            </li>
            {generatePageNumbers()}
            <li>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                  currentPage === totalPages && 'cursor-not-allowed opacity-50'
                }`}
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
              >
                Sau
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}