// pages/Breakfast.js

import React, { useEffect, useState } from "react";
import axios from 'axios';
import TopBar from "@/components/TopBar";
import Table from "@/components/Table";
import Sidebar from "@/components/sidebar/Sidebar";
import { MantineProvider } from '@mantine/core';

const headers = ['SL', 'Image', 'Name', 'Price', 'Status'];

const Breakfast = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/getmeals?category=Breakfast');
                const data = response.data;

                // Transforming the fetched data to match the structure
                const transformedItems = data.map((meal: { foodname: any; price: any; active: any; }, index: number) => ({
                    SL: index + 1,
                    Image: '/images/breakfast1.jpeg',
                    Name: meal.foodname,
                    Price: meal.price,
                    Status: meal.active ? 'Available' : 'Unavailable',
                }));

                setItems(transformedItems);
            } catch (err: any) {
                setError(err.response?.data?.err || 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);
    //
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    return (
        <MantineProvider>
            <div className="flex">
                <Sidebar />
                <div className='bg-white'>
                    <TopBar title={'Breakfast'} admin={'Isaac'} />
                    <div className='ml-6'>
                        <Table headers={headers} data={items} />
                    </div>
                </div>
            </div>
        </MantineProvider>
    );
};

export default Breakfast;
