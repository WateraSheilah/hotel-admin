import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/db";

interface Channel {
    channelName: string;
    channelImage: string;
    channelLogo: string;
    currentProgram: string;
    nextProgram: string;
    startTime: string;
    endTime: string;
    channelURL: string;
    country: string;
    channelNumber: string;
    category: string;
    pgAge: string;
    status: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const {
        channelName,
        channelImage,
        channelLogo,
        currentProgram,
        nextProgram,
        startTime,
        endTime,
        channelURL,
        country,
        channelNumber,
        category,
        pgAge,
        status,
    } = req.body;

    if (
        !channelName ||
        !channelImage ||
        !channelLogo ||
        !currentProgram ||
        !nextProgram ||
        !startTime ||
        !endTime ||
        !channelURL ||
        !country ||
        !channelNumber ||
        !category ||
        !pgAge ||
        status == null
    ) {
        return res.status(400).json({ error: "All fields must be provided" });
    }

    try {
        const db = await connectToDatabase();
        const channelCollection = db.collection<Channel>('channels');

        const existingChannel = await channelCollection.findOne({ channelName });
        const existingCategory = await channelCollection.findOne({ category });

        if (existingChannel) {
            return res.status(400).json({ error: `Channel '${channelName}' already exists` });
        }

        if (existingCategory) {
            return res.status(400).json({ error: `Category '${category}' already exists` });
        }

        const newChannel: Channel = {
            channelName,
            channelImage,
            channelLogo,
            currentProgram,
            nextProgram,
            startTime,
            endTime,
            channelURL,
            country,
            channelNumber,
            category,
            pgAge,
            status,
        };

        const result = await channelCollection.insertOne(newChannel);
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
