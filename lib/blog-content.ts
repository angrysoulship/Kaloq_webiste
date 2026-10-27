export type BlogCategory = "Perspectives" | "Guides" | "Product" | "Company";
export type BlogLocale = "en" | "zh";
export type ArticleSection = { id: string; title: string; paragraphs?: string[]; bullets?: string[]; steps?: { title: string; description: string }[] };
export type PortableTextValue = Array<Record<string, unknown>>;
export type BlogPost = {
  slug: string; category: BlogCategory; title: string; excerpt: string; date: string;
  publishedTime: string; modifiedTime: string; readTime: string; author: string; role: string;
  art: "portal" | "ledger" | "orbit" | "bridge" | "signal"; locale: BlogLocale;
  coverImageUrl?: string; coverImageAlt?: string;
  translationSlug: string; keywords: string[]; featured?: boolean; intro: string;
  sections: ArticleSection[]; body?: PortableTextValue; takeaway: string; faq: { question: string; answer: string }[];
  sources?: { label: string; url: string }[]; cta: { title: string; description: string; label: string; href: string };
};

const publishedTime = "2026-10-27T08:00:00.000Z";
const modifiedTime = publishedTime;
const base = { publishedTime, modifiedTime, author: "Kaloq Editorial" };

export const blogPosts: BlogPost[] = [
  {
    ...base, slug: "what-is-a-stablecoin-card", category: "Guides", title: "What Is a Stablecoin Card?",
    excerpt: "How a stablecoin-funded card connects an on-chain balance with everyday card payments, including conversion, fees, and the checks that matter.",
    date: "October 27, 2026", readTime: "7 min read", role: "Product Education", art: "portal", locale: "en", translationSlug: "zh-what-is-a-stablecoin-card", featured: true,
    keywords: ["what is a stablecoin card", "stablecoin card", "USDC card", "Kaloq Card"],
    intro: "A stablecoin card lets an eligible user fund a spendable balance with supported stablecoins and pay through familiar card checkout flows. The useful part is not that every shop accepts a token directly. In most programs, the provider connects digital assets to a fiat-denominated card balance, while the merchant receives payment through the ordinary card system.",
    sections: [
      { id: "how-it-works", title: "How does a stablecoin card work?", paragraphs: ["A stablecoin card sits between two payment environments. On one side is a supported blockchain asset such as USDC or USDT. On the other side is the card network and the merchant's local payment flow. The provider handles the conversion and ledger work needed to connect them.", "The exact sequence differs by provider, but a typical experience has four stages:"], steps: [
        { title: "Fund", description: "Send a supported stablecoin over the exact network shown by the provider." },
        { title: "Convert", description: "The asset is converted into, or used to fund, a fiat-denominated card balance." },
        { title: "Pay", description: "Use the card online or in-store at eligible merchants." },
        { title: "Track", description: "Review funding, exchange rate, payment, refund, and final status in one place." },
      ] },
      { id: "merchant", title: "Does the merchant receive stablecoins?", paragraphs: ["Usually, no. A stablecoin-funded card is different from a direct wallet-to-merchant crypto payment. The provider and its partners handle the payment flow so the merchant can be paid through existing card infrastructure. Card acceptance, refunds, disputes, foreign exchange, and merchant restrictions still apply.", "For users, the benefit is continuity. They can start with a supported digital-asset balance without asking every merchant to adopt a new checkout method."] },
      { id: "compare", title: "Stablecoin card vs traditional debit card", bullets: ["Funding source: supported digital assets rather than a bank deposit account.", "Conversion: an asset-to-fiat conversion may happen before spending. Check the rate and fee.", "Coverage: both depend on supported countries, merchant categories, and program rules.", "Protection: dispute rights vary by issuer, program, and jurisdiction."] },
      { id: "choose", title: "What should you check before choosing one?", bullets: ["Supported stablecoins and blockchain networks", "Funding, conversion, card, FX, ATM, and replacement fees", "Eligible countries and merchant categories", "When conversion happens and how refunds are returned", "Identity checks, limits, card controls, and support", "What happens if funds are sent over the wrong network"] },
      { id: "kaloq", title: "Where Kaloq Card fits", paragraphs: ["Kaloq Card is designed to help eligible customers turn supported digital-asset balances into practical spending. Users can fund with supported assets, view an available card balance, pay for eligible online and in-store purchases, and monitor activity and card controls from one interface.", "The value is simple: reduce the distance between holding a stablecoin and paying for something useful, while keeping conversion, status, and controls visible."] },
    ],
    takeaway: "A stablecoin card is best understood as a bridge, not as a merchant receiving crypto. Its value depends on transparent conversion, real acceptance, clear controls, and a reliable path from funding to purchase.",
    faq: [
      { question: "Is a stablecoin card the same as a crypto wallet?", answer: "No. A wallet controls blockchain assets. A stablecoin card connects supported funding with a card-based spending balance." },
      { question: "Can I use any stablecoin or network?", answer: "No. Providers support specific assets and networks. A wrong asset or network can cause loss or require recovery." },
      { question: "Does it remove all foreign exchange costs?", answer: "Not necessarily. Conversion or FX may still occur. Review the displayed rate and fee schedule." },
    ],
    cta: { title: "Make supported digital assets useful in everyday life", description: "See how Kaloq Card connects supported funding with eligible online and in-store spending.", label: "Explore Kaloq Card", href: "/products/card" },
  },
  {
    ...base, slug: "zh-what-is-a-stablecoin-card", category: "Guides", title: "什么是稳定币卡？",
    excerpt: "通俗解释稳定币卡如何连接链上余额与日常刷卡支付，以及兑换、费用和使用前必须确认的问题。",
    date: "2026年10月27日", readTime: "约 7 分钟", role: "产品教育", art: "portal", locale: "zh", translationSlug: "what-is-a-stablecoin-card",
    keywords: ["什么是稳定币卡", "稳定币卡", "USDC 卡", "Kaloq Card"],
    intro: "稳定币卡是一种支付卡。符合条件的用户可以使用受支持的稳定币为可消费余额充值，再通过熟悉的银行卡流程完成消费。它的重点并不是让每家商户直接收取代币，而是把数字资产与法币计价的卡余额连接起来，商户仍通过常规银行卡体系收款。",
    sections: [
      { id: "how-it-works", title: "稳定币卡如何运作？", paragraphs: ["稳定币卡连接两套支付环境。一边是 USDC、USDT 等受支持的链上资产，另一边是银行卡网络和商户本地支付流程。服务商负责中间的兑换、账本记录与清算衔接。", "不同服务商的流程会有差异，但通常包括四步："], steps: [
        { title: "充值", description: "按照页面显示的币种和网络转入受支持的稳定币。" }, { title: "兑换", description: "稳定币被兑换为法币，或用于形成法币计价的卡余额。" }, { title: "支付", description: "在符合条件的线上或线下商户使用卡片。" }, { title: "查看记录", description: "查看充值、汇率、支付、退款和最终状态。" },
      ] },
      { id: "merchant", title: "商户会直接收到稳定币吗？", paragraphs: ["通常不会。稳定币充值卡不等于钱包直接向商户支付加密货币。发卡项目及其合作机构会处理支付流程，让商户通过现有银行卡体系收款。因此，受理范围、退款、争议处理、外汇兑换和商户类别限制仍然存在。", "对用户而言，它的价值在于延续已有支付习惯，而不必等待每家商户改造收银系统。"] },
      { id: "compare", title: "稳定币卡与传统借记卡有什么不同？", bullets: ["资金来源：从受支持的数字资产开始，而不是银行存款账户。", "兑换环节：消费前可能发生数字资产到法币的兑换。", "使用范围：两者都受到国家、商户类别和项目规则限制。", "用户保障：争议与消费者保护取决于发卡机构、项目和当地法律。"] },
      { id: "choose", title: "选择前要确认什么？", bullets: ["支持的稳定币和区块链网络", "充值、兑换、刷卡、外汇、ATM 和补卡费用", "可申请地区及允许使用的商户类别", "何时兑换以及退款如何返回", "身份验证、额度、卡片控制和客服", "使用错误网络转账后的处理方式"] },
      { id: "kaloq", title: "Kaloq Card 的产品价值", paragraphs: ["Kaloq Card 旨在帮助符合条件的用户，把受支持的数字资产余额转化为更实用的消费体验。用户可以充值、查看可用卡余额，在符合条件的线上和线下场景支付，并在一个界面中管理交易与卡片控制。", "它解决的是一个具体问题：缩短持有稳定币与完成真实消费之间的距离，同时让兑换、状态和控制保持可见。"] },
    ],
    takeaway: "稳定币卡更适合被理解为一座支付桥梁，而不是商户直接收取加密货币。它是否有价值，取决于兑换是否透明、使用范围是否真实，以及从充值到消费的路径是否可靠。",
    faq: [{ question: "稳定币卡就是加密钱包吗？", answer: "不是。钱包用于控制链上资产，稳定币卡则连接受支持的充值资产与银行卡消费余额。" }, { question: "任何稳定币和网络都能充值吗？", answer: "不能。服务商只支持指定币种和网络。错误资产或网络可能造成损失。" }, { question: "可以完全免除外汇费用吗？", answer: "不一定。充值或消费中仍可能发生兑换，应查看实际汇率和费用表。" }],
    cta: { title: "让受支持的数字资产走进日常支付", description: "了解 Kaloq Card 如何连接数字资产充值与符合条件的线上、线下消费。", label: "了解 Kaloq Card", href: "/products/card" },
  },
  {
    ...base, slug: "how-to-spend-usdc-everyday-life", category: "Guides", title: "How to Spend USDC in Everyday Life", excerpt: "Four practical ways to use USDC for real expenses, with a checklist for networks, conversion, fees, and card payments.", date: "October 27, 2026", readTime: "8 min read", role: "Product Education", art: "orbit", locale: "en", translationSlug: "zh-how-to-spend-usdc-everyday-life", keywords: ["how to spend USDC", "spend USDC", "USDC card", "pay with USDC"],
    intro: "USDC can move on-chain at any hour, but groceries, subscriptions, travel, rent, and invoices still live across card and bank systems. Spending USDC in everyday life means choosing a safe bridge from the correct blockchain network to the payment method your recipient already accepts.",
    sections: [
      { id: "ways", title: "Four practical ways to spend USDC", steps: [
        { title: "Fund a supported card", description: "Transfer USDC to a provider that can convert it into a spendable card balance." }, { title: "Convert and send to a bank account", description: "Use a compliant off-ramp when the recipient wants local bank money." }, { title: "Pay a merchant that accepts USDC", description: "Confirm the exact asset, network, address, amount, and refund policy." }, { title: "Use a processor or invoice link", description: "A business can accept USDC while a provider handles settlement." },
      ] },
      { id: "checklist", title: "A safer step-by-step checklist", bullets: ["Start with the destination: card purchase, bank transfer, or wallet payment", "Confirm both sides support USDC on the same network", "Check network, provider, conversion, and receiving fees", "Verify the address and consider a small test transfer", "Keep the network's native token for gas in a self-custody wallet", "Wait until funds are available, not merely detected on-chain"] },
      { id: "card", title: "Using USDC through a card", paragraphs: ["A card is often the most familiar option for small, repeated expenses. The user funds a supported account with USDC, the provider handles conversion or card-balance funding, and the merchant receives payment through the card system.", "Check whether the card supports your version of USDC. USDC on one network is not automatically interchangeable with USDC on another at the deposit address. Also check when the rate is fixed and how refunds return."] },
      { id: "risks", title: "Common mistakes to avoid", bullets: ["Using an unsupported network", "Assuming on-chain confirmation means the card balance is spendable", "Ignoring gas, conversion, or FX costs", "Paying an unverified address", "Treating a stablecoin as an insured bank deposit"] },
      { id: "kaloq", title: "How Kaloq helps close the last mile", paragraphs: ["Kaloq Card focuses on the last mile between a supported digital-asset balance and an eligible everyday purchase. Kaloq Global Account is designed as a USD-first workspace for supported bank and stablecoin money movement. Together they address two destinations: card spending and account-based payments."] },
    ],
    takeaway: "Start with where the money must end up, match the network exactly, compare the full conversion cost, and use a card or account bridge when the recipient expects traditional payment rails.",
    sources: [{ label: "Circle: USDC and reserve transparency", url: "https://www.circle.com/transparency" }],
    faq: [{ question: "Can I spend USDC directly at any store?", answer: "No. Direct acceptance is limited. A supported card can bridge USDC funding to eligible merchants." }, { question: "Do I need gas?", answer: "A self-custody wallet normally needs the network's native token for transaction fees." }, { question: "Why is confirmed USDC not spendable yet?", answer: "Screening, conversion, or internal settlement may still be required." }],
    cta: { title: "Move from USDC balance to everyday spending", description: "See how Kaloq Card makes supported funding easier to use for eligible purchases.", label: "Explore Kaloq Card", href: "/products/card" },
  },
  {
    ...base, slug: "zh-how-to-spend-usdc-everyday-life", category: "Guides", title: "如何在日常生活中使用 USDC", excerpt: "四种把 USDC 用于真实支出的方式，以及网络、兑换、费用和刷卡前必须完成的检查。", date: "2026年10月27日", readTime: "约 8 分钟", role: "产品教育", art: "orbit", locale: "zh", translationSlug: "how-to-spend-usdc-everyday-life", keywords: ["USDC 怎么消费", "如何使用 USDC", "USDC 卡"],
    intro: "USDC 可以全天候在链上转移，但买菜、订阅、旅行、房租和账单仍分布在银行卡与银行账户体系中。因此，日常使用 USDC 的核心是为具体收款场景选择安全路径，把正确网络上的 USDC 转换为对方已经接受的支付方式。",
    sections: [
      { id: "ways", title: "使用 USDC 的四种实用途径", steps: [{ title: "为受支持的卡片充值", description: "把 USDC 转入支持该资产的服务商，形成可消费卡余额。" }, { title: "兑换后转入银行账户", description: "当收款方需要本地银行资金时，使用合规出金服务。" }, { title: "直接向接受 USDC 的商户支付", description: "确认币种、网络、地址、金额和退款规则。" }, { title: "通过支付处理商或账单链接", description: "企业可收取 USDC，由服务商完成结算。" }] },
      { id: "checklist", title: "更安全的操作清单", bullets: ["先确定终点：刷卡、银行转账还是钱包直付", "确认双方支持同一网络上的 USDC", "检查网络费、服务费、兑换汇率和收款费用", "核对地址，必要时先小额测试", "自托管钱包要保留原生代币支付 Gas", "等待服务商显示资金已可用"] },
      { id: "card", title: "通过卡片使用 USDC", paragraphs: ["对于小额、高频支出，卡片更符合现有习惯。用户用 USDC 为受支持账户充值，服务商完成兑换或卡余额入账，商户则通过银行卡体系收款。", "充值前要确认卡片支持哪条网络上的 USDC。同名资产位于不同网络，并不代表可以随意转入同一地址。还要确认汇率何时确定以及退款如何返回。"] },
      { id: "risks", title: "常见错误", bullets: ["使用不支持的网络", "把链上确认误认为卡余额已经可用", "忽略 Gas、兑换或外汇费用", "向未经核实的地址付款", "把稳定币当作受存款保险保护的银行存款"] },
      { id: "kaloq", title: "Kaloq 如何解决最后一公里", paragraphs: ["Kaloq Card 关注从受支持的数字资产余额到符合条件的日常消费。Kaloq Global Account 则是以 USD 为起点的资金工作台，承接受支持的银行与稳定币移动。两者分别解决刷卡消费和账户付款。"] },
    ],
    takeaway: "先确定资金最终要到哪里，精确匹配网络，比较完整兑换成本；当收款方使用传统支付体系时，再选择卡片或账户作为桥梁。",
    sources: [{ label: "Circle：USDC 与储备透明度", url: "https://www.circle.com/transparency" }],
    faq: [{ question: "任何商店都能直接使用 USDC 吗？", answer: "不能。受支持的卡片可以把 USDC 充值连接到符合条件的银行卡商户。" }, { question: "发送 USDC 需要 Gas 吗？", answer: "自托管钱包通常需要该网络的原生代币支付交易费。" }, { question: "为什么链上确认后还不能消费？", answer: "服务商可能还要完成筛查、兑换或内部结算。" }],
    cta: { title: "从 USDC 余额走向日常消费", description: "了解 Kaloq Card 如何连接受支持的充值与真实消费。", label: "了解 Kaloq Card", href: "/products/card" },
  },
  {
    ...base, slug: "stablecoin-vs-traditional-cross-border-payments", category: "Perspectives", title: "Stablecoin vs Traditional Cross-Border Payments", excerpt: "Compare stablecoin and traditional international payment flows across speed, visibility, cost, compliance, and the last mile.", date: "October 27, 2026", readTime: "9 min read", role: "Payments Research", art: "bridge", locale: "en", translationSlug: "zh-stablecoin-vs-traditional-cross-border-payments", keywords: ["stablecoin vs cross-border payments", "stablecoin international payments"],
    intro: "Traditional cross-border payments and stablecoins solve the same basic problem: moving value across borders. Neither method is automatically fast, cheap, or complete. The right comparison follows the entire route from the sender's funding source to money the recipient can actually use.",
    sections: [
      { id: "traditional", title: "How traditional cross-border payments work", paragraphs: ["A bank transfer may pass through correspondent banks, processors, FX providers, and the recipient's bank. Each can add operating hours, screening, fees, and reconciliation. Card payments use another network but still involve authorization, clearing, settlement, and conversion.", "Traditional rails have broad reach and established dispute processes. Weaknesses often appear in opaque pricing, cut-off times, intermediary deductions, and limited status visibility."] },
      { id: "stablecoin", title: "How stablecoin payments work", paragraphs: ["A stablecoin can move between compatible addresses without waiting for bank opening hours. Yet the sender still needs to acquire it, the recipient must be able to hold it, and many real expenses require conversion into bank money or a card balance.", "On-ramps, screening, custody, networks, off-ramps, FX, and local payout determine the real cost and time. A fast on-chain transaction does not guarantee a fast usable outcome."] },
      { id: "comparison", title: "The practical comparison", bullets: ["Availability: blockchains can run 24/7; banks and off-ramps may not", "Speed: on-chain settlement can be quick; review and payout may take longer", "Cost: gas, conversion, liquidity, compliance, and payout fees remain", "Visibility: an explorer shows the transfer, not the full delivery status", "Final use: stablecoins may require a last-mile bridge", "Risk: stablecoins add issuer, reserve, wallet, network, and regulatory risks"] },
      { id: "fit", title: "When each method can fit better", paragraphs: ["Stablecoins can fit approved treasury movements, 24/7 settlement, digital-economy workers, and corridors where both sides already use them. Traditional rails can fit direct bank delivery, payments needing established banking records, or markets where local rules make banks more suitable.", "Useful products often combine both: stablecoins move value for part of the route, while local accounts, conversion partners, and cards complete the last mile."] },
      { id: "kaloq", title: "Kaloq's approach: connect the rails", paragraphs: ["Kaloq Card is designed for eligible everyday spending funded by supported digital assets. Kaloq Global Account is designed as a USD-first workspace for supported bank and stablecoin movement. The goal is not to claim one rail replaces every other, but to make the path between them clearer."] },
    ],
    takeaway: "The meaningful question is which end-to-end route delivers the right currency to the right recipient with acceptable cost, speed, visibility, protection, and compliance.",
    sources: [{ label: "World Bank: Remittance Prices Worldwide", url: "https://remittanceprices.worldbank.org/homepage" }, { label: "BIS CPMI: Stablecoins in cross-border payments", url: "https://www.bis.org/publications/considerations-use-stablecoin-arrangements-cross-border-payments" }],
    faq: [{ question: "Are stablecoin payments always instant?", answer: "No. Screening, conversion, custody, and local payout add time." }, { question: "Are they always cheaper?", answer: "No. Compare acquisition, gas, spreads, off-ramp, FX, and payout fees." }, { question: "Can stablecoins replace bank accounts?", answer: "They support some use cases, but many bills, merchants, and regulated workflows still require bank or card rails." }],
    cta: { title: "Connect digital value with familiar payment rails", description: "Explore Kaloq's USD-first Global Account.", label: "Explore Global Account", href: "/products/global-account" },
  },
  {
    ...base, slug: "zh-stablecoin-vs-traditional-cross-border-payments", category: "Perspectives", title: "稳定币支付与传统跨境支付有什么不同？", excerpt: "从速度、透明度、成本、合规和最后一公里，比较稳定币与传统国际支付的完整路径。", date: "2026年10月27日", readTime: "约 9 分钟", role: "支付研究", art: "bridge", locale: "zh", translationSlug: "stablecoin-vs-traditional-cross-border-payments", keywords: ["稳定币支付与传统跨境支付", "稳定币国际支付"],
    intro: "传统跨境支付和稳定币支付解决同一个基本问题：让价值跨越国境。任何一种方式都不会天然更快、更便宜或更完整。真正有意义的比较，必须从付款人的资金来源一直看到收款人最终可用的钱。",
    sections: [
      { id: "traditional", title: "传统跨境支付如何运作", paragraphs: ["银行汇款可能经过代理行、支付处理商、外汇服务商和收款银行，每一方都可能增加营业时间、筛查、费用和对账。银行卡支付同样涉及授权、清算、结算和兑换。", "传统体系覆盖广，争议机制成熟。常见不足是价格不透明、截单时间、中间行扣费和状态查询困难。"] },
      { id: "stablecoin", title: "稳定币支付如何运作", paragraphs: ["稳定币可以在兼容地址之间全天转移，但付款人要先获得稳定币，收款人要能够持有，而很多真实支出最终仍要兑换成银行资金或卡余额。", "入金、筛查、托管、网络、出金、外汇和本地付款共同决定真实成本与时间。链上转账快，不等于资金很快可用。"] },
      { id: "comparison", title: "从真实支付角度比较", bullets: ["可用时间：区块链全天运行，银行和出金服务未必", "速度：链上结算可能快，审核和本地付款可能更久", "成本：Gas、兑换、流动性、合规和付款费用仍存在", "透明度：区块浏览器无法显示完整交付状态", "最终用途：稳定币可能需要最后一公里", "风险：增加发行方、储备、钱包、网络和监管风险"] },
      { id: "fit", title: "两种方式分别适合什么场景", paragraphs: ["稳定币适合获批交易对手之间的资金调拨、全天候结算、数字经济从业者收款，以及双方都已使用稳定币的走廊。传统路径更适合直接银行到账、需要成熟银行凭证或当地规则更适合银行体系的场景。", "很多实用产品会把两者结合：稳定币完成一段移动，本地账户、兑换伙伴和卡片完成最后一公里。"] },
      { id: "kaloq", title: "Kaloq 的思路：连接不同支付路径", paragraphs: ["Kaloq Card 面向以受支持数字资产为资金来源的符合条件消费。Kaloq Global Account 以 USD 为起点，承接受支持的银行与稳定币移动。目标不是声称一种路径取代所有路径，而是让两者之间的连接更清楚。"] },
    ],
    takeaway: "真正的问题是哪一条端到端路径能以可接受的成本、速度、透明度、保障和合规水平，把正确的货币交给正确的收款人。",
    sources: [{ label: "世界银行：全球汇款价格", url: "https://remittanceprices.worldbank.org/homepage" }, { label: "国际清算银行 CPMI：稳定币跨境支付考量", url: "https://www.bis.org/publications/considerations-use-stablecoin-arrangements-cross-border-payments" }],
    faq: [{ question: "稳定币支付一定即时到账吗？", answer: "不一定。筛查、兑换、托管和本地付款会增加时间。" }, { question: "稳定币支付一定更便宜吗？", answer: "不一定，应比较买入、Gas、点差、出金、外汇和付款费。" }, { question: "稳定币能完全取代银行账户吗？", answer: "不能。很多账单、商户和受监管流程仍需要银行或银行卡。" }],
    cta: { title: "把数字价值连接到熟悉的支付体系", description: "了解 Kaloq 的 USD 优先全球账户。", label: "了解 Global Account", href: "/products/global-account" },
  },
  {
    ...base, slug: "how-stablecoin-global-accounts-work", category: "Product", title: "How Do Stablecoin Global Accounts Work?", excerpt: "How a global account connects bank money, supported stablecoins, conversion, balances, and payouts in one workspace.", date: "October 27, 2026", readTime: "8 min read", role: "Product Education", art: "ledger", locale: "en", translationSlug: "zh-how-stablecoin-global-accounts-work", keywords: ["stablecoin global account", "how global accounts work", "USD global account"],
    intro: "A stablecoin global account helps eligible users manage value across bank and blockchain rails. It is not simply a wallet, and it is not automatically a bank account in every jurisdiction. The useful experience combines balances, funding instructions, conversion, status, and payout options in one place.",
    sections: [
      { id: "blocks", title: "The five building blocks", steps: [{ title: "Account access", description: "Complete eligibility and identity or business verification." }, { title: "Funding", description: "Receive supported bank transfers or stablecoin deposits where available." }, { title: "Conversion", description: "Convert between supported assets and account currencies with visible terms." }, { title: "Ledger and controls", description: "See available, pending, and completed activity." }, { title: "Use of funds", description: "Send to supported destinations or use a linked card experience." }] },
      { id: "wallet", title: "Global account vs standalone wallet", paragraphs: ["A wallet mainly controls blockchain assets. A global account adds the operational layer connecting users or businesses with bank instructions, fiat balances, conversion, statements, status, and support.", "Not every global account offers local details in every country or currency. USD may arrive before other currencies, and transfer features vary by user type and jurisdiction."] },
      { id: "flow", title: "A typical money flow", paragraphs: ["A contractor receives USDC and needs to pay a USD invoice. They deposit USDC over a supported network, wait until it is available, review conversion, and move the USD balance to an eligible bank destination. A reverse path may exist where supported.", "Each arrow has rules: the deposit needs the correct network, conversion needs liquidity and a disclosed rate, and payout needs accurate beneficiary details and a supported corridor."] },
      { id: "evaluate", title: "What to evaluate before opening one", bullets: ["Who legally provides each service", "Available countries, currencies, bank rails, assets, and networks", "Whether details are individual, pooled, or virtual", "Spreads, fees, minimums, and limits", "Timing for pending, available, sent, and returned funds", "Statements, exports, support, security, and recovery"] },
      { id: "kaloq", title: "How Kaloq Global Account is positioned", paragraphs: ["Kaloq Global Account is a USD-first workspace for eligible users to view and move money across supported bank and stablecoin rails. USD is the current focus. Additional currencies and account-level FX are planned, not presented as already available.", "It is designed to work alongside Kaloq Card: the account organizes balances and transfers, while the card connects an eligible balance with everyday spending."] },
    ],
    takeaway: "A useful stablecoin global account does more than display a token balance. It connects funding, conversion, ledger status, compliance, and the last mile.",
    faq: [{ question: "Is it a bank account?", answer: "Not necessarily. Review whether bank details are provided, by whom, and under which terms." }, { question: "Can I receive any stablecoin?", answer: "No. Only send an asset over an explicitly supported network." }, { question: "Why are funds pending?", answer: "Confirmation, screening, conversion, bank settlement, or ledger checks may occur first." }],
    cta: { title: "One workspace for supported global money movement", description: "Explore Kaloq's USD-first Global Account.", label: "Explore Global Account", href: "/products/global-account" },
  },
  {
    ...base, slug: "zh-how-stablecoin-global-accounts-work", category: "Product", title: "稳定币全球账户如何运作？", excerpt: "了解全球账户如何在一个资金工作台中连接银行资金、稳定币、兑换、余额和付款。", date: "2026年10月27日", readTime: "约 8 分钟", role: "产品教育", art: "ledger", locale: "zh", translationSlug: "how-stablecoin-global-accounts-work", keywords: ["稳定币全球账户", "全球账户如何运作", "美元全球账户"],
    intro: "稳定币全球账户帮助符合条件的用户在银行和区块链路径之间管理价值。它不只是钱包，也不代表在每个地区都自动构成银行账户。真正实用的体验，是把余额、充值指引、兑换、状态和付款选项放在一个工作台里。",
    sections: [
      { id: "blocks", title: "五个基本组成部分", steps: [{ title: "账户准入", description: "完成资格、个人身份或企业验证。" }, { title: "入金", description: "在可用地区接收银行转账或稳定币。" }, { title: "兑换", description: "在受支持的资产和账户币种之间转换。" }, { title: "账本与控制", description: "查看可用、处理中和已完成活动。" }, { title: "资金使用", description: "向受支持目的地付款或使用关联卡片。" }] },
      { id: "wallet", title: "全球账户与独立钱包有什么不同？", paragraphs: ["钱包主要用于控制链上资产。全球账户增加了连接用户或企业与银行指引、法币余额、兑换、账单、状态和客服所需的运营层。", "并非每个全球账户都会在所有国家提供本地账户信息。USD 可能先于其他币种，转账功能也会因用户类型和地区不同。"] },
      { id: "flow", title: "一个典型资金流程", paragraphs: ["承包商收到 USDC，但要支付 USD 账单。用户通过受支持网络充值，等待资金可用，查看兑换，再把 USD 余额转往符合条件的银行目的地。在支持时，反向路径也可能存在。", "每一步都有规则：充值要匹配网络，兑换需要流动性和明确汇率，付款需要正确收款资料和受支持走廊。"] },
      { id: "evaluate", title: "开户前应该评估什么？", bullets: ["每项服务由谁依法提供", "支持的国家、币种、银行路径、资产和网络", "账户信息是独立、归集还是虚拟", "点差、费用、最低金额和额度", "处理中、可用、发送和退回的时间", "账单、导出、客服、安全和恢复机制"] },
      { id: "kaloq", title: "Kaloq Global Account 的定位", paragraphs: ["Kaloq Global Account 是以 USD 为起点的资金工作台，帮助符合条件的用户管理受支持的银行与稳定币资金移动。USD 是当前重点，其他币种与账户级外汇属于计划方向，不应被描述为已全面上线。", "它与 Kaloq Card 配合：全球账户组织余额和转账，卡片把符合条件的余额连接到日常消费。"] },
    ],
    takeaway: "真正实用的稳定币全球账户不只是显示代币余额，而是把入金、兑换、账本状态、合规和最后一公里连接起来。",
    faq: [{ question: "它就是银行账户吗？", answer: "不一定。应确认是否提供银行账户信息、由谁提供，以及适用哪些条款。" }, { question: "任何稳定币都能收吗？", answer: "不能。只应通过明确受支持的网络转入受支持资产。" }, { question: "为什么资金处于处理中？", answer: "可能需要完成确认、筛查、兑换、银行结算或账本检查。" }],
    cta: { title: "用一个工作台管理受支持的全球资金", description: "了解 Kaloq 的 USD 优先 Global Account。", label: "了解 Global Account", href: "/products/global-account" },
  },
  {
    ...base, slug: "usdc-vs-usdt-international-payments", category: "Perspectives", title: "USDC vs USDT for International Payments", excerpt: "Compare USDC and USDT across issuer terms, reserves, networks, liquidity, redemption, and recipient needs.", date: "October 27, 2026", readTime: "9 min read", role: "Payments Research", art: "signal", locale: "en", translationSlug: "zh-usdc-vs-usdt-international-payments", keywords: ["USDC vs USDT", "USDC vs USDT international payments"],
    intro: "USDC and USDT both aim to track the US dollar, but they are not interchangeable in every payment. They differ in issuer, reserves, terms, networks, liquidity, redemption routes, and availability. The practical choice is the one both sides can safely receive and convert on the intended network.",
    sections: [
      { id: "shared", title: "What they have in common", paragraphs: ["Both are centralized, dollar-referenced stablecoins issued on multiple blockchains. They can move outside bank opening hours and act as a common settlement unit.", "Neither removes the need to evaluate issuer, reserves, terms, wallet security, network, compliance, off-ramp availability, and local regulation. Neither is an insured bank deposit."] },
      { id: "differences", title: "The differences that matter", bullets: ["Issuer and reserves: Circle describes highly liquid cash and cash-equivalent backing with weekly disclosures and monthly assurance; Tether says USDt is backed by reserves that may include cash, cash equivalents, and other assets", "Networks: supported lists differ and change", "Liquidity: the useful asset is often the one your recipient and off-ramp can convert efficiently", "Redemption: direct issuer access depends on verification, terms, minimums, fees, and jurisdiction", "Compliance: access and controls vary by issuer, platform, user, and location"] },
      { id: "decision", title: "A decision checklist", steps: [{ title: "Ask the recipient", description: "Which asset, network, wallet, and off-ramp can they use?" }, { title: "Map the exit", description: "How will they convert or spend it?" }, { title: "Compare full cost", description: "Include acquisition, network, spread, conversion, and payout fees." }, { title: "Review current terms", description: "Check issuer disclosures, platform limits, and local requirements." }, { title: "Test the route", description: "Consider a small test for a new address or corridor." }] },
      { id: "which", title: "So which one is better?", paragraphs: ["USDC may fit routes prioritizing Circle's reserve structure and institutional integrations. USDT may fit routes where recipients and local platforms have deeper USDT liquidity. This is not a universal ranking. A popular asset on the wrong network or without an off-ramp is a poor payment choice."] },
      { id: "kaloq", title: "Using stablecoins through Kaloq", paragraphs: ["Kaloq uses explicit supported assets and funding paths. Users should follow the asset and network instructions displayed for their account. Kaloq Card connects an eligible balance with everyday spending, while Global Account is designed for supported account-based movement."] },
    ],
    takeaway: "USDC vs USDT is not a popularity contest. Choose the asset and network both parties can verify, receive, convert, and use with acceptable cost, liquidity, compliance, and risk.",
    sources: [{ label: "Circle: USDC transparency", url: "https://www.circle.com/transparency" }, { label: "Tether: reserve FAQ", url: "https://tether.to/en/faqs/" }, { label: "Tether: supported protocols", url: "https://tether.to/en/supported-protocols/" }],
    faq: [{ question: "Is USDC safer than USDT?", answer: "Safety requires comparing current reserves, terms, counterparties, network, custody, liquidity, and exit routes." }, { question: "Can I send USDC to a USDT address?", answer: "No. Asset and network support must match exactly." }, { question: "Which is cheaper to send?", answer: "The network and provider pricing often matter more than the token name." }],
    cta: { title: "Use supported stablecoins with a clear destination", description: "Explore Kaloq's card and global account experiences.", label: "Explore Kaloq products", href: "/products/card" },
  },
  {
    ...base, slug: "zh-usdc-vs-usdt-international-payments", category: "Perspectives", title: "国际支付使用 USDC 还是 USDT？", excerpt: "从发行方条款、储备、网络、流动性、赎回和收款方需求，比较 USDC 与 USDT。", date: "2026年10月27日", readTime: "约 9 分钟", role: "支付研究", art: "signal", locale: "zh", translationSlug: "usdc-vs-usdt-international-payments", keywords: ["USDC 和 USDT 区别", "国际支付 USDC 还是 USDT"],
    intro: "USDC 和 USDT 都以追踪美元价值为目标，但不能在每笔支付中互换。两者在发行方、储备、条款、网络、流动性、赎回路径和地区可用性上都有差异。实用的选择，是双方都能在指定网络上安全接收并兑换的资产。",
    sections: [
      { id: "shared", title: "两者的共同点", paragraphs: ["两者都是中心化发行、以美元为参考并部署在多条链上的稳定币，可以在银行营业时间之外转移。", "但两者都不能免除对发行方、储备、条款、钱包安全、网络、合规、出金和当地监管的评估，也都不等同于受存款保险保护的银行存款。"] },
      { id: "differences", title: "真正影响支付的差异", bullets: ["发行方与储备：Circle 描述 USDC 由高流动性现金和现金等价物支持并提供定期披露；Tether 表示 USDt 由可能包含现金、现金等价物及其他资产的储备支持", "网络：支持列表不同且会变化", "流动性：更合适的资产往往是收款方和出金服务能高效兑换的那一个", "赎回：直接向发行方赎回受到验证、条款、最低金额、费用和地区限制", "合规：准入和控制因发行方、平台、用户和地区而异"] },
      { id: "decision", title: "国际支付决策清单", steps: [{ title: "先问收款人", description: "对方能用哪种资产、网络、钱包和出金服务？" }, { title: "画出退出路径", description: "对方如何兑换或消费？" }, { title: "比较完整成本", description: "包括买入、网络、点差、兑换和付款费。" }, { title: "阅读最新条款", description: "检查发行方披露、平台额度和当地要求。" }, { title: "测试路径", description: "新地址或新走廊可先小额测试。" }] },
      { id: "which", title: "所以哪一个更好？", paragraphs: ["当交易双方更看重 Circle 的储备结构和机构集成时，USDC 可能更适合；当收款方和当地平台已有更深的 USDT 流动性时，USDT 可能更适合。这不是通用排名。在错误网络上或没有出金路径的热门资产，同样不是好的支付选择。"] },
      { id: "kaloq", title: "通过 Kaloq 使用稳定币", paragraphs: ["Kaloq 使用明确的受支持资产与充值路径。用户应严格按照账户内显示的币种和网络指引操作。Kaloq Card 连接符合条件的余额与日常消费，Global Account 承接受支持的账户型资金移动。"] },
    ],
    takeaway: "USDC 与 USDT 的选择不是热度竞赛。应选择双方都能核实、接收、兑换并实际使用的资产和网络。",
    sources: [{ label: "Circle：USDC 透明度", url: "https://www.circle.com/transparency" }, { label: "Tether：储备常见问题", url: "https://tether.to/en/faqs/" }, { label: "Tether：支持的协议", url: "https://tether.to/en/supported-protocols/" }],
    faq: [{ question: "USDC 一定比 USDT 更安全吗？", answer: "应比较最新储备、条款、交易对手、网络、托管、流动性和退出路径。" }, { question: "可以把 USDC 发到 USDT 地址吗？", answer: "不可以。资产和网络必须完全匹配。" }, { question: "哪种转账更便宜？", answer: "网络和服务商定价往往比代币名称影响更大。" }],
    cta: { title: "让每笔稳定币支付都有清楚的目的地", description: "了解 Kaloq 的卡片与全球账户体验。", label: "了解 Kaloq 产品", href: "/products/card" },
  },
];

export const featuredPost = blogPosts.find((post) => post.featured)!;
export function getPost(slug: string) { return blogPosts.find((post) => post.slug === slug); }
export function getProductNote(locale: BlogLocale) {
  return locale === "zh"
    ? "产品可用性、支持的资产、网络、国家、币种及商户类别会因资格条件和司法管辖区而异。本文仅供一般信息参考，不构成金融、法律或投资建议。"
    : "Product availability, supported assets, networks, countries, currencies, and merchant categories vary by eligibility and jurisdiction. This article is for general information only and is not financial, legal, or investment advice.";
}
