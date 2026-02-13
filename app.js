// 🔥 Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyApBC1mojSz4bNgxMUgVfBD8ZvYoxHi3lc",
    authDomain: "my-shop-36ea8.firebaseapp.com",
    projectId: "my-shop-36ea8",
    storageBucket: "my-shop-36ea8.firebasestorage.app",
    messagingSenderId: "402674812307",
    appId: "1:402674812307:web:7f41a6fcb51113e6e8d466",
    measurementId: "G-MGGMZPN5NG",
    databaseURL: "https://my-shop-36ea8-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// 📧 Initialize EmailJS
(function() {
    emailjs.init("CpxyIip4oIsk3dbQu");
    console.log("✅ EmailJS جاهز للاستخدام");
})();

// 🔧 EmailJS Configuration
const EMAILJS_CONFIG = {
    serviceID: 'service_owz8y3g',
    adminTemplateID: 'template_p59af9k',
    publicKey: 'CpxyIip4oIsk3dbQu',
    adminEmail: 'zaimhala23@gmail.com'
};

// 🏪 App State
const appState = {
    cart: [],
    favorites: [],
    currentUser: null,
    currentFilter: "all",
    currentView: "home",
    currentLanguage: "ar",
    deliveryType: "home",
    deliveryPrice: 400,
    lastOrder: null,
    userOrders: []
};

// 📦 Categories Data
const categories = [
    {
        id: 1,
        name: "كوسترات",
        name_en: "Coasters",
        name_fr: "Dessous de verre",
        description: "كوسترات أنيقة بتصاميم عصرية تضيف لمسة جمالية راقية إلى مساحتك، وتنسجم بسهولة مع مختلف أنماط الديكور",
        description_en: "Elegant coasters with modern designs that add a refined decorative touch to your space and blend beautifully with various interior styles.",
        description_fr: "Dessous de verre élégants aux designs modernes qui apportent une touche décorative raffinée à votre espace et s’harmonisent facilement avec différents styles d’intérieur.",
        image: "88.jpg"
    },
    {
        id: 2,
        name: "مباخر فاخرة",
        name_en: "Luxury incense burners",
        name_fr: "Brûleurs d’encens raffinés",
        description: "مباخر راقية مع طباعة اسم حسب الطلب، لمسة شخصية أنيقة تناسبك أو كهديّة مميزة",
        description_en: "Elegant incense burners with customizable name printing, a stylish personal touch that suits you or makes a unique gift",
        description_fr: "Brûleurs d’encens raffinés avec des designs artistiques qui ajoutent une touche chaleureuse à votre maison",
        image: "99.jpg" 
    },
    {
        id: 3,
        name: "مزهريات",
        name_en: "Vases",
        name_fr: "Vases",
        description: "مزهريات أنيقة بتصاميم عصرية تضيف لمسة جمال راقية إلى أي مساحة.",
        description_en: "Elegant vases with modern designs that add a refined decorative touch to any space.",
        description_fr: "Vases élégants aux designs modernes qui apportent une touche décorative raffinée à n’importe quel espace.",
        image: "56.jpg"
    },
    {
        id: 4,
        name: "توزيعات حفلات وأعراس",
        name_en: "Party and Wedding Favors",
        name_fr: "Faveurs de fête et de mariage",
        description: "توزيعات حفلات وأعراس أنيقة بتفاصيل راقية تضيف لمسة مميزة ولا تُنسى لمناسباتكم",
        description_en: "Elegant party favors with refined details that add a unique and memorable touch to your celebrations.",
        description_fr: "Faveurs de fête élégantes avec des détails raffinés qui ajoutent une touche unique et inoubliable à vos fêtes.",
        image: "78.jpg"
    },
    {
        id: 5,
        name: "حامل شموع",
        name_en: "Candle Holders",
        name_fr: "Porte-bougies",
        description: "حامل شموع أنيق بتصميم عصري يضفي دفئًا ولمسة جمالية راقية على ديكورك.",
        description_en: "Elegant candle holders with modern designs that add warmth and a refined decorative touch to your decor.",
        description_fr: "Porte-bougies élégants avec des designs modernes qui ajoutent de la chaleur et une touche décorative raffinée à votre décoration.",
        image: "206.jpg"
    }, 
    {
        id: 6,
        name: "علبة ديكور فاخرة",
        name_en: "Luxury Decorative Boxes",
        name_fr: "Boîtes décoratives de luxe",
        description: "علبة أنيقة متعددة الاستخدامات، مثالية لحفظ المجوهرات أو الإكسسوارات الصغيرة بلمسة راقية وعصرية.",
        description_en: "Elegant multi-purpose box, perfect for storing jewelry or small accessories with a refined and modern touch.",
        description_fr: "Boîte élégante polyvalente, parfaite pour ranger des bijoux ou de petits accessoires avec une touche raffinée et moderne.",
        image: "91.jpg"
    }
];

