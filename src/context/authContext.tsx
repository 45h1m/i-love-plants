"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    verifyUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

// Fixing the children type here:
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [authState, setAuthState] = useState({
        user: null,
        isAuthenticated: false,
        loading: true,
    });

    const verifyUser = async () => {
        try {
            const res = await axios.get("/api/auth/verify", { withCredentials: true });

            setAuthState({
                user: res.status === 200 ? res.data : null,
                isAuthenticated: res.status === 200,
                loading: false,
            });

        } catch (error) {
            console.error("Error verifying user", error);
            setAuthState({
                user: null,
                isAuthenticated: false,
                loading: false,
            });
        }
    };

    useEffect(() => {
        verifyUser();
    }, []);

    return <AuthContext.Provider value={{ ...authState, verifyUser }}>{children}</AuthContext.Provider>;
};
