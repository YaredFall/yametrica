"use client";

import type { InitParameters } from "@yametrica/core";
import { useEffect } from "react";
import { useYandexMetrica } from "./useYandexMetrica";

export function YandexMetricaInit(props: Partial<InitParameters>) {
    const metrica = useYandexMetrica();

    useEffect(() => {
        metrica.init(props);
    }, [metrica, props]);

    return null;
}
