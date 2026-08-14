"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "zh";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

// The site is authored in English. Keeping the translation map here lets the
// existing editorial components stay server-rendered while the client toggle
// translates visible copy consistently across every route.
const translations: Record<string, string> = {
  "Skip to content": "跳转到主要内容",
  Products: "产品",
  Solutions: "使用场景",
  Pricing: "价格",
  "Kaloq Card": "Kaloq 卡",
  "Global Account": "全球账户",
  "Hold USD and move money between bank accounts and stablecoins.": "持有美元，并在银行账户与稳定币之间转移资金。",
  "Spend your Kaloq balance on everyday purchases.": "使用您的 Kaloq 余额进行日常消费。",
  "Move between local currency and stablecoins from one account": "在一个账户内，轻松切换本币与稳定币",
  About: "关于我们",
  Contact: "联系我们",
  "Get started": "开始使用",
  "Get started free": "免费开始使用",
  "Make your stablecoins": "让您的稳定币",
  "Spend with a card, hold in global accounts, settle at internet speed.": "刷卡消费、全球账户持有、结算快到飞起。",
  "Enter your work email": "请输入你的企业邮箱",
  "For Stablecoin Earners": "稳定币收入者",
  "For Cross-border Living": "跨境生活人群",
  "For Dollar Balance Holders": "美元资产持有者",
  "For Global Online Spending": "全球网购达人",
  "Turn on-chain income into everyday spending": "把链上收入变成日常消费",
  "Keep a dollar balance while you spend locally": "持有美元资产，本地消费同样轻松",
  "Hold dollars. Spend as needed.": "持有美元，按需消费。",
  "Use your stablecoin balance for global online purchases": "用稳定币余额，轻松买遍全球",
  "Turn on-chain income into everyday spending.": "把链上收入变成日常消费。",
  "Keep a dollar balance. Spend in local currency.": "持有美元余额，用本地货币消费。",
  "Hold dollar value. Spend in local currency.": "持有美元价值，用本地货币消费。",
  "Use your stablecoin balance for global online spending.": "用你的稳定币余额进行全球线上消费。",
  "If you earn in supported USDT or USDC, move it into Kaloq and use the Kaloq Card for travel, subscriptions, shopping, and everyday expenses.": "如果你通过支持的 USDT 或 USDC 获得收入，可以将资金转入 Kaloq，再使用 Kaloq 卡支付旅行、订阅、购物和日常开支。",
  "Hold supported dollar stablecoins and use the Kaloq Card for eligible expenses as you live, work, or travel across borders.": "持有支持的美元稳定币，在跨境生活、工作或旅行时使用 Kaloq 卡支付符合条件的开支。",
  "Keep supported dollar stablecoins in your wallet, then move funds into Kaloq when everyday expenses arise.": "将支持的美元稳定币留在钱包中，在需要支付日常开支时再把资金转入 Kaloq。",
  "Move supported USDT or USDC into Kaloq and use the Kaloq Card for eligible subscriptions, software, shopping, travel bookings, and other international online purchases.": "将支持的 USDT 或 USDC 转入 Kaloq，使用 Kaloq 卡支付符合条件的订阅、软件、购物、旅行预订和其他国际线上消费。",
  "Get your card": "获取你的卡",
  "Explore Kaloq Card": "了解 Kaloq 卡",
  "See pricing": "查看价格",
  "Your balance should work where you spend.": "你的余额应该能在你消费的地方发挥作用。",
  "The friction": "消费中的阻力",
  "How it works": "运作方式",
  "Built for your life": "为你的生活而设计",
  "Built for the way you spend": "为你的消费方式而设计",
  "Real usage flow": "真实使用流程",
  "From your balance to a real purchase.": "从余额到真实消费。",
  "Questions": "常见问题",
  "A clearer way to spend.": "更清晰的消费方式。",
  "Keep your balance ready to spend.": "让你的余额随时可以消费。",
  "Start with your supported wallet balance and make more of everyday life.": "从支持的钱包余额开始，让日常生活更自在。",
  "Your income arrives on-chain, but daily life still expects a card.": "你的收入在链上到账，但日常生活仍然需要一张卡。",
  "Selling on an exchange and withdrawing to a bank adds extra steps before you can spend.": "先在交易所出售、再提现到银行，会增加消费前的中间步骤。",
  "You want to see what moved before your balance becomes a purchase.": "在余额变成一笔消费之前，你希望清楚看到资金去了哪里。",
  "Your balance can travel with you while your expenses change country by country.": "你的余额可以随身携带，而消费地点会随着国家变化。",
  "Travel, accommodation, transport, restaurants, and online tools still need a usable card.": "旅行、住宿、交通、餐厅和线上工具仍然需要一张可用的卡。",
  "A cross-border card is not automatically cheaper; funding, conversion, FX, cross-border, and ATM costs all matter.": "跨境卡并不一定更便宜，充值、转换、汇率、跨境交易和 ATM 费用都需要考虑。",
  "You want to hold a dollar-denominated balance while local expenses continue every day.": "你希望持有美元计价的余额，同时应对每天发生的本地开支。",
  "A wallet can hold value, but groceries, transport and subscriptions still need a card.": "钱包可以储存价值，但买菜、交通和订阅仍然需要一张卡。",
  "You need a clear view of what you move into spending and what remains available.": "你需要清楚知道转入消费的金额，以及仍然可用的余额。",
  "Your stablecoin balance is ready, but many online services still expect a card.": "你的稳定币余额已经准备好，但许多线上服务仍然需要银行卡。",
  "International subscriptions, software and shopping can fail when your local card or payment route is not supported.": "当本地银行卡或支付路径不被支持时，国际订阅、软件和购物支付可能会失败。",
  "You want to know what moved into a purchase and what remains in your balance.": "你希望知道哪部分余额变成了消费，以及还剩多少可用余额。",
  "Use the balance you already earn": "使用你已经获得的余额",
  "Pay for real life": "支付真实生活开支",
  "Keep activity visible": "让资金动态清晰可见",
  "Stay ready across borders": "跨境生活随时准备",
  "Cover the moving parts": "覆盖生活中的各项开支",
  "Understand the total cost": "了解总成本",
  "Keep value in dollars": "持有美元价值",
  "Spend on demand": "按需消费",
  "Follow every step": "跟踪每一步",
  "Pay for global services": "支付全球线上服务",
  "Keep your balance visible": "让余额清晰可见",
  "Know what is supported": "了解支持范围",
  "From on-chain income to a real purchase.": "从链上收入到真实消费。",
  "Keep supported funds ready, then connect them to everyday spending when you choose.": "准备好支持的资金，在需要时将它们连接到日常消费。",
  "From dollar balance to local purchase.": "从美元余额到本地消费。",
  "From stablecoin balance to online checkout.": "从稳定币余额到线上结账。",
  "Move supported funds into Kaloq, then use the card for eligible global online purchases.": "将支持的资金转入 Kaloq，再使用卡支付符合条件的全球线上消费。",
  "Start with supported stablecoins": "从支持的稳定币开始",
  "Move funds into Kaloq": "将资金转入 Kaloq",
  "Pay with the Kaloq Card": "使用 Kaloq 卡支付",
  "The merchant receives fiat": "商户收到法币",
  "Keep supported USDT or USDC in your personal wallet.": "将支持的 USDT 或 USDC 保存在你的个人钱包中。",
  "Transfer funds into Kaloq and review the available balance.": "将资金转入 Kaloq，并查看可用余额。",
  "Use the card for eligible online, in-store, and travel purchases.": "使用卡支付符合条件的线上、线下和旅行消费。",
  "Stablecoins are converted in the card flow; merchants receive ordinary local currency.": "稳定币会在刷卡流程中完成转换，商户收到普通本地货币。",
  "Merchants do not receive crypto directly. Supported stablecoins are converted in the card transaction flow and the merchant receives ordinary fiat currency. KYC, transaction monitoring, source-of-funds review, and restrictions for certain regions or high-risk merchants may apply.": "商户不会直接收到加密货币。支持的稳定币会在卡片交易流程中转换，商户收到普通法币。可能适用 KYC、交易监控、资金来源审查，以及特定地区或高风险商户限制。",
  "Does the merchant receive crypto?": "商户会收到加密货币吗？",
  "What checks apply?": "需要哪些审核？",
  "What can I use Kaloq for?": "Kaloq 可以用来做什么？",
  "Which assets and networks are supported?": "支持哪些资产和网络？",
  "Where can I use the Kaloq Card?": "我可以在哪里使用 Kaloq 卡？",
  "Can I see my balance and transactions?": "我可以查看余额和交易吗？",
  "Pricing you can see before you sign.": "在确认之前就能看到价格。",
  "Indicative fees are shown up front, with final costs confirmed in-app before you commit.": "费用会提前以参考值展示，最终成本将在应用内确认后确定。",
  "Simple fees, shown clearly.": "简单清晰的费用。",
  "Understand the possible cost of funding, spending, converting, and withdrawing before you use your card.": "在使用卡之前，先了解充值、消费、转换和提现可能产生的成本。",
  "Kaloq Card pricing": "Kaloq 卡价格",
  "Indicative card fees": "参考卡片费用",
  "Indicative — pending final confirmation": "参考值 — 等待最终确认",
  "Virtual card application": "虚拟卡申请",
  "Physical card delivery": "实体卡配送",
  "Card funding": "卡片充值",
  "Card transaction": "卡片交易",
  "Transaction fee": "交易费用",
  "Foreign exchange": "外汇转换",
  "ATM withdrawal": "ATM 提现",
  "Card replacement": "补卡",
  Free: "免费",
  "Ready to make your balance spendable?": "准备好让余额可以消费了吗？",
  "Start with supported stablecoins and review the final cost before you confirm.": "从支持的稳定币开始，并在确认前查看最终成本。",
  "Pricing questions": "价格常见问题",
  "Are these fees final?": "这些费用是最终费用吗？",
  "How does foreign exchange affect the total?": "外汇转换如何影响总成本？",
  "Can an ATM charge more?": "ATM 可能额外收费吗？",
  "Is card funding charged?": "卡片充值会收费吗？",
  "Do fees vary by region?": "费用会因地区而不同吗？",
  Capabilities: "核心能力",
  "Receive, convert, move,": "可收款、可兑换、可转账、",
  "spend": "可消费。",
  "Receive funds from banks and wallets, instantly.": "从银行或钱包收款，即时到账.",
  "Bank transfer": "银行转账",
  Wallet: "钱包",
  "Convert stablecoins into local currencies, seamlessly.": "稳定币→本币，随时兑。",
  "Account-level FX · Coming Soon": "账户级外汇兑换 · 即将推出",
  "Move money freely": "自由转移资金",
  "across global networks.": "跨越全球网络。",
  "Spend stablecoins wherever you go.": "无论走到哪里，都可以使用稳定币消费。",
  "The Card": "Kaloq 卡",
  "Your crypto, ready for": "您的加密资产，随时用于",
  everyday: "日常",
  "Fund your card with supported digital assets and use it for everyday purchases — online, in stores, and while traveling.": "用支持的加密资产为卡片充值，即可用于日常消费——线上购物、线下门店和旅行途中，随处可刷。",
  "Learn more": "了解更多",
  "Kaloq Card is issued by licensed, regulated partners.": "Kaloq 卡由持牌且受监管的合作伙伴发行。",
  "Spend with confidence": "放心消费",
  "Use your card for everyday purchases with reliable transaction processing.": "日常消费刷卡，交易处理稳定可靠。",
  "Manage everything in real time": "一切实时管理",
  "View transactions, manage your balance, and control your card directly from the app.": "交易明细、余额查询和卡片管控，均可直接在应用内轻松完成。",
  "Fund with crypto": "加密资产充值",
  "Add funds using supported stablecoins or digital assets without a complicated payment process.": "使用支持的稳定币或数字资产充值，流程简单不繁琐。",
  "Use it around the world": "全球通用",
  "Pay online and in stores across supported countries, currencies, and merchant categories.": "线上支付、线下刷卡，覆盖支持的国家、货币和商户类型。",
  "Current balance": "当前余额",
  "USD is available today; additional balance currencies are coming soon.": "目前支持 USD；更多余额货币即将推出。",
  "Get started fast. And never stop": "即刻开通，畅享无界",
  "spending": "消费",
  "Issue your card instantly": "即开即用，卡片秒发",
  "A virtual card the moment you sign up. No paperwork, no waiting.": "注册完成即可获得虚拟卡，无需填表，无需等待。",
  "Add it to Apple Pay or Google Pay": "支持 Apple Pay 和 Google Pay",
  "Tap your phone anywhere cards are accepted — 150+ countries.": "在支持刷卡的场所轻触手机即可支付，覆盖 150 多个国家和地区。",
  "Spend stablecoins, settle instantly": "用稳定币消费，即时结算",
  "USDC leaves your balance. The merchant gets paid in their currency.": "从您的 USDC 余额中扣款，商户以当地货币收款。",
  "Everyday spending": "日常消费",
  "One card for the way you ": "一张卡，适合你的",
  "Online shopping": "线上购物",
  Subscriptions: "订阅服务",
  Travel: "旅行",
  "Daily purchases": "日常消费",
  "Crypto funding": "加密资产充值",
  "From crypto balance to everyday ": "从加密资产余额到日常",
  purchases: "消费",
  "Global use": "全球使用",
  "Made for spending across ": "为跨境",
  borders: "消费而设计",
  "Card controls": "卡片控制",
  "Your card, always under your ": "你的卡片始终由你",
  control: "掌控",
  fees: "费用",
  "Clear and transparent ": "清晰透明的",
  "Who can apply for the card?": "谁可以申请这张卡？",
  "Which digital assets can I use to fund my card?": "哪些数字资产可以用于充值？",
  "Where can I use the card?": "我可以在哪里使用这张卡？",
  "Are there any spending limits?": "有消费限额吗？",
  "How long does card approval take?": "卡片审核需要多久？",
  "What should I do if my card is lost?": "卡片丢失后该怎么办？",
  "View the full fee schedule": "查看完整费用表",
  "Make your crypto ": "让你的加密资产",
  spendable: "不止于持有",
  "Kaloq Global Account": "Kaloq 全球账户",
  "One account.": "一个账户。",
  "More ways to hold,": "更多持有方式，",
  "convert, and spend": "兑换并消费",
  "Manage USD today. EUR, GBP, MXN, BRL balances and account-level FX are coming soon.": "今天即可管理 USD。EUR、GBP、MXN、BRL 余额及账户级外汇兑换即将推出。",
  "USD is currently available. Additional currencies and FX are coming soon, subject to region and account eligibility.": "目前支持 USD。更多货币和外汇兑换即将推出，具体取决于地区和账户资格。",
  "USD Account": "USD 账户",
  "A clear home for your available USD.": "清晰管理可用 USD 余额。",
  "Track your USD balance, review every movement, and connect the account to Kaloq Card when you are ready to spend.": "查看 USD 余额和每笔变动，并在准备好消费时连接 Kaloq 卡。",
  "Currency Accounts": "多币种账户",
  "USD is available today. EUR, GBP, MXN, and BRL balances are coming soon.": "目前支持 USD。EUR、GBP、MXN 和 BRL 余额即将推出。",
  "Account-level FX": "账户级外汇兑换",
  "A clear workspace for converting between balances is coming soon, with no invented live quotes.": "清晰的账户内兑换工作区即将推出，不展示虚构的实时报价。",
  "Unified activity": "统一活动记录",
  "See funds entering the account, Card spending, and future FX records together.": "统一查看入账、卡片消费和未来外汇记录。",
  "Available USD": "可用 USD",
  "USD": "USD",
  "EUR": "EUR",
  "GBP": "GBP",
  "MXN": "MXN",
  "BRL": "BRL",
  "Available": "可用",
  "Coming Soon": "即将推出",
  "FX Workspace": "外汇兑换工作区",
  "Convert inside the account.": "在账户内完成兑换。",
  "The workspace is designed for transparent account-level FX. USD is available today; destination balances, quotes, and confirmation are coming soon.": "工作区将提供透明的账户级外汇兑换体验。目前支持 USD，目标余额、报价和确认功能即将推出。",
  "From": "从",
  "USD · Available": "USD · 可用",
  "To": "至",
  "Choose currency": "选择货币",
  "No live quote yet · Coming Soon": "暂未提供实时报价 · 即将推出",
  "Activity": "活动记录",
  "Account funding": "账户入金",
  "USD balance added": "USD 余额增加",
  "Card purchase": "卡片消费",
  "Kaloq Card spending": "Kaloq 卡消费",
  "FX workspace": "外汇兑换工作区",
  "EUR balance": "EUR 余额",
  "Connect USD to Kaloq Card.": "将 USD 连接到 Kaloq 卡。",
  "Your available USD balance can connect to Kaloq Card for supported online and in-store purchases.": "可用 USD 余额可连接 Kaloq 卡，用于支持的线上和线下消费。",
  "More ways to use your balance": "更多余额使用方式",
  "From your account to everyday spending.": "从账户余额到日常消费。",
  "Start with your USD account.": "从 USD 账户开始。",
  "Manage USD today, connect Kaloq Card, and watch for more currencies and account-level FX coming soon.": "今天即可管理 USD 并连接 Kaloq 卡，更多货币和账户级外汇兑换即将推出。",
  "Book a demo.": "预约演示。",
  "Book a Demo": "预约演示",
  "Tell us about your business and we'll set up time to talk.": "告诉我们你的需求，我们会安排时间与你沟通。",
  "Thank you.": "谢谢你。",
  "We’ll contact you shortly.": "我们会尽快联系你。",
  "Something went wrong. Please try again or email operations@kaloq.com.": "提交失败，请重试或发送邮件至 operations@kaloq.com。",
  "Name": "姓名",
  "Work email": "工作邮箱",
  Company: "公司",
  "Company name": "公司名称",
  "Use case": "使用场景",
  "Monthly volume": "月度金额",
  Message: "留言",
  "Tell us a bit about what you need.": "请简单介绍你的需求。",
  "Select an option": "请选择",
  Card: "卡片",
  Both: "两者都需要",
  "Under $10k": "1 万美元以下",
  "$10k–$50k": "1 万至 5 万美元",
  "$50k–$250k": "5 万至 25 万美元",
  "$250k+": "25 万美元以上",
  "Terms of Service": "服务条款",
  "Privacy Policy": "隐私政策",
  "Last updated:": "最后更新：",
  "Ready to": "准备好开始",
  "Open your account in minutes. Free to start.": "几分钟即可开通账户，免费开始使用。",
  "Talk to sales": "联系销售",
  "Use cases": "使用场景",
  "Built for how you": "贴合您的日常",
  live: "所需",
  "Stablecoin earners": "稳定币收入者",
  "Turn on-chain income into travel, subscriptions, shopping and everyday spending.": "链上收入，轻松用于旅行、订阅、购物和日常消费。",
  "Cross-border living": "跨境生活",
  "Keep a dollar balance while you live, work or travel across borders.": "无论在哪里生活、工作或旅行，随时保有美元价值。",
  "Dollar balance holders": "美元资产持有者",
  "Hold supported dollar stablecoins, then spend only what everyday life needs.": "持有支持的美元稳定币，按日常所需灵活消费。",
  "Global online spending": "全球线上消费",
  "Use your supported stablecoin balance for eligible subscriptions, software and global online purchases.": "使用支持的稳定币余额支付符合条件的订阅、软件和全球线上消费。",
  "See how": "了解更多",
  "Making stablecoins easy to move and spend for people today, and AI agents tomorrow.": "让稳定币转账与消费更轻松，服务当下用户，也面向未来的 AI 智能体。",
  Legal: "法律信息",
  "Kaloq provides a software interface for services delivered by third-party providers.": "Kaloq 提供软件界面，相关服务由第三方服务提供商交付。",
  "Product availability, eligibility, fees, and terms vary by region and account.": "产品可用性、资格、费用和条款因地区及账户而异。",
  "Kaloq is not a bank. Digital assets and stablecoins are not bank deposits and may not be insured.": "Kaloq 不是银行。数字资产和稳定币并非银行存款，且可能不受保险保障。",
  "No. Kaloq is not a bank. The responsible third-party provider is identified in the applicable product flow and terms.": "不是。Kaloq 不是银行。负责相关服务的第三方提供商会在适用的产品流程和条款中说明。",
  "USD Available": "USD 可用",
  "USD balance": "USD 余额",
  "Connected to Kaloq Card": "已连接 Kaloq 卡",
};

