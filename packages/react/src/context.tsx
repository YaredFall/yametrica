"use client";

import type { YandexECommerce, YandexECommerceParams, YandexMetrica, YandexMetricaParams } from "@yametrica/core";
import { createContext, useContext } from "react";

export interface YandexMetricaContextValue extends Required<YandexMetricaParams>, Required<YandexECommerceParams> {
    metrica: YandexMetrica;
    eCommerce: YandexECommerce;
}

const YandexMetricaContext = createContext<YandexMetricaContextValue | null>(null);

export const YandexMetricaContextProvider = YandexMetricaContext.Provider;
export const useYandexMetricaContext = (consumer?: string) => {
    const context = useContext(YandexMetricaContext);
    if (!context)
        throw new Error(`${consumer || "useYandexMetricaContext"} must be used within a YandexMetricaProvider`);
    return context;
};
