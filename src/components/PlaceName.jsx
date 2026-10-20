import {placeLanguage} from '../language';
export default function PlaceName({place}){const name=placeLanguage[place];return name?<div className="place-name"><p lang="ja">{name.japanese}</p><p lang="ja" className="muted">讀音：{name.kana}</p><p className="romaji">羅馬字：<span lang="ja-Latn">{name.romaji}</span></p></div>:<p lang="ja">{place}</p>}
