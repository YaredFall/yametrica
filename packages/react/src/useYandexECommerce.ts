import { useContext } from "react";
import { YandexMetricaContext } from "./context";

export function useYandexECommerce() {
    const context = useContext(YandexMetricaContext);

    if (!context) throw new Error("useYandexECommerce must be used within a YandexMetricaProvider");

    return context.eCommerce;
}
