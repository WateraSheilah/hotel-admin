import { MongoClient, Db } from 'mongodb';

const connectionString= "mongodb://172.40.1.223:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.12";
const dbName = 'hotel-app';
const mClient: MongoClient = new MongoClient(connectionString);

export async function connectToDatabase() {
    const database:MongoClient = await  mClient.connect();
    return database.db(dbName);
}

export  async function closeClient() {
    await mClient.close();
}