// 🛍️ Products Data
const products = [
    {
        id: 1,
        name: "كوستر دائري",
        name_en: "Round coaster",
        name_fr: "Sous-verre rond",
        category: "كوسترات",
        category_en: "Coasters",
        category_fr: "Sous-verres",
        price: 300,
        description: "كوستر دائري بلمسة فنية ناعمة ينسجم بسلاسة مع مختلف أنماط الديكور ويمنح طاولتك طابعًا مميزًا.",
        description_en: "Elegant round coaster with a soft artistic touch that blends seamlessly with various decor styles and gives your table a distinctive look.",
        description_fr: "Sous-verre rond élégant avec une touche artistique douce qui s'intègre parfaitement à différents styles de décoration et donne à votre table un look distinctif.",
        image: "5.jpg",
        dimensions: "20x15x10 سم"
    },
     {
        id: 1,
        name: "كوستر دائري بنقشة بارزة",
        name_en: "Luxury Engraved Round Coaster",
        name_fr: "Sous-verre rond de luxe gravé",
        category: "كوسترات",
        category_en: "Coasters",
        category_fr: "Sous-verres",
        price: 300,
        description: "كوستر دائري فاخر بتفاصيل منقوشة بدقة، يمنح طاولتك حضورًا أنيقًا ولمسة فنية مميزة.",
        description_en: "Luxury round coaster with finely engraved details, giving your table an elegant presence and a distinctive artistic touch.",
        description_fr: "Sous-verre rond de luxe avec des détails gravés finement, donnant à votre table une présence élégante et une touche artistique distinctive.",
        image: "6.jpg",
        dimensions: "20x15x10 سم" 
    },
     {
        id: 1,
        name: "كوستر دائري بتصميم مموج",
        name_en: "Luxury Wavy Design Round Coaster",
        name_fr: "Sous-verre rond de luxe avec design ondulé",
        category: "كوسترات",
        category_en: "Coasters",
        category_fr: "Sous-verres",
        price: 300, 
        description: "كوستر دائري بحواف مموجة بتفاصيل متقنة، يعكس ذوقًا راقيًا ويضيف حضورًا أنيقًا يلفت النظر في أي تنسيق ديكور.",
        description_en: "Luxury wavy design round coaster with finely crafted details, reflecting an elegant taste and adding an attractive presence that draws attention in any decor setting.",
        description_fr: "Sous-verre rond de luxe avec un design ondulé et des détails finement travaillés, reflétant un goût raffiné et ajoutant une présence attrayante qui attire l'attention dans n'importe quel décor.",
        image: "9.jpg",
        dimensions: "20x15x10 سم"
    },
     {
        id: 1,
        name:"كوستر زهرة",
        name_en: "Luxury Floral Design Coaster",
        name_fr: "Sous-verre de luxe avec design floral",
        category: "كوسترات",
        category_en: "Coasters", 
        category_fr: "Sous-verres",
        price: 300,
        description: "كوستر بشكل زهرة بتفاصيل راقية يمنح طاولتك لمسة أنثوية جذابة وحضورًا مميزًا",
        description_en: "Luxury floral design coaster with finely crafted details, adding an elegant artistic touch to your table and matching any decor setting.",
        description_fr: "Sous-verre floral de luxe avec des détails finement travaillés, ajoutant une touche artistique élégante à votre table et s'adaptant à tout décor.",
        image: "3.jpg",
        dimensions: "20x15x10 سم"
    },
     {
        id: 1,
        name: "كوستر بنقشة كلاسيكية",
        name_en: "Classic Engraved Coaster",
        name_fr: "Sous-verre classique gravé",
        category: "كوسترات",
        category_en: "Coasters",
        category_fr: "Sous-verres",
        price: 300,
        description: "كوستر بنقشة كلاسيكية مستوحاة من التفاصيل الزخرفية الراقية، يمنح طاولتك حضورًا أنيقًا ولمسة فنية بطابع فاخر يلفت النظر.",
        description_en: "Classic engraved coaster with finely crafted details, adding an elegant artistic touch to your table.",
        description_fr: "Sous-verre classique gravé avec des détails finement travaillés, ajoutant une touche artistique élégante à votre table.",
        image: "8.jpg", 
        dimensions: "20x15x10 سم"
    },
     {
        id: 1,
        name: "كوستر بنقشة متموجة",
        name_en: "Luxury Wavy Engraved Coaster",
        name_fr: "Sous-verre de luxe avec gravure ondulée",
        category: "كوسترات",
        category_en: "Coasters",
        category_fr: "Sous-verres",
        price: 300,
        description: "كوستر بنقشة متموجة مستوحاة من التفاصيل الزخرفية الراقية، يمنح طاولتك حضورًا أنيقًا ولمسة فنية بطابع فاخر يلفت النظر.",
        description_en: "Luxury wavy engraved coaster with finely crafted details, adding an elegant artistic touch to your table.",
        description_fr: "Sous-verre de luxe avec gravure ondulée et détails finement travaillés, ajoutant une touche artistique élégante à votre table.",
        image: "7.jpg",
        dimensions: "20x15x10 سم"
    },
     {
        id: 1,
        name: "كوستر مجوهرات أنيق",
        name_en: "Elegant Jewelry Coaster",
        name_fr: "Sous-verre de luxe pour bijoux",
        category: "كوسترات",
        category_en: "Coasters",
        category_fr: "Sous-verres",
        price: 300, 
        description: "كوستر متعدد الاستخدامات مصمم لعرض وترتيب المجوهرات بطريقة أنيقة وعصرية، يضفي لمسة فخامة على طاولتك أو طاولة الزينة.",
        description_en: "An elegant multi-purpose coaster designed to display and organize jewelry in an elegant and modern way, adding a touch of luxury to your table or party table.",
        description_fr: "Sous-verre multi-fonctions conçu pour afficher et organiser les bijoux d'une manière élégante et moderne, ajoutant une touche de luxe à votre table ou à votre table de fête.",
        image: "4.jpg",
        dimensions: "20x15x10 سم"
    },
        {
        id: 1,
        name: "كوستر بوجه انثى",
        name_en: "Feminine face coaster",
        name_fr: "Artistic feminine face coaster",
        category: "كوسترات",
        category_en: "Jewelry Boxes",
        category_fr: "Boîtes à bijoux",  
        price: 300,
        description:"كوستر أنيق بتصميم فني مستوحى من ملامح الوجه الأنثوي بأسلوب مينيمال عصري.",
        description_en: " An elegant coaster featuring an artistic design inspired by feminine facial features, created in a modern minimalist style.",
        description_fr: "Un dessous de verre élégant au design artistique inspiré des traits du visage féminin, réalisé dans un style minimaliste moderne",
        image: "1.jpg",
        dimensions: "20x15x10 سم"
    },
    { 
        id: 3,
        name: "مزهرية  بيضاء",
        name_en: "White Vase",
        name_fr: "Vase blanc",
        category: "مزهريات",
        category_en: "Vases",
        category_fr: "Vases",
        price: 3200,
        description: "مزهرية بيضاء بتصميم بسيط وأنيق. مصنوعة يدوياً مع انتباه للتفاصيل الدقيقة. مثالية لتزيين طاولات المكتب أو غرف المعيشة أو المطبخ. تتسع لـ 5-7 ورود متوسطة الحجم.",
        description_en: "White vase with a simple and elegant design. Handmade with attention to fine details. Perfect for decorating office tables, living rooms, or kitchens. Holds 5-7 medium-sized roses.",
        description_fr: "Vase blanc avec un design simple et élégant. Fait à la main avec attention aux détails fins. Parfait pour décorer les tables de bureau, les salons أو les cuisines. Contient 5-7 roses de taille moyenne.",
        image: "888.jpg",
        height: "25 سم"
    },
    {
        id: 4,
        name: "كوستر تقديم فاخر للعرس والخطوبة",
        name_en: "Luxury Wedding and Engagement Coaster",
        name_fr: "Sous-verre de luxe pour mariage et engagement",
        category: "توزيعات حفلات وأعراس",
        category_en: "Party and Wedding Favors",
        category_fr: "Faveurs de fête d'anniversaire",
        price: 900,
        description: "كوستر ديكوري أنيق مخصّص لحمل خواتم العروسين، مثالي لتزيين طاولة العرس أو الخطوبة، مع إمكانية تخصيصه بالأسماء والتاريخ ليكون تذكارًا راقيًا للمناسبة.",
        description_en: "An elegant decorative coaster specially designed for holding wedding rings, perfect for decorating wedding or engagement tables. It can be customized with names and dates to serve as a memorable keepsake for the occasion.",
        description_fr: "Un sous-verre décoratif élégant conçu spécialement pour accueillir les bagues de mariage, parfait pour décorer les tables de mariage ou d'engagement. Il peut être personnalisé avec des noms et des dates pour servir de souvenir précieux à l'occasion.",
        image: "200.jpg",
        
    },
      {
        id: 4,
        name: "كوستر دائري لديكور الحفلات",
        name_en: "Circular Decorative Coaster",
        name_fr: "Sous-verre décoratif circulaire",
        category: "توزيعات حفلات وأعراس",
        category_en: "Party and Wedding Favors",
        category_fr: "Faveurs de fête d'anniversaire",
        price: 600,
        description: "كوستر دائري ديكوري للكؤوس والسكين، يضفي لمسة أنيقة على طاولة العرس أو الخطوبة.",
        description_en: "An elegant circular decorative coaster for cups and cutlery, adding an elegant touch to wedding or engagement tables.",
        description_fr: "Un sous-verre décoratif circulaire élégant pour tasses et couverts, ajoutant une touche élégante aux tables de mariage ou d'engagement.",
        image: "201.jpg",
    },
     {
        id: 4,
        name: "حامل خواتم مع كوستر للعروسين",
        name_en: "Ring Holder with Coaster for the Bride and Groom",
        name_fr: "Support de bagues avec sous-verre pour la mariée et le marié",
        category: "توزيعات حفلات وأعراس",
        category_en: "Party and Wedding Favors",
        category_fr: "Faveurs de fête d'anniversaire",
        price: 1000,
        description: "كوستر ديكوري أنيق مخصّص لحمل خواتم العروسين، مثالي لتزيين طاولة العرس أو الخطوبة، مع إمكانية تخصيصه بالأسماء والتاريخ ليكون تذكارًا راقيًا للمناسبة.",
        description_en: "An elegant decorative coaster specially designed for holding wedding rings, perfect for decorating wedding or engagement tables. It can be customized with names and dates to serve as a memorable keepsake for the occasion.",
        description_fr: "Un sous-verre décoratif élégant conçu spécialement pour accueillir les bagues de mariage, parfait pour décorer les tables de mariage ou d'engagement. Il peut être personnalisé avec des noms et des dates pour servir de souvenir précieux à l'occasion.",
        image: "202.jpg",
    },
     {
        id: 4,
        name: "إطار ديكوري بكتابة حسب الطلب",
        name_en: "Custom Decorative Frame",
        name_fr: "Cadre décoratif personnalisé",
        category: "توزيعات حفلات وأعراس",
        category_en: "Party and Wedding Favors",
        category_fr: "Faveurs de fête d'anniversaire",
        price: 400,
        description: "لوحة ديكورية أنيقة تُكتب عليها أسماء حسب الطلب، تُستخدم كقطعة تزيين أو توزيعة مميّزة للعرس والخطوبة، تضيف لمسة فخامة وخصوصية للمناسبة.",
        description_en: "An elegant decorative panel with customizable names, used as a decorative piece or special wedding favor. Adds a touch of elegance and personalization to wedding or engagement tables.",
        description_fr: "Un panneau décoratif élégant sur lequel les noms peuvent être personnalisés, utilisé comme pièce décorative ou faveur spéciale pour les mariages et les fiançailles. Ajoute une touche d'élégance et de personnalisation aux tables de mariage ou d'engagement.",
        image: "111.jpg",
  
    },
     {
        id: 4,
        name: "اطار ديكوري مع كوستر دائري",
        name_en: "Decorative Frame with Circular Coaster",
        name_fr: "Cadre décoratif avec sous-verre circulaire",
                category: "توزيعات حفلات وأعراس",
        category_en: "Party and Wedding Favors",
        category_fr: "Faveurs de fête d'anniversaire",
        price: 400,
        description: "لوحة ديكورية أنيقة تُكتب عليها أسماء حسب الطلب، تُستخدم كقطعة تزيين أو توزيعة مميّزة للعرس والخطوبة، تضيف لمسة فخامة وخصوصية للمناسبة.",
        description_en: "An elegant decorative panel with customizable names, used as a decorative piece or special wedding favor. Adds a touch of elegance and personalization to wedding or engagement tables.",
        description_fr: "Un panneau décoratif élégant sur lequel les noms peuvent être personnalisés, utilisé comme pièce décorative ou faveur spéciale pour les mariages et les fiançailles. Ajoute une touche d'élégance et de personnalisation aux tables de mariage ou d'engagement.",
        image: "119.jpg",
    },
    
    {
        id: 2,
        name: "مَبخَرَة بخور فاخرة",
        name_en: "Luxury Incense Box",
        name_fr: "Boîte d'encens de luxe",
        category: "مباخر فاخرة",
        category_en: "Luxury Incense",
        category_fr: "Encens de luxe",
        price: 650,
        description: "مَبخَرَة أنيقة مخصّصة لاستخدام البخور، بتصميم عصري يضفي لمسة فاخرة على المكان وينشر رائحة زكية تدوم. مناسبة للاستعمال اليومي وللهدايا والمناسبات.",
        description_en: "An elegant incense box designed for burning incense, with a modern design that adds a luxurious touch to the space and spreads a lasting fragrance. Suitable for daily use, gifts, and special occasions.",
        description_fr: "Une boîte d'encens élégante conçue pour brûler de l'encens, avec un design moderne qui ajoute une touche de luxe à l'espace et diffuse un parfum durable. Convient pour une utilisation quotidienne, les cadeaux et les occasions spéciales.",
        image: "20.jpg",
    },
      {
        id: 2,
        name: "مَبخَرَة بخور عصرية",
        name_en: "Modern Incense Box",
        name_fr: "Boîte d'encens moderne",
        category: "مباخر فاخرة",
        category_en: "Luxury Incense",
        category_fr: "Encens de luxe",
        price: 300,
        description: "َبخَرَة صغيرة بتصميم عصري، مثالية لتعطير المكان بالبخور وإضافة لمسة أنيقة للديكور.",
        description_en: "An elegant modern incense box designed for burning incense, with a contemporary design that adds an elegant touch to the space and spreads a lasting fragrance.",
        description_fr: "Une boîte d'encens moderne élégante conçue pour brûler de l'encens, avec un design contemporain qui ajoute une touche élégante à l'espace et diffuse un parfum durable.",
        image: "76.jpg",
    },
      {
        id: 2,
        name: "مَبخَرَة بخور صغيرة ديكورية",
        name_en: "Small Decorative Incense Box",
        name_fr: "Boîte d'encens décorative",
        category: "مباخر فاخرة",
        category_en: "Luxury Incense",
        category_fr: "Encens de luxe",
        price: 400,
        description: "مَبخَرَة صغيرة مُصمَّمة بتصميم ديكوري أنيق، مثالية لتعطير المكان بالبخور وإضافة لمسة فاخرة للديكور.",
        description_en: "A small incense box designed with an elegant decorative design, perfect for scenting the space with incense and adding a luxurious touch to the decor.",
        description_fr: "Une petite boîte d'encens conçue avec un design décoratif élégant, parfaite pour parfumer l'espace avec de l'encens et ajouter une touche de luxe à la décoration.",
        image: "100.jpg",
    },
      {
        id: 2,
        name: "مَبخَرَة بخور أنيقة",
        name_en: "Elegant Incense Box",
        name_fr: "Boîte d'encens élégante",
        category: "مباخر فاخرة",
        category_en: "Luxury Incense",
        category_fr: "Encens de luxe",
        price: 500,
        description: "مَبخَرَة أنيقة مخصّصة لاستخدام البخور، بتصميم عصري يضفي لمسة فاخرة على المكان وينشر رائحة زكية تدوم. مناسبة للاستعمال اليومي وللهدايا والمناسبات.",
        description_en: "An elegant incense box designed for burning incense, with a modern design that adds a luxurious touch to the space and spreads a lasting fragrance. Suitable for daily use, gifts, and special occasions.",
        description_fr: "Une boîte d'encens élégante conçue pour brûler de l'encens, avec un design moderne qui ajoute une touche de luxe à l'espace et diffuse un parfum durable. Convient pour une utilisation quotidienne, les cadeaux et les occasions spéciales.",
        image: "21.jpg",
    },
      {
        id: 2,
        name: "مَبخَرَة وردة",
        name_en: "Rose Incense Box",
        name_fr: "Boîte d'encens à la rose",
        category: "مباخر فاخرة",
        category_en: "Luxury Incense",
        category_fr: "Encens de luxe",
        price: 400,
        description: "مَبخَرَة صغيرة بتصميم وردة أنيقة، مثالية لتعطير المكان بالبخور وإضافة لمسة أنثوية راقية للديكور.",
        description_en: "An elegant rose-shaped incense box, perfect for scenting the space with incense and adding a refined feminine touch to the decor.",
        description_fr: "Une petite boîte d'encens conçue avec un design de rose élégant, parfaite pour parfumer l'espace avec de l'encens et ajouter une touche féminine raffinée à la décoration.",
        image: "16.jpg",
    },
      {
        id: 2,
        name: "مَبخَرَة بخور يومية",
        name_en: "Daily Incense Box",
        name_fr: "Boîte d'encens quotidienne",
        category: "مباخر فاخرة",
        category_en: "Luxury Incense",
        category_fr: "Encens de luxe",
        price: 500,
        description: "مَبخَرَة أنيقة مع إمكانية الطباعة حسب الطلب (اسم، عبارة أو تصميم)، مثالية للهدايا ولمسة فخامة للمكان.",
        description_en: "An elegant incense box with customizable printing (name, phrase, or design), perfect for gifts and adding a touch of luxury to any space.",
        description_fr: "Une boîte d'encens élégante avec impression personnalisée (nom, phrase ou design), parfaite pour les cadeaux et ajoutant une touche de luxe à n'importe quel espace.",
        image: "14.jpg",
    },
    {
        id: 6,
        name: "علبة مجوهرات",
        name_en: "Black Jewelry Box",
        name_fr: "Boîte à bijoux noire",
        category: "علبة ديكور فاخرة",
        category_en: "Luxury Decorative Boxes",
        category_fr: "Boîtes décoratives de luxe",
        price: 500,
        description: "علبة مجوهرات سوداء أنيقة مع طباعة ذهبية. تحتوي على أقسام متعددة للمجوهرات المختلفة مع وسادات خاصة للخواتم والأقراط. تغلق بإحكام للحفاظ على المجوهرات من الأتربة.",
        description_en: "Elegant black jewelry box with gold printing. Contains multiple sections for different jewelry with special pads for rings and earrings. Closes tightly to keep jewelry dust-free.",
        description_fr: "Boîte à bijoux noire élégante avec impression dorée. Contient plusieurs sections pour différents bijoux avec des coussins spéciaux pour les bagues et les boucles d'oreilles. Se ferme hermétiquement pour protéger les bijoux de la poussière.",
        image: "91.jpg",
    },
    {
        id: 7,
        name: "حامل شموع",
        name_en: "Metal Candle Holder",
        name_fr: "Porte-bougie métallique",
        category: "حامل الشموع",
        category_en: "Candle Holders",
        category_fr: "Porte-bougies",
        price: 2200,
        description: "حامل شموع معدني بتصميم دائري أنيق من الفولاذ المقاوم للصدأ. يناسب الشموع القصيرة والمتوسطة الحجم. سهل التنظيف ويضيف لمسة معاصرة لأي مكان في المنزل.",
        description_en: "Metal candle holder with an elegant circular design made of stainless steel. Fits short and medium-sized candles. Easy to clean and adds a contemporary touch to any place in the home.",
        description_fr: "Porte-bougie métallique avec un design circulaire élégant en acier inoxydable. Convient aux bougies courtes et moyennes. Facile à nettoyer et ajoute une touche contemporaine à n'importe quel endroit de la maison.",
        image: "206.jpg",
        material: "فولاذ مقاوم للصدأ"
    },
   
];

