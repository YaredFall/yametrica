"use client";

import { createYandexMetricaNoscript } from "@yandex-metrica/core";

export function YandexMetricaNoscript({ clientID }: { clientID: string }) {
    return (
        <noscript
            // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
            dangerouslySetInnerHTML={{
                __html: createYandexMetricaNoscript(clientID),
            }}
        />
    );
}
