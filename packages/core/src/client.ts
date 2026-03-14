import type { Methods } from "./methods";
import type { HitOptions, InitParameters, People, UserParameters, VisitParameters } from "./types";
import { ym } from "./ym";

export type YandexMetricaClientParams = {
    clientID: string;
    /** Enable console log on method calls @default false */
    debug?: boolean;
    /** Enable sending data to Yandex Metrica @default false */
    enabled?: boolean;
};

export type YandexMetricaClient = {
    [Methods.Init]: (options?: Partial<InitParameters>) => void;
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

export function createYandexMetricaClient({
    clientID,
    debug = false,
    enabled = false,
}: YandexMetricaClientParams): YandexMetricaClient {
    return new Proxy({} as YandexMetricaClient, {
        get: (_, method: Methods) => {
            return (...args: unknown[]) => {
                if (debug) console.log(`[yandex-metrica] (${clientID}) ${method}:`, ...args);

                if (enabled) ym(clientID, method, ...args);
            };
        },
    });
}
