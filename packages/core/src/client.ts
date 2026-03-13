import { Methods } from "./methods";
import type { HitOptions, InitParameters, People, UserParameters, VisitParameters } from "./types";

export type YandexMetricaClientParams = {
    /** Enable console log on method calls @default false */
    debug?: boolean;
    /** Enable sending data to Yandex Metrica @default false */
    enabled?: boolean;
};

export function createYandexMetricaClient(options: YandexMetricaClientParams = {}) {
    let clientID: string | undefined;

    function call(method: Methods, ...args: unknown[]) {
        if (!clientID && method !== Methods.Init) {
            return console.error("[yandex-metrica] You must init yandex metrica before using it!");
        }

        if (typeof window === "undefined" || !window.ym) {
            return console.error("[yandex-metrica] Counter script is not loaded!");
        }

        if (options.debug) {
            console.log(`[yandex-metrica] (${clientID}) ${method}:`, ...args);
        }

        if (options.enabled) {
            window.ym(clientID, method, ...args);
        }
    }

    function init(id: string, options: Partial<InitParameters> = {}) {
        clientID = id;
        call(Methods.Init, options);
    }

    function addFileExtension(extensions?: string | string[]) {
        call(Methods.AddFileExtension, extensions);
    }

    function extLink<CTX>(url: string, options: Omit<HitOptions<CTX>, "referer"> = {}) {
        call(Methods.ExtLink, url, options);
    }

    function file<CTX>(url: string, options?: HitOptions<CTX>) {
        call(Methods.File, url, options);
    }

    function firstPartyParams(people: People) {
        call(Methods.FirstPartyParams, people);
    }

    function firstPartyParamsHashed(people: People) {
        call(Methods.FirstPartyParamsHashed, people);
    }

    function getClientID(cb: (clientID: number) => void) {
        call(Methods.GetClientID, cb);
    }

    function hit<CTX>(url = "", options?: HitOptions<CTX>) {
        call(Methods.Hit, url, options);
    }

    function notBounce<CTX>(options: Pick<HitOptions<CTX>, "ctx" | "callback"> = {}) {
        call(Methods.NotBounce, options);
    }

    function params(params: VisitParameters = {}) {
        call(Methods.Params, params);
    }

    function reachGoal<CTX>(target: string, params?: VisitParameters, callback?: (this: CTX) => void, ctx?: CTX): void {
        call(Methods.ReachGoal, target, params, callback, ctx);
    }

    function setUserID(userId: string) {
        call(Methods.SetUserID, userId);
    }

    function userParams(params: UserParameters = {}) {
        call(Methods.UserParams, params);
    }

    return {
        get clientID() {
            return clientID;
        },
        init,
        addFileExtension,
        extLink,
        file,
        firstPartyParams,
        firstPartyParamsHashed,
        getClientID,
        hit,
        notBounce,
        params,
        reachGoal,
        setUserID,
        userParams,
    } satisfies Record<Methods, unknown> & { clientID: string | undefined };
}

export type YandexMetricaClient = ReturnType<typeof createYandexMetricaClient>;
