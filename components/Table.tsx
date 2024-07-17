import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Image from 'next/image';

type Action = 'edit' | 'delete'|'view';

type TableProps = {
    headers: string[];
    data: { [key: string]: any }[];
    actions?: Action[];
};

const Table: React.FC<TableProps> = ({ headers, data, actions = [] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleClick = (page: number) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        return (
            <div className="flex justify-end mr-16">
                <button
                    className="px-3 py-1 mx-1 rounded text-black"
                    onClick={() => handleClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index}
                        className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-black' : ''}`}
                        onClick={() => handleClick(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className="px-3 py-1 mx-1 rounded text-black"
                    onClick={() => handleClick(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        );
    };

    const renderTableData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);

        return selectedItems.map((item, index) => (
            <tr key={index} className={`bg-gray-${index % 2 === 0 ? '100' : '200'}`}>
                {headers.map((header) => (
                    <td key={header} className="border px-4 py-2 text-black text-center">
                        {item[header]}
                    </td>
                ))}
                <td className="border px-4 py-2 text-black flex justify-center items-center">
                    {actions.includes('edit') && <FaEdit className="text-blue-500 cursor-pointer" />}
                    {actions.includes('delete') && <FaTrash className="text-red-500 cursor-pointer" />}
                </td>
            </tr>
        ));
    };

    return (
        <div >
            <div className="flex justify-between mb-4">
                <h2 className="text-xl font-bold">Items</h2>
                <button className="flex items-center mt-8 mr-20 bg-blue-500 text-white px-4 py-2 rounded">
                    Add
                </button>
            </div>
            <table className="bg-white border-collapse rounded-[20px] border-b-amber-500 w-11/12 ml-[60px]">
                <thead>
                <tr>
                    {headers.map((header) => (
                        <th key={header} className="border px-4 py-2 text-black">{header}</th>
                    ))}
                    <th className="border px-4 py-2 text-black">Actions</th>
                </tr>
                </thead>
                <tbody className='text-black align-middle'>
                {renderTableData()}
                </tbody>
            </table>
            {renderPagination()}
        </div>
    );
};

export default Table;
