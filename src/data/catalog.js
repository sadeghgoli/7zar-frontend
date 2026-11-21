export const siteConfig = {
  name: "سون زر",
  fullName: "گالری طلای سون زر",
  tagline: "زیورآلات طلای ۱۸ عیار",
  description:
    "خرید آنلاین گردنبند، دستبند، گوشواره، انگشتر و ست طلای ۱۸ عیار با ضمانت اصالت، بسته‌بندی کادویی و ارسال بیمه‌شده به سراسر کشور.",
  phone: "09336191824",
  phoneDisplay: "۰۹۳۳۶۱۹۱۸۲۴",
  whatsapp: "989336191824",
  address: "خراسان رضوی، سبزوار، بیهق، بیهق ۲۴",
  addressShort: "سبزوار، بیهق ۲۴",
  hours: "شنبه تا پنج‌شنبه، ۹ صبح تا ۶ عصر",
  hoursShort: "۹ تا ۱۸",
  closedDay: "جمعه‌ها تعطیل",
  freeShippingThreshold: 20_000_000,
  shippingCost: 250_000,
  expressShippingCost: 150_000,
  gatewayConnected: false,
  gatewayMessage: "درگاه پرداخت آنلاین هنوز متصل نشده است.",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("خراسان رضوی، سبزوار، بیهق، بیهق 24"),
  instagram: "https://instagram.com",
};

export const categories = [
  {
    id: "necklace",
    label: "گردنبند",
    slug: "necklace",
    image: "/img/products/real/necklace-chain.jpg",
    desc: "زنجیر، مدال و پندنت‌های ظریف برای هر استایل",
  },
  {
    id: "bracelet",
    label: "دستبند",
    slug: "bracelet",
    image: "/img/products/real/bracelet-floral.jpg",
    desc: "از زنجیرهای روزمره تا طرح‌های نگین‌نشان",
  },
  {
    id: "earring",
    label: "گوشواره",
    slug: "earring",
    image: "/img/products/real/earring-hoop.jpg",
    desc: "حلقه‌ای، آویز و میخی برای مهمانی و روزمره",
  },
  {
    id: "ring",
    label: "انگشتر",
    slug: "ring",
    image: "/img/products/real/ring-heart.jpg",
    desc: "سولیتر، بند پهن و طرح‌های دست‌ساز",
  },
  {
    id: "set",
    label: "ست و نیم‌ست",
    slug: "set",
    image: "/img/products/real/set-bridal.jpg",
    desc: "ست‌های هماهنگ برای عروس و هدیه",
  },
];

const galleryByCategory = {
  necklace: [
    "/img/products/real/necklace-pendant-shine.jpg",
    "/img/site/about-display.jpg",
  ],
  bracelet: [
    "/img/products/real/bracelet-diamond.jpg",
    "/img/site/about-display.jpg",
  ],
  earring: ["/img/products/real/earring-silk.jpg", "/img/site/about-display.jpg"],
  ring: ["/img/products/real/ring-ruby.jpg", "/img/site/about-display.jpg"],
  set: ["/img/products/real/set-flatlay.jpg", "/img/site/gift-flatlay.jpg"],
};

const baseFeatures = [
  "ضمانت اصالت و گواهی طلای ۱۸ عیار",
  "بسته‌بندی کادویی و جعبه مخملی",
  "ارسال بیمه‌شده به سراسر کشور",
  "امکان بازگشت تا ۷ روز پس از دریافت",
];

const makeProduct = (product) => {
  const extras = (galleryByCategory[product.category] || []).filter(
    (src) => src !== product.image
  );
  return {
    karat: 18,
    badges: [],
    featured: false,
    stock: 5,
    rating: 4.8,
    reviews: 24,
    colors: ["طلایی"],
    sizes: ["تک سایز"],
    features: baseFeatures,
    gallery: [product.image, ...extras].slice(0, 3),
    ...product,
    specs: [
      { label: "عیار", value: "۷۵۰ (۱۸ عیار)" },
      { label: "وزن تقریبی", value: `${product.weightGram} گرم` },
      { label: "جنس", value: "طلای زرد ۱۸ عیار" },
      { label: "بسته‌بندی", value: "جعبه مخملی + گواهی اصالت" },
      ...(product.specs || []),
    ],
  };
};

