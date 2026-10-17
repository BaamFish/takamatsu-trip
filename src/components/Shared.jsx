import {ArrowUpRight,Copy,MapPin} from 'lucide-react';
import {mapUrl} from '../data';
export function External({href,children,className=''}){return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<ArrowUpRight size={17}/></a>}
export function MapLink({place,children='Google Maps 導航'}){return <External className="map-button" href={mapUrl(place)}><MapPin size={18}/>{children}</External>}
export async function copyText(text,notify){try{await navigator.clipboard.writeText(text);notify('已複製')}catch{notify('無法自動複製，請長按文字手動複製。')}}
export function CopyButton({text,notify}){return <button className="small-button" onClick={()=>copyText(text,notify)}><Copy size={16}/>複製</button>}
export function Heading({eyebrow,title,children}){return <header className="page-heading"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1>{children&&<p className="muted">{children}</p>}</header>}
