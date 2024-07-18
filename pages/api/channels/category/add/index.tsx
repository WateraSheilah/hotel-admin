import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";

interface Category {
    name: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name } = req.body;

    // Validate the incoming data
    if (!name) {
        return res.status(400).json({ error: 'All fields must be provided' });
    }
    try {
        const db = await connectToDatabase();
        const categoriesCollection = db.collection<Category>('channelcategory');

        const existingCategory = await categoriesCollection.findOne({ name });
        if (existingCategory) {
            return res.status(400).json({ error: `Category '${name}' already exists` });
        }

        const newCategory = {
            name,
            createdAt: Date()
        };

        const result = await categoriesCollection.insertOne(newCategory);

        if (result.acknowledged) {
            res.status(200).json({ message: 'Category successfully added', categoryId: result.insertedId });
        } else {
            res.status(400).json({ error: 'Failed to add category' });
        }
    } catch (error) {
        console.error('Error adding category:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
