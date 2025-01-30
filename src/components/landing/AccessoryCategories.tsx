import CategoryCard from "../CategoryCard";

const plantAccessories = [
    {
        name: "Plant Pots",
        image: "https://images.unsplash.com/photo-1620293106076-ad27d651efe3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/plant-pots",
    },
    {
        name: "Hanging Planters",
        image: "https://images.unsplash.com/photo-1706268204438-d90ffb13aee3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/hanging-planters",
    },
    {
        name: "Plant Stands",
        image: "https://plus.unsplash.com/premium_photo-1679921582421-f770b37cd4d5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/plant-stands",
    },

    {
        name: "Terrariums",
        image: "https://images.unsplash.com/photo-1496678518751-46244eef08c4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/terrariums",
    },
    {
        name: "Garden Tools",
        image: "https://plus.unsplash.com/premium_photo-1678836292814-c34f620aded1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        url: "/categories/garden-tools",
    },
];

const AccessoryCategories = () => {
    return (
        <section id="other-categories" className="bg-color mt-8 pb-16 pt-8 pr-2">
            <div className="flex gap-2 p-2 max-w-7xl mx-auto">
                <div className="w-[15vw] [writing-mode:vertical-rl] flex items-center text-xl">
                    <h3 className="sticky top-20 bg-primary-green text-white rounded-3xl p-2 py-4 rotate-180 font-bold tracking-wider">
                        Other Categories
                    </h3>
                </div>
                <div
                    className="w-full z-10 columns-[120px] sm:columns-[200px]"
                    style={{
                        gap: "1rem",
                    }}
                >
                    {plantAccessories.map((category) => (
                        <CategoryCard key={category.name} name={category.name} image={category.image} url={category.url} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AccessoryCategories;
