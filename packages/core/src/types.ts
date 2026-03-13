/* eslint-disable @typescript-eslint/no-explicit-any */
/** biome-ignore-all lint/suspicious/noExplicitAny: Who knows the spec? */
declare global {
    interface Window {
        ym: ((...args: any[]) => void) & { a: any[]; l: number };
        dataLayer: any[] | undefined;
    }
}

export interface VisitParameters {
    order_price?: number;
    currency?: string;

    [key: string]: any;
}

export interface UserParameters {
    UserID?: number;

    [key: string]: any;
}

/** @see https://yandex.ru/support/metrica/code/counter-initialize.html */
export interface InitParameters {
    /** Точный показатель отказов. Параметр может принимать значения: */
    accurateTrackBounce?: boolean | number;
    /** Признак записи содержимого iframe без счетчика в дочернем окне */
    childIframe?: boolean;
    /** Признак сбора данных для карты кликов */
    clickmap?: boolean;
    /** Признак отключения автоматической отправки данных при инициализации счетчика */
    defer?: boolean;
    /** Сбор данных электронной коммерции. */
    ecommerce?: boolean | string;
    /**
     * Параметры визита, передаваемые во время инициализации счетчика.
     *
     * Для передачи параметров визита в произвольный момент времени используется метод params
     */
    params?: VisitParameters | VisitParameters[];
    /**
     * Параметры посетителей сайта, передаваемые во время инициализации счетчика.
     *
     * Для передачи параметров посетителей в произвольный момент времени используется метод userParams
     */
    userParams?: UserParameters;
    /** Признак отслеживания изменений хеша в адресной строке браузера */
    trackHash?: boolean;
    /** Признак отслеживания переходов по внешним ссылкам */
    trackLinks?: boolean;
    /** Признак доверенного домена для записи содержимого дочернего окна iframe. Содержит адрес домена родительского окна */
    trustedDomains?: string[];
    /** Тип счетчика. Для РСЯ равен 1 */
    type?: number;
    /** Признак использования Вебвизора */
    webvisor?: boolean;
    /** Признак проверки готовности счетчика */
    triggerEvent?: boolean;
    /** Запись заголовков. Если в заголовках есть приватные данные, при инициализации счетчика укажите значение `false` */
    sendTitle: boolean;
}

export interface HitOptions<CTX> {
    callback?: (this: CTX) => void;
    ctx?: CTX;
    params?: VisitParameters;
    referer?: string;
    title?: string;
}

export interface People {
    email?: string;
    phone_number?: string;
    first_name?: string;
    last_name?: string;
    yandex_cid?: number;
    home_address?: {
        street?: string;
        city?: string;
        region?: string;
        postal_code?: number;
        country?: string;
    };
}

export type CurrencyCode =
    | "AUD"
    | "EUR"
    | "AZN"
    | "EUR"
    | "ALL"
    | "DZD"
    | "USD"
    | "XCD"
    | "AOA"
    | "EUR"
    | "XCD"
    | "SYP"
    | "ARS"
    | "AMD"
    | "AWG"
    | "AFN"
    | "BSD"
    | "BDT"
    | "BBD"
    | "BHD"
    | "BYR"
    | "BZD"
    | "EUR"
    | "XOF"
    | "BMD"
    | "BGN"
    | "BOB"
    | "BOV"
    | "USD"
    | "BAM"
    | "BWP"
    | "BRL"
    | "USD"
    | "USD"
    | "BND"
    | "XOF"
    | "BIF"
    | "BTN"
    | "INR"
    | "VUV"
    | "EUR"
    | "GBP"
    | "HUF"
    | "VEF"
    | "USD"
    | "VND"
    | "GMD"
    | "XAF"
    | "HTG"
    | "USD"
    | "GYD"
    | "GHS"
    | "EUR"
    | "GTQ"
    | "EUR"
    | "GNF"
    | "XOF"
    | "EUR"
    | "GBP"
    | "GIP"
    | "EUR"
    | "HNL"
    | "HKD"
    | "XCD"
    | "DKK"
    | "EUR"
    | "GEL"
    | "USD"
    | "DKK"
    | "GBP"
    | "DJF"
    | "XCD"
    | "DOP"
    | "EUR"
    | "EGP"
    | "ZMW"
    | "MAD"
    | "USD"
    | "ZWL"
    | "ILS"
    | "INR"
    | "IDR"
    | "JOD"
    | "IQD"
    | "IRR"
    | "EUR"
    | "ISK"
    | "EUR"
    | "EUR"
    | "YER"
    | "CVE"
    | "KZT"
    | "KYD"
    | "KHR"
    | "XAF"
    | "CAD"
    | "QAR"
    | "KES"
    | "EUR"
    | "AUD"
    | "CNY"
    | "AUD"
    | "COP"
    | "COU"
    | "KMF"
    | "CDF"
    | "XAF"
    | "KPW"
    | "CRC"
    | "XOF"
    | "CUC"
    | "CUP"
    | "KWD"
    | "KGS"
    | "ANG"
    | "LAK"
    | "EUR"
    | "LSL"
    | "ZAR"
    | "LRD"
    | "LBP"
    | "LYD"
    | "EUR"
    | "CHF"
    | "EUR"
    | "MUR"
    | "MRO"
    | "MGA"
    | "EUR"
    | "MOP"
    | "MKD"
    | "MWK"
    | "MYR"
    | "XOF"
    | "FKP"
    | "MVR"
    | "EUR"
    | "MAD"
    | "EUR"
    | "USD"
    | "XDR"
    | "MXN"
    | "MXV"
    | "USD"
    | "MZN"
    | "MDL"
    | "EUR"
    | "MNT"
    | "XCD"
    | "MMK"
    | "NAD"
    | "ZAR"
    | "AUD"
    | "NPR"
    | "XOF"
    | "NGN"
    | "NIO"
    | "NZD"
    | "NZD"
    | "XPF"
    | "NOK"
    | "NOK"
    | "AED"
    | "OMR"
    | "NOK"
    | "GBP"
    | "AUD"
    | "AUD"
    | "SHP"
    | "AUD"
    | "NZD"
    | "NZD"
    | "USD"
    | "PKR"
    | "USD"
    | "PAB"
    | "USD"
    | "PGK"
    | "PYG"
    | "PEN"
    | "PLN"
    | "EUR"
    | "USD"
    | "EUR"
    | "RUB"
    | "RWF"
    | "RON"
    | "SVC"
    | "USD"
    | "WST"
    | "EUR"
    | "STD"
    | "XCD"
    | "SAR"
    | "SZL"
    | "USD"
    | "SCR"
    | "EUR"
    | "EUR"
    | "EUR"
    | "XOF"
    | "XCD"
    | "XCD"
    | "RSD"
    | "SGD"
    | "ANG"
    | "XSU"
    | "EUR"
    | "EUR"
    | "SBD"
    | "SOS"
    | "XUA"
    | "SDG"
    | "SRD"
    | "ZAR"
    | "USD"
    | "USN"
    | "SLL"
    | "TJS"
    | "THB"
    | "TWD"
    | "TZS"
    | "XOF"
    | "NZD"
    | "TOP"
    | "TTD"
    | "AUD"
    | "TND"
    | "TMT"
    | "TRY"
    | "USD"
    | "UGX"
    | "UZS"
    | "UAH"
    | "XPF"
    | "UYI"
    | "UYU"
    | "DKK"
    | "FJD"
    | "PHP"
    | "EUR"
    | "EUR"
    | "XPF"
    | "EUR"
    | "HRK"
    | "XAF"
    | "XAF"
    | "EUR"
    | "CZK"
    | "CLF"
    | "CLP"
    | "CHE"
    | "CHF"
    | "CHW"
    | "SEK"
    | "LKR"
    | "USD"
    | "XAF"
    | "ERN"
    | "EUR"
    | "ETB"
    | "KRW"
    | "SSP"
    | "JMD"
    | "JPY";

