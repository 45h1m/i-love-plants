import mongoose, { Schema, Document, models } from "mongoose";

export interface ProductDocument extends Document {
    images: string[];
    title: string;
    description: string;
    price: number;
    offer?: string;
    rating?: number;
    productKey: string;
    tags: string[];
    stocks: number;
    available: boolean;
    createdAt: Date;
    updatedAt: Date;
    specifications: { key: string; value: string }[];
    features: string[];
}

// A helper function to generate a URL based on the product's title and id
const generateProductUrl = (id: string, title: string): string => {
    const formattedTitle = title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]/g, "");
    return `${formattedTitle}-${id}`;
};

const productSchema = new Schema<ProductDocument>(
    {
        images: {
            type: [String],
            required: true,
        },
        title: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        offer: {
            type: String,
            default: null,
        },
        rating: {
            type: Number,
            default: null,
        },
        productKey: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            default: [],
        },
        stocks: {
            type: Number,
            required: true,
            min: 0,
        },
        available: {
            type: Boolean,
            required: true,
            default: true,
        },
        specifications: {
            type: [{ key: String, value: String }],
            default: [],
        },
        features: {
            type: [String],
            default: [],
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Automatically handle createdAt and updatedAt
    }
);

// Pre-save hook to update the 'updatedAt' field before saving
productSchema.pre("save", function (next) {
    this.updatedAt = new Date(); // Set updatedAt to the current date
    next(); // Call the next middleware or save operation
});

// Virtual field for the product URL (generated dynamically)
productSchema.virtual("url").get(function () {
    return generateProductUrl(this.id, this.title);
});

const productModel = models.Product || mongoose.model<ProductDocument>("Product", productSchema);

export default productModel;
