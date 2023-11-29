import React, { useState } from 'react';

const Table = () => {
  const [data, setData] = useState([
    { id: 1, floor: '1st', building: 'A', status: 'Occupied', paper: 'A4' },
    { id: 2, floor: '2nd', building: 'B', status: 'Vacant', paper: 'Letter' },
    { id: 3, floor: '3rd', building: 'C', status: 'Occupied', paper: 'Legal' },
    // Add more rows as needed
  ]);

  const handleRowClick = (rowData) => {
    // Perform the action you want when a row is clicked
    console.log('Row clicked:', rowData);
    // For example, you can navigate to a detailed view, open a modal, etc.
  };

  return (
    <table className="border-collapse w-full">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">ID</th>
          <th className="border border-gray-300 p-2">Floor</th>
          <th className="border border-gray-300 p-2">Building</th>
          <th className="border border-gray-300 p-2">Status</th>
          <th className="border border-gray-300 p-2">Paper</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.id}
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => handleRowClick(row)}
          >
            <td className="border border-gray-300 p-2">{row.id}</td>
            <td className="border border-gray-300 p-2">{row.floor}</td>
            <td className="border border-gray-300 p-2">{row.building}</td>
            <td className="border border-gray-300 p-2">{row.status}</td>
            <td className="border border-gray-300 p-2">{row.paper}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;