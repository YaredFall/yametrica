"use client";

import { createYandexMetricaScript } from "@yametrica/react";
import Script from "next/script";
import { type ComponentProps, useContext } from "react";
import { YandexMetricaContext } from "../../react/src/context";

interface YandexMetricaScriptProps extends Omit<ComponentProps<typeof Script>, "children" | "src"> {
    tagSrc?: string;
}

/**
 * Creates Yandex Metrica script tag using `next/script`
 *
 * _Will not be rendered when metrica is disabled_
 */
export function YandexMetricaScript({ tagSrc, ...props }: YandexMetricaScriptProps) {
    const context = useContext(YandexMetricaContext);

    if (!context) throw new Error("YandexMetricaScript must be used within a YandexMetricaProvider");

    if (!context.enabled) return null;

    return (
        <Script id={"yandex-metrica"} strategy={"afterInteractive"} {...props}>
            {createYandexMetricaScript(tagSrc)}
        </Script>
    );
}
