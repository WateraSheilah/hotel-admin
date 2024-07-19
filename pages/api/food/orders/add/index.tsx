import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";
import { ObjectId } from 'mongodb';

interface Order {
    invoiceNo: string;
    customerName: string;
    waiter: string;
    table: string;
    state: string;
    orderDate: Date;
    totalAmount: number;
    //quantity
    //order items
    //orderID attached to TV
}
// Add tv id for authentication

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { invoiceNo, customerName, waiter, table, state, totalAmount } = req.body;

    if (!invoiceNo || !customerName || !waiter || !table || !state || totalAmount == null) {
        return res.status(400).json({ error: 'All fields must be provided' });
    }

    try {
        const db = await connectToDatabase();
        const ordersCollection = db.collection<Order>("orders");

        // Set the orderDate to the current date
        const orderDate = new Date();

        const newOrder: Order = {
            invoiceNo,
            customerName,
            waiter,
            table,
            state,
            orderDate,
            totalAmount
        };

        const result = await ordersCollection.insertOne(newOrder);

        if (result.acknowledged) {
            res.status(200).json({ message: 'Order successfully added', orderId: result.insertedId });
        } else {
            res.status(400).json({ error: 'Failed to add order' });
        }

    } catch (error) {
        console.error("Error adding order:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
