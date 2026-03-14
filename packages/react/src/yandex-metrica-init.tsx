"use client";

import type { InitParameters } from "@yandex-metrica/core";
import { useEffect } from "react";
import { useYandexMetrica } from "./useYandexMetrica";

export function YandexMetricaInit(props: Partial<InitParameters>) {
    const client = useYandexMetrica();

    useEffect(() => {
        client.init(props);
    }, [client, props]);

    return null;
}
