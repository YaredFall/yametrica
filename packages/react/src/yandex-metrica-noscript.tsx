"use client";

import { createYandexMetricaNoscript } from "@yametrica/core";
import { useYandexMetricaContext } from "./context";

/**
 * Creates Yandex Metrica `noscript` tag
 *
 * _Will not be rendered when metrica is disabled_
 */
export function YandexMetricaNoscript() {
    const context = useYandexMetricaContext("YandexMetricaNoscript");

    if (!context.enabled) return null;

    return (
        <noscript
            // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
            dangerouslySetInnerHTML={{
                __html: createYandexMetricaNoscript(context.clientID),
            }}
        />
    );
}
