import type { ECommerceAction } from "./actions";
import type { ActionField, CurrencyCode, ProductField, PromoField } from "./types";

export type YandexECommerceParams = {
    /** Enable console log on method calls @default false */
    debug?: boolean;
    /** Enable sending data to Yandex Metrica @default false */
    enabled?: boolean;
    /** @default "RUB" */
    defaultCurrencyCode?: CurrencyCode;
};

export type YandexECommerce = {
    impressions: (data: { products: ProductField[] }, currencyCode?: CurrencyCode) => void;
    click: (data: { products: ProductField[] }, currencyCode?: CurrencyCode) => void;
    detail: (data: { products: ProductField[] }, currencyCode?: CurrencyCode) => void;
    add: (data: { products: ProductField[] }, currencyCode?: CurrencyCode) => void;
    remove: (data: { products: ProductField[] }, currencyCode?: CurrencyCode) => void;
    purchase: (data: { actionField: ActionField; products: ProductField[] }, currencyCode?: CurrencyCode) => void;
    promoView: (data: { promotions: PromoField[] }, currencyCode?: CurrencyCode) => void;
    promoClick: (data: { promotions: PromoField[] }, currencyCode?: CurrencyCode) => void;
};

export function createYandexECommerce({
    debug = false,
    enabled = false,
    defaultCurrencyCode = "RUB",
}: YandexECommerceParams): YandexECommerce {
    return new Proxy({} as YandexECommerce, {
        get: (_, action: ECommerceAction) => {
            return (...args: Parameters<YandexECommerce[typeof action]>) => {
                window.dataLayer ??= [];

                const container = { ecommerce: { currencyCode: args[1] ?? defaultCurrencyCode, [action]: args[0] } };

                if (debug) console.log(`[yandex-metrica] ecommerce ${action}`, container);

                if (enabled) window.dataLayer.push(container);
            };
        },
    });
}
