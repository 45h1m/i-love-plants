import FilterCategory from "@/components/FilterCategory"

export default function Home() {
    return (
        <div className="z-10">
          <FilterCategory/>
            <div className="p-2 flex gap-2 max-w-md">
                <div className="flex w-full flex-col gap-2">
                    <div className="w-full h-72 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-72 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-72 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-48 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-40 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-72 bg-secondary-green rounded-3xl"></div>
                </div>
                <div className="flex w-full flex-col gap-2">
                    <div className="w-full h-48 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-40 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-72 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-72 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-72 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-72 bg-secondary-green rounded-3xl"></div>
                </div>
            </div>
        </div>
    );
}
