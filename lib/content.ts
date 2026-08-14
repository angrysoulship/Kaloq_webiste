// Single source of truth for all site copy.
// Confirm real-world product, partner, compliance, and availability claims
// before publishing them. Keep public copy scoped to verified capabilities.

export const site = {
  name: "Kaloq",
  domain: "[TODO: production domain]",
  description:
    "A USD-first account for stablecoin funding, spending, and the next generation of FX.",
};

export type NavLink = { label: string; href: string };
export type NavDropdownItem = { label: string; description: string; href: string };

export const nav = {
  products: [
    {
      label: "Kaloq Card",
      description: "Spend your Kaloq balance on everyday purchases.",
      href: "/products/card",
    },
    {
      label: "Global Account",
      description: "Hold USD and move money between bank accounts and stablecoins.",
      href: "/products/global-account",
    },
  ] satisfies NavDropdownItem[],
  solutions: [
    {
      label: "For Stablecoin Earners",
      description: "Turn on-chain income into everyday spending",
      href: "/solutions/stablecoin-earners",
    },
    {
      label: "For Cross-border Living",
      description: "Keep a dollar balance while you spend locally",
      href: "/solutions/cross-border-living",
    },
    {
      label: "For Dollar Balance Holders",
      description: "Hold dollars. Spend as needed.",
      href: "/solutions/dollar-balance-holders",
    },
    {
      label: "For Global Online Spending",
      description: "Use your stablecoin balance for global online purchases",
      href: "/solutions/global-online-spending",
    },
  ] satisfies NavDropdownItem[],
  pricing: { label: "Pricing", href: "/pricing" } satisfies NavLink,
  demo: { label: "Get started", href: "https://card.kaloq.com" },
};

export const footer = {
  columns: [
    {
      heading: "Products",
      links: [
        { label: "Kaloq Card", href: "/products/card" },
        { label: "Global Account", href: "/products/global-account" },
      ] as NavLink[],
    },
    {
      heading: "Solutions",
      links: [
        { label: "For Stablecoin Earners", href: "/solutions/stablecoin-earners" },
        { label: "For Cross-border Living", href: "/solutions/cross-border-living" },
        { label: "For Dollar Balance Holders", href: "/solutions/dollar-balance-holders" },
        { label: "For Global Online Spending", href: "/solutions/global-online-spending" },
      ] as NavLink[],
    },
    {
      heading: "Legal",
      links: [
        { label: "Terms of Service", href: "/legal/terms" },
        { label: "Privacy Policy", href: "/legal/privacy" },
      ] as NavLink[],
    },
  ],
  legalBlock: {
    service: "Kaloq provides a software interface for services delivered by third-party providers.",
    availability: "Product availability, eligibility, fees, and terms vary by region and account.",
    notBank: "Kaloq is not a bank. Digital assets and stablecoins are not bank deposits and may not be insured.",
    copyright: "© 2026 Kaloq, Inc.",
  },
  tagline: "Making stablecoins easy to move and spend for people today, and AI agents tomorrow.",
  social: { label: "X / Twitter", href: "https://x.com/kaloqx" },
};

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------

export const home = {
  hero: {
    h1Line1: "Make your stablecoins",
    h1Accent: "spendable",
    sub: "Spend with a card, hold in global accounts, settle at internet speed.",
    submitLabel: "Get started free",
    ctaHref: "https://card.kaloq.com",
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        number: "01",
        title: "Fund your account with stablecoins",
        description: "Deposit USDC or USDT from any supported wallet or exchange.",
      },
      {
        number: "02",
        title: "Kaloq converts at transparent rates",
        description: "See the exact rate before you confirm — no hidden markup.",
      },
      {
        number: "03",
        title: "Spend on cards or pay out to bank accounts worldwide",
        description: "Use your balance on the Kaloq Card or send it to a bank account.",
      },
    ],
  },
  products: {
    heading: "One balance. Two ways to use it.",
    items: [
      {
        title: "Kaloq Card",
        description: "A personal card for supported digital-asset balances.",
        bullets: ["Everyday purchases", "Online and in-store", "Balance visibility"],
        href: "/products/card",
      },
      {
        title: "Global Account",
        description: "Manage USD today; more currencies and account-level FX are coming soon.",
        bullets: ["USD balance", "FX workspace coming soon", "See every activity"],
        href: "/products/global-account",
      },
    ],
  },
  audience: {
    heading: "Built for your everyday",
    tiles: [
      {
        title: "Stablecoin Earners",
        pain: "Turn on-chain income into travel, subscriptions, shopping and everyday spending.",
        href: "/solutions/stablecoin-earners",
      },
      {
        title: "Cross-border Living",
        pain: "Keep a dollar balance while you live, work or travel across borders.",
        href: "/solutions/cross-border-living",
      },
      {
        title: "Dollar Balance Holders",
        pain: "Hold supported dollar stablecoins, then spend only what everyday life needs.",
        href: "/solutions/dollar-balance-holders",
      },
      {
        title: "Global Online Spending",
        pain: "Use your supported stablecoin balance for eligible subscriptions, software and global online purchases.",
        href: "/solutions/global-online-spending",
      },
    ],
  },
  transparency: {
    heading: "Pricing you can see before you sign.",
    paragraph:
      "Indicative fees are shown up front, with final costs confirmed in-app before you commit.",
    rows: [
      { label: "Card issuance", value: "[TODO: value]" },
      { label: "International spend", value: "[TODO: value]" },
      { label: "Bank payout", value: "[TODO: value]" },
    ],
    cta: { label: "See full pricing →", href: "/pricing" },
  },
  whyKaloq: {
    heading: "Why finance teams choose Kaloq",
    columns: [
      {
        title: "Fast onboarding",
        description: "Get approved and start spending in [TODO: onboarding time].",
      },
      {
        title: "Real-time visibility",
        description: "A live dashboard, transaction feed and exports — always up to date.",
      },
      {
        title: "Human support",
        description: "Reach a real person through [TODO: support channel/SLA].",
      },
    ],
  },
  readyCta: {
    heading: "Ready to ",
    headingAccent: "spend",
    sub: "Open your account in minutes. Free to start.",
    primaryCta: { label: "Get started free", href: "https://card.kaloq.com" },
    secondaryCta: { label: "Talk to sales", href: "/contact" },
  },
};

// ---------------------------------------------------------------------------
// Shared FAQ / fee-table / CTA types
// ---------------------------------------------------------------------------

export type FaqItem = { question: string; answer: string };
export type FeeRow = { label: string; value: string; note: string };

export const finalCtaGeneric = {
  heading: "Talk to our team.",
  sub: "Soft-launch access for selected partners.",
  cta: { label: "Book a Demo", href: "/contact" },
};

// ---------------------------------------------------------------------------
// Products — Card
// ---------------------------------------------------------------------------

