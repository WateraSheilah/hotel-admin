import {NextApiRequest, NextApiResponse} from "next";
import {connectToDatabase} from "@/utils/db";

interface Channel {
    channelname: string;
    image:string;
    category:string;
    status:string;


}
export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
    const { channelname, image, category, status }=req.body;

    if (!channelname || !image || !category || !status == null ) {
        return res.status(400).json({ error: "All fields must be provided" });
    }
    try{
        const db = await connectToDatabase();
        const channelCollection = db.collection<Channel>('channels');

        const existingCategory = await channelCollection.findOne({ channelname });

        if (existingCategory) {
            return res.status(400).json({ error: `Category '${channelname}' already exists` });
        }
        const newChannel: Channel = {
            channelname,
            image,
            category,
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

