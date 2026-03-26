# @yametrica/react

## Installation

```bash
#npm
npm i @yametrica/react

#pnpm
pnpm i @yametrica/react
```

## Usage

Integration of Yandex Metrica for React apps.

```tsx
import { YandexMetricaProvider, YandexMetricaScript, YandexMetricaInit } from '@yametrica/react';

function App() {
    return (
        <YandexMetricaProvider clientID="XXXXX" enabled={process.env.NODE_ENV === "production"}>
            <YandexMetricaScript />
            <YandexMetricaInit defer clickmap ecommerce />
            {/* your app */}
        </YandexMetricaProvider>
    );
}
```

```tsx
import { useYandexMetrica, useYandexECommerce } from '@yametrica/react';

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

> [!IMPORTANT]
> When using client-side navigation, make sure to call `metrica.hit` on each navigation to track page views.