export const products = [
  makeProduct({
    id: "p-n001",
    slug: "gardanband-zanjir-classic",
    name: "گردنبند زنجیر کلاسیک ۱۸ عیار",
    category: "necklace",
    priceToman: 32_800_000,
    weightGram: 4.2,
    image: "/img/products/real/necklace-chain.jpg",
    desc: "زنجیر ظریف و براق با قفل ایمن؛ انتخابی همیشگی برای استفاده روزمره.",
    description:
      "این گردنبند با زنجیر کلاسیک و پرداخت براق، یکی از پرفروش‌ترین طرح‌های سون زر است. حلقه‌های یکدست و قفل صدفی ایمن باعث می‌شود زنجیر در طول روز راحت روی گردن بنشیند. طول ۴۵ سانتی‌متر آن برای استفاده روزمره و ست کردن با پندنت‌های ظریف مناسب است.",
    badges: ["پرفروش"],
    featured: true,
    stock: 8,
    rating: 4.8,
    reviews: 126,
    sizes: ["۴۰ سانتی‌متر", "۴۵ سانتی‌متر", "۵۰ سانتی‌متر"],
    specs: [
      { label: "طول", value: "۴۵ سانتی‌متر (قابل انتخاب)" },
      { label: "قفل", value: "صدفی ایمن" },
    ],
    createdAt: "2026-09-12",
  }),
  makeProduct({
    id: "p-n002",
    slug: "gardanband-medallion",
    name: "گردنبند مدال طلایی طرح خورشید",
    category: "necklace",
    priceToman: 45_600_000,
    oldPriceToman: 49_900_000,
    weightGram: 6.1,
    image: "/img/products/real/necklace-medal.jpg",
    desc: "مدال برجسته با طراحی مینیمال و زنجیر ظریف؛ همراه جعبه کادویی.",
    description:
      "مدال گرد و برجسته با نقش خورشید، ترکیبی از هنر دست و طراحی مدرن است. زنجیر ظریف و محکم همراه با مدال، این گردنبند را به گزینه‌ای مناسب برای هدیه و استفاده مجلسی تبدیل می‌کند.",
    badges: ["پرفروش", "٪۹ تخفیف"],
    featured: true,
    stock: 5,
    rating: 4.9,
    reviews: 84,
    sizes: ["۴۵ سانتی‌متر", "۵۰ سانتی‌متر"],
    specs: [
      { label: "طول", value: "۵۰ سانتی‌متر" },
      { label: "قطر مدال", value: "۲.۸ سانتی‌متر" },
    ],
    createdAt: "2026-08-20",
  }),
  makeProduct({
    id: "p-n003",
    slug: "gardanband-moonstone-pendant",
    name: "گردنبند پندنت سنگ ماه",
    category: "necklace",
    priceToman: 38_900_000,
    weightGram: 5.0,
    image: "/img/products/real/necklace-moonstone.jpg",
    desc: "پندنت سنگ ماه با درخشش آبی و زنجیر ۴۵ سانتی؛ هدیه‌ای خاص.",
    description:
      "سنگ ماه با بازی نور آبی و سفید، در قابی ساده از طلای ۱۸ عیار نشسته است. این پندنت برای کسانی طراحی شده که به دنبال یک قطعه متفاوت و آرام هستند. زنجیر همراه قابل تنظیم است.",
    badges: ["جدید"],
    featured: true,
    stock: 4,
    rating: 4.7,
    reviews: 58,
    sizes: ["۴۰ سانتی‌متر", "۴۵ سانتی‌متر"],
    specs: [
      { label: "طول", value: "۴۵ سانتی‌متر" },
      { label: "سنگ", value: "سنگ ماه طبیعی" },
    ],
    createdAt: "2026-11-05",
  }),
  makeProduct({
    id: "p-n004",
    slug: "gardanband-gem-pendant",
    name: "گردنبند پندنت نگین‌دار",
    category: "necklace",
    priceToman: 36_400_000,
    weightGram: 4.6,
    image: "/img/products/real/necklace-gem-pendant.jpg",
    desc: "آویز قطره‌ای با نگین‌های ریز و پرداخت براق.",
    description:
      "آویز قطره‌ای این گردنبند با ردیفی از نگین‌های ریز تزئین شده و در نور، درخششی ملایم دارد. زنجیر ظریف و بست ایمن، آن را برای استفاده روزمره و مهمانی‌های کوچک مناسب می‌کند.",
    badges: ["پیشنهاد سون زر"],
    featured: true,
    stock: 6,
    rating: 4.8,
    reviews: 41,
    sizes: ["۴۵ سانتی‌متر"],
    specs: [
      { label: "طول", value: "۴۵ سانتی‌متر" },
      { label: "نگین", value: "نگین تزئینی درخشان" },
    ],
    createdAt: "2026-10-02",
  }),
  makeProduct({
    id: "p-n005",
    slug: "gardanband-diamond",
    name: "گردنبند الماس‌نشان",
    category: "necklace",
    priceToman: 47_200_000,
    oldPriceToman: 52_000_000,
    weightGram: 5.8,
    image: "/img/products/real/necklace-diamond.jpg",
    desc: "زنجیر ظریف با نگین‌های الماس؛ مناسب مهمانی و هدیه.",
    description:
      "ردیفی از نگین‌های الماسی روی زنجیر طلای ۱۸ عیار، جلوهای رسمی و درخشان ایجاد می‌کند. این گردنبند برای مراسم، نامزدی و هدیه‌های ماندگار انتخاب می‌شود.",
    badges: ["لوکس", "٪۹ تخفیف"],
    featured: false,
    stock: 3,
    rating: 5,
    reviews: 33,
    sizes: ["۴۵ سانتی‌متر"],
    specs: [
      { label: "طول", value: "۴۵ سانتی‌متر" },
      { label: "نگین", value: "الماس آزمایشگاهی" },
    ],
    createdAt: "2026-07-18",
  }),
  makeProduct({
    id: "p-n006",
    slug: "gardanband-filigree-pendant",
    name: "گردنبند پندنت مشبک",
    category: "necklace",
    priceToman: 25_900_000,
    weightGram: 3.1,
    image: "/img/products/real/necklace-filigree.jpg",
    desc: "پندنت مشبک با طراحی دست‌ساز و حس سبک و ظریف.",
    description:
      "پندنت مشبک این گردنبند با الگوی برگ و بافت توری، حاصل کار دست استادکاران است. سبک بودن قطعه باعث می‌شود برای استفاده طولانی‌مدت راحت باشد. زنجیر نازک همراه، ظرافت طرح را کامل می‌کند.",
    badges: ["پرفروش"],
    featured: true,
    stock: 10,
    rating: 4.6,
    reviews: 67,
    sizes: ["۴۵ سانتی‌متر", "۵۰ سانتی‌متر"],
    specs: [
      { label: "طول", value: "۴۵ سانتی‌متر" },
      { label: "طرح", value: "مشبک دست‌ساز" },
    ],
    createdAt: "2026-09-28",
  }),
  makeProduct({
    id: "p-b001",
    slug: "dastband-chain-gold",
    name: "دستبند زنجیر طلا",
    category: "bracelet",
    priceToman: 41_300_000,
    oldPriceToman: 44_900_000,
    weightGram: 5.5,
    image: "/img/products/real/bracelet-bangle.jpg",
    desc: "زنجیر ضخیم و براق با قفل مطمئن؛ استایل روزمره و مجلسی.",
    description:
      "دستبند زنجیری با بافت فشرده و درخشش بالا، هم برای استایل روزمره و هم برای مهمانی مناسب است. قفل صدفی محکم و سایز قابل انتخاب، استفاده راحت را تضمین می‌کند.",
    badges: ["پرفروش", "٪۸ تخفیف"],
    featured: true,
    stock: 7,
    rating: 4.8,
    reviews: 92,
    sizes: ["۱۷ سانتی‌متر", "۱۸ سانتی‌متر", "۱۹ سانتی‌متر"],
    specs: [
      { label: "طول", value: "۱۸ سانتی‌متر (قابل انتخاب)" },
      { label: "قفل", value: "صدفی" },
    ],
    createdAt: "2026-08-11",
  }),
  makeProduct({
    id: "p-b002",
    slug: "dastband-paperclip-chain",
    name: "دستبند زنجیر پلاکی",
    category: "bracelet",
    priceToman: 29_700_000,
    weightGram: 3.8,
    image: "/img/products/real/bracelet-pendants.jpg",
    desc: "زنجیر پلاکی با آویز دایره و مثلث؛ طراحی مدرن و سبک.",
    description:
      "این دستبند با حلقه‌های پلاکی و دو آویز هندسی، ظاهری مدرن و متفاوت دارد. وزن سبک آن باعث می‌شود در طول روز آزاردهنده نباشد و برای ست کردن با دستبندهای ظریف دیگر مناسب است.",
    badges: ["جدید"],
    featured: true,
    stock: 9,
    rating: 4.7,
    reviews: 45,
    sizes: ["۱۶ سانتی‌متر", "۱۷ سانتی‌متر", "۱۸ سانتی‌متر"],
    specs: [
      { label: "طول", value: "۱۷ سانتی‌متر" },
      { label: "آویز", value: "دایره و مثلث" },
    ],
    createdAt: "2026-11-10",
  }),
  makeProduct({
    id: "p-b003",
    slug: "dastband-floral",
    name: "دستبند گل‌برگی",
    category: "bracelet",
    priceToman: 48_500_000,
    weightGram: 6.4,
    image: "/img/products/real/bracelet-floral.jpg",
    desc: "بند مشبک با گل‌های برجسته؛ ترکیبی از ظرافت و شکوه.",
    description:
      "دستبند گل‌برگی با بند مشبک و گل‌های برجسته، یکی از قطعات خاص کلکسیون سون زر است. پرداخت صیقلی و طراحی متقارن، آن را به گزینه‌ای مناسب برای هدیه تبدیل می‌کند.",
    badges: ["دست‌ساز"],
    featured: false,
    stock: 3,
    rating: 4.9,
    reviews: 38,
    sizes: ["۱۷ سانتی‌متر", "۱۸ سانتی‌متر"],
    specs: [
      { label: "طول", value: "۱۸ سانتی‌متر" },
      { label: "طرح", value: "گل‌برگی برجسته" },
    ],
    createdAt: "2026-06-30",
  }),
  makeProduct({
    id: "p-b004",
    slug: "dastband-feather-diamond",
    name: "دستبند پر نگین‌دار",
    category: "bracelet",
    priceToman: 24_800_000,
    weightGram: 2.9,
    image: "/img/products/real/bracelet-diamond.jpg",
    desc: "طرح پر با نگین‌های درخشان و زنجیر قابل تنظیم.",
    description:
      "آویز پر با نگین‌های ریز، روی زنجیر نازک و قابل تنظیم قرار گرفته است. این دستبند سبک و ظریف، برای هدیه‌های کوچک و استفاده روزمره انتخاب خوبی است.",
    badges: [],
    featured: false,
    stock: 11,
    rating: 4.6,
    reviews: 51,
    sizes: ["۱۶ سانتی‌متر", "۱۷ سانتی‌متر", "۱۸ سانتی‌متر"],
    specs: [
      { label: "طول", value: "قابل تنظیم تا ۱۸ سانتی‌متر" },
      { label: "نگین", value: "نگین تزئینی" },
    ],
    createdAt: "2026-05-22",
  }),
  makeProduct({
    id: "p-e001",
    slug: "goshvare-hoop",
    name: "گوشواره حلقه‌ای طلا",
    category: "earring",
    priceToman: 19_600_000,
    weightGram: 2.4,
    image: "/img/products/real/earring-hoop.jpg",
    desc: "حلقه‌های سبک با قفل فنری مطمئن؛ مناسب استفاده روزانه.",
    description:
      "گوشواره‌های حلقه‌ای با سطح شیاردار و پرداخت براق، درخشش زیبایی در نور دارند. قفل فنری محکم است و وزن سبک آن‌ها باعث راحتی در استفاده طولانی می‌شود.",
    badges: ["پرفروش"],
    featured: true,
    stock: 12,
    rating: 4.8,
    reviews: 110,
    sizes: ["تک سایز"],
    specs: [
      { label: "قطر", value: "۲.۲ سانتی‌متر" },
      { label: "قفل", value: "فنری" },
    ],
    createdAt: "2026-09-01",
  }),
  makeProduct({
    id: "p-e002",
    slug: "goshvare-drop-rose",
    name: "گوشواره آویز رزگلد",
    category: "earring",
    priceToman: 28_400_000,
    weightGram: 3.6,
    image: "/img/products/real/earring-drop.jpg",
    desc: "آویز متحرک با پرداخت رزگلد و نگین‌های ظریف.",
    description:
      "آویز قطره‌ای متحرک با پرداخت رزگلد و نگین‌های ریز، حرکتی نرم و درخششی ملایم دارد. این گوشواره برای مهمانی‌های عصرانه و ست کردن با گردنبندهای ظریف طراحی شده است.",
    badges: ["جدید"],
    featured: true,
    stock: 6,
    rating: 4.7,
    reviews: 62,
    sizes: ["تک سایز"],
    specs: [
      { label: "طول آویز", value: "۳.۵ سانتی‌متر" },
      { label: "رنگ", value: "رزگلد" },
    ],
    colors: ["رزگلد", "طلایی"],
    createdAt: "2026-11-01",
  }),
  makeProduct({
    id: "p-e003",
    slug: "goshvare-stud-diamond",
    name: "گوشواره میخی نگین‌دار",
    category: "earring",
    priceToman: 16_900_000,
    oldPriceToman: 18_900_000,
    weightGram: 1.9,
    image: "/img/products/real/earring-stud.jpg",
    desc: "میخ‌های الماسی با قفل پیچی؛ درخشش مینیمال برای هر روز.",
    description:
      "این گوشواره‌های میخی با نگین الماسی و قفل پیچی، ساده اما درخشان هستند. اندازه کوچک آن‌ها باعث می‌شود برای استفاده روزمره و حتی زیر روسری هم راحت باشند.",
    badges: ["٪۱۱ تخفیف"],
    featured: false,
    stock: 15,
    rating: 4.9,
    reviews: 74,
    sizes: ["تک سایز"],
    specs: [
      { label: "قطر نگین", value: "۶ میلی‌متر" },
      { label: "قفل", value: "پیچی ایمن" },
    ],
    createdAt: "2026-04-15",
  }),
  makeProduct({
    id: "p-e004",
    slug: "goshvare-traditional",
    name: "گوشواره آویز سنتی",
    category: "earring",
    priceToman: 37_500_000,
    weightGram: 4.8,
    image: "/img/products/real/earring-silk.jpg",
    desc: "آویز سنتی با میناکاری و مروارید؛ مناسب مراسم و عروسی.",
    description:
      "این گوشواره با طرح سنتی، میناکاری رنگی و آویزهای مرواریدی، برای مراسم و لباس‌های محلی و عروس مناسب است. جزئیات دست‌ساز آن در هر جفت کمی متفاوت و یگانه است.",
    badges: ["دست‌ساز"],
    featured: false,
    stock: 4,
    rating: 4.8,
    reviews: 29,
    sizes: ["تک سایز"],
    specs: [
      { label: "طول آویز", value: "۵ سانتی‌متر" },
      { label: "جزئیات", value: "میناکاری و مروارید" },
    ],
    createdAt: "2026-03-08",
  }),
  makeProduct({
    id: "p-r001",
    slug: "angoshtar-triple-stone",
    name: "انگشتر سه‌نگین باریک",
    category: "ring",
    priceToman: 25_700_000,
    weightGram: 3.2,
    image: "/img/products/real/ring-solitaire.jpg",
    desc: "سه نگین باگت روی بند باریک؛ طراحی مینیمال و شیک.",
    description:
      "سه نگین باگت در کنار هم روی بندی باریک و ساده نشسته‌اند. این انگشتر برای کسانی مناسب است که درخشش ملایم و طراحی مینیمال را ترجیح می‌دهند. سایز انگشتر پس از سفارش قابل انتخاب است.",
    badges: [],
    featured: true,
    stock: 8,
    rating: 4.7,
    reviews: 48,
    sizes: ["۵۰", "۵۲", "۵۴", "۵۶", "۵۸"],
    specs: [
      { label: "سایز", value: "۵۰ تا ۵۸ (قابل انتخاب)" },
      { label: "نگین", value: "سه نگین باگت" },
    ],
    createdAt: "2026-10-14",
  }),
  makeProduct({
    id: "p-r002",
    slug: "angoshtar-solitaire",
    name: "انگشتر سولیتر الماسی",
    category: "ring",
    priceToman: 34_900_000,
    weightGram: 4.1,
    image: "/img/products/real/ring-wide.jpg",
    desc: "نگین برجسته روی بند طلا؛ انتخاب کلاسیک برای نامزدی.",
    description:
      "نگین اوال برجسته این انگشتر، روی بندی از طلای ۱۸ عیار با سنگ‌های ریز اطراف نشسته است. طراحی کلاسیک و رسمی آن، گزینه‌ای محبوب برای نامزدی و هدیه‌های ماندگار است.",
    badges: ["لوکس"],
    featured: true,
    stock: 3,
    rating: 5,
    reviews: 36,
    sizes: ["۵۰", "۵۲", "۵۴", "۵۶"],
    specs: [
      { label: "سایز", value: "۵۰ تا ۵۶ (قابل انتخاب)" },
      { label: "نگین", value: "اوال برجسته" },
    ],
    createdAt: "2026-08-02",
  }),
  makeProduct({
    id: "p-r003",
    slug: "angoshtar-wide-heart",
    name: "انگشتر پهن قلب‌دار",
    category: "ring",
    priceToman: 40_600_000,
    weightGram: 5.2,
    image: "/img/products/real/ring-heart.jpg",
    desc: "بند پهن نگین‌نشان با قلب توپر؛ استایلی جسور و متفاوت.",
    description:
      "بند پهن این انگشتر با ردیف‌های نگین و قلب توپر در مرکز، ظاهری جسور و مدرن دارد. برای کسانی که به دنبال قطعه‌ای شاخص برای استایل روزمره هستند، انتخاب متفاوتی است.",
    badges: ["پرفروش"],
    featured: true,
    stock: 5,
    rating: 4.8,
    reviews: 31,
    sizes: ["۵۲", "۵۴", "۵۶", "۵۸"],
    specs: [
      { label: "سایز", value: "۵۲ تا ۵۸ (قابل انتخاب)" },
      { label: "عرض بند", value: "۸ میلی‌متر" },
    ],
    createdAt: "2026-09-19",
  }),
  makeProduct({
    id: "p-r004",
    slug: "angoshtar-ruby",
    name: "انگشتر یاقوت سرخ",
    category: "ring",
    priceToman: 31_800_000,
    weightGram: 3.7,
    image: "/img/products/real/ring-ruby.jpg",
    desc: "یاقوت سرخ با هاله نگین سفید؛ جلوه‌ای سلطنتی.",
    description:
      "یاقوت سرخ درشت در مرکز این انگشتر، با هاله‌ای از نگین‌های سفید احاطه شده است. ترکیب رنگ سرخ و طلایی، جلوهای کلاسیک و سلطنتی ایجاد می‌کند. مناسب مهمانی و مناسبت‌های خاص.",
    badges: ["خاص"],
    featured: false,
    stock: 2,
    rating: 4.9,
    reviews: 27,
    sizes: ["۵۲", "۵۴", "۵۶"],
    specs: [
      { label: "سایز", value: "۵۲ تا ۵۶ (قابل انتخاب)" },
      { label: "سنگ", value: "یاقوت سرخ تزئینی" },
    ],
    createdAt: "2026-07-05",
  }),
  makeProduct({
    id: "p-s001",
    slug: "set-bridal",
    name: "نیم‌ست عروس (گردنبند و گوشواره)",
    category: "set",
    priceToman: 72_500_000,
    oldPriceToman: 79_900_000,
    weightGram: 9.5,
    image: "/img/products/real/set-bridal.jpg",
    desc: "هماهنگی کامل طرح و جعبه کادویی لوکس؛ آماده برای روز خاص.",
    description:
      "نیم‌ست عروس سون زر شامل گردنبند و گوشواره با طرح هماهنگ است. مدال‌های دایره‌ای و جزئیات ظریف، در کنار هم مجموعه‌ای رسمی و ماندگار می‌سازند. این ست در جعبه کادویی لوکس و همراه گواهی اصالت ارسال می‌شود.",
    badges: ["پرفروش", "٪۹ تخفیف"],
    featured: true,
    stock: 2,
    rating: 5,
    reviews: 44,
    sizes: ["تک سایز"],
    specs: [
      { label: "شامل", value: "گردنبند + گوشواره" },
      { label: "طول گردنبند", value: "۴۵ سانتی‌متر" },
    ],
    createdAt: "2026-09-25",
  }),
  makeProduct({
    id: "p-s002",
    slug: "set-daily-butterfly",
    name: "ست روزانه پروانه",
    category: "set",
    priceToman: 61_900_000,
    oldPriceToman: 67_500_000,
    weightGram: 8.2,
    image: "/img/products/real/set-flatlay.jpg",
    desc: "گردنبند، دستبند و گوشواره با طرح پروانه؛ سبک و هماهنگ.",
    description:
      "ست پروانه شامل گردنبند، دستبند و گوشواره با طرح پروانه است. بافت مشبک و جزئیات ظریف، این ست را برای استفاده روزمره و هدیه مناسب می‌کند. هر قطعه را می‌توان جداگانه هم استفاده کرد.",
    badges: ["جدید", "٪۸ تخفیف"],
    featured: true,
    stock: 4,
    rating: 4.8,
    reviews: 39,
    sizes: ["تک سایز"],
    specs: [
      { label: "شامل", value: "گردنبند + دستبند + گوشواره" },
      { label: "طرح", value: "پروانه مشبک" },
    ],
    createdAt: "2026-11-08",
  }),
  makeProduct({
    id: "p-s003",
    slug: "set-gift-love",
    name: "ست هدیه LOVE",
    category: "set",
    priceToman: 51_400_000,
    weightGram: 6.8,
    image: "/img/products/real/set-daily.jpg",
    desc: "گردنبند پلاک LOVE با گوشواره میخی؛ بسته‌بندی هدیه.",
    description:
      "این ست شامل گردنبند پلاک LOVE و گوشواره میخی است و در بسته‌بندی هدیه ارسال می‌شود. طراحی ساده و روزمره آن، برای هدیه به دوستان و عزیزان انتخاب مطمئنی است.",
    badges: ["هدیه"],
    featured: false,
    stock: 6,
    rating: 4.7,
    reviews: 52,
    sizes: ["تک سایز"],
    specs: [
      { label: "شامل", value: "گردنبند + گوشواره" },
      { label: "پلاک", value: "LOVE" },
    ],
    createdAt: "2026-10-28",
  }),
];

