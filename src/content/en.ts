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
      "The methods shown in your player cashier are the ones that apply to your account. The marks named here are the ones published on the public M2 site.",
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
    showPassword: "Show",
    hidePassword: "Hide",
    checking: "Checking",
    forgotDetails: "Forgotten login details?",
    registerInstead: "New to M2? Create an account",
    loginNotice: "A valid form only checks these fields in your browser. It does not open a lobby session, and the password is not saved.",
    usernameHint: "The name you will sign in with",
    passwordHint: "At least 8 characters",
    confirmHint: "Type the same password again",
    mobileHint: "At least 8 digits",
    registerNotice: "A valid form only checks these fields in your browser. It does not create an account, and the password is not saved.",
    loginInstead: "Already registered? Sign in",
    termsBefore: "I have read the ",
    termsName: "Terms & Conditions",
    termsAnd: " and the ",
    privacyName: "Privacy Policy",
    termsAfter: ".",
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
        eyebrow: "Rollex Slot & Casino",
        title: "Rollex is on the M2 floor",
        text: "The public M2 banner presents Rollex as a slot and casino collection. Open the lobby to see the titles your account can launch.",
        cta: "Play Now",
        href: "/popular-games",
      },
      {
        eyebrow: "Daily rebate",
        title: "Up to 10% back, as printed",
        text: "The published artwork states a daily rebate of up to 10%, with settlement from 12 PM to 11:59 AM and credit at 3 PM. The live offer is the record for your account.",
        cta: "View the offer",
        href: "/promotion",
      },
      {
        eyebrow: "Fa Chai",
        title: "Slots, fishing and arcade",
        text: "The Fa Chai launch banner covers slots, fishing and arcade games. The signed-in lobby lists what you can open today.",
        cta: "See the games",
        href: "/popular-games",
      },
    ],
    strip: ["Slots", "Live tables", "Fishing", "Jackpots", "Arcade", "Table games"],
    popularTitle: "Popular games in the lobby",
    popularLead:
      "Each card uses the promotional artwork published for that title. The signed-in lobby confirms what you can launch today.",
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
      "These tiles are provider artwork published on the public M2 site. A tile is not an exclusive contract. The signed-in lobby shows what your account can open.",
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
      "These three campaigns are the ones printed on the public M2 banners. Read the live offer in the lobby before you opt in.",
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
      "Touch 'n Go, FPX, GrabPay and DuitNow appear on the public M2 site. Your cashier lists the channels open for your account.",
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
    { slug: "fortune-tiger", name: "Fortune Tiger", category: "Slots", blurb: "The tiger reel published with the M2 lobby artwork. Read the paytable before you raise the stake." },
    { slug: "zeus", name: "Zeus", category: "Slots", blurb: "A myth reel shown in the public M2 game art. Feature rules sit inside the game." },
    { slug: "wisdom-athena-1000", name: "Wisdom of Athena 1000", category: "Slots", blurb: "Athena artwork from the published lobby tile. Check the help panel for how the feature pays." },
    { slug: "mahjong-ways-2", name: "Mahjong Ways 2", category: "Slots", blurb: "A mahjong ways tile from the public artwork. Cascades and multipliers are explained in the paytable." },
    { slug: "wild-ape", name: "Wild Ape", category: "Slots", blurb: "The ape character published on the M2 game tile. Confirm the stake steps before you start." },
    { slug: "ways-of-the-qilin", name: "Ways of the Qilin", category: "Slots", blurb: "Qilin artwork from the published lobby tile. The feature round is described inside the game." },
    { slug: "mahjong-coming", name: "Mahjong Coming", category: "Slots", blurb: "A mahjong tile published with the M2 game art. Read the rules on the tile you open." },
    { slug: "super-plus", name: "Super Plus", category: "Slots", blurb: "Crown and scatter artwork published for this title. The paytable names each symbol." },
    { slug: "monkey", name: "Monkey", category: "Slots", blurb: "The monkey character on the published game tile. This is a game title, separate from the Monkey King provider tile." },
  ],
  promos: [
    {
      slug: "rollex",
      title: "Rollex Slot & Casino",
      summary: "The public M2 banner presents Rollex as a slot and casino collection. The signed-in lobby shows which titles are available.",
      points: ["Printed on the public M2 banner", "Slot and casino collection", "Availability is the signed-in lobby"],
    },
    {
      slug: "daily-rebate",
      title: "Daily rebate",
      summary: "The published artwork states a daily rebate of up to 10%. Settlement is shown as 12 PM to 11:59 AM, with credit at 3 PM. The live cashier note applies to your account.",
      points: ["Up to 10% as printed", "Settlement window on the banner", "Credited at the daily time shown"],
    },
    {
      slug: "fachai",
      title: "Fa Chai launch",
      summary: "The public banner announces a Fa Chai launch covering slots, fishing and arcade games. The lobby lists the titles you can open.",
      points: ["Slots, fishing and arcade on the banner", "Launch artwork published by M2", "Titles confirmed in the lobby"],
    },
  ],
  payments: [
    {
      name: "Touch 'n Go",
      text: "The Touch 'n Go eWallet mark is shown on the public M2 site. The cashier lists whether this channel is open. Use a wallet in your own name.",
    },
    {
      name: "FPX",
      text: "The FPX mark is shown on the public M2 site. Match the amount and the account name on the bank screen before you approve the transfer.",
    },
    {
      name: "GrabPay",
      text: "The GrabPay mark is shown on the public M2 site. The cashier shows whether this wallet is available for your account.",
    },
    {
      name: "DuitNow",
      text: "The DuitNow mark is shown on the public M2 site. Transfer only from the cashier session you just opened.",
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
            "Popular tiles are a starting shelf, not a ranking of what will pay. Each card uses the promotional artwork published for that title.",
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
        "M2 Casino brings slots, live tables, fishing rooms and arcade games into one lobby aimed at players who use English, Chinese or Malay. The brand mark on this site is the original M2 logo. Game and provider pictures are the promotional artwork published on the public M2 site.",
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
        "Promotion pages describe the campaigns printed on the public M2 banners: Rollex Slot and Casino, a daily rebate of up to 10%, and the Fa Chai launch. If this website and the lobby ever disagree, follow the lobby.",
        "Payment notes name Touch 'n Go, FPX, GrabPay and DuitNow because those marks appear on the public M2 site. Pair them with the cashier checklist so references and account names stay tidy. If you need to slow down, the Responsible Gaming page is the right next read.",
      ],
    },
  ],
  pages: {
    login: {
      seo: {
        title: "Welcome Back | M2 Casino Login",
        description: "Sign in to M2 Casino with your username and password. Read how account access works, what to try when login fails, and how to reach support. This page does not store your password.",
      },
      eyebrow: "Member access",
      h1: "Welcome Back to M2 Casino",
      lead: "Use the username and password from registration. The form below checks those fields on this device. The player lobby is where the session starts.",
      blocks: [
        {
          heading: "What this page does",
          paragraphs: [
            "It checks that a username is present and that the password has at least 8 characters. It does not open a lobby session and it does not keep the password.",
          ],
        },
      ],
      related: [
        { href: "/register", label: "Create an account" },
        { href: "/download", label: "Download" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact-us", label: "Contact Us" },
        { href: "/topup-withdrawal-guide", label: "Topup Withdrawal Guide" },
      ],
      guide: {
        formTitle: "Sign in",
        artAlt: "Rollex Slot and Casino promotional artwork",
        points: [
          "Use the username from registration, without extra spaces.",
          "Use a password of at least 8 characters.",
          "This page never writes the password into browser storage.",
        ],
        accessTitle: "How to access your account",
        accessLead: "An existing account uses the same details you registered. Check them before you try again.",
        steps: [
          { title: "Open the official address", text: "Type the site address yourself or open a bookmark you saved. A login link in a message from someone you do not know is not a safe way in." },
          { title: "Enter the registered username", text: "Use the name you created. A capital letter, a missing character, or a space at the end will fail the check." },
          { title: "Enter the password", text: "Retype it rather than pasting from an old note if you are unsure. Caps lock is the usual reason a correct password is rejected." },
          { title: "Continue in the player lobby", text: "A valid form on this page only confirms the fields. Sign in again inside the official player lobby. This website does not start that session for you." },
        ],
        troubleTitle: "When login does not work",
        troubleLead: "Pick the situation that matches what you see. None of these cards can reset a password or lift a lobby restriction by themselves.",
        troubles: [
          { id: "login-incorrect", title: "Incorrect username or password", text: "A mismatch is rejected. Check the username, turn caps lock off, and try once more slowly.", steps: ["Retype the username without a trailing space.", "Confirm caps lock is off.", "Use the password from registration, not an email or bank password."], href: "/contact-us", link: "Contact support" },
          { id: "login-forgotten", title: "Forgotten login details", text: "This website cannot email a reset link or reveal a password. If the player lobby shows a recovery step, use that screen. Otherwise write to support with your username and the time you tried.", steps: ["Do not send the password, a one-time code, or a photo of a bank app.", "Send the username and the time of the attempt.", "Wait for the official reply before trying from a new device."], href: "/contact-us", link: "Contact support" },
          { id: "login-page", title: "Unable to open the login page", text: "If this page stays blank, confirm the address first. Then try a current browser or the home-screen shortcut you added yourself.", steps: ["Check the address character by character.", "Reload once before switching networks.", "Open M2 from a bookmark or a home-screen icon you created."], href: "/download", link: "Download and home screen" },
          { id: "login-browser", title: "Browser or connection problems", text: "An outdated browser or a blocked script can stop the form from responding. Update the browser, then reload this page.", steps: ["Use a current version of Chrome, Edge, or Safari.", "Pause an aggressive script blocker for this tab only.", "Try another network if the page never finishes loading."], href: "/download", link: "Browser setup" },
          { id: "login-restricted", title: "Account temporarily restricted", text: "A restriction is decided in the player lobby, not on this page. This site cannot remove it or promise a time when it will clear.", steps: ["Read any notice shown in the lobby.", "Contact support with the username and the time of the attempt.", "Do not open a second account to get around the notice."], href: "/contact-us", link: "Contact support" },
        ],
        securityTitle: "Account security",
        securityLead: "A short habit protects the account better than a long password written on a shared computer.",
        security: [
          { title: "Use the official address", text: "Type it or use your own bookmark. Lookalike pages are a common way usernames are collected." },
          { title: "Avoid suspicious links", text: "Do not sign in from a link sent by a stranger in chat, SMS, or email." },
          { title: "Keep credentials private", text: "M2 will not ask for the password in Telegram, SMS, or email. Do not send a one-time code either." },
          { title: "Use a unique password", text: "Do not reuse the password from email or banking. Eight characters is the minimum this form accepts." },
          { title: "Sign out on shared devices", text: "Leave the remember option off on a computer that other people use, and sign out in the lobby when you finish." },
          { title: "Do not save passwords in public", text: "Browser password prompts on a public computer should be declined. This page stores a username only if you ask it to." },
        ],
        faqTitle: "Login questions",
        faqLead: "Short answers that match what this website actually does.",
        faqs: [
          { q: "How do I log in to my M2 account?", a: "Open the official site, enter the username and password from registration, and continue. This page checks the fields locally. The player lobby is where you sign in for a session." },
          { q: "What should I do if my password is incorrect?", a: "Turn off caps lock, retype the password, and try once more. This page cannot show the saved password because it never stores one." },
          { q: "Can I remember my username?", a: "Yes. The checkbox keeps the username on this device only. The password is not written to browser storage." },
          { q: "Why can't I access my account?", a: "The usual causes are a mistyped username, caps lock, a page that did not finish loading, or a restriction shown in the lobby. This website cannot see the lobby status." },
          { q: "What should I do if I encounter login errors?", a: "Reload the official page, update the browser, and try once more. If the form is valid here but the lobby still refuses the account, contact support with the username and the time. Do not send the password." },
          { q: "How can I contact customer support?", a: "Use the Contact page and the official Telegram channel. Describe the username and the time of the attempt. Do not include the password or a one-time code." },
          { q: "Can I log in using a mobile device?", a: "Yes. The same username works in a current mobile browser. You can also add a home-screen shortcut from the Download page. Install a file only when the official lobby or the official Telegram channel tells you to." },
        ],
        relatedTitle: "Continue from here",
        related: [
          { href: "/register", label: "Create an account", text: "Open an account if you do not have a username yet." },
          { href: "/download", label: "Download", text: "Add M2 to a phone home screen or open it in a desktop browser." },
          { href: "/faq", label: "FAQ", text: "Read the wider answers on cashier, play, and account questions." },
          { href: "/contact-us", label: "Contact Us", text: "Reach the team when the lobby will not accept the account." },
          { href: "/topup-withdrawal-guide", label: "Topup Withdrawal Guide", text: "See the cashier checks after you are signed in at the lobby." },
        ],
      },
    },
    register: {
      seo: {
        title: "Create Your M2 Account | M2 Casino Register",
        description:
          "Create an M2 account with a username, a password of at least 8 characters, and a mobile number. This page checks the fields locally. The player lobby opens the account.",
      },
      eyebrow: "New member registration",
      h1: "Create Your M2 Account",
      lead: "Choose a username, a password of at least 8 characters, and a mobile number you control. Confirm you are 18 or older, then finish opening the account in the player lobby.",
      blocks: [
        {
          heading: "What this page does",
          paragraphs: [
            "The form checks the fields in your browser. It does not create a lobby account and it does not store the password.",
          ],
        },
      ],
      related: [
        { href: "/login", label: "Login" },
        { href: "/download", label: "Download" },
        { href: "/popular-games", label: "Popular Games" },
        { href: "/faq", label: "FAQ" },
        { href: "/contact-us", label: "Contact Us" },
        { href: "/topup-withdrawal-guide", label: "Topup Withdrawal Guide" },
      ],
      guide: {
        formTitle: "Create account",
        points: [
          "A username, a password of at least 8 characters, and a mobile number with at least 8 digits.",
          "Tick the age box and the terms box yourself. Both start empty.",
          "This page never writes the password into browser storage.",
        ],
        ageNote: "18+ only. This page cannot check an identity document. The box is your confirmation.",
        artAlt: "M2 daily rebate promotional artwork",
        processTitle: "How registration works",
        processLead: "Four steps. The first three happen on this page. The account itself is opened in the player lobby.",
        steps: [
          {
            title: "Prepare your details",
            text: "Have a username, a password of at least 8 characters, and a mobile number with at least 8 digits. You will also confirm your age and accept the terms yourself.",
          },
          {
            title: "Complete the registration form",
            text: "Type each field. Use Show if you want to compare the password with the confirmation. Leave both boxes unticked until you have read them.",
          },
          {
            title: "Review your information",
            text: "Check the username for extra spaces, confirm the two passwords match, and count the mobile digits. This page cannot correct a number for you after you leave.",
          },
          {
            title: "Follow official account instructions",
            text: "A valid form here only checks the fields. Any extra confirmation happens in the player lobby, and only if that lobby asks for it. This website does not create the account.",
          },
        ],
        requirementsTitle: "What the form accepts",
        requirementsLead: "These are the checks this page actually runs. It does not add extra character rules.",
        requirements: [
          {
            title: "Username requirements",
            text: "The username cannot be empty. This page does not set a minimum length or a character list, and it cannot tell you if the name is already taken. The player lobby makes that decision.",
          },
          {
            title: "Password security",
            text: "Use at least 8 characters. The confirmation must match exactly, including capitals. The password is not saved in this browser.",
          },
          {
            title: "Mobile number",
            text: "Enter at least 8 digits. Spaces, dashes, and other symbols are ignored. A shorter number is rejected. This page does not send a text message.",
          },
          {
            title: "Age eligibility",
            text: "You must tick the 18+ box. It is not ticked for you. This page cannot check a document or a date of birth.",
          },
        ],
        troubleTitle: "When registration does not go through",
        troubleLead: "Pick the message that matches what you see. None of these cards can create the account or reset a password.",
        troubles: [
          {
            id: "register-username",
            title: "Username already exists",
            text: "This page cannot look up names, so it cannot tell you that a username is taken. If the player lobby says the name is already used, choose a different one there.",
            steps: [
              "Try a different username in the lobby.",
              "Do not open another account to get around a notice.",
              "If you believe the name is yours, contact support with that username and the time. Do not send the password.",
            ],
            href: "/contact-us",
            link: "Contact support",
          },
          {
            id: "register-password",
            title: "Password does not match",
            text: "The confirmation must be the same as the password, and both need at least 8 characters.",
            steps: [
              "Use Show on each field and compare them.",
              "Retype both fields if you are unsure.",
              "Caps lock changes the password. Check it before you continue.",
            ],
            href: "/contact-us",
            link: "Contact support",
          },
          {
            id: "register-mobile",
            title: "Invalid mobile number",
            text: "The check keeps digits only. Fewer than 8 digits is rejected. This page does not send a code and cannot prove the number is yours.",
            steps: [
              "Remove letters. Spaces and dashes are ignored.",
              "Use a number you control.",
              "If the lobby later rejects the number, contact support with the username only.",
            ],
            href: "/contact-us",
            link: "Contact support",
          },
          {
            id: "register-failed",
            title: "Form submission failed",
            text: "Nothing is sent to a server. If a message appears under a field, that field still needs a correction. A refusal inside the player lobby is not decided on this page.",
            steps: [
              "Read the message under the field and correct it.",
              "Tick both boxes yourself. They start empty.",
              "If the lobby refuses the account, contact support with the username and the time. Do not send the password.",
            ],
            href: "/contact-us",
            link: "Contact support",
          },
          {
            id: "register-unable",
            title: "Unable to complete registration",
            text: "This website does not finish account opening. After the local check, continue in the official player lobby and follow only the instructions shown there.",
            steps: [
              "Confirm you are on the official address.",
              "Reload once, or try a current browser.",
              "Contact support if the lobby stops without a clear notice. Do not send a password or a one-time code.",
            ],
            href: "/contact-us",
            link: "Contact support",
          },
        ],
        securityTitle: "Protect the new account",
        securityLead: "A careful start matters more than a long password written where someone else can read it.",
        security: [
          { title: "Use a unique password", text: "Do not reuse the password from email or banking. Eight characters is the minimum this form accepts." },
          { title: "Never share login details", text: "M2 will not ask for the password in Telegram, SMS, or email. Do not send a one-time code either." },
          { title: "Use your own contact information", text: "The mobile number should be one you control. An account opened in someone else's name is hard to match at the cashier." },
          { title: "Avoid suspicious registration links", text: "Do not open an account from a link sent by a stranger in chat, SMS, or email." },
          { title: "Open the official address yourself", text: "Type the site address or use a bookmark you saved. Lookalike pages collect usernames." },
          { title: "Keep personal information private", text: "Do not post the username, mobile number, or password in a group chat. This page does not store the password." },
        ],
        faqTitle: "Registration questions",
        faqLead: "Short answers that match what this website actually does.",
        faqs: [
          { q: "How do I register an M2 account?", a: "Open the official site, enter a username, a password of at least 8 characters, the same password again, and a mobile number with at least 8 digits. Tick the age box and the terms box, then continue. This page checks those fields locally. The player lobby is where the account is opened." },
          { q: "What information is required?", a: "A username, a password, a matching confirmation, and a mobile number. You also confirm that you are 18 or older and that you have read the Terms & Conditions and Privacy Policy. This page does not ask for a bank account or an identity document." },
          { q: "Why must I confirm my age?", a: "The 18+ box is required before the form can pass its local check. It starts unticked. This page cannot verify a document." },
          { q: "What should I do if my username is unavailable?", a: "This page cannot see which names are taken. If the player lobby says the username exists, choose a different one there. If you believe the name is already yours, contact support and do not send the password." },
          { q: "Why does my password not match?", a: "The confirmation field must be identical to the password, including capital letters. Both need at least 8 characters. Use Show on each field to compare them." },
          { q: "What happens if registration fails?", a: "Messages under the fields mean those fields still fail the local check. This page does not send the form to a server. If the player lobby refuses the account, contact support with the username and the time." },
          { q: "Can I register using a mobile phone?", a: "Yes. The same form works in a current mobile browser. You can add a home-screen shortcut from the Download page after you have an account. Install a file only when the official lobby or the official Telegram channel tells you to." },
          { q: "How do I contact support?", a: "Use the Contact page and the official Telegram channel. Send the username and the time you tried. Do not include the password, a one-time code, or a photo of a bank app." },
        ],
        relatedTitle: "Continue from here",
        related: [
          { href: "/login", label: "Login", text: "Sign in after the player lobby has opened the account." },
          { href: "/download", label: "Download", text: "Add M2 to a phone home screen or open it in a desktop browser." },
          { href: "/popular-games", label: "Popular Games", text: "See the published lobby titles before you play." },
          { href: "/faq", label: "FAQ", text: "Read the wider answers on cashier, play, and account questions." },
          { href: "/contact-us", label: "Contact Us", text: "Reach the team when the lobby will not open the account." },
          { href: "/topup-withdrawal-guide", label: "Topup Withdrawal Guide", text: "See the cashier checks after you are signed in at the lobby." },
        ],
      },
    },
    download: {
      seo: {
        title: "Experience M2 Casino Anywhere | Home Screen and Desktop",
        description:
          "Open M2 Casino in Chrome, Safari or Edge and save a home-screen icon. There is no store app on this page. Phone and desktop show the same website.",
      },
      eyebrow: "M2 on your devices",
      h1: "Experience M2 Casino Anywhere",
      lead: "Open M2 in the browser on your phone or computer, then save a home-screen icon if you want one. This page does not offer a store app or an APK.",
      blocks: [
        {
          heading: "What this page does",
          paragraphs: ["It shows how to open M2 in a browser and add a home-screen shortcut. It does not host an install file."],
        },
      ],
      related: [
        { href: "/popular-games", label: "Popular Games" },
        { href: "/register", label: "Register" },
        { href: "/login", label: "Login" },
      ],
      guide: {
        badges: ["Android", "iOS", "Desktop"],
        explore: "Explore games",
        registerCta: "Registration guide",
        homeAlt: "M2 homepage on a phone browser",
        lobbyAlt: "M2 popular games row on a phone",
        gamesAlt: "M2 game list on a phone",
        desktopAlt: "M2 homepage in a desktop browser",
        androidTitle: "Android, in Chrome",
        androidLead: "Save a home-screen icon from Chrome. This page does not host an APK. Ignore install files sent by people you do not know.",
        androidSteps: [
          "Open this website in Chrome.",
          "Tap the Chrome menu.",
          "Choose Add to Home screen, or Install app if Chrome shows it.",
          "Open M2 from the icon you added.",
        ],
        iosTitle: "iPhone, in Safari",
        iosLead: "Safari can keep this site on the home screen. There is no separate iOS app file to install.",
        iosSteps: [
          "Open this website in Safari.",
          "Tap the Share button.",
          "Choose Add to Home Screen.",
          "Name the icon M2 and tap Add.",
        ],
        desktopTitle: "Desktop browsers",
        desktopLead: "Chrome, Edge and Safari on a computer open this same website. Keep the browser current.",
        desktopSteps: [
          "Open M2 in Chrome, Edge or Safari.",
          "Sign in inside the player lobby when you want a session.",
          "If a game tile stays blank, allow scripts for this tab only.",
          "Turn your usual protection back on for other sites.",
        ],
        installTitle: "How to keep M2 on your home screen",
        installLead: "The pictures are the real M2 site. The Add to Home Screen command is in the browser menu, not a file on this page.",
        install: [
          { title: "Open the official site", text: "Type the address yourself or use a bookmark you saved." },
          { title: "Open the browser menu", text: "In Chrome, use the menu. In Safari, use Share." },
          { title: "Choose Add to Home Screen", text: "Use that command when the browser shows it. Chrome may say Install app." },
          { title: "Open the shortcut", text: "The icon opens this website. It is not a store app." },
        ],
        playTitle: "What the site shows",
        playLead: "These tiles are published M2 artwork. The signed-in lobby shows what your account can launch today.",
        slotsTitle: "Popular slots",
        liveTitle: "Live-table artwork",
        liveLead: "These provider images are published on the public M2 site. A tile is not an exclusive contract.",
        fishingTitle: "Fishing and arcade",
        fishingLead: "The Fa Chai banner published by M2 covers slots, fishing and arcade games. The lobby lists the titles you can open.",
        providersTitle: "More published provider art",
        providersLead: "Names and pictures below are the provider tiles on the public M2 site. Availability is confirmed in the lobby.",
        benefitsTitle: "What the shortcut gives you",
        benefits: [
          { title: "Open it in the browser", text: "Chrome, Safari and Edge open this website. This page does not install a private app." },
          { title: "A home-screen icon", text: "The icon is a shortcut you create. Online, it opens the current site." },
          { title: "A phone layout", text: "The same pages reflow on a narrow screen, including the game row." },
          { title: "The published game tiles", text: "Slots, live-table artwork and the Fa Chai banner are on the site you just saved." },
          { title: "The same website", text: "Phone and desktop open this site. A session still starts in the player lobby." },
        ],
        troubleTitle: "If the shortcut misbehaves",
        troubleLead: "Try the matching note. None of these steps installs a file or unlocks an account.",
        troubles: [
          { title: "The website does not open", text: "Check the address character by character, reload once, then try another network." },
          { title: "Add to Home Screen is missing", text: "Update Chrome or Safari. The menu wording changes by version. Use a current browser." },
          { title: "The shortcut does not open", text: "The icon needs a connection. Remove it and add it again from the official site. Do not replace it with a file from a stranger." },
          { title: "The page looks wrong", text: "Update the browser. If a tile stays blank, allow scripts for this tab only, then restore your usual protection." },
          { title: "The page never finishes", text: "Reload once. If it still stalls, open M2 in another supported browser and contact support with the time. Do not send a password." },
        ],
        faqTitle: "Download questions",
        faqLead: "Short answers that match what this website actually does.",
        faqs: [
          { q: "Does M2 require an app installation?", a: "No. This page does not offer a store app or an APK. Open the site in a browser. Add a home-screen icon only if you want a shortcut." },
          { q: "How do I add M2 to my Android home screen?", a: "Open this site in Chrome, tap the Chrome menu, and choose Add to Home screen or Install app if Chrome shows it." },
          { q: "How do I add M2 to my iPhone home screen?", a: "Open this site in Safari, tap Share, then Add to Home Screen. Name the icon M2." },
          { q: "Can I use M2 on a desktop?", a: "Yes. Chrome, Edge and Safari on a computer open the same website. Sign in inside the player lobby for a session." },
          { q: "Which browsers are supported?", a: "Use a current Chrome, Edge or Safari. An outdated browser is a common reason a game tile stays blank." },
          { q: "What should I do if the shortcut does not work?", a: "Check your connection, then remove the icon and add it again from the official site. Do not install a file sent by someone you do not know." },
        ],
        relatedTitle: "Continue from here",
        related: [
          { href: "/popular-games", label: "Popular Games", text: "See the published lobby titles." },
          { href: "/register", label: "Register", text: "See what the account form actually checks." },
          { href: "/login", label: "Login", text: "Return to an account you already opened in the lobby." },
          { href: "/faq", label: "FAQ", text: "Read the wider answers on cashier, play and account questions." },
          { href: "/contact-us", label: "Contact Us", text: "Write in if the official site will not load." },
        ],
      },
    },
    promotion: {
      seo: {
        title: "Promotions at M2 Casino | Rollex, Daily Rebate and Fa Chai",
        description: "Review the campaigns printed on M2's public banners: Rollex Slot & Casino, a daily rebate of up to 10%, and the Fa Chai launch. Confirm eligibility in the player lobby.",
      },
      eyebrow: "Published on M2",
      h1: "Promotions at M2 Casino",
      lead: "Rollex Slot & Casino, a daily rebate of up to 10%, and the Fa Chai launch are the campaigns printed on the public banners. The player lobby confirms what applies to your account.",
      blocks: [
        {
          heading: "Where the figures come from",
          paragraphs: [
            "The rebate lines repeated here are the ones printed on the banner: up to 10%, settlement from 12 PM to 11:59 AM, and credit daily at 3 PM. Other conditions are confirmed in the player lobby.",
          ],
        },
      ],
      related: [
        { href: "/popular-games", label: "Popular Games" },
        { href: "/register", label: "Register" },
        { href: "/terms", label: "Terms" },
      ],
      guide: {
        explore: "See the campaigns",
        viewDetails: "View details",
        heroAlt: "Rollex Slot and Casino promotional banner",
        lobbyAlt: "M2 lobby on a phone",
        categoriesTitle: "Browse by campaign type",
        categoriesLead: "Each group matches a line on the published banners. There is no empty shelf.",
        categories: [
          { id: "featured", label: "Featured promotions", text: "All three published banners" },
          { id: "rebate", label: "Rebates", text: "The daily rebate banner" },
          { id: "launch", label: "Game launches", text: "The Fa Chai launch" },
          { id: "slots", label: "Slot promotions", text: "Rollex and the Fa Chai slot line" },
          { id: "fishing", label: "Fishing and arcade", text: "Named on the Fa Chai banner" },
        ],
        featuredTitle: "Featured promotions",
        featuredLead: "Each card uses the banner M2 published for that campaign.",
        empty: "No published banner sits in this group.",
        highlightsTitle: "Campaign by campaign",
        highlightsLead: "A closer look at each banner. Availability is still decided in the lobby.",
        campaigns: [
          {
            slug: "rollex",
            title: "Rollex Slot & Casino",
            imageAlt: "Rollex Slot and Casino banner, top local games at M2",
            summary: "The banner presents Rollex as a slot and casino collection of top local games at M2.",
            points: ["Slot and casino collection", "Top local games, as printed", "Availability is the signed-in lobby"],
            detail: "The artwork reads “Rollex Slot & Casino” and “Top Local Games, Only at Our M2.” It does not print a bonus amount, a wagering multiple, or an end date. The signed-in lobby shows which titles are available.",
            categories: ["slots"],
          },
          {
            slug: "daily-rebate",
            title: "Daily rebate",
            imageAlt: "Daily rebate banner stating up to 10 percent, the settlement window, and a 3 PM credit",
            summary: "The banner prints a daily rebate of up to 10%, with a settlement window and a credit time.",
            points: ["Up to 10%, as printed", "Settlement 12 PM – 11:59 AM", "Credited daily at 3 PM"],
            detail: "Those three lines are the whole published offer. This page does not add tiers, a formula, or a sample payout. Eligibility for your account is confirmed in the player lobby.",
            categories: ["rebate"],
          },
          {
            slug: "fachai",
            title: "Fa Chai launch",
            imageAlt: "Fa Chai launch banner covering slots, fishing and arcade",
            summary: "The banner announces the Fa Chai launch and names slots, fishing and arcade.",
            points: ["Launch artwork published by M2", "Slot, fishing and arcade, as printed", "Titles confirmed in the lobby"],
            detail: "The banner says “Fa Chai Launch Now” and “Slot. Fishing. Arcade.” It does not name a bonus. The signed-in lobby lists the titles you can open.",
            chips: ["Slots", "Fishing", "Arcade"],
            categories: ["launch", "slots", "fishing"],
          },
        ],
        stepsTitle: "How to take part",
        stepsLead: "Reading a banner on this page does not switch a campaign on.",
        steps: [
          { title: "Review the published campaign", text: "Start with the banner here, then open the same campaign in the player lobby." },
          { title: "Check eligibility and the official terms", text: "The lobby is where qualification, games and dates are confirmed. This page only repeats lines printed on the artwork." },
          { title: "Follow the lobby instructions", text: "Use the steps shown in your account. A banner on this website does not activate an offer by itself." },
          { title: "Check the campaign status", text: "Open the account and read the status shown for that campaign. The lobby is the record to trust." },
        ],
        termsTitle: "Terms and eligibility",
        termsLead: "Only the lines printed on the banners are repeated here. Anything else is confirmed in the player lobby.",
        terms: [
          { title: "Eligibility", text: "The banners do not list who qualifies. Check the campaign in the player lobby before you join." },
          { title: "Applicable games", text: "Rollex is presented as a slot and casino collection. Fa Chai names slots, fishing and arcade. The rebate banner does not name games." },
          { title: "Promotion period", text: "No start or end date is printed on these banners. The lobby shows whether a campaign is still open." },
          { title: "Reward conditions", text: "The rebate banner states up to 10%, settlement from 12 PM to 11:59 AM, and credit daily at 3 PM. The other banners do not print a reward figure." },
          { title: "Combination", text: "None of the banners say whether campaigns can be used together. Read the live offer before assuming two can stack." },
          { title: "Settlement", text: "The rebate banner prints the settlement window and the 3 PM credit time. Any other settlement rule is in the lobby." },
        ],
        rebateTitle: "Daily rebate, as printed",
        rebateLead: "The figures below are the words on the official banner.",
        rebateFacts: [
          { label: "Rebate", value: "Up to 10%" },
          { label: "Settlement", value: "12 PM – 11:59 AM" },
          { label: "Credited", value: "Daily 3 PM" },
        ],
        rebateNote: "Eligibility and any extra conditions for your account are confirmed in the player lobby. This page does not add rebate tiers or a worked example.",
        playTitle: "Games on the published shelves",
        playLead: "These covers are lobby tiles M2 already published. The Fa Chai banner is the one that names fishing and arcade.",
        slotsTitle: "Popular slots",
        fishingTitle: "Fishing and arcade",
        fishingLead: "The Fa Chai banner groups slots, fishing and arcade. The lobby lists the titles you can open. No separate fishing title is printed on that banner.",
        gamesCta: "Explore games",
        faqTitle: "Promotion questions",
        faqLead: "Short answers that stay with the published banners and the player lobby.",
        faqs: [
          { q: "Where can I find the latest promotions?", a: "On this page and inside the player lobby. If the two differ, follow the lobby. A screenshot in a chat can outlast a campaign." },
          { q: "How do I check promotion eligibility?", a: "Open the campaign in the player lobby. The banners on this page do not list who qualifies." },
          { q: "Can two promotions be combined?", a: "The published banners do not say. Read the live offer before you assume two campaigns can stack." },
          { q: "Where can I find the promotion terms?", a: "Printed lines are on the banners. The terms that apply to your account are in the player lobby and on the terms page." },
          { q: "How can I check Daily Rebate information?", a: "The banner states up to 10%, settlement from 12 PM to 11:59 AM, and credit daily at 3 PM. Confirm your own account in the lobby." },
          { q: "What happens when a campaign ends?", a: "Trust the status in the player lobby. A banner on this website can remain until the public artwork changes." },
          { q: "Where can I get help with promotion questions?", a: "Use Contact Us and name the campaign. Do not send a password." },
        ],
        relatedTitle: "Continue from here",
        related: [
          { href: "/popular-games", label: "Popular Games", text: "Open the published lobby tiles." },
          { href: "/register", label: "Register", text: "See what the account form checks." },
          { href: "/login", label: "Login", text: "Return to an account you already opened." },
          { href: "/faq", label: "FAQ", text: "Read the wider cashier and account answers." },
          { href: "/contact-us", label: "Contact Us", text: "Ask about a named campaign." },
          { href: "/terms", label: "Terms", text: "Read the site terms beside the live offer." },
        ],
        closeTitle: "Open the lobby when you are ready",
        closeLead: "The banners show what M2 has published. Games and account offers are confirmed after you sign in.",
        registerCta: "Registration guide",
      },
    },
    popularGames: {
      seo: {
        title: "Popular Games at M2 Casino | Slots, Live, Fishing and Tables",
        description: "Browse popular M2 Casino game styles: slots, live baccarat, roulette, fishing rooms and arcade lanes, with notes on what to read first.",
      },
      eyebrow: "Lobby",
      h1: "Popular games",
      lead: "Filter the published lobby tiles and open the title you want. The signed-in lobby shows what you can launch today.",
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
            "The pictures are the promotional tiles published for these titles. English, Chinese and Malay pages use the same names so they point at the same games.",
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
            "Touch 'n Go, FPX, GrabPay and DuitNow are the marks published on the public M2 site. Your list can be shorter. A missing channel is a cashier fact, not a bug you should bypass with a personal transfer.",
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
        title: "M2 Casino Payment Methods | Touch 'n Go, FPX, GrabPay and DuitNow",
        description: "See the payment marks published on the public M2 site: Touch 'n Go, FPX, GrabPay and DuitNow, plus the cashier checks to make before you approve a transfer.",
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
            "The orange M2 mark in the header is the original logo. Campaign, game and provider pictures elsewhere are artwork published on the public M2 site.",
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
