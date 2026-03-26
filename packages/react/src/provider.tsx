"use client";

import {
    createYandexECommerce,
    createYandexMetrica,
    type YandexECommerceParams,
    type YandexMetricaParams,
} from "@yametrica/core";
import { type PropsWithChildren, useMemo } from "react";
import { YandexMetricaContext } from "./context";

interface YandexMetricaProviderProps extends PropsWithChildren, YandexMetricaParams, YandexECommerceParams {
    /** @default false */
    enabled: boolean;
}

export function YandexMetricaProvider({
    children,
    clientID,
    debug = false,
    enabled = false,
    defaultCurrencyCode = "RUB",
}: YandexMetricaProviderProps) {
    const context = useMemo(
        () => ({
            clientID,
            enabled,
            debug,
            defaultCurrencyCode,
            metrica: createYandexMetrica({ clientID, debug, enabled }),
            eCommerce: createYandexECommerce({ debug, enabled, defaultCurrencyCode }),
        }),
        [clientID, debug, enabled, defaultCurrencyCode],
    );

    return <YandexMetricaContext.Provider value={context}>{children}</YandexMetricaContext.Provider>;
}
