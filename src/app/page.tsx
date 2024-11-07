import FilterCategory from "@/components/FilterCategory";
import ProductCard from "@/components/ProductCard";

export default function Home() {
    return (
        <div className="z-10">
            <FilterCategory />
            <div className="p-2 flex gap-2">
                <div className="flex w-full flex-col gap-2">
                    <ProductCard
                        title="Bonsai Tree"
                        description="Limited Edition"
                        price={599}
                        url="/"
                        loved={true}
                        offer="New Arrival"
                        rating={4.7}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Snake Plant"
                        description="Air Purifying Plant"
                        price={199}
                        url="/"
                        loved={false}
                        offer="Buy 1 Get 1 Free"
                        rating={4.3}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Rose Plant"
                        description="Perfect for Gifting"
                        price={149}
                        url="/"
                        loved={true}
                        offer="Free Shipping"
                        rating={4.2}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Fiddle Leaf Fig"
                        description="Indoor Decor Plant"
                        price={999}
                        url="/"
                        loved={false}
                        offer="20% off"
                        rating={4.6}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Aloe Vera Plant"
                        description="Medicinal Properties"
                        price={79}
                        url="/"
                        loved={false}
                        offer="Best Seller"
                        rating={4.8}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Tulsi Plant"
                        description="Free Shipping"
                        price={49}
                        url="/"
                        loved={true}
                        offer="Limited Stock"
                        rating={4.4}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Lavender Plant"
                        description="Fragrant Herb"
                        price={199}
                        url="/"
                        loved={true}
                        offer="5% off"
                        rating={4.3}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Jade Plant"
                        description="Low Maintenance"
                        price={299}
                        url="/"
                        loved={false}
                        offer="New Arrival"
                        rating={4.1}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Money Plant"
                        description="Brings Good Luck"
                        price={99}
                        url="/"
                        loved={true}
                        offer="10% off"
                        rating={4.6}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Orchid"
                        description="Exotic Flower Plant"
                        price={499}
                        url="/"
                        loved={false}
                        offer="20% off"
                        rating={4.5}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Orchid"
                        description="Exotic Flower Plant"
                        price={499}
                        url="/"
                        loved={false}
                        offer="20% off"
                        rating={4.5}
                        thumbnail="/demo.png"
                    />
                    

                    <div className="w-full h-20 bg-secondary-green rounded-3xl"></div>
                    <ProductCard
                        title="Orchid"
                        description="Exotic Flower Plant"
                        price={499}
                        url="/"
                        loved={false}
                        offer="20% off"
                        rating={4.5}
                        thumbnail="/demo.png"
                    />
                    
                </div>
                <div className="flex w-full flex-col gap-2">
                    <div className="w-full h-20 bg-secondary-green rounded-3xl"></div>
                    <ProductCard
                        title="Dragon Fruit Plant"
                        description="Free Delivery"
                        price={299}
                        url="/"
                        loved={false}
                        offer="10% off"
                        rating={4.5}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Bonsai Tree"
                        description="Limited Edition"
                        price={599}
                        url="/"
                        loved={true}
                        offer="New Arrival"
                        rating={4.7}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Snake Plant"
                        description="Air Purifying Plant"
                        price={199}
                        url="/"
                        loved={false}
                        offer="Buy 1 Get 1 Free"
                        rating={4.3}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Rose Plant"
                        description="Perfect for Gifting"
                        price={149}
                        url="/"
                        loved={true}
                        offer="Free Shipping"
                        rating={4.2}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Fiddle Leaf Fig"
                        description="Indoor Decor Plant"
                        price={999}
                        url="/"
                        loved={false}
                        offer="20% off"
                        rating={4.6}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Aloe Vera Plant"
                        description="Medicinal Properties"
                        price={79}
                        url="/"
                        loved={false}
                        offer="Best Seller"
                        rating={4.8}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Tulsi Plant"
                        description="Free Shipping"
                        price={49}
                        url="/"
                        loved={true}
                        offer="Limited Stock"
                        rating={4.4}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Lavender Plant"
                        description="Fragrant Herb"
                        price={199}
                        url="/"
                        loved={true}
                        offer="5% off"
                        rating={4.3}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Jade Plant"
                        description="Low Maintenance"
                        price={299}
                        url="/"
                        loved={false}
                        offer="New Arrival"
                        rating={4.1}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Money Plant"
                        description="Brings Good Luck"
                        price={99}
                        url="/"
                        loved={true}
                        offer="10% off"
                        rating={4.6}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Orchid"
                        description="Exotic Flower Plant"
                        price={499}
                        url="/"
                        loved={false}
                        offer="20% off"
                        rating={4.5}
                        thumbnail="/demo.png"
                    />
                    <ProductCard
                        title="Orchid"
                        description="Exotic Flower Plant"
                        price={499}
                        url="/"
                        loved={false}
                        offer="20% off"
                        rating={4.5}
                        thumbnail="/demo.png"
                    />
                    
                </div>
            </div>
        </div>
    );
}
