import {House,CalendarDays,Ship,Ticket,ClipboardCheck,BookOpen} from 'lucide-react';
export const nav=[['home','首頁',House],['daily','行程',CalendarDays],['transport','交通',Ship],['reservations','預約',Ticket],['prepare','行前',ClipboardCheck],['japanese','日文',BookOpen]];
export default function BottomNavigation({page,go}){return <nav className="bottom-nav" aria-label="主要導覽">{nav.map(([key,label,Icon])=><button key={key} onClick={()=>go(key)} aria-current={page===key?'page':undefined}><Icon size={22}/><span>{label}</span></button>)}</nav>}
