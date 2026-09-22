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
  "Keep a dollar balance. Spend in local currency": "持有美元余额，用本地货币消费",
  "Hold dollar value. Spend in local currency": "持有美元价值，用本地货币消费",
  "Use your stablecoin balance for global online spending": "用你的稳定币余额进行全球线上消费",
  "If you earn in supported USDT or USDC, move it into Kaloq and use the Kaloq Card for travel, subscriptions, shopping, and everyday expenses.": "如果你通过支持的 USDT 或 USDC 获得收入，可以将资金转入 Kaloq，再使用 Kaloq 卡支付旅行、订阅、购物和日常开支。",
  "Hold supported dollar stablecoins and use the Kaloq Card for eligible expenses as you live, work, or travel across borders.": "持有支持的美元稳定币，在跨境生活、工作或旅行时使用 Kaloq 卡支付符合条件的开支。",
  "Keep supported dollar stablecoins in your wallet, then move funds into Kaloq when everyday expenses arise.": "将支持的美元稳定币留在钱包中，在需要支付日常开支时再把资金转入 Kaloq。",
  "Move supported USDT or USDC into Kaloq and use the Kaloq Card for eligible subscriptions, software, shopping, travel bookings, and other international online purchases.": "将支持的 USDT 或 USDC 转入 Kaloq，使用 Kaloq 卡支付符合条件的订阅、软件、购物、旅行预订和其他国际线上消费。",
  "Get your card": "立即申卡",
  "Explore Kaloq Card": "了解 Kaloq 卡",
  "See pricing": "查看价格",
  "Your balance should work where you spend": "你的余额应该能在你消费的地方发挥作用",
  "The friction": "消费中的阻力",
  "How it works": "运作方式",
  "Built for your life": "为你的生活而生",
  "Built for the way you spend": "为你的消费方式而设计",
  "Real usage flow": "真实消费流程",
  "From your balance to a real purchase": "从余额到真实消费",
  "Questions": "常见问题",
  "A clearer way to spend": "更清晰的消费方式",
  "Keep your balance ready to spend": "让你的余额随时可以消费",
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
  "A direct path from supported on-chain income to the things you buy": "从链上收入到日常消费，一步到位",
  "Use the balance you already earn": "用你已经拥有的资产",
  "Start with supported USDT or USDC in your personal wallet.": "从个人钱包中持有的 USDT、USDC 等稳定币开始，无需额外兑换步骤。",
  "Pay for real life": "为真实生活买单",
  "Use the Kaloq Card for software, subscriptions, travel, shopping, and everyday expenses.": "软件订阅、会员续费、旅行出行、购物餐饮——Kaloq Card 一卡全包。",
  "Keep activity visible": "所有动态，一目了然",
  "Review your balance, card activity, and transfer status in one place.": "余额、消费记录和转账状态，全部在 App 内清晰可查。",
  "One personal spending flow for the places your life takes you": "一套个人消费流程，陪你走过生活的每一程",
  "Stay ready across borders": "跨境无忧",
  "Keep supported dollar stablecoins available for eligible local spending.": "持有支持的美元稳定币，随时随地用于符合条件的本地消费。",
  "Cover the moving parts": "覆盖多元场景",
  "Use the Kaloq Card for travel, accommodation, transport, restaurants, and online tools.": "使用 Kaloq Card 轻松支付旅行、住宿、交通、餐饮及在线工具等各类开销。",
  "Understand the total cost": "费用清晰透明",
  "Review current indicative fees and confirm the final cost before you spend.": "消费前即可查看当前参考费率，确认最终成本后再支付，心中有数。",
  "Keep value in dollars": "持有美元价值",
  "Spend on demand": "按需消费",
  "Follow every step": "跟踪每一步",
  "Pay for global services": "支付全球线上服务",
  "Keep your balance visible": "让余额清晰可见",
  "Know what is supported": "了解支持范围",
  "From on-chain income to a real purchase": "从链上收入到真实消费",
  "Move supported funds into Kaloq, then let the card handle the payment flow.": "将支持的数字资产转入 Kaloq 账户，卡片将自动处理后续支付流程。",
  "Keep the same balance as life moves": "生活不停，余额不减",
  "Your wallet balance starts the flow; the card completes it in local spending.": "钱包余额是起点，卡片支付是终点——从链上到手中，一步到位。",
  "Keep supported funds ready, then connect them to everyday spending when you choose.": "准备好支持的资金，在需要时将它们连接到日常消费。",
  "From dollar balance to local purchase": "从美元余额到本地消费",
  "Keep supported dollar stablecoins ready, then connect them to everyday spending when you choose.": "持有支持的美元稳定币，随时将其转化为日常消费力——想花就花。",
  "From stablecoin balance to online checkout": "从稳定币余额到线上结账",
  "Move supported funds into Kaloq, then use the card for eligible global online purchases.": "将支持的资金转入 Kaloq，再使用卡支付符合条件的全球线上消费。",
  "Start with supported stablecoins": "从支持的稳定币开始",
  "Move funds into Kaloq": "将资金转入 Kaloq",
  "Pay with the Kaloq Card": "使用 Kaloq 卡支付",
  "The merchant receives fiat": "商户收到法币",
  "Keep supported USDT or USDC in your personal wallet.": "将支持的 USDT 或 USDC 保存在你的个人钱包中。",
  "Transfer funds into Kaloq and review the available balance.": "将资金转入 Kaloq，并查看可用余额。",
  "Use the card for eligible online, in-store, and travel purchases.": "使用卡支付符合条件的线上、线下和旅行消费。",
  "Stablecoins are converted in the card flow; merchants receive ordinary local currency.": "稳定币会在刷卡流程中完成转换，商户收到普通本地货币。",
  "Move supported stablecoins from your wallet, review your available balance, and use your Kaloq Card for the next thing your day needs.": "从钱包转入支持的稳定币，查看可用余额，然后用 Kaloq Card 轻松支付日常所需——买咖啡、订机票、刷会员，一卡搞定。",
  "Keep dollar value connected to the moments you need to spend": "让美元价值，随时连接每一个需要消费的时刻",
  "Hold supported dollar stablecoins until an eligible expense comes up.": "持有支持的美元稳定币，等待每一次符合条件、值得消费的时刻。",
  "Move only what you need into Kaloq and use the Kaloq Card for eligible local purchases.": "需要多少，转入多少——使用 Kaloq Card 轻松支付符合条件的本地开销。",
  "See balances, card activity, and transfer status before and after you spend.": "消费前后，余额、卡片动态和转账状态——每一步都清晰可见。",
  "Bring the balance you hold into the online services you use": "将你持有的资产，无缝连接到日常使用的线上服务中",
  "Use the Kaloq Card for eligible subscriptions, software, shopping and travel bookings.": "使用 Kaloq Card 轻松支付符合条件的订阅会员、软件服务、在线购物及旅行预订等各类开销。",
  "Review your balance, card activity and transfer status in one place.": "余额、卡片动态和转账状态——全部在账户中集中展示，随时掌握。",
  "Payment availability depends on your region, merchant category and card verification requirements.": "支付可用性视所在地区、商户类别及卡片验证要求而定，App 内可实时查询。",
  "Merchants do not receive digital assets directly. Supported digital assets are converted in the card transaction flow and the merchant receives ordinary fiat currency. KYC, transaction monitoring, source-of-funds review, and restrictions for certain regions or high-risk merchants may apply.": "商户不会直接收到数字资产。支持的数字资产会在卡片交易流程中完成转换，商户收到普通法定货币。可能需要进行 KYC、交易监控和资金来源审核；部分地区或高风险商户也可能受到限制。",
  "Kaloq activity": "Kaloq 动态",
  Illustrative: "示意",
  "Wallet balance": "钱包余额",
  "Added to Kaloq": "转入 Kaloq",
  Ready: "可用余额已就绪",
  Approved: "交易已批准",
  "Does the merchant receive digital assets?": "商户会收到数字资产吗？",
  "What checks apply?": "需要哪些审核？",
  "What can I use Kaloq for?": "Kaloq 可以用来做什么？",
  "Which assets and networks are supported?": "支持哪些资产和网络？",
  "Where can I use the Kaloq Card?": "我可以在哪里使用 Kaloq 卡？",
  "Can I see my balance and transactions?": "我可以查看余额和交易吗？",
  "Kaloq helps you move supported assets from your wallet into a balance you can use with the Kaloq Card for eligible everyday purchases.": "Kaloq 帮助你将钱包中支持的资产转入卡片余额，使用 Kaloq Card 轻松支付日常消费。",
  "Support varies by region and account. Your Kaloq account shows the assets and networks currently available to you.": "支持范围因地区和账户而异。你的 Kaloq 账户中会显示当前可用的资产和网络。",
  "Use the card for supported online, in-store, and travel purchases. Availability depends on your region and merchant category.": "卡片可用于支持的线上、线下及旅行消费，具体可用范围视所在地区和商户类别而定。",
  "Yes. Your account shows available balance, card activity, and transfer status in one place.": "可以。你的账户中会集中显示可用余额、卡片交易动态及转账状态，一目了然。",
  "No. In the card transaction flow, supported stablecoins are converted and the merchant receives ordinary fiat currency.": "不会。在卡片交易流程中，支持的稳定币会完成兑换，商户收到的是普通法定货币。",
  "KYC, transaction monitoring, source-of-funds review, and restrictions for certain regions or high-risk merchants may apply.": "需遵守 KYC 身份验证、交易监控和资金来源审核等要求；部分地区或高风险商户可能受限。",
  "Pricing you can see before you sign.": "在确认之前就能看到价格。",
  "Indicative fees are shown up front, with final costs confirmed in-app before you commit.": "费用会提前以参考值展示，最终成本将在应用内确认后确定。",
  "Simple fee, shown clearly.": "简单清晰的费用。",
  "Understand the possible cost of funding, spending, converting, and withdrawing before you use your card.": "在使用卡之前，先了解充值、消费、转换和提现可能产生的成本。",
  "Kaloq Card pricing": "Kaloq 卡价格",
  "Indicative card fee": "卡费参考",
  "Other fee": "其他费用",
  "First virtual card": "首张虚拟卡",
  "Fee for opening the first virtual card.": "首张虚拟卡的开卡费用。",
  "$0.50 per card": "每张 $0.50",
  "Virtual card issuance or replacement": "虚拟卡开卡或补卡",
  "Fee for each additional or replacement virtual card.": "每张新增或补发虚拟卡的费用。",
  "$5 per card": "每张 $5",
  "Physical card": "实体卡",
  "Card opening fee; shipping is charged separately.": "实体卡开卡费用，运费另计。",
  "Physical card replacement": "实体卡补发",
  "Replacement fee; shipping is charged separately.": "实体卡补发费用，运费另计。",
  "Monthly account fee": "账户月费",
  "Monthly account maintenance fee.": "账户每月维护费用。",
  "$0.15-$0.25": "$0.15-$0.25",
  "Card cancellation": "卡片注销",
  "No card cancellation fee.": "免收卡片注销费。",
  "USDT/USDC top-up": "USDT/USDC 充值",
  "Fee for funding the card with USDT or USDC.": "使用 USDT 或 USDC 为卡片充值的费用。",
  "Apple Pay authorization": "Apple Pay 授权",
  "Authorization fee for Apple Pay transactions.": "Apple Pay 交易授权费用。",
  "0.2% · minimum $0.06": "0.2% · 最低 $0.06",
  "USD transaction": "美元消费",
  "Fee for card transactions settled in USD.": "以美元结算的卡片交易费用。",
  "$0.30 per transaction": "每笔 $0.30",
  "Cross-border transaction": "跨境消费",
  "Fee for cross-border card transactions.": "跨境卡片交易费用。",
  "Non-USD foreign exchange": "非美元外汇转换",
  "Foreign-exchange fee for transactions in non-USD currencies.": "非美元币种交易的外汇转换费用。",
  "Withdrawal fee; the ATM operator may charge separately.": "ATM 提现费用；ATM 运营商可能另行收费。",
  "2% · minimum $2": "2% · 最低 $2",
  Cashback: "返现",
  "Cashback rate for eligible transactions.": "符合条件交易的返现比例。",
  "Authorization fee": "授权费",
  "Fee for card transaction authorization.": "卡片交易授权费用。",
  "$0.15 per transaction": "每笔 $0.15",
  "Card verification": "卡片验证",
  "Fee for a card verification attempt.": "每次卡片验证的费用。",
  "$0.10-$0.50": "$0.10-$0.50",
  "Refund fee": "退款费",
  "Fee applied when a transaction is refunded.": "交易退款时收取的费用。",
  "Reversal fee": "撤销费",
  "$1 per transaction": "每笔 $1",
  "Fee for a reversed transaction.": "每笔撤销交易的费用。",
  "Decline fee": "拒绝交易费",
  "$0.50 per transaction": "每笔 $0.50",
  "Applies when the card decline rate is 20% or higher.": "卡片交易拒绝率达到或超过 20% 时适用。",
  "Dispute / chargeback": "争议 / 拒付",
  "$45 per transaction": "每笔 $45",
  "Fee for each dispute or chargeback.": "每笔争议或拒付交易的费用。",
  "Cashback exclusions": "返现排除交易",
  "Not eligible": "不符合返现条件",
  "ATM withdrawals, transfers, wallet top-ups, financial transactions, gambling, refunds, and abnormal transactions.": "ATM 提现、转账、钱包充值、金融类交易、赌博、退款及异常交易。",
  "Virtual card application": "虚拟卡申请",
  "Physical card delivery": "实体卡配送",
  "Card funding": "卡片充值",
  "Card transaction": "卡片交易",
  "Transaction fee": "交易费用",
  "Foreign exchange": "外汇转换",
  "ATM withdrawal": "ATM 提现",
  "Card replacement": "补卡",
  "Indicative rate for a virtual card application.": "虚拟卡开通费用参考。",
  "Indicative delivery charge for a physical card.": "实体卡配送费用参考。",
  "Indicative rate when funding your card balance.": "向卡内充值时的费用参考。",
  "Indicative card transaction fee.": "每笔消费的手续费参考。",
  "Indicative FX rate when conversion applies.": "涉及货币转换时收取的费用参考。",
  "Indicative rate; the ATM operator may charge separately.": "取现费用参考；ATM 运营商可能额外收取费用。",
  "Indicative replacement charge.": "卡片补发费用参考。",
  Free: "免费",
  "Ready to make your balance spendable?": "准备好让你的数字资产走进日常了吗？",
  "Start with supported stablecoins and review the final cost before you confirm.": "使用支持的主流稳定币充值，确认前清晰查看最终费用，让每一笔都心中有数。",
  "Pricing questions": "费用常见问题",
  "Is this fee final?": "这是最终费用吗？",
  "How does foreign exchange affect the total?": "外汇转换如何影响总成本？",
  "Can an ATM charge more?": "ATM 可能额外收费吗？",
  "Is card funding charged?": "卡片充值会收费吗？",
  "Does the fee vary by region?": "费用会因地区而不同吗？",
  "No. The figures on this page are indicative and pending final confirmation. Check the in-app confirmation page and formal fee schedule before using the card.": "还不是。本页所示费用为参考标准，最终费率尚待确认。使用卡片前，请以 App 内确认页面及正式费率表为准。",
  "An indicative FX rate may apply when a transaction requires conversion. The final amount depends on the currencies and route involved.": "当交易涉及货币转换时，将适用参考汇率。最终金额视具体币种及兑换路径而定。",
  "Yes. An ATM operator may add its own fee on top of Kaloq's indicative withdrawal rate.": "会的。除了 Kaloq 收取的取现参考费，ATM 运营商也可能额外收取服务费，具体以 ATM 提示为准。",
  "The current indicative card funding rate is 0.9%. Funding method, supported asset, network, and region can affect the final cost.": "当前卡片充值参考费率为 0.9%。最终费用视充值方式、资产类型、网络及所在地区而定。",
  "A 1.80% indicative fee applies to non-USD foreign exchange. Cross-border transactions also carry a 1.80% indicative fee. The final amount depends on the currencies and route involved.": "非美元外汇转换的参考费率为 1.80%，跨境交易的参考费率同样为 1.80%。最终金额视具体币种及交易路径而定。",
  "Yes. Kaloq's indicative withdrawal fee is 2%, with a $2 minimum, and an ATM operator may add its own fee.": "会的。Kaloq 的 ATM 提现参考费率为 2%，最低收费 $2；ATM 运营商还可能另行收费。",
  "The current indicative USDT/USDC top-up fee is 0.10%. Funding method, supported asset, network, and region can affect the final cost.": "当前 USDT/USDC 充值参考费率为 0.10%。最终费用可能受充值方式、资产类型、网络及所在地区影响。",
  "It can. Availability, supported assets, conversion routes, and the applicable fee depend on your region and account.": "会的。服务可用性、支持资产、兑换路径及适用费用会因所在地区和账户情况而异。",
  Capabilities: "核心能力",
  "Receive, convert, move,": "可收款、可兑换、可转账、",
  "spend": "消费",
  "Receive funds from banks and wallets, instantly.": "从银行或钱包收款，即时到账.",
  "Bank transfer": "银行转账",
  Wallet: "钱包",
  "Convert stablecoins into local currencies, seamlessly.": "稳定币→本币，随时兑。",
  "Account-level FX · Coming Soon": "账户级外汇兑换 · 即将推出",
  "Move money freely": "自由转移资金",
  "across global networks.": "跨越全球网络。",
  "Spend stablecoins wherever you go.": "无论走到哪里，都可以使用稳定币消费。",
  "The Card": "Kaloq 卡",
  "Your supported digital assets, ready for": "让支持的数字资产，随时用于",
  everyday: "日常",
  "Fund your card with supported digital assets and use it for everyday purchases — online, in stores, and while traveling.": "用支持的数字资产为卡片充值，即可用于日常消费——线上购物、线下门店和旅行途中，随处可刷。",
  "Learn more": "了解更多",
  "Kaloq Card is issued by licensed, regulated partners.": "Kaloq 卡由持牌且受监管的合作伙伴发行。",
  "Spend with confidence": "放心消费",
  "Use your card for everyday purchases with reliable transaction processing.": "日常消费刷卡，交易处理稳定可靠。",
  "Manage everything in real time": "一切实时管理",
  "View transactions, manage your balance, and control your card directly from the app.": "交易明细、余额查询和卡片管控，均可直接在应用内轻松完成。",
  "Fund with supported digital assets": "使用支持的数字资产充值",
  "Add funds using supported stablecoins or digital assets without a complicated payment process.": "使用支持的稳定币或数字资产充值，流程简单不繁琐。",
  "Use it around the world": "全球通用",
  "Pay online and in stores across supported countries, currencies, and merchant categories.": "线上支付、线下刷卡，覆盖支持的国家、货币和商户类型。",
  "Current balance": "多币种余额",
  "USD is available today; additional balance currencies are coming soon.": "目前支持 USD；更多余额货币即将推出。",
  "Get started fast. And never stop": "即刻开通，畅享无界",
  "spending": "消费",
  "Issue your card instantly": "即开即用，卡片秒发",
  "A virtual card the moment you sign up. No paperwork, no waiting.": "注册完成即可获得虚拟卡，无需填表，无需等待。",
  "Mobile Wallet Payment": "移动钱包支付",
  "Tap your phone anywhere cards are accepted — 150+ countries.": "在支持刷卡的场所轻触手机即可支付，覆盖 150 多个国家和地区。",
  "Spend stablecoins, settle instantly": "用稳定币消费，即时结算",
  "USDC leaves your balance. The merchant gets paid in their currency.": "从您的 USDC 余额中扣款，商户以当地货币收款。",
  "Everyday spending": "日常消费",
  "One card for the way you": "一张卡，轻松覆盖您的日常",
  "From subscriptions and online shopping to dining, travel, and daily purchases, use one card for more of your everyday spending.": "从订阅服务、网上购物，到外出就餐、旅行出行和日常购物，一张卡轻松覆盖每天的更多开销。",
  "Online shopping": "线上购物",
  "Pay for products and services across supported online merchants.": "在支持的线上商户购买商品与服务，随心支付。",
  Subscriptions: "订阅服务",
  "Manage entertainment, software, gaming, and other recurring payments.": "轻松管理娱乐、软件、游戏及其他周期性付款。",
  Travel: "旅行",
  "Use your card for flights, hotels, transportation, and purchases abroad.": "机票、酒店、交通和境外购物，均可使用此卡支付。",
  "Daily purchases": "日常消费",
  "Pay for dining, shopping, and other eligible in-store expenses.": "用于餐饮、购物及其他符合条件的线下门店消费。",
  Freeze: "冻结卡片",
  "Available balance": "可用余额",
  "View all transactions": "查看全部交易",
  Today: "今天",
  Yesterday: "昨天",
  "July 18": "7 月 18 日",
  "8:42 AM · Contactless": "上午 8:42 · 非接触式支付",
  "Pending · aurorabooks.com": "处理中 · aurorabooks.com",
  "Subscription · renews Aug 1": "订阅服务 · 8 月 1 日续费",
  "6:18 PM · Oakland, CA": "下午 6:18 · 加州奥克兰",
  "Foreign transaction · EUR 386.40": "境外交易 · EUR 386.40",
  "2 nights · MXN 3,780.00": "住宿 2 晚 · MXN 3,780.00",
  "Refund posted": "退款已到账",
  "Digital asset funding": "数字资产充值",
  "From digital asset balance to everyday": "从数字资产余额到日常",
  purchases: "消费",
  "Start spending in three simple steps — no complicated payment process.": "简单三步即可开始消费，告别繁琐的支付流程。",
  "Apply for your card": "申请卡片",
  "Create an account and complete the required identity verification.": "注册账户并完成所需的身份验证，即可申请卡片。",
  "Add funds": "充值到账",
  "Fund your card with supported digital assets.": "转入支持的数字资产，卡片余额实时到账。",
  "Start spending": "开始消费",
  "Use your card for eligible online and in-store purchases.": "在线上线下所有支持的场景中使用卡片消费。",
  "Your wallet": "您的钱包",
  "Add funds easily — transfer supported assets into your card balance.": "充值轻松搞定——将支持的资产转入卡片余额，即刻可用。",
  "Card balance": "卡片余额",
  "Ready to spend": "随时可用",
  "+500 USDC added": "已添加 +500 USDC",
  "View your available balance before making a purchase.": "消费前随时查看可用余额，心中有数。",
  "Everyday purchase": "日常消费",
  "Track funding, payments, refunds, and status in one place.": "充值、支付、退款及交易状态集中记录，一目了然。",
  "Global use": "全球使用",
  "Made for spending across": "专为跨境",
  borders: "消费而生",
  "Use your card across supported markets and currencies, whether you are shopping online, traveling, or making everyday purchases.": "无论线上购物、境外旅行还是日常消费，一张卡即可覆盖支持的全球市场与多种货币。",
  "Countries & regions": "覆盖国家和地区",
  "Supported markets, online and in-store.": "覆盖支持的市场，线上线下均可使用。",
  Online: "线上",
  "And in-store": "线上线下全场景",
  "Across supported merchant categories.": "覆盖支持的商户类别。",
  Wallets: "钱包",
  "Supported digital wallets": "支持的数字钱包",
  "Contactless and mobile payments where available.": "在支持的地区，可使用非接触式支付和移动支付。",
  "Accepted at millions of supported merchants worldwide.": "全球数百万家支持的商户均可使用。",
  "Card controls": "卡片管理",
  "Your card, always under your ": "你的卡片始终由你",
  "Your card, always under your": "你的卡片始终由你",
  control: "掌控",
  "Manage your card and monitor spending directly from the app. Try the switch.": "打开 App，随时管理卡片、监控每一笔消费，一切尽在指尖。试试这个开关。",
  "Blue Bottle Coffee −$4.50 · Approved": "蓝瓶咖啡 −$4.50 · 已批准",
  "Transaction declined · Card frozen": "交易被拒绝 · 卡片已冻结",
  "Card active": "卡片状态 · 已激活",
  "Card frozen": "卡片状态 · 已冻结",
  "Real-time notifications": "实时通知",
  "Receive updates whenever a card transaction occurs.": "每笔交易发生时，第一时间收到提醒，消费动态心中有数。",
  "Freeze and unfreeze": "一键冻结与解冻",
  "Temporarily freeze your card and reactivate it when you are ready.": "临时找不到卡片时可随时冻结，找到后再一键解冻，灵活又安心。",
  "Pay with your phone": "手机就是卡",
  "Add your card to supported digital wallets for contactless payments.": "支持绑定主流数字钱包，使用感应支付，一碰即付。",
  "Security, built in": "安全，与生俱来",
  "Identity verification, transaction monitoring, and secure account access.": "身份验证、交易监控与账户安全防护，层层守护你的资金。",
  fees: "一目了然",
  "Clear and transparent ": "费用透明，",
  "Clear and transparent": "费用透明，",
  "View the complete fee schedule before applying for or using your card.": "申卡或使用前即可查看完整费率明细，每一笔花费都心中有数，无隐藏费用，清清楚楚消费。",
  "Questions, ": "常见问题，",
  "Questions,": "常见问题，",
  answered: "为你解答",
  "Who can apply for the card?": "谁可以申请这张卡？",
  "Which digital assets can I use to fund my card?": "哪些数字资产可以用于充值？",
  "Where can I use the card?": "我可以在哪里使用这张卡？",
  "Are there any spending limits?": "有消费限额吗？",
  "How long does card approval take?": "卡片审核需要多久？",
  "What should I do if my card is lost?": "卡片丢失后该怎么办？",
  "The card is available to users in supported regions who are 18 or older and complete identity verification during signup.": "年满 18 周岁、所在地区已开放服务，并在注册时完成身份验证即可申请。",
  "You can fund your card with supported stablecoins and digital assets across supported networks. The full list is available in the app.": "支持主流稳定币及数字资产，覆盖多条网络。完整清单请在 App 内查看。",
  "Online and in stores at millions of supported merchants worldwide, across supported countries and merchant categories.": "线上线下均可使用，覆盖全球数百万家支持的商户。",
  "Per-transaction, daily, and monthly limits apply and vary by region and verification level. You can view your limits in the app.": "单笔、每日及每月消费限额会因地区和身份验证等级而异，具体额度请在 App 内查看。",
  "Virtual cards are typically issued within minutes of approval. Physical cards arrive within 7–14 business days.": "虚拟卡通常在审核通过后几分钟内即可使用，实体卡将在 7–14 个工作日内送达。",
  "Freeze your card instantly from the app, then cancel it and order a replacement. Your balance stays safe in your account.": "请立即在 App 内冻结卡片，确认丢失后可挂失并申请补发；卡内余额仍安全保存在账户中。",
  "View all questions": "查看全部问题",
  "View the full fee schedule": "查看完整费用表",
  "Make your supported digital assets": "让支持的数字资产，",
  spendable: "走进日常生活",
  "Apply for your card, add supported digital assets, and start spending online and in stores.": "申请卡片，转入支持的数字资产，即可在线上线下随时消费——让数字资产融入日常生活。",
  "Check availability": "查询可用地区",
  "Kaloq Global Account": "Kaloq 全球账户",
  "Explore the account": "了解账户",
  "One account.": "一个账户。",
  "More ways to hold,": "更多持有方式，",
  "convert, and spend": "兑换并消费",
  "Manage USD today. EUR, GBP, MXN, BRL balances and account-level FX are coming soon.": "今天即可管理 USD。EUR、GBP、MXN、BRL 余额及账户级外汇兑换即将推出。",
  "USD account": "USD 账户",
  "Manage your available USD balance, review activity, and connect it to the Kaloq Card.": "管理可用的 USD 余额、查看账户动态，并连接至 Kaloq 卡。",
  "Currency accounts": "多币种账户",
  "USD is currently available. Additional currencies and FX are coming soon, subject to region and account eligibility.": "目前支持 USD。更多货币和外汇兑换即将推出，具体取决于地区和账户资格。",
  "A clearer way to move money.": "更清晰的资金流转方式。",
  "What is a Kaloq Global Account?": "什么是 Kaloq 全球账户？",
  "It is an account for managing your available USD balance today, with additional currency balances and account-level FX planned for the future.": "这是一个用于管理当前可用 USD 余额的账户，未来还将支持更多币种余额和账户级外汇兑换。",
  "Which currencies are available now?": "目前支持哪些币种？",
  "USD is currently available. EUR, GBP, MXN, and BRL balances are coming soon and will depend on region and account eligibility.": "目前支持 USD。EUR、GBP、MXN 和 BRL 余额即将推出，具体可用情况取决于所在地区和账户资格。",
  "How will account-level FX work?": "账户级外汇兑换如何运作？",
  "The planned FX workspace will let you review and confirm conversions between balances in one account. Quotes and destination balances are not live yet.": "规划中的外汇工作区将支持在同一账户内查看并确认不同余额之间的兑换。实时报价和目标币种余额功能尚未上线。",
  "Can I connect the account to Kaloq Card?": "可以将全球账户连接到 Kaloq 卡吗？",
  "Yes. Your available USD balance is designed to connect to Kaloq Card for eligible spending.": "可以。你的可用 USD 余额可连接至 Kaloq 卡，用于符合条件的消费。",
  "When will more currencies be available?": "何时会支持更多币种？",
  "EUR, GBP, MXN, and BRL are planned, but availability and timing will depend on product readiness, partners, and region.": "EUR、GBP、MXN 和 BRL 已列入规划，具体上线时间与可用范围将取决于产品准备情况、合作伙伴及所在地区。",
  "Is Kaloq a bank?": "Kaloq 是银行吗？",
  "No. Kaloq is not a bank. Account and card services are provided through applicable licensed partner institutions.": "不是。Kaloq 不是银行，账户与卡片服务由符合要求的持牌合作机构提供。",
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
  "Built on": "以",
  trust: "信任为基石",
  Licensed: "持牌合规",
  "US registered, VASP across the EU.": "美国注册，并具备欧盟 VASP 资质。",
  Audited: "审计认证",
  "Type II, continuous security audits.": "通过 Type II 认证，持续接受安全审计。",
  Custody: "托管保障",
  "Qualified, regulated custodians.": "由合格且受监管的托管机构提供服务。",
  Reserves: "储备透明",
  "Attested monthly by independent auditors.": "由独立审计机构按月鉴证。",
  "Custody & banking partners": "托管与银行合作伙伴",
  "Ready to": "准备好",
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
  "Kaloq is registered as a Money Services Business with FinCEN.": "Kaloq 已在 FinCEN 注册为货币服务企业。",
  "Card services are provided through licensed partner institutions.": "卡片服务由持牌合作机构提供。",
  "Kaloq is not a bank. Stablecoin balances are not FDIC insured.": "Kaloq 不是银行，稳定币余额不受 FDIC 保险保障。",
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