const algerianStates = [
    { 
        name: "أدرار", 
        municipalities: ["أدرار", "رقان", "بودة", "تامنتيت", "تيمقطن", "تيت", "زاوية كنتة"],
        homeDelivery: 1000,
        officeDelivery: 1200
    },
    { 
        name: "الشلف", 
        municipalities: ["الشلف", "وادي الفضة", "بني حواء", "المرسى", "زبوجة", "أولاد عباس", "الكريمية"],
        homeDelivery: 400,
        officeDelivery: 600
    },
    { 
        name: "الأغواط", 
        municipalities: ["الأغواط", "قصر الحيران", "حاسي الرمل", "سبقاق", "تاويالة", "العسافية", "غارداية"],
        homeDelivery: 600,
        officeDelivery: 800
    },
    { 
        name: "أم البواقي", 
        municipalities: ["أم البواقي", "عين البيضاء", "عين مليلة", "سوق نعمان", "قصر الصبيحي", "العامرية", "الحرملية"],
        homeDelivery: 500,
        officeDelivery: 700
    },
    { 
        name: "باتنة", 
        municipalities: ["باتنة", "مروانة", "عين التوتة", "عين جاسر", "بريكة", "تازولت", "ثنية العابد"],
        homeDelivery: 550,
        officeDelivery: 750
    },
    { 
        name: "بجاية", 
        municipalities: ["بجاية", "أقبو", "أميزور", "خراطة", "القصر", "سيدي عيش", "توجة"],
        homeDelivery: 450,
        officeDelivery: 650
    },
    { 
        name: "بسكرة", 
        municipalities: ["بسكرة", "أورلال", "برج بن عزوز", "جمورة", "الوطاية", "ليوة", "مشونش"],
        homeDelivery: 700,
        officeDelivery: 900
    },
    { 
        name: "بشار", 
        municipalities: ["بشار", "بني ونيف", "القنادسة", "تبلبالة", "تاغيت", "المريجة", "العبادلة"],
        homeDelivery: 1000,
        officeDelivery: 1200
    },
    { 
        name: "البليدة", 
        municipalities: ["البليدة", "بوعينان", "بوفاريك", "الأربعاء", "موزاية", "وادي العلايق", "الصومعة"],
        homeDelivery: 350,
        officeDelivery: 550
    },
    { 
        name: "البويرة", 
        municipalities: ["البويرة", "الأخضرية", "عين بسام", "بئر غبالو", "حيزر", "سوق الخميس", "سور الغزلان"],
        homeDelivery: 400,
        officeDelivery: 600
    },
    { 
        name: "تمنراست", 
        municipalities: ["تمنراست", "عين قزام", "عين أمقل", "إدلس", "تاظروك", "تين زواتين", "عين صالح"],
        homeDelivery: 1200,
        officeDelivery: 1400
    },
    { 
        name: "تبسة", 
        municipalities: ["تبسة", "العوينات", "بئر العاتر", "بئر مقدم", "الشريعة", "مرسط", "نقرين"],
        homeDelivery: 800,
        officeDelivery: 1000
    },
    { 
        name: "تلمسان", 
        municipalities: ["تلمسان", "بني مستار", "الفحول", "الغزوات", "حمام بوحجر", "سبدو", "سيدي مجاهد"],
        homeDelivery: 500,
        officeDelivery: 700
    },
    { 
        name: "تيارت", 
        municipalities: ["تيارت", "عين الذهب", "عين كرمس", "مهدية", "رحوية", "قصر الشلالة", "سيدي عابد"],
        homeDelivery: 500,
        officeDelivery: 700
    },
    { 
        name: "تيزي وزو", 
        municipalities: ["تيزي وزو", "أزفون", "بنى دوالة", "بني يني", "بوغني", "ذراع الميزان", "مقلع"],
        homeDelivery: 400,
        officeDelivery: 600
    },
    { 
        name: "الجزائر", 
        municipalities: ["الجزائر الوسطى", "باب الوادي", "الحراش", "الرويبة", "الدار البيضاء", "باش جراح", "بولوغين", "القبة", "الشراقة", "حسين داي"],
        homeDelivery: 300,
        officeDelivery: 500
    },
    { 
        name: "الجلفة", 
        municipalities: ["الجلفة", "عين وسارة", "دار الشيوخ", "حد الصحاري", "المساعيد", "سيدي بايزيد", "الشارف"],
        homeDelivery: 600,
        officeDelivery: 800
    },
    { 
        name: "جيجل", 
        municipalities: ["جيجل", "الميلية", "الطاهير", "القنار", "سيدي معروف", "الشقفة", "العنصر"],
        homeDelivery: 450,
        officeDelivery: 650
    },
    { 
        name: "سطيف", 
        municipalities: ["سطيف", "عين أرنات", "عين ولمان", "بئر العرش", "بوعنداس", "جميلة", "حمام قرقور"],
        homeDelivery: 450,
        officeDelivery: 650
    },
    { 
        name: "سعيدة", 
        municipalities: ["سعيدة", "عين السلطان", "الحساسنة", "مولاي العربي", "سيدي أحمد", "سيدي عمر", "البيض"],
        homeDelivery: 700,
        officeDelivery: 900
    },
    { 
        name: "سكيكدة", 
        municipalities: ["سكيكدة", "أم الطوب", "بن عزوز", "الحدائق", "القل", "رمضان جمال", "الزيتونة"],
        homeDelivery: 450,
        officeDelivery: 650
    },
    { 
        name: "سيدي بلعباس", 
        municipalities: ["سيدي بلعباس", "بن باديس", "مرحوم", "مزاورو", "رأس الماء", "سيدي علي بوسيدي", "تسالة"],
        homeDelivery: 550,
        officeDelivery: 750
    },
    { 
        name: "عنابة", 
        municipalities: ["عنابة", "البوني", "الحجار", "سرايدي", "الشرفة", "عين الباردة", "برحال"],
        homeDelivery: 450,
        officeDelivery: 650
    },
    { 
        name: "قالمة", 
        municipalities: ["قالمة", "بوشقوف", "حمام دباغ", "حمام النبايل", "هيليوبوليس", "وادي الزناتي", "عين بن بيضاء"],
        homeDelivery: 450,
        officeDelivery: 650
    },
    { 
        name: "قسنطينة", 
        municipalities: ["قسنطينة", "ابن زياد", "الخروب", "عين السمارة", "حامة بوزيان", "زيغود يوسف", "الخناق"],
        homeDelivery: 400,
        officeDelivery: 600
    },
    { 
        name: "المدية", 
        municipalities: ["المدية", "العزيزية", "الشهبونية", "العفرون", "أولاد عنتر", "أولاد إبراهيم", "تابنة"],
        homeDelivery: 400,
        officeDelivery: 600
    },
    { 
        name: "مستغانم", 
        municipalities: ["مستغانم", "حجاج", "خير الدين", "مزغران", "عين تادلس", "سيدي علي", "صيادة"],
        homeDelivery: 450,
        officeDelivery: 650
    },
    { 
        name: "المسيلة", 
        municipalities: ["المسيلة", "أولاد دراج", "بن زوه", "برهوم", "حمام الضلعة", "المعاضيد", "سيدي عامر"],
        homeDelivery: 550,
        officeDelivery: 750
    },
    { 
        name: "معسكر", 
        municipalities: ["معسكر", "بوحنيفية", "غريس", "حسين", "مخادمة", "مقطع الدوز", "سيق"],
        homeDelivery: 500,
        officeDelivery: 700
    },
    { 
        name: "ورقلة", 
        municipalities: ["ورقلة", "حاسي مسعود", "انقوسة", "البرمة", "حاسي بن عبد الله", "عين البيضاء", "الرويسات"],
        homeDelivery: 900,
        officeDelivery: 1100
    },
    { 
        name: "وهران", 
        municipalities: ["وهران", "عين الترك", "أرزيو", "بئر الجير", "بطيوة", "السانية", "قديل"],
        homeDelivery: 400,
        officeDelivery: 600
    }
];

