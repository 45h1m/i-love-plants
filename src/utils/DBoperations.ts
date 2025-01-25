import productModel from "@/models/product.model";
import connectDB from "./connectDB";

type Projection = {
    [key: string]: 1 | 0; // Keys are strings, and values are either 1 or 0
};

export async function getAllProducts(fields: string[] = []) {
    try {

        await connectDB();
        

        const projection = fields.reduce<Projection>((acc, field) => {
            acc[field] = 1; 
            return acc;
        }, {});

        const products = await productModel.find({}, projection);
        return products;

    } catch (error) {
        console.error("Error fetching products:", error);
        throw new Error("Unable to fetch products");
    }
}
