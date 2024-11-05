import { LoaderCircle } from "lucide-react";

const Button = ({disabled, children, loading, onclick, customClass}:any) => {
    return <button disabled={disabled} onClick={onclick} className={`flex w-fit items-center gap-2 h-12 leading-none align-middle self-center px-6 rounded-lg font-semibold bg-emerald-400 hover:brightness-125 ${customClass ? customClass : ""}`}>{loading ? <LoaderCircle className="animate-spin" /> : children}</button>;
};

export default Button;