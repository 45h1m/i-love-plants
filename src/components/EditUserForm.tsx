"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { updateUser } from "@/app/actions/user";

export default function EditUserForm() {
    const [formData, setFormData] = useState({
        id: "",
        name: "",
        dp: "/images/dp-placeholder.png",
        gender: "male",
        mobile: "",
    });
    const [isChanged, setIsChanged] = useState(false);
    const [loading, setLoading] = useState(true);
    const [responseMessage, setResponseMessage] = useState("");

    useEffect(() => {
        async function fetchUser() {
            try {
                const res = await axios.get("/api/user");
                const data = {
                    id: res.data._id,
                    name: res.data.name,
                    dp: res.data.dp,
                    gender: res.data.gender === "undefined" || !res.data.gender ? "male" : res.data.gender,
                    mobile: res.data.mobile,
                };
                setFormData(data);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        }
        fetchUser();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setIsChanged(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setResponseMessage("");
        const data = new FormData();
        Object.entries(formData).forEach(([key, value]) => data.append(key, String(value)));

        const result = await updateUser(data);

        if (result.success) {
            setResponseMessage(result.message);
        } else {
            setResponseMessage(result.message);
        }

        setIsChanged(false);
    };

    if (loading)
        return (
            <div className="flex justify-center flex-col items-center">
                <svg viewBox="20 20 180 150" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="60" cy="50" r="20" fill="black">
                        <animateTransform attributeName="transform" type="translate" values="0,-5; 0,5; 0,-5" dur="1s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="140" cy="50" r="20" fill="black">
                        <animateTransform attributeName="transform" type="translate" values="0,-5; 0,5; 0,-5" dur="1s" repeatCount="indefinite" />
                    </circle>

                    <circle cx="100" cy="100" r="50" fill="white" stroke="black" strokeWidth="3">
                        <animateTransform attributeName="transform" type="translate" values="0,-3; 0,3; 0,-3" dur="1s" repeatCount="indefinite" />
                    </circle>

                    <ellipse cx="75" cy="90" rx="15" ry="20" fill="black" />
                    <ellipse cx="125" cy="90" rx="15" ry="20" fill="black" />

                    <circle cx="75" cy="90" r="5" fill="white">
                        <animate attributeName="r" values="5; 1; 5" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="125" cy="90" r="5" fill="white">
                        <animate attributeName="r" values="5; 1; 5" dur="1.5s" repeatCount="indefinite" />
                    </circle>

                    <ellipse cx="100" cy="110" rx="7" ry="5" fill="black" />

                    <path d="M 90 120 Q 100 130 110 120" stroke="black" strokeWidth="2" fill="none">
                        <animateTransform attributeName="transform" type="translate" values="0,-1; 0,1; 0,-1" dur="1s" repeatCount="indefinite" />
                    </path>
                </svg>
                <p className="text-xl mb-4">Loading, please wait..</p>
            </div>
        );

    return (
        <div className="p-4 pb-6">
            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-3xl max-w-xl mx-auto">
                <input type="hidden" name="id" value={formData.id} />

                <div>
                    <label className="block text-sm font-medium">Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>

                <div>
                    <label className="block text-sm font-medium">Profile Picture:</label>
                    <input type="text" name="dp" value={formData.dp} onChange={handleChange} className="w-full p-2 border rounded" />
                </div>

                <div>
                    <label className="block text-sm font-medium">Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border rounded">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium">Mobile:</label>
                    <input
                        type="tel"
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <button
                    type="submit"
                    disabled={!isChanged}
                    className={`w-full py-2 rounded text-white ${isChanged ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
                >
                    Save Changes
                </button>
                {responseMessage && <p className="text-green-900">{responseMessage}</p>}
            </form>
        </div>
    );
}
