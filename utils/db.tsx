import { MongoClient, Db } from 'mongodb';

const connectionString= "mongodb+srv://hyde:An0ther12@hyde.9vshdl0.mongodb.net/";
const dbName = 'hotel-app';
const mClient: MongoClient = new MongoClient(connectionString);

export async function connectToDatabase() {
    const database:MongoClient = await  mClient.connect();
    return database.db(dbName);
}

export  async function closeClient() {
    await mClient.close();
}