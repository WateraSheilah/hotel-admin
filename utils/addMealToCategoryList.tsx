import { connectToDatabase } from "@/utils/db";
import { ObjectId } from 'mongodb';

type Category = {
    _id: ObjectId;
    category: string;
    categorylist: ObjectId[];
};

export async function addMealToCategoryList(mealId: ObjectId, category: string) {
    const db = await connectToDatabase();
    const categoriesCollection = db.collection<Category>('categories');

    // Find the category document
    const categoryDoc = await categoriesCollection.findOne({ category });

    if (!categoryDoc) {
        throw new Error(`Category '${category}' not found`);
    }

    // Add the mealId to the categorylist array
    await categoriesCollection.updateOne(
        { _id: categoryDoc._id },
        { $push: { categorylist: mealId } }
    );
}
