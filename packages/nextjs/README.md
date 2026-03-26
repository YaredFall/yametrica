# @yametrica/nextjs

Integration of Yandex Metrica for Next.js apps (App Router only).

## Installation

```bash
#npm
npm i @yametrica/nextjs

#pnpm
pnpm i @yametrica/nextjs
```

## Usage

```tsx
import { YandexMetricaProvider, YandexMetricaScript, YandexMetricaNoscript, YandexMetricaInit, YandexMetricaRouteTracking } from '@yametrica/nextjs';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <YandexMetricaProvider clientID="XXXXX" enabled={process.env.NODE_ENV === "production"}>
            <YandexMetricaScript />
            <YandexMetricaNoscript />
            <YandexMetricaInit defer clickmap ecommerce />
            {/* Built-in route tracking component for client-side navigation */}
            <YandexMetricaRouteTracking />
            {children}
        </YandexMetricaProvider>
    );
}
```

> [!NOTE]
> You might need to wrap `<YandexMetricaRouteTracking />` within a `<Suspense>` component in latest Next.js versions.

```tsx
import { useYandexMetrica, useYandexECommerce } from '@yametrica/nextjs';

function MyComponent() {
    const metrica = useYandexMetrica();
    const ecommerce = useYandexECommerce();
    
    const handleClick = () => {
        metrica.reachGoal('goal-name');
        ecommerce.add({ products: [ /* ... */ ] });
    };
    
    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}
```