import React, { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import Table from "@/components/Table";
import Sidebar from "@/components/sidebar/Sidebar";
import { MantineProvider } from '@mantine/core';

const headers = ['SL', 'Image', 'Name', 'Price', 'Status'];

const Dinner = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await fetch('http://localhost:3000/api/getmeals?category=Dinner');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();

                // Transforming the fetched data to match the structure
                const transformedItems = data.map((meal: { foodname: any; price: any; active: any; }, index: number) => ({
                    SL: index + 1,
                    Image: '/images/breakfast1.jpeg',
                    Name: meal.foodname,
                    Price: meal.price,
                    Status: meal.active ? 'Available' : 'Unavailable',
                }));

                setItems(transformedItems);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchItems();
    }, []);

    return (
        <MantineProvider>
            <div className="flex">
                <Sidebar />
                <div className='bg-white'>
                    <TopBar title={'Dinner'} admin={'Isaac'} />
                    <div className='ml-6'>
                        <Table headers={headers} data={items} />
                    </div>
                </div>
            </div>
        </MantineProvider>
    );
};

export default Dinner;
