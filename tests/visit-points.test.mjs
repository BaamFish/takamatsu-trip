import test from 'node:test';
import assert from 'node:assert/strict';
import {visitPoints} from '../src/visitPoints.js';
import {journalDays} from '../src/journal.js';
test('逐日景點索引對應文章，不將已購票或彈性規劃當作到訪',()=>{
 assert.equal(visitPoints.length,21);
 assert.equal(new Set(visitPoints.map(p=>p.id)).size,21);
 for(const p of visitPoints){assert.ok(journalDays.find(d=>d.id===p.day).stops.some(s=>s[1]===p.stop),p.id);assert.equal(new URL(p.official).protocol,'https:');assert.ok(p.jp);assert.ok(p.description)}
 assert.equal(visitPoints.find(p=>p.id==='wasen').day,1);
 assert.equal(visitPoints.find(p=>p.id==='ichikara').day,3);
 assert.equal(visitPoints.find(p=>p.id==='aquarium').day,4);
 assert.equal(visitPoints.find(p=>p.id==='tamamo').day,5);
 for(const id of ['nnmoa','benesse-house','valley'])assert.equal(visitPoints.find(p=>p.id===id).status,'ticket');
 for(const id of ['yellow-pumpkin','marugame'])assert.equal(visitPoints.find(p=>p.id===id).status,'optional');
 assert.ok(!visitPoints.some(p=>p.name.includes('地中')));
});
