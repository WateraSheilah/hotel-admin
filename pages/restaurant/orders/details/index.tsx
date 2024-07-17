import React from "react";
import TopBar from "@/components/TopBar";
import Table from "@/components/Table";
import Sidebar from "@/components/sidebar/Sidebar";
import {AppShell, MantineColor, MantineProvider} from '@mantine/core';
import Form from "@/components/form/Form";

const headers = [];

const items = [];



const Details = () => {
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
                <TopBar title={'Order Details'} admin={'Isaac'}/>
            </AppShell.Header>
            <AppShell.Navbar>
                <Sidebar/>
            </AppShell.Navbar>
            <AppShell.Main>
               <Form/>
            </AppShell.Main>
        </AppShell>
    );
};

export default Details;
