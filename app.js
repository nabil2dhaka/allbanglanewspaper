// All Bangla Newspaper Directory Data
// Updated with complete online newspapers from https://allbanglanewspapersbd.com/bangla-online-newspaper/

const newspapers = [
  // =========================================================================
  // 1. NATIONAL BANGLA DAILIES (জাতীয় দৈনিক)
  // =========================================================================
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
    tags: 'dhaka top10 national leading prothom alo'
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
    tags: 'dhaka top10 national highest circulation'
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
    tags: 'dhaka top10 national jugantor'
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
    tags: 'dhaka top10 national kaler kantho'
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
    tags: 'dhaka top10 national historic ittefaq'
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
    tags: 'dhaka top10 national samakal'
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
    tags: 'dhaka national amader shomoy'
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
    tags: 'dhaka national janakantha'
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
    tags: 'dhaka national inqilab'
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
    tags: 'dhaka national naya diganta'
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
    tags: 'dhaka national tabloid mzamin'
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
    tags: 'dhaka national bhorer kagoj'
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
    tags: 'dhaka national desh rupantor'
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
    tags: 'dhaka national alokito'
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
    tags: 'dhaka national jaijaidin'
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
    tags: 'dhaka national sangbad'
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
    tags: 'dhaka national khola kagoj'
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
    tags: 'dhaka national manobkantha'
  },
  {
    id: 'amarsangbad',
    nameBn: 'দৈনিক আমার সংবাদ',
    nameEn: 'Amar Sangbad',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.amarsangbad.com',
    color: '#d35400',
    icon: 'আ',
    tags: 'dhaka national amar sangbad'
  },
  {
    id: 'ajkerpatrika',
    nameBn: 'আজকের পত্রিকা',
    nameEn: 'Ajker Patrika',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.ajkerpatrika.com',
    epaperUrl: 'https://epaper.ajkerpatrika.com',
    color: '#c0392b',
    icon: 'আজ',
    tags: 'dhaka national ajker patrika'
  },
  {
    id: 'kalbela',
    nameBn: 'কালবেলা',
    nameEn: 'Kalbela',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.kalbela.com',
    epaperUrl: 'https://epaper.kalbela.com',
    color: '#8e44ad',
    icon: 'কাল',
    tags: 'dhaka national kalbela'
  },
  {
    id: 'somoyeralo',
    nameBn: 'সময়ের আলো',
    nameEn: 'Somoyer Alo',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.shomoyeralo.com',
    epaperUrl: 'https://epaper.shomoyeralo.com',
    color: '#16a085',
    icon: 'সম',
    tags: 'dhaka national shomoyer alo'
  },
  {
    id: 'pratidinbangladesh',
    nameBn: 'প্রতিদিনের বাংলাদেশ',
    nameEn: 'Pratidiner Bangladesh',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://protidinersangbad.com',
    color: '#27ae60',
    icon: 'প্র',
    tags: 'dhaka national pratidiner sangbad'
  },

  // =========================================================================
  // 2. ONLINE BANGLA NEWSPAPERS (অনলাইন নিউজ পোর্টাল - 57 Websites from URL)
  // =========================================================================
  {
    id: 'bdnews24',
    nameBn: 'বিডিনিউজ২৪',
    nameEn: 'bdnews24.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://bangla.bdnews24.com',
    color: '#c0392b',
    icon: 'BD',
    tags: 'top10 24hour online pioneer bdnews24'
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
    tags: 'top10 24hour online banglanews24'
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
    tags: 'top10 online portal jagonews24'
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
    tags: 'online portal risingbd'
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
    tags: 'top10 online portal dhakapost'
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
    tags: 'live portal bd24live'
  },
  {
    id: 'bbcbangla',
    nameBn: 'বিবিসি বাংলা',
    nameEn: 'BBC News Bangla',
    category: 'online',
    categoryLabel: 'আন্তর্জাতিক পোর্টাল',
    url: 'https://www.bbc.com/bengali',
    color: '#bb1919',
    icon: 'BBC',
    tags: 'international bbc world'
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
    tags: 'online portal banglatribune'
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
    tags: 'education shiksha teacher school'
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
    tags: 'online portal newsbangla24'
  },
  {
    id: 'sarabangla',
    nameBn: 'সারাবাংলা',
    nameEn: 'Sarabangla.net',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://sarabangla.net',
    color: '#117a65',
    icon: 'সারা',
    tags: 'online portal sarabangla'
  },
  {
    id: 'gonews24',
    nameBn: 'গো নিউজ ২৪',
    nameEn: 'GoNews24.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.gonews24.com',
    color: '#5b2c6f',
    icon: 'গো',
    tags: 'online portal gonews24'
  },
  {
    id: 'banglainsider',
    nameBn: 'বাংলা ইনসাইডার',
    nameEn: 'Bangla Insider',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.banglainsider.com',
    color: '#d35400',
    icon: 'BI',
    tags: 'online portal banglainsider politics'
  },
  {
    id: 'dwbangla',
    nameBn: 'ডয়চে ভেলে বাংলা',
    nameEn: 'DW Bangla',
    category: 'online',
    categoryLabel: 'আন্তর্জাতিক পোর্টাল',
    url: 'https://www.dw.com/bn',
    color: '#005b96',
    icon: 'DW',
    tags: 'international dw germany world'
  },
  {
    id: 'amardesh24',
    nameBn: 'আমার দেশ ২৪',
    nameEn: 'Amar Desh 24',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://amar-desh24.com',
    color: '#922b21',
    icon: 'আম',
    tags: 'online portal amardesh'
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
    tags: 'online portal priyo'
  },
  {
    id: 'voabangla',
    nameBn: 'ভয়েস অফ আমেরিকা বাংলা',
    nameEn: 'Voice of America (VOA)',
    category: 'online',
    categoryLabel: 'আন্তর্জাতিক পোর্টাল',
    url: 'https://www.voabangla.com',
    color: '#003366',
    icon: 'VOA',
    tags: 'international voa usa world'
  },
  {
    id: 'dhakatribune_online',
    nameBn: 'ঢাকা ট্রিবিউন বাংলা',
    nameEn: 'Dhaka Tribune Bangla',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.dhakatribune.com',
    color: '#d9230f',
    icon: 'DT',
    tags: 'online portal tribune'
  },
  {
    id: 'zoombangla',
    nameBn: 'জুমবাংলা',
    nameEn: 'ZoomBangla News',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://zoombangla.com',
    color: '#e74c3c',
    icon: 'জুম',
    tags: 'online portal viral zoombangla'
  },
  {
    id: 'abnews24',
    nameBn: 'এবি নিউজ ২৪',
    nameEn: 'AB News 24',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://abnews24.com',
    color: '#1a5276',
    icon: 'AB',
    tags: 'online portal abnews24'
  },
  {
    id: 'poriborton',
    nameBn: 'পরিবর্তন ডট কম',
    nameEn: 'Poriborton News',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://poriborton.news',
    color: '#1b4f72',
    icon: 'পরি',
    tags: 'online portal poriborton'
  },
  {
    id: 'bdmorning',
    nameBn: 'বিডি মর্নিং',
    nameEn: 'BD Morning',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://bdmorning.com',
    color: '#f39c12',
    icon: 'মর্নিং',
    tags: 'online portal bdmorning'
  },
  {
    id: 'roarmedia',
    nameBn: 'রোর বাংলা',
    nameEn: 'Roar Media Bangla',
    category: 'online',
    categoryLabel: 'ফিচার ও তথ্য',
    url: 'https://roar.media/bangla',
    color: '#1e8449',
    icon: 'ROAR',
    tags: 'feature story roar media'
  },
  {
    id: 'bdjournal',
    nameBn: 'বাংলাদেশ জার্নাল',
    nameEn: 'Bangladesh Journal',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.bd-journal.com',
    color: '#78281f',
    icon: 'BJ',
    tags: 'online portal bd-journal'
  },
  {
    id: 'newsg24',
    nameBn: 'নিউজজি২৪',
    nameEn: 'NewsG24.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.newsg24.com',
    color: '#6c3483',
    icon: 'জি২৪',
    tags: 'online portal newsg24'
  },
  {
    id: 'barta24',
    nameBn: 'বার্তা২৪',
    nameEn: 'Barta24.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://barta24.com',
    color: '#900c3f',
    icon: 'বা২৪',
    tags: 'online portal barta24'
  },
  {
    id: 'dhakatimes24',
    nameBn: 'ঢাকা টাইমস ২৪',
    nameEn: 'Dhaka Times 24',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.dhakatimes24.com',
    color: '#1a5276',
    icon: 'DT',
    tags: 'online portal dhakatimes24'
  },
  {
    id: 'dailybangladesh',
    nameBn: 'ডেইলি বাংলাদেশ',
    nameEn: 'Daily Bangladesh',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.daily-bangladesh.com',
    color: '#27ae60',
    icon: 'DB',
    tags: 'online portal daily bangladesh'
  },
  {
    id: 'dmpnews',
    nameBn: 'ডিএমপি নিউজ',
    nameEn: 'DMP News (Police Portal)',
    category: 'online',
    categoryLabel: 'আইন-শৃঙ্খলা সংবাদ',
    url: 'https://dmpnews.org',
    color: '#1b2631',
    icon: 'DMP',
    tags: 'dmp police security crime'
  },
  {
    id: 'thereport24',
    nameBn: 'দ্য রিপোর্ট ২৪',
    nameEn: 'The Report 24',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://thereport24.com',
    color: '#c0392b',
    icon: 'TR',
    tags: 'online portal thereport24'
  },
  {
    id: 'somoyerkonthosor',
    nameBn: 'সময়ের কণ্ঠস্বর',
    nameEn: 'Somoyer Konthosor',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.somoyerkonthosor.com',
    color: '#af601a',
    icon: 'কণ্ঠ',
    tags: 'online portal somoyerkonthosor'
  },
  {
    id: 'onenewsbd',
    nameBn: 'ওয়ান নিউজ বিডি',
    nameEn: 'One News BD',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://onenewsbd.com',
    color: '#117a65',
    icon: 'ONE',
    tags: 'online portal onenewsbd'
  },
  {
    id: 'bartabangla',
    nameBn: 'বার্তা বাংলা',
    nameEn: 'Barta Bangla',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://bartabangla.com',
    color: '#2874a6',
    icon: 'বাং',
    tags: 'online portal bartabangla'
  },
  {
    id: 'bartabazar',
    nameBn: 'বার্তা বাজার',
    nameEn: 'Barta Bazar',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://bartabazar.com',
    color: '#d35400',
    icon: 'বাজা',
    tags: 'online portal bartabazar'
  },
  {
    id: 'jagobangla',
    nameBn: 'জাগো বাংলা',
    nameEn: 'Jago Bangla',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://jagobangla.com',
    color: '#16a085',
    icon: 'জাগো',
    tags: 'online portal jagobangla'
  },
  {
    id: 'timewatch',
    nameBn: 'টাইম ওয়াচ',
    nameEn: 'Time Watch BD',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://timewatch.com.bd',
    color: '#5b2c6f',
    icon: 'TW',
    tags: 'online portal timewatch'
  },
  {
    id: 'doinikbarta',
    nameBn: 'দৈনিক বার্তা',
    nameEn: 'Doinik Barta',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://doinikbarta.com',
    color: '#78281f',
    icon: 'বার্ত্তা',
    tags: 'online portal doinikbarta'
  },
  {
    id: 'pirganjnewsexpress',
    nameBn: 'পীরগঞ্জ নিউজ এক্সপ্রেস',
    nameEn: 'Pirganj News Express',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://pirganjnewsexpress.com',
    color: '#1f618d',
    icon: 'PNE',
    tags: 'online portal pirganj'
  },
  {
    id: 'deshebideshe',
    nameBn: 'দেশে বিদেশে',
    nameEn: 'Deshe Bideshe',
    category: 'online',
    categoryLabel: 'প্রবাস ও আন্তর্জাতিক',
    url: 'https://deshebideshe.com',
    color: '#b03a2e',
    icon: 'দেশ',
    tags: 'probash expatriate deshebideshe'
  },
  {
    id: 'sonalinews',
    nameBn: 'সোনালী নিউজ',
    nameEn: 'Sonali News',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://sonalinews.com',
    color: '#d4ac0d',
    icon: 'সোনা',
    tags: 'online portal sonalinews'
  },
  {
    id: 'mtnews24',
    nameBn: 'এমটি নিউজ ২৪',
    nameEn: 'MT News 24',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://mtnews24.com',
    color: '#27ae60',
    icon: 'MT',
    tags: 'online portal mtnews24'
  },
  {
    id: 'thebengalitimes',
    nameBn: 'দ্য বেঙ্গলি টাইমস',
    nameEn: 'The Bengali Times',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://thebengalitimes.com',
    color: '#2980b9',
    icon: 'TBT',
    tags: 'online portal thebengalitimes'
  },
  {
    id: 'deshdorpon',
    nameBn: 'দেশদর্পণ',
    nameEn: 'Desh Dorpon',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://deshdorpon.com',
    color: '#7d3c98',
    icon: 'দর্প',
    tags: 'online portal deshdorpon'
  },
  {
    id: 'dailycricket_portal',
    nameBn: 'ডেইলি ক্রিকেট',
    nameEn: 'Daily Cricket BD',
    category: 'online',
    categoryLabel: 'ক্রিকেট সংবাদ',
    url: 'https://dailycricket.com.bd',
    color: '#e74c3c',
    icon: 'DC',
    tags: 'sports cricket online portal'
  },
  {
    id: 'dhakatoday',
    nameBn: 'ঢাকা টুডে',
    nameEn: 'Dhaka Today',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://dhakatoday.com',
    color: '#117864',
    icon: 'DT',
    tags: 'online portal dhakatoday'
  },
  {
    id: 'news71online',
    nameBn: 'নিউজ ৭১ অনলাইন',
    nameEn: 'News 71 Online',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://news71online.com',
    color: '#900c3f',
    icon: '৭১',
    tags: 'online portal news71'
  },
  {
    id: 'banglatelegraph',
    nameBn: 'বাংলা টেলিগ্রাফ',
    nameEn: 'Bangla Telegraph',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://banglatelegraph.com',
    color: '#1a5276',
    icon: 'BT',
    tags: 'online portal banglatelegraph'
  },
  {
    id: 'somoyerdhara',
    nameBn: 'সময়ের ধারা',
    nameEn: 'Somoyer Dhara',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://somoyerdhara.com',
    color: '#d35400',
    icon: 'ধারা',
    tags: 'online portal somoyerdhara'
  },
  {
    id: 'dhakaprokash24',
    nameBn: 'ঢাকা প্রকাশ',
    nameEn: 'Dhaka Prokash 24',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://dhakaprokash24.com',
    color: '#c0392b',
    icon: 'DP',
    tags: 'online portal dhakaprokash'
  },
  {
    id: 'dhakanews24',
    nameBn: 'ঢাকা নিউজ ২৪',
    nameEn: 'Dhaka News 24',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://dhakanews24.com',
    color: '#1b4f72',
    icon: 'DN',
    tags: 'online portal dhakanews24'
  },
  {
    id: 'natunbarta',
    nameBn: 'নতুন বার্তা',
    nameEn: 'Natun Barta',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://natun-barta.com',
    color: '#27ae60',
    icon: 'নতুন',
    tags: 'online portal natunbarta'
  },
  {
    id: 'bdview24',
    nameBn: 'বিডি ভিউ ২৪',
    nameEn: 'BD View 24',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://bdview24.com',
    color: '#2e4053',
    icon: 'BV',
    tags: 'online portal bdview24'
  },
  {
    id: 'bd24report',
    nameBn: 'বিডি ২৪ রিপোর্ট',
    nameEn: 'BD 24 Report',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://bd24report.com',
    color: '#922b21',
    icon: '২৪',
    tags: 'online portal bd24report'
  },
  {
    id: 'shamolbangla24',
    nameBn: 'শ্যামল বাংলা ২৪',
    nameEn: 'Shamol Bangla 24',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://shamolbangla24.com',
    color: '#16a085',
    icon: 'শ্যাম',
    tags: 'online portal shamolbangla'
  },
  {
    id: 'ournewsbd',
    nameBn: 'আওয়ার নিউজ বিডি',
    nameEn: 'Our News BD',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://ournewsbd.net',
    color: '#1f618d',
    icon: 'OUR',
    tags: 'online portal ournewsbd'
  },
  {
    id: 'dailyictnews',
    nameBn: 'ডেইলি আইসিটি নিউজ',
    nameEn: 'Daily ICT News',
    category: 'online',
    categoryLabel: 'প্রযুক্তি সংবাদ',
    url: 'https://dailyictnews.com',
    color: '#2980b9',
    icon: 'ICT',
    tags: 'tech ict technology'
  },
  {
    id: 'hawker',
    nameBn: 'হকার ডট কম ডট বিডি',
    nameEn: 'Hawker.com.bd',
    category: 'online',
    categoryLabel: 'সংবাদ সংগ্রাহক',
    url: 'https://hawker.com.bd',
    color: '#e67e22',
    icon: 'হকার',
    tags: 'news aggregator hawker'
  },

  // =========================================================================
  // 3. BANGLA LIVE TV & BROADCAST NEWS (টিভি ও স্যাটেলাইট চ্যানেল)
  // =========================================================================
  {
    id: 'somoynews',
    nameBn: 'সময় টিভি',
    nameEn: 'Somoy News TV',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.somoynews.tv',
    color: '#c0392b',
    icon: 'ST',
    tags: 'live tv news somoy 24hour'
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
    tags: 'live tv news channel24'
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
    tags: 'live tv news dbc'
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
    tags: 'satellite tv entertainment'
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
    tags: 'satellite tv agriculture'
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
    id: 'atnnews',
    nameBn: 'এটিএন নিউজ',
    nameEn: 'ATN News',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://atnnewstv.com',
    color: '#c0392b',
    icon: 'ATN',
    tags: 'live tv news 24hour'
  },
  {
    id: 'atnbangla',
    nameBn: 'এটিএন বাংলা',
    nameEn: 'ATN Bangla',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://atnbangla.tv',
    color: '#1b4f72',
    icon: 'ATN',
    tags: 'satellite tv pioneer'
  },
  {
    id: 'btv',
    nameBn: 'বাংলাদেশ টেলিভিশন (BTV)',
    nameEn: 'Bangladesh Television',
    category: 'tv',
    categoryLabel: 'জাতীয় সম্প্রচার',
    url: 'http://www.btv.gov.bd',
    color: '#006a4e',
    icon: 'BTV',
    tags: 'national tv state btv'
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
  {
    id: 'ekusheytv',
    nameBn: 'একুশে টেলিভিশন (ETV)',
    nameEn: 'Ekushey Television',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://ekushey-tv.com',
    color: '#b03a2e',
    icon: 'ETV',
    tags: 'satellite tv'
  },
  {
    id: 'maasranga',
    nameBn: 'মাছরাঙা টেলিভিশন',
    nameEn: 'Maasranga TV',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://maasranga.tv',
    color: '#d35400',
    icon: 'মাছ',
    tags: 'satellite tv cricket'
  },
  {
    id: 'banglavision',
    nameBn: 'বাংলাভিশন',
    nameEn: 'Banglavision',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://www.bvnews24.com',
    color: '#2874a6',
    icon: 'BV',
    tags: 'satellite tv'
  },
  {
    id: 'boishakhi',
    nameBn: 'বৈশাখী টিভি',
    nameEn: 'Boishakhi TV',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://www.boishakhionline.com',
    color: '#7d3c98',
    icon: 'বৈ',
    tags: 'satellite tv'
  },

  // =========================================================================
  // 4. BANGLADESH ENGLISH DAILIES (ইংরেজি জাতীয় দৈনিক)
  // =========================================================================
  {
    id: 'thedailystar',
    nameBn: 'দ্য ডেইলি স্টার',
    nameEn: 'The Daily Star',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.thedailystar.net',
    color: '#003366',
    icon: 'DS',
    tags: 'english bangladesh leading star'
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
    tags: 'english business tbs economy'
  },
  {
    id: 'financialexpress',
    nameBn: 'ফাইন্যান্সিয়াল এক্সপ্রেস',
    nameEn: 'The Financial Express',
    category: 'english',
    categoryLabel: 'Financial Daily',
    url: 'https://thefinancialexpress.com.bd',
    color: '#1a5276',
    icon: 'FE',
    tags: 'english financial business fe'
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
    id: 'dailyobserver',
    nameBn: 'দ্য ডেইলি অবজারভার',
    nameEn: 'The Daily Observer',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.observerbd.com',
    color: '#117864',
    icon: 'OB',
    tags: 'english bangladesh'
  },
  {
    id: 'asianage',
    nameBn: 'দ্য এশিয়ান এইজ',
    nameEn: 'The Asian Age Bangladesh',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://dailyasianage.com',
    color: '#922b21',
    icon: 'AA',
    tags: 'english bangladesh'
  },
  {
    id: 'bangladeshpost',
    nameBn: 'বাংলাদেশ পোস্ট',
    nameEn: 'Bangladesh Post',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://bangladeshpost.net',
    color: '#1f618d',
    icon: 'BP',
    tags: 'english bangladesh'
  },

  // =========================================================================
  // 5. DIVISION & DISTRICT NEWSPAPERS (বিভাগীয় ও জেলা সংবাদপত্র)
  // =========================================================================
  // --- চট্টগ্রাম বিভাগ ---
  {
    id: 'azadi',
    nameBn: 'দৈনিক আজাদী',
    nameEn: 'Dainik Azadi',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চট্টগ্রাম',
    url: 'https://dainikazadi.net',
    color: '#c0392b',
    icon: 'আ',
    tags: 'chittagong ctg local azadi port'
  },
  {
    id: 'purbokone',
    nameBn: 'দৈনিক পূর্বকোণ',
    nameEn: 'Dainik Purbokone',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চট্টগ্রাম',
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
    division: 'chittagong',
    categoryLabel: 'চট্টগ্রাম',
    url: 'https://suprobhat.com',
    color: '#138d75',
    icon: 'সু',
    tags: 'chittagong ctg'
  },
  {
    id: 'amadercomilla',
    nameBn: 'আমাদের কুমিল্লা',
    nameEn: 'Amader Comilla',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'কুমিল্লা',
    url: 'https://www.dailyamadercomilla.com',
    color: '#af601a',
    icon: 'কু',
    tags: 'comilla cumilla chittagong'
  },
  {
    id: 'chandpurkantha',
    nameBn: 'চাঁদপুর কণ্ঠ',
    nameEn: 'Chandpur Kantha',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চাঁদপুর',
    url: 'https://chandpurkantha.com',
    color: '#6c3483',
    icon: 'চাঁ',
    tags: 'chandpur chittagong'
  },
  {
    id: 'dainikcoxsbazar',
    nameBn: 'দৈনিক কক্সবাজার',
    nameEn: 'Dainik Coxsbazar',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'কক্সবাজার',
    url: 'https://www.dainikcoxsbazar.com',
    color: '#16a085',
    icon: 'কক্স',
    tags: 'coxsbazar cox beach chittagong'
  },
  {
    id: 'fenisangbad',
    nameBn: 'ফেনী সংবাদ',
    nameEn: 'Feni Sangbad',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'ফেনী',
    url: 'https://fenisangbad.com',
    color: '#2e4053',
    icon: 'ফে',
    tags: 'feni chittagong'
  },

  // --- সিলেট বিভাগ ---
  {
    id: 'dainiksylhet',
    nameBn: 'দৈনিক সিলেট',
    nameEn: 'Dainik Sylhet',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'সিলেট',
    url: 'https://dainiksylhet.com',
    color: '#2e4053',
    icon: 'সি',
    tags: 'sylhet local surma'
  },
  {
    id: 'sylhetexpress',
    nameBn: 'সিলেট এক্সপ্রেস',
    nameEn: 'Sylhet Express',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'সিলেট',
    url: 'https://sylhetexpress.com',
    color: '#1b4f72',
    icon: 'সি',
    tags: 'sylhet local'
  },
  {
    id: 'dailykhowai',
    nameBn: 'দৈনিক খোয়াই',
    nameEn: 'Daily Khowai',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'হবিগঞ্জ/সিলেট',
    url: 'https://dailykhowai.com',
    color: '#117a65',
    icon: 'খো',
    tags: 'habiganj sylhet khowai'
  },
  {
    id: 'sunamganjkhobor',
    nameBn: 'সুনামগঞ্জের খবর',
    nameEn: 'Sunamganjer Khobor',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'সুনামগঞ্জ',
    url: 'https://sunamganjerkhobor.com',
    color: '#d35400',
    icon: 'সু',
    tags: 'sunamganj sylhet haor'
  },

  // --- রাজশাহী বিভাগ ---
  {
    id: 'sonalisangbad',
    nameBn: 'দৈনিক সোনালী সংবাদ',
    nameEn: 'Daily Sonali Sangbad',
    category: 'local',
    division: 'rajshahi',
    categoryLabel: 'রাজশাহী',
    url: 'https://sonalisangbad.com',
    color: '#d4ac0d',
    icon: 'সো',
    tags: 'rajshahi local padma'
  },
  {
    id: 'rajshahinews24',
    nameBn: 'রাজশাহী নিউজ ২৪',
    nameEn: 'Rajshahi News 24',
    category: 'local',
    division: 'rajshahi',
    categoryLabel: 'রাজশাহী',
    url: 'https://rajshahinews24.com',
    color: '#117a65',
    icon: 'রা',
    tags: 'rajshahi local'
  },
  {
    id: 'karatoa',
    nameBn: 'দৈনিক করতোয়া',
    nameEn: 'Dainik Karatoa',
    category: 'local',
    division: 'rajshahi',
    categoryLabel: 'বগুড়া/রাজশাহী',
    url: 'https://www.karatoa.com.bd',
    color: '#6c3483',
    icon: 'ক',
    tags: 'bogra bogura rajshahi north'
  },
  {
    id: 'pabnabarta',
    nameBn: 'পাবনা বার্তা',
    nameEn: 'Pabna Barta',
    category: 'local',
    division: 'rajshahi',
    categoryLabel: 'পাবনা',
    url: 'https://pabnabarta24.com',
    color: '#1f618d',
    icon: 'পা',
    tags: 'pabna rajshahi'
  },

  // --- খুলনা বিভাগ ---
  {
    id: 'purbanchal',
    nameBn: 'দৈনিক পূর্বাঞ্চল',
    nameEn: 'Dainik Purbanchal',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'খুলনা',
    url: 'https://purbanchal.com',
    color: '#b03a2e',
    icon: 'পূ',
    tags: 'khulna local sundarbans'
  },
  {
    id: 'gramerkagoj',
    nameBn: 'গ্রামের কাগজ',
    nameEn: 'Gramer Kagoj',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'যশোর/খুলনা',
    url: 'https://www.gramerkagoj.com',
    color: '#2874a6',
    icon: 'গ্রা',
    tags: 'jessore khulna gram'
  },
  {
    id: 'mathabhanga',
    nameBn: 'দৈনিক মাথাভাঙ্গা',
    nameEn: 'Dainik Mathabhanga',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'চুয়াডাঙ্গা/খুলনা',
    url: 'https://mathabhanga.com',
    color: '#27ae60',
    icon: 'মা',
    tags: 'chuadanga khulna'
  },
  {
    id: 'meherpurpratidin',
    nameBn: 'মেহেরপুর প্রতিদিন',
    nameEn: 'Meherpur Pratidin',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'মেহেরপুর/খুলনা',
    url: 'https://meherpurpratidin.news',
    color: '#e67e22',
    icon: 'মে',
    tags: 'meherpur khulna'
  },

  // --- বরিশাল বিভাগ ---
  {
    id: 'amaderbarisal',
    nameBn: 'আমাদের বরিশাল',
    nameEn: 'Amader Barisal',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'বরিশাল',
    url: 'https://www.amaderbarisal.com',
    color: '#196f3d',
    icon: 'ব',
    tags: 'barisal barishal local kirtankhola'
  },
  {
    id: 'barisalnews',
    nameBn: 'বরিশাল নিউজ',
    nameEn: 'Barisal News',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'বরিশাল',
    url: 'https://barisalnews.com',
    color: '#1f618d',
    icon: 'ব',
    tags: 'barisal barishal'
  },
  {
    id: 'patuakhaliweb',
    nameBn: 'পটুয়াখালী ওয়েব',
    nameEn: 'Patuakhali Web',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'পটুয়াখালী/বরিশাল',
    url: 'https://patuakhaliweb.com',
    color: '#922b21',
    icon: 'প',
    tags: 'patuakhali barisal kuakata'
  },

  // --- রংপুর বিভাগ ---
  {
    id: 'uttarbangla',
    nameBn: 'দৈনিক উত্তর বাংলা',
    nameEn: 'Dainik Uttar Bangla',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'রংপুর/উত্তরাঞ্চল',
    url: 'https://uttarbangla.com',
    color: '#c0392b',
    icon: 'উ',
    tags: 'rangpur north teesta'
  },
  {
    id: 'rangpurchitra',
    nameBn: 'রংপুর চিত্র',
    nameEn: 'Rangpur Chitra',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'রংপুর',
    url: 'https://rangpurchitra.net',
    color: '#16a085',
    icon: 'রং',
    tags: 'rangpur local'
  },
  {
    id: 'dinajpurnews',
    nameBn: 'দিনাজপুর নিউজ ২৪',
    nameEn: 'Dinajpur News 24',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'দিনাজপুর',
    url: 'https://dinajpurnews24.com',
    color: '#5b2c6f',
    icon: 'দি',
    tags: 'dinajpur rangpur'
  },

  // --- ঢাকা জেলা ও শহরতলি ---
  {
    id: 'narayanganjpost',
    nameBn: 'নারায়ণগঞ্জ পোস্ট',
    nameEn: 'Narayanganj Post',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'নারায়ণগঞ্জ',
    url: 'https://narayanganjpost.com',
    color: '#2e4053',
    icon: 'না',
    tags: 'narayanganj dhaka'
  },
  {
    id: 'gazipurbarta',
    nameBn: 'গাজীপুর বার্তা',
    nameEn: 'Gazipur Barta',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'গাজীপুর',
    url: 'https://gazipurbarta.com',
    color: '#1b4f72',
    icon: 'গা',
    tags: 'gazipur dhaka'
  },
  {
    id: 'tangailbarta',
    nameBn: 'টাঙ্গাইল বার্তা',
    nameEn: 'Tangail Barta',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'টাঙ্গাইল',
    url: 'https://tangailbarta24.com',
    color: '#117a65',
    icon: 'টা',
    tags: 'tangail dhaka'
  },

  // --- ময়মনসিংহ বিভাগ ---
  {
    id: 'mymensinghpratidin',
    nameBn: 'ময়মনসিংহ প্রতিদিন',
    nameEn: 'Mymensingh Pratidin',
    category: 'local',
    division: 'mymensingh',
    categoryLabel: 'ময়মনসিংহ',
    url: 'https://mymensinghpratidin.com',
    color: '#d35400',
    icon: 'ম',
    tags: 'mymensingh brahmaputra'
  },
  {
    id: 'jamalpurnews',
    nameBn: 'জামালপুর বার্তা',
    nameEn: 'Jamalpur Barta',
    category: 'local',
    division: 'mymensingh',
    categoryLabel: 'জামালপুর',
    url: 'https://jamalpurnews24.com',
    color: '#7d3c98',
    icon: 'জা',
    tags: 'jamalpur mymensingh'
  },

  // =========================================================================
  // 6. BUSINESS, STOCK & FINANCIAL NEWS (ব্যবসা ও শেয়ার বাজার)
  // =========================================================================
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
    tags: 'business bonik economy commerce'
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
    tags: 'share market stock dse commerce'
  },
  {
    id: 'arthosuchak',
    nameBn: 'অর্থসূচক',
    nameEn: 'Arthosuchak',
    category: 'business',
    categoryLabel: 'অর্থনীতি ও ব্যবসা',
    url: 'https://www.arthosuchak.com',
    color: '#27ae60',
    icon: 'অ',
    tags: 'stock share market economy money'
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
    tags: 'dse stock live index market'
  },
  {
    id: 'csekhorbor',
    nameBn: 'চট্টগ্রাম স্টক এক্সচেঞ্জ (CSE)',
    nameEn: 'Chittagong Stock Exchange',
    category: 'business',
    categoryLabel: 'স্টক মার্কেট',
    url: 'https://www.cse.com.bd',
    color: '#1b4f72',
    icon: 'CSE',
    tags: 'cse stock chittagong'
  },
  {
    id: 'businessinsiderbd',
    nameBn: 'বিজনেস ইনসাইডার বাংলাদেশ',
    nameEn: 'Business Insider BD',
    category: 'business',
    categoryLabel: 'বাণিজ্য সংবাদ',
    url: 'https://www.businessinsiderbd.com',
    color: '#117864',
    icon: 'BI',
    tags: 'business commerce trade'
  },

  // =========================================================================
  // 7. SPORTS & ENTERTAINMENT (খেলাধুলা ও বিনোদন)
  // =========================================================================
  {
    id: 'pavilion',
    nameBn: 'প্যাভিলিয়ন (Pavilion)',
    nameEn: 'Pavilion Cricket & Sports',
    category: 'sports',
    categoryLabel: 'ক্রীড়া পোর্টাল',
    url: 'https://pavilion.com.bd',
    color: '#27ae60',
    icon: 'PAV',
    tags: 'sports cricket football pavilion'
  },
  {
    id: 'bdcrictime',
    nameBn: 'বিডিক্রিকটাইম',
    nameEn: 'Bdcrictime',
    category: 'sports',
    categoryLabel: 'ক্রিকেট সংবাদ',
    url: 'https://www.bdcrictime.com',
    color: '#e74c3c',
    icon: 'BCT',
    tags: 'sports cricket tigers bpl'
  },
  {
    id: 'dailycricket',
    nameBn: 'ডেইলি ক্রিকেট',
    nameEn: 'Daily Cricket BD',
    category: 'sports',
    categoryLabel: 'ক্রিকেট সংবাদ',
    url: 'https://dailycricket.com.bd',
    color: '#2980b9',
    icon: 'DC',
    tags: 'sports cricket live score'
  },
  {
    id: 'kheladhula',
    nameBn: 'খেলাধুলা ২৪',
    nameEn: 'Kheladhula24',
    category: 'sports',
    categoryLabel: 'খেলাধুলা সংবাদ',
    url: 'https://kheladhula24.com',
    color: '#f39c12',
    icon: 'খেলা',
    tags: 'sports football messi ronaldo'
  },
  {
    id: 'anandaalo',
    nameBn: 'আনন্দ আলো',
    nameEn: 'Ananda Alo',
    category: 'sports',
    categoryLabel: 'বিনোদন ও সংস্কৃতি',
    url: 'https://anandaalo.com',
    color: '#9b59b6',
    icon: 'আ',
    tags: 'entertainment culture cinema natok'
  },

  // =========================================================================
  // 8. JOBS, TECH & EDUCATION (চাকরি, প্রযুক্তি ও শিক্ষা)
  // =========================================================================
  {
    id: 'bdjobs',
    nameBn: 'বিডিজবস (Bdjobs)',
    nameEn: 'Bdjobs.com',
    category: 'jobs_tech',
    categoryLabel: 'চাকরির পোর্টাল',
    url: 'https://www.bdjobs.com',
    color: '#006a4e',
    icon: 'BDJ',
    tags: 'job career chakri circular'
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
    tags: 'job career govt chakri'
  },
  {
    id: 'campuslive24',
    nameBn: 'ক্যাম্পাস লাইভ ২৪',
    nameEn: 'Campus Live 24',
    category: 'jobs_tech',
    categoryLabel: 'বিশ্ববিদ্যালয় ও ক্যাম্পাস',
    url: 'https://campuslive24.com',
    color: '#1f618d',
    icon: 'CL',
    tags: 'campus university student hsc ssc'
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
    tags: 'technology gadget mobile ai telecom'
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
    tags: 'technology blog tech tutorial'
  },
  {
    id: 'bigganchinta',
    nameBn: 'বিজ্ঞানচিন্তা',
    nameEn: 'Biggan Chinta',
    category: 'jobs_tech',
    categoryLabel: 'বিজ্ঞান সাময়িকী',
    url: 'https://www.bigganchinta.com',
    color: '#d35400',
    icon: 'বি',
    tags: 'science research space biggan'
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
    tags: 'magazine youth kishor literature'
  },

  // =========================================================================
  // 9. BANGLA FM RADIO (এফএম রেডিও)
  // =========================================================================
  {
    id: 'radiofoorti',
    nameBn: 'রেডিও ফুর্তি',
    nameEn: 'Radio Foorti (88.0 FM)',
    category: 'radio',
    categoryLabel: 'এফএম রেডিও',
    url: 'https://radiofoorti.fm',
    color: '#e74c3c',
    icon: '📻',
    tags: 'radio music fm entertainment'
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
    id: 'jagofm',
    nameBn: 'জাগো এফএম',
    nameEn: 'Jago FM (94.4 FM)',
    category: 'radio',
    categoryLabel: 'এফএম রেডিও',
    url: 'https://www.jago.fm',
    color: '#e67e22',
    icon: '📻',
    tags: 'radio live fm jago'
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
    tags: 'betar govt radio news state'
  },

  // =========================================================================
  // 10. KOLKATA & WEST BENGAL (কলকাতা ও পশ্চিমবঙ্গ)
  // =========================================================================
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
  {
    id: 'uttarbangasambad',
    nameBn: 'উত্তরবঙ্গ সংবাদ',
    nameEn: 'Uttarbanga Sambad',
    category: 'kolkata',
    categoryLabel: 'উত্তরবঙ্গ/শিলিগুড়ি',
    url: 'https://uttarbangasambad.com',
    color: '#117a65',
    icon: 'উ',
    tags: 'siliguri west bengal uttarbanga'
  }
];

