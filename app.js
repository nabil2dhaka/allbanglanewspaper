// All Bangla Newspaper Directory Data
// Categorized by Type with dedicated 'Stock Market' category from https://www.allbanglanewspaper.xyz/bangladesh/sharebazarnewspaper

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
    id: 'dailyamardesh',
    nameBn: 'দৈনিক আমার দেশ',
    nameEn: 'Daily Amar Desh',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://dailyamardesh.com',
    epaperUrl: 'https://eamardesh.com',
    color: '#d9230f',
    icon: 'আ',
    tags: 'dhaka national daily amardesh dailyamardesh daily amardesh eamardesh eamardesh.com epaper e-paper shadhinotar kotha bole'
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
    epaperUrl: 'https://epaper.sangbad.net',
    color: '#78281f',
    icon: 'সং',
    tags: 'dhaka national sangbad epaper sangbad.net'
  },
  {
    id: 'kholakagoj',
    nameBn: 'খোলা কাগজ',
    nameEn: 'Khola Kagoj',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.kholakagojbd.com',
    epaperUrl: 'https://epaper.kholakagojbd.com',
    color: '#1b4f72',
    icon: 'খো',
    tags: 'dhaka national khola kagoj epaper'
  },
  {
    id: 'manobkantha',
    nameBn: 'মানবকণ্ঠ',
    nameEn: 'Manobkantha',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.manobkantha.com.bd',
    epaperUrl: 'https://epaperarchive.manobkantha.com.bd',
    color: '#6c3483',
    icon: 'মা',
    tags: 'dhaka national manobkantha epaper'
  },
  {
    id: 'amarsangbad',
    nameBn: 'দৈনিক আমার সংবাদ',
    nameEn: 'Amar Sangbad',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.amarsangbad.com',
    epaperUrl: 'https://epaper.amarsangbad.com',
    color: '#d35400',
    icon: 'আ',
    tags: 'dhaka national amar sangbad epaper'
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
    id: 'protidinersangbad',
    nameBn: 'প্রতিদিনের সংবাদ',
    nameEn: 'Daily Protidiner Sangbad',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://protidinersangbad.com',
    epaperUrl: 'https://epaper.protidinersangbad.com',
    color: '#27ae60',
    icon: 'প্র',
    tags: 'dhaka national pratidiner sangbad protidinersangbad epaper'
  },
  {
    id: 'pratidinbangladesh',
    nameBn: 'প্রতিদিনের বাংলাদেশ',
    nameEn: 'Pratidiner Bangladesh',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://protidinerbangladesh.com',
    epaperUrl: 'https://epaper.protidinerbangladesh.com',
    color: '#1e7e34',
    icon: 'প্র',
    tags: 'dhaka national pratidiner bangladesh protidinerbangladesh epaper'
  },
  {
    id: 'agamirshomoy',
    nameBn: 'দৈনিক আগামীর সময়',
    nameEn: 'Agamir Shomoy',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.agamirsomoy.com',
    epaperUrl: 'https://www.agamirsomoy.com/epaper',
    color: '#b91c1c',
    icon: 'আ',
    tags: 'dhaka national daily agamir shomoy agamirshomoy agamir somoy agamirsomoy epaper agamirshomoy.com www.agamirshomoy.com'
  },
  {
    id: 'dailysangram',
    nameBn: 'দৈনিক সংগ্রাম',
    nameEn: 'Daily Sangram',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://dailysangram.com',
    epaperUrl: 'https://epaper.dailysangram.com',
    color: '#1e3a8a',
    icon: 'সং',
    tags: 'dhaka national daily sangram dailysangram epaper'
  },
  {
    id: 'banijjoprotidin',
    nameBn: 'বাণিজ্য প্রতিদিন',
    nameEn: 'Banijjo Pratidin',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://banijjoprotidin.com',
    epaperUrl: 'https://epaper.banijjoprotidin.com',
    color: '#0284c7',
    icon: 'বা',
    tags: 'dhaka national daily banijjo pratidin banijjoprotidin business commerce epaper'
  },
  {
    id: 'dailysokalersomoy',
    nameBn: 'দৈনিক সকালের সময়',
    nameEn: 'Daily Sokaler Somoy',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.dailysokalersomoy.com',
    epaperUrl: 'https://epaper.sokalersomoy.online',
    color: '#ea580c',
    icon: 'স',
    tags: 'dhaka national daily sokaler somoy sokalersomoy epaper'
  },
  {
    id: 'dailynabochatona',
    nameBn: 'দৈনিক নবচেতনা',
    nameEn: 'Daily Nabo Chatona',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://dailynabochatona.com',
    epaperUrl: 'https://epaper.dailynabochatona.com',
    color: '#b91c1c',
    icon: 'নব',
    tags: 'dhaka national daily nabo chatona nabochatona epaper'
  },
  {
    id: 'ajkalerkhobor',
    nameBn: 'আজকালের খবর',
    nameEn: 'Ajkaler Khobor',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.ajkalerkhobor.com',
    epaperUrl: 'https://epaper.ajkalerkhobor.net',
    color: '#c026d3',
    icon: 'আজ',
    tags: 'dhaka national daily ajkaler khobor ajkalerkhobor epaper'
  },
  {
    id: 'khaborerkagoj',
    nameBn: 'খবরের কাগজ',
    nameEn: 'Khaborer Kagoj',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.khaborerkagoj.com',
    epaperUrl: 'https://epaper.khaborerkagoj.com',
    color: '#dc2626',
    icon: 'খ',
    tags: 'dhaka national daily khaborer kagoj khaborerkagoj epaper'
  },
  {
    id: 'bangladesherkhabor',
    nameBn: 'বাংলাদেশের খবর',
    nameEn: 'Bangladesher Khabor',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.bangladesherkhabor.net',
    epaperUrl: 'https://epaper.bangladesherkhabor.net',
    color: '#059669',
    icon: 'বা',
    tags: 'dhaka national daily bangladesher khabor bangladesherkhabor epaper'
  },
  {
    id: 'dailyvorerpata',
    nameBn: 'দৈনিক ভোরের পাতা',
    nameEn: 'Daily Vorer Pata',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.dailyvorerpata.com',
    epaperUrl: 'https://epaper.dailyvorerpata.com',
    color: '#15803d',
    icon: 'ভো',
    tags: 'dhaka national daily vorer pata dailyvorerpata bhorer pata epaper'
  },
  {
    id: 'gonokantho',
    nameBn: 'দৈনিক গণকণ্ঠ',
    nameEn: 'Daily Gonokantho',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.gonokantho.com',
    epaperUrl: 'https://egonokantho.com',
    color: '#7c2d12',
    icon: 'গণ',
    tags: 'dhaka national daily gonokantho ganakantha egonokantho epaper'
  },
  {
    id: 'dailydestiny',
    nameBn: 'দৈনিক ডেসটিনি',
    nameEn: 'Daily Destiny',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://dailydestinybd.com/bn',
    epaperUrl: 'https://dailydestinybd.com/bn/e-papers/visual',
    color: '#9333ea',
    icon: 'ডে',
    tags: 'dhaka national daily destiny dailydestiny dailydestinybd epaper'
  },
  {
    id: 'bdbulletin',
    nameBn: 'বাংলাদেশ বুলেটিন',
    nameEn: 'Bangladesh Bulletin',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.bd-bulletin.com',
    epaperUrl: 'https://www.bd-bulletin.com/epaper/',
    color: '#c0392b',
    icon: 'বু',
    tags: 'bangladesh bulletin bdbulletin bd-bulletin national daily epaper বাংলাদেশ বুলেটিন'
  },
  {
    id: 'somoyerprotyasha',
    nameBn: 'সময়ের প্রত্যাশা',
    nameEn: 'Somoyer Protyasha',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://somoyerprotyasha.com',
    color: '#1b4f72',
    icon: 'স',
    tags: 'somoyerprotyasha somoyer protyasha national daily সময়ের প্রত্যাশা'
  },
  {
    id: 'amarbangladesh24',
    nameBn: 'দৈনিক আমার বাংলাদেশ',
    nameEn: 'Daily Amar Bangladesh',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.amarbangladesh24.com',
    color: '#006266',
    icon: 'আ',
    tags: 'amarbangladesh amarbangladesh24 daily national আমার বাংলাদেশ'
  },
  {
    id: 'dainikanandabazar',
    nameBn: 'দৈনিক আনন্দবাজার',
    nameEn: 'Dainik Anandabazar',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.dainikanandabazar.com',
    color: '#c0392b',
    icon: 'আ',
    tags: 'anandabazar dainikanandabazar national daily আনন্দবাজার'
  },
  {
    id: 'dailykalersrot',
    nameBn: 'দৈনিক কালের স্রোত',
    nameEn: 'Daily Kaler Srot',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://dailykalersrot.com',
    epaperUrl: 'https://dailykalersrot.com/epaper/',
    color: '#2980b9',
    icon: 'কা',
    tags: 'kalersrot dailykalersrot national daily epaper কালের স্রোত'
  },
  {
    id: 'matribhumirkhobor',
    nameBn: 'দৈনিক মাতৃভূমির খবর',
    nameEn: 'Dainik Matribhumir Khobor',
    category: 'daily',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.matribhumirkhobor.com',
    epaperUrl: 'https://e.matribhumirkhobor.com/',
    color: '#006266',
    icon: 'মা',
    tags: 'matribhumirkhobor matribhumir khobor national daily epaper মাতৃভূমির খবর'
  },

  // =========================================================================
  // 2. ONLINE BANGLA NEWSPAPERS (অনলাইন নিউজ পোর্টাল - 64 Websites)
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
    epaperUrl: 'https://epaper.dhakatribune.com',
    color: '#d9230f',
    icon: 'DT',
    tags: 'online portal tribune epaper'
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
    color: '#25aae1',
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
    color: '#007a0f',
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
    url: 'https://www.banglatelegraph.com',
    color: '#143f61',
    icon: 'BT',
    tags: 'online portal banglatelegraph banglatelegraph.com'
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
  {
    id: 'npbnews',
    nameBn: 'এনপিবি নিউজ',
    nameEn: 'NPB News',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://npbnews.com',
    color: '#0b5394',
    icon: 'এন',
    tags: 'online portal npb news npbnews npbnews.com bangla online satya sorasori sobar age'
  },
  {
    id: 'asiapost',
    nameBn: 'এশিয়া পোস্ট',
    nameEn: 'Asia Post',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.asia-post.com',
    color: '#b91c1c',
    icon: 'এ',
    tags: 'online portal asia post asiapost asia-post.com bangla online'
  },
  {
    id: 'banglaoutlook',
    nameBn: 'বাংলা আউটলুক',
    nameEn: 'Bangla Outlook',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.banglaoutlook.org',
    color: '#dc2626',
    icon: 'বা',
    tags: 'online portal bangla outlook banglaoutlook banglaoutlook.org sob bole dao'
  },
  {
    id: 'thedailycampus',
    nameBn: 'দ্য ডেইলি ক্যাম্পাস',
    nameEn: 'The Daily Campus',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://thedailycampus.com',
    color: '#059669',
    icon: 'ক্যা',
    tags: 'online portal daily campus thedailycampus thedailycampus.com education youth scholarship bcs jobs'
  },
  {
    id: 'dhakastreetjournal',
    nameBn: 'ঢাকা স্ট্রিট জার্নাল',
    nameEn: 'Dhaka Street Journal',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.dhakastreetjournal.com',
    color: '#0f172a',
    icon: 'ডি',
    tags: 'online portal dhaka street journal dhakastreetjournal street journal bangla'
  },
  {
    id: 'sheershanews',
    nameBn: 'শীর্ষ নিউজ',
    nameEn: 'Sheersha News',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://sheershanews.com',
    color: '#b91c1c',
    icon: 'শী',
    tags: 'online portal sheersha news sheershanews sheershanews.com bangla'
  },
  {
    id: 'bssnews',
    nameBn: 'বাংলাদেশ সংবাদ সংস্থা (বাসস)',
    nameEn: 'BSS News',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.bssnews.net/bangla/',
    color: '#006a4e',
    icon: 'বাসস',
    tags: 'online portal bss news bssnews bssnews.net bangladesh sangbad sangstha basas national news agency'
  },
  {
    id: 'dhakamagazine',
    nameBn: 'ঢাকা ম্যাগাজিন',
    nameEn: 'Dhaka Magazine',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://dhakamagazine.com',
    color: '#142841',
    icon: 'ঢা',
    tags: 'online portal dhaka magazine dhakamagazine breaking stories features news'
  },
  {
    id: 'unb',
    nameBn: 'ইউনাইটেড নিউজ অব বাংলাদেশ (ইউএনবি)',
    nameEn: 'UNB (United News of Bangladesh)',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://unb.com.bd/bangla',
    color: '#ec2028',
    icon: 'ইউএনবি',
    tags: 'online portal unb united news of bangladesh national news agency unb.com.bd unb bangla'
  },
  {
    id: 'sangbad71',
    nameBn: '৭১ সংবাদ',
    nameEn: '71 Sangbad',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.71sangbad.com',
    color: '#b71540',
    icon: '৭১',
    tags: '71sangbad sangbad71 online portal ৭১ সংবাদ'
  },
  {
    id: 'jugerchinta24',
    nameBn: 'যুগের চিন্তা',
    nameEn: 'Juger Chinta',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.jugerchinta24.com',
    epaperUrl: 'https://www.jugerchinta24.com/epaper',
    color: '#27ae60',
    icon: 'যু',
    tags: 'jugerchinta jugerchinta24 online portal epaper যুগের চিন্তা'
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
    color: '#cd181e',
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
  {
    id: 'starnews',
    nameBn: 'স্টার নিউজ',
    nameEn: 'Star News',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://starnews.com.bd',
    color: '#d63031',
    icon: 'SN',
    tags: 'live tv news star starnews satellite broadcast bangla'
  },
  {
    id: 'greentv',
    nameBn: 'গ্রিন টিভি',
    nameEn: 'Green TV',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://greenbd.tv',
    color: '#27ae60',
    icon: 'গ্রি',
    tags: 'green tv greentv satellite broadcast গ্রিন টিভি'
  },
  {
    id: 'banglatv',
    nameBn: 'বাংলা টিভি',
    nameEn: 'Bangla TV',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://banglatv.tv',
    color: '#c0392b',
    icon: 'বাং',
    tags: 'banglatv bangla tv satellite broadcast বাংলা টিভি'
  },
  {
    id: 'bijoytv',
    nameBn: 'বিজয় টিভি',
    nameEn: 'Bijoy TV',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://bijoy.tv',
    color: '#b03a2e',
    icon: 'বি',
    tags: 'bijoytv bijoy tv satellite broadcast বিজয় টিভি'
  },
  {
    id: 'globaltv',
    nameBn: 'গ্লোবাল টিভি',
    nameEn: 'Global TV BD',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://www.globaltvbd.com',
    color: '#1f618d',
    icon: 'গ্লো',
    tags: 'globaltv global tv hd broadcast গ্লোবাল টিভি'
  },
  {
    id: 'ekhontv',
    nameBn: 'এখন টিভি',
    nameEn: 'Ekhon TV',
    category: 'tv',
    categoryLabel: 'বিজনেস টিভি',
    url: 'https://ekhon.tv',
    logo: 'assets/logos/ekhontv.webp',
    color: '#d35400',
    icon: 'এ',
    tags: 'ekhontv ekhon tv business broadcast এখন টিভি'
  },
  {
    id: 'durontotv',
    nameBn: 'দুরন্ত টিভি',
    nameEn: 'Duronto TV',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://duronto.tv',
    color: '#e67e22',
    icon: 'দু',
    tags: 'duronto durontotv kids children satellite broadcast দুরন্ত টিভি'
  },
  {
    id: 'satv',
    nameBn: 'এসএ টিভি',
    nameEn: 'SA TV',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://www.satv.tv',
    color: '#117864',
    icon: 'SA',
    tags: 'satv sa tv satellite broadcast এসএ টিভি'
  },
  {
    id: 'mohonatv',
    nameBn: 'মোহনা টিভি',
    nameEn: 'Mohona TV',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://mohona.tv',
    color: '#7d3c98',
    icon: 'মো',
    tags: 'mohonatv mohona tv satellite broadcast মোহনা টিভি'
  },
  {
    id: 'gazitv',
    nameBn: 'গাজী টিভি (GTV)',
    nameEn: 'Gazi TV (GTV)',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://gazitv.com',
    color: '#b9770e',
    icon: 'GTV',
    tags: 'gazitv gazi tv gtv cricket satellite broadcast গাজী টিভি'
  },
  {
    id: 'tsports',
    nameBn: 'টি স্পোর্টস',
    nameEn: 'T Sports',
    category: 'tv',
    categoryLabel: 'স্পোর্টস টিভি',
    url: 'https://www.tsports.com',
    color: '#c0392b',
    icon: 'TS',
    tags: 'tsports t sports bashundhara sports cricket football live টি স্পোর্টস'
  },
  {
    id: 'nagoriktv',
    nameBn: 'নাগরিক টিভি',
    nameEn: 'Nagorik TV',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://nagorik.com',
    color: '#2e4053',
    icon: 'না',
    tags: 'nagorik nagoriktv satellite broadcast নাগরিক টিভি'
  },
  {
    id: 'mytv',
    nameBn: 'মাই টিভি',
    nameEn: 'My TV',
    category: 'tv',
    categoryLabel: 'স্যাটেলাইট টিভি',
    url: 'https://mytvbd.tv',
    color: '#16a085',
    icon: 'মাই',
    tags: 'mytv my tv mytvbd satellite broadcast মাই টিভি'
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
    epaperUrl: 'https://epaper.dhakatribune.com',
    color: '#d9230f',
    icon: 'DT',
    tags: 'english bangladesh tribune epaper'
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
    epaperUrl: 'https://epaper.thefinancialexpress.com.bd',
    color: '#1a5276',
    icon: 'FE',
    tags: 'english financial business fe epaper'
  },
  {
    id: 'newage',
    nameBn: 'নিউ এজ',
    nameEn: 'New Age',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.newagebd.net',
    epaperUrl: 'https://epaper.newagebd.net',
    color: '#4a235a',
    icon: 'NA',
    tags: 'english bangladesh newage epaper'
  },
  {
    id: 'dailysun',
    nameBn: 'ডেইলি সান',
    nameEn: 'Daily Sun',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.daily-sun.com',
    epaperUrl: 'https://epaper.daily-sun.com',
    color: '#f39c12',
    icon: 'DS',
    tags: 'english bangladesh sun epaper'
  },
  {
    id: 'dailyobserver',
    nameBn: 'দ্য ডেইলি অবজারভার',
    nameEn: 'The Daily Observer',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.observerbd.com',
    epaperUrl: 'https://epaper.observerbd.com',
    color: '#117864',
    icon: 'OB',
    tags: 'english bangladesh observer observerbd epaper'
  },
  {
    id: 'asianage',
    nameBn: 'দ্য এশিয়ান এইজ',
    nameEn: 'The Asian Age Bangladesh',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://dailyasianage.com',
    epaperUrl: 'https://dailyasianage.com/ep/',
    color: '#922b21',
    icon: 'AA',
    tags: 'english bangladesh asian age asianage epaper'
  },
  {
    id: 'bangladeshpost',
    nameBn: 'বাংলাদেশ পোস্ট',
    nameEn: 'Bangladesh Post',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://bangladeshpost.net',
    epaperUrl: 'https://bangladeshpost.net/epaper',
    color: '#1f618d',
    icon: 'BP',
    tags: 'english bangladesh bangladeshpost epaper'
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
    epaperUrl: 'https://edainikpurbokone.net/',
    color: '#2471a3',
    icon: 'পূ',
    tags: 'chittagong ctg local purbokone edainikpurbokone epaper'
  },
  {
    id: 'suprobhat',
    nameBn: 'সুপ্রভাত বাংলাদেশ',
    nameEn: 'Suprobhat Bangladesh',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চট্টগ্রাম',
    url: 'https://suprobhat.com',
    epaperUrl: 'https://www.esuprobhat.com',
    color: '#138d75',
    icon: 'সু',
    tags: 'chittagong ctg suprobhat esuprobhat epaper'
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
    url: 'https://chandpurkantha24.com',
    color: '#6c3483',
    icon: 'চাঁ',
    tags: 'chandpur chittagong chandpurkantha24'
  },
  {
    id: 'chandpurdiganta',
    nameBn: 'দৈনিক চাঁদপুর দিগন্ত',
    nameEn: 'The Daily Chandpur Diganta',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চাঁদপুর',
    url: 'https://chandpurdiganta.com',
    color: '#0e6251',
    icon: 'দি',
    tags: 'chandpur diganta chittagong local dainik'
  },
  {
    id: 'chandpursomoy',
    nameBn: 'চাঁদপুর সময়',
    nameEn: 'Daily Chandpur Somoy',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চাঁদপুর',
    url: 'https://chandpursomoy.com',
    color: '#c0392b',
    icon: 'স',
    tags: 'chandpur somoy chittagong local'
  },
  {
    id: 'chandpurprobaha',
    nameBn: 'চাঁদপুর প্রবাহ',
    nameEn: 'Chandpur Probaha',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চাঁদপুর',
    url: 'https://chandpurprobaha.com',
    color: '#1f618d',
    icon: 'প্র',
    tags: 'chandpur probaha chittagong local'
  },
  {
    id: 'chandpurprotidin',
    nameBn: 'চাঁদপুর প্রতিদিন',
    nameEn: 'Chandpur Protidin',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চাঁদপুর',
    url: 'https://chandpurprotidin.com',
    color: '#b03a2e',
    icon: 'প্রতি',
    tags: 'chandpur protidin chittagong local'
  },
  {
    id: 'dailyshapoth',
    nameBn: 'দৈনিক শপথ',
    nameEn: 'Daily Shapoth',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চাঁদপুর',
    url: 'https://dailyshapoth.com',
    color: '#007a3d',
    icon: 'শ',
    tags: 'chandpur shapoth dailyshapoth chittagong local'
  },
  {
    id: 'meghnabarta',
    nameBn: 'মেঘনা বার্তা',
    nameEn: 'Daily Meghna Barta',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চাঁদপুর',
    url: 'https://meghnabarta.net',
    color: '#154360',
    icon: 'মে',
    tags: 'meghna barta meghnabarta chandpur chittagong local'
  },
  {
    id: 'ilsheypar',
    nameBn: 'দৈনিক ইলশেপাড়',
    nameEn: 'Daily Ilsheypar',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চাঁদপুর',
    url: 'https://ilsheypar.com',
    color: '#7d3c98',
    icon: 'ই',
    tags: 'ilsheypar ilshepar chandpur chittagong local'
  },
  {
    id: 'dailypriyochandpur',
    nameBn: 'দৈনিক প্রিয় চাঁদপুর',
    nameEn: 'Daily Priyo Chandpur',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চাঁদপুর',
    url: 'https://dailypriyochandpur.com',
    color: '#27ae60',
    icon: 'প্রিয়',
    tags: 'priyo chandpur dailypriyochandpur chittagong local'
  },
  {
    id: 'dainikchandpur',
    nameBn: 'দৈনিক চাঁদপুর',
    nameEn: 'Dainik Chandpur',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চাঁদপুর',
    url: 'https://www.dainikchandpur.com',
    color: '#b9770e',
    icon: 'চাঁ',
    tags: 'dainik chandpur chittagong local'
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
    nameBn: 'দৈনিক ফেনী',
    nameEn: 'Doinik Feni',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'ফেনী',
    url: 'https://doinikfeni.com',
    epaperUrl: 'https://epaper.doinikfeni.com/',
    color: '#2e4053',
    icon: 'ফে',
    tags: 'feni chittagong fenisangbad doinik feni epaper'
  },
  {
    id: 'giridarpon',
    nameBn: 'দৈনিক গিরিদর্পণ',
    nameEn: 'Dainik Giri Darpan',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'রাঙ্গামাটি/চট্টগ্রাম',
    url: 'https://giridarpon.com',
    color: '#1b4d3e',
    icon: 'গি',
    tags: 'giridarpon rangamati cht chittagong পাহাড়ি গিরিদর্পণ'
  },
  {
    id: 'desherkantha',
    nameBn: 'দৈনিক দেশের কণ্ঠ',
    nameEn: 'Dainik Desher Kantha',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চট্টগ্রাম',
    url: 'https://desherkantha.com',
    epaperUrl: 'https://desherkantha.com/epaper',
    color: '#c0392b',
    icon: 'দে',
    tags: 'desherkantha chittagong local দেশের কণ্ঠ'
  },
  {
    id: 'deshjanatarbani',
    nameBn: 'দেশ জনতার বাণী',
    nameEn: 'Desh Janatar Bani',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চট্টগ্রাম',
    url: 'https://deshjanatarbani.net',
    color: '#006266',
    icon: 'দে',
    tags: 'deshjanatarbani chittagong local দেশ জনতার বাণী'
  },
  {
    id: 'coxsbazarnews',
    nameBn: 'কক্সবাজার নিউজ',
    nameEn: "Cox's Bazar News",
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'কক্সবাজার/চট্টগ্রাম',
    url: 'https://www.coxsbazarnews.com',
    color: '#0097e6',
    icon: 'কক্স',
    tags: 'coxsbazar cbn coxsbazarnews chittagong কক্সবাজার নিউজ'
  },
  {
    id: 'ctgtimes',
    nameBn: 'সিটিজি টাইমস',
    nameEn: 'Ctg Times',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চট্টগ্রাম',
    url: 'https://ctgtimes.com',
    color: '#d63031',
    icon: 'সি',
    tags: 'ctgtimes ctg times chittagong সিটিজি টাইমস'
  },
  {
    id: 'ctgkhobor',
    nameBn: 'সিটিজি খবর',
    nameEn: 'Ctg Khobor',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চট্টগ্রাম',
    url: 'https://ctgkhobor.com',
    color: '#e84118',
    icon: 'সি',
    tags: 'ctgkhobor ctg khobor chittagong সিটিজি খবর'
  },
  {
    id: 'daynikdesherkotha',
    nameBn: 'দৈনিক দেশের কথা',
    nameEn: 'Dainik Desher Kotha',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চট্টগ্রাম',
    url: 'https://daynikdesherkotha.com',
    color: '#16a085',
    icon: 'দে',
    tags: 'daynikdesherkotha desher kotha chittagong দেশের কথা'
  },
  {
    id: 'ctgpratidin',
    nameBn: 'সিটিজি প্রতিদিন',
    nameEn: 'Ctg Pratidin',
    category: 'local',
    division: 'chittagong',
    categoryLabel: 'চট্টগ্রাম',
    url: 'https://ctgpratidin.com',
    color: '#27ae60',
    icon: 'সি',
    tags: 'ctgpratidin ctg pratidin chittagong সিটিজি প্রতিদিন'
  },

  // --- সিলেট বিভাগ ---
  {
    id: 'sylheterdak',
    nameBn: 'দৈনিক সিলেটের ডাক',
    nameEn: 'Daily Sylheter Dak',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'সিলেট',
    url: 'https://sylheterdak.com.bd',
    epaperUrl: 'https://esylheterdak.com',
    color: '#005b96',
    icon: 'সি',
    tags: 'sylhet local sylheterdak dainik surma esylheterdak epaper'
  },
  {
    id: 'dailyjalalabad',
    nameBn: 'দৈনিক জালালাবাদ',
    nameEn: 'Daily Jalalabad',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'সিলেট',
    url: 'https://dailyjalalabad.com',
    epaperUrl: 'https://ejalalabad.com',
    color: '#1b4f72',
    icon: 'জা',
    tags: 'sylhet jalalabad dainik local ejalalabad epaper'
  },
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
    id: 'shyamalsylhet',
    nameBn: 'দৈনিক শ্যামল সিলেট',
    nameEn: 'Daily Shyamal Sylhet',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'সিলেট',
    url: 'https://www.shyamalsylhet.net',
    epaperUrl: 'https://eshyamalsylhet.com/paper/index/',
    color: '#00796b',
    icon: 'শ্য',
    tags: 'sylhet shyamalsylhet eshyamalsylhet local epaper'
  },
  {
    id: 'sylhetview24',
    nameBn: 'সিলেটভিউ২৪',
    nameEn: 'SylhetView24',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'সিলেট',
    url: 'https://www.sylhetview24.news',
    color: '#c0392b',
    icon: 'সি',
    tags: 'sylhetview24 sylhetview sylhet online local'
  },
  {
    id: 'dailysylhetmirror',
    nameBn: 'দৈনিক সিলেট মিরর',
    nameEn: 'Daily Sylhet Mirror',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'সিলেট',
    url: 'https://dailysylhetmirror.com',
    epaperUrl: 'https://e.dailysylhetmirror.com',
    color: '#1565c0',
    icon: 'মি',
    tags: 'sylhetmirror sylhet mirror local epaper'
  },
  {
    id: 'jaintabarta',
    nameBn: 'দৈনিক জৈন্তা বার্তা',
    nameEn: 'Daily Jainta Barta',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'সিলেট',
    url: 'https://jaintabarta.net',
    epaperUrl: 'https://e.jaintabarta.net',
    color: '#b71c1c',
    icon: 'জৈ',
    tags: 'jaintabarta jainta barta sylhet local epaper'
  },
  {
    id: 'surmatimes',
    nameBn: 'সুরমা টাইমস',
    nameEn: 'Surma Times',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'সিলেট',
    url: 'https://surmatimes.com',
    color: '#0d47a1',
    icon: 'সু',
    tags: 'surmatimes surma times sylhet local'
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
    id: 'patakuri',
    nameBn: 'দৈনিক পাতাকুঁড়ির দেশ',
    nameEn: 'Daily Patakurir Desh',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'মৌলভীবাজার/সিলেট',
    url: 'https://www.patakuri.com',
    color: '#2e7d32',
    icon: 'পা',
    tags: 'patakuri moulvibazar sylhet local'
  },
  {
    id: 'mkantho',
    nameBn: 'দৈনিক মৌমাছি কণ্ঠ',
    nameEn: 'Daily Moumachi Kantho',
    category: 'local',
    division: 'sylhet',
    categoryLabel: 'মৌলভীবাজার/সিলেট',
    url: 'https://mkantho.com',
    color: '#a32626',
    icon: 'মৌ',
    tags: 'mkantho moumachi kantho dainik moulvibazar sylhet local daily moumachi kantho'
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
    epaperUrl: 'https://esunamganjerkhobor.com/paper/index/',
    color: '#d35400',
    icon: 'সু',
    tags: 'sunamganj sylhet haor esunamganjerkhobor epaper'
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
    epaperUrl: 'https://sonalisangbad.com/epaper/',
    color: '#d4ac0d',
    icon: 'সো',
    tags: 'rajshahi local padma epaper'
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
    epaperUrl: 'https://www.ekaratoa.com/',
    color: '#6c3483',
    icon: 'ক',
    tags: 'bogra bogura rajshahi north karatoa ekaratoa epaper'
  },
  {
    id: 'pabnabarta',
    nameBn: 'পাবনা বার্তা / টাইমস',
    nameEn: 'Pabna Barta & Times',
    category: 'local',
    division: 'rajshahi',
    categoryLabel: 'পাবনা',
    url: 'https://www.pabnatimes24.com',
    color: '#1f618d',
    icon: 'পা',
    tags: 'pabna rajshahi pabnabarta pabnatimes24'
  },
  {
    id: 'dailysunshine',
    nameBn: 'ডেইলি সানশাইন',
    nameEn: 'Daily Sunshine',
    category: 'local',
    division: 'rajshahi',
    categoryLabel: 'রাজশাহী',
    url: 'https://www.dailysunshine.com.bd',
    epaperUrl: 'https://epaper.dailysunshine.com.bd',
    color: '#e67e22',
    icon: 'সান',
    tags: 'dailysunshine sunshine rajshahi local north epaper'
  },
  {
    id: 'gonodhoniprotidin',
    nameBn: 'গণধ্বনি প্রতিদিন',
    nameEn: 'Gonodhoni Protidin',
    category: 'local',
    division: 'rajshahi',
    categoryLabel: 'রাজশাহী',
    url: 'https://gd-protidin.com',
    epaperUrl: 'https://gonodhoniprotidin.com',
    color: '#c0392b',
    icon: 'গণ',
    tags: 'gonodhoniprotidin gd protidin rajshahi local epaper'
  },
  {
    id: 'dailysonardesh',
    nameBn: 'দৈনিক সোনার দেশ',
    nameEn: 'Daily Sonar Desh',
    category: 'local',
    division: 'rajshahi',
    categoryLabel: 'রাজশাহী',
    url: 'https://dailysonardesh.com',
    epaperUrl: 'https://dailysonardesh.com/epaper',
    color: '#d4ac0d',
    icon: 'সো',
    tags: 'dailysonardesh sonar desh rajshahi local padma epaper'
  },
  {
    id: 'muktoprovat',
    nameBn: 'দৈনিক মুক্ত প্রভাত',
    nameEn: 'Daily Mukto Provat',
    category: 'local',
    division: 'rajshahi',
    categoryLabel: 'রাজশাহী',
    url: 'https://muktoprovat.com.bd',
    epaperUrl: 'https://muktoprovat.com.bd/epaper',
    color: '#2471a3',
    icon: 'মুক্ত',
    tags: 'muktoprovat mukto provat rajshahi local epaper'
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
    epaperUrl: 'https://egramerkagoj.com/',
    color: '#2874a6',
    icon: 'গ্রা',
    tags: 'jessore khulna gram egramerkagoj epaper'
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
    url: 'https://www.meherpurpratidin.com',
    epaperUrl: 'https://www.meherpurpratidin.com/e-paper/',
    color: '#e67e22',
    icon: 'মে',
    tags: 'meherpur khulna meherpurpratidin epaper'
  },
  {
    id: 'maguranews',
    nameBn: 'মাগুরা নিউজ',
    nameEn: 'Magura News',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'মাগুরা/খুলনা',
    url: 'https://www.maguranews.com',
    color: '#006a4e',
    icon: 'মা',
    tags: 'magura maguranews khulna local মাগুরা'
  },
  {
    id: 'loksamaj',
    nameBn: 'দৈনিক লোকসমাজ',
    nameEn: 'Dainik Lok Samaj',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'যশোর/খুলনা',
    url: 'https://loksamaj.com',
    color: '#c0392b',
    icon: 'লো',
    tags: 'loksamaj jessore khulna dainik lok samaj লোকসমাজ'
  },
  {
    id: 'narailkantho',
    nameBn: 'নড়াইল কণ্ঠ',
    nameEn: 'Narail Kantho',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'নড়াইল/খুলনা',
    url: 'https://narailkantho.com',
    color: '#2980b9',
    icon: 'ন',
    tags: 'narail narailkantho kantho khulna local নড়াইল কণ্ঠ'
  },
  {
    id: 'prothombhor',
    nameBn: 'দৈনিক প্রথম ভোর',
    nameEn: 'Daily Prothom Bhor',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'চুয়াডাঙ্গা/খুলনা',
    url: 'https://prothombhor.net',
    epaperUrl: 'https://epaper.prothombhor.net',
    color: '#d35400',
    icon: 'প্র',
    tags: 'prothombhor chuadanga khulna epaper প্রথম ভোর'
  },
  {
    id: 'satkhiranews',
    nameBn: 'সাতক্ষীরা নিউজ',
    nameEn: 'Satkhira News',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'সাতক্ষীরা/খুলনা',
    url: 'https://www.satkhiranews.com',
    color: '#16a085',
    icon: 'সা',
    tags: 'satkhira satkhiranews khulna local সাতক্ষীরা নিউজ'
  },
  {
    id: 'somoyerkagoj',
    nameBn: 'সময়ের কাগজ',
    nameEn: 'Somoyer Kagoj',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'কুষ্টিয়া/খুলনা',
    url: 'https://somoyerkagoj.com',
    epaperUrl: 'https://epaper.somoyerkagoj.com',
    color: '#8e44ad',
    icon: 'স',
    tags: 'somoyerkagoj kushtia khulna epaper সময়ের কাগজ'
  },
  {
    id: 'dainikdristipat',
    nameBn: 'দৈনিক দৃষ্টিপাত',
    nameEn: 'Dainik Dristipat',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'সাতক্ষীরা/খুলনা',
    url: 'https://dainikdristipat.com',
    color: '#b03a2e',
    icon: 'দৃ',
    tags: 'dristipat dainik dristipat satkhira khulna দৃষ্টিপাত'
  },
  {
    id: 'dailyprobaha',
    nameBn: 'দৈনিক প্রবাহ',
    nameEn: 'Daily Probaha',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'খুলনা',
    url: 'https://dailyprobaha.com.bd',
    epaperUrl: 'https://dailyprobaha.com.bd/article/e-paper/',
    logo: 'assets/logos/dailyprobaha.webp',
    color: '#1b4f72',
    icon: 'প্র',
    tags: 'probaha dailyprobaha khulna epaper প্রবাহ'
  },
  {
    id: 'dainikkalyan',
    nameBn: 'দৈনিক কল্যাণ',
    nameEn: 'Dainik Kalyan',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'যশোর/খুলনা',
    url: 'https://dainikkalyan.com',
    color: '#196f3d',
    icon: 'ক',
    tags: 'kalyan dainikkalyan jessore khulna কল্যাণ'
  },
  {
    id: 'dailyspandan',
    nameBn: 'দৈনিক স্পন্দন',
    nameEn: 'Daily Spandan',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'যশোর/খুলনা',
    url: 'https://dailyspandan.com',
    epaperUrl: 'https://edailyspandan.com',
    color: '#7d3c98',
    icon: 'স্প',
    tags: 'spandan dailyspandan jessore khulna epaper স্পন্দন'
  },
  {
    id: 'dainiktathya',
    nameBn: 'দৈনিক তথ্য',
    nameEn: 'Dainik Tathya',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'খুলনা',
    url: 'https://dainiktathya.com',
    epaperUrl: 'http://epaper.dainiktathya.com',
    color: '#922b21',
    icon: 'ত',
    tags: 'tathya dainiktathya khulna epaper তথ্য'
  },
  {
    id: 'dakhinanchalkhulna',
    nameBn: 'দক্ষিণাঞ্চল প্রতিদিন',
    nameEn: 'Dakhinanchal Protidin',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'খুলনা',
    url: 'https://dakhinanchal.com',
    color: '#117864',
    icon: 'দ',
    tags: 'dakhinanchal protidin khulna dakhinanchal দক্ষিণাঞ্চল'
  },
  {
    id: 'sundarbontimes',
    nameBn: 'সুন্দরবন টাইমস',
    nameEn: 'Sundarbon Times',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'সুন্দরবন/খুলনা',
    url: 'https://www.sundarbontimes.com',
    color: '#145a32',
    icon: 'সু',
    tags: 'sundarbon times sundarbontimes khulna সুন্দরবন'
  },
  {
    id: 'dailybanglarchokh',
    nameBn: 'দৈনিক বাংলার চোখ',
    nameEn: 'Daily Banglar Chokh',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'কুষ্টিয়া/খুলনা',
    url: 'https://dailybanglarchokh.com',
    color: '#b9770e',
    icon: 'চো',
    tags: 'banglarchokh kushtia khulna বাংলার চোখ'
  },
  {
    id: 'dailyamaderchuadanga',
    nameBn: 'দৈনিক আমাদের চুয়াডাঙ্গা',
    nameEn: 'Daily Amader Chuadanga',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'চুয়াডাঙ্গা/খুলনা',
    url: 'https://dailyamaderchuadanga.com',
    color: '#2471a3',
    icon: 'চু',
    tags: 'amaderchuadanga chuadanga khulna আমাদের চুয়াডাঙ্গা'
  },
  {
    id: 'dailynabochitro',
    nameBn: 'দৈনিক নবচিত্র',
    nameEn: 'Daily Nabochitro',
    category: 'local',
    division: 'khulna',
    categoryLabel: 'ঝিনাইদহ/খুলনা',
    url: 'https://www.dailynabochitro.com',
    color: '#6c3483',
    icon: 'ন',
    tags: 'nabochitro dailynabochitro jhenaidah khulna নবচিত্র'
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
    nameEn: 'Barishal News',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'বরিশাল',
    url: 'https://www.barishalnews.com',
    color: '#1f618d',
    icon: 'ব',
    tags: 'barisal barishal barishalnews'
  },
  {
    id: 'patuakhaliweb',
    nameBn: 'দৈনিক আমাদের পটুয়াখালী',
    nameEn: 'Amader Patuakhali',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'পটুয়াখালী/বরিশাল',
    url: 'https://dailyamaderpatuakhali.com',
    color: '#922b21',
    icon: 'প',
    tags: 'patuakhali barisal kuakata amader patuakhali patuakhaliweb'
  },
  {
    id: 'pirojpurkantho',
    nameBn: 'পিরোজপুর কণ্ঠ',
    nameEn: 'Pirojpur Kantha',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'পিরোজপুর/বরিশাল',
    url: 'https://pirojpurkantho.com',
    color: '#006a4e',
    icon: 'প',
    tags: 'pirojpur barisal local pirojpurkantho পিরোজপুর কণ্ঠ'
  },
  {
    id: 'dokkhinancol',
    nameBn: 'দৈনিক দক্ষিণাঞ্চল',
    nameEn: 'Daily Dokkhinanchal',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'বরিশাল',
    url: 'https://dokkhinancol.com',
    color: '#b03a2e',
    icon: 'দ',
    tags: 'dokkhinancol barisal dainik dokkhinanchal দক্ষিণাঞ্চল'
  },
  {
    id: 'barishaltimes',
    nameBn: 'বরিশাল টাইমস',
    nameEn: 'Barishal Times',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'বরিশাল',
    url: 'https://www.barishaltimes.com',
    color: '#2874a6',
    icon: 'ব',
    tags: 'barishal barisal times barishaltimes বরিশাল টাইমস'
  },
  {
    id: 'barisalbani',
    nameBn: 'বরিশাল বাণী',
    nameEn: 'Barisal Bani',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'বরিশাল',
    url: 'https://barisalbani.com',
    color: '#117864',
    icon: 'ব',
    tags: 'barisal barisalbani bani বরিশাল বাণী'
  },
  {
    id: 'dailyajkerbarishal',
    nameBn: 'দৈনিক আজকের বরিশাল',
    nameEn: 'Daily Ajker Barishal',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'বরিশাল',
    url: 'https://dailyajkerbarishal.com',
    color: '#c0392b',
    icon: 'আ',
    tags: 'barisal ajker barishal dailyajkerbarishal আজকের বরিশাল'
  },
  {
    id: 'patrika71',
    nameBn: 'দৈনিক পত্রিকা ৭১',
    nameEn: 'Daily Patrika 71',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'বরিশাল',
    url: 'https://patrika71.com',
    epaperUrl: 'https://patrika71.com/epaper',
    logo: 'assets/logos/patrika71.webp',
    color: '#1e8449',
    icon: 'প',
    tags: 'patrika71 barisal epaper patrika 71 ৭১ পত্রিকা'
  },
  {
    id: 'ajkerbhola',
    nameBn: 'দৈনিক আজকের ভোলা',
    nameEn: 'Dainik Ajker Bhola',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'ভোলা/বরিশাল',
    url: 'https://www.ajkerbhola.com',
    color: '#884ea0',
    icon: 'ভো',
    tags: 'bhola barisal ajker bhola ajkerbhola আজকের ভোলা'
  },
  {
    id: 'bholarbani',
    nameBn: 'ভোলার বাণী',
    nameEn: 'Bholar Bani',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'ভোলা/বরিশাল',
    url: 'https://bholarbani.com',
    color: '#2e4053',
    icon: 'ভো',
    tags: 'bhola barisal bholarbani bani ভোলার বাণী'
  },
  {
    id: 'dailybanglarkantha',
    nameBn: 'দৈনিক বাংলার কণ্ঠ',
    nameEn: 'Daily Banglar Kantha',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'ভোলা/বরিশাল',
    url: 'https://dailybanglarkantha.com',
    color: '#b9770e',
    icon: 'বা',
    tags: 'bhola barisal banglar kantha dailybanglarkantha বাংলার কণ্ঠ'
  },
  {
    id: 'bholanews',
    nameBn: 'ভোলা নিউজ',
    nameEn: 'Bhola News',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'ভোলা/বরিশাল',
    url: 'https://bholanews.com',
    color: '#d35400',
    icon: 'ভো',
    tags: 'bhola barisal bholanews ভোলা নিউজ'
  },
  {
    id: 'bholarsangbad',
    nameBn: 'ভোলার সংবাদ',
    nameEn: 'Bholar Sangbad',
    category: 'local',
    division: 'barisal',
    categoryLabel: 'ভোলা/বরিশাল',
    url: 'https://www.bholarsangbad.com',
    color: '#138d75',
    icon: 'ভো',
    tags: 'bhola barisal bholarsangbad ভোলার সংবাদ'
  },

  // --- রংপুর বিভাগ ---
  {
    id: 'uttarbangla',
    nameBn: 'দৈনিক উত্তরবাংলা',
    nameEn: 'Dainik Uttorbangla',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'রংপুর/উত্তরাঞ্চল',
    url: 'https://www.uttorbangla.com',
    color: '#c0392b',
    icon: 'উ',
    tags: 'rangpur north teesta uttarbangla uttorbangla'
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
  {
    id: 'chilahatiweb',
    nameBn: 'চিলাহাটি ওয়েব',
    nameEn: 'Chilahati Web',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'নীলফামারী/রংপুর',
    url: 'https://www.chilahatiweb.com',
    color: '#006a4e',
    icon: 'চি',
    tags: 'chilahati nilphamari rangpur local চিলাহাটি'
  },
  {
    id: 'jugerkhabor',
    nameBn: 'যুগের খবর',
    nameEn: 'Juger Khabor',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'রংপুর',
    url: 'https://jugerkhabor.com',
    color: '#c0392b',
    icon: 'য',
    tags: 'jugerkhabor rangpur local যুগের খবর'
  },
  {
    id: 'dainikpanchagarh',
    nameBn: 'দৈনিক পঞ্চগড়',
    nameEn: 'Dainik Panchagarh',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'পঞ্চগড়/রংপুর',
    url: 'https://www.dainikpanchagarh.com',
    color: '#1b4f72',
    icon: 'প',
    tags: 'panchagarh dainik panchagarh rangpur local পঞ্চগড়'
  },
  {
    id: 'dinajpurnewsnet',
    nameBn: 'দিনাজপুর নিউজ',
    nameEn: 'Dinajpur News',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'দিনাজপুর/রংপুর',
    url: 'https://dinajpurnews.net',
    color: '#2874a6',
    icon: 'দি',
    tags: 'dinajpur dinajpurnews net rangpur local দিনাজপুর'
  },
  {
    id: 'dinajpurbarta24',
    nameBn: 'দিনাজপুর বার্তা ২৪',
    nameEn: 'Dinajpur Barta 24',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'দিনাজপুর/রংপুর',
    url: 'https://dinajpurbarta24.com',
    color: '#117864',
    icon: 'দি',
    tags: 'dinajpur barta dinajpurbarta24 rangpur local দিনাজপুর বার্তা'
  },
  {
    id: 'dailyghagot',
    nameBn: 'দৈনিক ঘাঘট',
    nameEn: 'Daily Ghagot',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'গাইবান্ধা/রংপুর',
    url: 'https://www.dailyghagot.com',
    color: '#7d3c98',
    icon: 'ঘা',
    tags: 'ghagot dailyghagot gaibandha rangpur local ঘাঘট'
  },
  {
    id: 'amaderprotidin',
    nameBn: 'আমাদের প্রতিদিন',
    nameEn: 'Amader Protidin',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'রংপুর',
    url: 'https://www.amader-protidin.com',
    color: '#b03a2e',
    icon: 'আ',
    tags: 'amader protidin rangpur local আমাদের প্রতিদিন'
  },
  {
    id: 'birganjpratidin',
    nameBn: 'বীরগঞ্জ প্রতিদিন',
    nameEn: 'Birganj Pratidin',
    category: 'local',
    division: 'rangpur',
    categoryLabel: 'বীরগঞ্জ/রংপুর',
    url: 'https://birganjpratidin.com',
    epaperUrl: 'https://birganjpratidin.com/epaper',
    color: '#196f3d',
    icon: 'বী',
    tags: 'birganj pratidin birganjpratidin dinajpur rangpur epaper বীরগঞ্জ প্রতিদিন'
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
    nameBn: 'গাজীপুর বার্তা ২৪',
    nameEn: 'Gazipur Barta 24',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'গাজীপুর',
    url: 'https://gazipurbarta24.com',
    color: '#1b4f72',
    icon: 'গা',
    tags: 'gazipur dhaka gazipurbarta gazipurbarta24'
  },
  {
    id: 'tangailbarta',
    nameBn: 'টাঙ্গাইল বার্তা',
    nameEn: 'Tangail Barta',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'টাঙ্গাইল',
    url: 'https://tangailbarta24.com',
    color: '#047d4f',
    icon: 'টা',
    tags: 'tangail dhaka tangailbarta tangailbarta24'
  },
  {
    id: 'kishoreganjnews',
    nameBn: 'কিশোরগঞ্জ নিউজ',
    nameEn: 'Kishoreganj News',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'কিশোরগঞ্জ',
    url: 'https://kishoreganjnews.com',
    color: '#c0392b',
    icon: 'কি',
    tags: 'kishoreganj kishoreganjnews dhaka local কিশোরগঞ্জ নিউজ'
  },
  {
    id: 'dailysaatkahon',
    nameBn: 'দৈনিক সাতকাহন',
    nameEn: 'Daily Saatkahon',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'গাজীপুর/ঢাকা',
    url: 'https://dailysaatkahon.com',
    epaperUrl: 'https://dailysaatkahon.com/epaper',
    color: '#003466',
    icon: 'সা',
    tags: 'saatkahon gazipur dhaka saat kahon সাতকাহন'
  },
  {
    id: 'narsingditimes',
    nameBn: 'নরসিংদী টাইমস',
    nameEn: 'Narsingdi Times',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'নরসিংদী',
    url: 'https://narsingditimes.com',
    color: '#2980b9',
    icon: 'ন',
    tags: 'narsingdi narsingditimes dhaka নরসিংদী টাইমস'
  },
  {
    id: 'jagonarsingdi24',
    nameBn: 'জাগো নরসিংদী ২৪',
    nameEn: 'Jago Narsingdi 24',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'নরসিংদী',
    url: 'https://www.jagonarsingdi24.com',
    epaperUrl: 'https://www.jagonarsingdi24.com/epaper/',
    color: '#e67e22',
    icon: 'জা',
    tags: 'narsingdi jagonarsingdi24 dhaka জাগো নরসিংদী'
  },
  {
    id: 'ghatail',
    nameBn: 'ঘাটাইল ডট কম',
    nameEn: 'Ghatail.com',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'টাঙ্গাইল',
    url: 'https://ghatail.com',
    color: '#27ae60',
    icon: 'ঘা',
    tags: 'ghatail tangail dhaka ঘাটাইল'
  },
  {
    id: 'tangailtimes24',
    nameBn: 'টাঙ্গাইল টাইমস ২৪',
    nameEn: 'Tangail Times 24',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'টাঙ্গাইল',
    url: 'https://www.tangailtimes24.com',
    color: '#d35400',
    icon: 'টা',
    tags: 'tangail tangailtimes24 dhaka টাঙ্গাইল টাইমস'
  },
  {
    id: 'muktijoddharkantho',
    nameBn: 'মুক্তিযোদ্ধার কণ্ঠ',
    nameEn: 'Muktijoddhar Kantha',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'কিশোরগঞ্জ/ঢাকা',
    url: 'https://muktijoddharkantho.com',
    color: '#8e44ad',
    icon: 'মু',
    tags: 'muktijoddharkantho kishoreganj dhaka মুক্তিযোদ্ধার কণ্ঠ'
  },
  {
    id: 'newstangail',
    nameBn: 'নিউজ টাঙ্গাইল',
    nameEn: 'News Tangail',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'টাঙ্গাইল',
    url: 'https://www.newstangail.com',
    color: '#16a085',
    icon: 'টা',
    tags: 'newstangail tangail dhaka নিউজ টাঙ্গাইল'
  },
  {
    id: 'mozlumerkontha',
    nameBn: 'দৈনিক মজলুমের কণ্ঠ',
    nameEn: 'Dainik Mozlumer Kontha',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'টাঙ্গাইল',
    url: 'https://www.mozlumerkontha.com',
    color: '#b71540',
    icon: 'ম',
    tags: 'mozlumerkontha tangail dhaka মজলুমের কণ্ঠ'
  },
  {
    id: 'ganasonghoti',
    nameBn: 'দৈনিক গণসংহতি',
    nameEn: 'Dainik Ganasonghoti',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'টাঙ্গাইল',
    url: 'https://ganasonghoti.com',
    color: '#e74c3c',
    icon: 'গ',
    tags: 'ganasonghoti tangail dhaka গণসংহতি'
  },
  {
    id: 'dailymatrikantha',
    nameBn: 'দৈনিক মাতৃকণ্ঠ',
    nameEn: 'Daily Matrikantha',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'রাজবাড়ী/ঢাকা',
    url: 'https://dailymatrikantha.com',
    epaperUrl: 'https://dailymatrikantha.com/epaper/',
    color: '#117864',
    icon: 'মা',
    tags: 'matrikantha rajbari dhaka মাতৃকণ্ঠ'
  },
  {
    id: 'rudrabarta',
    nameBn: 'দৈনিক রুদ্রবার্তা',
    nameEn: 'Dainik Rudrabarta',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'শরীয়তপুর/ঢাকা',
    url: 'https://rudrabarta.net',
    color: '#2c3e50',
    icon: 'রু',
    tags: 'rudrabarta shariatpur dhaka রুদ্রবার্তা'
  },
  {
    id: 'rajoirnews',
    nameBn: 'রাজৈর নিউজ',
    nameEn: 'Rajoir News',
    category: 'local',
    division: 'dhaka',
    categoryLabel: 'মাদারীপুর/ঢাকা',
    url: 'https://www.rajoirnews.com',
    color: '#006266',
    icon: 'রা',
    tags: 'rajoir rajoirnews madaripur dhaka রাজৈর নিউজ'
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
    nameBn: 'জামালপুর নিউজ',
    nameEn: 'Jamalpur News',
    category: 'local',
    division: 'mymensingh',
    categoryLabel: 'জামালপুর',
    url: 'https://jamalpurnews24.com',
    color: '#7d3c98',
    icon: 'জা',
    tags: 'jamalpur mymensingh jamalpurnews'
  },
  {
    id: 'jamalpurbarta',
    nameBn: 'জামালপুর বার্তা',
    nameEn: 'Jamalpur Barta',
    category: 'local',
    division: 'mymensingh',
    categoryLabel: 'জামালপুর',
    url: 'https://jamalpurbarta.com',
    color: '#27ae60',
    icon: 'জা',
    tags: 'jamalpur jamalpurbarta mymensingh জামালপুর বার্তা'
  },
  {
    id: 'netrokonanews24',
    nameBn: 'নেত্রকোনা নিউজ ২৪',
    nameEn: 'Netrokona News 24',
    category: 'local',
    division: 'mymensingh',
    categoryLabel: 'নেত্রকোনা/ময়মনসিংহ',
    url: 'https://netrokonanews24.com',
    color: '#2980b9',
    icon: 'নে',
    tags: 'netrokona netrokonanews24 mymensingh নেত্রকোনা নিউজ'
  },
  {
    id: 'durjoybangla',
    nameBn: 'দুর্জয় বাংলা',
    nameEn: 'Durjoy Bangla',
    category: 'local',
    division: 'mymensingh',
    categoryLabel: 'ময়মনসিংহ',
    url: 'https://www.durjoybangla.com',
    color: '#8e44ad',
    icon: 'দু',
    tags: 'durjoybangla mymensingh local দুর্জয় বাংলা'
  },
  {
    id: 'dailysabuj',
    nameBn: 'দৈনিক সবুজ',
    nameEn: 'Daily Sabuj',
    category: 'local',
    division: 'mymensingh',
    categoryLabel: 'ময়মনসিংহ',
    url: 'https://www.dailysabuj.com',
    color: '#16a085',
    icon: 'স',
    tags: 'dailysabuj sabuj mymensingh local দৈনিক সবুজ'
  },
  {
    id: 'shamolbangla24',
    nameBn: 'শ্যামল বাংলা ২৪',
    nameEn: 'Shamol Bangla 24',
    category: 'local',
    division: 'mymensingh',
    categoryLabel: 'ময়মনসিংহ',
    url: 'https://shamolbangla24.com',
    color: '#16a085',
    icon: 'শ্যাম',
    tags: 'sherpur mymensingh local shamolbangla shamol bangla শ্যামল বাংলা'
  },

  // =========================================================================
  // 6. STOCK MARKET (শেয়ার বাজার)
  // Dedicated category from https://www.allbanglanewspaper.xyz/bangladesh/sharebazarnewspaper
  // =========================================================================
  {
    id: 'arthosuchak',
    nameBn: 'অর্থসূচক',
    nameEn: 'Arthosuchak',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.arthosuchak.com',
    color: '#27ae60',
    icon: 'অ',
    tags: 'stock market share dse economy money arthosuchak'
  },
  {
    id: 'sharenews24',
    nameBn: 'শেয়ার নিউজ ২৪',
    nameEn: 'Sharenews24',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.sharenews24.com',
    color: '#c0392b',
    icon: 'শে২৪',
    tags: 'stock market share dse sharenews24'
  },
  {
    id: 'sunbd24',
    nameBn: 'সান বিডি ২৪',
    nameEn: 'Sunbd24',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.sunbd24.com',
    color: '#e67e22',
    icon: 'সান',
    tags: 'stock market share sunbd24 economy'
  },
  {
    id: 'sharebazarnews',
    nameBn: 'শেয়ার বাজার নিউজ',
    nameEn: 'sharebazarnews',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.sharebazarnews.com',
    color: '#2980b9',
    icon: 'SBN',
    tags: 'stock market share dse sharebazarnews'
  },
  {
    id: 'bonikbarta_stock',
    nameBn: 'বণিক বার্তা',
    nameEn: 'Daily Bonikbarta',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.bonikbarta.net',
    epaperUrl: 'https://epaper.bonikbarta.net',
    color: '#d35400',
    icon: 'ব',
    tags: 'stock market share dse bonik economy commerce'
  },
  {
    id: 'sharebiz',
    nameBn: 'শেয়ার বিজ',
    nameEn: 'Share Biz',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.sharebiz.net',
    color: '#1f618d',
    icon: 'শে',
    tags: 'stock market share dse commerce sharebiz'
  },
  {
    id: 'financialexpress_stock',
    nameBn: 'ফাইন্যান্সিয়াল এক্সপ্রেস',
    nameEn: 'The Financial Express',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://thefinancialexpress.com.bd',
    epaperUrl: 'https://epaper.thefinancialexpress.com.bd',
    color: '#1a5276',
    icon: 'FE',
    tags: 'stock market share dse financial express epaper'
  },
  {
    id: 'stockbangladesh',
    nameBn: 'স্টক বাংলাদেশ',
    nameEn: 'Stock Bangladesh',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.stockbangladesh.com',
    color: '#16a085',
    icon: 'SB',
    tags: 'stock market technical analysis dse portfolio'
  },
  {
    id: 'amarstock',
    nameBn: 'আমার স্টক',
    nameEn: 'AmarStock.com',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.amarstock.com',
    color: '#2e4053',
    icon: 'AS',
    tags: 'stock market charts dse amarstock analysis'
  },
  {
    id: 'ajkerbazzar',
    nameBn: 'আজকের বাজার',
    nameEn: 'Ajker Bazzar',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.ajkerbazzar.com',
    color: '#b03a2e',
    icon: 'আজ',
    tags: 'stock market business commerce ajkerbazzar'
  },
  {
    id: 'orthosongbad',
    nameBn: 'অর্থসংবাদ',
    nameEn: 'Ortho Songbad',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://orthosongbad.com',
    color: '#117a65',
    icon: 'অর্থ',
    tags: 'stock market economy business orthosongbad finance'
  },
  {
    id: 'businesshour24',
    nameBn: 'বিজনেস আওয়ার ২৪',
    nameEn: 'Business Hour 24',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.businesshour24.com',
    color: '#2e3192',
    icon: 'BH',
    tags: 'stock market business corporate commerce'
  },
  {
    id: 'corporatesangbad',
    nameBn: 'কর্পোরেট সংবাদ',
    nameEn: 'Corporate Sangbad',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://corporatesangbad.com',
    color: '#1b4f72',
    icon: 'কর্পো',
    tags: 'stock market corporate business sangbad company'
  },
  {
    id: 'businesseyebd',
    nameBn: 'বিজনেস আই বিডি',
    nameEn: 'Business Eye BD',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://businesseyebd.com',
    color: '#195b9e',
    icon: 'BE',
    tags: 'stock market business eye bd trade commerce'
  },
  {
    id: 'pujibazar',
    nameBn: 'পুঁজিবাজার ডট কম',
    nameEn: 'Pujibazar.com',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://pujibazar.com',
    color: '#af601a',
    icon: 'পুঁজি',
    tags: 'stock market share pujibazar dse investment'
  },
  {
    id: 'dailysharebazarprotidin',
    nameBn: 'শেয়ারবাজার প্রতিদিন',
    nameEn: 'Sharebazar Protidin',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://dailysharebazarprotidin.com',
    color: '#c0392b',
    icon: 'প্রতি',
    tags: 'stock market share daily sharebazar'
  },
  {
    id: 'deshprotikhon',
    nameBn: 'দেশ প্রতিক্ষণ',
    nameEn: 'Desh Protikhon',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://deshprotikhon.com',
    color: '#1f618d',
    icon: 'দেশ',
    tags: 'stock market economy deshprotikhon finance'
  },
  {
    id: 'arthoniteerkagoj',
    nameBn: 'অর্থনীতির কাগজ',
    nameEn: 'Arthoniteer Kagoj',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://arthoniteerkagoj.com',
    color: '#2874a6',
    icon: 'কাগজ',
    tags: 'stock market economy business paper finance'
  },
  {
    id: 'sharebusiness24',
    nameBn: 'শেয়ার বিজনেস ২৪',
    nameEn: 'Share Business 24',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://sharebusiness24.com',
    color: '#2b5443',
    icon: 'SB24',
    tags: 'stock market share business'
  },
  {
    id: 'biniogbarta',
    nameBn: 'বিনিয়োগ বার্তা',
    nameEn: 'Biniog Barta',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://biniogbarta.com',
    color: '#27ae60',
    icon: 'বিনি',
    tags: 'stock market investment biniog barta capital'
  },
  {
    id: 'energybangla',
    nameBn: 'এনার্জি বাংলা',
    nameEn: 'Energy Bangla',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://energybangla.com',
    color: '#366650',
    icon: 'EB',
    tags: 'stock market energy power oil gas electricity'
  },
  {
    id: 'sharebarta24',
    nameBn: 'শেয়ার বার্তা ২৪',
    nameEn: 'Share Barta 24',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://sharebarta24.com',
    color: '#009a4f',
    icon: 'বা২৪',
    tags: 'stock market share barta dse sharebarta24'
  },
  {
    id: 'businessnews24bd',
    nameBn: 'বিজনেস নিউজ ২৪ বিডি',
    nameEn: 'Business News 24 BD',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://businessnews24bd.com',
    color: '#16a085',
    icon: 'BN',
    tags: 'stock market business news 24 commerce trade'
  },
  {
    id: 'bdcap24',
    nameBn: 'বিডি ক্যাপ ২৪',
    nameEn: 'BDCap24.net',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://bdcap24.net',
    color: '#2c3e50',
    icon: 'CAP',
    tags: 'stock market capital market dse cse'
  },
  {
    id: 'insurancenewsbd',
    nameBn: 'ইন্সুরেন্স নিউজ বিডি',
    nameEn: 'Insurance News BD',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://insurancenewsbd.com',
    color: '#006a4e',
    icon: 'বীমা',
    tags: 'stock market insurance bima finance claim policy'
  },
  {
    id: 'bankbimaarthonity',
    nameBn: 'ব্যাংক বীমা অর্থনীতি',
    nameEn: 'Bank Bima Arthonity',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://bankbimaarthonity.com',
    color: '#1b4f72',
    icon: 'ব্যাংক',
    tags: 'stock market bank bima insurance banking arthonity'
  },
  {
    id: 'bankingnewsbd',
    nameBn: 'ব্যাংকিং নিউজ বিডি',
    nameEn: 'Banking News BD',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://bankingnewsbd.com',
    color: '#117864',
    icon: 'BNB',
    tags: 'stock market banking financial interest loan remittance'
  },
  {
    id: 'dsebd',
    nameBn: 'ঢাকা স্টক এক্সচেঞ্জ (DSE)',
    nameEn: 'Dhaka Stock Exchange',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.dsebd.org',
    color: '#107136',
    icon: 'DSE',
    tags: 'stock market dse live index share trading'
  },
  {
    id: 'csekhorbor',
    nameBn: 'চট্টগ্রাম স্টক এক্সচেঞ্জ (CSE)',
    nameEn: 'Chittagong Stock Exchange',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.cse.com.bd',
    color: '#4cba7c',
    icon: 'CSE',
    tags: 'stock market cse chittagong share trading'
  },
  {
    id: 'bangladeshbank',
    nameBn: 'বাংলাদেশ ব্যাংক (কেন্দ্রীয় ব্যাংক)',
    nameEn: 'Bangladesh Bank (Central Bank)',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.bb.org.bd',
    color: '#0d693a',
    icon: 'BB',
    tags: 'stock market bangladesh bank central bank forex reserves dollar'
  },
  {
    id: 'lankabd',
    nameBn: 'লংকাবাংলা ফাইন্যান্সিয়াল পোর্টাল (lankabd.com)',
    nameEn: 'lankabd.com',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://lankabd.com',
    color: '#d9230f',
    icon: 'LB',
    tags: 'stock market lankabd lankabd.com lanka bangla finance investment dse share trading financial portal'
  },
  {
    id: 'cdbl',
    nameBn: 'সেন্ট্রাল ডিপোজিটরি বাংলাদেশ (CDBL)',
    nameEn: 'Central Depository BD (CDBL)',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.cdbl.com.bd',
    color: '#27ae60',
    icon: 'CDBL',
    tags: 'stock market cdbl bo account depository shares'
  },
  {
    id: 'financialnews24',
    nameBn: 'ফাইন্যান্সিয়াল নিউজ ২৪',
    nameEn: 'Financial News 24',
    category: 'stock',
    categoryLabel: 'Stock Market',
    url: 'https://www.financialnews24.net',
    color: '#0f766e',
    icon: 'FN',
    tags: 'stock market financial news 24 financialnews24 financialnews24.net dse cse share bazar capital market business economy'
  },

  // =========================================================================
  // 7. GENERAL BUSINESS & COMMERCE (ব্যবসা ও বাণিজ্য)
  // =========================================================================
  {
    id: 'businessinsiderbd',
    nameBn: 'বিজনেস ইনসাইডার বাংলাদেশ',
    nameEn: 'Business Insider BD',
    category: 'business',
    categoryLabel: 'ব্যবসা ও বাণিজ্য',
    url: 'https://www.businessinsiderbd.com',
    color: '#117864',
    icon: 'BI',
    tags: 'business commerce trade corporate'
  },
  {
    id: 'businessnewsbdnet',
    nameBn: 'বিজনেস নিউজ বিডি',
    nameEn: 'Business News BD',
    category: 'business',
    categoryLabel: 'ব্যবসা ও বাণিজ্য',
    url: 'https://businessnews-bd.net',
    color: '#2060af',
    icon: 'BNB',
    tags: 'business commerce industry'
  },

  // =========================================================================
  // 8. SPORTS & ENTERTAINMENT (খেলাধুলা ও বিনোদন)
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
    color: '#014f28',
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
    color: '#007a0f',
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
    color: '#ed1e20',
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
    color: '#ed1c24',
    icon: 'আ',
    tags: 'entertainment culture cinema natok'
  },

  // =========================================================================
  // 9. JOBS, TECH & EDUCATION (চাকরি, প্রযুক্তি ও শিক্ষা)
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
    color: '#8917d1',
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
    color: '#ec1b2e',
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
  // 10. BANGLA FM RADIO (এফএম রেডিও)
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
  {
    id: 'peoplesradio',
    nameBn: 'পিপলস রেডিও',
    nameEn: 'Peoples Radio (91.6 FM)',
    category: 'radio',
    categoryLabel: 'এফএম রেডিও',
    url: 'https://peoplesradio.net',
    color: '#e74c3c',
    icon: '📻',
    tags: 'radio live fm peoples radio 91.6 entertainment news music'
  },

  // =========================================================================
  // 11. KOLKATA & WEST BENGAL (কলকাতা ও পশ্চিমবঙ্গ)
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
    epaperUrl: 'https://epaper.sangbadpratidin.in',
    color: '#78281f',
    icon: 'সং',
    tags: 'kolkata west bengal sangbad pratidin epaper'
  },
  {
    id: 'eisamay',
    nameBn: 'এই সময়',
    nameEn: 'Ei Samay',
    category: 'kolkata',
    categoryLabel: 'কলকাতা/পশ্চিমবঙ্গ',
    url: 'https://eisamay.com',
    epaperUrl: 'https://epaper.eisamay.com',
    color: '#c4161c',
    icon: 'এই',
    tags: 'kolkata west bengal times eisamay epaper'
  },
  {
    id: 'aajkaal',
    nameBn: 'আজকাল পত্রিকা',
    nameEn: 'Aajkaal',
    category: 'kolkata',
    categoryLabel: 'কলকাতা/পশ্চিমবঙ্গ',
    url: 'https://aajkaal.in',
    epaperUrl: 'https://www.eaajkaal.in',
    color: '#196f3d',
    icon: 'আ',
    tags: 'kolkata west bengal aajkaal eaajkaal epaper'
  },
  {
    id: 'uttarbangasambad',
    nameBn: 'উত্তরবঙ্গ সংবাদ',
    nameEn: 'Uttarbanga Sambad',
    category: 'kolkata',
    categoryLabel: 'উত্তরবঙ্গ/শিলিগুড়ি',
    url: 'https://uttarbangasambad.com',
    epaperUrl: 'https://uttarbangasambad.in',
    color: '#117a65',
    icon: 'উ',
    tags: 'siliguri west bengal uttarbanga uttarbangasambad epaper'
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
const resultsCount = document.getElementById('resultsCount');
const totalCountBadge = document.getElementById('totalCountBadge');
const favCountBadge = document.getElementById('favCountBadge');
const emptyState = document.getElementById('emptyState');
const resetSearchBtn = document.getElementById('resetSearchBtn');
const themeToggle = document.getElementById('themeToggle');
const viewGridBtn = document.getElementById('viewGridBtn');
const viewListBtn = document.getElementById('viewListBtn');
const backToTopBtn = document.getElementById('backToTopBtn');

// Category Metadata Configuration for Block-Based Homepage
const CATEGORY_CONFIG = [
  {
    id: 'daily',
    nameBn: 'জাতীয় দৈনিক সংবাদপত্র',
    nameEn: 'National Daily Newspapers of Bangladesh',
    icon: '📰',
    color: '#006A4E',
    bgColor: 'rgba(0, 106, 78, 0.09)',
    filter: (p) => p.category === 'daily'
  },
  {
    id: 'online',
    nameBn: 'অনলাইন নিউজ পোর্টাল',
    nameEn: '24/7 Bangla Online News Portals',
    icon: '⚡',
    color: '#F42A41',
    bgColor: 'rgba(244, 42, 65, 0.09)',
    filter: (p) => p.category === 'online'
  },
  {
    id: 'stock',
    nameBn: 'শেয়ার বাজার ও স্টক মার্কেট',
    nameEn: 'Stock Market, DSE & Financial Media',
    icon: '📊',
    color: '#2563EB',
    bgColor: 'rgba(37, 99, 235, 0.09)',
    filter: (p) => p.category === 'stock'
  },
  {
    id: 'tv',
    nameBn: 'টিভি ও স্যাটেলাইট নিউজ',
    nameEn: 'Television & Live Satellite News Channels',
    icon: '📺',
    color: '#7C3AED',
    bgColor: 'rgba(124, 58, 237, 0.09)',
    filter: (p) => p.category === 'tv'
  },
  {
    id: 'epaper',
    nameBn: 'ই-পেপার ডিজিটাল সংস্করণ',
    nameEn: 'Digital Print E-Paper Editions',
    icon: '🗞️',
    color: '#EA580C',
    bgColor: 'rgba(234, 88, 12, 0.09)',
    filter: (p) => Boolean(p.epaperUrl)
  },
  {
    id: 'english',
    nameBn: 'ইংরেজি জাতীয় দৈনিক',
    nameEn: 'Leading English Daily Newspapers',
    icon: '🌐',
    color: '#0D9488',
    bgColor: 'rgba(13, 148, 136, 0.09)',
    filter: (p) => p.category === 'english'
  },
  {
    id: 'local',
    nameBn: 'বিভাগীয় ও জেলা সংবাদপত্র',
    nameEn: 'Regional & District Press Across 8 Divisions',
    icon: '📍',
    color: '#0284C7',
    bgColor: 'rgba(2, 132, 199, 0.09)',
    filter: (p) => p.category === 'local' && (currentDivision === 'all' || p.division === currentDivision)
  },
  {
    id: 'business',
    nameBn: 'ব্যবসা ও অর্থনীতি',
    nameEn: 'Commerce, Trade & Business Media',
    icon: '📈',
    color: '#16A34A',
    bgColor: 'rgba(22, 163, 74, 0.09)',
    filter: (p) => p.category === 'business'
  },
  {
    id: 'sports',
    nameBn: 'খেলাধুলা ও বিনোদন',
    nameEn: 'Sports, Cricket & Entertainment Portals',
    icon: '⚽',
    color: '#D97706',
    bgColor: 'rgba(217, 119, 6, 0.09)',
    filter: (p) => p.category === 'sports'
  },
  {
    id: 'jobs_tech',
    nameBn: 'চাকরি, প্রযুক্তি ও শিক্ষা',
    nameEn: 'Job Circulars, Technology & Science',
    icon: '💼',
    color: '#4F46E5',
    bgColor: 'rgba(79, 70, 229, 0.09)',
    filter: (p) => p.category === 'jobs_tech'
  },
  {
    id: 'radio',
    nameBn: 'এফএম ও জাতীয় বেতার',
    nameEn: 'FM Radios & Broadcasting Networks',
    icon: '📻',
    color: '#E11D48',
    bgColor: 'rgba(225, 29, 72, 0.09)',
    filter: (p) => p.category === 'radio'
  },
  {
    id: 'kolkata',
    nameBn: 'কলকাতা ও পশ্চিমবঙ্গ মিডিয়া',
    nameEn: 'Leading Kolkata & West Bengal Newspapers',
    icon: '🏛️',
    color: '#9333EA',
    bgColor: 'rgba(147, 51, 234, 0.09)',
    filter: (p) => p.category === 'kolkata'
  }
];

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
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  if (favorites.includes(id)) {
    favorites = favorites.filter(favId => favId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('abn_favorites', JSON.stringify(favorites));
  updateBadges();
  renderNewspapers();
}

function clearAllFavoritesPrompt() {
  if (confirm('আপনি কি আপনার প্রিয় তালিকা খালি করতে চান?')) {
    favorites = [];
    localStorage.setItem('abn_favorites', JSON.stringify(favorites));
    updateBadges();
    renderNewspapers();
  }
}

function updateBadges() {
  if (favCountBadge) favCountBadge.textContent = favorites.length;
  if (totalCountBadge) totalCountBadge.textContent = newspapers.length;
  const heroBadge = document.getElementById('heroBadge');
  if (heroBadge) {
    const toBn = n => n.toString().replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
    heroBadge.innerHTML = `<span class="pulse-dot"></span> ${toBn(newspapers.length)}+ সংবাদ ওয়েবসাইট ও মিডিয়া পোর্টাল`;
  }
}

// Known SVG banner IDs
const SVG_LOGOS = new Set([
  "businessinsiderbd",
  "campuslive24","dailyprobaha","desherkantha","dhakamagazine","dinajpurnews",
  "ekhontv",
  "giridarpon",
  "patrika71",
  "pavilion","techtunes","thedailycampus","tsports"
]);

// Get banner logo URL matching screenshot
function getLogoUrl(paper) {
  if (paper.logo) return paper.logo;
  if (SVG_LOGOS.has(paper.id)) {
    return `assets/logos/${paper.id}.svg`;
  }
  return `assets/logos/${paper.id}.png`;
}

// Matches search query helper
function matchesSearchQuery(paper, query) {
  if (!query || query.trim() === '') return true;
  const q = query.toLowerCase().trim();
  const searchTarget = `${paper.nameBn} ${paper.nameEn} ${paper.url} ${paper.epaperUrl || ''} ${paper.categoryLabel} ${paper.division || ''} ${paper.tags || ''}`.toLowerCase();
  return searchTarget.includes(q);
}

// Create Card Element - Designed to match screenshot exactly
function createCard(paper, catId) {
  const isFav = favorites.includes(paper.id);
  const card = document.createElement('a');
  card.className = 'newspaper-card card-screenshot-style';
  card.href = (catId === 'epaper' && paper.epaperUrl) ? paper.epaperUrl : paper.url;
  card.target = '_blank';
  card.rel = 'noopener noreferrer';
  card.title = (catId === 'epaper' && paper.epaperUrl)
    ? `${paper.nameBn} (${paper.nameEn}) - ডিজিটাল ই-পেপার সংস্করণ`
    : `${paper.nameBn} (${paper.nameEn})`;

  const logoUrl = getLogoUrl(paper);
  let domain = '';
  try {
    domain = new URL(paper.url).hostname.replace(/^www\./, '');
  } catch(e) {}

  const epaperBadge = paper.epaperUrl 
    ? `<a href="${paper.epaperUrl}" target="_blank" rel="noopener noreferrer" class="card-epaper-badge" onclick="event.stopPropagation();" title="${paper.nameBn} সরাসরি ই-পেপার পড়ুন">🗞️ ই-পেপার</a>`
    : '';

  const favButton = `
    <button 
      class="card-fav-btn ${isFav ? 'favorited' : ''}" 
      onclick="toggleFavorite('${paper.id}', event)" 
      title="${isFav ? 'প্রিয় তালিকা থেকে সরান' : 'প্রিয় তালিকায় যুক্ত করুন'}"
      aria-label="Favorite toggle"
    >${isFav ? '★' : '☆'}</button>
  `;

  if (currentView === 'list') {
    card.innerHTML = `
      <div class="card-layout-list">
        <div class="card-left">
          <div class="card-logo-box-list">
            <img 
              src="${logoUrl}" 
              alt="${paper.nameBn} (${paper.nameEn}) - বাংলা সংবাদপত্র লোগো" 
              title="${paper.nameBn} (${paper.nameEn}) - অফিসিয়াল ওয়েবসাইট"
              class="card-masthead-logo" 
              loading="lazy" 
              decoding="async"
              width="200"
              height="60"
              onerror="this.onerror=null; this.src='https://www.google.com/s2/favicons?domain=${domain}&sz=128';" 
            />
          </div>
          <div class="newspaper-info">
            <h3 class="newspaper-name-bn">${paper.nameBn}</h3>
            <p class="newspaper-name-en">${paper.nameEn}</p>
          </div>
        </div>
        <div class="card-right">
          ${epaperBadge}
          <span class="category-tag">${paper.categoryLabel}</span>
          ${favButton}
        </div>
      </div>
    `;
  } else {
    // Screenshot Grid View Style:
    // Top area: Logo box with centered masthead logo
    // Divider: Thin line
    // Bottom area: Centered English publication name
    card.innerHTML = `
      <div class="card-logo-box">
        ${epaperBadge}
        ${favButton}
        <img 
          src="${logoUrl}" 
          alt="${paper.nameBn} (${paper.nameEn}) - বাংলা সংবাদপত্র লোগো" 
          title="${paper.nameBn} (${paper.nameEn}) - অফিসিয়াল ওয়েবসাইট"
          class="card-masthead-logo" 
          loading="lazy" 
          decoding="async"
          width="200"
          height="60"
          onerror="this.onerror=null; this.src='https://www.google.com/s2/favicons?domain=${domain}&sz=128';" 
        />
      </div>
      <div class="banglanewspaperlistname card-name-bar">
        ${paper.nameEn}
      </div>
    `;
  }

  return card;
}

// Filter and Render Newspapers into Category Blocks
function renderNewspapers() {
  newspaperGrid.innerHTML = '';
  const isSearchActive = searchQuery.trim() !== '';
  let totalVisibleCards = 0;
  let visibleBlocksCount = 0;

  // 1. Focus Mode Banner (if user focused a single category)
  if (currentCategory !== 'all' && currentCategory !== 'favorites') {
    const activeConfig = CATEGORY_CONFIG.find(c => c.id === currentCategory);
    if (activeConfig) {
      const banner = document.createElement('div');
      banner.className = 'focus-banner';
      banner.innerHTML = `
        <div class="focus-banner-info">
          <span class="focus-banner-icon">${activeConfig.icon}</span>
          <div>
            <div class="focus-banner-title">আপনি <strong>${activeConfig.nameBn}</strong> ব্লকে আছেন</div>
            <div class="focus-banner-subtitle">${activeConfig.nameEn}</div>
          </div>
        </div>
        <button class="btn-exit-focus" onclick="showAllBlocks()">
          ← সকল ক্যাটাগরি ব্লকে ফিরে যান
        </button>
      `;
      newspaperGrid.appendChild(banner);
    }
  }

  // 2. Favorites Block (Featured on top if user has favorites or if favorites view selected)
  const favPapers = newspapers.filter(p => favorites.includes(p.id) && matchesSearchQuery(p, searchQuery));
  if (currentCategory === 'favorites' || (currentCategory === 'all' && favorites.length > 0 && favPapers.length > 0)) {
    const favBlock = document.createElement('section');
    favBlock.className = 'category-block block-favorites-featured';
    favBlock.id = 'block-favorites';
    favBlock.dataset.category = 'favorites';

    favBlock.innerHTML = `
      <div class="block-header">
        <div class="block-title-group">
          <div class="block-icon-wrap" style="background-color: rgba(234, 179, 8, 0.16); color: #ca8a04;">
            ⭐
          </div>
          <div class="block-title-text">
            <div class="block-heading-row">
              <h2 class="block-title">আপনার প্রিয় সংবাদপত্র</h2>
              <span class="block-badge" style="background: rgba(234, 179, 8, 0.16); color: #854d0e; border-color: rgba(234, 179, 8, 0.3);">${favPapers.length} টি সংরক্ষিত</span>
            </div>
            <p class="block-subtitle">Your Pinned & Bookmarked Newspapers</p>
          </div>
        </div>
        <div class="block-actions">
          <button class="btn-block-action" onclick="clearAllFavoritesPrompt()" title="প্রিয় তালিকা পরিষ্কার করুন">
            মুছে ফেলুন
          </button>
          <button class="btn-block-action btn-block-top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" title="উপরে যান">
            ↑ শীর্ষে
          </button>
        </div>
      </div>
    `;

    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'newspaper-cards-grid';
    favPapers.forEach(paper => {
      cardsGrid.appendChild(createCard(paper));
    });
    favBlock.appendChild(cardsGrid);
    newspaperGrid.appendChild(favBlock);

    totalVisibleCards += favPapers.length;
    visibleBlocksCount++;
  } else if (currentCategory === 'favorites' && favorites.length === 0) {
    const favBlock = document.createElement('section');
    favBlock.className = 'category-block block-favorites-featured';
    favBlock.id = 'block-favorites';
    favBlock.innerHTML = `
      <div class="block-header">
        <div class="block-title-group">
          <div class="block-icon-wrap" style="background-color: rgba(234, 179, 8, 0.16); color: #ca8a04;">
            ⭐
          </div>
          <div class="block-title-text">
            <h2 class="block-title">আপনার প্রিয় সংবাদপত্র</h2>
            <p class="block-subtitle">Your Pinned & Bookmarked Newspapers</p>
          </div>
        </div>
      </div>
      <div class="empty-favorites-hint">
        <span class="hint-star-big">⭐</span>
        <h3>প্রিয় তালিকায় কোনো পত্রিকা যোগ করা নেই</h3>
        <p>যেকোনো সংবাদপত্রের কার্ডে থাকা তারকা (☆) আইকনে ক্লিক করে আপনার পছন্দের পত্রিকাগুলো এখানে পিন করুন।</p>
        <button class="btn-exit-focus" onclick="showAllBlocks()">সকল ক্যাটাগরি ব্রাউজ করুন</button>
      </div>
    `;
    newspaperGrid.appendChild(favBlock);
    visibleBlocksCount++;
  }

  // 3. Category Blocks
  CATEGORY_CONFIG.forEach(cat => {
    // If user selected a specific category (not 'all' and not 'favorites'), only render that category
    if (currentCategory !== 'all' && currentCategory !== cat.id) {
      return;
    }

    // Filter newspapers for this category
    const papersInBlock = newspapers.filter(p => cat.filter(p) && matchesSearchQuery(p, searchQuery));

    // If searching and no matches in this block, skip rendering it
    if (isSearchActive && papersInBlock.length === 0) {
      return;
    }

    const block = document.createElement('section');
    block.className = 'category-block';
    block.id = `block-${cat.id}`;
    block.dataset.category = cat.id;

    const countText = isSearchActive 
      ? `${papersInBlock.length} টি ফলাফল` 
      : `${papersInBlock.length} টি ওয়েবসাইট`;

    const focusBtnHtml = currentCategory === 'all'
      ? `<button class="btn-block-action btn-block-focus" onclick="focusCategory('${cat.id}')" title="${cat.nameBn} একক ভিউ দেখুন">একক ভিউ ➔</button>`
      : '';

    // Division subfilter HTML if local news block
    let divisionSubfilterHtml = '';
    if (cat.id === 'local') {
      const divisionChips = [
        { id: 'all', label: 'সকল বিভাগ', count: 30 },
        { id: 'dhaka', label: 'ঢাকা', count: 3 },
        { id: 'chittagong', label: 'চট্টগ্রাম', count: 7 },
        { id: 'sylhet', label: 'সিলেট', count: 4 },
        { id: 'rajshahi', label: 'রাজশাহী', count: 4 },
        { id: 'khulna', label: 'খুলনা', count: 4 },
        { id: 'barisal', label: 'বরিশাল', count: 3 },
        { id: 'rangpur', label: 'রংপুর', count: 3 },
        { id: 'mymensingh', label: 'ময়মনসিংহ', count: 2 }
      ];

      divisionSubfilterHtml = `
        <div class="block-subfilter">
          <span class="block-subfilter-label">বিভাগ ফিল্টার:</span>
          <div class="block-subfilter-chips" id="blockDivisionTabs">
            ${divisionChips.map(d => `
              <button 
                class="subfilter-chip ${currentDivision === d.id ? 'active' : ''}" 
                data-division="${d.id}"
                onclick="setLocalDivision('${d.id}', event)"
              >
                ${d.label} (${d.count})
              </button>
            `).join('')}
          </div>
        </div>
      `;
    }

    block.innerHTML = `
      <div class="block-header">
        <div class="block-title-group">
          <div class="block-icon-wrap" style="background-color: ${cat.bgColor}; color: ${cat.color};">
            ${cat.icon}
          </div>
          <div class="block-title-text">
            <div class="block-heading-row">
              <h2 class="block-title">${cat.nameBn}</h2>
              <span class="block-badge">${countText}</span>
            </div>
            <p class="block-subtitle">${cat.nameEn}</p>
          </div>
        </div>
        <div class="block-actions">
          ${focusBtnHtml}
          <button class="btn-block-action btn-block-top" onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" title="উপরে যান">
            ↑ শীর্ষে
          </button>
        </div>
      </div>
      ${divisionSubfilterHtml}
    `;

    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'newspaper-cards-grid';
    papersInBlock.forEach(paper => {
      cardsGrid.appendChild(createCard(paper, cat.id));
    });

    block.appendChild(cardsGrid);
    newspaperGrid.appendChild(block);

    totalVisibleCards += papersInBlock.length;
    visibleBlocksCount++;
  });

  // 4. Update Status Bar
  if (isSearchActive) {
    if (totalVisibleCards === 0) {
      resultsCount.innerHTML = `অনুসন্ধানে কোনো ওয়েবসাইট পাওয়া যায়নি`;
      emptyState.style.display = 'block';
    } else {
      resultsCount.innerHTML = `অনুসন্ধানের ফলাফল: <strong>${totalVisibleCards} টি ওয়েবসাইট</strong> (${visibleBlocksCount} টি ব্লকে)`;
      emptyState.style.display = 'none';
    }
  } else if (currentCategory === 'favorites') {
    resultsCount.innerHTML = `প্রিয় তালিকা: <strong>${favorites.length} টি সংবাদপত্র</strong>`;
    emptyState.style.display = 'none';
  } else if (currentCategory !== 'all') {
    const activeConfig = CATEGORY_CONFIG.find(c => c.id === currentCategory);
    const catName = activeConfig ? activeConfig.nameBn : '';
    resultsCount.innerHTML = `নির্বাচিত ক্যাটাগরি: <strong>${catName}</strong> (${totalVisibleCards} টি ওয়েবসাইট)`;
    emptyState.style.display = 'none';
  } else {
    resultsCount.innerHTML = `মোট <strong>১২ টি ক্যাটাগরি ব্লকে ${newspapers.length} টি ওয়েবসাইট</strong> সাজানো রয়েছে`;
    emptyState.style.display = 'none';
  }

  // 5. Setup ScrollSpy
  setupScrollSpy();
}

// ScrollSpy: highlight active category tab when scrolling down blocks
let scrollSpyObserver = null;

function setupScrollSpy() {
  if (scrollSpyObserver) {
    scrollSpyObserver.disconnect();
    scrollSpyObserver = null;
  }
  if (currentCategory !== 'all') return;

  const blocks = document.querySelectorAll('.category-block');
  if (!blocks.length) return;

  scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.22) {
        const catId = entry.target.dataset.category;
        if (catId) {
          document.querySelectorAll('.category-btn').forEach(btn => {
            const isMatch = btn.dataset.category === catId;
            btn.classList.toggle('active', isMatch);
            if (isMatch && categoriesWrapper && !categoriesWrapper.classList.contains('wrap-mode')) {
              btn.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
            }
          });
        }
      }
    });
  }, {
    rootMargin: '-120px 0px -60% 0px',
    threshold: [0.22]
  });

  blocks.forEach(b => scrollSpyObserver.observe(b));
}

