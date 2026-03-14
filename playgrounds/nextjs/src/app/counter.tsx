"use client";

import { useYandexMetrica } from "@yametrica/nextjs";
import { useState } from "react";

export const Counter = () => {
    const metrica = useYandexMetrica();
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="flex gap-4 items-center">
                Counter: {count}
                <button
                    className="border border-zinc-300 bg-zinc-100 hover:bg-zinc-200 transition-colors px-4 py-1 rounded-full cursor-pointer"
                    type="button"
                    onClick={() => {
                        setCount(count + 1);
                        metrica.reachGoal("counter-clicked");
                    }}
                >
                    increase
                </button>
            </div>
            <p className="text-gray-500">Click the button to trigger reachGoal with id "counter-clicked"</p>
        </div>
    );
};
