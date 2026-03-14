import { createYandexMetricaScript } from "@yametrica/react";
import Script from "next/script";
import type { ComponentProps } from "react";

interface YandexMetricaScriptProps extends Omit<ComponentProps<typeof Script>, "children" | "src"> {
    tagSrc?: string;
}
export function YandexMetricaScript({ tagSrc, ...props }: YandexMetricaScriptProps) {
    return (
        <Script id={"yandex-metrica"} strategy={"afterInteractive"} {...props}>
            {createYandexMetricaScript(tagSrc)}
        </Script>
    );
}
