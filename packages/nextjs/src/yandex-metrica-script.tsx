"use client";

import { createYandexMetricaScript, useYandexMetricaContext } from "@yametrica/react";
import Script from "next/script";
import type { ComponentProps } from "react";

interface YandexMetricaScriptProps extends Omit<ComponentProps<typeof Script>, "children" | "src"> {
    tagSrc?: string;
}

/**
 * Creates Yandex Metrica script tag using `next/script`
 *
 * _Will not be rendered when metrica is disabled_
 */
export function YandexMetricaScript({ tagSrc, ...props }: YandexMetricaScriptProps) {
    const context = useYandexMetricaContext("YandexMetricaScript");

    if (!context.enabled) return null;

    return (
        <Script id={"yandex-metrica"} strategy={"afterInteractive"} {...props}>
            {createYandexMetricaScript(tagSrc)}
        </Script>
    );
}
