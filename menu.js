const menuItems = [
  {
    "id": "wrap",
    "name": "شاورما عادي",
    "category": "shawarma",
    "price": 140,
    "description": "سندويش شاورما، 80 غرام.",
    "turkish": "Normal dürüm döner",
    "image": "photos/wrap.jpg",
    "sourceIndex": 59
  },
  {
    "id": "double",
    "name": "شاورما دبل",
    "category": "shawarma",
    "price": 200,
    "description": "سندويش شاورما، 120 غرام.",
    "turkish": "Double dolgu dürüm döner",
    "image": "photos/wrap.jpg",
    "sourceIndex": 60
  },
  {
    "id": "supernova",
    "name": "شاورما سوبرنوفا",
    "category": "shawarma",
    "price": 230,
    "description": "سندويش شاورما، 140 غرام.",
    "turkish": "Supernova dürüm döner",
    "image": "photos/wrap.jpg",
    "sourceIndex": 61
  },
  {
    "id": "gourmet-cheese",
    "name": "شاورما بخبز صمون بالجبنة",
    "category": "shawarma",
    "price": 240,
    "description": "خبز صمون محشوّ بـ110 غرام من شرائح شاورما الدجاج. مع جبنة القشقوان.",
    "turkish": "Kaşarlı Gurme Ekmeği Döner",
    "image": "product-gourmet.webp",
    "sourceIndex": 0
  },
  {
    "id": "wrap-cheese",
    "name": "شاورما عادي بالجبنة",
    "category": "shawarma",
    "price": 190,
    "description": "80 غرام من شاورما الدجاج في خبز ملفوف ومحمّص. مع جبنة القشقوان.",
    "image": "photos/wrap.jpg",
    "turkish": "Kaşarlı Dürüm Döner",
    "sourceIndex": 1
  },
  {
    "id": "supernova-cheese",
    "name": "شاورما سوبرنوفا بالجبنة",
    "category": "shawarma",
    "price": 305,
    "description": "140 غرام من شاورما الدجاج في خبز ملفوف ومحمّص. مع جبنة القشقوان.",
    "image": "photos/wrap.jpg",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Kaşarlı Dürüm Döner Supernova",
    "sourceIndex": 2
  },
  {
    "id": "double-cheese",
    "name": "شاورما دبل بالجبنة",
    "category": "shawarma",
    "price": 250,
    "description": "120 غرام من شاورما الدجاج في خبز ملفوف ومحمّص. مع جبنة القشقوان.",
    "image": "photos/wrap.jpg",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Kaşarlı Dürüm Döner Double Dolgu",
    "sourceIndex": 3
  },
  {
    "id": "wrap-fries",
    "name": "شاورما عادي مع بطاطس",
    "category": "shawarma",
    "price": 200,
    "turkish": "Dürüm Döner ve Patates Paketi",
    "description": "سندويش شاورما 80 غرام، مع كيس بطاطس وكريم الثوم.",
    "image": "product-wrap-fries.webp",
    "sourceIndex": 8
  },
  {
    "id": "double-fries",
    "name": "شاورما دبل مع بطاطس",
    "category": "shawarma",
    "price": 260,
    "turkish": "Double Dürüm Döner ve Patates Paketi",
    "description": "سندويش شاورما 120 غرام، مع كيس بطاطس وكريم الثوم.",
    "image": "product-wrap-fries.webp",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "sourceIndex": 9
  },
  {
    "id": "supernova-fries",
    "name": "شاورما سوبرنوفا مع بطاطس",
    "category": "shawarma",
    "price": 290,
    "turkish": "Supernova Dürüm Döner ve Patates Paketi",
    "description": "سندويش شاورما 140 غرام، مع كيس بطاطس وكريم الثوم.",
    "image": "product-wrap-fries.webp",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "sourceIndex": 10
  },
  {
    "id": "gourmet",
    "name": "شاورما بخبز صمون",
    "category": "shawarma",
    "price": 190,
    "description": "خبز صمون محشوّ بـ110 غرام من شرائح شاورما الدجاج.",
    "turkish": "Gurme Ekmeği Döner",
    "image": "product-gourmet.webp",
    "sourceIndex": 14
  },
  {
    "id": "finger",
    "name": "إصبع شاورما",
    "category": "shawarma",
    "price": 90,
    "description": "لفّة شاورما صغيرة ومحمّصة، بحشوة 55 غرام من الدجاج.",
    "turkish": "Mini Döner",
    "image": "product-finger.webp",
    "retouched": true,
    "sourceIndex": 18
  },
  {
    "id": "gourmet-double",
    "name": "شاورما صمون دبل",
    "category": "shawarma",
    "price": 260,
    "turkish": "Double Dolgu Gurme Ekmeği Döner",
    "description": "خبز صمون محشوّ بـ140 غرام من شرائح شاورما الدجاج.",
    "image": "product-gourmet.webp",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "sourceIndex": 19
  },
  {
    "id": "portion",
    "name": "وجبة شاورما شرائح",
    "category": "portions",
    "price": 300,
    "description": "180 غرام من شرائح الشاورما المحمّرة، مع البطاطس والخضار والمخلل وكول سلو وصوصات المايونيز الحار والبارد.",
    "image": "clean-portion.webp",
    "turkish": "Porsiyon Döner Menü",
    "sourceIndex": 21
  },
  {
    "id": "portion-super",
    "name": "وجبة شاورما شرائح سوبر",
    "category": "portions",
    "price": 380,
    "description": "240 غرام من شرائح الشاورما المحمّرة، مع البطاطس والخضار والمخلل وكول سلو وصوصات المايونيز الحار والبارد.",
    "image": "clean-portion.webp",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Süper Porsiyon Döner",
    "sourceIndex": 25
  },
  {
    "id": "half-kilo",
    "name": "نصف كيلو شاورما",
    "category": "portions",
    "price": 550,
    "description": "500 غرام من شرائح الشاورما المحمّرة، مع بطاطس ورغيفين محمّرين وخضار ومخلل، و3 كول سلو و3 مايونيز و2 مايونيز حار ودبس.",
    "image": "photos/family-meal.jpg",
    "turkish": "Yarım Kilo Döner Paket",
    "sourceIndex": 26
  },
  {
    "id": "rice-doner",
    "name": "شاورما مع رز",
    "category": "portions",
    "price": 220,
    "description": "أرز أبيض مع 80 غرام من شرائح الشاورما، يُقدّم مع عيران ومخلل الفلفل والشطّة.",
    "image": "clean-rice-doner.webp",
    "turkish": "Pilav Üstü Döner",
    "sourceIndex": 28
  },
  {
    "id": "arabic-bun-cheese",
    "name": "شاورما عربي بخبز صمون بالجبنة",
    "category": "arabic",
    "price": 330,
    "description": "6 قطع شاورما بخبز الصمون، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم. مع جبنة القشقوان.",
    "image": "clean-arabic-bun.webp",
    "turkish": "Kaşarlı Gurme Ekmeği Arap Döner Menü",
    "sourceIndex": 4
  },
  {
    "id": "arabic-double-cheese",
    "name": "شاورما عربي دبل بالجبنة",
    "category": "arabic",
    "price": 490,
    "description": "12 قطعة شاورما عربي، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم. مع جبنة القشقوان.",
    "image": "photos/arabic-cheese.jpg",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Kaşarlı Double Arap Döner Menü",
    "sourceIndex": 5
  },
  {
    "id": "arabic-super-cheese",
    "name": "شاورما عربي سوبر بالجبنة",
    "category": "arabic",
    "price": 410,
    "description": "9 قطع شاورما عربي، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم. مع جبنة القشقوان.",
    "image": "photos/arabic-cheese.jpg",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Kaşarlı Süper Arap Döner Menü",
    "sourceIndex": 6
  },
  {
    "id": "arabic-cheese",
    "name": "شاورما عربي عادي بالجبنة",
    "category": "arabic",
    "price": 300,
    "description": "6 قطع شاورما عربي، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم. مع جبنة القشقوان.",
    "image": "photos/arabic-cheese.jpg",
    "turkish": "Kaşarlı Arap Döner Menü",
    "sourceIndex": 7
  },
  {
    "id": "arabic",
    "name": "شاورما عربي عادي",
    "category": "arabic",
    "price": 250,
    "description": "6 قطع شاورما عربي، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم.",
    "image": "photos/arabic-cheese.jpg",
    "turkish": "Arap Döner Menü",
    "sourceIndex": 20
  },
  {
    "id": "arabic-bun",
    "name": "شاورما عربي بخبز صمون",
    "category": "arabic",
    "price": 280,
    "description": "6 قطع شاورما بخبز الصمون، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم.",
    "image": "clean-arabic-bun.webp",
    "turkish": "Gurme Ekmeği Arap Döner Menü",
    "sourceIndex": 22
  },
  {
    "id": "arabic-super",
    "name": "شاورما عربي سوبر",
    "category": "arabic",
    "price": 335,
    "description": "9 قطع شاورما عربي، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم.",
    "image": "photos/arabic-cheese.jpg",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Süper Arap Döner Menü",
    "sourceIndex": 23
  },
  {
    "id": "arabic-double",
    "name": "شاورما عربي دبل",
    "category": "arabic",
    "price": 390,
    "description": "12 قطعة شاورما عربي، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم.",
    "image": "photos/arabic-cheese.jpg",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Double Arap Döner Menü",
    "sourceIndex": 24
  },
  {
    "id": "bohca",
    "name": "صُرّة شاورما",
    "category": "special",
    "price": 400,
    "description": "رغيفا صاج محشوّان بـ125 غرام من الشاورما مع الفطر والموزاريلا، وبطاطس وثوم ومخلل وكول سلو. تُقدّم مع كولا.",
    "image": "photos/round-meal.jpg",
    "turkish": "Bohça Döner Menü",
    "sourceIndex": 30
  },
  {
    "id": "crispy-sandwich",
    "name": "سندويش كرسبي",
    "category": "crispy",
    "price": 200,
    "description": "دجاج كرسبي مقرمش مع الخس والصوص في خبز بالسمسم.",
    "turkish": "Çıtır Tavuk Sandviç",
    "image": "product-crispy-sandwich.webp",
    "retouched": true,
    "sourceIndex": 16
  },
  {
    "id": "zinger-sandwich",
    "name": "سندويش زنجر",
    "category": "crispy",
    "price": 220,
    "description": "دجاج زنجر مقرمش بصوص حار، مع الخس والصوص في خبز بالسمسم.",
    "turkish": "Zincer Sandviç",
    "image": "product-zinger-sandwich.webp",
    "retouched": true,
    "sourceIndex": 17
  },
  {
    "id": "combo",
    "name": "كومبو",
    "category": "potatoes",
    "price": 220,
    "description": "طبق بطاطس مع صوصات الشيدر والباربكيو والكوكتيل، و3 أصابع جبنة و3 حلقات بصل.",
    "turkish": "Combo Patates",
    "image": "clean-product-combo.webp",
    "sourceIndex": 35
  },
  {
    "id": "bbq-fries",
    "name": "بطاطس بنكهة الباربكيو",
    "category": "potatoes",
    "price": 175,
    "description": "طبق بطاطس مقلية مع صوص الباربكيو.",
    "turkish": "Barbekülü Patates",
    "image": "clean-product-bbq-fries.webp",
    "sourceIndex": 36
  },
  {
    "id": "fries",
    "name": "طبق بطاطس",
    "category": "potatoes",
    "price": 150,
    "description": "طبق بطاطس مقلية متبّلة، مع الثوم والكاتشب.",
    "image": "clean-fries.webp",
    "turkish": "Baharatlı Patates",
    "sourceIndex": 37
  },
  {
    "id": "cheddar-fries",
    "name": "بطاطس بجبنة شيدر",
    "category": "potatoes",
    "price": 200,
    "description": "طبق بطاطس مقلية مغطّى بصوص جبنة الشيدر.",
    "turkish": "Cheddarlı Patates",
    "image": "clean-product-cheddar-fries.webp",
    "sourceIndex": 39
  },
  {
    "id": "spicy-fries",
    "name": "بطاطس حارة مميزة",
    "category": "potatoes",
    "price": 175,
    "description": "بطاطس بالصوص الحار، مع شرائح الفلفل.",
    "turkish": "Spesiyal Acılı Patates",
    "image": "product-spicy-fries.webp",
    "retouched": true,
    "sourceIndex": 40
  },
  {
    "id": "onion-rings",
    "name": "حلقات بصل",
    "category": "extras",
    "price": 50,
    "description": "6 قطع من حلقات البصل المقرمشة.",
    "turkish": "Soğan Halkası",
    "image": "clean-product-onion-rings.webp",
    "sourceIndex": 32
  },
  {
    "id": "potato-pack",
    "name": "كيس بطاطس",
    "category": "extras",
    "price": 60,
    "description": "كيس صغير من البطاطس المقلية.",
    "turkish": "Patates Paketi",
    "image": "product-potato-pack.webp",
    "sourceIndex": 33
  },
  {
    "id": "cheese-sticks",
    "name": "أصابع جبنة",
    "category": "extras",
    "price": 100,
    "description": "6 أصابع من جبنة الموزاريلا المقرمشة.",
    "turkish": "Peynir Çubukları",
    "image": "product-cheese-sticks.webp",
    "sourceIndex": 34
  },
  {
    "id": "coleslaw",
    "name": "سلطة كول سلو",
    "category": "sauces",
    "price": 30,
    "description": "علبة سلطة كول سلو جانبية.",
    "turkish": "Coleslaw Salatası",
    "image": "clean-product-coleslaw.webp",
    "sourceIndex": 54
  },
  {
    "id": "hot",
    "name": "صوص حار",
    "category": "sauces",
    "price": 30,
    "description": "صوص حار — علبة 80 غرام.",
    "turkish": "Acılı Sos",
    "image": "clean-product-hot.webp",
    "sourceIndex": 55
  },
  {
    "id": "cheddar",
    "name": "صوص جبنة شيدر",
    "category": "sauces",
    "price": 85,
    "description": "صوص جبنة الشيدر — علبة 80 غرام.",
    "turkish": "Cheddar Sos",
    "image": "clean-product-cheddar.webp",
    "sourceIndex": 56
  },
  {
    "id": "cocktail",
    "name": "صوص كوكتيل",
    "category": "sauces",
    "price": 30,
    "description": "صوص كوكتيل — علبة 80 غرام.",
    "turkish": "Kokteyl Sos",
    "image": "clean-product-cocktail.webp",
    "sourceIndex": 57
  },
  {
    "id": "garlic",
    "name": "صوص الثوم",
    "category": "sauces",
    "price": 30,
    "description": "صوص الثوم — علبة 80 غرام.",
    "turkish": "Sarımsaklı Mayonez",
    "image": "clean-product-garlic.webp",
    "sourceIndex": 58
  },
  {
    "id": "pepsi",
    "name": "بيبسي",
    "category": "drinks",
    "price": 70,
    "turkish": "Pepsi Kola",
    "description": "مشروب بيبسي كولا.",
    "image": "product-pepsi.webp",
    "sourceIndex": 42
  },
  {
    "id": "iced-tea",
    "name": "شاي بارد",
    "category": "drinks",
    "price": 50,
    "turkish": "Soğuk Çay",
    "description": "شاي ديدي البارد بنكهة الخوخ.",
    "image": "product-iced-tea.webp",
    "sourceIndex": 43
  },
  {
    "id": "cola",
    "name": "كولا بروكس",
    "category": "drinks",
    "price": 50,
    "description": "كولا بروكس — علبة 330 مل.",
    "turkish": "Kola",
    "image": "product-cola.webp",
    "sourceIndex": 44
  },
  {
    "id": "ayran",
    "name": "لبن عيران",
    "category": "drinks",
    "price": 40,
    "description": "لبن عيران إيتشيم.",
    "turkish": "Ayran",
    "image": "product-ayran.webp",
    "sourceIndex": 45
  },
  {
    "id": "cola-zero",
    "name": "كولا زيرو",
    "category": "drinks",
    "price": 50,
    "turkish": "Şekersiz Kola",
    "description": "كولا بروكس زيرو بدون سكر.",
    "image": "product-cola-zero.webp",
    "sourceIndex": 46
  },
  {
    "id": "water",
    "name": "ماء",
    "category": "drinks",
    "price": 20,
    "description": "مياه شرب — زجاجة 500 مل.",
    "turkish": "Su",
    "image": "product-water.webp",
    "sourceIndex": 47
  },
  {
    "id": "juice",
    "name": "عصير أناناس",
    "category": "drinks",
    "price": 40,
    "description": "مشروب جوس بقطع الأناناس.",
    "turkish": "Ananas Meyve Suyu",
    "image": "product-pineapple.webp",
    "sourceIndex": 48
  },
  {
    "id": "mango",
    "name": "عصير مانجو",
    "category": "drinks",
    "price": 40,
    "turkish": "Mango Meyve Suyu",
    "description": "مشروب جوس بقطع المانجو.",
    "image": "clean-product-mango.webp",
    "sourceIndex": 49
  },
  {
    "id": "gazoz",
    "name": "بروكس ليمون",
    "category": "drinks",
    "price": 50,
    "description": "مشروب بروكس الغازي بنكهة الليمون — 250 مل.",
    "turkish": "Limon Aromalı Gazoz",
    "image": "product-gazoz.webp",
    "sourceIndex": 50
  },
  {
    "id": "fanta",
    "name": "بروكس برتقال",
    "category": "drinks",
    "price": 50,
    "description": "مشروب بروكس الغازي بنكهة البرتقال — 250 مل.",
    "turkish": "Portakal Aromalı Gazoz",
    "image": "product-fanta.webp",
    "sourceIndex": 51
  },
  {
    "id": "orange",
    "name": "عصير برتقال",
    "category": "drinks",
    "price": 40,
    "turkish": "Portakal Meyve Suyu",
    "description": "مشروب جوس بقطع البرتقال.",
    "image": "product-orange.webp",
    "sourceIndex": 52
  },
  {
    "id": "peach",
    "name": "عصير خوخ",
    "category": "drinks",
    "price": 40,
    "turkish": "Şeftali Meyve Suyu",
    "description": "مشروب جوس بقطع الخوخ.",
    "image": "product-peach.webp",
    "sourceIndex": 53
  }
];
