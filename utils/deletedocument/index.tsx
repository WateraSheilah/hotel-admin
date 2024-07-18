import { NextApiRequest, NextApiResponse } from 'next';
import deleteDocument from '@/utils/deleteDocument'; // Adjust the import path based on your project structure

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { id } = req.body;

    if (!id) {
        return res.status(400).json({ error: 'ID must be provided' });
    }

    try {
        const result = await deleteDocument(id);

        if (result.acknowledged && result.deletedCount > 0) {
            res.status(200).json({ message: 'Document successfully deleted' });
        } else {
            res.status(404).json({ error: 'Document not found' });
        }
    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}