export const productCard = {
  hero: {
    eyebrow: "Kaloq Card",
    h1Line1: "Your crypto, ready for",
    h1Line2: "everyday",
    h1Accent: "spending",
    sub: "Fund your card with supported digital assets and use it for everyday purchases — online, in stores, and while traveling.",
    primaryCta: { label: "Get your card", href: "https://card.kaloq.com" },
    secondaryCta: { label: "Learn more", href: "#everyday-spending" },
    card: { pan: "5312 4420 8890 4242", holder: "K. HOLDER", expiry: "09/29" },
    compliance: "Kaloq Card is issued by licensed, regulated partners.",
  },
  benefits: [
    { title: "Spend with confidence", description: "Use your card for everyday purchases with reliable transaction processing." },
    { title: "Manage everything in real time", description: "View transactions, manage your balance, and control your card directly from the app." },
    { title: "Fund with crypto", description: "Add funds using supported stablecoins or digital assets without a complicated payment process." },
    { title: "Use it around the world", description: "Pay online and in stores across supported countries, currencies, and merchant categories." },
  ],
  everyday: {
    eyebrow: "Everyday spending",
    heading: "One card for the way you ",
    headingAccent: "spend",
    copy: "From subscriptions and online shopping to dining, travel, and daily purchases, use one card for more of your everyday spending.",
    categories: [
      { title: "Online shopping", description: "Pay for products and services across supported online merchants." },
      { title: "Subscriptions", description: "Manage entertainment, software, gaming, and other recurring payments." },
      { title: "Travel", description: "Use your card for flights, hotels, transportation, and purchases abroad." },
      { title: "Daily purchases", description: "Pay for dining, shopping, and other eligible in-store expenses." },
    ],
    app: {
      cardLabel: "Kaloq ··4242",
      freezeLabel: "Freeze",
      balanceLabel: "Available balance",
      balance: "$2,485.00",
      viewAllLabel: "View all transactions",
      transactions: [
        { day: "Today", name: "Blue Bottle Coffee", sub: "8:42 AM · Contactless", category: 3, amount: "−$4.50" },
        { name: "Aurora Books", sub: "Pending · aurorabooks.com", category: 0, amount: "−$62.00" },
        { day: "Yesterday", name: "Streamly", sub: "Subscription · renews Aug 1", category: 1, amount: "−$9.99" },
        { name: "Green Valley Market", sub: "6:18 PM · Oakland, CA", category: 3, amount: "−$23.10" },
        { day: "July 18", name: "AeroVista · LIS → MEX", sub: "Foreign transaction · EUR 386.40", category: 2, amount: "−$418.20" },
        { name: "Hotel Casa Verde", sub: "2 nights · MXN 3,780.00", category: 2, amount: "−$210.00" },
        { name: "Aurora Books", sub: "Refund posted", category: 0, amount: "+$12.40", refund: true },
      ],
    },
  },
  funding: {
    eyebrow: "Crypto funding",
    heading: "From crypto balance to everyday ",
    headingAccent: "purchases",
    copy: "Start spending in three simple steps — no complicated payment process.",
    steps: [
      { number: "01", title: "Apply for your card", description: "Create an account and complete the required identity verification." },
      { number: "02", title: "Add funds", description: "Fund your card with supported digital assets." },
      { number: "03", title: "Start spending", description: "Use your card for eligible online and in-store purchases." },
    ],
    cta: { label: "Get your card", href: "https://card.kaloq.com" },
    flow: {
      wallet: {
        title: "Your wallet",
        sub: "0x8f…c3d2",
        amount: "500 USDC",
        caption: "Add funds easily — transfer supported assets into your card balance.",
      },
      balance: {
        title: "Card balance",
        sub: "Ready to spend",
        amount: "$2,485.00",
        toast: "+500 USDC added",
        caption: "View your available balance before making a purchase.",
      },
      purchase: {
        title: "Everyday purchase",
        sub: "Blue Bottle Coffee",
        amount: "−$4.50",
        caption: "Track funding, payments, refunds, and status in one place.",
      },
    },
  },
  // [TODO: legal/compliance review] — country/currency/merchant coverage figures below are
  // unverified placeholder numbers from the design handoff; confirm with legal/compliance before shipping.
  global: {
    eyebrow: "Global use",
    heading: "Made for spending across ",
    headingAccent: "borders",
    copy: "Use your card across supported markets and currencies, whether you are shopping online, traveling, or making everyday purchases.",
    stats: [
      { value: "150+", label: "Countries & regions", description: "Supported markets, online and in-store." },
      { value: "USD", label: "Current balance", description: "USD is available today; additional balance currencies are coming soon." },
      { value: "Online", label: "And in-store", description: "Across supported merchant categories." },
      { value: "Wallets", label: "Supported digital wallets", description: "Contactless and mobile payments where available." },
    ],
    safeLine: "Accepted at millions of supported merchants worldwide.",
  },
  controls: {
    eyebrow: "Card controls",
    heading: "Your card, always under your ",
    headingAccent: "control",
    copy: "Manage your card and monitor spending directly from the app. Try the switch.",
    card: { last4: "4242", expiry: "09/29" },
    toastApproved: "Blue Bottle Coffee −$4.50 · Approved",
    toastDeclined: "Transaction declined · Card frozen",
    frozenBadge: "Frozen",
    activeLabel: "Card active",
    frozenLabel: "Card frozen",
    features: [
      { title: "Real-time notifications", description: "Receive updates whenever a card transaction occurs." },
      { title: "Freeze and unfreeze", description: "Temporarily freeze your card and reactivate it when you are ready." },
      { title: "Pay with your phone", description: "Add your card to supported digital wallets for contactless payments." },
      { title: "Security, built in", description: "Identity verification, transaction monitoring, and secure account access." },
    ],
  },
  // [TODO: legal/compliance review] — every fee value below is an unverified placeholder from the
  // design handoff; confirm final pricing with legal/compliance before shipping.
  fees: {
    heading: "Clear and transparent ",
    headingAccent: "fees",
    copy: "View the complete fee schedule before applying for or using your card.",
    rows: [
      { label: "Virtual card application", value: "Free" },
      { label: "Physical card delivery", value: "$8.00" },
      { label: "Card funding", value: "0.9%" },
      { label: "Transaction fee", value: "Free" },
      { label: "Foreign exchange", value: "1.2%" },
      { label: "ATM withdrawal", value: "2% · min $3" },
      { label: "Card replacement", value: "$8.00" },
    ],
    moreLink: { label: "View the full fee schedule", href: "/pricing" },
  },
  faq: [
    {
      question: "Who can apply for the card?",
      answer: "The card is available to users in supported regions who are 18 or older and complete identity verification during signup.",
    },
    {
      question: "Which digital assets can I use to fund my card?",
      answer: "You can fund your card with supported stablecoins and digital assets across supported networks. The full list is available in the app.",
    },
    {
      question: "Where can I use the card?",
      answer: "Online and in stores at millions of supported merchants worldwide, across supported countries and merchant categories.",
    },
    {
      question: "Are there any spending limits?",
      answer: "Per-transaction, daily, and monthly limits apply and vary by region and verification level. You can view your limits in the app.",
    },
    {
      question: "How long does card approval take?",
      answer: "Virtual cards are typically issued within minutes of approval. Physical cards arrive within 7–14 business days.",
    },
    {
      question: "What should I do if my card is lost?",
      answer: "Freeze your card instantly from the app, then cancel it and order a replacement. Your balance stays safe in your account.",
    },
  ] satisfies FaqItem[],
  faqMoreLink: { label: "View all questions", href: "#" }, // [TODO: link to a full FAQ page once one exists]
  closer: {
    heading: "Make your crypto ",
    headingAccent: "spendable",
    copy: "Apply for your card, add supported digital assets, and start spending online and in stores.",
    primaryCta: { label: "Get your card", href: "https://card.kaloq.com" },
    secondaryLink: { label: "Check availability", href: "/contact" },
  },
};

