"use client";

import { createYandexMetricaScript } from "@yametrica/react";
import { type ComponentProps, useContext } from "react";
import { YandexMetricaContext } from "./context";

interface YandexMetricaScriptProps extends Omit<ComponentProps<"script">, "children" | "src"> {
    tagSrc?: string;
}

/**
 * Creates Yandex Metrica `script` tag
 *
 * _Will not be rendered when metrica is disabled_
 */
export function YandexMetricaScript({ tagSrc, ...props }: YandexMetricaScriptProps) {
    const context = useContext(YandexMetricaContext);

    if (!context) throw new Error("YandexMetricaScript must be used within a YandexMetricaProvider");

    if (!context.enabled) return null;

    return (
        <script id={"yandex-metrica"} {...props}>
            {createYandexMetricaScript(tagSrc)}
        </script>
    );
}
