import LoginPage from "@/components/LoginPage";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginServerPage() {

    const reqHeaders = await headers();
    const userID = reqHeaders.get("X-User-Info-ID");

    console.log("[/login] userID: "+ userID);

    if(!userID) return <LoginPage/>
    else redirect("/");
}
