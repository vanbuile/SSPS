import React, { useEffect, useState, useCallback } from 'react';
import APIs from "../util/API";
import axios from "axios";

const Table = ({building}) => {
  const [data, setData] = useState([
    { id: 1, floor: '1st', building: 'A', state: 1, paper: 'A4' },
  ]);

  const getAPIdata = useCallback(async () => {
    const response = await axios.get(APIs.APIviewprinterbylocation + `/view/${building}`);
    if (response.status === 200) {
      console.log(response.data.data);
      setData(response.data.data);
    }
  }, [building]);

  useEffect (() => {
    getAPIdata()
  }, [getAPIdata])

  if (!data) return <></>
  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">ID</th>
          <th className="border border-gray-300 p-2">Tầng</th>
          <th className="border border-gray-300 p-2">Tòa</th>
          <th className="border border-gray-300 p-2">Trạng thái</th>
          <th className="border border-gray-300 p-2">Giấy</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.id}
            className="cursor-pointer hover:bg-gray-100"
            onClick={getAPIdata}
          >
            <td className="border border-gray-300 p-2">{row.id}</td>
            <td className="border border-gray-300 p-2">{row.floor}</td>
            <td className="border border-gray-300 p-2">{row.building}</td>
            <td className="border border-gray-300 p-2">{row.state}</td>
            <td className="border border-gray-300 p-2">{row.paper}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;