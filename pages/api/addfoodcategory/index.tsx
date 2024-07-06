import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";

interface Category {
    category: string;
    categorylist: string[];
    startingTime: Date;
    endingTime: Date;
}

function parseTime(timeStr: string): Date {
    const [time, period] = timeStr.split(' ');
    const [hours, minutes] = time.split(':').map(Number);

    let hours24 = hours;
    if (period.toLowerCase() === 'pm' && hours < 12) {
        hours24 += 12;
    } else if (period.toLowerCase() === 'am' && hours === 12) {
        hours24 = 0;
    }

    const parsedDate = new Date();
    parsedDate.setHours(hours24, minutes, 0, 0);
    return parsedDate;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { category, startingTime, endingTime } = req.body;

    // Validate the incoming data
    if (!category || !startingTime || !endingTime) {
        return res.status(400).json({ error: 'All fields must be provided' });
    }

    const parsedStartingTime = parseTime(startingTime);
    const parsedEndingTime = parseTime(endingTime);

    try {
        const db = await connectToDatabase();
        const categoriesCollection = db.collection<Category>('foodcategory');

        const existingCategory = await categoriesCollection.findOne({ category });
        if (existingCategory) {
            return res.status(400).json({ error: 'Category already exists' });
        }

        const newCategory = {
            category,
            startingTime: parsedStartingTime,
            endingTime: parsedEndingTime,
            categorylist: [],
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