// ---------------------------------------------------------------------------
// Products — Global Account
// ---------------------------------------------------------------------------

export const productGlobalAccount = {
  hero: {
    eyebrow: "Kaloq Global Account",
    h1Line1: "One account.",
    h1Line2: "More ways to hold,",
    h1Accent: "convert, and spend",
    sub: "Manage USD today. EUR, GBP, MXN, BRL balances and account-level FX are coming soon.",
    primaryCta: { label: "Get started", href: "https://card.kaloq.com" },
    secondaryCta: { label: "Explore the account", href: "#usd-account" },
    compliance: "USD is currently available. Additional currencies and FX are coming soon, subject to region and account eligibility.",
  },
  benefits: [
    {
      title: "USD account",
      description: "Manage your available USD balance, review activity, and connect it to the Kaloq Card.",
    },
    {
      title: "Currency accounts",
      description: "USD is available today. EUR, GBP, MXN, and BRL balances are coming soon.",
    },
    {
      title: "Account-level FX",
      description: "A clear workspace for converting between balances is coming soon, with no invented live quotes.",
    },
    {
      title: "Unified activity",
      description: "See funds entering the account, Card spending, and future FX records together.",
    },
  ],
  account: {
    eyebrow: "USD Account",
    heading: "A clear home for your available USD.",
    copy: "Track your USD balance, review every movement, and connect the account to Kaloq Card when you are ready to spend.",
    balanceLabel: "Available USD",
    balance: "$2,485.00",
    balances: [
      { label: "USD", value: "$2,485.00", tone: "sand", status: "Available" },
      { label: "EUR", value: "€1,840.50", tone: "lime", status: "Coming Soon" },
      { label: "GBP", value: "£1,275.20", tone: "lime", status: "Coming Soon" },
      { label: "MXN", value: "MX$18,640.00", tone: "lime", status: "Coming Soon" },
      { label: "BRL", value: "R$9,820.00", tone: "lime", status: "Coming Soon" },
    ],
    activity: [
      { label: "Account funding", detail: "USD balance added", value: "+$500.00", status: "Complete" },
      { label: "Card purchase", detail: "Kaloq Card spending", value: "−$42.80", status: "Complete" },
      { label: "FX workspace", detail: "EUR balance", value: "Coming Soon", status: "Coming Soon" },
    ],
  },
  fxWorkspace: {
    eyebrow: "FX Workspace",
    heading: "Convert inside the account.",
    copy: "The workspace is designed for transparent account-level FX. USD is available today; destination balances, quotes, and confirmation are coming soon.",
    from: "USD",
    targets: ["EUR", "GBP", "MXN", "BRL"],
    status: "Coming Soon",
  },
  cardBridge: {
    eyebrow: "More ways to use your balance",
    heading: "Connect USD to Kaloq Card.",
    copy: "Your available USD balance can connect to Kaloq Card for supported online and in-store purchases.",
    cta: { label: "Explore Kaloq Card", href: "/products/card" },
  },
  faq: [
    {
      question: "What is a Kaloq Global Account?",
      answer: "It is an account for managing your available USD balance today, with additional currency balances and account-level FX planned for the future.",
    },
    {
      question: "Which currencies are available now?",
      answer: "USD is currently available. EUR, GBP, MXN, and BRL balances are coming soon and will depend on region and account eligibility.",
    },
    {
      question: "How will account-level FX work?",
      answer: "The planned FX workspace will let you review and confirm conversions between balances in one account. Quotes and destination balances are not live yet.",
    },
    {
      question: "Can I connect the account to Kaloq Card?",
      answer: "Yes. Your available USD balance is designed to connect to Kaloq Card for eligible spending.",
    },
    {
      question: "When will more currencies be available?",
      answer: "EUR, GBP, MXN, and BRL are planned, but availability and timing will depend on product readiness, partners, and region.",
    },
    {
      question: "Is Kaloq a bank?",
      answer: "No. Kaloq is not a bank. The responsible third-party provider is identified in the applicable product flow and terms.",
    },
  ] satisfies FaqItem[],
  closer: {
    heading: "Start with your USD account.",
    sub: "Manage USD today, connect Kaloq Card, and watch for more currencies and account-level FX coming soon.",
    cta: { label: "Get started", href: "https://card.kaloq.com" },
  },
};

// ---------------------------------------------------------------------------
// Solutions (shared template)
// ---------------------------------------------------------------------------

export type SolutionIconName = "wallet" | "transfer" | "eye" | "coins" | "shopping-bag" | "activity" | "globe" | "travel" | "receipt" | "dollar" | "card" | "laptop" | "alert" | "shield";
export type SolutionPainPoint = { text: string; icon: SolutionIconName };
export type SolutionFeature = { title: string; description: string; icon: SolutionIconName };
export type SolutionStep = { number: string; title: string; description: string };

const personalSolutionFaq = [
  { question: "What can I use Kaloq for?", answer: "Kaloq helps you move supported assets from your wallet into a balance you can use with the Kaloq Card for eligible everyday purchases." },
  { question: "Which assets and networks are supported?", answer: "Support varies by region and account. Your Kaloq account shows the assets and networks currently available to you." },
  { question: "Where can I use the Kaloq Card?", answer: "Use the card for supported online, in-store, and travel purchases. Availability depends on your region and merchant category." },
  { question: "Can I see my balance and transactions?", answer: "Yes. Your account shows available balance, card activity, and transfer status in one place." },
];

const sharedStablecoinFlow = [
  { number: "01", title: "Start with supported stablecoins", description: "Keep supported USDT or USDC in your personal wallet." },
  { number: "02", title: "Move funds into Kaloq", description: "Transfer funds into Kaloq and review the available balance." },
  { number: "03", title: "Pay with the Kaloq Card", description: "Use the card for eligible online, in-store, and travel purchases." },
  { number: "04", title: "The merchant receives fiat", description: "Stablecoins are converted in the card flow; merchants receive ordinary local currency." },
] satisfies SolutionStep[];

const solutionFaq = [
  ...personalSolutionFaq,
  { question: "Does the merchant receive crypto?", answer: "No. In the card transaction flow, supported stablecoins are converted and the merchant receives ordinary fiat currency." },
  { question: "What checks apply?", answer: "KYC, transaction monitoring, source-of-funds review, and restrictions for certain regions or high-risk merchants may apply." },
] satisfies FaqItem[];

