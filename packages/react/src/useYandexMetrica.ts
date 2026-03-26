import { useContext } from "react";
import { YandexMetricaContext } from "./context";

export function useYandexMetrica() {
    const context = useContext(YandexMetricaContext);

    if (!context) throw new Error("useYandexMetrica must be used within a YandexMetricaProvider");

    return context.metrica;
}
