"use client";

import type { YandexECommerce, YandexMetrica } from "@yametrica/core";
import { createContext } from "react";

export interface YandexMetricaContextValue {
    clientID: string;
    metrica: YandexMetrica;
    eCommerce: YandexECommerce;
}

export const YandexMetricaContext = createContext<YandexMetricaContextValue | null>(null);
