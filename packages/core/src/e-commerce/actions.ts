export const ECommerceAction = {
    impressions: "impressions",
    click: "click",
    detail: "detail",
    add: "add",
    remove: "remove",
    purchase: "purchase",
    promoView: "promoView",
    promoClick: "promoClick",
} as const;

export type ECommerceAction = (typeof ECommerceAction)[keyof typeof ECommerceAction];
