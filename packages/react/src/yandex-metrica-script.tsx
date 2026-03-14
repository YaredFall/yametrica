import { createYandexMetricaScript } from "@yametrica/react";
import type { ComponentProps } from "react";

interface YandexMetricaScriptProps extends Omit<ComponentProps<"script">, "children" | "src"> {
    tagSrc?: string;
}
export function YandexMetricaScript({ tagSrc, ...props }: YandexMetricaScriptProps) {
    return (
        <script id={"yandex-metrica"} {...props}>
            {createYandexMetricaScript(tagSrc)}
        </script>
    );
}
