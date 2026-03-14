"use client";

import {
    createYandexECommerce,
    createYandexMetricaClient,
    type YandexECommerceParams,
    type YandexMetricaClientParams,
} from "@yandex-metrica/core";
import { type PropsWithChildren, useMemo } from "react";
import { YandexMetricaContext } from "./context";

export function YandexMetricaProvider(props: PropsWithChildren<YandexMetricaClientParams & YandexECommerceParams>) {
    const context = useMemo(
        () => ({
            clientID: props.clientID,
            client: createYandexMetricaClient(props),
            eCommerce: createYandexECommerce(props),
        }),
        [props],
    );

    return <YandexMetricaContext.Provider value={context}>{props.children}</YandexMetricaContext.Provider>;
}
