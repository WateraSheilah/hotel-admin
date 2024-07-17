import React, { useEffect, useState } from "react";
import TopBar from "@/components/TopBar";
import Table from "@/components/Table";
import { MantineProvider } from "@mantine/core";
import Sidebar from "@/components/sidebar/Sidebar";
import axios from "axios";

const headers = ['SL', 'NAME', 'CATEGORY', 'DURATION'];

const Movies = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true); // Set loading state to true at the beginning of the fetch
            try {
                const response = await axios.get('http://localhost:3000/api/getmovie');
                const data = response.data;

                // Transforming the fetched data to match the structure
                const transformedItems = data.map((movie: {
                    name: any,
                    category: any,
                    duration: any,
                }, index: number) => ({
                    SL: index + 1,
                    Name: movie.name,
                    Category: movie.category,
                    Duration: movie.duration,
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

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error}</p>;

    return (
        <MantineProvider>
            <div className="app-container flex">
                <Sidebar />
                <div className='bg-white'>
                    <TopBar admin={'Isaac'} title={'Movie List'} />
                    <Table data={items} headers={headers} actions={['edit', 'delete']} />
                </div>
            </div>
        </MantineProvider>
    );
};

export default Movies;
