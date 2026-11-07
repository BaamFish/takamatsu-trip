import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {journalDays,spots,credits,bookingEvidence} from '../src/journal.js';
import {tripSpending,matchedCardTransactions,suicaExpenseSubtotal} from '../src/budget.js';

test('公開旅行路線納入旅後確認，所有景點圖片與外部連結完整',()=>{
 assert.deepEqual(journalDays.map(d=>d.id),[1,2,3,4,5]);
 assert.match(journalDays[0].stops.flat().join(' '),/搭到了和船/);
 assert.match(journalDays[3].route,/JR 宇多津.*四國水族館.*JR 高松/);
 assert.match(journalDays[4].route,/玉藻公園/);
 for(const d of journalDays)for(const stop of d.stops){assert.ok(stop[3]);assert.equal(new URL(stop[4]).protocol,'https:');}
 for(const s of spots){const c=credits[s.id];assert.ok(fs.statSync('public/'+c.file).size>10000);assert.match(c.license,/^CC/);assert.ok(c.author);assert.equal(new URL(c.source).hostname,'commons.wikimedia.org');}
});
test('付款憑證、刷卡配對與現金分開，未產生重複總額或洩露識別碼',()=>{
 assert.equal(bookingEvidence.find(e=>e.id==='air').amount,36150);
 assert.equal(bookingEvidence.find(e=>e.id==='hotel').amount,17274.32);
 assert.equal(bookingEvidence.find(e=>e.id==='pickup').amount,null);
 assert.equal(tripSpending.total.amount,null);
 assert.equal(suicaExpenseSubtotal,3740);
 assert.equal(new Set(matchedCardTransactions.map(t=>t.id)).size,6);
 const publicContent=JSON.stringify({journalDays,spots,bookingEvidence,tripSpending,matchedCardTransactions});
 assert.doesNotMatch(publicContent,/reserveId=|make_qr|mail\.google|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}|"(?:phone|email|passport|bookingCode|reservationNumber)":/);
 const app=fs.readFileSync('src/App.jsx','utf8');
 assert.doesNotMatch(app,/import .*JapaneseHandbook|import .*Checklist|import .*Reservations|takamatsu-private/);
});

