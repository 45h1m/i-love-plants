import Image from "next/image";
import React from "react";

const OrdesrPage = () => {
    return (
        <div className="text-2xl font-semibold p-4 flex justify-center items-center gap-4 flex-col">
            <Image alt="welcome-image" className="rounded-3xl" src={"/images/welcome-panda.webp"} width={300} height={300} />
            <h2>You're logged in 🤩</h2>
        </div>
    );
};

export default OrdesrPage;
