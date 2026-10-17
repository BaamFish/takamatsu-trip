import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {days} from '../src/data.js';

const base=process.env.VITE_BASE_PATH || '/takamatsu-trip/';
const root=path.resolve('dist');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.ok(!html.includes('/src/main.jsx'),'Development entry must never be deployed.');
const refs=[...html.matchAll(/(?:src|href)="([^"]+)"/g)].map(m=>m[1]);
for(const ref of refs){
 if(ref.startsWith('http'))continue;
 const relative=ref.startsWith(base)?ref.slice(base.length):ref.replace(/^\.\//,'');
 if(ref.includes('/assets/'))assert.ok(ref.startsWith(base),`Incorrect asset base: ${ref}`);
 assert.ok(fs.existsSync(path.join(root,relative)),`Missing build asset: ${ref}`);
}
const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.webmanifest'),'utf8'));
for(const icon of manifest.icons)assert.ok(fs.existsSync(path.join(root,icon.src)));
const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
for(const day of days){assert.ok(fs.existsSync(path.join(root,`images/${day.scene}.svg`)));assert.ok(sw.includes(`images/${day.scene}.svg`));}
assert.ok(sw.includes('index.html'));
console.log(`Verified production entry, JS/CSS base ${base}, local images, manifest and offline precache.`);
