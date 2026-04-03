"use client";

import { createYandexMetricaScript } from "@yametrica/react";
import type { ComponentProps } from "react";
import { useYandexMetricaContext } from "./context";

interface YandexMetricaScriptProps extends Omit<ComponentProps<"script">, "children" | "src"> {
    tagSrc?: string;
}

/**
 * Creates Yandex Metrica `script` tag
 *
 * _Will not be rendered when metrica is disabled_
 */
export function YandexMetricaScript({ tagSrc, ...props }: YandexMetricaScriptProps) {
    const context = useYandexMetricaContext("YandexMetricaScript");

    if (!context.enabled) return null;

    return (
        <script id={"yandex-metrica"} {...props}>
            {createYandexMetricaScript(tagSrc)}
        </script>
    );
}
