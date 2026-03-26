"use client";

import type { YandexECommerce, YandexECommerceParams, YandexMetrica, YandexMetricaParams } from "@yametrica/core";
import { createContext } from "react";

export interface YandexMetricaContextValue extends Required<YandexMetricaParams>, Required<YandexECommerceParams> {
    metrica: YandexMetrica;
    eCommerce: YandexECommerce;
}

export const YandexMetricaContext = createContext<YandexMetricaContextValue | null>(null);
