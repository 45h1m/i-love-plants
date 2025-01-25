import productModel from "@/models/product.model";
import connectDB from "./connectDB";
import { plants } from "@/app/_data/productData";
import dotenv from "dotenv";
dotenv.config();

console.log("insert script run")

// Function to insert data into MongoDB
export async function insertData() {
    try {
        await connectDB();

        // Insert products into the collection
        const result = await productModel.insertMany(plants);
        console.log(`${result.length} products inserted successfully!`);
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}

// Run the script
insertData();