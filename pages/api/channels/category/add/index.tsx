import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";

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
    category: ObjectId;  // Store as ObjectId
}

interface Category {
    _id: ObjectId;
    type: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const {
        name,
        logo,
        url,
        status,
        country,
        temp_current_pg,
        temp_next_pg,
        category: categoryType
    } = req.body;

    // Log the request body for debugging
    console.log('Request Body:', req.body);

    // Validate required fields
    if (
        !name ||
        !logo ||
        !url ||
        status === undefined ||
        !country ||
        !temp_current_pg ||
        !temp_next_pg ||
        !categoryType
    ) {
        return res.status(400).json({ error: "All fields must be provided" });
    }

    // Validate nested objects
    if (
        !temp_current_pg.start_time ||
        !temp_current_pg.end_time ||
        !temp_current_pg.image ||
        !temp_current_pg.pg ||
        !temp_next_pg.start_time ||
        !temp_next_pg.end_time ||
        !temp_next_pg.image ||
        !temp_next_pg.pg
    ) {
        return res.status(400).json({ error: "All fields in temp_current_pg and temp_next_pg must be provided" });
    }

    try {
        const db = await connectToDatabase();
        const channelsCollection = db.collection<Channel>('channels');
        const categoriesCollection = db.collection<Category>('channel_categories');

        // Lookup category by type and retrieve its ObjectId and type
        const categoryName = await categoriesCollection.findOne({ type: categoryType });

        if (!categoryName) {
            return res.status(400).json({ error: `Category '${categoryType}' does not exist` });
        }

        // Check if the channel name already exists
        const existingChannel = await channelsCollection.findOne({ name });

        if (existingChannel) {
            return res.status(400).json({ error: `Channel '${name}' already exists` });
        }

        // Create the channel object using the data from Postman JSON
        const newChannel: Channel = {
            name,
            logo,
            url,
            status,
            country,
            temp_current_pg,
            temp_next_pg,
            category: categoryName._id
        };

        const result = await channelsCollection.insertOne(newChannel);
        if (result.acknowledged) {
            res.status(200).json({ message: 'Channel successfully added', channelId: result.insertedId });
        } else {
            res.status(400).json({ error: 'Failed to add channel' });
        }
    } catch (error) {
        console.error("Error adding channel:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}
