// 模擬對話與練習，不是實際店員答覆。
export const scenarios=[
  {
    "id": "scenario-1",
    "day": 1,
    "title": "高松機場會合",
    "itemId": "1b",
    "question": "抵達高松機場後，想先確認司機是否為你們的接機人員。該怎麼問？",
    "options": [
      "直接說自己已付款，要求上車",
      "詢問是否為預約的接機服務，再核對私人憑證",
      "把訂位編號貼到公開網站"
    ],
    "answer": 1,
    "explanation": "先核對服務與目的地，再在自己的手機出示憑證。",
    "say": {
      "meaning": "預約的接機服務是這裡嗎？",
      "japanese": "予約した送迎はこちらですか。",
      "kana": "よやくしたそうげいはこちらですか。",
      "romaji": "Yoyaku shita sōgei wa kochira desu ka."
    },
    "hear": {
      "meaning": "有預約嗎？",
      "japanese": "ご予約はございますか。",
      "kana": "ごよやくはございますか。",
      "romaji": "Goyoyaku wa gozaimasu ka."
    }
  },
  {
    "id": "scenario-2",
    "day": 1,
    "title": "高松世紀飯店寄放行李",
    "itemId": "1c",
    "question": "還沒到入住時間，你們想先寄放三人的行李再去散步。",
    "options": [
      "詢問能否寄放行李",
      "要求一定能提早入住",
      "把行李放在門口就離開"
    ],
    "answer": 0,
    "explanation": "能否寄放或提早入住由飯店確認；兩件事要分開詢問。",
    "say": {
      "meaning": "可以先寄放行李嗎？",
      "japanese": "先に荷物を預かっていただけますか。",
      "kana": "さきににもつをあずかっていただけますか。",
      "romaji": "Saki ni nimotsu o azukatte itadakemasu ka."
    },
    "hear": {
      "meaning": "請稍等",
      "japanese": "少々お待ちください。",
      "kana": "しょうしょうおまちください。",
      "romaji": "Shōshō omachi kudasai."
    }
  },
  {
    "id": "scenario-3",
    "day": 5,
    "title": "玉藻公園入口",
    "itemId": "5-tamamo",
    "question": "返程早上短逛玉藻公園，08:00 左右要從哪個方向入園較合適？",
    "options": [
      "往當時已開門的西門，並保留回飯店與機場時間",
      "等東門開再加逛高松港",
      "不管接送時間，慢慢逛到中午"
    ],
    "answer": 0,
    "explanation": "11 月西門 06:30 開門、東門 08:30 開門。散步可略過，機場交通優先。",
    "say": {
      "meaning": "玉藻公園入口在哪裡？",
      "japanese": "玉藻公園の入口はどこですか。",
      "kana": "たまもこうえんのいりぐちはどこですか。",
      "romaji": "Tamamo kōen no iriguchi wa doko desu ka."
    },
    "hear": {
      "meaning": "請往這邊",
      "japanese": "こちらへどうぞ。",
      "kana": "こちらへどうぞ。",
      "romaji": "Kochira e dōzo."
    }
  },
  {
    "id": "scenario-4",
    "day": 1,
    "title": "D1 栗林公園取消和船",
    "itemId": "1-cancel-wasen",
    "question": "D1 到栗林公園想取消11/05 和船預約，哪個做法合適？",
    "options": [
      "詢問櫃台可否代辦；不行則依通知打電話取消",
      "把網站刪掉就代表實際取消",
      "認為已自動改成 D1 的船班"
    ],
    "answer": 0,
    "explanation": "預約尚未取消，取消需由主辦方受理；通知要求電話取消，現場能否協助須詢問。",
    "say": {
      "meaning": "我想取消 11 月 5 日的和船預約。",
      "japanese": "11月5日の和船の予約をキャンセルしたいです。",
      "kana": "じゅういちがついつかのわせんのよやくをキャンセルしたいです。",
      "romaji": "Jūichi-gatsu itsuka no wasen no yoyaku o kyanseru shitai desu."
    },
    "hear": {
      "meaning": "請告訴我預約編號。",
      "japanese": "予約番号を教えてください。",
      "kana": "よやくばんごうをおしえてください。",
      "romaji": "Yoyaku bangō o oshiete kudasai."
    }
  },
  {
    "id": "scenario-5",
    "day": 2,
    "title": "高松港買直島船票",
    "itemId": "2a",
    "question": "三位成人都沒有開車，要從高松港前往直島宮浦港。售票時該怎麼說？",
    "options": [
      "說宮浦港、成人三位、沒有車",
      "只說小豆島，不核對港口",
      "要求指定座位，當作已預約"
    ],
    "answer": 0,
    "explanation": "說清楚宮浦港、三位成人與步行旅客；船種、時刻及售票方式以現場為準。",
    "say": {
      "meaning": "到宮浦港，成人三位，沒有車。",
      "japanese": "宮浦港まで、大人三人、車はありません。",
      "kana": "みやのうらこうまで、おとなさんにん、くるまはありません。",
      "romaji": "Miyanoura-kō made, otona sannin, kuruma wa arimasen."
    },
    "hear": {
      "meaning": "單程還是來回？",
      "japanese": "片道ですか、往復ですか。",
      "kana": "かたみちですか、おうふくですか。",
      "romaji": "Katamichi desu ka, ōfuku desu ka."
    }
  },
  {
    "id": "scenario-6",
    "day": 2,
    "title": "OUGIYA 取車",
    "itemId": "2c",
    "question": "到 OUGIYA 領取三台已預約的電動輔助自行車後，最需要補問什麼？",
    "options": [
      "只問能騎多快",
      "認為行程寫 16:00 就是店家規定",
      "確認最晚還車時間與允許停車地點"
    ],
    "answer": 2,
    "explanation": "行程的還車時間是規劃，店家的最晚期限仍要確認。",
    "say": {
      "meaning": "最晚幾點還車？",
      "japanese": "何時までに返せばいいですか。",
      "kana": "なんじまでにかえせばいいですか。",
      "romaji": "Nanji made ni kaeseba ii desu ka."
    },
    "hear": {
      "meaning": "有預約嗎？",
      "japanese": "ご予約はございますか。",
      "kana": "ごよやくはございますか。",
      "romaji": "Goyoyaku wa gozaimasu ka."
    }
  },
  {
    "id": "scenario-7",
    "day": 2,
    "title": "紅南瓜與本村",
    "itemId": "2d",
    "question": "看完宮浦港紅南瓜，想前往本村，但家人不想再騎坡道。",
    "options": [
      "勉強大家繼續騎",
      "詢問前往本村的巴士乘車處",
      "把自行車留在路邊不聯絡店家"
    ],
    "answer": 1,
    "explanation": "改搭車前，也要確認自行車可停放的位置與還車安排。",
    "say": {
      "meaning": "往本村的巴士在哪裡搭？",
      "japanese": "本村行きのバス乗り場はどこですか。",
      "kana": "ほんむらゆきのバスのりばはどこですか。",
      "romaji": "Honmura-yuki no basu noriba wa doko desu ka."
    },
    "hear": {
      "meaning": "請往這邊",
      "japanese": "こちらへどうぞ。",
      "kana": "こちらへどうぞ。",
      "romaji": "Kochira e dōzo."
    }
  },
  {
    "id": "scenario-8",
    "day": 2,
    "title": "直島新美術館入館",
    "itemId": "2-new",
    "question": "已購買三張直島新美術館門票，館員說「QRコードをご提示ください」。意思是？",
    "options": [
      "請出示 QR Code",
      "請再買三張票",
      "可以任意拍照"
    ],
    "answer": 0,
    "explanation": "開啟自己手機內對應館舍及日期的三張票；不把 QR Code 放到公開頁面。",
    "say": {
      "meaning": "這是電子門票",
      "japanese": "これが電子チケットです。",
      "kana": "これがでんしチケットです。",
      "romaji": "Kore ga denshi chiketto desu."
    },
    "hear": {
      "meaning": "請出示 QR Code",
      "japanese": "QRコードをご提示ください。",
      "kana": "キューアールコードをごていじください。",
      "romaji": "Kyū āru kōdo o goteiji kudasai."
    }
  },
  {
    "id": "scenario-9",
    "day": 2,
    "title": "Benesse House 與 Valley Gallery",
    "itemId": "2-benesse",
    "question": "參觀 Benesse House Museum 後，想知道怎麼走到 Valley Gallery。",
    "options": [
      "認為兩處一定就在同一個入口",
      "只問廁所，不說目的地",
      "說出 Valley Gallery 名稱並詢問路線"
    ],
    "answer": 2,
    "explanation": "兩處移動方式、開放範圍及票券條件依館方指示；不是自動確認的接駁預約。",
    "say": {
      "meaning": "到 Valley Gallery 該怎麼走？",
      "japanese": "ヴァレーギャラリーへはどう行けばいいですか。",
      "kana": "ヴァレーギャラリーへはどういけばいいですか。",
      "romaji": "Varē Gyararī e wa dō ikeba ii desu ka."
    },
    "hear": {
      "meaning": "請稍等",
      "japanese": "少々お待ちください。",
      "kana": "しょうしょうおまちください。",
      "romaji": "Shōshō omachi kudasai."
    }
  },
  {
    "id": "scenario-10",
    "day": 2,
    "title": "黃南瓜與回程候船",
    "itemId": "2g",
    "question": "看完黃南瓜後準備返回宮浦港，想確認回高松的船班。",
    "options": [
      "把手冊規劃當作即時運航保證",
      "向工作人員詢問高松行渡輪出發時間",
      "只要到港就一定能搭上"
    ],
    "answer": 1,
    "explanation": "實際運航與登船依現場公告；要把還車與移動時間一起算進去。",
    "say": {
      "meaning": "回高松的渡輪幾點出發？",
      "japanese": "高松行きのフェリーは何時に出ますか。",
      "kana": "たかまつゆきのフェリーはなんじにでますか。",
      "romaji": "Takamatsu-yuki no ferī wa nanji ni demasu ka."
    },
    "hear": {
      "meaning": "現在開始登船",
      "japanese": "乗船を開始します。",
      "kana": "じょうせんをかいしします。",
      "romaji": "Jōsen o kaishi shimasu."
    }
  },
  {
    "id": "scenario-11",
    "day": 3,
    "title": "土庄港觀光巴士報到",
    "itemId": "3b",
    "question": "到土庄港後，想找到小豆島觀光巴士報到處。",
    "options": [
      "詢問觀光巴士報到處並出示私人憑證",
      "隨便上第一台巴士",
      "以為船票就是巴士券"
    ],
    "answer": 0,
    "explanation": "到正確報到處核對預約、三位成人及集合位置；付款狀態仍需核對。",
    "say": {
      "meaning": "觀光巴士報到處在哪裡？",
      "japanese": "観光バスの受付はどこですか。",
      "kana": "かんこうバスのうけつけはどこですか。",
      "romaji": "Kankō basu no uketsuke wa doko desu ka."
    },
    "hear": {
      "meaning": "有預約嗎？",
      "japanese": "ご予約はございますか。",
      "kana": "ごよやくはございますか。",
      "romaji": "Goyoyaku wa gozaimasu ka."
    }
  },
  {
    "id": "scenario-12",
    "day": 3,
    "title": "寒霞溪・橄欖公園・電影村集合",
    "itemId": "3c",
    "question": "巴士在寒霞溪、橄欖公園或二十四瞳電影村停靠時，下車前最應確認什麼？",
    "options": [
      "網路照片的拍攝角度",
      "自行決定停留兩小時",
      "返回巴士的集合時間與地點"
    ],
    "answer": 2,
    "explanation": "實際景點順序與停留依巴士安排。不要把練習例句當作當天集合指示。",
    "say": {
      "meaning": "幾點在這裡集合？",
      "japanese": "何時にここに集合ですか。",
      "kana": "なんじにここにしゅうごうですか。",
      "romaji": "Nanji ni koko ni shūgō desu ka."
    },
    "hear": {
      "meaning": "請在這裡集合",
      "japanese": "ここに集合してください。",
      "kana": "ここにしゅうごうしてください。",
      "romaji": "Koko ni shūgō shite kudasai."
    }
  },
  {
    "id": "scenario-13",
    "day": 4,
    "title": "高松前往琴平",
    "itemId": "4-outbound",
    "question": "在車站準備上車前，想確認是否往琴平。",
    "options": [
      "直接問「這班是琴平行嗎」",
      "只看車廂顏色",
      "把 JR 琴平站與琴電琴平站當同一站"
    ],
    "answer": 0,
    "explanation": "先選擇 JR 或琴電，核對班次、目的地與實際抵達車站。",
    "say": {
      "meaning": "這班是去琴平的嗎？",
      "japanese": "これは琴平行きですか。",
      "kana": "これはことひらゆきですか。",
      "romaji": "Kore wa Kotohira-yuki desu ka."
    },
    "hear": {
      "meaning": "要轉車",
      "japanese": "乗り換えが必要です。",
      "kana": "のりかえがひつようです。",
      "romaji": "Norikae ga hitsuyō desu."
    }
  },
  {
    "id": "scenario-14",
    "day": 4,
    "title": "金刀比羅宮階梯與接駁",
    "itemId": "4-shrine",
    "question": "到了金刀比羅宮，家人覺得累了。哪個處理方式合適？",
    "options": [
      "要求一定登頂",
      "詢問少階梯路線並休息，必要時折返",
      "認為接駁可完全免爬階梯"
    ],
    "answer": 1,
    "explanation": "以體力為準；接駁營運與乘車位置仍待確認，大門以上仍有階梯。",
    "say": {
      "meaning": "有比較少階梯的路嗎？",
      "japanese": "階段の少ない道はありますか。",
      "kana": "かいだんのすくないみちはありますか。",
      "romaji": "Kaidan no sukunai michi wa arimasu ka."
    },
    "hear": {
      "meaning": "這裡可以休息",
      "japanese": "ここで休めます。",
      "kana": "ここでやすめます。",
      "romaji": "Koko de yasumemasu."
    }
  },
  {
    "id": "scenario-15",
    "day": 4,
    "title": "琴平表參道烏龍麵午餐",
    "itemId": "4-lunch",
    "question": "三位進烏龍麵店，店員問「何名様ですか」。你怎麼回答？",
    "options": [
      "回答出發船班",
      "說「予約しています」即使沒預約",
      "說「三人です」"
    ],
    "answer": 2,
    "explanation": "何名様是在問人數；餐廳尚未指定，依現場候位與菜單點餐。",
    "say": {
      "meaning": "我們三位",
      "japanese": "三人です。",
      "kana": "さんにんです。",
      "romaji": "Sannin desu."
    },
    "hear": {
      "meaning": "請問幾位？",
      "japanese": "何名様ですか。",
      "kana": "なんめいさまですか。",
      "romaji": "Nanmei-sama desu ka."
    }
  },
  {
    "id": "scenario-16",
    "day": 5,
    "title": "玉藻散步後退房",
    "itemId": "5b",
    "question": "D5 玉藻公園散步後，回飯店要辦理退房，怎麼說？",
    "options": [
      "請櫃台辦理退房，再確認行李與機場交通",
      "把抵達接機當作回程也訂好",
      "為了散步忽略機場時間"
    ],
    "answer": 0,
    "explanation": "先確認機場交通並收好行李。天候不好、疲累或接送提早時略過散步，機場交通優先。",
    "say": {
      "meaning": "我要辦理退房",
      "japanese": "チェックアウトをお願いします。",
      "kana": "チェックアウトをおねがいします。",
      "romaji": "Chekkuauto o onegai shimasu."
    },
    "hear": {
      "meaning": "請稍等",
      "japanese": "少々お待ちください。",
      "kana": "しょうしょうおまちください。",
      "romaji": "Shōshō omachi kudasai."
    }
  },
  {
    "id": "scenario-17",
    "day": 1,
    "title": "しんすけ 18:30 晚餐入店",
    "itemId": "1-dinner",
    "question": "到しんすけ トキワ新町店，想向店員說明你們是 18:30 已預約的三位客人，怎麼說？",
    "options": [
      "18時半に三人で予約しています。",
      "三人とも予約していません。",
      "明日の朝に予約しています。"
    ],
    "answer": 0,
    "explanation": "18時半是 18:30，三人で予約しています表示已預約三位。接著在自己的手機出示確認憑證；不需把姓名或訂位編號放上公開頁面。",
    "say": {
      "meaning": "我預約了 18:30，三位。",
      "japanese": "18時半に三人で予約しています。",
      "kana": "じゅうはちじはんにさんにんでよやくしています。",
      "romaji": "Jūhachiji han ni sannin de yoyaku shite imasu."
    },
    "hear": {
      "meaning": "請問預約姓名？",
      "japanese": "ご予約のお名前をお願いします。",
      "kana": "ごよやくのおなまえをおねがいします。",
      "romaji": "Goyoyaku no onamae o onegai shimasu."
    }
  }
];
