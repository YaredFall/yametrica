"use client";

import { createYandexMetricaNoscript } from "@yametrica/core";
import { useContext } from "react";
import { YandexMetricaContext } from "./context";

/**
 * Creates Yandex Metrica `noscript` tag
 *
 * _Will not be rendered when metrica is disabled_
 */
export function YandexMetricaNoscript() {
    const context = useContext(YandexMetricaContext);

    if (!context) throw new Error("YandexMetricaNoscript must be used within a YandexMetricaProvider");

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
