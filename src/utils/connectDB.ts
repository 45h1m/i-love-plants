import mongoose from 'mongoose';

const { MONGO_URL } = process.env;
type ConnectionObj = {
    isConnected?: number
}

const connection: ConnectionObj = {}

async function connectDB(): Promise<void> {
    if(connection.isConnected) {
        console.log("DB already connected");
        return;
    }

    if (!MONGO_URL) {
        throw new Error("MONGO_URL is not defined");
    }

    console.log("Connecting to DB");
    try {
        const db = await mongoose.connect(MONGO_URL);
        
        connection.isConnected = db.connections[0].readyState;
        console.log("DB connected successfully");
    } catch (error) {
        console.error("DB connection failed:", error); 
        process.exit(1);
    }
}

export default connectDB;