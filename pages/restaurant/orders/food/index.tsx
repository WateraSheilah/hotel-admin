import React from "react";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/sidebar/Sidebar";
import {AppShell, MantineColor, MantineProvider} from '@mantine/core';
import FoodForm from "@/components/foodForm";
const Orders = () => {
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
                <TopBar title={'Add Food'} admin={'Isaac'}/>
            </AppShell.Header>
            <AppShell.Navbar>
                <Sidebar/>
            </AppShell.Navbar>
            <AppShell.Main>
                <FoodForm />
            </AppShell.Main>
        </AppShell>
    );
};

export default Orders;
