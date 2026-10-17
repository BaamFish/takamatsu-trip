import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {days,mapUrl,reservations,places} from '../src/data.js';
test('五日行程日期、地圖與本地圖片完整',()=>{assert.equal(days.length,5);const ids=new Set();for(const day of days){assert.equal(day.date,`11/0${day.id+1}`);assert.ok(day.items.length>=4);for(const item of day.items){assert.ok(!ids.has(item.id));ids.add(item.id);for(const key of ['time','title','jp','description','duration','transport','note'])assert.ok(item[key],`${item.id}: ${key}`);assert.ok(fs.existsSync(`public/images/${item.scene}.svg`));const url=new URL(mapUrl(item.jp));assert.equal(url.searchParams.get('query'),item.jp);assert.equal(url.searchParams.get('api'),'1');if(item.official)assert.equal(new URL(item.official).protocol,'https:')}}for(const [,q] of places)assert.equal(new URL(mapUrl(q)).searchParams.get('query'),q)});
test('公開資料不提供私人編號欄位',()=>{for(const r of reservations){assert.ok(r.id&&r.status&&r.text);assert.equal(r.code,undefined);assert.equal(r.bookingNumber,undefined)}assert.match(days[1].alert,/尚未購票/);assert.match(days[4].alert,/尚未預訂/)});
test('每個日期符合 2026 當地日曆',()=>{for(const d of days){assert.equal(new Date(`2026-11-0${d.id+1}T12:00:00+09:00`).getUTCDay(),d.id)}});
