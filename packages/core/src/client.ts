import type { MetricaMethods } from "./methods";
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
    [MetricaMethods.Init]: (options?: Partial<InitParameters>) => void;
    [MetricaMethods.AddFileExtension]: (extensions?: string | string[]) => void;
    [MetricaMethods.ExtLink]: <CTX>(url: string, options?: Omit<HitOptions<CTX>, "referer">) => void;
    [MetricaMethods.File]: <CTX>(url: string, options?: HitOptions<CTX>) => void;
    [MetricaMethods.FirstPartyParams]: (people: People) => void;
    [MetricaMethods.FirstPartyParamsHashed]: (people: People) => void;
    [MetricaMethods.GetClientID]: (cb: (clientID: number) => void) => void;
    [MetricaMethods.Hit]: <CTX>(url?: string, options?: HitOptions<CTX>) => void;
    [MetricaMethods.NotBounce]: <CTX>(options?: Pick<HitOptions<CTX>, "ctx" | "callback">) => void;
    [MetricaMethods.Params]: (params?: VisitParameters) => void;
    [MetricaMethods.ReachGoal]: <CTX>(
        target: string,
        params?: VisitParameters,
        callback?: (this: CTX) => void,
        ctx?: CTX,
    ) => void;
    [MetricaMethods.SetUserID]: (userId: string) => void;
    [MetricaMethods.UserParams]: (params?: UserParameters) => void;
};

export function createYandexMetricaClient({
    clientID,
    debug = false,
    enabled = false,
}: YandexMetricaClientParams): YandexMetricaClient {
    return new Proxy({} as YandexMetricaClient, {
        get: (_, method: MetricaMethods) => {
            return (...args: unknown[]) => {
                if (debug) console.log(`[yandex-metrica] (${clientID}) ${method}:`, ...args);

                if (enabled) ym(clientID, method, ...args);
            };
        },
    });
}
