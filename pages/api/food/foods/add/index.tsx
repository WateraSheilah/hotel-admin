import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";
import { ObjectId } from 'mongodb';

interface Meal {
    _id?: ObjectId;
    category: string;
    components: string;
    //subcategory eg salads
    //image
    foodname: string;
    notes: string;
    description: string;
    price: string;
    cookingtime: string;
    active: boolean;
}

interface Category {
    _id: ObjectId;
    category: string;
    categorylist: ObjectId[];
}

// Add an id in mongo such that its easy for paegnation

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const {
        category,
        components,
        foodname,
        notes,
        description,
        price,
        cookingtime,
        active,
    } = req.body;

    // Validate the incoming data
    if (!category || !components || !foodname || !notes || !description || price == null || !cookingtime || active == null) {
        return res.status(400).json({ error: "All fields must be provided" });
    }

    try {
        const db = await connectToDatabase();
        const categoriesCollection = db.collection<Category>('foodcategory');
        const mealsCollection = db.collection<Meal>("meals");

        // Check if the category exists
        const categoryDoc = await categoriesCollection.findOne({ category });

        if (!categoryDoc) {
            return res.status(400).json({ error: `Category '${category}' not found` });
        }

        const newMeal: Meal = {
            category,
            components,
            foodname,
            notes,
            description,
            price,
            cookingtime,
            active,
            // createdAt: Date(),
        };

        const result = await mealsCollection.insertOne(newMeal);

        if (result.acknowledged) {
            const mealId = result.insertedId;

            await categoriesCollection.updateOne(
                { _id: categoryDoc._id },
                { $push: { categorylist: mealId } }
            );

            res.status(200).json({ message: "Meal successfully added", mealId: mealId });
        } else {
            res.status(400).json({ error: "Failed to add meal" });
        }
    } catch (error) {
        console.error("Error adding meal:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
