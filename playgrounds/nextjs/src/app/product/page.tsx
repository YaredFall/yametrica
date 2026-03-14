import { AddToCartButton } from "./add-to-cart-button";

export default function Page() {
    return (
        <main className="flex p-8 flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold">Product</h1>
            <div className="flex flex-col items-center gap-4">
                <div className="flex flex-col items-center gap-2 p-4 bg-white shadow-lg rounded-lg">
                    <div className="size-32 bg-gray-200 rounded-lg"></div>
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-lg font-bold">T-Shirt</h2>
                        <p className="text-gray-500">$477.6</p>
                        <p className="text-gray-500">Brand: Yandex / Yandex</p>
                        <p className="text-gray-500">Category: Clothing / Men's clothing / T-shirts</p>
                        <p className="text-gray-500">Variant: Red color</p>
                    </div>
                    <AddToCartButton />
                </div>
            </div>
            <p className="text-gray-500">Click the button to trigger eCommerce add event</p>
        </main>
    );
}
