import {bookingEvidence} from './journal.js';
import {tripSpending,matchedCardTransactions,suicaTransactions} from './budget.js';
// 固定試算匯率，並非當日匯率或銀行實際入帳匯率。
export const referenceRate=0.21;
const order=id=>bookingEvidence.find(e=>e.id===id);
const convert=e=>e.currency==='JPY'?e.amount*referenceRate:e.amount;
export const shoppingTransactions=matchedCardTransactions.filter(e=>['airport-duty-notification','airport-sky-shop'].includes(e.id));
export const otherCardTransactions=matchedCardTransactions.filter(e=>!shoppingTransactions.includes(e));
export const visibleShoppingTwd=shoppingTransactions.reduce((s,e)=>s+e.amount,0);
export const visibleShoppingYen=shoppingTransactions.reduce((s,e)=>s+e.originalAmount,0);
const transport=suicaTransactions.filter(e=>['ic-bus-1300','ic-utazu-takamatsu','ic-kotohira-utazu'].includes(e.id));
export const itemizedRows=[...bookingEvidence.map(e=>({id:e.id,title:e.title,twd:convert(e)})),{id:'card-activities',title:'玉藻公園與四國水族館可見交易',twd:otherCardTransactions.reduce((s,e)=>s+e.originalAmount*referenceRate,0)},{id:'ic-transport',title:'Suica 可辨識交通扣款（截圖這張卡）',twd:transport.reduce((s,e)=>s+e.amount*referenceRate,0)}];
export const itemizedTotal=itemizedRows.reduce((s,e)=>s+e.twd,0);
export const itemizedPerPerson=itemizedTotal/tripSpending.travelers;
// 情境試算：爸爸支付的兩餐與預付接機／巴士視為在現金彙總以外。
// 若有同一筆已包含在現金彙總，必須扣除；此值不是最終去重結算。
const separateOrders=['air','hotel','pickup','jr','art','bus','dinner','dinner-d3'];
const outsideCash=separateOrders.reduce((s,id)=>s+convert(order(id)),0)+otherCardTransactions.reduce((s,e)=>s+e.amount,0);
export const familyEstimate={min:outsideCash+tripSpending.cash.usedMin*referenceRate,max:outsideCash+tripSpending.cash.usedMax*referenceRate,assumption:'兩餐與預付接機、巴士均在現金彙總以外；租車與其他現金消費不再逐筆相加。尚未拆出現金購物，Suica 支付來源也待完整核對。'};
export const familyPerPerson={min:familyEstimate.min/3,max:familyEstimate.max/3};
