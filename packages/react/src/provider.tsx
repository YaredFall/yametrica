"use client";

import {
    createYandexECommerce,
    createYandexMetrica,
    type YandexECommerceParams,
    type YandexMetricaParams,
} from "@yametrica/core";
import { type PropsWithChildren, useMemo } from "react";
import { YandexMetricaContext } from "./context";

export function YandexMetricaProvider(props: PropsWithChildren<YandexMetricaParams & YandexECommerceParams>) {
    const context = useMemo(
        () => ({
            clientID: props.clientID,
            metrica: createYandexMetrica(props),
            eCommerce: createYandexECommerce(props),
        }),
        [props],
    );

    return <YandexMetricaContext.Provider value={context}>{props.children}</YandexMetricaContext.Provider>;
}
