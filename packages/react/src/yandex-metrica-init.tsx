"use client";

import type { InitParameters } from "@yandex-metrica/core";
import { useEffect } from "react";
import { useYandexMetrica } from "./useYandexMetrica";

export function YandexMetricaInit({
    clientID,
    initParameters,
}: {
    clientID: string;
    initParameters?: Partial<InitParameters>;
}) {
    const client = useYandexMetrica();

    useEffect(() => {
        if (client.clientID !== clientID) client.init(clientID, initParameters);
    }, [client, clientID, initParameters]);

    return null;
}
