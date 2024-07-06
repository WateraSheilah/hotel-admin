import { connectToDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";

async function deleteDocument(id: string): Promise<{ acknowledged: boolean; deletedCount: number }> {
    const db = await connectToDatabase();
    const collections = await db.collections();

    for (const collection of collections) {
        const filter = { _id: new ObjectId(id) };
        const result = await collection.deleteOne(filter);

        if (result.acknowledged && result.deletedCount > 0) {
            return result;
        }
    }

    return { acknowledged: false, deletedCount: 0 };
}

export default deleteDocument;