// Focus on a single category
function focusCategory(catId) {
  currentCategory = catId;
  document.querySelectorAll('.category-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === catId);
  });
  renderNewspapers();
  window.scrollTo({ top: 120, behavior: 'smooth' });
}

// Show all blocks on homepage
function showAllBlocks() {
  currentCategory = 'all';
  currentDivision = 'all';
  document.querySelectorAll('.category-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.category === 'all');
  });
  renderNewspapers();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Smooth scroll to a block with highlight pulse
function scrollToBlock(blockId) {
  const el = document.getElementById(blockId);
  if (!el) return;
  const catWrapHeight = categoriesWrapper ? categoriesWrapper.offsetHeight : 50;
  const headerOffset = 70 + catWrapHeight + 12;
  const elementPosition = el.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });

  el.classList.add('block-pulse');
  setTimeout(() => {
    el.classList.remove('block-pulse');
  }, 1200);
}

// Set local division subfilter inside Local block
function setLocalDivision(divisionId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  currentDivision = divisionId;
  renderNewspapers();

  const localBlock = document.getElementById('block-local');
  if (localBlock) {
    const headerOffset = 130;
    const elementPosition = localBlock.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({ top: offsetPosition, behavior: 'auto' });
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
  showAllBlocks();
});

// Category Tabs Click Listener
categoryTabs.addEventListener('click', (e) => {
  const btn = e.target.closest('.category-btn');
  if (!btn) return;
  const targetCategory = btn.dataset.category;

  if (targetCategory === 'all') {
    showAllBlocks();
    return;
  }

  if (targetCategory === 'favorites') {
    if (currentCategory !== 'all') {
      focusCategory('favorites');
    } else {
      const favBlock = document.getElementById('block-favorites');
      if (favBlock) {
        scrollToBlock('block-favorites');
      } else {
        focusCategory('favorites');
      }
    }
    return;
  }

  if (currentCategory === 'all') {
    const targetBlock = document.getElementById(`block-${targetCategory}`);
    if (targetBlock) {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      scrollToBlock(`block-${targetCategory}`);
    } else {
      focusCategory(targetCategory);
    }
  } else {
    focusCategory(targetCategory);
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

// ================= CATEGORIES RESPONSIVE & FLEXIBLE CONTROLS =================
const categoriesWrapper = document.getElementById('categoriesWrapper');
const categoriesNav = document.getElementById('categoriesNav');
const catScrollLeftBtn = document.getElementById('catScrollLeftBtn');
const catScrollRightBtn = document.getElementById('catScrollRightBtn');
const catToggleWrapBtn = document.getElementById('catToggleWrapBtn');

function initCategoryLayout() {
  // Check user saved preference or default to wrap-mode on desktop (width >= 992px)
  const savedMode = localStorage.getItem('abn_cat_wrap');
  const isWrap = savedMode !== null ? savedMode === 'true' : window.innerWidth >= 992;
  setCategoryWrapMode(isWrap);

  if (categoriesNav) {
    categoriesNav.addEventListener('scroll', updateScrollButtonsState, { passive: true });
    updateScrollButtonsState();
  }

  // Handle window resize to adapt gracefully
  window.addEventListener('resize', () => {
    updateScrollButtonsState();
  }, { passive: true });
}

function setCategoryWrapMode(isWrap) {
  if (!categoriesWrapper || !catToggleWrapBtn) return;
  categoriesWrapper.classList.toggle('wrap-mode', isWrap);
  categoriesWrapper.classList.toggle('scroll-mode', !isWrap);
  catToggleWrapBtn.classList.toggle('active', isWrap);

  const iconSpan = catToggleWrapBtn.querySelector('.toggle-icon');
  const labelSpan = catToggleWrapBtn.querySelector('.toggle-label');
  if (iconSpan && labelSpan) {
    if (isWrap) {
      iconSpan.textContent = '↔';
      labelSpan.textContent = 'স্লাইডার ভিউ';
    } else {
      iconSpan.textContent = '⊞';
      labelSpan.textContent = 'সবগুলো দেখুন';
    }
  }

  localStorage.setItem('abn_cat_wrap', isWrap);
  if (!isWrap) {
    setTimeout(updateScrollButtonsState, 100);
  }
}

if (catToggleWrapBtn) {
  catToggleWrapBtn.addEventListener('click', () => {
    const currentIsWrap = categoriesWrapper.classList.contains('wrap-mode');
    setCategoryWrapMode(!currentIsWrap);
  });
}

if (catScrollLeftBtn && categoriesNav) {
  catScrollLeftBtn.addEventListener('click', () => {
    categoriesNav.scrollBy({ left: -260, behavior: 'smooth' });
    setTimeout(updateScrollButtonsState, 350);
  });
}

if (catScrollRightBtn && categoriesNav) {
  catScrollRightBtn.addEventListener('click', () => {
    categoriesNav.scrollBy({ left: 260, behavior: 'smooth' });
    setTimeout(updateScrollButtonsState, 350);
  });
}

function updateScrollButtonsState() {
  if (!categoriesNav || !catScrollLeftBtn || !catScrollRightBtn) return;
  const isAtStart = categoriesNav.scrollLeft <= 5;
  const isAtEnd = categoriesNav.scrollLeft + categoriesNav.clientWidth >= categoriesNav.scrollWidth - 5;
  catScrollLeftBtn.disabled = isAtStart;
  catScrollRightBtn.disabled = isAtEnd;
}

// Expose global methods for inline HTML onclick handlers
window.toggleFavorite = toggleFavorite;
window.focusCategory = focusCategory;
window.showAllBlocks = showAllBlocks;
window.scrollToBlock = scrollToBlock;
window.setLocalDivision = setLocalDivision;
window.clearAllFavoritesPrompt = clearAllFavoritesPrompt;
window.setCategoryWrapMode = setCategoryWrapMode;

// Initial boot
initTheme();
initCategoryLayout();
updateBadges();
updateView(currentView);