// 🌐 Internationalization Data
const translations = {
    ar: {
        "nav.home": "الرئيسية",
        "nav.categories": "الفئات",
        "nav.products": "المنتجات",
        "nav.favorites": "المفضلة",
        "nav.about": "عنا",
        "nav.contact": "اتصل بنا",
        "nav.login": "تسجيل الدخول",
        "nav.register": "إنشاء حساب",
        "nav.orders": "طلباتي",
        "nav.logout": "تسجيل الخروج",
        
        "welcome.title": "مرحباً بكم في عالم الديكور",
        "welcome.description": "اكتشفوا تشكيلتنا الفريدة من الديكورات المصممة بعناية لتضفي جمالاً ودفئاً على منزلكم.",
        "welcome.browse": "تصفح المنتجات",
        "welcome.learn": "تعرف علينا أكثر",
        
        "categories.title": "فئات المنتجات",
        
        "products.title": "منتجاتنا المميزة",
        
        "favorites.title": "منتجاتي المفضلة",
        "favorites.empty": "قائمة المفضلة فارغة",
        "favorites.emptyDesc": "لم تقم بإضافة أي منتجات إلى قائمة المفضلة بعد.",
        "favorites.browse": "تصفح المنتجات",
        
        "about.title": "عن متجرنا",
        "about.description": "نحن متجر متخصص في تقديم أفكار ديكورات مميزة تجمع بين الجمال والجودة.",
        
        "cart.title": "سلة التسوق",
        "cart.empty": "سلة التسوق فارغة",
        "cart.emptyDesc": "لم تقم بإضافة أي منتجات إلى سلة التسوق بعد.",
        "cart.browse": "تصفح المنتجات",
        "cart.total": "المجموع الكلي:",
        "cart.checkout": "إتمام الطلب",
        
        "checkout.title": "إتمام الطلب",
        "checkout.fullName": "الاسم الكامل *",
        "checkout.email": "البريد الإلكتروني *",
        "checkout.phone": "رقم الهاتف *",
        "checkout.state": "الولاية *",
        "checkout.selectState": "اختر الولاية",
        "checkout.municipality": "البلدية *",
        "checkout.deliveryType": "نوع التوصيل *",
        "checkout.homeDelivery": "توصيل للمنزل",
        "checkout.officeDelivery": "توصيل للمكتب",
        "checkout.notes": "ملاحظات إضافية ",
        "checkout.confirm": "تأكيد الطلب",
        
        "receipt.title": "إيصال الطلب",
        "receipt.print": "طباعة الإيصال",
        "receipt.close": "إغلاق",
        
        "product.details": "تفاصيل المنتج",
        "product.addToCart": "أضف إلى السلة",
        "product.addToFav": "أضف إلى المفضلة",
        
        "loading": "جاري التحميل..."
    },
    en: {
        "nav.home": "Home",
        "nav.categories": "Categories",
        "nav.products": "Products",
        "nav.favorites": "Favorites",
        "nav.about": "About Us",
        "nav.contact": "Contact Us",
        "nav.login": "Login",
        "nav.register": "Register",
        "nav.orders": "My Orders",
        "nav.logout": "Logout",
        
        "welcome.title": "Welcome to the World of Decorations",
        "welcome.description": "Discover our unique collection of decorations designed carefully to add beauty and warmth to your home.",
        "welcome.browse": "Browse Products",
        "welcome.learn": "Learn More About Us",
        
        "categories.title": "Product Categories",
        
        "products.title": "Our Featured Products",
        
        "favorites.title": "My Favorite Products",
        "favorites.empty": "Favorites list is empty",
        "favorites.emptyDesc": "You haven't added any products to your favorites list yet.",
        "favorites.browse": "Browse Products",
        
        "cart.title": "Shopping Cart",
        "cart.empty": "Shopping cart is empty",
        "cart.emptyDesc": "You haven't added any products to your shopping cart yet.",
        "cart.browse": "Browse Products",
        "cart.total": "Total:",
        "cart.checkout": "Checkout",
        
        "checkout.title": "Complete Order",
        "checkout.fullName": "Full Name *",
        "checkout.email": "Email *",
        "checkout.phone": "Phone Number *",
        "checkout.state": "State *",
        "checkout.selectState": "Choose State",
        "checkout.municipality": "Municipality *",
        "checkout.deliveryType": "Delivery Type *",
        "checkout.homeDelivery": "Home Delivery",
        "checkout.officeDelivery": "Office Delivery",
        "checkout.notes": "Additional Notes",
        "checkout.confirm": "Confirm Order",
        
        "receipt.title": "Order Receipt",
        "receipt.print": "Print Receipt",
        "receipt.close": "Close",
        
        "product.details": "Product Details",
        "product.addToCart": "Add to Cart",
        "product.addToFav": "Add to Favorites",
        
        "loading": "Loading..."
    },
    fr: {
        "nav.home": "Accueil",
        "nav.categories": "Catégories",
        "nav.products": "Produits",
        "nav.favorites": "Favoris",
        "nav.about": "À propos",
        "nav.contact": "Contactez-nous",
        "nav.login": "Connexion",
        "nav.register": "Créer un compte",
        "nav.orders": "Mes commandes",
        "nav.logout": "Déconnexion",
        
        "welcome.title": "Bienvenue dans le monde des décorations",
        "welcome.description": "Découvrez notre collection unique de décorations conçus avec soin pour ajouter beauté et chaleur à votre maison.",
        "welcome.browse": "Parcourir les produits",
        "welcome.learn": "En savoir plus sur nous",
        
        "categories.title": "Catégories de produits",
        
        "products.title": "Nos produits en vedette",
        
        "favorites.title": "Mes produits préférés",
        "favorites.empty": "La liste des favoris est empty",
        "favorites.emptyDesc": "Vous n'avez not encore ajouté de produits à votre liste de favoris.",
        "favorites.browse": "Parcourir les produits",
        
        "cart.title": "Panier d'achat",
        "cart.empty": "Le panier est vide",
        "cart.emptyDesc": "Vous n'avez pas encore ajouté de produits à votre panier.",
        "cart.browse": "Parcourir les productos",
        "cart.total": "Total :",
        "cart.checkout": "Passer la commande",
        
        "checkout.title": "Terminer la commande",
        "checkout.fullName": "Nom complet *",
        "checkout.email": "E-mail *",
        "checkout.phone": "Numéro de téléphone *",
        "checkout.state": "État *",
        "checkout.selectState": "Choisir l'état",
        "checkout.municipality": "Municipalité *",
        "checkout.deliveryType": "Type de livraison *",
        "checkout.homeDelivery": "Livraison à domicile",
        "checkout.officeDelivery": "Livraison au bureau",
        "checkout.notes": "Notes supplémentaires",
        "checkout.confirm": "Confirmer la commande",
        
        "receipt.title": "Reçu de commande",
        "receipt.print": "Imprimer le reçu",
        "receipt.close": "Fermer",
        
        "product.details": "Détails du produit",
        "product.addToCart": "Ajouter au panier",
        "product.addToFav": "Ajouter aux favoris",
        
        "loading": "Chargement..."
    }
};

// 🎯 DOM Elements
let domElements = {};

// 🚀 Initialize App
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 بدء تشغيل المتجر...');
    initApp();
});

function initApp() {
    cacheDOMElements();
    loadState();
    renderCategories();
    renderProducts();
    renderProductFilters();
    loadAlgerianStates();
    setupEventListeners();
    checkAuthState();
    updateCartCount();
    updateFavoritesCount();
    initializeLanguage();
    
    // إعداد شريط التنقل للجوال
    setupMobileNavigation();
    updateMobileFavoritesCount();
    updateMobileCartCount();
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('switch').checked = true;
    }
    
    console.log('✅ تم تحميل المتجر بنجاح');
}

function cacheDOMElements() {
    domElements = {
        mobileMenuBtn: document.getElementById('mobileMenuBtn'),
        mainNav: document.getElementById('mainNav'),
        cartBtn: document.getElementById('cartBtn'),
        cartCount: document.getElementById('cartCount'),
        favoritesBtn: document.getElementById('favoritesBtn'),
        favoritesCount: document.getElementById('favoritesCount'),
        userBtn: document.getElementById('userBtn'),
        userDropdown: document.getElementById('userDropdown'),
        userName: document.getElementById('userName'),
        categoriesContainer: document.getElementById('categoriesContainer'),
        productsFilter: document.getElementById('productsFilter'),
        productsContainer: document.getElementById('productsContainer'),
        favoritesContainer: document.getElementById('favoritesContainer'),
        emptyFavorites: document.getElementById('emptyFavorites'),
        cartItemsContainer: document.getElementById('cartItemsContainer'),
        emptyCart: document.getElementById('emptyCart'),
        cartSummary: document.getElementById('cartSummary'),
        cartTotal: document.getElementById('cartTotal'),
        notification: document.getElementById('notification'),
        notificationText: document.getElementById('notificationText'),
        loading: document.getElementById('loading'),
        checkoutState: document.getElementById('checkoutState'),
        shippingCostInfo: document.getElementById('shippingCostInfo'),
        municipalityInput: document.getElementById('checkoutMunicipality'),
        municipalitySuggestions: document.getElementById('municipalitySuggestions'),
        langBtn: document.getElementById('langBtn'),
        langDropdown: document.getElementById('langDropdown'),
        currentLang: document.getElementById('currentLang'),
        deliveryOptions: document.querySelectorAll('.delivery-option'),
        deliveryTypeInput: document.getElementById('deliveryType'),
        deliveryPriceInput: document.getElementById('deliveryPrice'),
        homeDeliveryPrice: document.getElementById('homeDeliveryPrice'),
        officeDeliveryPrice: document.getElementById('officeDeliveryPrice'),
        emailOrderDetails: document.getElementById('emailOrderDetails'),
        receiptContent: document.getElementById('receiptContent')
    };
}

function loadState() {
    try {
        const savedCart = localStorage.getItem('cart');
        const savedFavorites = localStorage.getItem('favorites');
        const savedLanguage = localStorage.getItem('language');
        
        if (savedCart) appState.cart = JSON.parse(savedCart);
        if (savedFavorites) appState.favorites = JSON.parse(savedFavorites);
        if (savedLanguage) appState.currentLanguage = savedLanguage;
    } catch (error) {
        console.error('خطأ في تحميل البيانات:', error);
        appState.cart = [];
        appState.favorites = [];
    }
}

function saveState() {
    try {
        localStorage.setItem('cart', JSON.stringify(appState.cart));
        localStorage.setItem('favorites', JSON.stringify(appState.favorites));
        localStorage.setItem('language', appState.currentLanguage);
    } catch (error) {
        console.error('خطأ في حفظ البيانات:', error);
    }
}

function initializeLanguage() {
    setLanguage(appState.currentLanguage);
    
    domElements.langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        domElements.langDropdown.classList.toggle('active');
    });
    
    document.addEventListener('click', function() {
        domElements.langDropdown.classList.remove('active');
    });
    
    document.querySelectorAll('.lang-dropdown button').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            domElements.langDropdown.classList.remove('active');
        });
    });
}

function setLanguage(lang) {
    appState.currentLanguage = lang;
    localStorage.setItem('language', lang);
    domElements.currentLang.textContent = lang.toUpperCase();
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    const storeName = document.getElementById('storeName');
    if (lang === 'en') storeName.textContent = 'Gifts and Beautiful Things';
    else if (lang === 'fr') storeName.textContent = 'Cadeaux et Belles Choses';
    else storeName.textContent = 'الملاك المتوهج';
    
    renderCategories();
    renderProducts();
    updateCartItems();
    updateShippingCostInfo();
}

function setupEventListeners() {
    // Dark mode toggle
    document.getElementById('switch').addEventListener('change', toggleDarkMode);
    
    // Mobile menu
    domElements.mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    document.querySelectorAll('#mainNav a').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Cart button
    domElements.cartBtn.addEventListener('click', openCartModal);
    
    // Favorites button
    domElements.favoritesBtn.addEventListener('click', showFavoritesPage);
    
    // User button
    domElements.userBtn.addEventListener('click', toggleUserDropdown);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-menu')) {
            domElements.userDropdown.classList.remove('active');
        }
    });
    
    // Navigation
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Welcome buttons
    document.getElementById('exploreProducts').addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('learnMore').addEventListener('click', () => {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Browse products button
    document.getElementById('browseProducts').addEventListener('click', () => {
        closeModal('cartModal');
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Browse favorites button
    document.getElementById('browseFavorites').addEventListener('click', () => {
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        appState.currentView = 'products';
        updateView();
    });
    
    // Checkout button
    document.getElementById('checkoutBtn').addEventListener('click', openCheckoutModal);
    
    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal.id);
        });
    });
    
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) closeModal(this.id);
        });
    });
    
    // Auth tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchAuthTab(tabId);
        });
    });
    
    // Auth forms
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('registerForm').addEventListener('submit', handleRegister);
    
    // Checkout form
    document.getElementById('checkoutForm').addEventListener('submit', handleCheckout);
    
    // Municipality suggestions
    domElements.municipalityInput.addEventListener('focus', function() {
        if (domElements.checkoutState.value) showMunicipalityDropdown();
        else showNotification('يرجى اختيار الولاية أولاً', 'warning');
    });
    
    domElements.municipalityInput.addEventListener('input', function() {
        if (domElements.checkoutState.value) filterMunicipalities(this.value);
    });
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.form-group')) {
            domElements.municipalitySuggestions.classList.remove('active');
        }
    });
    
    // تحديث سعر التوصيل
    domElements.checkoutState.addEventListener('change', function() {
        calculateShippingCost();
        updateShippingCostInfo();
        domElements.municipalityInput.value = '';
    });
    
    // Delivery options selection
    domElements.deliveryOptions.forEach(option => {
        option.addEventListener('click', function() {
            domElements.deliveryOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            appState.deliveryType = this.getAttribute('data-type');
            calculateShippingCost();
            updateShippingCostInfo();
        });
    });
    
    // Select home delivery by default
    document.querySelector('.delivery-option[data-type="home"]').classList.add('selected');
    
    // Auth links in user dropdown
    document.getElementById('loginLink').addEventListener('click', (e) => {
        e.preventDefault();
        openAuthModal();
    });
    
    document.getElementById('registerLink').addEventListener('click', (e) => {
        e.preventDefault();
        openAuthModal('register');
    });
    
    document.getElementById('logoutLink').addEventListener('click', (e) => {
        e.preventDefault();
        handleLogout();
    });
    
    // ✅ إصلاح رابط طلباتي - لن يفتح تلقائياً عند الدخول
    document.getElementById('ordersLink').addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('📋 نقر على طلباتي - فقط فتح النافذة');
        
        if (!appState.currentUser) {
            showNotification('يرجى تسجيل الدخول لعرض الطلبات السابقة', 'warning');
            openAuthModal();
        } else {
            if (appState.userOrders.length === 0) {
                const ordersList = document.getElementById('userOrdersList');
                const emptyMessage = document.getElementById('emptyOrdersMessage');
                
                ordersList.innerHTML = '';
                emptyMessage.innerHTML = `
                    <div style="text-align: center; padding: 40px;">
                        <i class="fas fa-history" style="font-size: 60px; color: var(--light-green); margin-bottom: 20px;"></i>
                        <h3 style="color: var(--dark-green); margin-bottom: 15px;">تحميل الطلبات</h3>
                        <p style="color: var(--gray); margin-bottom: 20px;">لم يتم تحميل الطلبات بعد. اضغط على زر التحميل لعرض طلباتك.</p>
                        <button onclick="loadUserOrders()" 
                                style="padding: 12px 24px; background: var(--dark-green); color: white; border: none; border-radius: 5px; font-size: 14px; cursor: pointer;">
                            <i class="fas fa-download"></i> تحميل الطلبات
                        </button>
                    </div>
                `;
                emptyMessage.style.display = 'block';
            }
            
            openModal('userOrdersModal');
        }
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    setupPhoneValidation();
}

