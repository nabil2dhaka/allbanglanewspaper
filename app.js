// All Bangla Newspaper Directory Data (Following allbanglanewspapersbd.com)
const newspapers = [
  // ================= 1. DAILY BANGLA NEWSPAPERS (জাতীয় দৈনিক) =================
  {
    id: 'prothomalo',
    nameBn: 'প্রথম আলো',
    nameEn: 'Prothom Alo',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.prothomalo.com',
    epaperUrl: 'https://epaper.prothomalo.com',
    color: '#ed1c24',
    icon: 'প্র',
    tags: 'dhaka top10 national'
  },
  {
    id: 'bdpratidin',
    nameBn: 'বাংলাদেশ প্রতিদিন',
    nameEn: 'Bangladesh Pratidin',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.bd-pratidin.com',
    epaperUrl: 'https://epaper.bd-pratidin.com',
    color: '#e30613',
    icon: 'বা',
    tags: 'dhaka top10 national'
  },
  {
    id: 'jugantor',
    nameBn: 'দৈনিক যুগান্তর',
    nameEn: 'Daily Jugantor',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.jugantor.com',
    epaperUrl: 'https://epaper.jugantor.com',
    color: '#f37023',
    icon: 'যু',
    tags: 'dhaka top10 national'
  },
  {
    id: 'kalerkantho',
    nameBn: 'কালের কণ্ঠ',
    nameEn: 'Kaler Kantho',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.kalerkantho.com',
    epaperUrl: 'https://epaper.kalerkantho.com',
    color: '#1b75bb',
    icon: 'কা',
    tags: 'dhaka top10 national'
  },
  {
    id: 'ittefaq',
    nameBn: 'দৈনিক ইত্তেফাক',
    nameEn: 'The Daily Ittefaq',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.ittefaq.com.bd',
    epaperUrl: 'https://epaper.ittefaq.com.bd',
    color: '#006a4e',
    icon: 'ই',
    tags: 'dhaka top10 national'
  },
  {
    id: 'samakal',
    nameBn: 'দৈনিক সমকাল',
    nameEn: 'Daily Samakal',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.samakal.com',
    epaperUrl: 'https://epaper.samakal.com',
    color: '#1d8348',
    icon: 'স',
    tags: 'dhaka top10 national'
  },
  {
    id: 'amadershomoy',
    nameBn: 'দৈনিক আমাদের সময়',
    nameEn: 'Dainik Amader Shomoy',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.dainikamadershomoy.com',
    epaperUrl: 'https://epaper.dainikamadershomoy.com',
    color: '#c0392b',
    icon: 'আ',
    tags: 'dhaka national'
  },
  {
    id: 'janakantha',
    nameBn: 'দৈনিক জনকণ্ঠ',
    nameEn: 'Daily Janakantha',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.dailyjanakantha.com',
    epaperUrl: 'https://epaper.dailyjanakantha.com',
    color: '#7d3c98',
    icon: 'জ',
    tags: 'dhaka national'
  },
  {
    id: 'inqilab',
    nameBn: 'দৈনিক ইনকিলাব',
    nameEn: 'Daily Inqilab',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.dailyinqilab.com',
    epaperUrl: 'https://epaper.dailyinqilab.com',
    color: '#0e6251',
    icon: 'ই',
    tags: 'dhaka national'
  },
  {
    id: 'nayadiganta',
    nameBn: 'দৈনিক নয়াদিগন্ত',
    nameEn: 'Daily Naya Diganta',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.dailynayadiganta.com',
    epaperUrl: 'https://epaper.dailynayadiganta.com',
    color: '#2874a6',
    icon: 'ন',
    tags: 'dhaka national'
  },
  {
    id: 'manabzamin',
    nameBn: 'মানবজমিন',
    nameEn: 'Daily Manab Zamin',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.mzamin.com',
    epaperUrl: 'https://epaper.mzamin.com',
    color: '#b03a2e',
    icon: 'মা',
    tags: 'dhaka national tabloid'
  },
  {
    id: 'bhorerkagoj',
    nameBn: 'ভোরের কাগজ',
    nameEn: 'Bhorer Kagoj',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.bhorerkagoj.com',
    epaperUrl: 'https://epaper.bhorerkagoj.com',
    color: '#af601a',
    icon: 'ভো',
    tags: 'dhaka national'
  },
  {
    id: 'deshrupantor',
    nameBn: 'দেশ রূপান্তর',
    nameEn: 'Desh Rupantor',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.deshrupantor.com',
    epaperUrl: 'https://epaper.deshrupantor.com',
    color: '#922b21',
    icon: 'দে',
    tags: 'dhaka national'
  },
  {
    id: 'alokitobangladesh',
    nameBn: 'আলোকিত বাংলাদেশ',
    nameEn: 'Alokito Bangladesh',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.alokitobangladesh.com',
    epaperUrl: 'https://epaper.alokitobangladesh.com',
    color: '#117a65',
    icon: 'আ',
    tags: 'dhaka national'
  },
  {
    id: 'jaijaidin',
    nameBn: 'যায়যায়দিন',
    nameEn: 'Jaijaidin',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.jaijaidinbd.com',
    epaperUrl: 'https://epaper.jaijaidinbd.com',
    color: '#2e4053',
    icon: 'য',
    tags: 'dhaka national'
  },
  {
    id: 'sangbad',
    nameBn: 'দৈনিক সংবাদ',
    nameEn: 'Daily Sangbad',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://sangbad.net.bd',
    color: '#78281f',
    icon: 'সং',
    tags: 'dhaka national'
  },
  {
    id: 'kholakagoj',
    nameBn: 'খোলা কাগজ',
    nameEn: 'Khola Kagoj',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.kholakagojbd.com',
    color: '#1b4f72',
    icon: 'খো',
    tags: 'dhaka national'
  },
  {
    id: 'manobkantha',
    nameBn: 'মানবকণ্ঠ',
    nameEn: 'Manobkantha',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.manobkantha.com.bd',
    color: '#6c3483',
    icon: 'মা',
    tags: 'dhaka national'
  },

  // ================= 2. ONLINE NEWS PORTALS (অনলাইন পোর্টাল) =================
  {
    id: 'bdnews24',
    nameBn: 'বিডিনিউজ২৪',
    nameEn: 'bdnews24.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://bangla.bdnews24.com',
    color: '#c0392b',
    icon: 'BD',
    tags: 'top10 24hour online'
  },
  {
    id: 'banglanews24',
    nameBn: 'বাংলানিউজ২৪',
    nameEn: 'Banglanews24.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.banglanews24.com',
    color: '#16a085',
    icon: 'বা',
    tags: 'top10 24hour online'
  },
  {
    id: 'jagonews24',
    nameBn: 'জাগো নিউজ ২৪',
    nameEn: 'Jagonews24.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.jagonews24.com',
    color: '#27ae60',
    icon: 'জা',
    tags: 'top10 online portal'
  },
  {
    id: 'dhakapost',
    nameBn: 'ঢাকা পোস্ট',
    nameEn: 'Dhaka Post',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.dhakapost.com',
    color: '#e67e22',
    icon: 'ঢা',
    tags: 'top10 online portal'
  },
  {
    id: 'banglatribune',
    nameBn: 'বাংলা ট্রিবিউন',
    nameEn: 'Bangla Tribune',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.banglatribune.com',
    color: '#8e44ad',
    icon: 'বা',
    tags: 'online portal'
  },
  {
    id: 'risingbd',
    nameBn: 'রাইজিংবিডি',
    nameEn: 'Risingbd.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.risingbd.com',
    color: '#2980b9',
    icon: 'রা',
    tags: 'online portal'
  },
  {
    id: 'priyo',
    nameBn: 'প্রিয়.কম',
    nameEn: 'Priyo.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.priyo.com',
    color: '#d35400',
    icon: 'প্রি',
    tags: 'online portal'
  },
  {
    id: 'bd24live',
    nameBn: 'বিডি২৪লাইভ',
    nameEn: 'Bd24live.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.bd24live.com/bangla/',
    color: '#c0392b',
    icon: '২৪',
    tags: 'live portal'
  },
  {
    id: 'newsbangla24',
    nameBn: 'নিউজবাংলা২৪',
    nameEn: 'Newsbangla24.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.newsbangla24.com',
    color: '#1f618d',
    icon: 'NB',
    tags: 'online portal'
  },
  {
    id: 'dainikshiksha',
    nameBn: 'দৈনিক শিক্ষা',
    nameEn: 'Dainik Shiksha',
    category: 'online',
    categoryLabel: 'শিক্ষা ও ক্যারিয়ার',
    url: 'https://www.dainikshiksha.com',
    color: '#117864',
    icon: 'শি',
    tags: 'education shiksha'
  },

  // ================= 3. BANGLA LIVE TV & NEWS CHANNELS (টিভি চ্যানেল) =================
  {
    id: 'somoynews',
    nameBn: 'সময় টিভি',
    nameEn: 'Somoy News TV',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.somoynews.tv',
    color: '#c0392b',
    icon: 'ST',
    tags: 'live tv news somoy'
  },
  {
    id: 'jamunatv',
    nameBn: 'যমুনা টেলিভিশন',
    nameEn: 'Jamuna Television',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.jamuna.tv',
    color: '#d35400',
    icon: 'JT',
    tags: 'live tv news jamuna'
  },
  {
    id: 'channel24',
    nameBn: 'চ্যানেল ২৪',
    nameEn: 'Channel 24',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.channel24bd.tv',
    color: '#117864',
    icon: '24',
    tags: 'live tv news'
  },
  {
    id: 'dbcnews',
    nameBn: 'ডিবিসি নিউজ',
    nameEn: 'DBC News',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.dbcnews.tv',
    color: '#7b1113',
    icon: 'DBC',
    tags: 'live tv news'
  },
  {
    id: 'ekattor',
    nameBn: 'একাত্তর টিভি',
    nameEn: 'Ekattor TV',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://ekattor.tv',
    color: '#212f3d',
    icon: '৭১',
    tags: 'live tv news 71'
  },
  {
    id: 'independenttv',
    nameBn: 'ইনডিপেনডেন্ট টিভি',
    nameEn: 'Independent TV',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.independent24.tv',
    color: '#1f618d',
    icon: 'IT',
    tags: 'live tv news'
  },
  {
    id: 'news24',
    nameBn: 'নিউজ ২৪',
    nameEn: 'News24 Television',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.news24bd.tv',
    color: '#900c3f',
    icon: 'N24',
    tags: 'live tv news'
  },
  {
    id: 'ntv',
    nameBn: 'এনটিভি অনলাইন',
    nameEn: 'NTV Online',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://www.ntvbd.com',
    color: '#5b2c6f',
    icon: 'NTV',
    tags: 'satellite tv drama'
  },
  {
    id: 'channeli',
    nameBn: 'চ্যানেল আই অনলাইন',
    nameEn: 'Channel i Online',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://www.channelionline.com',
    color: '#145a32',
    icon: 'i',
    tags: 'satellite tv'
  },
  {
    id: 'rtv',
    nameBn: 'আরটিভি অনলাইন',
    nameEn: 'RTV Online',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://www.rtvonline.com',
    color: '#7d6608',
    icon: 'RTV',
    tags: 'satellite tv'
  },
  {
    id: 'deshtv',
    nameBn: 'দেশ টিভি',
    nameEn: 'Desh TV',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://www.desh.tv',
    color: '#1b4f72',
    icon: 'দেশ',
    tags: 'tv news'
  },

  // ================= 4. BANGLADESH ENGLISH & WORLD DAILIES =================
  {
    id: 'thedailystar',
    nameBn: 'দ্য ডেইলি স্টার',
    nameEn: 'The Daily Star',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.thedailystar.net',
    color: '#003366',
    icon: 'DS',
    tags: 'english bangladesh star'
  },
  {
    id: 'dhakatribune',
    nameBn: 'ঢাকা ট্রিবিউন',
    nameEn: 'Dhaka Tribune',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.dhakatribune.com',
    color: '#d9230f',
    icon: 'DT',
    tags: 'english bangladesh tribune'
  },
  {
    id: 'tbsnews',
    nameBn: 'দ্য বিজনেস স্ট্যান্ডার্ড',
    nameEn: 'The Business Standard (TBS)',
    category: 'english',
    categoryLabel: 'Business Daily',
    url: 'https://www.tbsnews.net',
    color: '#005b96',
    icon: 'TBS',
    tags: 'english business tbs'
  },
  {
    id: 'newage',
    nameBn: 'নিউ এজ',
    nameEn: 'New Age',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.newagebd.net',
    color: '#4a235a',
    icon: 'NA',
    tags: 'english bangladesh'
  },
  {
    id: 'financialexpress',
    nameBn: 'ফাইন্যান্সিয়াল এক্সপ্রেস',
    nameEn: 'The Financial Express',
    category: 'english',
    categoryLabel: 'Business Daily',
    url: 'https://thefinancialexpress.com.bd',
    color: '#1a5276',
    icon: 'FE',
    tags: 'english financial business'
  },
  {
    id: 'dailysun',
    nameBn: 'ডেইলি সান',
    nameEn: 'Daily Sun',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.daily-sun.com',
    color: '#f39c12',
    icon: 'DS',
    tags: 'english bangladesh sun'
  },
  {
    id: 'bbcbangla',
    nameBn: 'বিবিসি বাংলা',
    nameEn: 'BBC News Bangla',
    category: 'english',
    categoryLabel: 'আন্তর্জাতিক',
    url: 'https://www.bbc.com/bengali',
    color: '#bb1919',
    icon: 'BBC',
    tags: 'international bbc world'
  },
  {
    id: 'voabangla',
    nameBn: 'ভয়েস অফ আমেরিকা বাংলা',
    nameEn: 'Voice of America (VOA)',
    category: 'english',
    categoryLabel: 'আন্তর্জাতিক',
    url: 'https://www.voabangla.com',
    color: '#003366',
    icon: 'VOA',
    tags: 'international voa usa'
  },
  {
    id: 'reuters',
    nameBn: 'রয়টার্স',
    nameEn: 'Reuters World News',
    category: 'english',
    categoryLabel: 'World News',
    url: 'https://www.reuters.com',
    color: '#ff8000',
    icon: 'RT',
    tags: 'world international'
  },
  {
    id: 'aljazeera',
    nameBn: 'আল জাজিরা',
    nameEn: 'Al Jazeera English',
    category: 'english',
    categoryLabel: 'World News',
    url: 'https://www.aljazeera.com',
    color: '#d4ac0d',
    icon: 'AJ',
    tags: 'world middleeast'
  },

  // ================= 5. DISTRICT & LOCAL NEWSPAPERS (বিভাগীয় ও জেলা) =================
  {
    id: 'azadi',
    nameBn: 'দৈনিক আজাদী',
    nameEn: 'Dainik Azadi',
    category: 'local',
    categoryLabel: 'চট্টগ্রাম (Ctg)',
    url: 'https://dainikazadi.net',
    color: '#c0392b',
    icon: 'আ',
    tags: 'chittagong ctg local azadi'
  },
  {
    id: 'purbokone',
    nameBn: 'দৈনিক পূর্বকোণ',
    nameEn: 'Dainik Purbokone',
    category: 'local',
    categoryLabel: 'চট্টগ্রাম (Ctg)',
    url: 'https://dainikpurbokone.net',
    color: '#2471a3',
    icon: 'পূ',
    tags: 'chittagong ctg local purbokone'
  },
  {
    id: 'suprobhat',
    nameBn: 'সুপ্রভাত বাংলাদেশ',
    nameEn: 'Suprobhat Bangladesh',
    category: 'local',
    categoryLabel: 'চট্টগ্রাম (Ctg)',
    url: 'https://suprobhat.com',
    color: '#138d75',
    icon: 'সু',
    tags: 'chittagong ctg'
  },
  {
    id: 'dainiksylhet',
    nameBn: 'দৈনিক সিলেট',
    nameEn: 'Dainik Sylhet',
    category: 'local',
    categoryLabel: 'সিলেট (Sylhet)',
    url: 'https://dainiksylhet.com',
    color: '#2e4053',
    icon: 'সি',
    tags: 'sylhet local'
  },
  {
    id: 'rajshahinews24',
    nameBn: 'রাজশাহী নিউজ ২৪',
    nameEn: 'Rajshahi News 24',
    category: 'local',
    categoryLabel: 'রাজশাহী (Rajshahi)',
    url: 'https://rajshahinews24.com',
    color: '#117a65',
    icon: 'রা',
    tags: 'rajshahi local'
  },
  {
    id: 'purbanchal',
    nameBn: 'দৈনিক পূর্বাঞ্চল',
    nameEn: 'Dainik Purbanchal',
    category: 'local',
    categoryLabel: 'খুলনা (Khulna)',
    url: 'https://purbanchal.com',
    color: '#b03a2e',
    icon: 'পূ',
    tags: 'khulna local'
  },
  {
    id: 'gramerkagoj',
    nameBn: 'গ্রামের কাগজ',
    nameEn: 'Gramer Kagoj',
    category: 'local',
    categoryLabel: 'যশোর/খুলনা',
    url: 'https://www.gramerkagoj.com',
    color: '#2874a6',
    icon: 'গ্রা',
    tags: 'jessore khulna gram'
  },
  {
    id: 'amaderbarisal',
    nameBn: 'আমাদের বরিশাল',
    nameEn: 'Amader Barisal',
    category: 'local',
    categoryLabel: 'বরিশাল (Barisal)',
    url: 'https://www.amaderbarisal.com',
    color: '#196f3d',
    icon: 'ব',
    tags: 'barisal barishal local'
  },
  {
    id: 'karatoa',
    nameBn: 'দৈনিক করতোয়া',
    nameEn: 'Dainik Karatoa',
    category: 'local',
    categoryLabel: 'বগুড়া/উত্তরাঞ্চল',
    url: 'https://www.karatoa.com.bd',
    color: '#6c3483',
    icon: 'ক',
    tags: 'bogra bogura north'
  },
  {
    id: 'amadercomilla',
    nameBn: 'আমাদের কুমিল্লা',
    nameEn: 'Amader Comilla',
    category: 'local',
    categoryLabel: 'কুমিল্লা (Cumilla)',
    url: 'https://www.dailyamadercomilla.com',
    color: '#af601a',
    icon: 'কু',
    tags: 'comilla cumilla'
  },
  {
    id: 'dainikcoxsbazar',
    nameBn: 'দৈনিক কক্সবাজার',
    nameEn: 'Dainik Coxsbazar',
    category: 'local',
    categoryLabel: 'কক্সবাজার',
    url: 'https://www.dainikcoxsbazar.com',
    color: '#16a085',
    icon: 'কক্স',
    tags: 'coxsbazar cox beach'
  },

  // ================= 6. BUSINESS & SHARE MARKET (ব্যবসা ও শেয়ার বাজার) =================
  {
    id: 'bonikbarta',
    nameBn: 'বণিক বার্তা',
    nameEn: 'Bonik Barta',
    category: 'business',
    categoryLabel: 'অর্থনীতি ও ব্যবসা',
    url: 'https://www.bonikbarta.net',
    epaperUrl: 'https://epaper.bonikbarta.net',
    color: '#d35400',
    icon: 'ব',
    tags: 'business bonik economy'
  },
  {
    id: 'sharebiz',
    nameBn: 'শেয়ার বিজ',
    nameEn: 'Sharebiz.net',
    category: 'business',
    categoryLabel: 'শেয়ার বাজার',
    url: 'https://www.sharebiz.net',
    color: '#1f618d',
    icon: 'শে',
    tags: 'share market stock dse'
  },
  {
    id: 'arthosuchak',
    nameBn: 'অর্থসূচক',
    nameEn: 'Arthosuchak',
    category: 'business',
    categoryLabel: 'শেয়ার বাজার ও অর্থনীতি',
    url: 'https://www.arthosuchak.com',
    color: '#27ae60',
    icon: 'অ',
    tags: 'stock share market economy'
  },
  {
    id: 'dsebd',
    nameBn: 'ঢাকা স্টক এক্সচেঞ্জ (DSE)',
    nameEn: 'Dhaka Stock Exchange',
    category: 'business',
    categoryLabel: 'স্টক মার্কেট',
    url: 'https://www.dsebd.org',
    color: '#004d38',
    icon: 'DSE',
    tags: 'dse stock live index'
  },

  // ================= 7. KOLKATA & WEST BENGAL (কলকাতা ও পশ্চিমবঙ্গ) =================
  {
    id: 'anandabazar',
    nameBn: 'আনন্দবাজার পত্রিকা',
    nameEn: 'Anandabazar Patrika',
    category: 'kolkata',
    categoryLabel: 'কলকাতা/পশ্চিমবঙ্গ',
    url: 'https://www.anandabazar.com',
    epaperUrl: 'https://epaper.anandabazar.com',
    color: '#ed1c24',
    icon: 'আ',
    tags: 'kolkata west bengal abp'
  },
  {
    id: 'bartaman',
    nameBn: 'বর্তমান পত্রিকা',
    nameEn: 'Bartaman Patrika',
    category: 'kolkata',
    categoryLabel: 'কলকাতা/পশ্চিমবঙ্গ',
    url: 'https://bartamanpatrika.com',
    color: '#154360',
    icon: 'ব',
    tags: 'kolkata west bengal'
  },
  {
    id: 'sangbadpratidin',
    nameBn: 'সংবাদ প্রতিদিন',
    nameEn: 'Sangbad Pratidin',
    category: 'kolkata',
    categoryLabel: 'কলকাতা/পশ্চিমবঙ্গ',
    url: 'https://www.sangbadpratidin.in',
    color: '#78281f',
    icon: 'সং',
    tags: 'kolkata west bengal'
  },
  {
    id: 'eisamay',
    nameBn: 'এই সময়',
    nameEn: 'Ei Samay',
    category: 'kolkata',
    categoryLabel: 'কলকাতা/পশ্চিমবঙ্গ',
    url: 'https://eisamay.com',
    color: '#d35400',
    icon: 'এই',
    tags: 'kolkata west bengal times'
  },
  {
    id: 'aajkaal',
    nameBn: 'আজকাল পত্রিকা',
    nameEn: 'Aajkaal',
    category: 'kolkata',
    categoryLabel: 'কলকাতা/পশ্চিমবঙ্গ',
    url: 'https://aajkaal.in',
    color: '#196f3d',
    icon: 'আ',
    tags: 'kolkata west bengal'
  },

  // ================= 8. JOBS, TECH & MAGAZINES (চাকরি ও প্রযুক্তি) =================
  {
    id: 'bdjobs',
    nameBn: 'বিডিজবস',
    nameEn: 'Bdjobs.com',
    category: 'jobs_tech',
    categoryLabel: 'চাকরির পোর্টাল',
    url: 'https://www.bdjobs.com',
    color: '#006a4e',
    icon: 'BDJ',
    tags: 'job career chakri'
  },
  {
    id: 'chakrirkhobor',
    nameBn: 'সাপ্তাহিক চাকরির খবর',
    nameEn: 'Chakrir Khobor',
    category: 'jobs_tech',
    categoryLabel: 'চাকরির খবর',
    url: 'https://chakrirkhobor.net',
    color: '#c0392b',
    icon: 'চা',
    tags: 'job career chakri'
  },
  {
    id: 'techshohor',
    nameBn: 'টেকশহর',
    nameEn: 'Techshohor.com',
    category: 'jobs_tech',
    categoryLabel: 'প্রযুক্তি সংবাদ',
    url: 'https://techshohor.com',
    color: '#2980b9',
    icon: 'টে',
    tags: 'technology gadget mobile'
  },
  {
    id: 'techtunes',
    nameBn: 'টেকটিউনস',
    nameEn: 'Techtunes.io',
    category: 'jobs_tech',
    categoryLabel: 'প্রযুক্তি ব্লগ',
    url: 'https://www.techtunes.io',
    color: '#27ae60',
    icon: 'টিটি',
    tags: 'technology blog tech'
  },
  {
    id: 'kishorealo',
    nameBn: 'কিশোর আলো',
    nameEn: 'Kishor Alo',
    category: 'jobs_tech',
    categoryLabel: 'ম্যাগাজিন ও কিশোর',
    url: 'https://www.kishoralo.com',
    color: '#f39c12',
    icon: 'কি',
    tags: 'magazine youth kishor'
  },

  // ================= 9. BANGLA FM RADIO (এফএম রেডিও) =================
  {
    id: 'radiofoorti',
    nameBn: 'রেডিও ফুর্তি',
    nameEn: 'Radio Foorti (88.0 FM)',
    category: 'radio',
    categoryLabel: 'এফএম রেডিও',
    url: 'https://radiofoorti.fm',
    color: '#e74c3c',
    icon: '📻',
    tags: 'radio music fm'
  },
  {
    id: 'radiotoday',
    nameBn: 'রেডিও টুডে',
    nameEn: 'Radio Today (89.6 FM)',
    category: 'radio',
    categoryLabel: 'এফএম রেডিও',
    url: 'https://radiotodaybd.fm',
    color: '#2980b9',
    icon: '📻',
    tags: 'radio news fm'
  },
  {
    id: 'dhakafm',
    nameBn: 'ঢাকা এফএম',
    nameEn: 'Dhaka FM (90.4 FM)',
    category: 'radio',
    categoryLabel: 'এফএম রেডিও',
    url: 'https://dhakafm904.com',
    color: '#27ae60',
    icon: '📻',
    tags: 'radio live fm'
  },
  {
    id: 'betar',
    nameBn: 'বাংলাদেশ বেতার',
    nameEn: 'Bangladesh Betar',
    category: 'radio',
    categoryLabel: 'জাতীয় বেতার',
    url: 'http://www.betar.gov.bd',
    color: '#006a4e',
    icon: '📻',
    tags: 'betar govt radio'
  }
];

