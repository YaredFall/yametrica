import type { MetricaMethods } from "./methods";

export function ym<M extends MetricaMethods>(clientID: string, method: M, ...args: unknown[]) {
    if (typeof window === "undefined" || !window.ym) return console.error("[yandex-metrica] Script is not loaded!");

    window.ym(clientID, method, ...args);
}
