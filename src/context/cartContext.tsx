"use client";
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    dateAdded: Date;
    thumbnail: string;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: Omit<CartItem, "dateAdded">) => void;
    removeFromCart: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const demoCartItems: CartItem[] = [
    {
        id: "plant001",
        name: "Money Plant",
        price: 45.99,
        quantity: 2,
        dateAdded: new Date(),
        thumbnail: "https://images.pexels.com/photos/6297385/pexels-photo-6297385.jpeg?w=200",
    },
    {
        id: "plant002",
        name: "Snake Plant 🐍",
        price: 29.5,
        quantity: 1,
        dateAdded: new Date(),
        thumbnail: "https://images.pexels.com/photos/6297385/pexels-photo-6297385.jpeg?w=200",
    },
    {
        id: "plant003",
        name: "Fiddle Leaf Fig",
        price: 79.99,
        quantity: 1,
        dateAdded: new Date(),
        thumbnail: "https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?w=200",
    },
    {
        id: "plant004",
        name: "Fiddle Leaf Fig Oogja Oogja Wala Per",
        price: 79.99,
        quantity: 1,
        dateAdded: new Date(),
        thumbnail: "https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?w=200",
    },
    {
        id: "plant005",
        name: "Fiddle Leaf Fig Something",
        price: 79.99,
        quantity: 1,
        dateAdded: new Date(),
        thumbnail: "https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?w=200",
    },
    {
        id: "plant006",
        name: "Fiddle Leaf Fig Something",
        price: 79.99,
        quantity: 1,
        dateAdded: new Date(),
        thumbnail: "https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?w=200",
    },
    {
        id: "plant007",
        name: "Fiddle Leaf Fig Something",
        price: 79.99,
        quantity: 1,
        dateAdded: new Date(),
        thumbnail: "https://images.pexels.com/photos/3125197/pexels-photo-3125197.jpeg?w=200",
    },
];


export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>(demoCartItems);
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(demoCartItems));
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(
                JSON.parse(savedCart).map((item: CartItem) => ({
                    ...item,
                    dateAdded: new Date(item.dateAdded),
                }))
            );
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: Omit<CartItem, "dateAdded">) => {
        setCart((prevCart) => {
            const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);

            if (existingItemIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex] = {
                    ...updatedCart[existingItemIndex],
                    quantity: updatedCart[existingItemIndex].quantity + item.quantity,
                    dateAdded: new Date(),
                };
                return updatedCart;
            }

            return [...prevCart, { ...item, dateAdded: new Date() }];
        });
    };

    const removeFromCart = (id: string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    const updateQuantity = (id: string, quantity: number) => {
        setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, quantity, dateAdded: new Date() } : item)));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getTotalItems,
                getTotalPrice,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
