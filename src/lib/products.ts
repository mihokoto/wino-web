export interface Product {
    id: string;
    title: string;
    description: string;
    originalPrice: string;
    temuPrice: string;
    discount: string;
    category: "Tech" | "Home" | "Hacks" | "Fashion" | "Gadget" | "Decor" | "Auto" | "Test"; // Expanded to include existing categories
    image?: string; // Optional: path to product image
    imageGradient: string; // Fallback gradient if no image
    affiliateLink: string;
}

// This is your "Inventory". Edit this list to change the website content.
export const PRODUCTS: Product[] = [
    {
        id: "1",
        title: "Galaxy Projector v2",
        description: "The viral astronaut projector. Turns your ceiling into a nebula.",
        originalPrice: "$45.00",
        temuPrice: "$4.50",
        discount: "-90%",
        category: "Tech",
        image: "/blog/galaxy-projector.jpg",
        imageGradient: "from-purple-600 to-indigo-900",
        affiliateLink: "#", // You will paste your real Temu Affiliate link here later
    },
    {
        id: "2",
        title: "Mini Thermal Printer",
        description: "No ink needed. Prints stickers directly from your phone. Viral study hack.",
        originalPrice: "$30.00",
        temuPrice: "$12.00",
        discount: "-60%",
        category: "Gadget",
        image: "/blog/thermal-printer.jpg",
        imageGradient: "from-pink-500 to-rose-500",
        affiliateLink: "#",
    },
    {
        id: "3",
        title: "Cloud Slippers (Shark)",
        description: "The viral shark slides. Soft as clouds, cheap as dirt. Super comfortable.",
        originalPrice: "$25.00",
        temuPrice: "$5.99",
        discount: "-75%",
        category: "Fashion",
        image: "/blog/shark-slides-review.jpg",
        imageGradient: "from-cyan-500 to-blue-400",
        affiliateLink: "#",
    },
    {
        id: "4",
        title: "Veggie Chopper 12-in-1",
        description: "The exact model used by cooking influencers. Dices onions in seconds.",
        originalPrice: "$35.00",
        temuPrice: "$8.50",
        discount: "-75%",
        category: "Home",
        image: "/blog/vegetable-chopper.jpg",
        imageGradient: "from-green-600 to-emerald-800",
        affiliateLink: "#",
    },
    {
        id: "5",
        title: "Sunset Lamp",
        description: "Golden hour on demand. High quality lens model for photography.",
        originalPrice: "$22.00",
        temuPrice: "$3.99",
        discount: "-82%",
        category: "Decor",
        image: "/blog/sunset-lamp-aesthetic.jpg",
        imageGradient: "from-orange-500 to-amber-500",
        affiliateLink: "#",
    },
    {
        id: "6",
        title: "Cleaning Gel",
        description: "For car vents and keyboards. Weirdly satisfying to use.",
        originalPrice: "$10.00",
        temuPrice: "$1.48",
        discount: "-85%",
        category: "Auto",
        image: "/blog/car-cleaning-slime.png",
        imageGradient: "from-blue-400 to-indigo-500",
        affiliateLink: "#",
    },
    {
        id: "7",
        title: "Test Viral Product",
        description: "This is a test product to verify the content engine works.",
        originalPrice: "$99.00",
        temuPrice: "$9.99",
        discount: "-90%",
        category: "Test",
        image: "/blog/test-product.jpg",
        imageGradient: "from-red-500 to-orange-500",
        affiliateLink: "#",
    }
];
