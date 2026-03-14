import type { Methods } from "./methods";

export function ym<M extends Methods>(clientID: string, method: M, ...args: unknown[]) {
    if (typeof window === "undefined" || !window.ym) return console.error("[yandex-metrica] Script is not loaded!");

    window.ym(clientID, method, ...args);
}
