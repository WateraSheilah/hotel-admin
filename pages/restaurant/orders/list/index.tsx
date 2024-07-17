import React from "react";
import TopBar from "@/components/TopBar";
import Table from "@/components/Table";
import Sidebar from "@/components/sidebar/Sidebar";
import {AppShell, MantineColor, MantineProvider} from '@mantine/core';

const headers = ['SL', 'InvoiceNumber', 'CustomerName', 'Waiter', 'Table', 'State','OderDate', 'TotalAmount'];

const items = [
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
    { SL: 1, InvoiceNumber: '1', CustomerName: 'Madrine', Waiter: 'Mulindwa', Table: '001', State: 'Pending', TotalAmount: '100,000'},
];



const List = () => {
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
                <TopBar title={'Order List'} admin={'Isaac'}/>
            </AppShell.Header>
            <AppShell.Navbar>
                <Sidebar/>
            </AppShell.Navbar>
            <AppShell.Main>
                <Table data={items} headers={headers} actions={['edit','delete','view']} />
            </AppShell.Main>
        </AppShell>
    );
};

export default List;