export const solutions = {
  stablecoinEarners: {
    slug: "stablecoin-earners",
    heading: "For Stablecoin Earners",
    hero: { h1: "Turn on-chain income into everyday spending.", sub: "If you earn in supported USDT or USDC, move it into Kaloq and use the Kaloq Card for travel, subscriptions, shopping, and everyday expenses.", primaryCta: { label: "Get your card", href: "https://card.kaloq.com" }, secondaryCta: { label: "Explore Kaloq Card", href: "/products/card" }, image: "/images/use-cases/stablecoin-earners.jpg", imageAlt: "A stablecoin earner working across multiple financial screens", objectPosition: "center" },
    painPoints: [
      { text: "Your income arrives on-chain, but daily life still expects a card.", icon: "wallet" },
      { text: "Selling on an exchange and withdrawing to a bank adds extra steps before you can spend.", icon: "transfer" },
      { text: "You want to see what moved before your balance becomes a purchase.", icon: "eye" },
    ] satisfies SolutionPainPoint[],
    solutionIntro: "A direct path from supported on-chain income to the things you buy.",
    features: [
      { title: "Use the balance you already earn", description: "Start with supported USDT or USDC in your personal wallet.", icon: "coins" },
      { title: "Pay for real life", description: "Use the Kaloq Card for software, subscriptions, travel, shopping, and everyday expenses.", icon: "shopping-bag" },
      { title: "Keep activity visible", description: "Review your balance, card activity, and transfer status in one place.", icon: "activity" },
    ] satisfies SolutionFeature[],
    flow: { heading: "From on-chain income to a real purchase.", sub: "Move supported funds into Kaloq, then let the card handle the payment flow.", steps: sharedStablecoinFlow },
    faq: solutionFaq,
  },
  crossBorderLiving: {
    slug: "cross-border-living",
    heading: "For Cross-border Living",
    hero: { h1: "Keep a dollar balance. Spend in local currency.", sub: "Hold supported dollar stablecoins and use the Kaloq Card for eligible expenses as you live, work, or travel across borders.", primaryCta: { label: "Get your card", href: "https://card.kaloq.com" }, secondaryCta: { label: "See pricing", href: "/pricing" }, image: "/images/use-cases/cross-border-living.jpg", imageAlt: "People working remotely together in a café", objectPosition: "center" },
    painPoints: [
      { text: "Your balance can travel with you while your expenses change country by country.", icon: "globe" },
      { text: "Travel, accommodation, transport, restaurants, and online tools still need a usable card.", icon: "travel" },
      { text: "A cross-border card is not automatically cheaper; funding, conversion, FX, cross-border, and ATM costs all matter.", icon: "receipt" },
    ] satisfies SolutionPainPoint[],
    solutionIntro: "One personal spending flow for the places your life takes you.",
    features: [
      { title: "Stay ready across borders", description: "Keep supported dollar stablecoins available for eligible local spending.", icon: "globe" },
      { title: "Cover the moving parts", description: "Use the Kaloq Card for travel, accommodation, transport, restaurants, and online tools.", icon: "travel" },
      { title: "Understand the total cost", description: "Review current indicative fees and confirm the final cost before you spend.", icon: "receipt" },
    ] satisfies SolutionFeature[],
    flow: { heading: "Keep the same balance as life moves.", sub: "Your wallet balance starts the flow; the card completes it in local spending.", steps: sharedStablecoinFlow },
    faq: solutionFaq,
  },
  dollarBalanceHolders: {
    slug: "dollar-balance-holders",
    heading: "For Dollar Balance Holders",
    hero: { h1: "Hold dollar value. Spend in local currency.", sub: "Keep supported dollar stablecoins in your wallet, then move funds into Kaloq when everyday expenses arise.", primaryCta: { label: "Get your card", href: "https://card.kaloq.com" }, secondaryCta: { label: "Explore Kaloq Card", href: "/products/card" }, image: "/images/use-cases/dollar-balance-holders.jpg", imageAlt: "A person holding a payment card beside a tablet", objectPosition: "center" },
    painPoints: [
      { text: "You want to hold a dollar-denominated balance while local expenses continue every day.", icon: "dollar" },
      { text: "A wallet can hold value, but groceries, transport and subscriptions still need a card.", icon: "shopping-bag" },
      { text: "You need a clear view of what you move into spending and what remains available.", icon: "eye" },
    ] satisfies SolutionPainPoint[],
    solutionIntro: "Keep dollar value connected to the moments you need to spend.",
    features: [
      { title: "Keep value in dollars", description: "Hold supported dollar stablecoins until an eligible expense comes up.", icon: "dollar" },
      { title: "Spend on demand", description: "Move only what you need into Kaloq and use the Kaloq Card for eligible local purchases.", icon: "card" },
      { title: "Follow every step", description: "See balances, card activity, and transfer status before and after you spend.", icon: "activity" },
    ] satisfies SolutionFeature[],
    flow: { heading: "From dollar balance to local purchase.", sub: "Keep supported dollar stablecoins ready, then connect them to everyday spending when you choose.", steps: sharedStablecoinFlow },
    faq: solutionFaq,
  },
  globalOnlineSpending: {
    slug: "global-online-spending",
    heading: "For Global Online Spending",
    hero: { h1: "Use your stablecoin balance for global online spending.", sub: "Move supported USDT or USDC into Kaloq and use the Kaloq Card for eligible subscriptions, software, shopping, travel bookings, and other international online purchases.", primaryCta: { label: "Get your card", href: "https://card.kaloq.com" }, secondaryCta: { label: "Explore Kaloq Card", href: "/products/card" }, image: "/images/use-cases/global-online-spending.jpg", imageAlt: "A person shopping online with a laptop and phone", objectPosition: "center" },
    painPoints: [
      { text: "Your stablecoin balance is ready, but many online services still expect a card.", icon: "laptop" },
      { text: "International subscriptions, software and shopping can fail when your local card or payment route is not supported.", icon: "alert" },
      { text: "You want to know what moved into a purchase and what remains in your balance.", icon: "eye" },
    ] satisfies SolutionPainPoint[],
    solutionIntro: "Bring the balance you hold into the online services you use.",
    features: [
      { title: "Pay for global services", description: "Use the Kaloq Card for eligible subscriptions, software, shopping and travel bookings.", icon: "globe" },
      { title: "Keep your balance visible", description: "Review your balance, card activity and transfer status in one place.", icon: "activity" },
      { title: "Know what is supported", description: "Payment availability depends on your region, merchant category and card verification requirements.", icon: "shield" },
    ] satisfies SolutionFeature[],
    flow: { heading: "From stablecoin balance to online checkout.", sub: "Move supported funds into Kaloq, then use the card for eligible global online purchases.", steps: sharedStablecoinFlow },
    faq: solutionFaq,
  },
};

export const solutionsList = [solutions.stablecoinEarners, solutions.crossBorderLiving, solutions.dollarBalanceHolders, solutions.globalOnlineSpending];

// ---------------------------------------------------------------------------
// Pricing
// ---------------------------------------------------------------------------