const reverseTranslations = Object.fromEntries(Object.entries(translations).map(([en, zh]) => [zh, en]));

function normalize(value: string) {
  return value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
}

function translateValue(value: string, language: Language) {
  const normalized = normalize(value);
  const english = reverseTranslations[normalized] ?? normalized;
  const translated = language === "zh" ? translations[english] ?? english : english;
  if (!translated || translated === normalized) return value;
  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  return `${leading}${translated}${trailing}`;
}

function translateDocument(language: Language) {
  const root = document.body;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const textNodes: Text[] = [];
  let node = walker.nextNode();
  while (node) {
    const parent = node.parentElement;
    if (parent && !["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
      textNodes.push(node as Text);
    }
    node = walker.nextNode();
  }
  textNodes.forEach((textNode) => {
    const current = textNode.textContent ?? "";
    const next = translateValue(current, language);
    if (next !== current) textNode.textContent = next;
  });

  document.querySelectorAll<HTMLElement>("[placeholder], [aria-label], [title]").forEach((element) => {
    ["placeholder", "aria-label", "title"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value) {
        const next = translateValue(value, language);
        if (next !== value) element.setAttribute(attribute, next);
      }
    });
  });
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem("kaloq-language", nextLanguage);
  };

  useEffect(() => {
    const saved = window.localStorage.getItem("kaloq-language");
    if (saved !== "zh" && saved !== "en") return;
    const timer = window.setTimeout(() => setLanguageState(saved), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.language = language;
    const frame = window.requestAnimationFrame(() => translateDocument(language));
    const observer = new MutationObserver(() => translateDocument(language));
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();
  const nextLanguage = language === "en" ? "zh" : "en";
  return (
    <button
      type="button"
      aria-label={language === "en" ? "切换到中文" : "Switch to English"}
      onClick={() => setLanguage(nextLanguage)}
      className={`rounded-full border border-current/20 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-current/10 ${className}`}
    >
      {language === "en" ? "中文" : "EN"}
    </button>
  );
}
