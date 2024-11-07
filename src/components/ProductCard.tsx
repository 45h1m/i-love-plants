"use client";
import React from "react";
import Button from "./Button";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type ProductCard = {
    thumbnail: string; 
    title: string;
    description: string; 
    price: number; 
    url: string; 
    loved: boolean;
    offer?: string; 
    rating?: number;
};

const ProductCard = ({ thumbnail, title, description, price, url, loved, offer, rating }: ProductCard) => {
    console.log(loved, offer);
    return (
        <Link href={url} className="z-0">
            <div className="-z-10 relative w-full bg-secondary-green rounded-3xl flex flex-col overflow-hidden">
                <button className="absolute right-2 top-2 bg-light-green text-primary-green rounded-full size-10 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill={loved ? "deeppink" : "none"}
                        stroke={loved ? "deeppink" : "currentColor"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart"
                    >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                </button>

                <div className="flex h-full p-2 relative">
                    <Image
                        width={100}
                        height={100}
                        alt="Product-image"
                        src={thumbnail}
                        className="w-full top-0 left-0 h-52 object-contain object-center"
                    />
                    <div className="absolute bottom-2 left-2 flex items-center border rounded-bl-xl rounded-tr-xl bg-secondary-green border-primary-green">
                        <p className="flex items-center gap-1 py-1 px-1 text-light-green text-xs font-semibold bg-primary-green rounded-tr-lg rounded-bl-lg leading-none">
                            <span className="translate-y-[1.5px] align-middle text-secondary-green">{rating}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="10"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-star text-secondary-green"
                            >
                                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                            </svg>
                        </p>
                        {offer? (<p className="text-xs translate-y-[1.5px] px-1">{offer}</p>): ""}
                    </div>
                </div>
                <div className="bottom">
                    <div className="pb-2 pl-3">
                        <div className="flex items-center">
                            <h2 className="pr-2 font-bold w-full line-clamp-1">{title}</h2>
                        </div>
                        <span className="text-xs line-clamp-1">{description}</span>
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <div className="w-full pl-3">
                            <p className="text-xl text-end">
                                <small className="text-sm text-muted-green font-bold">Rs.</small> <strong className="font-extrabold">{price}</strong>
                            </p>
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
