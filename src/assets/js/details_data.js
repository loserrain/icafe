const details_data = [
  
  {
    title: '生機廚房活動集錦',
    post_title: '黑豆咖啡品嘗活動',
    author: {
      //writer: [''],
      //photographer: ['江昕儒'],
    },
    post_name: 'Drink_tasting',
    img_folder: 'drink_tasting',
    description:
      '大部分民眾只知道咖啡和黑豆茶，對黑豆咖啡並不熟悉，所以透過咖啡、黑豆咖啡與黑豆茶的品嚐活動',
    tags: ['活動集錦', '品嚐活動'],
    created_at: '2022-9-17',
  },
  {
    title: '白宮影城活動集錦',
    post_title: '白宮影城黑豆咖啡品嘗活動',
    author: {
      //writer: [''],
      //photographer: ['江昕儒'],
    },
    post_name: 'Drink_tasting2',
    img_folder: 'drink_tasting2',
    description:
      '經過上次生機廚房的活動後，我們發覺許多民眾對於黑豆咖啡有很大興趣想要更進一步了解。因此這次我們前往白宮影城辦理第二次的品嘗活動',
    tags: ['活動集錦', '品嚐活動'],
    created_at: '2022-9-23',
  },
  {
    title: '貞愛雲林館',
    post_title: '堅持~『守護本土農糧，種植在地好食』。',
    author: {
      writer: ['蔡濰揚'],
      //photographer: ['江昕儒'],
    },
    post_name: 'Woodwork',
    img_folder: 'woodwork',
    description:
      '在數年前，走訪各個鄉間田野，連一塊黑豆田的蹤影都尋不著；曾是從商的蔡財興，為何從一個門外漢轉身變成“復耕台灣黑豆的推手”?',
    tags: ['西螺黑豆', '品牌設計'],
    created_at: '20-11-10',
  },
  {
    title: '桂竹林咖啡莊園',
    post_title: '用心，讓飄香一甲子的咖啡發揚光大',
    author: {
      writer: ['雲林縣古坑鄉公所'],
      //photographer: ['江昕儒'],
    },
    post_name: 'Baking',
    img_folder: 'baking',
    description:
      '「桂竹林」-祖傳三代的不是小吃是咖啡!從阿公時代留下來、到父親、到契螢老闆接手。',
    tags: ['古坑咖啡', '品牌設計'],
    created_at: '2020-11-15',
  }
  //{
  //  title: '憨吉客棧',
  //  post_title: '憨吉客棧 成就良善',
  //  author: {
  //    writer: ['陳湘琴', '黎俐妘'],
  //    photographer: ['陳湘琴', '吳世明', '江昕儒'],
  //  },
  //  post_name: 'Inn',
  //  img_folder: 'inn',
  //  description:
  //    '現任水林蕃薯社區理事長吳世明先生，是蕃薯厝的愛護者。上任後立即參與雲林縣第九屆社區環境改善的培訓課程和PK賽。大家一起同心協力改造，並將食堂命名為「憨吉客棧」。最後從20個社區脫穎而出，榮獲金牌獎勵。',
  //  tags: ['憨吉客棧', '社區規劃'],
  //  created_at: '2019-08-25',
  //},
  //{
  //  title: '地瓜校長',
  //  post_title: '退休 也能成為一種力量',
  //  author: {
  //    writer: ['陳湘琴', '黎俐妘'],
  //    photographer: ['黎俐妘'],
  //  },
  //  post_name: 'PrincipalOfSweetpotato',
  //  img_folder: 'principal_of_sweetpotato',
  //  description:
  //    '現年76歲的李高章先生是一位退休校長，是道地水林大溝村的居民。因為家裡務農，從小他就與鄉間的地瓜田有著深切的連結。',
  //  tags: ['地瓜校長', '自然農法'],
  //  created_at: '2019-08-26',
  //},
  //{
  //  title: '建影陶形',
  //  post_title: '仰望天空 返鄉追夢',
  //  author: {
  //    writer: ['陳湘琴', '康慧賢'],
  //    photographer: ['江昕儒'],
  //  },
  //  post_name: 'LandPottery',
  //  img_folder: 'land_pottery',
  //  description:
  //    '出生於台北的79年次年輕陶藝工作者郭建佑先生，每逢過年過節便跟隨著父母，回到水林蔦松探望親族好友，因此從小就對於台北和雲林不同環境的反差深感好奇，每逢返鄉令他充滿期待，他喜歡家鄉節慶時的歡樂、親族間活絡的溫暖，在高中的時候就埋下了返鄉的意念。',
  //  tags: ['建影陶形', '藝術創作'],
  //  created_at: '2019-08-14',
  //},
  //{
  //  title: '水賊林',
  //  post_title: '友善土地  翻轉生命',
  //  author: {
  //    writer: ['陳湘琴', '康慧賢'],
  //    photographer: ['黎俐妘'],
  //  },
  //  post_name: 'PirateFarmer',
  //  img_folder: 'pirate_farmer',
  //  description:
  //    '蔡得黃，綽號：菜刀。曾經任職於傳播事業的他，2010年返鄉回到水林進行土地耕種。雖然是農家子弟，但沒有任何務農經驗他，回憶起剛開始：「夏天都要早起下田，約莫五點多，不然會熱到凍末條。很多眉眉角角，譬如說工人要打給誰、何時要施藥施肥、何處買資材等問題…。',
  //  tags: ['水賊林', '友善土地組合'],
  //  created_at: '2019-09-02',
  //},
  //{
  //  title: '黃金蝙蝠館',
  //  post_title: '讓蝙蝠的生態環境 預約幸福',
  //  author: {
  //    writer: ['陳湘琴', '黎俐妘'],
  //    photographer: ['黎俐妘', '張恒嘉'],
  //  },
  //  post_name: 'BatPavilion',
  //  img_folder: 'bat_pavilion',
  //  description:
  //    '黃金蝙蝠館的創辦人兼館長張恒嘉是北港人，在1985年離開大學後便在水林鄉誠正國小實習。「到水林就職的第一天，就在蘇秦衛生室看到黃金蝙蝠，從那天起我就會在戶外四處觀察蝙蝠的出沒！」張館長回憶起剛來水林時說道。',
  //  tags: ['黃金蝙蝠', '友善環境'],
  //  created_at: '2019-09-02',
  //},
  //{
  //  title: '涼心青草茶',
  //  post_title: '堅持傳統古味 三代接力青草茶',
  //  author: {
  //    writer: ['陳湘琴', '康慧賢'],
  //    photographer: ['黎俐妘'],
  //  },
  //  post_name: 'HerbTea',
  //  img_folder: 'herb_tea',
  //  description:
  //    '在雲林縣水林國小圍牆轉角，有一處竹管茅草的傳統茶攤是「涼心青草茶」。茶攤第一代經營者是王錦村老闆，他在當年退伍後，因為向一位熟悉青草種類的中醫師習得配方之後，就開始在舊水林公所前開業，目前由第二代王建二老闆接任父親的事業。',
  //  tags: ['黃金蝙蝠', '友善環境'],
  //  created_at: '2019-09-02',
  //},
  //{
  //  title: '風箏校長',
  //  post_title: '千錘百鍊  翱翔世界',
  //  author: {
  //    writer: ['陳湘琴', '康慧賢'],
  //    photographer: ['黎俐妘', '吳盛合'],
  //  },
  //  post_name: 'PrincipalOfKite',
  //  img_folder: 'principal_of_kite',
  //  description:
  //    '年近70歲口湖成龍國小退休校長侯順政先生，定居於水林已有31年。當時1980年代正逢全國在推動民俗體育之時，風箏運動還不是很風行之際，侯校長為了突破個人的表現，便毅然決然地投入這項民俗運動。',
  //  tags: ['風箏校長', '民俗體育'],
  //  created_at: '2019-09-02',
  //},
  //{
  //  title: '鮮禾屋',
  //  post_title: '把用心當作美食的交流',
  //  author: {
  //    writer: ['陳湘琴', '康慧賢'],
  //    photographer: ['黎俐妘'],
  //  },
  //  post_name: 'XianheHouse',
  //  img_folder: 'xianhe_house',
  //  description:
  //    '鮮禾屋的老闆鄭清任先生曾經是銀行員，太太蔡芷涵是經營補習班的老師，兩人都是道地的水林人，平常都熱愛美食。鄭老闆表示：「剛開始是我小舅子在北部餐廳當主廚，待過很多餐廳，目前在北港經營餐館，他擅長廣式料理，很會做餐前小菜。',
  //  tags: ['鮮禾屋', '友善環境'],
  //  created_at: '2019-09-08',
  //},
]

for (let i = 0; i < details_data.length; i++) {
  details_data[i].id = i + 1
}

export default details_data
