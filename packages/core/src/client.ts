import type { Methods } from "./methods";
import type { HitOptions, InitParameters, People, UserParameters, VisitParameters } from "./types";
import { ym } from "./ym";

export type YandexMetricaClientParams = {
    /** Enable console log on method calls @default false */
    debug?: boolean;
    /** Enable sending data to Yandex Metrica @default false */
    enabled?: boolean;
};

export type YandexMetricaClient = {
    [Methods.Init]: (clientID: string, options?: Partial<InitParameters>) => void;
    [Methods.AddFileExtension]: (extensions?: string | string[]) => void;
    [Methods.ExtLink]: <CTX>(url: string, options?: Omit<HitOptions<CTX>, "referer">) => void;
    [Methods.File]: <CTX>(url: string, options?: HitOptions<CTX>) => void;
    [Methods.FirstPartyParams]: (people: People) => void;
    [Methods.FirstPartyParamsHashed]: (people: People) => void;
    [Methods.GetClientID]: (cb: (clientID: number) => void) => void;
    [Methods.Hit]: <CTX>(url?: string, options?: HitOptions<CTX>) => void;
    [Methods.NotBounce]: <CTX>(options?: Pick<HitOptions<CTX>, "ctx" | "callback">) => void;
    [Methods.Params]: (params?: VisitParameters) => void;
    [Methods.ReachGoal]: <CTX>(
        target: string,
        params?: VisitParameters,
        callback?: (this: CTX) => void,
        ctx?: CTX,
    ) => void;
    [Methods.SetUserID]: (userId: string) => void;
    [Methods.UserParams]: (params?: UserParameters) => void;
};

export function createYandexMetricaClient(params: YandexMetricaClientParams = {}): YandexMetricaClient {
    let clientID: string | undefined;

    return new Proxy({} as YandexMetricaClient, {
        get: (_, method: Methods) => {
            return (...args: unknown[]) => {
                if (method === "init") clientID = args[0] as string;

                if (!clientID) return console.error("[yandex-metrica] You must init metrica before using it!");

                if (params.debug) console.log(`[yandex-metrica] (${clientID}) ${method}:`, ...args);

                if (params.enabled) ym(clientID, method, ...args);
            };
        },
    });
}
