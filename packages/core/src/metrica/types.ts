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
