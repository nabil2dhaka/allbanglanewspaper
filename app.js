// All Bangla Newspaper Directory Data
const newspapers = [
  // Bangla Dailies
  {
    id: 'prothomalo',
    nameBn: 'প্রথম আলো',
    nameEn: 'Prothom Alo',
    category: 'bangla',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.prothomalo.com',
    color: '#ed1c24',
    icon: 'প্র'
  },
  {
    id: 'ittefaq',
    nameBn: 'দৈনিক ইত্তেফাক',
    nameEn: 'The Daily Ittefaq',
    category: 'bangla',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.ittefaq.com.bd',
    color: '#006a4e',
    icon: 'ই'
  },
  {
    id: 'kalerkantho',
    nameBn: 'কালের কণ্ঠ',
    nameEn: 'Kaler Kantho',
    category: 'bangla',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.kalerkantho.com',
    color: '#1b75bb',
    icon: 'কা'
  },
  {
    id: 'jugantor',
    nameBn: 'দৈনিক যুগান্তর',
    nameEn: 'Daily Jugantor',
    category: 'bangla',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.jugantor.com',
    color: '#f37023',
    icon: 'যু'
  },
  {
    id: 'bdpratidin',
    nameBn: 'বাংলাদেশ প্রতিদিন',
    nameEn: 'Bangladesh Pratidin',
    category: 'bangla',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.bd-pratidin.com',
    color: '#e30613',
    icon: 'বা'
  },
  {
    id: 'samakal',
    nameBn: 'দৈনিক সমকাল',
    nameEn: 'Daily Samakal',
    category: 'bangla',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.samakal.com',
    color: '#1d8348',
    icon: 'স'
  },
  {
    id: 'manabzamin',
    nameBn: 'মানবজমিন',
    nameEn: 'Daily Manab Zamin',
    category: 'bangla',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.mzamin.com',
    color: '#b03a2e',
    icon: 'মা'
  },
  {
    id: 'inqilab',
    nameBn: 'দৈনিক ইনকিলাব',
    nameEn: 'Daily Inqilab',
    category: 'bangla',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.dailyinqilab.com',
    color: '#0e6251',
    icon: 'ই'
  },
  {
    id: 'nayadiganta',
    nameBn: 'দৈনিক নয়াদিগন্ত',
    nameEn: 'Daily Naya Diganta',
    category: 'bangla',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.dailynayadiganta.com',
    color: '#2874a6',
    icon: 'ন'
  },
  {
    id: 'janakantha',
    nameBn: 'দৈনিক জনকণ্ঠ',
    nameEn: 'Daily Janakantha',
    category: 'bangla',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.dailyjanakantha.com',
    color: '#7d3c98',
    icon: 'জ'
  },
  {
    id: 'bonikbarta',
    nameBn: 'বণিক বার্তা',
    nameEn: 'Bonik Barta',
    category: 'bangla',
    categoryLabel: 'ব্যবসা ও অর্থ',
    url: 'https://www.bonikbarta.net',
    color: '#d35400',
    icon: 'ব'
  },
  {
    id: 'jaijaidin',
    nameBn: 'যায়যায়দিন',
    nameEn: 'Jaijaidin',
    category: 'bangla',
    categoryLabel: 'জাতীয় দৈনিক',
    url: 'https://www.jaijaidinbd.com',
    color: '#2e4053',
    icon: 'য'
  },

  // Online Portals
  {
    id: 'bdnews24',
    nameBn: 'বিডিনিউজ২৪',
    nameEn: 'bdnews24.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://bangla.bdnews24.com',
    color: '#c0392b',
    icon: 'BD'
  },
  {
    id: 'jagonews24',
    nameBn: 'জাগো নিউজ ২৪',
    nameEn: 'Jagonews24.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.jagonews24.com',
    color: '#27ae60',
    icon: 'জা'
  },
  {
    id: 'dhakapost',
    nameBn: 'ঢাকা পোস্ট',
    nameEn: 'Dhaka Post',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.dhakapost.com',
    color: '#e67e22',
    icon: 'ঢা'
  },
  {
    id: 'banglatribune',
    nameBn: 'বাংলা ট্রিবিউন',
    nameEn: 'Bangla Tribune',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.banglatribune.com',
    color: '#8e44ad',
    icon: 'বা'
  },
  {
    id: 'banglanews24',
    nameBn: 'বাংলানিউজ২৪',
    nameEn: 'Banglanews24.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.banglanews24.com',
    color: '#16a085',
    icon: 'বা'
  },
  {
    id: 'risingbd',
    nameBn: 'রাইজিংবিডি',
    nameEn: 'Risingbd.com',
    category: 'online',
    categoryLabel: 'অনলাইন পোর্টাল',
    url: 'https://www.risingbd.com',
    color: '#2980b9',
    icon: 'রা'
  },

  // English Dailies
  {
    id: 'thedailystar',
    nameBn: 'দ্য ডেইলি স্টার',
    nameEn: 'The Daily Star',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.thedailystar.net',
    color: '#003366',
    icon: 'DS'
  },
  {
    id: 'dhakatribune',
    nameBn: 'ঢাকা ট্রিবিউন',
    nameEn: 'Dhaka Tribune',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.dhakatribune.com',
    color: '#d9230f',
    icon: 'DT'
  },
  {
    id: 'tbsnews',
    nameBn: 'দ্য বিজনেস স্ট্যান্ডার্ড',
    nameEn: 'The Business Standard',
    category: 'english',
    categoryLabel: 'Business Daily',
    url: 'https://www.tbsnews.net',
    color: '#005b96',
    icon: 'TBS'
  },
  {
    id: 'newage',
    nameBn: 'নিউ এজ',
    nameEn: 'New Age',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.newagebd.net',
    color: '#4a235a',
    icon: 'NA'
  },
  {
    id: 'financialexpress',
    nameBn: 'ফাইন্যান্সিয়াল এক্সপ্রেস',
    nameEn: 'The Financial Express',
    category: 'english',
    categoryLabel: 'Business Daily',
    url: 'https://thefinancialexpress.com.bd',
    color: '#1a5276',
    icon: 'FE'
  },
  {
    id: 'dailysun',
    nameBn: 'ডেইলি সান',
    nameEn: 'Daily Sun',
    category: 'english',
    categoryLabel: 'English Daily',
    url: 'https://www.daily-sun.com',
    color: '#f39c12',
    icon: 'DS'
  },

  // TV News
  {
    id: 'somoynews',
    nameBn: 'সময় টিভি',
    nameEn: 'Somoy News',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.somoynews.tv',
    color: '#c0392b',
    icon: 'ST'
  },
  {
    id: 'jamunatv',
    nameBn: 'যমুনা টেলিভিশন',
    nameEn: 'Jamuna Television',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.jamuna.tv',
    color: '#d35400',
    icon: 'JT'
  },
  {
    id: 'channel24',
    nameBn: 'চ্যানেল ২৪',
    nameEn: 'Channel 24',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.channel24bd.tv',
    color: '#117864',
    icon: '24'
  },
  {
    id: 'dbcnews',
    nameBn: 'ডিবিসি নিউজ',
    nameEn: 'DBC News',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.dbcnews.tv',
    color: '#7b1113',
    icon: 'DBC'
  },
  {
    id: 'ekattor',
    nameBn: 'একাত্তর টিভি',
    nameEn: 'Ekattor TV',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.ekattor.tv',
    color: '#212f3d',
    icon: '৭১'
  },
  {
    id: 'independenttv',
    nameBn: 'ইনডিপেনডেন্ট টিভি',
    nameEn: 'Independent TV',
    category: 'tv',
    categoryLabel: 'টিভি নিউজ',
    url: 'https://www.independent24.tv',
    color: '#1f618d',
    icon: 'IT'
  },

  // International
  {
    id: 'bbcbangla',
    nameBn: 'বিবিসি বাংলা',
    nameEn: 'BBC News Bangla',
    category: 'international',
    categoryLabel: 'আন্তর্জাতিক',
    url: 'https://www.bbc.com/bengali',
    color: '#bb1919',
    icon: 'BBC'
  },
  {
    id: 'voabangla',
    nameBn: 'ভয়েস অফ আমেরিকা (ভিওএ)',
    nameEn: 'Voice of America Bangla',
    category: 'international',
    categoryLabel: 'আন্তর্জাতিক',
    url: 'https://www.voabangla.com',
    color: '#003366',
    icon: 'VOA'
  },
  {
    id: 'dwbangla',
    nameBn: 'ডয়চে ভেলে বাংলা',
    nameEn: 'DW Bangla',
    category: 'international',
    categoryLabel: 'আন্তর্জাতিক',
    url: 'https://www.dw.com/bn',
    color: '#005b96',
    icon: 'DW'
  }
];