export const testimonials = [
  {
    id: "t1",
    name: "مریم احمدی",
    city: "مشهد",
    rating: 5,
    text: "گردنبند سنگ ماه رو برای هدیه خریدم. بسته‌بندی خیلی تمیز بود و دقیقاً همون چیزی بود که در عکس دیدم. حتماً دوباره خرید می‌کنم.",
    date: "۱۴۰۵/۰۸/۱۲",
  },
  {
    id: "t2",
    name: "سعید رضایی",
    city: "سبزوار",
    rating: 5,
    text: "برای سالگرد ازدواجمون ست پروانه رو سفارش دادم. پشتیبانی تلفنی خیلی خوب راهنمایی کرد و ارسال سریع بود.",
    date: "۱۴۰۵/۰۷/۲۹",
  },
  {
    id: "t3",
    name: "نگار کریمی",
    city: "تهران",
    rating: 4,
    text: "انگشتر سه‌نگین خیلی ظریف و شیکه. سایز رو با راهنمایی کارشناس انتخاب کردم و کاملاً اندازه بود.",
    date: "۱۴۰۵/۰۹/۰۳",
  },
  {
    id: "t4",
    name: "الهام موسوی",
    city: "نیشابور",
    rating: 5,
    text: "گوشواره حلقه‌ای رو هر روز می‌ندازم. سبک و خوش‌دست است و بعد از چند ماه هنوز برق اولش رو داره.",
    date: "۱۴۰۵/۰۶/۱۸",
  },
  {
    id: "t5",
    name: "امیر حسینی",
    city: "سبزوار",
    rating: 5,
    text: "خرید حضوری هم رفتم؛ گالری جمع‌وجور و خوش‌سلیقه‌ای بود. مشاوره صادقانه‌ای برای انتخاب عیار و وزن گرفتم.",
    date: "۱۴۰۵/۰۵/۰۷",
  },
];