// App State
let currentCategory = 'all';
let searchQuery = '';
let currentView = localStorage.getItem('abn_view') || 'grid'; // 'grid' | 'list'
let favorites = JSON.parse(localStorage.getItem('abn_favorites') || '[]');

// DOM Elements
const newspaperGrid = document.getElementById('newspaperGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const categoryTabs = document.getElementById('categoryTabs');
const resultsCount = document.getElementById('resultsCount');
const favCountBadge = document.getElementById('favCountBadge');
const emptyState = document.getElementById('emptyState');
const resetSearchBtn = document.getElementById('resetSearchBtn');
const themeToggle = document.getElementById('themeToggle');
const viewGridBtn = document.getElementById('viewGridBtn');
const viewListBtn = document.getElementById('viewListBtn');
const backToTopBtn = document.getElementById('backToTopBtn');

// Initialize Theme
function initTheme() {
  const savedTheme = localStorage.getItem('abn_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  themeToggle.querySelector('.theme-icon').textContent = theme === 'dark' ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('abn_theme', newTheme);
  updateThemeIcon(newTheme);
});

// View Toggle (Grid / List)
function updateView(view) {
  currentView = view;
  localStorage.setItem('abn_view', view);
  newspaperGrid.className = `newspaper-container ${view}-view`;
  viewGridBtn.classList.toggle('active', view === 'grid');
  viewListBtn.classList.toggle('active', view === 'list');
  renderNewspapers();
}

viewGridBtn.addEventListener('click', () => updateView('grid'));
viewListBtn.addEventListener('click', () => updateView('list'));

// Toggle Favorite
function toggleFavorite(id, event) {
  event.preventDefault();
  event.stopPropagation();

  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('abn_favorites', JSON.stringify(favorites));
  updateFavoriteBadge();
  renderNewspapers();
}

function updateFavoriteBadge() {
  if (favCountBadge) {
    favCountBadge.textContent = favorites.length;
  }
}

// Filter and Render Newspapers
function renderNewspapers() {
  const filtered = newspapers.filter(paper => {
    // Category match
    let matchesCategory = true;
    if (currentCategory === 'favorites') {
      matchesCategory = favorites.includes(paper.id);
    } else if (currentCategory === 'epaper') {
      matchesCategory = Boolean(paper.epaperUrl);
    } else if (currentCategory !== 'all') {
      matchesCategory = paper.category === currentCategory;
    }

    // Search match (Bangla, English, Label, or Tags)
    let matchesSearch = true;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const searchTarget = `${paper.nameBn} ${paper.nameEn} ${paper.categoryLabel} ${paper.tags || ''}`.toLowerCase();
      matchesSearch = searchTarget.includes(q);
    }

    return matchesCategory && matchesSearch;
  });

  // Update status count
  if (currentCategory === 'favorites') {
    resultsCount.textContent = `প্রিয় তালিকা: ${filtered.length} টি সংবাদপত্র`;
  } else if (currentCategory === 'epaper') {
    resultsCount.textContent = `ই-পেপার সংস্করণ রয়েছে এমন পত্রিকা: ${filtered.length} টি`;
  } else {
    resultsCount.textContent = `মোট ${filtered.length} টি সংবাদপত্র পাওয়া গেছে`;
  }

  // Clear container
  newspaperGrid.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';

    filtered.forEach(paper => {
      const isFav = favorites.includes(paper.id);
      const card = document.createElement('a');
      card.className = 'newspaper-card';
      card.href = paper.url;
      card.target = '_blank';
      card.rel = 'noopener noreferrer';

      const epaperButton = paper.epaperUrl 
        ? `<a href="${paper.epaperUrl}" target="_blank" rel="noopener noreferrer" class="btn-epaper-pill" onclick="event.stopPropagation();" title="${paper.nameBn} ই-পেপার পড়ুন">🗞️ ই-পেপার</a>`
        : '';

      if (currentView === 'list') {
        // Compact List Layout
        card.innerHTML = `
          <div class="card-layout-list">
            <div class="card-left">
              <div class="newspaper-avatar" style="background-color: ${paper.color};">
                ${paper.icon}
              </div>
              <div class="newspaper-info">
                <h3 class="newspaper-name-bn">${paper.nameBn}</h3>
                <p class="newspaper-name-en">${paper.nameEn}</p>
              </div>
            </div>
            <div class="card-right">
              ${epaperButton}
              <span class="category-tag">${paper.categoryLabel}</span>
              <button 
                class="favorite-btn ${isFav ? 'favorited' : ''}" 
                onclick="toggleFavorite('${paper.id}', event)"
                title="${isFav ? 'প্রিয় তালিকা থেকে সরান' : 'প্রিয় তালিকায় যুক্ত করুন'}"
                aria-label="Favorite toggle"
              >
                ${isFav ? '★' : '☆'}
              </button>
            </div>
          </div>
        `;
      } else {
        // Standard Grid Layout
        card.innerHTML = `
          <div>
            <div class="card-top">
              <div class="newspaper-avatar" style="background-color: ${paper.color};">
                ${paper.icon}
              </div>
              <div class="card-actions">
                ${epaperButton}
                <button 
                  class="favorite-btn ${isFav ? 'favorited' : ''}" 
                  onclick="toggleFavorite('${paper.id}', event)"
                  title="${isFav ? 'প্রিয় তালিকা থেকে সরান' : 'প্রিয় তালিকায় যুক্ত করুন'}"
                  aria-label="Favorite toggle"
                >
                  ${isFav ? '★' : '☆'}
                </button>
              </div>
            </div>
            <h3 class="newspaper-name-bn">${paper.nameBn}</h3>
            <p class="newspaper-name-en">${paper.nameEn}</p>
          </div>
          <div class="card-footer">
            <span class="category-tag">${paper.categoryLabel}</span>
            <span class="visit-link">পড়ুন ➔</span>
          </div>
        `;
      }

      newspaperGrid.appendChild(card);
    });
  }
}

// Search Input Listener
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.style.display = searchQuery ? 'flex' : 'none';
  renderNewspapers();
});

clearSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.style.display = 'none';
  renderNewspapers();
  searchInput.focus();
});

resetSearchBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  clearSearchBtn.style.display = 'none';
  currentCategory = 'all';
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });
  renderNewspapers();
});

// Category Switch Listener
categoryTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.category-btn');
  if (btn) {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderNewspapers();
  }
});

// Floating Back to Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 280) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}, { passive: true });

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Initial boot
initTheme();
updateFavoriteBadge();
updateView(currentView);
