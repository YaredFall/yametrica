/** Create string for Yandex Metrica script tag
 *
 * Default src is https://mc.yandex.ru/metrika/tag.js
 *
 * You could also use a CDN version: https://cdn.jsdelivr.net/npm/yandex-metrica-watch/tag.js
 */
export function createYandexMetricaScript(src: string = "https://mc.yandex.ru/metrika/tag.js") {
    return `
(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();
for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "${src}", "ym");`;
}

/**
 * Create inner html string for Yandex Metrica noscript tag
 */
export function createYandexMetricaNoscript(clientID: string) {
    return `<div><img src="https://mc.yandex.ru/watch/${clientID}" style="position:absolute; left:-9999px;" alt="" /></div>`;
}
