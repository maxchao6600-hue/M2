import type { BlogCategoryId } from "@/content/types";

export const LOGO = "/images/brand/m2-logo.webp";

export const HERO_SLIDES = [
  {
    src: "/images/hero/rollex-slot-casino.webp",
    alt: "Rollex Slot and Casino promotional artwork with M2 characters",
  },
  {
    src: "/images/promotions/daily-rebate.webp",
    alt: "M2 daily rebate promotional artwork",
  },
  {
    src: "/images/promotions/fachai.webp",
    alt: "Fa Chai launch promotional artwork",
  },
] as const;

export const GAME_IMAGES: Record<string, string> = {
  "fortune-tiger": "/images/games/fortune-tiger.webp",
  zeus: "/images/games/zeus.webp",
  "wisdom-athena-1000": "/images/games/wisdom-athena-1000.webp",
  "mahjong-ways-2": "/images/games/mahjong-ways-2.webp",
  "wild-ape": "/images/games/wild-ape.webp",
  "ways-of-the-qilin": "/images/games/ways-of-the-qilin.webp",
  "mahjong-coming": "/images/games/mahjong-coming.webp",
  "super-plus": "/images/games/super-plus.webp",
  monkey: "/images/games/monkey.webp",
};

export const PROMO_IMAGES: Record<string, string> = {
  rollex: "/images/hero/rollex-slot-casino.webp",
  "daily-rebate": "/images/promotions/daily-rebate.webp",
  fachai: "/images/promotions/fachai.webp",
};

export const CATEGORY_IMAGES = [
  "/images/providers/jili.webp",
  "/images/providers/evolution.webp",
  "/images/providers/fachai.webp",
  "/images/providers/pragmatic-play.webp",
  "/images/providers/playtech-live.webp",
  "/images/providers/askmeslot.webp",
] as const;

export const PROVIDERS = [
  { name: "JDB", src: "/images/providers/jdb.webp" },
  { name: "Playtech", src: "/images/providers/playtech.webp" },
  { name: "Pragmatic Play Live", src: "/images/providers/pragmatic-play-live.webp" },
  { name: "Lucky365", src: "/images/providers/lucky365.webp" },
  { name: "Microslot", src: "/images/providers/microslot.webp" },
  { name: "Monkey King", src: "/images/providers/monkey-king.webp" },
  { name: "Big Gaming", src: "/images/providers/big-gaming.webp" },
  { name: "Sexy", src: "/images/providers/sexy.webp" },
  { name: "Hotroad", src: "/images/providers/hotroad.webp" },
  { name: "Gogoli", src: "/images/providers/gogoli.webp" },
  { name: "MarbleX", src: "/images/providers/marblex.webp" },
  { name: "Maxbet", src: "/images/providers/maxbet.webp" },
  { name: "RCB988", src: "/images/providers/rcb988.webp" },
  { name: "SV388", src: "/images/providers/sv388.webp" },
] as const;

export const CASHIER_IMAGES = {
  hero: "/images/cashier/hero.webp",
  methods: "/images/cashier/methods.webp",
  topup: "/images/cashier/topup.webp",
  withdraw: "/images/cashier/withdraw.webp",
  security: "/images/cashier/security.webp",
  trouble: "/images/cashier/trouble.webp",
  contact: "/images/cashier/contact.webp",
} as const;

export const PAYMENT_LOGOS = [
  { name: "Touch 'n Go", src: "/images/payment/touch-n-go.webp", width: 500, height: 500 },
  { name: "FPX", src: "/images/payment/fpx.webp", width: 500, height: 500 },
  { name: "GrabPay", src: "/images/payment/grabpay.png", width: 93, height: 92 },
  { name: "DuitNow", src: "/images/payment/duitnow.png", width: 103, height: 92 },
] as const;

export const POST_IMAGES: Record<string, string> = {
  "getting-started": "/images/blog/getting-started.webp",
  "reading-the-lobby": "/images/blog/reading-the-lobby.webp",
  "cashier-checklist": "/images/blog/cashier-checklist.webp",
  "keeping-play-in-proportion": "/images/blog/keeping-play.webp",
};

export const BLOG_SCENES = {
  fishing: "/images/blog/fishing.webp",
  arcade: "/images/blog/arcade.webp",
  live: "/images/blog/live-table.webp",
} as const;

export const POST_CATEGORY: Record<string, BlogCategoryId> = {
  "getting-started": "start",
  "reading-the-lobby": "guides",
  "cashier-checklist": "payments",
  "keeping-play-in-proportion": "responsible",
};

export const PAGE_IMAGES = {
  login: { src: "/images/hero/rollex-slot-casino.webp", alt: "Rollex Slot and Casino artwork" },
  register: { src: "/images/promotions/daily-rebate.webp", alt: "Daily rebate campaign artwork" },
  shareholder: { src: "/images/providers/evolution.webp", alt: "Evolution lobby artwork" },
  agent: { src: "/images/providers/jili.webp", alt: "Jili lobby artwork" },
  contact: { src: "/images/providers/playtech-live.webp", alt: "Playtech Live artwork" },
  about: { src: "/images/providers/pragmatic-play.webp", alt: "Pragmatic Play artwork" },
} as const;

export const PHONE_SCREENS = [
  "/images/games/fortune-tiger.webp",
  "/images/games/zeus.webp",
  "/images/games/ways-of-the-qilin.webp",
] as const;
