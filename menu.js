const menuItems=[
  {
    "id": "wrap",
    "name": "شاورما عادي",
    "category": "shawarma",
    "price": 140,
    "description": "80 غرام من شاورما الدجاج في خبز ملفوف ومحمّص.",
    "image": "photos/wrap.jpg",
    "cheese": 50,
    "turkish": "Dürüm Döner"
  },
  {
    "id": "double",
    "name": "شاورما دبل",
    "category": "shawarma",
    "price": 200,
    "description": "120 غرام من شاورما الدجاج في خبز ملفوف ومحمّص.",
    "image": "photos/wrap.jpg",
    "cheese": 50,
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Dürüm Döner Double Dolgu"
  },
  {
    "id": "supernova",
    "name": "شاورما سوبرنوفا",
    "category": "shawarma",
    "price": 230,
    "description": "140 غرام من شاورما الدجاج في خبز ملفوف ومحمّص.",
    "image": "photos/wrap.jpg",
    "cheese": 75,
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Dürüm Döner Supernova"
  },
  {
    "id": "gourmet",
    "name": "شاورما بخبز صمون",
    "category": "shawarma",
    "price": 190,
    "description": "خبز صمون محشوّ بـ110 غرام من شرائح شاورما الدجاج.",
    "cheese": 50,
    "turkish": "Gurme Ekmeği Döner",
    "image": "product-gourmet.webp",
    "cheeseImage": "product-gourmet.webp"
  },
  {
    "id": "finger",
    "name": "إصبع شاورما",
    "category": "shawarma",
    "price": 90,
    "description": "لفّة شاورما صغيرة ومحمّصة، بحشوة 55 غرام من الدجاج.",
    "turkish": "Mini Döner",
    "image": "product-finger.webp",
    "retouched": true
  },
  {
    "id": "gourmet-double",
    "name": "شاورما صمون دبل",
    "category": "shawarma",
    "price": 260,
    "turkish": "Double Dolgu Gurme Ekmeği Döner",
    "description": "خبز صمون محشوّ بـ140 غرام من شرائح شاورما الدجاج.",
    "image": "product-gourmet.webp",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار."
  },
  {
    "id": "wrap-fries",
    "name": "شاورما عادي مع بطاطس",
    "category": "shawarma",
    "price": 200,
    "turkish": "Dürüm Döner ve Patates Paketi",
    "description": "سندويش شاورما 80 غرام، مع كيس بطاطس وكريم الثوم.",
    "image": "product-wrap-fries.webp"
  },
  {
    "id": "double-fries",
    "name": "شاورما دبل مع بطاطس",
    "category": "shawarma",
    "price": 260,
    "turkish": "Double Dürüm Döner ve Patates Paketi",
    "description": "سندويش شاورما 120 غرام، مع كيس بطاطس وكريم الثوم.",
    "image": "product-wrap-fries.webp",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار."
  },
  {
    "id": "supernova-fries",
    "name": "شاورما سوبرنوفا مع بطاطس",
    "category": "shawarma",
    "price": 290,
    "turkish": "Supernova Dürüm Döner ve Patates Paketi",
    "description": "سندويش شاورما 140 غرام، مع كيس بطاطس وكريم الثوم.",
    "image": "product-wrap-fries.webp",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار."
  },
  {
    "id": "potato-wrap",
    "name": "سندويش بطاطس بخبز سياحي",
    "category": "shawarma",
    "price": 140,
    "description": "سندويش بطاطس في خبز سياحي.",
    "turkish": "Lavaş Patates Dürüm"
  },
  {
    "id": "potato-bun",
    "name": "سندويش بطاطس بخبز صمون",
    "category": "shawarma",
    "price": 160,
    "description": "سندويش بطاطس في خبز صمون.",
    "turkish": "Gurme Ekmeği Patates"
  },
  {
    "id": "portion",
    "name": "وجبة شاورما شرائح",
    "category": "portions",
    "price": 300,
    "description": "180 غرام من شرائح الشاورما المحمّرة، مع البطاطس والخضار والمخلل وكول سلو وصوصات المايونيز الحار والبارد.",
    "image": "photos/portion.jpg",
    "turkish": "Porsiyon Döner Menü"
  },
  {
    "id": "portion-super",
    "name": "وجبة شاورما شرائح سوبر",
    "category": "portions",
    "price": 380,
    "description": "240 غرام من شرائح الشاورما المحمّرة، مع البطاطس والخضار والمخلل وكول سلو وصوصات المايونيز الحار والبارد.",
    "image": "photos/portion.jpg",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Süper Porsiyon Döner"
  },
  {
    "id": "half-kilo",
    "name": "نصف كيلو شاورما",
    "category": "portions",
    "price": 550,
    "description": "500 غرام من شرائح الشاورما المحمّرة، مع بطاطس ورغيفين محمّرين وخضار ومخلل، و3 كول سلو و3 مايونيز و2 مايونيز حار ودبس.",
    "image": "photos/family-meal.jpg",
    "turkish": "Yarım Kilo Döner Paket"
  },
  {
    "id": "rice-doner",
    "name": "شاورما مع رز",
    "category": "portions",
    "price": 220,
    "description": "أرز أبيض مع 80 غرام من شرائح الشاورما، يُقدّم مع عيران ومخلل الفلفل والشطّة.",
    "image": "photos/rice-doner.jpg",
    "turkish": "Pilav Üstü Döner"
  },
  {
    "id": "rice",
    "name": "رز أبيض سادة",
    "category": "portions",
    "price": 110,
    "description": "طبق أرز أبيض سادة.",
    "turkish": "Sade Pilav"
  },
  {
    "id": "arabic",
    "name": "شاورما عربي عادي",
    "category": "arabic",
    "price": 250,
    "description": "6 قطع شاورما عربي، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم.",
    "cheese": 50,
    "image": "photos/arabic-cheese.jpg",
    "cheeseImage": "photos/arabic-cheese.jpg",
    "turkish": "Arap Döner Menü"
  },
  {
    "id": "arabic-super",
    "name": "شاورما عربي سوبر",
    "category": "arabic",
    "price": 335,
    "description": "9 قطع شاورما عربي، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم.",
    "cheese": 75,
    "image": "photos/arabic-cheese.jpg",
    "cheeseImage": "photos/arabic-cheese.jpg",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Süper Arap Döner Menü"
  },
  {
    "id": "arabic-double",
    "name": "شاورما عربي دبل",
    "category": "arabic",
    "price": 390,
    "description": "12 قطعة شاورما عربي، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم.",
    "cheese": 100,
    "image": "photos/arabic-cheese.jpg",
    "cheeseImage": "photos/arabic-cheese.jpg",
    "imageNote": "صورة الصنف؛ الكمية حسب الحجم المختار.",
    "turkish": "Double Arap Döner Menü"
  },
  {
    "id": "arabic-bun",
    "name": "شاورما عربي بخبز صمون",
    "category": "arabic",
    "price": 280,
    "description": "6 قطع شاورما بخبز الصمون، مع البطاطس والخضار والمخلل وكول سلو وكريم الثوم.",
    "cheese": 50,
    "image": "photos/arabic-bun.jpg",
    "turkish": "Gurme Ekmeği Arap Döner Menü"
  },
  {
    "id": "bohca",
    "name": "صُرّة شاورما",
    "category": "special",
    "price": 400,
    "description": "رغيفا صاج محشوّان بـ125 غرام من الشاورما مع الفطر والموزاريلا، وبطاطس وثوم ومخلل وكول سلو. تُقدّم مع كولا.",
    "image": "photos/round-meal.jpg",
    "turkish": "Bohça Döner Menü"
  },
  {
    "id": "maria",
    "name": "ماريا إكسترا",
    "category": "special",
    "price": 375,
    "description": "150 غرام شاورما بين طبقتي خبز لافاش، مع قشقوان وصوص فطر. تُقدّم مع مقبلات وبطاطس وصوصات.",
    "turkish": "Maria Extra Menüsü"
  },
  {
    "id": "zinger-sandwich",
    "name": "سندويش زنجر",
    "category": "crispy",
    "price": 220,
    "description": "دجاج زنجر مقرمش بصوص حار، مع الخس والصوص في خبز بالسمسم.",
    "turkish": "Zincer Sandviç",
    "image": "product-zinger-sandwich.webp",
    "retouched": true
  },
  {
    "id": "crispy-sandwich",
    "name": "سندويش كرسبي",
    "category": "crispy",
    "price": 200,
    "description": "دجاج كرسبي مقرمش مع الخس والصوص في خبز بالسمسم.",
    "turkish": "Çıtır Tavuk Sandviç",
    "image": "product-crispy-sandwich.webp",
    "retouched": true
  },
  {
    "id": "zinger-meal",
    "name": "وجبة زنجر حار",
    "category": "crispy",
    "price": 320,
    "description": "وجبة زنجر بالدجاج الحار.",
    "turkish": "Zincer Menü (Acılı)"
  },
  {
    "id": "crispy",
    "name": "وجبة كرسبي",
    "category": "crispy",
    "price": 300,
    "description": "وجبة دجاج كرسبي مقرمش.",
    "turkish": "Çıtır Tavuk Menü"
  },
  {
    "id": "fries",
    "name": "طبق بطاطس",
    "category": "potatoes",
    "price": 150,
    "description": "طبق بطاطس مقلية متبّلة، مع الثوم والكاتشب.",
    "image": "photos/fries.jpg",
    "turkish": "Baharatlı Patates"
  },
  {
    "id": "bbq-fries",
    "name": "بطاطس بنكهة الباربكيو",
    "category": "potatoes",
    "price": 175,
    "description": "طبق بطاطس مقلية مع صوص الباربكيو.",
    "turkish": "Barbekülü Patates",
    "image": "product-bbq-fries.webp"
  },
  {
    "id": "cheddar-fries",
    "name": "بطاطس بجبنة شيدر",
    "category": "potatoes",
    "price": 200,
    "description": "طبق بطاطس مقلية مغطّى بصوص جبنة الشيدر.",
    "turkish": "Cheddarlı Patates",
    "image": "product-cheddar-fries.webp"
  },
  {
    "id": "spicy-fries",
    "name": "بطاطس حارة مميزة",
    "category": "potatoes",
    "price": 175,
    "description": "بطاطس بالصوص الحار، مع شرائح الفلفل.",
    "turkish": "Spesiyal Acılı Patates",
    "image": "product-spicy-fries.webp",
    "retouched": true
  },
  {
    "id": "combo",
    "name": "كومبو",
    "category": "potatoes",
    "price": 220,
    "description": "طبق بطاطس مع صوصات الشيدر والباربكيو والكوكتيل، و3 أصابع جبنة و3 حلقات بصل.",
    "turkish": "Combo Patates",
    "image": "product-combo.webp"
  },
  {
    "id": "potato-pack",
    "name": "كيس بطاطس",
    "category": "extras",
    "price": 60,
    "description": "كيس صغير من البطاطس المقلية.",
    "turkish": "Patates Paketi",
    "image": "product-potato-pack.webp"
  },
  {
    "id": "cheese-sticks",
    "name": "أصابع جبنة",
    "category": "extras",
    "price": 100,
    "description": "6 أصابع من جبنة الموزاريلا المقرمشة.",
    "turkish": "Peynir Çubukları",
    "image": "product-cheese-sticks.webp"
  },
  {
    "id": "onion-rings",
    "name": "حلقات بصل",
    "category": "extras",
    "price": 50,
    "description": "6 قطع من حلقات البصل المقرمشة.",
    "turkish": "Soğan Halkası",
    "image": "product-onion-rings.webp"
  },
  {
    "id": "mixed-box",
    "name": "علبة مشكلة",
    "category": "extras",
    "price": 100,
    "description": "علبة مشكلة من 3 أصابع جبنة و3 حلقات بصل.",
    "turkish": "Karışık Kutu"
  },
  {
    "id": "muhamara",
    "name": "محمرة بالقشقوان",
    "category": "extras",
    "price": 150,
    "description": "محمرة مع جبنة القشقوان.",
    "turkish": "Kaşarlı Muhamara"
  },
  {
    "id": "mozzarella",
    "name": "إضافة جبنة موزاريلا",
    "category": "extras",
    "price": 50,
    "description": "إضافة موزاريلا لوجبتك؛ حدّد الصنف المطلوب في ملاحظات الطلب.",
    "turkish": "Mozzarella İlavesi"
  },
  {
    "id": "coleslaw",
    "name": "سلطة كول سلو",
    "category": "sauces",
    "price": 30,
    "description": "علبة سلطة كول سلو جانبية.",
    "turkish": "Coleslaw Salatası",
    "image": "product-coleslaw.webp"
  },
  {
    "id": "garlic",
    "name": "صوص الثوم",
    "category": "sauces",
    "price": 30,
    "description": "صوص الثوم — علبة 80 غرام.",
    "turkish": "Sarımsaklı Mayonez",
    "image": "product-garlic.webp"
  },
  {
    "id": "cocktail",
    "name": "صوص كوكتيل",
    "category": "sauces",
    "price": 30,
    "description": "صوص كوكتيل — علبة 80 غرام.",
    "turkish": "Kokteyl Sos",
    "image": "product-cocktail.webp"
  },
  {
    "id": "hot",
    "name": "صوص حار",
    "category": "sauces",
    "price": 30,
    "description": "صوص حار — علبة 80 غرام.",
    "turkish": "Acılı Sos",
    "image": "product-hot.webp"
  },
  {
    "id": "cheddar",
    "name": "صوص جبنة شيدر",
    "category": "sauces",
    "price": 85,
    "description": "صوص جبنة الشيدر — علبة 80 غرام.",
    "turkish": "Cheddar Sos",
    "image": "product-cheddar.webp"
  },
  {
    "id": "cola",
    "name": "كولا بروكس",
    "category": "drinks",
    "price": 50,
    "description": "كولا بروكس — علبة 330 مل.",
    "turkish": "Kola",
    "image": "product-cola.webp"
  },
  {
    "id": "fanta",
    "name": "بروكس برتقال",
    "category": "drinks",
    "price": 50,
    "description": "مشروب بروكس الغازي بنكهة البرتقال — 250 مل.",
    "turkish": "Portakal Aromalı Gazoz",
    "image": "product-fanta.webp"
  },
  {
    "id": "gazoz",
    "name": "بروكس ليمون",
    "category": "drinks",
    "price": 50,
    "description": "مشروب بروكس الغازي بنكهة الليمون — 250 مل.",
    "turkish": "Limon Aromalı Gazoz",
    "image": "product-gazoz.webp"
  },
  {
    "id": "juice",
    "name": "عصير أناناس",
    "category": "drinks",
    "price": 40,
    "description": "مشروب جوس بقطع الأناناس.",
    "turkish": "Ananas Meyve Suyu",
    "image": "product-pineapple.webp"
  },
  {
    "id": "ayran",
    "name": "لبن عيران",
    "category": "drinks",
    "price": 40,
    "description": "لبن عيران إيتشيم.",
    "turkish": "Ayran",
    "image": "product-ayran.webp"
  },
  {
    "id": "water",
    "name": "ماء",
    "category": "drinks",
    "price": 20,
    "description": "مياه شرب — زجاجة 500 مل.",
    "turkish": "Su",
    "image": "product-water.webp"
  },
  {
    "id": "pepsi",
    "name": "بيبسي",
    "category": "drinks",
    "price": 70,
    "turkish": "Pepsi Kola",
    "description": "مشروب بيبسي كولا.",
    "image": "product-pepsi.webp"
  },
  {
    "id": "iced-tea",
    "name": "شاي بارد",
    "category": "drinks",
    "price": 50,
    "turkish": "Soğuk Çay",
    "description": "شاي ديدي البارد بنكهة الخوخ.",
    "image": "product-iced-tea.webp"
  },
  {
    "id": "cola-zero",
    "name": "كولا زيرو",
    "category": "drinks",
    "price": 50,
    "turkish": "Şekersiz Kola",
    "description": "كولا بروكس زيرو بدون سكر.",
    "image": "product-cola-zero.webp"
  },
  {
    "id": "mango",
    "name": "عصير مانجو",
    "category": "drinks",
    "price": 40,
    "turkish": "Mango Meyve Suyu",
    "description": "مشروب جوس بقطع المانجو.",
    "image": "product-mango.webp"
  },
  {
    "id": "orange",
    "name": "عصير برتقال",
    "category": "drinks",
    "price": 40,
    "turkish": "Portakal Meyve Suyu",
    "description": "مشروب جوس بقطع البرتقال.",
    "image": "product-orange.webp"
  },
  {
    "id": "peach",
    "name": "عصير خوخ",
    "category": "drinks",
    "price": 40,
    "turkish": "Şeftali Meyve Suyu",
    "description": "مشروب جوس بقطع الخوخ.",
    "image": "product-peach.webp"
  }
];