function toggleDarkMode() {
    const isDarkMode = document.getElementById('switch').checked;
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}

function toggleMobileMenu() {
    domElements.mainNav.classList.toggle('active');
}

function closeMobileMenu() {
    domElements.mainNav.classList.remove('active');
}

function toggleUserDropdown() {
    domElements.userDropdown.classList.toggle('active');
}

function handleNavigation(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    
    if (targetId === 'favorites') {
        appState.currentView = 'favorites';
        updateView();
    } else if (targetId === 'orders') {
        if (!appState.currentUser) {
            showNotification('يرجى تسجيل الدخول لعرض الطلبات السابقة', 'warning');
            openAuthModal();
        } else {
            openModal('userOrdersModal');
        }
    } else {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        appState.currentView = targetId;
    }
    
    closeMobileMenu();
}

function renderCategories() {
    domElements.categoriesContainer.innerHTML = '';
    
    categories.forEach(category => {
        const categoryName = appState.currentLanguage === 'ar' ? category.name : 
                           appState.currentLanguage === 'en' ? category.name_en : category.name_fr;
        const categoryDesc = appState.currentLanguage === 'ar' ? category.description : 
                           appState.currentLanguage === 'en' ? category.description_en : category.description_fr;
        
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.innerHTML = `
            <div class="category-img">
                <img src="${category.image}" alt="${categoryName}" loading="lazy">
            </div>
            <div class="category-info">
                <h3>${categoryName}</h3>
                <p>${categoryDesc}</p>
            </div>
        `;
        
        categoryCard.addEventListener('click', () => {
            const categoryFilter = appState.currentLanguage === 'ar' ? category.name : 
                                 appState.currentLanguage === 'en' ? category.name_en : category.name_fr;
            
            let filterId = 'all';
            if (categoryFilter === category.name || categoryFilter === category.name_en || categoryFilter === category.name_fr) {
                filterId = appState.currentLanguage === 'ar' ? category.name : 
                         appState.currentLanguage === 'en' ? category.name_en : category.name_fr;
            }
            
            appState.currentFilter = filterId;
            renderProducts();
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
        
        domElements.categoriesContainer.appendChild(categoryCard);
    });
}

function renderProductFilters() {
    const filters = [
        { id: 'all', name: { ar: 'كل المنتجات', en: 'All Products', fr: 'Tous les produits' } },
        { id: 'كوسترات', name: { ar: 'كوسترات', en: 'Coasters', fr: 'Sous-verres' } },
        { id: 'مباخر فاخرة', name: { ar: 'مباخر فاخرة', en: 'Luxury Candle Holders', fr: 'Porte-bougies de luxe' } },
        { id: 'مزهريات', name: { ar: 'مزهريات', en: 'Ceramic Products', fr: 'Produits en céramique' } },
        { id: 'توزيعات حفلات وأعراس', name: { ar: 'توزيعات حفلات وأعراس', en: 'Party Favors for Weddings and Celebrations', fr: 'Faveurs de fête pour mariages et célébrations' } },
        { id: 'حامل شموع', name: { ar: 'حامل شموع', en: 'Candle Holders', fr: 'Porte-bougies' } },
        { id: 'علبة ديكور فاخرة', name: { ar: 'علبة ديكور فاخرة', en: 'Luxury Decorative Boxes', fr: 'Boîtes décoratives de luxe' } }
    ];
    
    domElements.productsFilter.innerHTML = '';
    
    filters.forEach(filter => {
        const filterName = filter.name[appState.currentLanguage];
        const button = document.createElement('button');
        button.className = `filter-btn ${appState.currentFilter === filter.id ? 'active' : ''}`;
        button.textContent = filterName;
        button.setAttribute('data-filter', filter.id);
        
        button.addEventListener('click', () => {
            appState.currentFilter = filter.id;
            renderProducts();
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
        
        domElements.productsFilter.appendChild(button);
    });
}

function renderProducts() {
    domElements.productsContainer.innerHTML = '';
    
    let filteredProducts = products;
    if (appState.currentFilter !== 'all') {
        filteredProducts = products.filter(product => {
            if (appState.currentLanguage === 'ar') return product.category === appState.currentFilter;
            else if (appState.currentLanguage === 'en') return product.category_en === appState.currentFilter;
            else return product.category_fr === appState.currentFilter;
        });
    }
    
    if (filteredProducts.length === 0) {
        domElements.productsContainer.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
                <i class="fas fa-box-open" style="font-size: 60px; color: var(--light-green); margin-bottom: 20px;"></i>
                <h3 style="color: var(--dark-green); margin-bottom: 15px;">لا توجد منتجات في هذه الفئة</h3>
                <p style="color: var(--gray);">جرب اختيار فئة أخرى أو تصفح جميع المنتجات</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const isFavorite = appState.favorites.some(fav => fav.id === product.id);
        const productName = appState.currentLanguage === 'ar' ? product.name : 
                          appState.currentLanguage === 'en' ? product.name_en : product.name_fr;
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${productName}" loading="lazy">
                <div class="product-fav ${isFavorite ? 'active' : ''}" data-product-id="${product.id}">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                </div>
            </div>
            <div class="product-info">
                <h3>${productName}</h3>
                <div class="product-price">${product.price} د.ج</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-product-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> ${translations[appState.currentLanguage]?.product?.addToCart || 'أضف إلى السلة'}
                    </button>
                    <a href="#" class="view-details" data-product-id="${product.id}">${translations[appState.currentLanguage]?.product?.details || 'تفاصيل'}</a>
                </div>
            </div>
        `;
        
        productCard.querySelector('.add-to-cart').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product);
        });
        
        productCard.querySelector('.product-fav').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(product);
        });
        
        productCard.querySelector('.view-details').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openProductDetailsModal(product);
        });
        
        productCard.addEventListener('click', () => openProductDetailsModal(product));
        
        domElements.productsContainer.appendChild(productCard);
    });
}

function renderFavorites() {
    domElements.favoritesContainer.innerHTML = '';
    
    if (appState.favorites.length === 0) {
        domElements.emptyFavorites.style.display = 'block';
        domElements.favoritesContainer.style.display = 'none';
        return;
    }
    
    domElements.emptyFavorites.style.display = 'none';
    domElements.favoritesContainer.style.display = 'grid';
    
    appState.favorites.forEach(product => {
        const productName = appState.currentLanguage === 'ar' ? product.name : 
                          appState.currentLanguage === 'en' ? product.name_en : product.name_fr;
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-img">
                <img src="${product.image}" alt="${productName}" loading="lazy">
                <div class="product-fav active" data-product-id="${product.id}">
                    <i class="fas fa-heart"></i>
                </div>
            </div>
            <div class="product-info">
                <h3>${productName}</h3>
                <div class="product-price">${product.price} د.ج</div>
                <div class="product-actions">
                    <button class="add-to-cart" data-product-id="${product.id}">
                        <i class="fas fa-cart-plus"></i> ${translations[appState.currentLanguage]?.product?.addToCart || 'أضف إلى السلة'}
                    </button>
                    <a href="#" class="view-details" data-product-id="${product.id}">${translations[appState.currentLanguage]?.product?.details || 'تفاصيل'}</a>
                </div>
            </div>
        `;
        
        productCard.querySelector('.add-to-cart').addEventListener('click', (e) => {
            e.stopPropagation();
            addToCart(product);
        });
        
        productCard.querySelector('.product-fav').addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(product);
        });
        
        productCard.querySelector('.view-details').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openProductDetailsModal(product);
        });
        
        domElements.favoritesContainer.appendChild(productCard);
    });
}

function addToCart(product) {
    const existingItem = appState.cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        appState.cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveState();
    updateCartCount();
    
    const productName = appState.currentLanguage === 'ar' ? product.name : 
                      appState.currentLanguage === 'en' ? product.name_en : product.name_fr;
    showNotification(`تمت إضافة ${productName} إلى سلة التسوق`, 'success');
    
    if (document.getElementById('cartModal').style.display === 'block') {
        updateCartItems();
    }
}

function removeFromCart(productId) {
    const itemIndex = appState.cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        const removedItem = appState.cart[itemIndex];
        const productName = appState.currentLanguage === 'ar' ? removedItem.name : 
                          appState.currentLanguage === 'en' ? removedItem.name_en : removedItem.name_fr;
        
        appState.cart.splice(itemIndex, 1);
        saveState();
        updateCartCount();
        updateCartItems();
        showNotification(`تمت إزالة ${productName} من سلة التسوق`, 'success');
    }
}

function updateCartItemQuantity(productId, newQuantity) {
    const item = appState.cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity < 1) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            saveState();
            updateCartCount();
            updateCartItems();
        }
    }
}

function updateCartCount() {
    const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
    domElements.cartCount.textContent = totalItems;
    
    // تحديث عداد السلة في الجوال
    updateMobileCartCount();
}

function toggleFavorite(product) {
    const index = appState.favorites.findIndex(fav => fav.id === product.id);
    const productName = appState.currentLanguage === 'ar' ? product.name : 
                      appState.currentLanguage === 'en' ? product.name_en : product.name_fr;
    
    if (index === -1) {
        appState.favorites.push(product);
        showNotification(`تمت إضافة ${productName} إلى المفضلة`, 'success');
    } else {
        appState.favorites.splice(index, 1);
        showNotification(`تمت إزالة ${productName} من المفضلة`, 'info');
    }
    
    saveState();
    updateFavoritesCount();
    
    if (appState.currentView === 'favorites') {
        renderFavorites();
    } else {
        renderProducts();
    }
}

function updateFavoritesCount() {
    domElements.favoritesCount.textContent = appState.favorites.length;
    
    // تحديث عداد المفضلة في الجوال
    updateMobileFavoritesCount();
}

function openCartModal() {
    updateCartItems();
    openModal('cartModal');
}

function updateCartItems() {
    domElements.cartItemsContainer.innerHTML = '';
    
    if (appState.cart.length === 0) {
        domElements.emptyCart.style.display = 'block';
        domElements.cartSummary.style.display = 'none';
        return;
    }
    
    domElements.emptyCart.style.display = 'none';
    domElements.cartSummary.style.display = 'block';
    
    appState.cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        const itemName = appState.currentLanguage === 'ar' ? item.name : 
                       appState.currentLanguage === 'en' ? item.name_en : item.name_fr;
        const itemCategory = appState.currentLanguage === 'ar' ? item.category : 
                           appState.currentLanguage === 'en' ? item.category_en : item.category_fr;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-img">
                <img src="${item.image}" alt="${itemName}" loading="lazy">
            </div>
            <div class="cart-item-info">
                <h4>${itemName}</h4>
                <div class="cart-item-price">${item.price} د.ج</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn decrease" data-product-id="${item.id}">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase" data-product-id="${item.id}">+</button>
                </div>
                <div style="font-size: 12px; color: var(--gray); margin-top: 5px;">
                    ${itemCategory}
                </div>
            </div>
            <div>
                <div class="cart-item-total" style="color: var(--brown); font-size: 18px; font-weight: 700;">
                    ${itemTotal} د.ج
                </div>
                <button class="quantity-btn remove" data-product-id="${item.id}" style="margin-top: 10px; background-color: #ff6b6b; color: white;">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItem.querySelector('.decrease').addEventListener('click', () => {
            updateCartItemQuantity(item.id, item.quantity - 1);
        });
        
        cartItem.querySelector('.increase').addEventListener('click', () => {
            updateCartItemQuantity(item.id, item.quantity + 1);
        });
        
        cartItem.querySelector('.remove').addEventListener('click', () => {
            removeFromCart(item.id);
        });
        
        domElements.cartItemsContainer.appendChild(cartItem);
    });
    
    const cartSummary = document.getElementById('cartSummary');
    if (cartSummary) {
        const totalDiv = cartSummary.querySelector('div[style*="border-top"]');
        if (totalDiv) totalDiv.style.display = 'none';
        
        const checkoutBtn = document.getElementById('checkoutBtn');
        if (checkoutBtn) {
            checkoutBtn.style.marginTop = '30px';
            checkoutBtn.style.width = '100%';
        }
    }
}

