"use client";

import { useYandexMetrica } from "@yandex-metrica/react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function YandexMetricaRouteTracking() {
    const metrica = useYandexMetrica();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams.size) metrica.hit(`${pathname}?${searchParams}`);
        else metrica.hit(pathname);
    }, [metrica, pathname, searchParams]);

    return null;
}
