import type { Dictionary } from "@/content/types";

const en: Dictionary = {
  langName: "English",
  nav: {
    home: "Home",
    login: "Login",
    register: "Register",
    download: "Download",
    promotion: "Promotion",
    popularGames: "Popular Games",
    blog: "Blog",
    tutorial: "Tutorial Guide",
    topup: "Topup Withdrawal Guide",
    shareholder: "Shareholder",
    agent: "Agent",
    contact: "Contact Us",
    faq: "FAQ",
    language: "English",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    more: "More",
    about: "About Us",
    payments: "Payment Methods",
    responsible: "Responsible Gaming",
    privacy: "Privacy Policy",
    terms: "Terms & Conditions",
  },
  cta: {
    playNow: "Play Now",
    login: "Login",
    register: "Register",
    download: "Download",
    learnMore: "Learn more",
    viewAll: "View all",
    readGuide: "Read the guide",
    browseGames: "Browse games",
    contact: "Contact us",
    backHome: "Back to home",
    submit: "Submit",
  },
  crumbs: { home: "Home" },
  footer: {
    blurb:
      "M2 Casino is a Malaysia-focused entertainment guide for slots, live tables, fishing games and account help. Read the lobby rules before you play.",
    explore: "Explore",
    guides: "Guides",
    legal: "Information",
    follow: "Follow M2",
    payments: "Cashier topics",
    paymentNote:
      "The methods shown in your player cashier are the ones that apply to your account. Names here describe categories players ask about.",
    age: "18+ only. Play with money you can afford to lose.",
    disclaimer:
      "This website explains how to use M2. It does not take wagers. Offers, game lists and cashier options can change and are confirmed inside the player account.",
    rights: "M2 Casino. All rights reserved.",
  },
  a11y: {
    prev: "Previous slide",
    next: "Next slide",
    gotoSlide: "Show slide",
    breadcrumb: "Breadcrumb",
    main: "Main content",
  },
  forms: {
    username: "Username",
    password: "Password",
    confirmPassword: "Confirm password",
    mobile: "Mobile number",
    remember: "Remember username on this device",
    name: "Name",
    contactDetail: "Telegram, mobile or email",
    topic: "Topic",
    message: "Message",
    submitLogin: "Continue to login",
    submitRegister: "Continue registration",
    submitContact: "Send message",
    ageConfirm: "I confirm that I am 18 or older.",
    termsConfirm: "I have read the Terms & Conditions and Privacy Policy.",
    required: "This field is required.",
    passwordShort: "Use at least 8 characters.",
    passwordMismatch: "Passwords do not match.",
    mobileInvalid: "Enter a mobile number with at least 8 digits.",
    mustAgree: "Please confirm this before continuing.",
    loginSuccess:
      "The form is valid on this device. M2 does not store the password in this browser. Open the player lobby and sign in with the username you registered.",
    registerSuccess:
      "Your details passed the checks in this browser. They were not sent to a server and the password was not saved. Finish opening the account in the official M2 player lobby, and keep a copy of the rules shown there.",
    contactSuccess:
      "Your message is ready. This page does not store it on a server. Send the same note through the official M2 Telegram channel if you need a person to reply.",
    topics: ["Account access", "Cashier question", "Shareholder or agent", "Something else"],
  },
  home: {
    seo: {
      title: "M2 Casino | Slots, Live Tables and Player Guides in Malaysia",
      description:
        "Visit M2 Casino for slots, live tables, fishing games, registration steps, download help, cashier guidance and support in Malaysia.",
    },
    slides: [
      {
        eyebrow: "M2 Casino",
        title: "A brighter night at the reels",
        text: "Spin through local-style slots, live tables and fishing games from one lobby built for players in Malaysia.",
        cta: "Play Now",
        href: "/register",
      },
      {
        eyebrow: "New players",
        title: "Register, then read the lobby",
        text: "Create your details, confirm you are 18 or older, and review the game rules before the first session.",
        cta: "Register",
        href: "/register",
      },
      {
        eyebrow: "On the move",
        title: "Pick up a session on your phone",
        text: "Use the mobile site or the install steps for Android and iOS. The same account follows you between screens.",
        cta: "Download",
        href: "/download",
      },
      {
        eyebrow: "Current campaigns",
        title: "Promotions with the terms in view",
        text: "Browse campaign types first. The live offer states the figure, the games and the expiry. Read it before you opt in.",
        cta: "View promotions",
        href: "/promotion",
      },
    ],
    strip: ["Slots", "Live tables", "Fishing", "Jackpots", "Arcade", "Table games"],
    popularTitle: "Popular games in the lobby",
    popularLead:
      "These original M2 highlights show the styles players open most often. Artwork on this site is illustrative. The live lobby names the titles currently available.",
    categoryTitle: "Game categories",
    categoryLead:
      "Start with a category when you know the pace you want. Slots are quick. Live tables follow a dealer. Fishing and arcade games sit in between.",
    categories: [
      {
        name: "Slots",
        text: "Ways, lines and feature buys presented as separate tiles so you can compare pace before you stake.",
        href: "/popular-games",
      },
      {
        name: "Live casino",
        text: "Baccarat, roulette and other dealer tables where the round is visible from start to result.",
        href: "/popular-games",
      },
      {
        name: "Fishing",
        text: "Arcade-style rooms where the stake is tied to each shot rather than a single spin.",
        href: "/popular-games",
      },
      {
        name: "Jackpot slots",
        text: "Feature-led reels with a prize pool shown inside the game, not as a promise on this page.",
        href: "/promotion",
      },
      {
        name: "Table games",
        text: "Card and wheel games with posted rules. Check limits on the table before you sit.",
        href: "/popular-games",
      },
      {
        name: "Arcade",
        text: "Short casual rounds for players who want a break from long slot sessions.",
        href: "/popular-games",
      },
    ],
    studioTitle: "Formats you can browse",
    studioLead:
      "M2 groups the lobby by format. Rollex appears in M2's public brand material as a local-style slot collection. Other tiles describe formats, not exclusive studio contracts.",
    studioNote:
      "Availability changes. The signed-in lobby is the list that matters for your account.",
    studios: [
      { mark: "RX", name: "Rollex", text: "Local-style slots highlighted in M2's public branding." },
      { mark: "LV", name: "Live room", text: "Dealer tables with round history you can read before staking." },
      { mark: "FS", name: "Fishing arcade", text: "Shot-based rooms with room rules posted at entry." },
      { mark: "TB", name: "Table salon", text: "Baccarat, roulette and classic cards with visible limits." },
      { mark: "JK", name: "Jackpot ways", text: "Feature reels where any pool is explained inside the game." },
      { mark: "AR", name: "Arcade picks", text: "Shorter games for a change of pace between longer sessions." },
    ],
    promoTitle: "Latest promotion types",
    promoLead:
      "Campaigns change. This page explains the shape of an offer so you know what to check. It does not publish a bonus figure that is not printed on the live campaign.",
    registerTitle: "Registration, without the rush",
    registerLead:
      "A clear account is easier to recover and easier to review. Use details you can access later, and only register if you are 18 or older.",
    steps: [
      {
        title: "Choose a username",
        text: "Pick a name you will remember. Avoid reusing a password from email or banking.",
      },
      {
        title: "Confirm your details",
        text: "Check the mobile number. Cashier and recovery messages go to the contact you provide.",
      },
      {
        title: "Read, then enter",
        text: "Accept the account rules shown in the lobby. Then look at limits, games and cashier options.",
      },
    ],
    downloadTitle: "Play on the screen you already use",
    downloadLead:
      "M2 works in current mobile browsers. You can also save a home-screen icon. Install only files that the official lobby or the official Telegram channel tells you to install.",
    platforms: [
      { name: "Android", text: "Open M2 in Chrome, then use the browser menu to add it to your home screen." },
      { name: "iOS", text: "Open M2 in Safari, tap Share, and choose Add to Home Screen." },
      { name: "Desktop", text: "Chrome, Edge and Safari on a computer use the same account as the phone." },
    ],
    payTitle: "Payment methods players ask about",
    payLead:
      "Malaysian players often ask about online banking, FPX-style transfers and e-wallets such as Touch 'n Go. Your cashier lists the channels open for your account.",
    featureTitle: "What the platform is built around",
    featureLead:
      "The useful parts of a casino site are the ones you touch every session: finding a game, funding a wallet, and getting a reply when something looks wrong.",
    features: [
      { title: "One lobby", text: "Categories sit together so you are not hunting through unrelated menus." },
      { title: "Account history", text: "Deposits, withdrawals and game sessions should be readable in the account record." },
      { title: "Guides in three languages", text: "English, Simplified Chinese and Bahasa Melayu cover the same pages." },
      { title: "People, when you need them", text: "The official Telegram channel is the public place to reach the M2 community team." },
    ],
    guideTitle: "Top up and withdrawal, in plain steps",
    guideLead:
      "Move money only through the cashier inside your account. Compare the amount, the channel and the status before you close the page.",
    guidePoints: [
      "Confirm the recipient name shown by the cashier.",
      "Keep the reference number until the status changes.",
      "Use a channel in your own name.",
      "Ask support if a status stays unchanged longer than the cashier note suggests.",
    ],
    programTitle: "Shareholder and agent introductions",
    programLead:
      "Some players introduce friends. Some people ask about a wider agent arrangement. Both start with a conversation, not a public rate card.",
    programs: [
      {
        title: "Shareholder",
        text: "Learn what a shareholder enquiry covers and which details to prepare before you write in.",
        href: "/shareholder",
      },
      {
        title: "Agent",
        text: "See how agent onboarding is discussed and why commission figures are confirmed privately.",
        href: "/agent",
      },
    ],
    faqTitle: "Questions players ask first",
    faqLead: "Short answers are below. The full FAQ covers account access, cashier checks and play habits.",
    seoTitle: "Playing at M2 Casino with a clear head",
  },
  gamesUi: { all: "All", filterLabel: "Filter games" },
  games: [
    { slug: "qilin-ways", name: "Qilin Ways", category: "Slots", blurb: "A ways-style reel with a gold qilin motif and a feature round explained in the paytable." },
    { slug: "imperial-mahjong", name: "Imperial Mahjong", category: "Slots", blurb: "Tile-matching reels for players who like cascading wins and a slower read of each spin." },
    { slug: "solar-reels", name: "Solar Reels", category: "Jackpots", blurb: "Sun-marked reels. Any prize pool is described inside the game, not on this card." },
    { slug: "wild-ape-gold", name: "Wild Ape Gold", category: "Slots", blurb: "A jungle reel with stacked wilds. Check the stake steps before you raise them." },
    { slug: "athena-wisdom", name: "Athena Wisdom", category: "Slots", blurb: "A classical reel with expanding symbols and a help panel that lists each feature." },
    { slug: "dragon-treasure", name: "Dragon Treasure", category: "Jackpots", blurb: "A festival reel built around treasure chests and a bonus path you can decline." },
    { slug: "lucky-koi", name: "Lucky Koi", category: "Slots", blurb: "A koi pond reel with shorter spins for a brief session." },
    { slug: "neon-fishing", name: "Neon Fishing", category: "Fishing", blurb: "A shot-based room. The room card shows the cost of each shot before you enter." },
    { slug: "baccarat-lounge", name: "Baccarat Lounge", category: "Live", blurb: "A dealer baccarat table. Road maps are a record of past rounds, not a prediction." },
    { slug: "roulette-royale", name: "Roulette Royale", category: "Table", blurb: "A wheel table with inside and outside bets labelled on the cloth." },
    { slug: "phoenix-lanes", name: "Phoenix Lanes", category: "Arcade", blurb: "A short lane game for players who want a break from long reel sessions." },
    { slug: "jade-emperor", name: "Jade Emperor", category: "Slots", blurb: "A court-themed reel. Free-spin rules sit in the paytable, including how retriggers work." },
  ],
  promos: [
    {
      slug: "welcome-orientation",
      title: "New member orientation",
      summary: "A first-session campaign for accounts that have just opened. The lobby states who can join and which games count.",
      points: ["Shown after registration", "Games listed on the offer", "One opt-in per the campaign note"],
    },
    {
      slug: "reload-window",
      title: "Reload window",
      summary: "A returning-player campaign tied to a later deposit. The window opens and closes on the dates printed on the offer.",
      points: ["Date range on the offer", "Minimum is stated there", "Not combined unless the note says so"],
    },
    {
      slug: "rebate-review",
      title: "Rebate-style review",
      summary: "Some campaigns look back at settled play. The percentage and the cap, if any, belong on the campaign card.",
      points: ["Settled bets only", "Cap printed on the card", "Credited on the schedule shown"],
    },
    {
      slug: "seasonal-table",
      title: "Seasonal table nights",
      summary: "Short events around festivals. They name the tables or reels that take part and the hour they end.",
      points: ["Named games only", "End time in the notice", "Region limits if stated"],
    },
  ],
  payments: [
    {
      name: "Online banking",
      text: "A transfer started from the cashier. Match the amount and the account name on the bank screen before you approve it.",
    },
    {
      name: "FPX-style transfer",
      text: "A local online-banking flow many Malaysian players recognise. The cashier shows whether this channel is open.",
    },
    {
      name: "E-wallet",
      text: "Wallet apps such as Touch 'n Go are a common question. Use the wallet that matches the name on your M2 account.",
    },
    {
      name: "QR payment",
      text: "Scan only a code presented inside the cashier session you just opened. Do not reuse a screenshot from an old chat.",
    },
  ],
  faqs: [
    {
      q: "How do I log in to M2?",
      a: "Open the Login page, enter the username and password you created, and continue into the player lobby. If the password fails, use the recovery step inside the lobby rather than sending the password to anyone in a chat.",
    },
    {
      q: "What do I need to register?",
      a: "A username, a password you have not used elsewhere, a mobile number you can access, and confirmation that you are 18 or older. The lobby may ask for more checks before a withdrawal.",
    },
    {
      q: "How do I top up?",
      a: "Sign in, open the cashier, pick a channel that is listed for your account, and approve the amount on the bank or wallet screen. Keep the reference until the status updates.",
    },
    {
      q: "How do withdrawals work?",
      a: "Request the withdrawal in the cashier to a destination in your own name. Timing depends on the channel and on any review the account requires. The cashier status is the record to follow. This site does not promise a fixed number of minutes.",
    },
    {
      q: "Can I play on a phone?",
      a: "Yes. Use a current browser, or add M2 to your home screen with the steps on the Download page. Install a file only when the official lobby or official Telegram channel instructs you.",
    },
    {
      q: "Where are the promotion figures?",
      a: "On the live campaign inside the lobby. Pages on this website explain what to read on an offer. They do not replace the figure, the wagering note or the expiry printed there.",
    },
    {
      q: "How do I ask about shareholder or agent plans?",
      a: "Read the Shareholder and Agent pages, prepare the details they list, and contact the team through the official Telegram channel. Rates are discussed in that conversation.",
    },
    {
      q: "What if I want to slow down or stop?",
      a: "Stop opening new sessions, withdraw any balance you are entitled to through the cashier, and use the Responsible Gaming page for practical steps. If play is hurting you, talk to someone you trust and look for local support.",
    },
  ],
  posts: [
    {
      slug: "getting-started",
      title: "Getting started at M2: register, sign in, and look around",
      excerpt: "A calm first visit beats a rushed one. Here is what to prepare before you open an M2 account and what to check in the lobby afterwards.",
      date: "2026-08-12",
      minutes: 6,
      seo: {
        title: "Getting Started at M2 Casino | Register and Login Guide",
        description: "Prepare an M2 Casino registration, sign in safely, and learn what to review in the lobby before your first session in Malaysia.",
      },
      blocks: [
        {
          heading: "Before you create the account",
          paragraphs: [
            "Use a username you can say out loud and a password that does not match your email or banking. Write the username down somewhere private if you tend to forget names.",
            "Register only if you are 18 or older. If you share a phone with someone else, sign out when you finish and do not save the password in a shared browser profile.",
          ],
        },
        {
          heading: "The first ten minutes in the lobby",
          paragraphs: [
            "After login, find three things: the cashier, the game categories, and the account record. You do not need to deposit in order to learn where they are.",
            "Open one game's help panel. Read how a spin or a round ends, and how a feature is triggered. That habit matters more than any highlight on the home page.",
          ],
          bullets: ["Find the cashier", "Open one paytable", "Note the support channel", "Set a personal stop time"],
        },
        {
          heading: "If login fails",
          paragraphs: [
            "Check the username spelling and the keyboard language. Then use the recovery path inside the lobby. A person who asks you to send the password, even in an M2-looking chat, is not following a safe process.",
            "The public Telegram channel can point you to the right recovery step. Do not send screenshots of bank approvals into a group chat.",
          ],
        },
      ],
    },
    {
      slug: "reading-the-lobby",
      title: "Reading the lobby: slots, live tables, fishing and arcade",
      excerpt: "The M2 lobby is easier when you choose by pace. This guide explains what each category asks of your attention and your stake.",
      date: "2026-08-28",
      minutes: 7,
      seo: {
        title: "M2 Casino Game Lobby Guide | Slots, Live Tables and Fishing",
        description: "Learn how M2 Casino groups slots, live tables, fishing rooms and arcade games so you can pick a pace that suits the session.",
      },
      blocks: [
        {
          heading: "Match the category to the time you have",
          paragraphs: [
            "Slots resolve quickly. Live tables wait for other players and a dealer. Fishing rooms charge by shot. Arcade lanes are usually the shortest. Pick the one that fits the time you actually have, not the time you hope to have.",
            "Popular tiles are a starting shelf, not a ranking of what will pay. The illustrative cards on this website use original art so they are easy to tell apart.",
          ],
        },
        {
          heading: "What to read on a game tile",
          paragraphs: [
            "Look for the stake range, the rule summary, and whether a feature can be bought. If a pool is mentioned, open the game and read how it is funded and when it can drop. A marketing line is not that explanation.",
            "Road maps on baccarat show past outcomes. They do not change the next round. Treat them as history.",
          ],
          bullets: ["Stake range", "Feature rules", "Pool explanation inside the game", "Table limits"],
        },
        {
          heading: "Leaving a game cleanly",
          paragraphs: [
            "Finish the current round before you close the tab. Unfinished feature rounds are described in the paytable. If the screen freezes, note the time and the game name before you contact support.",
            "A second session on another device can interrupt the first. Sign out of the device you are not using.",
          ],
        },
      ],
    },
    {
      slug: "cashier-checklist",
      title: "A cashier checklist for top ups and withdrawals",
      excerpt: "Use the same short list every time you move money. It keeps reference numbers, names and statuses in one place.",
      date: "2026-09-16",
      minutes: 6,
      seo: {
        title: "M2 Top Up and Withdrawal Checklist | Cashier Guide",
        description: "Follow a practical M2 cashier checklist for top ups and withdrawals, including references, account names and status checks.",
      },
      blocks: [
        {
          heading: "Before you approve a top up",
          paragraphs: [
            "Start at the cashier, not from a code someone pasted in a chat. Check the amount, the channel and the name you are paying. If any of those look unexpected, stop and ask through the official channel.",
            "FPX-style banking and e-wallets are common questions in Malaysia. Whether they appear for you is decided by the cashier list on your account.",
          ],
        },
        {
          heading: "After you submit",
          paragraphs: [
            "Save the reference. Wait for the status to change before you send a second transfer for the same request. Two transfers can create two records that take longer to sort out.",
            "This guide does not state a fixed number of minutes. Channels and reviews differ. The status line is the fact you can point to.",
          ],
          bullets: ["Save the reference", "Do not pay twice for one request", "Match the account name", "Read the status line"],
        },
        {
          heading: "Withdrawal habits",
          paragraphs: [
            "Send withdrawals to a destination in your own name. If the lobby asks for a check before the first withdrawal, complete it before you plan around the money.",
            "Keep the guide page open in another tab only as a reminder. The cashier text overrides this article if they ever differ.",
          ],
        },
      ],
    },
    {
      slug: "keeping-play-in-proportion",
      title: "Keeping play in proportion",
      excerpt: "A session limit is a decision you make before the reels start. Here is a simple way to set one and to notice when you are leaving it.",
      date: "2026-10-02",
      minutes: 5,
      seo: {
        title: "Responsible Play Habits for M2 Casino Sessions",
        description: "Set a session limit before you play at M2 Casino, notice when the plan slips, and find the steps on the responsible gaming page.",
      },
      blocks: [
        {
          heading: "Decide the end before the start",
          paragraphs: [
            "Pick a money amount and a clock time. When either arrives, the session is over even if a feature feels close. The feeling of being close is part of the game design, not a signal to continue.",
            "Do not stake money set aside for rent, family costs or debt. If that line is already blurry, do not open a session. Use the Responsible Gaming page instead.",
          ],
        },
        {
          heading: "Signs the plan is slipping",
          paragraphs: [
            "Chasing a loss, raising the stake to 'get back', and hiding the session from people you live with are signs to stop. Closing the tab is a complete action. You do not need a win to leave.",
            "Alcohol and fatigue make limits harder to keep. If you notice either, leave the lobby.",
          ],
        },
        {
          heading: "If you want a longer pause",
          paragraphs: [
            "Withdraw any balance the cashier allows, sign out, and remove the home-screen shortcut for a while. Tell someone you trust what you are doing so the pause is not only private.",
            "M2 support can explain the tools available inside the account. This article cannot switch those tools on for you.",
          ],
        },
      ],
    },
  ],
  seoBlocks: [
    {
      heading: "M2 Casino for players in Malaysia",
      paragraphs: [
        "M2 Casino brings slots, live tables, fishing rooms and arcade games into one lobby aimed at players who use English, Chinese or Malay. The brand mark on this site is the original M2 logo. The illustrations around it are original artwork for this guide, so they are not screenshots of a provider's game.",
        "Use the pages in the tutorial menu when you want a slower explanation. The Topup Withdrawal Guide, Shareholder page, Agent page, Contact page and FAQ answer different jobs. They are written to be read in full in the language you selected.",
      ],
    },
    {
      heading: "Login, registration and the mobile screen",
      paragraphs: [
        "The Login and Register buttons stay visible on desktop and on mobile. Registration asks you to confirm your age and to read the terms. Login is the return path for an account that already exists. Neither form on this marketing site stores your password.",
        "The Download page explains home-screen shortcuts for Android and iOS, and the desktop browsers that can open the same account. Add a shortcut yourself. Do not install a package forwarded by a stranger.",
      ],
    },
    {
      heading: "Promotions, payments and play habits",
      paragraphs: [
        "Promotion pages describe campaign types: orientation for new members, reload windows, rebate-style reviews and seasonal tables. The number on an offer is the number in the lobby. If this website and the lobby ever disagree, follow the lobby.",
        "Payment notes cover online banking, FPX-style transfers, e-wallets and QR codes as categories. Pair them with the cashier checklist so references and account names stay tidy. If you need to slow down, the Responsible Gaming page is the right next read.",
      ],
    },
  ],
  pages: {
    login: {
      seo: {
        title: "M2 Casino Login | Sign In to Your Player Account",
        description: "Sign in to M2 Casino with your username and password, and see what to do if access fails. Passwords are not stored on this page.",
      },
      eyebrow: "Account",
      h1: "M2 Casino login",
      lead: "Use the username and password from registration. This page checks the form in your browser and does not keep the password.",
      blocks: [
        {
          heading: "A safe sign-in habit",
          paragraphs: [
            "Type the address yourself or use a bookmark you created. A message with a lookalike link is a common way accounts are taken over. M2 will not ask you to reveal the password in Telegram, SMS or email.",
            "On a shared computer, leave the remember option off and sign out when you finish. On your own phone, a home-screen shortcut is enough.",
          ],
        },
        {
          heading: "If the password does not work",
          paragraphs: [
            "Retry once, slowly. Check that caps lock is off and that the username has no extra space. Then use account recovery inside the player lobby.",
            "If you still cannot enter, contact the team through the official Telegram channel and describe the time of the attempt. Do not send the password, a one-time code, or a photo of your bank app.",
          ],
        },
      ],
      related: [
        { href: "/register", label: "Create an account" },
        { href: "/faq", label: "Login questions" },
        { href: "/contact-us", label: "Contact" },
      ],
    },
    register: {
      seo: {
        title: "M2 Casino Register | Open a Player Account",
        description: "Register for M2 Casino if you are 18 or older. Review the details the lobby asks for and the rules to read before you play.",
      },
      eyebrow: "New players",
      h1: "Register at M2 Casino",
      lead: "Open an account with a unique password, a mobile number you control, and a clear yes to the age check. Finish the account in the player lobby.",
      blocks: [
        {
          heading: "What the lobby may ask next",
          paragraphs: [
            "After the form, the lobby can ask you to confirm the mobile number and to accept the account rules. Withdrawals can require a further check. Complete that when it is asked, not the night you need the money in a hurry.",
            "Use your own identity. An account opened in someone else's name is difficult to withdraw from, because the destination name should match the account.",
          ],
        },
        {
          heading: "After the account exists",
          paragraphs: [
            "Look at the cashier list, one game help panel, and the promotion board. You can do all three before you deposit. The orientation campaign, if one is running, will say whether you need to opt in.",
            "Save the official Telegram channel so later questions have an obvious destination.",
          ],
          bullets: ["Age 18 or older", "Unique password", "Mobile you control", "Rules read in the lobby"],
        },
      ],
      related: [
        { href: "/login", label: "Already registered" },
        { href: "/topup-withdrawal-guide", label: "Cashier guide" },
        { href: "/responsible-gaming", label: "Responsible gaming" },
      ],
    },
    download: {
      seo: {
        title: "Download M2 Casino | Android, iOS and Desktop Access",
        description: "Add M2 Casino to your Android or iOS home screen and open the same account in a desktop browser. Install files only from official instructions.",
      },
      eyebrow: "Apps and browsers",
      h1: "Download and home-screen access",
      lead: "You can play M2 in the browser you already trust. A home-screen icon is the safest 'app' because you create it yourself.",
      blocks: [
        {
          heading: "Android",
          paragraphs: [
            "Open this website in Chrome. Tap the menu, then choose Add to Home screen or Install app if Chrome offers it. The icon opens M2 without a store listing you cannot verify.",
            "If the player lobby or the official Telegram channel publishes an Android package, compare the instruction there with the page you are on. Ignore files sent by people you do not know.",
          ],
        },
        {
          heading: "iOS",
          paragraphs: [
            "Open M2 in Safari. Tap the Share button, then Add to Home Screen. Name the icon M2 so you can find it. Safari updates the site when you are online; you do not manage a separate update file.",
          ],
        },
        {
          heading: "Desktop browsers",
          paragraphs: [
            "Chrome, Edge and Safari on Windows and macOS open the same account. Keep the browser updated. An outdated browser is a common reason a game tile will not load.",
            "Disable aggressive script blockers only for the lobby tab if a game stays blank, then turn your usual protection back on for other sites.",
          ],
        },
      ],
      related: [
        { href: "/login", label: "Login" },
        { href: "/popular-games", label: "Popular games" },
        { href: "/blog/getting-started", label: "Getting started" },
      ],
    },
    promotion: {
      seo: {
        title: "M2 Casino Promotions | How to Read a Live Offer",
        description: "See the types of M2 Casino promotions and the terms to read before you opt in. Figures are confirmed on the live campaign, not invented here.",
      },
      eyebrow: "Campaigns",
      h1: "Promotions",
      lead: "Each card describes a kind of campaign M2 may run. The lobby card is the offer. Read the figure, the games, the cap and the end time there.",
      blocks: [
        {
          heading: "How to read an offer",
          paragraphs: [
            "Find four lines before you opt in: who qualifies, which games count, what must be completed, and when it ends. If one of those lines is missing, ask before you join.",
            "An offer that cannot be combined with another will say so. Assuming two campaigns stack is the usual reason a balance does not look like the player expected.",
          ],
        },
        {
          heading: "What this page will not do",
          paragraphs: [
            "It will not print a bonus percentage, a free-credit amount or a wagering multiple that is not on the live offer. Those numbers change, and a stale number would be worse than none.",
            "When a campaign ends, the card in the lobby is removed or marked. A blog post or a screenshot in a group chat can outlive the campaign.",
          ],
        },
      ],
      related: [
        { href: "/register", label: "Register" },
        { href: "/faq", label: "Promotion questions" },
        { href: "/terms", label: "Terms" },
      ],
    },
    popularGames: {
      seo: {
        title: "Popular Games at M2 Casino | Slots, Live, Fishing and Tables",
        description: "Browse popular M2 Casino game styles: slots, live baccarat, roulette, fishing rooms and arcade lanes, with notes on what to read first.",
      },
      eyebrow: "Lobby",
      h1: "Popular games",
      lead: "Filter by category and open the style you want. These titles are lobby highlights with original artwork. The signed-in lobby shows what you can launch today.",
      blocks: [
        {
          heading: "Choosing without rushing",
          paragraphs: [
            "If you have fifteen minutes, a short slot or an arcade lane is easier to leave than a live shoe. If you want a dealer, check the table limit before you sit so the minimum is not a surprise.",
            "Fishing rooms spend the stake as shots. Look at the shot cost on the room card and decide how many shots the session contains before you enter.",
          ],
        },
        {
          heading: "Artwork and names",
          paragraphs: [
            "The pictures on this page were drawn for the M2 guide. They are not provider screenshots. Names describe the highlight tiles used across this website so English, Chinese and Malay pages point at the same games.",
          ],
        },
      ],
      related: [
        { href: "/promotion", label: "Promotions" },
        { href: "/blog/reading-the-lobby", label: "Lobby guide" },
        { href: "/download", label: "Play on mobile" },
      ],
    },
    blog: {
      seo: {
        title: "M2 Casino Blog | Guides for Login, Lobby and Cashier",
        description: "Read M2 Casino guides on getting started, reading the lobby, cashier checks and keeping play in proportion. Articles are available in three languages.",
      },
      eyebrow: "Journal",
      h1: "Blog",
      lead: "Practical notes for players who want the lobby to make sense. Each article stays in the language you selected.",
      blocks: [
        {
          heading: "How the articles fit together",
          paragraphs: [
            "Start with registration if you are new. Read the lobby guide before you pick a game. Use the cashier checklist whenever money moves. Keep the play-habits article for the day a session runs long.",
            "They link to the main pages so you can jump from an explanation to the form or the full FAQ.",
          ],
        },
      ],
      related: [
        { href: "/faq", label: "FAQ" },
        { href: "/topup-withdrawal-guide", label: "Cashier guide" },
        { href: "/responsible-gaming", label: "Responsible gaming" },
      ],
    },
    topup: {
      seo: {
        title: "M2 Topup and Withdrawal Guide | Cashier Steps",
        description: "Learn how to top up and withdraw at M2 Casino: cashier channels, reference numbers, name checks and how to read a status.",
      },
      eyebrow: "Tutorial guide",
      h1: "Topup and withdrawal guide",
      lead: "Move money only inside the cashier. Compare the amount, the destination and the status. Keep the reference until the record closes.",
      blocks: [
        {
          heading: "Top up",
          paragraphs: [
            "Sign in and open the cashier. Choose a channel that is actually listed. You will be sent to a bank page or a wallet approval. Check the payee name there. Approve only if it matches the cashier.",
            "Online banking, FPX-style transfers, e-wallets and QR codes are the categories players ask about. Your list can be shorter. A missing channel is a cashier fact, not a bug you should bypass with a personal transfer.",
          ],
          bullets: ["Start in the cashier", "Match the amount", "Match the name", "Save the reference"],
        },
        {
          heading: "Withdrawal",
          paragraphs: [
            "Open a withdrawal to an account in your own name. If a review is required, the cashier will say so. Complete it before you count on the arrival time.",
            "There is no minute-count on this page on purpose. A promise of a fixed speed would be a guess. Follow the status, and contact support with the reference if the status stops moving.",
          ],
        },
        {
          heading: "When something looks wrong",
          paragraphs: [
            "Do not start a second payment for the same request. Note the time, the amount, the channel and the reference. Send those four facts through the official Telegram channel.",
            "Never hand a one-time bank code to a helper. A real cashier step happens on the bank or wallet screen, not inside a chat.",
          ],
        },
      ],
      related: [
        { href: "/payment-methods", label: "Payment methods" },
        { href: "/blog/cashier-checklist", label: "Cashier checklist" },
        { href: "/contact-us", label: "Contact" },
      ],
    },
    shareholder: {
      seo: {
        title: "M2 Casino Shareholder | How an Enquiry Works",
        description: "Read how an M2 Casino shareholder enquiry works, what to prepare, and why rates are confirmed in conversation rather than published as a fixed card.",
      },
      eyebrow: "Tutorial guide",
      h1: "Shareholder",
      lead: "A shareholder enquiry is a conversation about introducing play and sharing in the result under a written arrangement. The public page explains the process. It does not publish a rate.",
      blocks: [
        {
          heading: "What to prepare",
          paragraphs: [
            "Bring a short description of who you would introduce, the language you work in, and the city or region you have in mind. You do not need a business plan. You do need a way for the team to reply on the official channel.",
            "Be ready to talk about how you will explain play to adults only. Introducing minors, or advertising invented bonus figures, will end the conversation.",
          ],
        },
        {
          heading: "What happens next",
          paragraphs: [
            "The team confirms whether a shareholder arrangement is open and which written terms apply. Commission, settlement day and reports are part of that writing. If a number is not in the writing, it is not the deal.",
            "Keep records of the people you introduce in whatever form the agreement requires. Do not collect copies of their identity documents into a personal chat folder.",
          ],
        },
        {
          heading: "How this differs from an agent enquiry",
          paragraphs: [
            "Players use the two words loosely. On this site, the shareholder page is about a participation enquiry, and the agent page is about operating a small network. If you are unsure which you want, say so in the first message. Read both pages before you write.",
          ],
        },
      ],
      related: [
        { href: "/agent", label: "Agent" },
        { href: "/contact-us", label: "Contact" },
        { href: "/terms", label: "Terms" },
      ],
    },
    agent: {
      seo: {
        title: "M2 Casino Agent | Onboarding Without a Public Rate Card",
        description: "See how M2 Casino discusses agent onboarding, which details to prepare, and why commission figures are confirmed privately in writing.",
      },
      eyebrow: "Tutorial guide",
      h1: "Agent",
      lead: "Agents introduce players and help them with ordinary questions. Settlement terms are agreed in writing. This page will not invent a commission percentage.",
      blocks: [
        {
          heading: "The work itself",
          paragraphs: [
            "An agent explains how to register, how to find the cashier, and how to read a promotion. An agent does not take a player's password, does not receive a player's bank code, and does not promise a result on a game.",
            "Language matters. M2 publishes guides in English, Simplified Chinese and Bahasa Melayu. Say which language your players prefer so the right links are easy to share.",
          ],
        },
        {
          heading: "Onboarding conversation",
          paragraphs: [
            "Contact the team on the official Telegram channel and state that you want to ask about an agent arrangement. Mention your experience only if it is real. The reply will say whether onboarding is open.",
            "Ask for the settlement schedule, the report you will be able to see, and the rules about advertising. Those three answers tell you more than a single rate shouted in a group.",
          ],
          bullets: ["No player passwords", "Adults only", "Offers quoted from the lobby", "Settlement in writing"],
        },
        {
          heading: "Advertising discipline",
          paragraphs: [
            "Use the wording on the live promotion. Do not draw a new bonus figure, a guaranteed withdrawal time, or a licence claim. Those are the mistakes that confuse players and end agreements.",
            "If a player has a cashier problem, teach them the reference-number habit from the Topup Withdrawal Guide instead of paying them from your own wallet.",
          ],
        },
      ],
      related: [
        { href: "/shareholder", label: "Shareholder" },
        { href: "/promotion", label: "Promotions" },
        { href: "/contact-us", label: "Contact" },
      ],
    },
    contact: {
      seo: {
        title: "Contact M2 Casino | Telegram and Official Channels",
        description: "Contact M2 Casino through the official Telegram channel and the brand's public social accounts. Use the form to organise your question first.",
      },
      eyebrow: "Support",
      h1: "Contact us",
      lead: "The official Telegram channel is the place a person can reply. The form on this page helps you organise the question. It does not store the message on a server.",
      blocks: [
        {
          heading: "What to include",
          paragraphs: [
            "For a cashier issue, send the time, amount, channel and reference. For login, send the username and the time of the attempt, not the password. For shareholder or agent questions, say which page you read.",
            "Social accounts are for public updates. They are listed below as they are published by M2: Facebook, X, Instagram, Threads, Telegram, YouTube and Reddit.",
          ],
        },
        {
          heading: "What not to send",
          paragraphs: [
            "Do not send passwords, one-time bank codes, or full card numbers. Do not send identity documents into a public comment thread. If a check is required, the lobby will open a proper path for it.",
          ],
        },
      ],
      related: [
        { href: "/faq", label: "FAQ" },
        { href: "/topup-withdrawal-guide", label: "Cashier guide" },
        { href: "/login", label: "Login" },
      ],
    },
    faq: {
      seo: {
        title: "M2 Casino FAQ | Login, Cashier, Games and Account Help",
        description: "Answers to common M2 Casino questions about login, registration, top ups, withdrawals, mobile play, promotions and slowing down.",
      },
      eyebrow: "Help",
      h1: "Frequently asked questions",
      lead: "These answers match the guides on this website. If the player lobby shows a different cashier rule, follow the lobby and ask support with your reference number.",
      blocks: [
        {
          heading: "Still stuck",
          paragraphs: [
            "Use the contact page to shape the message, then send it on the official Telegram channel. Include the facts a person needs and leave out passwords and bank codes.",
          ],
        },
      ],
      related: [
        { href: "/contact-us", label: "Contact" },
        { href: "/topup-withdrawal-guide", label: "Cashier guide" },
        { href: "/blog", label: "Blog" },
      ],
    },
    payments: {
      seo: {
        title: "M2 Casino Payment Methods | Banking, FPX, E-wallets and QR",
        description: "Review the payment categories M2 Casino players ask about: online banking, FPX-style transfers, e-wallets and QR codes, plus cashier safety checks.",
      },
      eyebrow: "Cashier",
      h1: "Payment methods",
      lead: "These are categories, not a promise that every channel is open on every account. The cashier list inside your login is the list that applies to you.",
      blocks: [
        {
          heading: "Choosing a channel",
          paragraphs: [
            "Pick a channel whose name you recognise and whose account name you can match. A slightly unfamiliar e-wallet is not worth a shortcut. If the channel you want is absent, wait or choose another listed option.",
            "Touch 'n Go and FPX-style banking come up often because players in Malaysia already use them elsewhere. Their presence on your account is confirmed by the cashier, not by this article.",
          ],
        },
        {
          heading: "Name matching",
          paragraphs: [
            "Top ups and withdrawals should move through an account in your own name. A friend's wallet may be convenient and then become the reason a withdrawal pauses. Sort the name before the first large transfer.",
          ],
        },
      ],
      related: [
        { href: "/topup-withdrawal-guide", label: "Topup and withdrawal" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact-us", label: "Contact" },
      ],
    },
    about: {
      seo: {
        title: "About M2 Casino | A Malaysia-Focused Player Guide",
        description: "Learn what M2 Casino publishes on this website: lobby guides, account help and brand information for players in Malaysia, in three languages.",
      },
      eyebrow: "The brand",
      h1: "About M2 Casino",
      lead: "M2 is an entertainment brand for players who want slots, live tables and fishing games explained in plain language. This website is the guide. The player lobby is where sessions happen.",
      blocks: [
        {
          heading: "What you will find here",
          paragraphs: [
            "Navigation covers home, login, register, download, promotions, popular games, the blog, and a tutorial menu for cashier help, shareholder enquiries, agent enquiries, contact and FAQ. Extra pages cover payments, the brand, responsible play, privacy and terms.",
            "The same map exists in English, Simplified Chinese and Bahasa Melayu. Switching language keeps you on the same page rather than sending you to a different topic.",
          ],
        },
        {
          heading: "What we are careful not to claim",
          paragraphs: [
            "This site does not invent a licence number, a certification badge, a fixed withdrawal time, a payment partnership or a security guarantee. Where a fact lives in the lobby, the lobby wins.",
            "The orange M2 mark in the header is the original logo. Decorative reels, coins and tables elsewhere were drawn for this website.",
          ],
        },
        {
          heading: "Who the site is for",
          paragraphs: [
            "Adults, 18 and over, who can read the rules and can afford the stake they choose. If that is not you today, the Responsible Gaming page is a better destination than the register form.",
          ],
        },
      ],
      related: [
        { href: "/responsible-gaming", label: "Responsible gaming" },
        { href: "/contact-us", label: "Contact" },
        { href: "/blog", label: "Blog" },
      ],
    },
    responsible: {
      seo: {
        title: "Responsible Gaming at M2 Casino | Limits and When to Stop",
        description: "Practical responsible gaming steps for M2 Casino players: session limits, signs to stop, and how to pause an account without invented guarantees.",
      },
      eyebrow: "Play safely",
      h1: "Responsible gaming",
      lead: "Casino games are entertainment with a cost. Set the cost before you start. Leave when the time or the money you chose is gone.",
      blocks: [
        {
          heading: "Rules that keep a session ordinary",
          paragraphs: [
            "Decide a money limit and a clock time while you are still outside the lobby. Tell yourself that either limit ends the session. Do not raise the stake to recover a loss.",
            "Play sober, and do not play when you are very tired or upset. Those states make the stop harder to honour.",
          ],
          bullets: ["18+ only", "A money limit", "A time limit", "No chasing losses"],
        },
        {
          heading: "If you want to pause",
          paragraphs: [
            "Sign out, remove the home-screen icon, and withdraw any balance the cashier will release. Ask M2 support which pause tools exist inside the account. This website cannot switch them on for you.",
            "Tell a person you trust. A private promise is easier to break than one someone else knows about.",
          ],
        },
        {
          heading: "When play is no longer entertainment",
          paragraphs: [
            "If you are hiding sessions, borrowing to play, or feeling unwell when you cannot open the lobby, stop and look for help beyond a casino website. In Malaysia, a counsellor or a trusted clinic is a real starting point. International readers sometimes use GamCare (gamcare.org.uk) or BeGambleAware (begambleaware.org) for information.",
            "Nothing on this page is medical advice. It is a reminder that leaving is allowed at any moment, including mid-session.",
          ],
        },
      ],
      related: [
        { href: "/blog/keeping-play-in-proportion", label: "Play habits article" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact-us", label: "Contact" },
      ],
    },
    privacy: {
      seo: {
        title: "M2 Casino Privacy Policy | What This Website Handles",
        description: "Read how the M2 Casino website treats page visits, language choice and the forms that stay in your browser instead of a stored account.",
      },
      eyebrow: "Policy",
      h1: "Privacy policy",
      lead: "This policy describes this website. The player lobby can show a separate notice when you open an account. If the two differ on account data, the lobby notice is the one to follow for that account.",
      blocks: [
        {
          heading: "What this website processes",
          paragraphs: [
            "Pages are static guides. The language you pick is stored in the address, for example /en/ or /zh/. A login, registration or contact form checks what you typed inside the browser. Those forms are written so they do not send the password or the message to a server on this site.",
            "If you follow a link to Telegram, Facebook, X, Instagram, Threads, YouTube or Reddit, that service's own policy applies from the moment you arrive.",
          ],
        },
        {
          heading: "What we ask you not to paste",
          paragraphs: [
            "Do not put a password, a bank one-time code, or a full identity document into a form or a public comment. Support does not need them to find a cashier reference.",
          ],
        },
        {
          heading: "Retention and contact",
          paragraphs: [
            "Because the forms on this site do not submit to a database, there is no account profile here to export or delete. For data held inside the player lobby, use the contact path in that lobby or the official Telegram channel and ask what the account tools allow.",
            "This policy can be updated when the website changes. The date you care about is the one on the page you are reading, together with the lobby notice at the time you play.",
          ],
        },
      ],
      related: [
        { href: "/terms", label: "Terms" },
        { href: "/contact-us", label: "Contact" },
        { href: "/register", label: "Register" },
      ],
    },
    terms: {
      seo: {
        title: "M2 Casino Terms & Conditions | Using This Website",
        description: "Terms for using the M2 Casino website: age, offers, cashier rules, acceptable use and how lobby terms relate to these pages.",
      },
      eyebrow: "Policy",
      h1: "Terms and conditions",
      lead: "These terms cover the use of this website. Wagers, bonuses and withdrawals are governed by the rules presented in the player lobby when you open or use an account.",
      blocks: [
        {
          heading: "Who may use the site",
          paragraphs: [
            "The site is for adults aged 18 or over. If gambling is not legal for you where you are, do not register and do not play. You are responsible for that check. M2 does not ask you to evade a local rule.",
            "Do not use the site if you are seeking a guaranteed profit. Games can cost the stake you choose.",
          ],
        },
        {
          heading: "Accounts, offers and cashier",
          paragraphs: [
            "Keep your password to yourself. Activity under your username is your responsibility until you tell support that access is no longer yours. Recovery follows the lobby process.",
            "A promotion on this website describes a type of campaign. The live offer's figure, games, cap and expiry control that campaign. Cashier channels and timing follow the cashier status, not a sentence in a guide.",
          ],
        },
        {
          heading: "Acceptable use",
          paragraphs: [
            "Do not attempt to break into an account, scrape the site in a way that degrades it, or present yourself as M2 support. Do not publish invented licence claims, invented withdrawal speeds or invented bonus figures while linking to M2.",
            "Shareholder and agent conversations become binding only when they are written down by the team. A chat rumour is not a contract.",
          ],
        },
        {
          heading: "Content and changes",
          paragraphs: [
            "Guides are written to be accurate and can still go out of date. When a guide and the lobby disagree, the lobby applies to play. Pages may be updated, added or removed without a separate notice beyond the page itself.",
            "Questions about these terms can go through the Contact page and the official Telegram channel.",
          ],
        },
      ],
      related: [
        { href: "/privacy-policy", label: "Privacy" },
        { href: "/responsible-gaming", label: "Responsible gaming" },
        { href: "/promotion", label: "Promotions" },
      ],
    },
  },
  blogUi: {
    published: "Published",
    minutes: "min read",
    related: "Related reading",
    allPosts: "All articles",
  },
  notFound: {
    title: "This page is not on the table",
    text: "The link may be old. Head back to the lobby guide, or pick a page from the menu.",
  },
};

export default en;