function openCheckoutModal() {
    if (!appState.currentUser) {
        closeModal('cartModal');
        openAuthModal();
        showNotification('يجب تسجيل الدخول أولاً لإتمام الطلب', 'warning');
        return;
    }
    
    if (appState.cart.length === 0) {
        showNotification('سلة التسوق فارغة', 'warning');
        return;
    }
    
    if (appState.currentUser) {
        document.getElementById('checkoutName').value = appState.currentUser.displayName || '';
        document.getElementById('checkoutEmail').value = appState.currentUser.email || '';
        document.getElementById('checkoutPhone').value = appState.currentUser.phone || '';
    }
    
    calculateShippingCost();
    updateShippingCostInfo();
    
    closeModal('cartModal');
    openModal('checkoutModal');
}

function updateShippingCostInfo() {
    const selectedStateName = domElements.checkoutState.value;
    const selectedState = algerianStates.find(state => state.name === selectedStateName);
    
    if (selectedState) {
        const deliveryTypeText = appState.deliveryType === 'home' ? 
            (translations[appState.currentLanguage]?.checkout?.homeDelivery || 'توصيل للمنزل') : 
            (translations[appState.currentLanguage]?.checkout?.officeDelivery || 'توصيل للمكتب');
        
        const shippingCost = appState.deliveryType === 'home' ? 
            selectedState.homeDelivery : selectedState.officeDelivery;
        
        domElements.shippingCostInfo.innerHTML = `
            <strong>${translations[appState.currentLanguage]?.checkout?.deliveryType || 'نوع التوصيل'}:</strong> ${deliveryTypeText}<br>
            <strong>${translations[appState.currentLanguage]?.checkout?.state || 'الولاية'}:</strong> ${selectedStateName}<br>
            <strong>سعر التوصيل:</strong> ${shippingCost} دينار جزائري
        `;
    } else {
        domElements.shippingCostInfo.textContent = 
            translations[appState.currentLanguage]?.checkout?.selectState || 'يرجى اختيار الولاية لعرض سعر التوصيل';
    }
}

function openProductDetailsModal(product) {
    const isFavorite = appState.favorites.some(fav => fav.id === product.id);
    const productName = appState.currentLanguage === 'ar' ? product.name : 
                      appState.currentLanguage === 'en' ? product.name_en : product.name_fr;
    const productDescription = appState.currentLanguage === 'ar' ? product.description : 
                            appState.currentLanguage === 'en' ? product.description_en : product.description_fr;
    
    document.getElementById('productDetailsTitle').textContent = translations[appState.currentLanguage]?.product?.details || 'تفاصيل المنتج';
    document.getElementById('productDetailsName').textContent = productName;
    document.getElementById('productDetailsDescription').textContent = productDescription;
    document.getElementById('productDetailsPrice').textContent = product.price;
    document.getElementById('productDetailsImage').src = product.image;
    document.getElementById('productDetailsImage').alt = productName;
    
    const favBtn = document.getElementById('toggleFavoriteFromDetails');
    favBtn.innerHTML = isFavorite ? 
        `<i class="fas fa-heart"></i> ${translations[appState.currentLanguage]?.product?.removeFromFav || 'إزالة من المفضلة'}` : 
        `<i class="far fa-heart"></i> ${translations[appState.currentLanguage]?.product?.addToFav || 'أضف إلى المفضلة'}`;
    
    favBtn.onclick = () => {
        toggleFavorite(product);
        openProductDetailsModal(product);
    };
    
    document.getElementById('addToCartFromDetails').onclick = () => {
        addToCart(product);
        closeModal('productDetailsModal');
    };
    
    openModal('productDetailsModal');
}

function openAuthModal(defaultTab = 'login') {
    switchAuthTab(defaultTab);
    openModal('authModal');
}

function switchAuthTab(tabId) {
    document.querySelectorAll('.auth-tab').forEach(tab => {
        if (tab.getAttribute('data-tab') === tabId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.auth-form').forEach(form => {
        if (form.id === `${tabId}Form`) {
            form.classList.add('active');
        } else {
            form.classList.remove('active');
        }
    });
}

function checkAuthState() {
    auth.onAuthStateChanged(user => {
        if (user) {
            appState.currentUser = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName || user.email.split('@')[0],
                phone: user.phoneNumber || ''
            };
            
            document.getElementById('loginLink').style.display = 'none';
            document.getElementById('registerLink').style.display = 'none';
            domElements.userName.textContent = appState.currentUser.displayName;
            domElements.userName.style.display = 'block';
            document.getElementById('ordersLink').style.display = 'block';
            document.getElementById('logoutLink').style.display = 'block';
            
            console.log('👤 تم تسجيل الدخول - الطلبات لن تحمل تلقائياً');
            
        } else {
            appState.currentUser = null;
            appState.userOrders = [];
            
            document.getElementById('loginLink').style.display = 'block';
            document.getElementById('registerLink').style.display = 'block';
            domElements.userName.style.display = 'none';
            document.getElementById('ordersLink').style.display = 'none';
            document.getElementById('logoutLink').style.display = 'none';
            
            console.log('👤 تم تسجيل الخروج');
        }
        
        closeModal('authModal');
    }, error => {
        console.error('خطأ في التحقق من حالة المصادقة:', error);
        showNotification('⚠️ حدث خطأ في التحقق من حالة المصادقة', 'error');
    });
}

function updateOrdersCount() {
    if (appState.currentUser && appState.userOrders.length > 0) {
        document.getElementById('ordersLink').innerHTML = 
            `<i class="fas fa-history"></i> طلباتي (${appState.userOrders.length})`;
    } else {
        document.getElementById('ordersLink').innerHTML = 
            `<i class="fas fa-history"></i> طلباتي`;
    }
}

async function handleLogin(e) {
    e.preventDefault();
    showLoading(true);
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        console.log('✅ تم تسجيل الدخول بنجاح:', userCredential.user.email);
        showNotification('تم تسجيل الدخول بنجاح', 'success');
        
    } catch (error) {
        console.error('❌ خطأ في تسجيل الدخول:', error);
        let errorMessage = 'خطأ في تسجيل الدخول';
        
        switch(error.code) {
            case 'auth/invalid-email':
                errorMessage = 'البريد الإلكتروني غير صالح';
                break;
            case 'auth/user-disabled':
                errorMessage = 'هذا الحساب معطل';
                break;
            case 'auth/user-not-found':
                errorMessage = 'لا يوجد حساب بهذا البريد الإلكتروني';
                break;
            case 'auth/wrong-password':
                errorMessage = 'كلمة المرور غير صحيحة';
                break;
            default:
                errorMessage = error.message;
        }
        
        showNotification(errorMessage, 'error');
    } finally {
        showLoading(false);
    }
}

function setupPhoneValidation() {
    const phoneInputs = [
        { id: 'checkoutPhone', event: 'input' },
        { id: 'registerPhone', event: 'input' }
    ];
    
    phoneInputs.forEach(phoneConfig => {
        const phoneInput = document.getElementById(phoneConfig.id);
        if (phoneInput) {
            phoneInput.addEventListener(phoneConfig.event, function(e) {
                this.value = this.value.replace(/\D/g, '');
                if (this.value.length > 10) this.value = this.value.substring(0, 10);
            });
        }
    });
}

function validateCheckoutForm() {
    const requiredFields = [
        'checkoutName',
        'checkoutEmail',
        'checkoutPhone',
        'checkoutState',
        'checkoutMunicipality'
    ];
    
    for (const fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            field.focus();
            showNotification('يرجى تعبئة جميع الحقول المطلوبة', 'error');
            return false;
        }
    }
    
    const email = document.getElementById('checkoutEmail').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('البريد الإلكتروني غير صالح', 'error');
        return false;
    }
    
    if (!document.getElementById('agreeTerms').checked) {
        showNotification('يرجى الموافقة على الشروط والأحكام', 'error');
        return false;
    }
    
    return true;
}

async function handleRegister(e) {
    e.preventDefault();
    showLoading(true);
    
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (password !== confirmPassword) {
        showNotification('كلمات المرور غير متطابقة', 'error');
        showLoading(false);
        return;
    }
    
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        await userCredential.user.updateProfile({ displayName: name });
        
        await database.ref('users/' + userCredential.user.uid).set({
            name: name,
            email: email,
            phone: phone,
            createdAt: new Date().toISOString(),
            role: 'customer'
        });
        
        showNotification('تم إنشاء الحساب بنجاح', 'success');
        
    } catch (error) {
        console.error('❌ خطأ في إنشاء الحساب:', error);
        let errorMessage = 'خطأ في إنشاء الحساب';
        
        switch(error.code) {
            case 'auth/email-already-in-use':
                errorMessage = 'البريد الإلكتروني مستخدم بالفعل';
                break;
            case 'auth/invalid-email':
                errorMessage = 'البريد الإلكتروني غير صالح';
                break;
            case 'auth/weak-password':
                errorMessage = 'كلمة المرور ضعيفة جداً';
                break;
            default:
                errorMessage = error.message;
        }
        
        showNotification(errorMessage, 'error');
    } finally {
        showLoading(false);
    }
}

// ============================================
// 📱 دوال شريط التنقل السفلي للجوال
// ============================================

// تحديث عداد المفضلة في الجوال
function updateMobileFavoritesCount() {
    const mobileFavCount = document.getElementById('mobileFavoritesCount');
    if (mobileFavCount) {
        const count = appState.favorites.length;
        mobileFavCount.textContent = count;
        mobileFavCount.style.display = count > 0 ? 'flex' : 'none';
    }
}

// تحديث عداد السلة في الجوال
function updateMobileCartCount() {
    const mobileCartCount = document.getElementById('mobileCartCount');
    if (mobileCartCount) {
        const totalItems = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
        mobileCartCount.textContent = totalItems;
        mobileCartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// إعداد أحداث شريط التنقل السفلي
function setupMobileNavigation() {
    // زر الحساب في الجوال
    const mobileUserBtn = document.getElementById('mobileUserBtn');
    if (mobileUserBtn) {
        mobileUserBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (appState.currentUser) {
                // إذا كان المستخدم مسجل دخوله، نفتح القائمة
                domElements.userDropdown.classList.toggle('active');
            } else {
                // إذا لم يكن مسجل، نفتح نافذة التسجيل
                openAuthModal();
            }
        });
    }
    
    // زر السلة في الجوال
    const mobileCartBtn = document.getElementById('mobileCartBtn');
    if (mobileCartBtn) {
        mobileCartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            openCartModal();
        });
    }
    
    // روابط التنقل
    document.querySelectorAll('.bottom-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#') {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
                
                // تحديث الحالة إذا كانت المفضلة
                if (targetId === 'favorites') {
                    appState.currentView = 'favorites';
                    updateView();
                    renderFavorites();
                } else {
                    appState.currentView = targetId;
                    updateView();
                }
            }
        });
    });
}