export const articles = [
  {
    slug: "rahnama-kharid-gardanband",
    title: "راهنمای خرید گردنبند طلا؛ از انتخاب طول زنجیر تا نگهداری",
    excerpt:
      "قبل از خرید گردنبند طلا، طول زنجیر، نوع قفل و ضخامت بند را بشناسید تا قطعهای بخرید که سالها همراهتان بماند.",
    image: "/img/products/real/necklace-chain.jpg",
    category: "راهنمای خرید",
    date: "۱۴۰۵/۰۸/۲۰",
    readTime: "۶ دقیقه",
    content: [
      "انتخاب گردنبند طلا فقط به سلیقه بستگی ندارد؛ طول زنجیر، نوع قفل و ضخامت بند تعیین می‌کند که قطعه در استفاده روزمره راحت باشد یا نه. گردنبند ۴۰ سانتی‌متری روی استخوان جناغ می‌نشیند و برای پندنت‌های کوچک مناسب است.",
      "طول ۴۵ سانتی‌متر رایج‌ترین انتخاب است و با یقه‌های گرد و هفت‌سانتی هماهنگ می‌شود. اگر لباس‌های یقه‌باز می‌پوشید، طول ۵۰ سانتی‌متر یا بیشتر انتخاب بهتری است.",
      "نوع قفل را جدی بگیرید. قفل صدفی برای زنجیرهای سبک و متوسط مناسب است، اما برای زنجیرهای سنگین‌تر قفل جعبه‌ای یا قفل پیچی امنیت بیشتری دارد. همیشه پس از بستن، قفل را یک بار کنترل کنید.",
      "برای نگهداری، طلا را در جعبه جداگانه و دور از رطوبت نگه دارید. عطر و اسپری را قبل از انداختن زیورآلات استفاده کنید و برای تمیز کردن، از پارچه نرم و خشک یا آب ولرم و صابون ملایم کمک بگیرید.",
    ],
  },
  {
    slug: "andaze-angoshtar",
    title: "چطور اندازه انگشتر طلا را درست انتخاب کنیم؟",
    excerpt:
      "اندازه‌گیری درست انگشتر، مهم‌ترین قدم برای خرید آنلاین است. با یک نوار کاغذی ساده و چند نکته، سایز دقیق را پیدا کنید.",
    image: "/img/products/real/ring-heart.jpg",
    category: "راهنمای سایز",
    date: "۱۴۰۵/۰۹/۰۲",
    readTime: "۴ دقیقه",
    content: [
      "برای اندازه‌گیری انگشت، نواری کاغذی به عرض حدود یک سانتی‌متر را دور انگشت مورد نظر بپیچید. نقطه تلاقی را علامت بزنید و طول نوار را با خط‌کش اندازه بگیرید.",
      "محیط انگشت را با جدول سایز مقایسه کنید. اگر عدد شما بین دو سایز قرار گرفت، سایز بزرگ‌تر را انتخاب کنید؛ به‌ویژه در تابستان که انگشتان کمی متورم می‌شوند.",
      "اندازه‌گیری را در پایان روز انجام دهید. صبح‌ها انگشتان کمی باریک‌تر هستند و ممکن است سایز را اشتباه انتخاب کنید. همچنین از اندازه‌گیری در هوای بسیار سرد خودداری کنید.",
      "اگر بین دو سایز مطمئن نیستید، با شماره پشتیبانی سون زر تماس بگیرید. کارشناسان ما می‌توانند بر اساس سایز انگشتر فعلی شما، سایز مناسب را پیشنهاد دهند.",
    ],
  },
  {
    slug: "tala-18-ayar",
    title: "طلای ۱۸ عیار چیست و چه تفاوتی با ۲۴ عیار دارد؟",
    excerpt:
      "عیار نشان‌دهنده خلوص طلاست. در این مقاله توضیح می‌دهیم چرا طلای ۱۸ عیار برای زیورآلات بهترین تعادل بین خلوص و دوام را دارد.",
    image: "/img/site/about-display.jpg",
    category: "دانستنی‌های طلا",
    date: "۱۴۰۵/۰۷/۱۵",
    readTime: "۵ دقیقه",
    content: [
      "طلای خالص ۲۴ عیار است؛ یعنی ۹۹۹ یا ۹۹۹.۹ در هزار آن طلاست. اما طلای ۲۴ عیار بسیار نرم است و برای زیورآلات روزمره دوام کافی ندارد.",
      "طلای ۱۸ عیار دارای ۷۵۰ در هزار طلا و ۲۵۰ در هزار فلزات دیگر است. این ترکیب باعث می‌شود قطعه هم ارزش طلای بالایی داشته باشد و هم در برابر خط‌وخش و تغییر شکل مقاوم‌تر باشد.",
      "رنگ طلای ۱۸ عیار به فلزات آلیاژی بستگی دارد. طلای زرد، رزگلد و سفید همگی می‌توانند ۱۸ عیار باشند. رنگ تنها نشانه عیار نیست و باید حتماً با مهر و گواهی اصالت بررسی شود.",
      "در سون زر تمام قطعات با طلای ۱۸ عیار و گواهی اصالت ارائه می‌شوند. وزن و عیار هر قطعه در مشخصات محصول ذکر شده است.",
    ],
  },
  {
    slug: "set-kardan-zivar",
    title: "ست کردن زیورآلات طلا برای مهمانی و استفاده روزمره",
    excerpt:
      "چند نکته ساده برای هماهنگ کردن گردنبند، گوشواره و دستبند؛ بدون اینکه استایل شلوغ یا overdressed به نظر برسد.",
    image: "/img/products/real/set-flatlay.jpg",
    category: "استایل",
    date: "۱۴۰۵/۰۶/۲۵",
    readTime: "۴ دقیقه",
    content: [
      "قانون ساده‌ای وجود دارد: یک قطعه شاخص و بقیه مکمل. اگر گردنبند پندنت بزرگی می‌اندازید، گوشواره‌های کوچک‌تر و دستبند ساده انتخاب کنید.",
      "برای مهمانی‌های رسمی، ست هماهنگ گردنبند و گوشواره همیشه جواب می‌دهد. برای استفاده روزمره، ترکیب یک زنجیر ظریف با گوشواره میخی و یک دستبند نازک، استایلی تمیز و آرام می‌سازد.",
      "رنگ فلز را با سایر اکسسوری‌ها هماهنگ کنید. اگر کیف و کفش شما جزئیات طلایی دارد، زیورآلات طلایی انتخاب طبیعی‌تری هستند. ترکیب طلا و نقره هم اگر آگاهانه انجام شود، جذاب است.",
      "در نهایت، راحتی از همه مهم‌تر است. قطعهای که سنگین یا گیراست، در طولانی‌مدت استفاده نمی‌شود. قبل از خرید، وزن و ابعاد قطعه را در نظر بگیرید.",
    ],
  },
  {
    slug: "negahdari-tala",
    title: "نگهداری از طلا؛ ۷ نکته ساده برای درخشش همیشگی",
    excerpt:
      "طلا با گذشت زمان کدر می‌شود، اما با چند عادت ساده می‌توانید درخشش آن را حفظ کنید و از هزینه‌های پولیش بی‌مورد جلوگیری کنید.",
    image: "/img/site/gift-flatlay.jpg",
    category: "نگهداری",
    date: "۱۴۰۵/۰۵/۱۰",
    readTime: "۳ دقیقه",
    content: [
      "زیورآلات طلا را جدا از هم نگه دارید. برخورد قطعات با هم باعث خط‌وخش ریز می‌شود. جعبه‌های پارچه‌ای یا کیسه‌های مخملی انتخاب مناسبی هستند.",
      "قبل از شنا، حمام و ورزش زیورآلات را دربیاورید. کلر استخر و مواد شوینده می‌توانند به سطح طلا آسیب بزنند.",
      "عطر، کرم و اسپری را اول استفاده کنید و بعد زیورآلات را بیندازید. مواد شیمیایی آرایشی می‌توانند لایه نازکی روی سطح طلا باقی بگذارند.",
      "برای تمیز کردن، از آب ولرم و صابون ملایم و یک مسواک نرم استفاده کنید. پس از شستشو، با پارچه نرم کاملاً خشک کنید. از مواد شوینده قوی و سفیدکننده استفاده نکنید.",
      "اگر قطعه شما سنگ یا مروارید دارد، آن را در آب نخوابانید. تمیز کردن سنگ‌ها بهتر است به صورت خشک و با پارچه نرم انجام شود.",
      "سالانه یک بار قطعات را برای بررسی قفل و سلامت بند به گالری بیاورید. تعمیر به‌موقع قفل، از گم شدن قطعه جلوگیری می‌کند.",
      "برای نگهداری طولانی‌مدت، زیورآلات را در محیط خشک و دور از نور مستقیم آفتاب نگه دارید.",
    ],
  },
];

