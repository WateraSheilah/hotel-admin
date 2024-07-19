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
    category: string;
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
        type
    } = req.body;

    if (
        !name ||
        !logo ||
        !url ||
        status === undefined ||
        !country ||
        !temp_current_pg ||
        !temp_next_pg ||
        !type
    ) {
        return res.status(400).json({ error: "All fields must be provided" });
    }

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

        const category = await categoriesCollection.findOne({ type });

        if (!category) {
            return res.status(400).json({ error: `Category '${type}' does not exist` });
        }

        const existingChannel = await channelsCollection.findOne({ name });

        if (existingChannel) {
            return res.status(400).json({ error: `Channel '${name}' already exists` });
        }

        const newChannel: Channel = {
            name,
            logo,
            url,
            status,
            country,
            temp_current_pg,
            temp_next_pg,
            category: category._id.toString()
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