// ============================================
// 🆕 دالة عرض رسالة الشكر باللون الأخضر الفاتح
// ============================================
function showThankYouMessage(order) {
    // إنشاء عنصر الرسالة
    const thankYouMessage = document.createElement('div');
    thankYouMessage.id = 'thankYouMessage';
    thankYouMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #A8D5BA, #7CB490);
        color: white;
        padding: 25px 35px;
        border-radius: 20px;
        box-shadow: 0 10px 40px rgba(90, 147, 103, 0.3);
        z-index: 10001;
        text-align: center;
        direction: rtl;
        font-family: 'Cairo', sans-serif;
        animation: slideIn 0.3s ease-out;
        border: 2px solid #5A9367;
        max-width: 90%;
        width: 400px;
    `;

    // تنسيق الرسالة باللون الأخضر الفاتح
    thankYouMessage.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 60px; color: #ffffff; margin-bottom: 15px;"></i>
        <h3 style="color: #ffffff; font-size: 28px; margin: 10px 0; font-weight: 700;">شكراً على طلبك!</h3>
        <p style="color: rgba(255, 255, 255, 0.9); font-size: 16px; margin: 10px 0;">
            ${order.customerName} عزيزي/عزيزتي
        </p>
        <div style="background: rgba(255, 255, 255, 0.2); padding: 15px; border-radius: 10px; margin: 15px 0;">
            <p style="color: #ffffff; margin: 5px 0;">
                <i class="fas fa-receipt"></i> رقم الطلب: ${order.orderNumber}
            </p>
            <p style="color: #ffffff; margin: 5px 0;">
                <i class="fas fa-coins"></i> الإجمالي: ${order.total} د.ج
            </p>
            <p style="color: #ffffff; margin: 5px 0;">
                <i class="fas fa-map-marker-alt"></i> التوصيل إلى: ${order.state} - ${order.municipality}
            </p>
        </div>
        <p style="color: #ffffff; font-size: 14px; margin: 15px 0 10px 0;">
            سيتم التواصل معك قريباً لتأكيد الطلب
        </p>
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
            <button onclick="closeThankYouMessage()" style="
                background: #ffffff;
                color: #5A9367;
                border: none;
                padding: 10px 25px;
                border-radius: 50px;
                font-weight: 600;
                cursor: pointer;
                font-size: 14px;
                transition: all 0.3s ease;
            ">
                <i class="fas fa-check"></i> تم
            </button>
        </div>
    `;

    // إضافة تأثيرات CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translate(-50%, -40%);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
        }
        
        @keyframes fadeOut {
            from {
                opacity: 1;
                transform: translate(-50%, -50%);
            }
            to {
                opacity: 0;
                transform: translate(-50%, -40%);
            }
        }
    `;
    document.head.appendChild(style);

    // إزالة أي رسالة سابقة
    const oldMessage = document.getElementById('thankYouMessage');
    if (oldMessage) oldMessage.remove();

    // إضافة الرسالة للصفحة
    document.body.appendChild(thankYouMessage);

    // إغلاق تلقائي بعد 7 ثواني
    setTimeout(closeThankYouMessage, 7000);
}

// دالة إغلاق رسالة الشكر
function closeThankYouMessage() {
    const message = document.getElementById('thankYouMessage');
    if (message) {
        message.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => message.remove(), 300);
    }
}

// 🧾 دالة إنشاء الإيصال مع خلفية الإيصال فقط بدون نافذة خلفية
function generateReceipt(order) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('ar-EG');
    const timeStr = now.toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });
    
    // إنشاء الباركود بصيغة نصية بسيطة
    const barcodeText = order.orderNumber.replace(/[^0-9]/g, '');
    const barcodeLines = barcodeText.split('').map(num => {
        const lines = '│'.repeat(parseInt(num) + 1);
        return `<div style="display: inline-block; width: 2px; background: black; height: ${(parseInt(num) + 1) * 8}px; margin: 0 1px;"></div>`;
    }).join('');
    
    let itemsHTML = '';
    order.items.forEach((item, index) => {
        const itemName = appState.currentLanguage === 'ar' ? item.name : 
                       appState.currentLanguage === 'en' ? item.name_en : item.name_fr;
        const itemTotal = item.price * item.quantity;
        
        itemsHTML += `
            <tr>
                <td style="padding: 6px 4px; text-align: center; border-bottom: 1px solid #eee; color: #333;">${itemName}</td>
                <td style="padding: 6px 4px; text-align: center; border-bottom: 1px solid #eee; color: #333;">${item.quantity}</td>
                <td style="padding: 6px 4px; text-align: center; border-bottom: 1px solid #eee; color: #333;">${itemTotal.toLocaleString()} د.ج</td>
            </tr>
        `;
    });
    
    // 🔥 الإيصال الجديد بدون نافذة خلفية - خلفية الإيصال فقط
    const receiptHTML = `
        <div id="receiptPopup" style="
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            background: white;
            border: 2px dashed #ccc;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            direction: rtl;
            font-family: 'Arial', sans-serif;
            z-index: 10000;
            max-height: 80vh;
            overflow-y: auto;
        ">
            <div style="text-align: center; margin-bottom: 10px;">
                <p style="font-size: 1.2rem; font-weight: bold; color: #2E7D32; margin: 0;">
                    ${appState.currentLanguage === 'ar' ? 'هدايا وأشياء جميلة' : 'Gifts and Beautiful Things'}
                </p>
            </div>
            
            <div style="text-align: center; font-size: 0.85rem; margin-bottom: 15px; color: #666; line-height: 1.4;">
                1234 شارع السوق، جناح 101<br />
                الجزائر العاصمة، الجزائر<br />
                التاريخ: ${dateStr}<br />
                الوقت: ${timeStr}
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 0.85rem;">
                <thead>
                    <tr>
                        <th style="background: #f5f5f5; color: #333; font-weight: bold; padding: 8px 4px; text-align: center; border-bottom: 2px solid #ddd;">المنتج</th>
                        <th style="background: #f5f5f5; color: #333; font-weight: bold; padding: 8px 4px; text-align: center; border-bottom: 2px solid #ddd;">الكمية</th>
                        <th style="background: #f5f5f5; color: #333; font-weight: bold; padding: 8px 4px; text-align: center; border-bottom: 2px solid #ddd;">السعر</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsHTML}
                </tbody>
            </table>

            <div style="display: flex; justify-content: space-between; font-size: 1rem; font-weight: bold; margin-bottom: 15px; padding-top: 10px; border-top: 2px solid #333;">
                <p style="margin: 0; color: #333;">المجموع الفرعي:</p>
                <p style="margin: 0; color: #333;">${order.subtotal.toLocaleString()} د.ج</p>
            </div>
            
            <div style="display: flex; justify-content: space-between; font-size: 1rem; font-weight: bold; margin-bottom: 15px;">
                <p style="margin: 0; color: #333;">تكاليف التوصيل:</p>
                <p style="margin: 0; color: #333;">${order.shipping.toLocaleString()} د.ج</p>
            </div>
            
            <div style="display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: bold; margin-bottom: 15px; padding-top: 10px; border-top: 2px solid #333;">
                <p style="margin: 0; color: #333;">المجموع الكلي:</p>
                <p style="margin: 0; color: #E91E63;">${order.total.toLocaleString()} د.ج</p>
            </div>
            
            <div style="display: flex; justify-content: center; margin-top: 15px; padding: 10px; background: #f8f8f8; border-radius: 4px;">
                <div style="text-align: center;">
                    <div style="margin-bottom: 5px;">${barcodeLines}</div>
                    <div style="font-family: monospace; font-size: 10px; letter-spacing: 2px; color: #333;">
                        ${order.orderNumber}
                    </div>
                </div>
            </div>

            <p style="font-size: 0.85rem; text-align: center; margin-top: 15px; color: #2E7D32; font-weight: bold; margin-bottom: 10px;">
                شكراً لتسوقك معنا!
            </p>
            
            <div style="font-size: 0.7rem; text-align: center; color: #666; margin-top: 10px; margin-bottom: 15px;">
                رقم الهاتف: 0676013042<br />
                طريقة الدفع: الدفع عند الاستلام
            </div>
            
            <div style="display: flex; gap: 10px; margin-top: 20px;">
                <button onclick="printReceipt()" style="
                    flex: 1;
                    padding: 10px;
                    background: linear-gradient(135deg, #4CAF50, #2E7D32);
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 14px;
                ">
                    <i class="fas fa-print"></i> طباعة
                </button>
                <button onclick="closeReceipt()" style="
                    flex: 1;
                    padding: 10px;
                    background: #757575;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    font-size: 14px;
                ">
                    <i class="fas fa-times"></i> إغلاق
                </button>
            </div>
        </div>
    `;
    
    // إنشاء عنصر الإيصال وإضافته مباشرة للصفحة
    const receiptPopup = document.createElement('div');
    receiptPopup.id = 'receiptPopupContainer';
    receiptPopup.innerHTML = receiptHTML;
    
    // إضافة الإيصال مباشرة إلى body بدون نافذة خلفية
    document.body.appendChild(receiptPopup);
    
    // إخفاء scrollbar للصفحة الرئيسية
    document.body.style.overflow = 'hidden';
}

// 🖨️ دالة طباعة الإيصال
function printReceipt() {
    const receiptElement = document.getElementById('receiptPopup');
    if (!receiptElement) return;
    
    const printContent = receiptElement.outerHTML;
    const printWindow = window.open('', '_blank', 'width=400,height=600');
    
    printWindow.document.write(`
        <!DOCTYPE html>
        <html dir="rtl">
        <head>
            <title>إيصال الطلب - ${appState.currentLanguage === 'ar' ? 'هدايا وأشياء جميلة' : 'Gifts and Beautiful Things'}</title>
            <meta charset="UTF-8">
            <style>
                @media print {
                    @page { 
                        margin: 5mm;
                        size: 80mm auto;
                    }
                    body { 
                        margin: 0; 
                        padding: 5px;
                        font-size: 12px;
                        color: #000 !important;
                    }
                    #receiptPopup {
                        width: 100% !important;
                        max-width: 100% !important;
                        border: none !important;
                        box-shadow: none !important;
                        padding: 10px !important;
                        margin: 0 !important;
                        position: static !important;
                        transform: none !important;
                        top: auto !important;
                        left: auto !important;
                        color: #000 !important;
                    }
                    button {
                        display: none !important;
                    }
                    p, td, th, div {
                        color: #000 !important;
                    }
                }
                
                #receiptPopup {
                    width: 300px;
                    background: white;
                    border: 2px dashed #ccc;
                    padding: 15px;
                    border-radius: 8px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    direction: rtl;
                    font-family: 'Arial', sans-serif;
                    color: #333;
                }
                
                #receiptPopup p, #receiptPopup td, #receiptPopup div {
                    color: #333;
                }
            </style>
        </head>
        <body style="color: #333;">
            ${printContent}
            <script>
                window.onload = function() {
                    setTimeout(() => {
                        window.print();
                        setTimeout(() => window.close(), 1000);
                    }, 500);
                };
            </script>
        </body>
        </html>
    `);
    
    printWindow.document.close();
}

// دالة إغلاق الإيصال
function closeReceipt() {
    const receiptPopup = document.getElementById('receiptPopupContainer');
    if (receiptPopup) {
        receiptPopup.remove();
    }
    document.body.style.overflow = 'auto';
}

async function handleCheckout(e) {
    e.preventDefault();
    showLoading(true);
    
    try {
        if (appState.cart.length === 0) throw new Error('السلة فارغة');
        if (!validateCheckoutForm()) {
            showNotification('يرجى تعبئة جميع الحقول المطلوبة', 'error');
            showLoading(false);
            return;
        }
        
        const subtotal = appState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const shipping = appState.deliveryPrice;
        const total = subtotal + shipping;
        
        const order = {
            customerName: document.getElementById('checkoutName').value,
            customerEmail: document.getElementById('checkoutEmail').value,
            phone: document.getElementById('checkoutPhone').value,
            state: document.getElementById('checkoutState').value,
            municipality: document.getElementById('checkoutMunicipality').value,
            deliveryType: appState.deliveryType,
            deliveryPrice: shipping,
            notes: document.getElementById('checkoutNotes').value || 'لا توجد ملاحظات',
            
            items: appState.cart.map(item => ({
                id: item.id,
                name: item.name,
                name_en: item.name_en,
                name_fr: item.name_fr,
                price: item.price,
                quantity: item.quantity,
                image: item.image
            })),
            
            subtotal: subtotal,
            shipping: shipping,
            total: total,
            status: 'جديد',
            paymentMethod: 'الدفع عند الاستلام',
            createdAt: new Date().toISOString(),
            userId: appState.currentUser.uid,
            orderNumber: 'ORD-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
            language: appState.currentLanguage
        };
        
        const newOrderRef = database.ref('orders').push();
        await newOrderRef.set(order);
        
        const orderKey = newOrderRef.key;
        order.firebaseKey = orderKey;
        order.id = orderKey;
        appState.lastOrder = order;
        
        appState.userOrders.unshift(order);
        updateOrdersCount();
        
        try {
            await sendOrderNotificationToStoreOwner(order);
            showNotification('✅ تم إرسال إشعار الطلب إلى إدارة المتجر', 'success');
        } catch (emailError) {
            console.error('❌ فشل إرسال البريد:', emailError);
            showNotification('⚠️ تم حفظ الطلب ولكن حدث خطأ في إرسال البريد', 'warning');
        }
        
        appState.cart = [];
        saveState();
        updateCartCount();
        closeModal('checkoutModal');
        
        // عرض رسالة الشكر أولاً
        setTimeout(() => {
            showThankYouMessage(order); // 👈 رسالة الشكر الجديدة باللون الأخضر الفاتح
            generateReceipt(order);
        }, 500);
        
    } catch (error) {
        console.error('❌ خطأ في إتمام الطلب:', error);
        showNotification('❌ حدث خطأ: ' + error.message, 'error');
    } finally {
        showLoading(false);
    }
}

async function sendOrderNotificationToStoreOwner(order) {
    try {
        const orderItemsText = order.items.map((item, index) => 
            `${index + 1}. ${item.name}\n   الكمية: ${item.quantity}\n   السعر: ${item.price} د.ج\n   الإجمالي: ${item.price * item.quantity} د.ج`
        ).join('\n\n');
        
        const emailData = {
            order_number: order.orderNumber,
            order_date: new Date(order.createdAt).toLocaleDateString('ar-EG'),
            customer_name: order.customerName,
            customer_phone: order.phone,
            customer_email: order.customerEmail,
            customer_address: `${order.state} - ${order.municipality}`,
            delivery_type: order.deliveryType === 'home' ? 'توصيل للمنزل' : 'توصيل للمكتب',
            delivery_cost: order.shipping + ' د.ج',
            order_items: orderItemsText,
            subtotal: order.subtotal + ' د.ج',
            shipping: order.shipping + ' د.ج',
            total: order.total + ' د.ج',
            notes: order.notes,
            whatsapp_link: `https://wa.me/213${order.phone.replace(/\D/g, '')}`
        };
        
        await emailjs.send(EMAILJS_CONFIG.serviceID, EMAILJS_CONFIG.adminTemplateID, emailData);
        
        if (order.firebaseKey) {
            await database.ref('orders/' + order.firebaseKey).update({
                email_sent_to_store_owner: true,
                email_sent_at: new Date().toISOString()
            });
        }
        
    } catch (error) {
        console.error('❌ فشل إرسال البريد:', error);
        throw error;
    }
}

