import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";
import { ObjectId } from 'mongodb';

interface Meal {
    _id?: ObjectId;
    category: string;
    foodname: string;
    price: string;
    active: boolean;
}
// add default as  all categories
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { category } = req.query;

    // Validate the incoming data
    if (!category) {
        return res.status(400).json({ error: "Category must be provided" });
    }

    try {
        const db = await connectToDatabase();
        const mealsCollection = db.collection<Meal>("meals");

        // Find meals by category
        const meals = await mealsCollection.find({ category }).toArray();

        if (meals.length > 0) {// Transform active field to "Available" or "Unavailable"
            const transformedMeals = meals.map((meal) => ({
                category:meal.category,
                foodname: meal.foodname,
                price: meal.price,
                active: meal.active,
            }));

            res.status(200).json(transformedMeals);
        } else {
            res.status(404).json({ message: `No meals found for category '${category}'` });
        }
    } catch (error) {
        console.error("Error retrieving meals:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
