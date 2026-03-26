# @yametrica/core

Framework agnostic client for Yandex Metrica and e-Commerce

## Installation

```bash
#npm
npm i @yametrica/core

#pnpm
pnpm i @yametrica/core
```

## Usage

First, add metrica script tag to your html.
We provide helper function to generate metrica script tag:

```typescript
import { createYandexMetricaScript } from '@yametrica/core';

const script = document.createElement('script');
script.text = createYandexMetricaScript();
document.body.prepend(script);
```

After the script is added to the page, you can use the client:

```typescript
import { createYandexMetrica } from '@yametrica/core';

const metrica = createYandexMetrica({ clientID: "XXXXX" });
// you should explicitly init the counter with options
metrica.init({ clickmap: true, accurateTrackBounce:true });

metrica.hit('https://example.com');
```

There is also a separate client for e-Commerce
```typescript
import { createYandexECommerce } from '@yametrica/core';

const ecommerce = createYandexECommerce();

ecommerce.add({ products: [ /* ... */ ] });
```