export type ECommerceActionType =
    | "impressions"
    | "click"
    | "detail"
    | "add"
    | "remove"
    | "purchase"
    | "promoView"
    | "promoClick";

export type ECommerceActionData = {
    /** Список описаний товаров, с которыми было произведено указанное действие. */
    products?: Array<ProductField>;
    /** Список описаний рекламной кампании, с которой было произведено указанное действие */
    promotions?: Array<PromoField>;
};

export type ECommerceActionsData = {
    [Action in Exclude<ECommerceActionType, "purchase">]: {
        [Key in Action]: ECommerceActionData;
    };
} & {
    purchase: {
        purchase: ECommerceActionData & {
            actionField: ActionField;
        };
    };
};

export type ECommerceActions = ECommerceActionsData[keyof ECommerceActionsData];

export type ECommerceContainer = {
    ecommerce: {
        currencyCode: CurrencyCode;
    } & ECommerceActions;
};

/**
 * @see https://yandex.ru/support/metrica/ecommerce/data.html#about__action_data
 */
export type ActionField = {
    /** Идентификатор покупки */
    id: string;
    /** Промокод, ассоциированный со всей покупкой целиком */
    coupon?: string;
    /** Номер цели. Указывается в том случае, если данное действие и было целью */
    goal_id?: number;
    revenue?: number;
};

/** @see https://yandex.ru/support/metrica/ecommerce/data.html#about__product_data */
export type ProductField = {
    /**
     * Идентификатор товара. Например, SKU.
     *
     * **Необходимо обязательно указать или id, или name**
     */
    id?: string;
    /**
     * Название товара. Например, "Футболка".
     *
     * **Необходимо обязательно указать или id, или name**
     */
    name?: string;
    /** Бренд, торговая марка, ассоциированная с товаром. Например, "Яндекс / Яndex" */
    brand?: string;
    /**
     * Категория, к которой относится товар.
     *
     * Поддерживается иерархия категорий до 5 уровней вложенности. Разделителем уровней является символ /. Например, "Одежда/Мужская одежда/Футболки"
     */
    category?: string;
    /** Промокод ассоциированный с товаром. Например, "PARTNER_SITE_15" */
    coupon?: string;
    /** Размер скидки на товар (указывается как число) */
    discount?: number;
    /**
     * Список, к которому относится товар.
     *
     * Чтобы оценивать эффективность списка на разных этапах взаимодействия пользователя с товаром, рекомендуем указывать список товара во всех событиях, которые были после просмотра списка.
     */
    list?: string;
    /** Позиция товара в списке. Например, 2 */
    position?: number;
    /** Цена единицы товара */
    price?: number;
    /** Количество единиц товара */
    quantity?: number;
    /** Разновидность товара. Например, "Красный цвет" */
    variant?: string;
};

export type PromoField = {
    /** Идентификатор промокампании. */
    id: string;
    /** Название промокампании. */
    name?: string;
    /** Название рекламного баннера. */
    creative?: string;
    /** Слот рекламного баннера. */
    creative_slot?: string;
    /** Позиция рекламного баннера. */
    position?: string;
};
