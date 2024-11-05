
export default function Home() {
    return (
        <div>
          <h4 className="p-4 pt-6">All Plants</h4>
            <div className="p-2 flex gap-2 max-w-md">
                <div className="flex w-full flex-col gap-2">
                    <div className="w-full h-36 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-36 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-36 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-48 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-40 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-36 bg-secondary-green rounded-3xl"></div>
                </div>
                <div className="flex w-full flex-col gap-2">
                    <div className="w-full h-48 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-40 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-36 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-36 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-36 bg-secondary-green rounded-3xl"></div>
                    <div className="w-full h-36 bg-secondary-green rounded-3xl"></div>
                </div>
            </div>
        </div>
    );
}
