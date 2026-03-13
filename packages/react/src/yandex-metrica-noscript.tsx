"use client";

import { createYandexMetricaNoscript } from "@yandex-metrica/core";
import { useYandexMetrica } from "./useYandexMetrica";

export function YandexMetricaNoscript() {
    const client = useYandexMetrica();

    if (!client.clientID) return null;

    return (
        <noscript
            // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
            dangerouslySetInnerHTML={{
                __html: createYandexMetricaNoscript(client.clientID),
            }}
        />
    );
}
