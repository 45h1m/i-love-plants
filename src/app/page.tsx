import FilterCategory from "@/components/FilterCategory";
import ProductCard from "@/components/ProductCard";

export default function Home() {
    return (
        <div className="z-10">
            <FilterCategory />
            <div className="p-2 flex gap-2 max-w-md">
                <div className="flex w-full flex-col gap-2">
                    <ProductCard title="Dragon Fruit Plant" description="Free Delivery" price={299} url="/" loved={false} thumbnail="/demo.png" />
                    <ProductCard title="Dragon Fruit Plant" description="Free Delivery" price={299} url="/" loved={false} thumbnail="/demo.png" />
                    <ProductCard title="Dragon Fruit Plant" description="Free Delivery" price={299} url="/" loved={false} thumbnail="/demo.png" />
                    <ProductCard title="Dragon Fruit Plant" description="Free Delivery" price={299} url="/" loved={false} thumbnail="/demo.png" />
                    <div className="w-full h-20 bg-secondary-green rounded-3xl"></div>
                    <ProductCard title="Dragon Fruit Plant" description="Free Delivery" price={299} url="/" loved={false} thumbnail="/demo.png" />

                </div>
                <div className="flex w-full flex-col gap-2">
                    <div className="w-full h-20 bg-secondary-green rounded-3xl"></div>
                    <ProductCard title="Dragon Fruit Plant" description="Free Delivery" price={299} url="/" loved={false} thumbnail="/demo.png" />
                    <ProductCard title="Dragon Fruit Plant" description="Free Delivery" price={299} url="/" loved={false} thumbnail="/demo.png" />
                    <ProductCard title="Dragon Fruit Plant" description="Free Delivery" price={299} url="/" loved={false} thumbnail="/demo.png" />
                    <ProductCard title="Dragon Fruit Plant" description="Free Delivery" price={299} url="/" loved={false} thumbnail="/demo.png" />
                    <ProductCard title="Dragon Fruit Plant" description="Free Delivery" price={299} url="/" loved={false} thumbnail="/demo.png" />
                </div>
            </div>
        </div>
    );
}