// App State
let currentCategory = 'all';
let currentDivision = 'all';
let searchQuery = '';
let currentView = localStorage.getItem('abn_view') || 'grid';
let favorites = JSON.parse(localStorage.getItem('abn_favorites') || '[]');

// DOM Elements
const newspaperGrid = document.getElementById('newspaperGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const categoryTabs = document.getElementById('categoryTabs');
const divisionFilterWrap = document.getElementById('divisionFilterWrap');
const divisionTabs = document.getElementById('divisionTabs');
const resultsCount = document.getElementById('resultsCount');
const totalCountBadge = document.getElementById('totalCountBadge');
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
  updateBadges();
  renderNewspapers();
}

function updateBadges() {
  if (favCountBadge) favCountBadge.textContent = favorites.length;
  if (totalCountBadge) totalCountBadge.textContent = newspapers.length;
}

// Filter and Render Newspapers
function renderNewspapers() {
  // Show / hide division subfilter if category is 'local'
  if (currentCategory === 'local') {
    divisionFilterWrap.style.display = 'flex';
  } else {
    divisionFilterWrap.style.display = 'none';
  }

  const filtered = newspapers.filter(paper => {
    // 1. Category filter
    let matchesCategory = true;
    if (currentCategory === 'favorites') {
      matchesCategory = favorites.includes(paper.id);
    } else if (currentCategory === 'epaper') {
      matchesCategory = Boolean(paper.epaperUrl);
    } else if (currentCategory !== 'all') {
      matchesCategory = paper.category === currentCategory;
    }

    // 2. Division subfilter (when viewing local news)
    let matchesDivision = true;
    if (currentCategory === 'local' && currentDivision !== 'all') {
      matchesDivision = paper.division === currentDivision;
    }

    // 3. Search match
    let matchesSearch = true;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      const searchTarget = `${paper.nameBn} ${paper.nameEn} ${paper.categoryLabel} ${paper.division || ''} ${paper.tags || ''}`.toLowerCase();
      matchesSearch = searchTarget.includes(q);
    }

    return matchesCategory && matchesDivision && matchesSearch;
  });

  // Update status count
  if (currentCategory === 'favorites') {
    resultsCount.textContent = `প্রিয় তালিকা: ${filtered.length} টি সংবাদপত্র`;
  } else if (currentCategory === 'epaper') {
    resultsCount.textContent = `ই-পেপার সংস্করণ রয়েছে: ${filtered.length} টি`;
  } else if (currentCategory === 'online') {
    resultsCount.textContent = `অনলাইন পোর্টাল: ${filtered.length} টি ওয়েবসাইট`;
  } else if (currentCategory === 'local' && currentDivision !== 'all') {
    resultsCount.textContent = `নির্বাচিত বিভাগ: ${filtered.length} টি পত্রিকা`;
  } else {
    resultsCount.textContent = `মোট ${filtered.length} টি ওয়েবসাইট প্রদর্শিত হচ্ছে`;
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

      const divisionTag = paper.division 
        ? `<span class="district-tag">${paper.categoryLabel}</span>` 
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
            <div class="badges-group">
              <span class="category-tag">${paper.categoryLabel}</span>
              ${divisionTag}
            </div>
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
  currentDivision = 'all';
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });
  document.querySelectorAll('.subfilter-chip').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.division === 'all');
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
    currentDivision = 'all';
    document.querySelectorAll('.subfilter-chip').forEach(b => b.classList.toggle('active', b.dataset.division === 'all'));
    renderNewspapers();
  }
});

// Division Subfilter Listener
divisionTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.subfilter-chip');
  if (btn) {
    document.querySelectorAll('.subfilter-chip').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDivision = btn.dataset.division;
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
updateBadges();
updateView(currentView);