async function loadUserOrders() {
    if (!appState.currentUser) {
        showNotification('يرجى تسجيل الدخول لعرض الطلبات السابقة', 'warning');
        return;
    }
    
    try {
        showLoading(true);
        
        const ordersRef = database.ref('orders');
        const snapshot = await ordersRef.orderByChild('userId').equalTo(appState.currentUser.uid).once('value');
        
        appState.userOrders = [];
        if (snapshot.exists()) {
            snapshot.forEach(childSnapshot => {
                const order = childSnapshot.val();
                order.id = childSnapshot.key;
                appState.userOrders.push(order);
            });
            
            appState.userOrders.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        
        updateOrdersCount();
        showUserOrdersModal();
        
    } catch (error) {
        console.error('خطأ في جلب الطلبات:', error);
        showNotification('حدث خطأ في جلب الطلبات السابقة', 'error');
    } finally {
        showLoading(false);
    }
}

function showUserOrdersModal() {
    const ordersList = document.getElementById('userOrdersList');
    const emptyMessage = document.getElementById('emptyOrdersMessage');
    
    ordersList.innerHTML = '';
    emptyMessage.innerHTML = '';
    emptyMessage.style.display = 'none';
    
    if (appState.userOrders.length === 0) {
        emptyMessage.innerHTML = `
            <div style="text-align: center; padding: 40px;">
                <i class="fas fa-shopping-bag" style="font-size: 60px; color: var(--light-green); margin-bottom: 20px;"></i>
                <h3 style="color: var(--dark-green); margin-bottom: 15px;">لا توجد طلبات سابقة</h3>
                <p style="color: var(--gray); margin-bottom: 20px;">لم تقم بإجراء أي طلبات حتى الآن.</p>
                <button onclick="closeModal('userOrdersModal'); document.getElementById('products').scrollIntoView({ behavior: 'smooth' });" 
                        style="padding: 12px 24px; background: var(--dark-green); color: white; border: none; border-radius: 5px; font-size: 14px; cursor: pointer;">
                    <i class="fas fa-shopping-cart"></i> ابدأ التسوق الآن
                </button>
            </div>
        `;
        emptyMessage.style.display = 'block';
    } else {
        const headerCard = document.createElement('div');
        headerCard.style.cssText = 'background: linear-gradient(135deg, var(--dark-green) 0%, #5A9367 100%); color: white; padding: 15px; border-radius: var(--radius); margin-bottom: 20px;';
        headerCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h3 style="margin: 0; font-size: 18px;">
                        <i class="fas fa-history"></i> طلباتي السابقة
                    </h3>
                    <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.9;">
                        ${appState.userOrders.length} طلب/طلبات
                    </p>
                </div>
                <div style="font-size: 24px;">
                    <i class="fas fa-box-open"></i>
                </div>
            </div>
        `;
        ordersList.appendChild(headerCard);
        
        appState.userOrders.forEach(order => {
            const orderCard = document.createElement('div');
            orderCard.className = 'order-card';
            orderCard.style.cssText = 'margin-bottom: 20px; padding: 20px; background: white; border-radius: var(--radius); border: 1px solid var(--light-gray); box-shadow: 0 2px 5px rgba(0,0,0,0.05);';
            
            const orderDate = new Date(order.createdAt);
            const dateStr = orderDate.toLocaleDateString('ar-EG');
            
            orderCard.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <div>
                        <div style="font-weight: 700; color: var(--dark-green);">طلب #${order.orderNumber}</div>
                        <div style="font-size: 12px; color: var(--gray);">${dateStr}</div>
                    </div>
                    <span style="background: #e8f5e9; color: #2e7d32; padding: 3px 10px; border-radius: 12px; font-size: 12px;">
                        ${order.status}
                    </span>
                </div>
                
                <div style="font-size: 18px; font-weight: 700; color: var(--dark-green); margin-bottom: 15px;">
                    ${order.total.toLocaleString('ar-EG')} د.ج
                </div>
                
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-size: 12px; color: var(--gray);">العنوان</div>
                        <div style="font-weight: 600;">${order.state} - ${order.municipality}</div>
                    </div>
                    <button class="btn btn-secondary" style="padding: 8px 15px; font-size: 14px;" onclick="viewOrderReceipt('${order.id}')">
                        <i class="fas fa-receipt"></i> عرض الإيصال
                    </button>
                </div>
            `;
            
            ordersList.appendChild(orderCard);
        });
    }
    
    openModal('userOrdersModal');
}

function viewOrderReceipt(orderId) {
    const order = appState.userOrders.find(o => o.id === orderId);
    if (order) {
        generateReceipt(order);
        closeModal('userOrdersModal');
    }
}

function reorderItems(orderId) {
    const order = appState.userOrders.find(o => o.id === orderId);
    if (!order) return;
    
    if (!confirm('هل تريد إضافة هذه المنتجات إلى سلة التسوق؟')) return;
    
    order.items.forEach(item => {
        const existingItem = appState.cart.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            const product = products.find(p => p.id === item.id);
            if (product) appState.cart.push({ ...product, quantity: item.quantity });
        }
    });
    
    saveState();
    updateCartCount();
    updateCartItems();
    showNotification('تمت إضافة المنتجات إلى سلة التسوق', 'success');
    closeModal('userOrdersModal');
}

function showMunicipalityDropdown() {
    const selectedState = domElements.checkoutState.value;
    if (!selectedState) return;
    
    const state = algerianStates.find(s => s.name === selectedState);
    if (!state) return;
    
    domElements.municipalitySuggestions.innerHTML = '';
    state.municipalities.forEach(municipality => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.textContent = municipality;
        suggestionItem.addEventListener('click', () => {
            domElements.municipalityInput.value = municipality;
            domElements.municipalitySuggestions.classList.remove('active');
        });
        domElements.municipalitySuggestions.appendChild(suggestionItem);
    });
    
    domElements.municipalitySuggestions.classList.add('active');
}

function filterMunicipalities(searchTerm) {
    const selectedState = domElements.checkoutState.value;
    if (!selectedState) return;
    
    const state = algerianStates.find(s => s.name === selectedState);
    if (!state) return;
    
    const filtered = state.municipalities.filter(m => 
        m.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    domElements.municipalitySuggestions.innerHTML = '';
    filtered.forEach(municipality => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.textContent = municipality;
        suggestionItem.addEventListener('click', () => {
            domElements.municipalityInput.value = municipality;
            domElements.municipalitySuggestions.classList.remove('active');
        });
        domElements.municipalitySuggestions.appendChild(suggestionItem);
    });
    
    domElements.municipalitySuggestions.classList.add('active');
}

function loadAlgerianStates() {
    domElements.checkoutState.innerHTML = '<option value="">اختر الولاية</option>';
    algerianStates.forEach(state => {
        const option = document.createElement('option');
        option.value = state.name;
        option.textContent = state.name;
        domElements.checkoutState.appendChild(option);
    });
}

function calculateShippingCost() {
    const selectedStateName = domElements.checkoutState.value;
    const selectedState = algerianStates.find(state => state.name === selectedStateName);
    
    if (selectedState) {
        appState.deliveryPrice = appState.deliveryType === 'home' ? 
            selectedState.homeDelivery : selectedState.officeDelivery;
    } else {
        appState.deliveryPrice = appState.deliveryType === 'home' ? 400 : 600;
    }
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    document.body.style.overflow = 'auto';
    domElements.userDropdown.classList.remove('active');
    domElements.langDropdown.classList.remove('active');
    domElements.municipalitySuggestions.classList.remove('active');
}

function showNotification(message, type = 'success') {
    domElements.notificationText.textContent = message;
    const icon = domElements.notification.querySelector('i');
    icon.className = type === 'error' ? 'fas fa-exclamation-circle' :
                    type === 'warning' ? 'fas fa-exclamation-triangle' :
                    type === 'info' ? 'fas fa-info-circle' : 'fas fa-check-circle';
    
    domElements.notification.className = `notification ${type} show`;
    setTimeout(() => domElements.notification.classList.remove('show'), 3000);
}

function showLoading(show) {
    if (show) domElements.loading.classList.add('active');
    else domElements.loading.classList.remove('active');
}

function showFavoritesPage() {
    appState.currentView = 'favorites';
    updateView();
    renderFavorites();
}

function updateView() {
    const sections = ['home', 'categories', 'products', 'favorites', 'about'];
    sections.forEach(section => {
        document.getElementById(section).style.display = 
            appState.currentView === section ? 'block' : 'none';
    });
    
    if (appState.currentView === 'favorites') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

async function handleLogout() {
    try {
        await auth.signOut();
        showNotification('تم تسجيل الخروج بنجاح', 'success');
    } catch (error) {
        console.error('خطأ في تسجيل الخروج:', error);
        showNotification('خطأ في تسجيل الخروج', 'error');
    }
}

console.log(`

`);
