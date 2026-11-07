import test from 'node:test';
import assert from 'node:assert/strict';
import {bookingEvidence} from '../src/journal.js';
import {referenceRate,itemizedRows,itemizedTotal,familyEstimate,visibleShoppingTwd} from '../src/costSummary.js';
test('旅費兩種試算不疊加現金與現金逐筆，購物與用途不明消費另列',()=>{
 assert.equal(bookingEvidence.find(e=>e.id==='dinner-d3').amount,800*3);
 assert.equal(referenceRate,0.21);
 assert.equal(Math.round(itemizedTotal*100),7613249);
 assert.equal(new Set(itemizedRows.map(e=>e.id)).size,itemizedRows.length);
 assert.ok(!itemizedRows.some(e=>/cash|topup|airport-duty|airport-sky/.test(e.id)));
 assert.equal(Math.round(familyEstimate.min*100),8476379);
 assert.equal(Math.round(familyEstimate.max*100),8497379);
 assert.equal(visibleShoppingTwd,728);
 assert.match(familyEstimate.assumption,/現金購物/);
});
