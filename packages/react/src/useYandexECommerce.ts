import { useYandexMetricaContext } from "./context";

export function useYandexECommerce() {
    const context = useYandexMetricaContext("useYandexECommerce");

    return context.eCommerce;
}
