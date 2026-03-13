import type {
    ActionField,
    CurrencyCode,
    ECommerceActionType,
    ECommerceContainer,
    ProductField,
    PromoField,
} from "./types";

export type YandexECommerceParams = {
    /** Enable console log on method calls @default false */
    debug?: boolean;
    /** Enable sending data to Yandex Metrica @default false */
    enabled?: boolean;
    /** @default "RUB" */
    defaultCurrencyCode?: CurrencyCode;
};

export function createYandexECommerce(params: YandexECommerceParams) {
    const defaultCurrencyCode = params.defaultCurrencyCode ?? "RUB";

    function push(container: ECommerceContainer, action?: ECommerceActionType) {
        if (!window.dataLayer)
            return console.error("[yandex-metrica] `ecommerce` must be set to `true` in your metrica client options");

        if (params.debug) console.log(`[yandex-metrica] ecommerce ${action ?? "push"}`, container);

        if (params.enabled) window.dataLayer.push(container);
    }

    function impressions({
        products,
        currencyCode = defaultCurrencyCode,
    }: {
        products: ProductField[];
        currencyCode?: CurrencyCode;
    }) {
        push(
            {
                ecommerce: {
                    currencyCode,
                    impressions: {
                        products,
                    },
                },
            },
            "impressions",
        );
    }

    function click({
        products,
        currencyCode = defaultCurrencyCode,
    }: {
        products: ProductField[];
        currencyCode?: CurrencyCode;
    }) {
        push(
            {
                ecommerce: {
                    currencyCode,
                    click: {
                        products,
                    },
                },
            },
            "click",
        );
    }

    function detail({
        products,
        currencyCode = defaultCurrencyCode,
    }: {
        products: ProductField[];
        currencyCode?: CurrencyCode;
    }) {
        push(
            {
                ecommerce: {
                    currencyCode,
                    detail: {
                        products,
                    },
                },
            },
            "detail",
        );
    }
    function add({
        products,
        currencyCode = defaultCurrencyCode,
    }: {
        products: ProductField[];
        currencyCode?: CurrencyCode;
    }) {
        push(
            {
                ecommerce: {
                    currencyCode,
                    add: {
                        products,
                    },
                },
            },
            "add",
        );
    }
    function remove({
        products,
        currencyCode = defaultCurrencyCode,
    }: {
        products: ProductField[];
        currencyCode?: CurrencyCode;
    }) {
        push(
            {
                ecommerce: {
                    currencyCode,
                    remove: {
                        products,
                    },
                },
            },
            "remove",
        );
    }
    function purchase({
        products,
        actionField,
        currencyCode = defaultCurrencyCode,
    }: {
        actionField: ActionField;
        products: ProductField[];
        currencyCode?: CurrencyCode;
    }) {
        push(
            {
                ecommerce: {
                    currencyCode,
                    purchase: {
                        actionField,
                        products,
                    },
                },
            },
            "purchase",
        );
    }
    function promoView({
        promotions,
        currencyCode = defaultCurrencyCode,
    }: {
        promotions: PromoField[];
        currencyCode?: CurrencyCode;
    }) {
        push(
            {
                ecommerce: {
                    currencyCode,
                    promoView: {
                        promotions,
                    },
                },
            },
            "promoView",
        );
    }
    function promoClick({
        promotions,
        currencyCode = defaultCurrencyCode,
    }: {
        promotions: PromoField[];
        currencyCode?: CurrencyCode;
    }) {
        push(
            {
                ecommerce: {
                    currencyCode,
                    promoClick: {
                        promotions,
                    },
                },
            },
            "promoClick",
        );
    }

    return {
        impressions,
        click,
        detail,
        add,
        remove,
        purchase,
        promoView,
        promoClick,
    } satisfies Record<ECommerceActionType, unknown>;
}

export type YandexECommerce = ReturnType<typeof createYandexECommerce>;
