import React from "react";
import TopBar from "@/components/TopBar";
import Table from "@/components/Table";
import Sidebar from "@/components/sidebar/Sidebar";
import {AppShell} from '@mantine/core';

const headers = ['SL', 'Image', 'Name', 'Price', 'Status'];

const items = [
    { SL: 1, Image: '/images/breakfast1.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 2, Image: '/images/breakfast2.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { SL: 3, Image: '/images/breakfast3.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 4, Image: '/images/breakfast4.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 5, Image: '/images/breakfast5.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 6, Image: '/images/breakfast6.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { SL: 7, Image: '/images/breakfast7.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 8, Image: '/images/breakfast9.png', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 9, Image: '/images/breakfast10.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 10, Image: '/images/breakfast1.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 11, Image: '/images/breakfast2.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { SL: 12, Image: '/images/breakfast3.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 13, Image: '/images/breakfast4.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 14, Image: '/images/breakfast5.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 15, Image: '/images/breakfast6.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { SL: 16, Image: '/images/breakfast7.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 17, Image: '/images/breakfast9.png', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 18, Image: '/images/breakfast10.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 19, Image: '/images/breakfast1.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 20, Image: '/images/breakfast2.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { SL: 21, Image: '/images/breakfast3.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 22, Image: '/images/breakfast4.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 23, Image: '/images/breakfast5.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 24, Image: '/images/breakfast6.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { SL: 25, Image: '/images/breakfast7.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 26, Image: '/images/breakfast9.png', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 27, Image: '/images/breakfast10.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 28, Image: '/images/breakfast1.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 29, Image: '/images/breakfast2.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { SL: 30, Image: '/images/breakfast3.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 31, Image: '/images/breakfast4.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 32, Image: '/images/breakfast5.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 33, Image: '/images/breakfast6.jpeg', Name: 'American Pancakes', Price: '100,000 ugx', Status: 'Available' },
    { SL: 34, Image: '/images/breakfast7.jpeg', Name: 'Sausages with daddies', Price: '100,000 ugx', Status: 'Available' },
    { SL: 35, Image: '/images/breakfast9.png', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
    { SL: 36, Image: '/images/breakfast10.jpeg', Name: 'Coffee', Price: '100,000 ugx', Status: 'Unavailable' },
];



const Lunch = () => {
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
                <TopBar title={'Lunch'} admin={'Isaac'}/>
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

export default Lunch;
