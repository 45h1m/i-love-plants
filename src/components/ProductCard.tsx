import React from "react";
import Button from "./Button";
import { Heart, MoveUpRight } from "lucide-react";
import Link from "next/link";

type ProductCard = {
    thumbnail: string; // URL or path to the product's thumbnail image
    title: string; // Title of the product
    description: string; // Short description of the product
    price: number; // Price of the product
    url: string; // URL link to the product page
    loved: boolean; // Whether the product is marked as loved/favorited
    offer?: string; // Optional field for special offer or discount
};

const ProductCard = ({ thumbnail, title, description, price, url, loved, offer }: ProductCard) => {
    console.log(loved, offer)
    return (
        <Link href={url} className="z-0">
            <div className="-z-10 relative w-full bg-secondary-green rounded-3xl flex flex-col overflow-hidden">
                <button className="absolute right-2 top-2 bg-light-green text-primary-green rounded-full size-10 flex items-center justify-center">
                    <Heart size={20} />
                </button>

                <div className="flex h-full pb-2">
                    <img alt="Product-image" src={thumbnail} className="w-full top-0 left-0 h-52 object-contain object-center" />
                </div>
                <div className="bottom">
                    <div className="pb-2 pl-3">
                        <h2 className="pr-2">{title}</h2>
                        <span className="text-xs">{description}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <div className="w-full pl-3">
                            <p className="text-xl">{price}</p>
                        </div>
                        <div>
                            <Button customClass="bg-primary-green text-light-green rounded-full rounded-tr-none">
                                <MoveUpRight size={20} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
