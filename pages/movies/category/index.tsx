import React from "react";
import { AppProps } from "next/app";
import TopBar from "@/components/TopBar";
import Table from "@/components/Table";
import { MantineProvider } from "@mantine/core";
import Sidebar from "@/components/sidebar/Sidebar";

const headers = ['SL', 'MovieType'];
const items = [
    { SL: '1', MovieType: 'Action' },
    { SL: '1', MovieType: 'Action' },
    { SL: '1', MovieType: 'Action' },
    { SL: '1', MovieType: 'Action' },
    { SL: '1', MovieType: 'Action' },
    { SL: '1', MovieType: 'Action' },
    { SL: '1', MovieType: 'Action' },
    { SL: '1', MovieType: 'Action' },
    { SL: '1', MovieType: 'Action' },
    { SL: '1', MovieType: 'Action' },
    { SL: '1', MovieType: 'Action' },
    { SL: '1', MovieType: 'Action' },
];

const Movies: React.FC<AppProps> = () => {
    return (
        <MantineProvider>
            <div className="app-container flex">
                <Sidebar />
                <div className='bg-white'>
                    <TopBar admin={'Isaac'} title={'  Movie Category'} />
                    <Table data={items} headers={headers} actions={['edit']} />
                </div>
            </div>
        </MantineProvider>
    );
};

export default Movies;
