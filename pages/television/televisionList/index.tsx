import React from "react";
import TopBar from "@/components/TopBar";
import Table from "@/components/Table";
import Sidebar from "@/components/sidebar/Sidebar";
import {AppShell, MantineColor, MantineProvider} from '@mantine/core';

const headers = ['SL', 'SerialNumber', 'Room', 'Floor', 'Status'];

const items = [
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },
    {SL: '1', SerialNumber: '55XG9SOS',Room: 'RH4', Floor: 'First Floor', Status: 'Online' },

];



const TelevisionList = () => {
    return (
        <AppShell
            header={{ height: 60 }}
            navbar={{
                width: 300,
                breakpoint: 'sm',
            }}
            layout="alt"
            padding="md"
            styles={{
                main: {
                    backgroundColor: 'white',
                },
            }}
        >
            <AppShell.Header>
                <TopBar title={'TV'} admin={'Isaac'}/>
            </AppShell.Header>
            <AppShell.Navbar>
                <Sidebar/>
            </AppShell.Navbar>
            <AppShell.Main>
                <Table data={items} headers={headers} actions={['edit','delete']} />
            </AppShell.Main>
        </AppShell>
    );
};

export default TelevisionList;