export function getProductBySlug(slug) {
  return products.find((p) => p.slug === slug) ?? null;
}

export function getProductsByCategory(categoryId) {
  if (!categoryId) return products;
  return products.filter((p) => p.category === categoryId);
}

export function getFeaturedProducts(limit = 8) {
  return products.filter((p) => p.featured).slice(0, limit);
}

export function getNewProducts(limit = 4) {
  return [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, limit);
}

export function getSaleProducts() {
  return products.filter((p) => p.oldPriceToman);
}

export function getRelatedProducts(product, limit = 4) {
  if (!product) return [];
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit);
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) ?? null;
}

export function formatToman(amount) {
  return new Intl.NumberFormat("fa-IR").format(amount);
}

export function formatNumber(value) {
  return new Intl.NumberFormat("fa-IR").format(value);
}

export function getDiscountPercent(product) {
  if (!product.oldPriceToman) return 0;
  return Math.round(
    ((product.oldPriceToman - product.priceToman) / product.oldPriceToman) * 100
  );
}

export function getShippingCost(subtotal, method = "post") {
  if (method === "pickup") return 0;
  if (method === "express") return siteConfig.expressShippingCost;
  return subtotal >= siteConfig.freeShippingThreshold ? 0 : siteConfig.shippingCost;
}

export function getCategoryById(id) {
  return categories.find((c) => c.id === id) ?? null;
}
