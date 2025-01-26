"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "@/context/cartContext";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";
import Button from "@/components/Button";

const CartPage: React.FC = () => {
    const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();

    const handleQuantityChange = (id: string, newQuantity: number) => {
        if (newQuantity > 0) {
            updateQuantity(id, newQuantity);
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        }).format(amount);
    };

    return (
        <div className="bg-color">
            <h1 className="text-2xl font-bold text-primary-green max-w-3xl mx-auto mt-8 px-4">Your Cart</h1>

            {cart.length === 0 ? (
                <div className="text-center text-muted-green">Your cart is empty</div>
            ) : (
                <>
                    <div className="space-y-4 mb-6 max-w-3xl p-4 mx-auto">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center border-b border-green-950/20 pb-4 justify-between space-y-4 sm:space-y-0">
                                <div className="flex items-center gap-2 w-full">
                                    <Link href={`/product/${item.id}`} className="flex w-20 aspect-square">
                                        <Image
                                            src={item.thumbnail}
                                            alt={item.name}
                                            width={80}
                                            height={80}
                                            className="block rounded-lg border w-full h-full object-cover border-green sm:mb-0"
                                        />
                                    </Link>
                                    <div className="text-left w-full">
                                        <h2 className="font-semibold text-dark-green line-clamp-2">{item.name}</h2>
                                        <p className="text-muted-green text-xs pt-1">{formatCurrency(item.price)}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full justify-center sm:justify-end">
                                    <div className="flex bg-secondary-green items-center border border-primary-green rounded-xl overflow-hidden mb-2 sm:mb-0">
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                            className="text-lg font-semibold px-4 py-2 bg-primary-green text-white"
                                        >
                                            <Minus size={15} />
                                        </button>
                                        <span className="px-4 text-dark-green">{item.quantity}</span>
                                        <button
                                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                            className="text-lg font-semibold px-4 py-2 bg-primary-green text-white"
                                        >
                                            <Plus size={15} />
                                        </button>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <button onClick={() => removeFromCart(item.id)} className="text-primary-green hover:text-secondary-green">
                                            Remove
                                        </button>

                                        <p className="font-semibold text-dark-green">{formatCurrency(item.price * item.quantity)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="white-to-bg-gradient sticky bottom-0 flex flex-wrap justify-between items-center pt-4 px-4 space-y-4 sm:space-y-0 pb-14">
                        <div className="text-center sm:text-right w-full max-w-3xl mx-auto">
                            <p className="text-xl font-bold text-dark-green mb-2">Total: {formatCurrency(getTotalPrice())}</p>
                            <Button customClass="mt-4  justify-center w-full bg-primary-green text-light-green" disabled={false} loading={false}>
                                Proceed To Checkout
                            </Button>
                            <ul className="flex gap-4 justify-center pt-4">
                                <li>
                                    <Link href={"/support"} className="hover:underline">Terms & Conditions</Link>
                                </li>
                                <li>
                                    <Link href={"/support"} className="hover:underline">Need Help</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
