import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";

interface ProgramDetails {
    start_time: string;
    end_time: string;
    image: string;
    pg: number;
}

interface Channel {
    name: string;
    logo: string;
    url: string;
    status: boolean;
    country: string;
    temp_current_pg: ProgramDetails;
    temp_next_pg: ProgramDetails;
    category: string;  // Store as string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { category } = req.query;

    try {
        const db = await connectToDatabase();
        const channelsCollection = db.collection<Channel>('channels');

        // Define the query based on the presence of the category
        const query: any = {};
        if (category && typeof category === 'string') {
            query.category = category;
        }

        // Retrieve channels based on the query
        const channels = await channelsCollection.find(query).toArray();

        // Exclude the _id and category fields from the results
        const channelsWithoutIdAndCategory = channels.map(({ _id, category, ...rest }) => rest);

        res.status(200).json(channelsWithoutIdAndCategory);
    } catch (error) {
        console.error("Error retrieving channels:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
