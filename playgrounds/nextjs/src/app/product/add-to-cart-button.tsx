"use client";

import { useYandexECommerce } from "@yametrica/nextjs";

export function AddToCartButton() {
    const eCommerce = useYandexECommerce();

    const handleClick = () => {
        eCommerce.add({
            products: [
                {
                    id: "P15432",
                    name: "T-shirt",
                    price: 477.6,
                    brand: "Yandex",
                    category: "Clothing / Men's clothing / T-shirts",
                    variant: "Black",
                    quantity: 1,
                },
            ],
        });
    };

    return (
        <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer"
            onClick={handleClick}
        >
            Add to cart
        </button>
    );
}