export const pricing = {
  h1: "Simple fees, shown clearly.",
  intro: "Understand the possible cost of funding, spending, converting, and withdrawing before you use your card.",
  indicativeLabel: "Indicative — pending final confirmation",
  groups: [
    {
      heading: "Kaloq Card",
      rows: [
        { label: "Virtual card application", value: "Free", note: "Indicative rate for a virtual card application." },
        { label: "Physical card delivery", value: "$8.00", note: "Indicative delivery charge for a physical card." },
        { label: "Card funding", value: "0.9%", note: "Indicative rate when funding your card balance." },
        { label: "Card transaction", value: "Free", note: "Indicative card transaction fee." },
        { label: "Foreign exchange", value: "1.2%", note: "Indicative FX rate when conversion applies." },
        { label: "ATM withdrawal", value: "2% · minimum $3", note: "Indicative rate; the ATM operator may charge separately." },
        { label: "Card replacement", value: "$8.00", note: "Indicative replacement charge." },
      ] satisfies FeeRow[],
    },
  ],
  faq: [
    { question: "Are these fees final?", answer: "No. The figures on this page are indicative and pending final confirmation. Check the in-app confirmation page and formal fee schedule before using the card." },
    { question: "How does foreign exchange affect the total?", answer: "An indicative FX rate may apply when a transaction requires conversion. The final amount depends on the currencies and route involved." },
    { question: "Can an ATM charge more?", answer: "Yes. An ATM operator may add its own fee on top of Kaloq's indicative withdrawal rate." },
    { question: "Is card funding charged?", answer: "The current indicative card funding rate is 0.9%. Funding method, supported asset, network, and region can affect the final cost." },
    { question: "Do fees vary by region?", answer: "They can. Availability, supported assets, conversion routes, and applicable fees depend on your region and account." },
  ] satisfies FaqItem[],
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const contact = {
  h1: "Book a demo.",
  sub: "Tell us about your business and we'll set up time to talk.",
  form: {
    fields: {
      name: { label: "Name", placeholder: "Jane Cooper" },
      email: { label: "Work email", placeholder: "jane@company.com" },
      company: { label: "Company", placeholder: "Company name" },
      useCase: {
        label: "Use case",
        options: ["Card", "Global Account", "Both"],
      },
      volume: {
        label: "Monthly volume",
        options: [
          "Under $10k",
          "$10k–$50k",
          "$50k–$250k",
          "$250k+",
        ],
      },
      message: { label: "Message", placeholder: "Tell us a bit about what you need." },
    },
    submitLabel: "Book a Demo",
    successHeading: "Thank you.",
    successBody: "We’ll contact you shortly.",
    errorMessage: "Something went wrong. Please try again or email operations@kaloq.com.",
  },
};

// ---------------------------------------------------------------------------
// Legal document pages
// ---------------------------------------------------------------------------

export type LegalSection = { heading: string; body: string };
export type LegalDoc = { title: string; lastUpdated: string; intro: string; sections: LegalSection[] };

export const legal: Record<"terms" | "privacy", LegalDoc> = {
  terms: {
    title: "Terms of Service",
    lastUpdated: "Aug 14, 2026",
    intro: "These Platform Terms of Use (\"Terms\") govern your access to and use of the Kaloq-branded website, application, user interface, and related technology services provided by Kaloq, Inc. (\"Kaloq,\" \"we,\" \"us,\" or \"our\"). Kaloq provides a technology and access layer through which eligible users may connect to certain third-party financial services. Kaloq does not itself provide banking, money transmission, digital-asset custody, foreign-exchange, card issuance, payment processing, or settlement services. By creating a Kaloq account, accessing the Kaloq platform, or using any feature made available through it, you confirm that you have read, understood, and agreed to these Terms. If you do not agree, you must not use the Kaloq platform.",
    sections: [
      {
        heading: "1. Kaloq's Role",
        body: "Kaloq provides a branded software interface through which eligible users may access financial products and services supplied by independent third-party providers. Depending on availability, the Kaloq platform may allow you to apply for a payment card, access card-management functions, view balances and transaction information supplied by third-party providers, submit instructions relating to supported bank or wallet transfers, request conversions between supported fiat currencies and digital assets, and access other functions made available through the Kaloq interface. Kaloq does not itself receive, hold, safeguard, custody, or control user funds or digital assets; maintain bank accounts or digital-asset wallets for users; issue payment cards; execute money transfers, digital-asset conversions, or foreign-exchange transactions; authorize, clear, or settle card transactions; operate a card network; provide deposit insurance; or act as a bank, custodian, broker, investment adviser, fiduciary, or money transmitter for users. Any instruction submitted through Kaloq is transmitted to the relevant third-party provider for processing. Kaloq's transmission or display of an instruction does not mean that Kaloq has received, controlled, or executed the underlying funds or transaction.",
      },
      {
        heading: "2. Financial Service Providers",
        body: "The underlying financial services accessible through Kaloq are provided by Interlace and its applicable affiliates, card issuers, banks, custodians, payment processors, digital-asset providers, and other licensed or regulated institutions (collectively, \"Financial Service Providers\"). The provider responsible for a service may depend on your location, account status, currency, asset, card program, or transaction type and will be identified in the applicable application, disclosure, transaction flow, or provider agreement where required. Financial Service Providers, not Kaloq, are responsible for the regulated and operational components of the services they provide, including identity and compliance approval, safeguarding or custody, underlying financial accounts, card issuance, transaction authorization, bank and blockchain transfers, conversion, clearing and settlement, reversals, chargebacks, error resolution, and regulatory reporting. Kaloq may provide technical integration, administrative support, and first-line customer service. Doing so does not make Kaloq the holder, custodian, issuer, or transmitter of your funds.",
      },
      {
        heading: "3. Separate Provider Agreements",
        body: "Before accessing a financial service, you may be required to enter into a separate agreement directly with the responsible Financial Service Provider, including an Interlace user or account agreement, cardholder agreement, bank-transfer or payment-services agreement, digital-asset wallet or custody agreement, fee schedule, electronic communications consent, privacy notice, or risk disclosure (collectively, \"Provider Terms\"). Your use of an underlying financial service is governed by the applicable Provider Terms. Kaloq is not a party to Provider Terms unless the relevant agreement expressly identifies Kaloq as a party. If these Terms conflict with Provider Terms concerning an underlying financial service, the Provider Terms control for that service. These Terms continue to govern your use of Kaloq's software, interface, content, and technology layer. Nothing in these Terms modifies, expands, or replaces a Financial Service Provider's obligations under its Provider Terms.",
      },
      {
        heading: "4. Eligibility",
        body: "To use Kaloq, you must be at least 18 years old or the minimum legal age in your jurisdiction; have legal capacity to enter into these Terms and the applicable Provider Terms; be located in a jurisdiction supported by Kaloq and the relevant Financial Service Providers; use the platform only for yourself unless expressly approved otherwise; provide accurate, complete, and current information; complete all verification required by the relevant Financial Service Providers; and not be prohibited from using the platform or underlying services under applicable law. Access to the Kaloq interface does not guarantee approval for any account, card, wallet, transfer, or other financial service. Approval decisions are made or controlled by the relevant Financial Service Providers.",
      },
      {
        heading: "5. Account Registration and Verification",
        body: "You must provide the information and documentation requested during onboarding. This may include identity and contact information, government-issued identification, tax information, source-of-funds information, and information about your intended use. You authorize Kaloq to collect and securely transmit that information to the Financial Service Providers and verification vendors responsible for reviewing your application. Kaloq may display a status or result received from a Financial Service Provider but does not control the provider's verification methodology, approval standards, or final decision. You must keep your information current. Failure to provide accurate or updated information may result in delayed transactions, restricted access, or termination of the underlying services.",
      },
      {
        heading: "6. Your Instructions",
        body: "You authorize Kaloq to transmit to the relevant Financial Service Provider any instruction submitted through your authenticated account. You are responsible for reviewing all information before confirming an instruction, including the recipient, bank-account or wallet details, asset and blockchain network, amount and currency, exchange rate, fees, and any destination tag, memo, or payment reference. Once transmitted, an instruction may be irreversible or no longer capable of cancellation. Kaloq is not responsible for an incorrect instruction submitted by you, an incorrect wallet address, use of an unsupported blockchain network, or transfer to an unintended recipient. Kaloq remains responsible to the extent a loss is directly caused by Kaloq transmitting an instruction materially differently from the instruction you validly submitted, subject to the limitations in these Terms.",
      },
      {
        heading: "7. Funds and Balances",
        body: "Kaloq does not take legal or beneficial ownership of your funds or digital assets. Funds and digital assets associated with services accessed through Kaloq are held, controlled, or processed by the applicable Financial Service Providers according to their Provider Terms. Balances and transaction records displayed through Kaloq are based on data received from Financial Service Providers and may be delayed, incomplete, pending, or subject to correction. The records maintained by the responsible Financial Service Provider govern the existence, status, and amount of an underlying financial transaction. Kaloq's interface is not an independent bank statement, custody record, or blockchain record. A displayed balance does not necessarily mean the full amount is immediately available for spending or withdrawal.",
      },
      {
        heading: "8. Transfers and Digital-Asset Transactions",
        body: "Transfers are executed by the relevant Financial Service Provider, bank, blockchain network, or payment network, not by Kaloq. Transfers may be delayed, rejected, returned, frozen, or reviewed because of identity or source-of-funds checks, sanctions or anti-money-laundering controls, provider risk controls, bank processing times, blockchain congestion, incorrect information, asset or network restrictions, technical outages, or legal requirements. Sending an unsupported asset or using an unsupported network may result in permanent loss. Neither Kaloq nor a Financial Service Provider is required to recover incorrectly transferred assets, and recovery may be technically impossible. Blockchain transactions may be irreversible once submitted or confirmed.",
      },
      {
        heading: "9. Kaloq Card",
        body: "Cards displayed or managed through Kaloq are issued and administered by the card issuer and other Financial Service Providers identified in the applicable cardholder agreement. Kaloq is not the card issuer, creditor, or card-network operator. The cardholder agreement governs card eligibility and issuance, spending and transaction limits, card funding, authorization and settlement, merchant restrictions, refunds and reversals, unauthorized transactions, chargebacks, card loss or theft, fees, and cardholder rights and obligations. When supported digital assets are used to fund card spending, conversion and settlement are performed by the applicable Financial Service Providers. The merchant ordinarily receives fiat currency through the relevant card network. Kaloq may provide software controls such as displaying transactions or transmitting a request to freeze a card, but final execution remains subject to the systems and rules of the card issuer and other Financial Service Providers.",
      },
      {
        heading: "10. Fees and Rates",
        body: "Fees and exchange rates for underlying financial services are determined or applied by the relevant Financial Service Providers unless a fee is expressly identified as a separate Kaloq platform fee. Before you confirm an eligible transaction, Kaloq may display pricing information received from a Financial Service Provider. The final amount may differ because of market movement, rate expiration, blockchain network fees, intermediary-bank fees, card-network charges, merchant adjustments, rounding, or other third-party charges. You are responsible for reviewing the final transaction information before confirming.",
      },
      {
        heading: "11. Digital-Asset Risks",
        body: "Digital assets and stablecoins are not traditional bank deposits. A stablecoin may lose its intended value; an issuer may suspend redemption or freeze an asset; a custodian or service provider may experience insolvency, security incidents, or operational failures; blockchain networks may experience congestion, attacks, forks, or outages; transactions may be irreversible; and legal or regulatory changes may restrict an asset, network, or service. Digital assets are not insured by the Federal Deposit Insurance Corporation or an equivalent government deposit-insurance scheme. Any insurance that may apply to a particular fiat deposit must be expressly described in the applicable Provider Terms. No insurance coverage should be assumed based solely on the involvement of a bank or regulated institution. Kaloq does not provide investment, tax, legal, or financial advice. Displaying or supporting an asset is not an endorsement or recommendation.",
      },
      {
        heading: "12. Prohibited Uses",
        body: "You must not use Kaloq or an underlying financial service to violate any law, regulation, sanctions program, or court order; engage in fraud, money laundering, terrorist financing, or tax evasion; transact with sanctioned persons, entities, or wallet addresses; disguise the source, ownership, destination, or purpose of funds; use another person's identity, account, card, or payment method; evade verification requirements, transaction limits, or risk controls; conduct unapproved business, merchant-processing, or third-party fund activity; purchase illegal goods or services; interfere with the platform or attempt unauthorized access; or engage in activity prohibited by the applicable Provider Terms.",
      },
      {
        heading: "13. Account Security",
        body: "You are responsible for protecting your password, authentication codes, devices, and recovery information. You must notify Kaloq immediately if you believe your account or device has been compromised and must also notify the responsible Financial Service Provider where required by the Provider Terms. Kaloq may restrict access to its interface while a security issue is investigated. Such a restriction does not necessarily freeze or cancel an underlying financial transaction unless the responsible Financial Service Provider separately takes that action.",
      },
      {
        heading: "14. Suspension and Termination",
        body: "Kaloq may suspend or terminate access to its platform if you breach these Terms; we reasonably suspect unauthorized, fraudulent, or unlawful activity; a Financial Service Provider requests or requires the restriction; your underlying provider account is suspended or terminated; continued access creates legal, security, or operational risk; or the relevant service is discontinued. Suspending access to the Kaloq interface does not give Kaloq possession or control of your funds. Withdrawal, return, or treatment of funds following suspension or termination is governed by the applicable Provider Terms and the instructions of the responsible Financial Service Provider.",
      },
      {
        heading: "15. Transaction Disputes and Complaints",
        body: "Disputes concerning custody, transfers, conversions, card transactions, refunds, chargebacks, settlement, or access to funds are governed by the applicable Provider Terms and must ultimately be resolved by the Financial Service Provider responsible for that service. Kaloq may receive a complaint and forward it to the responsible provider, but Kaloq does not determine the final outcome of a card dispute, chargeback, transfer reversal, or regulatory investigation. Claims arising solely from the performance or non-performance of an underlying financial service must be brought against the responsible Financial Service Provider under its Provider Terms. This does not exclude a claim directly arising from Kaloq's own breach of these Terms, fraud, willful misconduct, gross negligence, or failure to transmit a valid instruction correctly. Nothing in these Terms limits any non-waivable consumer rights under applicable law.",
      },
      {
        heading: "16. Third-Party Service Disclaimer",
        body: "Financial Service Providers are independent third parties. Except where expressly agreed in writing, Kaloq does not control and is not responsible for their licensing or regulatory status, approval decisions, safeguarding arrangements, transaction processing, service availability, security systems, solvency, compliance decisions, card authorization decisions, or performance of the Provider Terms. References to a Financial Service Provider do not guarantee that provider's performance. To the fullest extent permitted by law, Kaloq is not liable for loss arising solely from the act, omission, insolvency, service interruption, or compliance decision of a Financial Service Provider.",
      },
      {
        heading: "17. Platform Availability",
        body: "Kaloq does not guarantee that its interface will be uninterrupted, error-free, or continuously available. The platform may be affected by maintenance, software errors, telecommunications failures, cyber incidents, or outages involving Financial Service Providers. Kaloq may modify, suspend, or discontinue a platform feature at any time, subject to applicable law. Doing so does not modify your rights or obligations under separate Provider Terms.",
      },
      {
        heading: "18. Intellectual Property",
        body: "Kaloq and its licensors own the Kaloq name, software, interface, design, content, and related intellectual property. Kaloq grants you a limited, personal, revocable, non-exclusive, and non-transferable right to use the platform for its intended purpose. You may not copy, modify, distribute, sublicense, reverse engineer, or commercially exploit the platform except where such restriction is prohibited by law.",
      },
      {
        heading: "19. Privacy",
        body: "Kaloq's collection and use of personal information are governed by the Kaloq Privacy Policy. Financial Service Providers separately collect and process personal information under their own privacy notices. You authorize Kaloq to share information with those providers where necessary to operate the platform, transmit your instructions, support your account, or comply with law. Kaloq is not responsible for a Financial Service Provider's independent processing of personal information except where applicable law provides otherwise.",
      },
      {
        heading: "20. Disclaimer of Warranties",
        body: "To the fullest extent permitted by law, the Kaloq platform is provided on an \"as is\" and \"as available\" basis. Kaloq disclaims all implied warranties, including merchantability, fitness for a particular purpose, non-infringement, and uninterrupted availability. Kaloq makes no warranty regarding approval for an underlying financial service, availability of funds, transaction timing, merchant acceptance, exchange rates, stablecoin value, performance of a Financial Service Provider, or recovery of incorrectly transferred assets. Nothing in these Terms excludes a warranty or consumer right that cannot lawfully be excluded.",
      },
      {
        heading: "21. Limitation of Kaloq's Liability",
        body: "To the fullest extent permitted by law, Kaloq will not be liable for loss, delay, or restriction of funds held or processed by a Financial Service Provider; declined, reversed, frozen, or delayed transactions; insolvency or failure of a Financial Service Provider; card-network, banking-network, or blockchain failures; digital-asset price changes or stablecoin depegging; incorrect wallet, bank, or transaction information supplied by you; merchant disputes, refunds, or chargebacks; lawful compliance holds or investigations; or indirect, incidental, special, punitive, or consequential losses. These exclusions apply only to matters outside Kaloq's own performance of the technology platform. To the fullest extent permitted by law, Kaloq's aggregate liability arising from the platform will not exceed the greater of the platform fees paid directly to Kaloq by you during the 12 months preceding the event giving rise to the claim or USD 100. These limitations do not apply to Kaloq's fraud, willful misconduct, gross negligence, or liability that cannot lawfully be limited.",
      },
      {
        heading: "22. Indemnification",
        body: "To the extent permitted by law, you agree to indemnify Kaloq against claims, losses, and reasonable costs arising from your unlawful use of the platform, material breach of these Terms, false or misleading information supplied by you, infringement of another person's rights, or an instruction submitted through your account without fault by Kaloq. You are not required to indemnify Kaloq for Kaloq's own negligence, misconduct, or violation of law.",
      },
      {
        heading: "23. Changes to These Terms",
        body: "Kaloq may update these Terms to reflect changes to the platform, integration structure, Financial Service Providers, or applicable law. We will provide notice of material changes where required. If you do not agree to an updated version, you must stop using the Kaloq platform. Changes to Provider Terms are governed by the relevant Financial Service Provider.",
      },
      {
        heading: "24. Governing Law and Disputes",
        body: "These Terms are governed by the laws applicable to Kaloq, Inc. and your use of the platform, without limiting mandatory consumer protections that apply where you live. Before commencing formal proceedings against Kaloq, you must send a written description of the dispute to operations@kaloq.com and allow 30 days for an attempted resolution. Disputes concerning an underlying financial service are subject to the dispute provisions in the applicable Provider Terms. Nothing in this section limits rights that cannot lawfully be waived.",
      },
      {
        heading: "25. General",
        body: "You may not assign your rights under these Terms without Kaloq's written consent. If any provision is found unenforceable, the remaining provisions will continue in effect. Kaloq's failure to enforce a provision is not a waiver. These Terms and the Kaloq Privacy Policy constitute the agreement between you and Kaloq concerning the Kaloq technology platform and do not replace any Provider Terms. If these Terms are translated, the English version will control to the extent permitted by law. Provisions that by their nature should survive termination will remain in effect.",
      },
      {
        heading: "26. Contact Kaloq",
        body: "For platform support, legal notices, or complaints, contact operations@kaloq.com. Please identify the Kaloq service and account involved. Kaloq may direct a matter concerning an underlying financial service to the Financial Service Provider responsible for that service.",
      },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "August 14, 2026",
    intro: "This Privacy Policy explains how Kaloq (\"Kaloq,\" \"we,\" \"us,\" or \"our\") collects, uses, discloses, and otherwise processes personal information when you visit our website, communicate with us, or use a Kaloq product or service that links to this Policy. The Kaloq entity that contracts with you is responsible for the processing described here. Some account, card, payment, digital-asset, identity-verification, or banking services are provided by regulated or other third-party partners. Those partners may process personal information as independent controllers under their own privacy notices, which also apply to their services.",
    sections: [
      {
        heading: "1. Scope and Our Role",
        body: "This Policy applies to Kaloq-controlled websites, applications, communications, and services that link to it. It does not govern a third party's website, wallet, blockchain protocol, or service simply because it connects to Kaloq. Where a partner provides an account, card, payment, custody, conversion, or identity-verification service, Kaloq and that partner may each determine how certain information is processed for their respective purposes. If a service-specific notice conflicts with this Policy, the more specific notice controls for that service.",
      },
      {
        heading: "2. Information We Collect",
        body: "Depending on how you interact with Kaloq, we may collect: identity and eligibility information, such as name, date of birth, nationality, government identification, photograph, address, tax information, occupation, and source-of-funds or source-of-wealth information; contact and profile information, such as email, phone number, company, account credentials, preferences, and communications; financial and transaction information, such as bank or card details, balances, deposits, withdrawals, conversions, merchant and payment details, transaction history, and related counterparties; digital-asset information, such as wallet addresses, network, asset, transaction hash, and on-chain activity; device, usage, and technical information, such as IP address, device and browser details, approximate location derived from IP, log data, security events, and interactions with our services; and information you provide in support requests, applications, surveys, promotions, or contact forms.",
      },
      {
        heading: "3. Sources of Information",
        body: "We collect information from you; automatically from your device and use of our services; from Kaloq affiliates; and from service providers and partners such as financial institutions, card-program partners, payment networks, identity-verification vendors, compliance and fraud-prevention providers, blockchain analytics providers, wallet or digital-asset service providers, and customer-support vendors. We may also obtain information from public blockchains, sanctions and watchlists, public records, commercially available databases, counterparties, and other sources permitted by law. Information received from a partner may include application or verification results, account status, transaction information, and risk indicators.",
      },
      {
        heading: "4. How We Use Information",
        body: "We may use personal information to provide, operate, administer, maintain, and support our services; verify identity and eligibility; establish and manage accounts; process and reconcile transactions; communicate with you; personalize your experience; provide customer support; detect, investigate, and prevent fraud, money laundering, sanctions evasion, security incidents, prohibited activity, and other misuse; comply with legal, regulatory, audit, reporting, and recordkeeping obligations; enforce agreements and protect the rights, property, and safety of Kaloq, our users, partners, and others; debug, analyze, research, develop, and improve our services; create aggregated or de-identified information; market Kaloq where permitted and manage your preferences; and evaluate or carry out a financing, reorganization, acquisition, sale, or other corporate transaction.",
      },
      {
        heading: "5. Legal Bases for Processing",
        body: "Where applicable law requires a legal basis, we process personal information as necessary to perform a contract with you or take steps at your request; comply with legal obligations; pursue legitimate interests such as operating and improving our services, preventing fraud, securing our systems, communicating with users, and protecting legal rights, provided those interests are not overridden by your rights; and with consent where we request it. You may withdraw consent at any time, but withdrawal does not affect processing already undertaken and may prevent us from providing features that depend on that consent.",
      },
      {
        heading: "6. How We Disclose Information",
        body: "We may disclose personal information to Kaloq affiliates; banks, card issuers or program managers, payment networks and processors, digital-asset and wallet service providers, liquidity or conversion providers, identity-verification and blockchain analytics providers, and other partners needed to provide or support a requested service; vendors that host, secure, analyze, communicate, or provide professional services for our business; recipients, counterparties, or other persons you direct us to interact with; regulators, courts, law enforcement, tax authorities, and other persons when we believe disclosure is required or appropriate to comply with law, enforce agreements, investigate misuse, respond to claims, or protect rights and safety; and actual or prospective parties and advisers involved in a merger, financing, restructuring, asset transfer, insolvency, or similar transaction. We may also disclose information with your consent or at your direction, and disclose aggregated or de-identified information where permitted by law.",
      },
      {
        heading: "7. Sale, Advertising, and Sensitive Information",
        body: "We do not sell personal information for money, and we do not currently share personal information for cross-context behavioral advertising as those terms are defined under applicable U.S. state privacy laws. If this changes, we will provide any notice and opt-out mechanism required by law before engaging in that activity. We use sensitive personal information, including identity, account-access, financial, precise-location if enabled, and government-identification information, only for permitted purposes such as providing requested services, verifying users, processing transactions, preventing fraud, maintaining security, and meeting legal obligations, unless we provide additional notice and choice.",
      },
      {
        heading: "8. Public Blockchains",
        body: "Transactions recorded on a public blockchain are visible to others and generally cannot be altered or deleted by Kaloq. Wallet addresses and transaction details may remain publicly accessible indefinitely and may allow activity to be linked across transactions or, in some circumstances, to an individual. Kaloq may review, attribute, or retain on-chain information for transaction processing, compliance, fraud prevention, security, analytics, and dispute resolution. Requests to delete or correct information do not extend to records that Kaloq does not control, including immutable blockchain data.",
      },
      {
        heading: "9. Cookies and Similar Technologies",
        body: "Our website may collect ordinary server and security logs and uses browser local storage to remember your language preference. We may use cookies or similar technologies that are strictly necessary to operate and secure our services. If we introduce non-essential analytics or advertising technologies, we will provide notice and choices where required by law. Your browser or device may allow you to limit storage, but doing so can affect service functionality. Where legally required, we honor recognized browser-based opt-out signals for the processing to which they apply.",
      },
      {
        heading: "10. Retention",
        body: "We retain personal information for as long as reasonably necessary for the purposes described in this Policy, including while you maintain an account or business relationship with us, and afterward as needed to satisfy anti-money-laundering, sanctions, tax, accounting, regulatory, audit, dispute-resolution, security, and other legal or partner requirements. Retention periods vary by the type of information, the services involved, the sensitivity and risk of the information, applicable limitation periods, and whether an investigation, claim, legal hold, or enforcement matter is pending. We may retain aggregated or de-identified information where permitted by law and may keep information in backups until it is deleted through ordinary backup cycles.",
      },
      {
        heading: "11. International Transfers",
        body: "Kaloq, its affiliates, partners, and service providers may process personal information in countries other than the country where you live. Those countries may have different data-protection laws. Where required, we use recognized safeguards for international transfers, such as adequacy decisions or approved contractual protections. You may contact us for more information about applicable transfer safeguards.",
      },
      {
        heading: "12. Security",
        body: "We use administrative, technical, and organizational measures designed to protect personal information in light of its nature and the risks involved. No system, transmission method, wallet, blockchain, or storage environment is completely secure, however, and we cannot guarantee absolute security. You are responsible for protecting your credentials, devices, wallets, and recovery information, and for promptly notifying us if you suspect unauthorized access or activity.",
      },
      {
        heading: "13. Automated Tools and Risk Decisions",
        body: "We and our partners may use automated tools to support identity verification, sanctions screening, fraud detection, transaction monitoring, security, eligibility, and risk review. These tools may flag, delay, limit, or refer an application or transaction for review. Where applicable law grants rights concerning a decision based solely on automated processing that has legal or similarly significant effects, we will provide the required information and a way to request human review or contest the decision, subject to legal, security, and anti-fraud limitations.",
      },
      {
        heading: "14. Your Privacy Rights and Choices",
        body: "Depending on where you live and subject to applicable exceptions, you may have rights to request access to, correction of, deletion of, or portability of personal information; restrict or object to certain processing; withdraw consent; opt out of certain sales, sharing, targeted advertising, or profiling; appeal a declined request; and receive equal service without unlawful discrimination for exercising a privacy right. You may also opt out of marketing emails through the unsubscribe method provided in the message. We may verify your identity and authority before acting on a request, ask for information reasonably needed to process it, and retain a record of the request. Authorized agents may submit requests where allowed by law, subject to verification. These rights do not override lawful exemptions, including obligations to retain information, protect security, prevent fraud, complete transactions, or establish and defend legal claims. You may complain to the data-protection authority where you live or work if applicable.",
      },
      {
        heading: "15. Children",
        body: "Kaloq services are not directed to anyone under 18, and we do not knowingly collect personal information from children through services covered by this Policy. If you believe a child has provided personal information to us, contact us so that we can review and take appropriate action.",
      },
      {
        heading: "16. Changes to This Policy",
        body: "We may update this Policy to reflect changes in our services, partners, technology, or legal obligations. We will post the updated version and revise the date above. If required by law, we will provide additional notice or obtain consent before a material change takes effect. Your continued use of the services after an update is subject to the updated Policy, except where applicable law requires a different form of acceptance.",
      },
      {
        heading: "17. Contact Us",
        body: "To ask a privacy question or exercise a privacy right, email operations@kaloq.com. Please write \"Privacy Request\" in the subject line and identify the Kaloq service involved. The relevant Kaloq entity and, where applicable, its address or representative are identified in the terms or account materials for your service. We may direct a request to the responsible partner when that partner controls the relevant information.",
      },
    ],
  },
};
