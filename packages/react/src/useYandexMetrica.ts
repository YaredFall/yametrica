import { useYandexMetricaContext } from "./context";

export function useYandexMetrica() {
    const context = useYandexMetricaContext("useYandexMetrica");

    return context.metrica;
}
