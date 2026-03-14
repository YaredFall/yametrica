"use client";

import type { YandexECommerce, YandexMetricaClient } from "@yametrica/core";
import { createContext } from "react";

export interface YandexMetricaContextValue {
    clientID: string;
    client: YandexMetricaClient;
    eCommerce: YandexECommerce;
}

export const YandexMetricaContext = createContext<YandexMetricaContextValue | null>(null);
