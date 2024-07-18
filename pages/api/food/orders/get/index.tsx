import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";
import { ObjectId } from 'mongodb';

interface Order {
    _id?: ObjectId;
    invoiceNo: string;
    customerName: string;
    waiter: string;
    table: string;
    state: string;
    orderDate: Date;
    totalAmount: number;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const db = await connectToDatabase();
        const ordersCollection = db.collection<Order>("orders");

        // Retrieve only the necessary fields
        const orders = await ordersCollection.find({}, { projection: { invoiceNo: 1, customerName: 1, waiter: 1, table: 1, state: 1, orderDate: 1, totalAmount: 1, _id: 0 } }).toArray();

        if (orders.length > 0) {
            res.status(200).json(orders);
        } else {
            res.status(404).json({ message: "No orders found" });
        }
    } catch (error) {
        console.error("Error retrieving orders:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}