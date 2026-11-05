export type Seo = {
  title: string;
  description: string;
};

export type LinkItem = {
  href: string;
  label: string;
};

export type Block = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type InfoPage = {
  seo: Seo;
  eyebrow: string;
  h1: string;
  lead: string;
  blocks: Block[];
  related: LinkItem[];
};

export type Game = {
  slug: string;
  name: string;
  category: string;
  blurb: string;
};

export type Promo = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  minutes: number;
  seo: Seo;
  blocks: Block[];
};

export type Faq = {
  q: string;
  a: string;
};

export type LoginGuide = {
  formTitle: string;
  points: string[];
  artAlt: string;
  accessTitle: string;
  accessLead: string;
  steps: { title: string; text: string }[];
  troubleTitle: string;
  troubleLead: string;
  troubles: { id: string; title: string; text: string; steps: string[]; href: string; link: string }[];
  securityTitle: string;
  securityLead: string;
  security: { title: string; text: string }[];
  faqTitle: string;
  faqLead: string;
  faqs: Faq[];
  relatedTitle: string;
  related: { href: string; label: string; text: string }[];
};

export type RegisterGuide = {
  formTitle: string;
  points: string[];
  ageNote: string;
  artAlt: string;
  processTitle: string;
  processLead: string;
  steps: { title: string; text: string }[];
  requirementsTitle: string;
  requirementsLead: string;
  requirements: { title: string; text: string }[];
  troubleTitle: string;
  troubleLead: string;
  troubles: { id: string; title: string; text: string; steps: string[]; href: string; link: string }[];
  securityTitle: string;
  securityLead: string;
  security: { title: string; text: string }[];
  faqTitle: string;
  faqLead: string;
  faqs: Faq[];
  relatedTitle: string;
  related: { href: string; label: string; text: string }[];
};

export type DownloadGuide = {
  badges: [string, string, string];
  explore: string;
  registerCta: string;
  homeAlt: string;
  lobbyAlt: string;
  gamesAlt: string;
  desktopAlt: string;
  androidTitle: string;
  androidLead: string;
  androidSteps: string[];
  iosTitle: string;
  iosLead: string;
  iosSteps: string[];
  desktopTitle: string;
  desktopLead: string;
  desktopSteps: string[];
  installTitle: string;
  installLead: string;
  install: { title: string; text: string }[];
  playTitle: string;
  playLead: string;
  slotsTitle: string;
  liveTitle: string;
  liveLead: string;
  fishingTitle: string;
  fishingLead: string;
  providersTitle: string;
  providersLead: string;
  benefitsTitle: string;
  benefits: { title: string; text: string }[];
  troubleTitle: string;
  troubleLead: string;
  troubles: { title: string; text: string }[];
  faqTitle: string;
  faqLead: string;
  faqs: Faq[];
  relatedTitle: string;
  related: { href: string; label: string; text: string }[];
};

export type Step = {
  title: string;
  text: string;
};

export type Studio = {
  mark: string;
  name: string;
  text: string;
};

export type PayMethod = {
  name: string;
  text: string;
};

export type Dictionary = {
  langName: string;
  nav: {
    home: string;
    login: string;
    register: string;
    download: string;
    promotion: string;
    popularGames: string;
    blog: string;
    tutorial: string;
    topup: string;
    shareholder: string;
    agent: string;
    contact: string;
    faq: string;
    language: string;
    openMenu: string;
    closeMenu: string;
    more: string;
    about: string;
    payments: string;
    responsible: string;
    privacy: string;
    terms: string;
  };
  cta: {
    playNow: string;
    login: string;
    register: string;
    download: string;
    learnMore: string;
    viewAll: string;
    readGuide: string;
    browseGames: string;
    contact: string;
    backHome: string;
    submit: string;
  };
  crumbs: { home: string };
  footer: {
    blurb: string;
    explore: string;
    guides: string;
    legal: string;
    follow: string;
    payments: string;
    paymentNote: string;
    age: string;
    disclaimer: string;
    rights: string;
  };
  a11y: {
    prev: string;
    next: string;
    gotoSlide: string;
    breadcrumb: string;
    main: string;
  };
  forms: {
    username: string;
    password: string;
    confirmPassword: string;
    mobile: string;
    remember: string;
    name: string;
    contactDetail: string;
    topic: string;
    message: string;
    submitLogin: string;
    showPassword: string;
    hidePassword: string;
    checking: string;
    forgotDetails: string;
    registerInstead: string;
    loginNotice: string;
    usernameHint: string;
    passwordHint: string;
    confirmHint: string;
    mobileHint: string;
    registerNotice: string;
    loginInstead: string;
    termsBefore: string;
    termsName: string;
    termsAnd: string;
    privacyName: string;
    termsAfter: string;
    submitRegister: string;
    submitContact: string;
    ageConfirm: string;
    termsConfirm: string;
    required: string;
    passwordShort: string;
    passwordMismatch: string;
    mobileInvalid: string;
    mustAgree: string;
    loginSuccess: string;
    registerSuccess: string;
    contactSuccess: string;
    topics: [string, string, string, string];
  };
  home: {
    seo: Seo;
    slides: {
      eyebrow: string;
      title: string;
      text: string;
      cta: string;
      href: string;
    }[];
    strip: string[];
    popularTitle: string;
    popularLead: string;
    categoryTitle: string;
    categoryLead: string;
    categories: { name: string; text: string; href: string }[];
    studioTitle: string;
    studioLead: string;
    studioNote: string;
    studios: Studio[];
    promoTitle: string;
    promoLead: string;
    registerTitle: string;
    registerLead: string;
    steps: Step[];
    downloadTitle: string;
    downloadLead: string;
    platforms: { name: string; text: string }[];
    payTitle: string;
    payLead: string;
    featureTitle: string;
    featureLead: string;
    features: { title: string; text: string }[];
    guideTitle: string;
    guideLead: string;
    guidePoints: string[];
    programTitle: string;
    programLead: string;
    programs: { title: string; text: string; href: string }[];
    faqTitle: string;
    faqLead: string;
    seoTitle: string;
  };
  gamesUi: { all: string; filterLabel: string };
  games: Game[];
  promos: Promo[];
  payments: PayMethod[];
  faqs: Faq[];
  posts: Post[];
  seoBlocks: Block[];
  pages: {
    login: InfoPage & { guide: LoginGuide };
    register: InfoPage & { guide: RegisterGuide };
    download: InfoPage & { guide: DownloadGuide };
    promotion: InfoPage;
    popularGames: InfoPage;
    blog: InfoPage;
    topup: InfoPage;
    shareholder: InfoPage;
    agent: InfoPage;
    contact: InfoPage;
    faq: InfoPage;
    payments: InfoPage;
    about: InfoPage;
    responsible: InfoPage;
    privacy: InfoPage;
    terms: InfoPage;
  };
  blogUi: {
    published: string;
    minutes: string;
    related: string;
    allPosts: string;
  };
  notFound: { title: string; text: string };
};
