"use client";

import { useYandexECommerce } from "@yandex-metrica/react";
import { useEffect, useRef } from "react";

export const DetailEvent = () => {
    const eCommerce = useYandexECommerce();
    const fired = useRef(false);

    useEffect(() => {
        if (fired.current) return;
        fired.current = true;
        window.dataLayer = window.dataLayer || [];
        eCommerce.detail({ products: [] });
    }, [eCommerce]);

    return null;
};
