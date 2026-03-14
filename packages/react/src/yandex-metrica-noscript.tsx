"use client";

import { createYandexMetricaNoscript } from "@yandex-metrica/core";
import { useContext } from "react";
import { YandexMetricaContext } from "./context";

export function YandexMetricaNoscript() {
    const context = useContext(YandexMetricaContext);

    if (!context) throw new Error("YandexMetricaNoscript must be used within a YandexMetricaProvider");

    return (
        <noscript
            // biome-ignore lint/security/noDangerouslySetInnerHtml: safe
            dangerouslySetInnerHTML={{
                __html: createYandexMetricaNoscript(context.clientID),
            }}
        />
    );
}
