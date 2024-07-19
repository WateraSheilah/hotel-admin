import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";

interface Category {
    channelCategoryName: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { channelCategoryName } = req.body;

    // Validate the incoming data
    if (!channelCategoryName) {
        return res.status(400).json({ error: 'All fields must be provided' });
    }
    try {
        const db = await connectToDatabase();
        const categoriesCollection = db.collection<Category>('channelCategory');

        const existingCategory = await categoriesCollection.findOne({ channelCategoryName });
        if (existingCategory) {
            return res.status(400).json({ error: `Category '${channelCategoryName}' already exists` });
        }

        const newCategory = {
            channelCategoryName,
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