// App State
let currentCategory = 'all';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('abn_favorites') || '[]');

// DOM Elements
const newspaperGrid = document.getElementById('newspaperGrid');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const categoryTabs = document.getElementById('categoryTabs');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');
const resetSearchBtn = document.getElementById('resetSearchBtn');
const themeToggle = document.getElementById('themeToggle');

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
  renderNewspapers();
}

// Filter and Render Newspapers
function renderNewspapers() {
  const filtered = newspapers.filter(paper => {
    // Category match
    let matchesCategory = true;
    if (currentCategory === 'favorites') {
      matchesCategory = favorites.includes(paper.id);
    } else if (currentCategory !== 'all') {
      matchesCategory = paper.category === currentCategory;
    }

    // Search match (name in Bangla or English, or category)
    let matchesSearch = true;
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      matchesSearch = paper.nameBn.toLowerCase().includes(q) ||
                      paper.nameEn.toLowerCase().includes(q) ||
                      paper.categoryLabel.toLowerCase().includes(q);
    }

    return matchesCategory && matchesSearch;
  });

  // Update status count
  if (currentCategory === 'favorites') {
    resultsCount.textContent = `প্রিয় তালিকা: ${filtered.length} টি পত্রিকা`;
  } else {
    resultsCount.textContent = `মোট ${filtered.length} টি পত্রিকা পাওয়া গেছে`;
  }

  // Clear grid
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

      card.innerHTML = `
        <div>
          <div class="card-top">
            <div class="newspaper-avatar" style="background-color: ${paper.color};">
              ${paper.icon}
            </div>
            <button 
              class="favorite-btn ${isFav ? 'favorited' : ''}" 
              onclick="toggleFavorite('${paper.id}', event)"
              title="${isFav ? 'প্রিয় তালিকা থেকে সরান' : 'প্রিয় তালিকায় যুক্ত করুন'}"
              aria-label="Toggle favorite"
            >
              ${isFav ? '★' : '☆'}
            </button>
          </div>
          <h3 class="newspaper-name-bn">${paper.nameBn}</h3>
          <p class="newspaper-name-en">${paper.nameEn}</p>
        </div>
        <div class="card-footer">
          <span class="category-tag">${paper.categoryLabel}</span>
          <span class="visit-link">পড়ুন ➔</span>
        </div>
      `;

      newspaperGrid.appendChild(card);
    });
  }
}

// Search Input Listener
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
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
  if (e.target.classList.contains('category-btn')) {
    document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    currentCategory = e.target.dataset.category;
    renderNewspapers();
  }
});

// Initial boot
initTheme();
renderNewspapers();
