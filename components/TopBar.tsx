import React from 'react';
import {FaSearch, FaBell, FaChevronDown, FaArrowLeft} from 'react-icons/fa';
import Image from 'next/image';

type TopBarProps = {
    title: string;
    admin: string;
};

const TopBar: React.FC<TopBarProps> = ({ title, admin }) => {
    return (
        <div className="flex items-center justify-between bg-white p-4 shadow-md text-black w-[1300px]">
            <div className='flex'>
                <FaArrowLeft className='mt-[5px]'/>
                <h1 className="text-xl font-bold ">{title}</h1>
            </div>

            <div className="flex items-center">
                <div className="relative">
                    <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <FaBell className="ml-6 text-gray-600 text-xl cursor-pointer" />
                <div className="flex items-center ml-6 border-b-amber-300">
                    <Image
                        src="/images/profile.png"
                        alt="admin"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div className="ml-2">
                        <p className="text-sm text-black font-semibold">Admin</p>
                        <p className="text-xs text-gray-500">{admin}</p>
                    </div>
                    <FaChevronDown className="ml-2 mt-[-12px] text-gray-600 cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;
