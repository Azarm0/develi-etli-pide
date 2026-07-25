// Authentic Restaurant Data for Develi Etli Pide & Taş Fırın Salonu (Zeytinburnu)

export const restaurantInfo = {
  name: "Develi Etli Pide & Taş Fırın Salonu",
  subtitle: "Zırhtan Fırına Asırlık Kayseri Lezzeti",
  rating: 4.6,
  reviewCount: "120+",
  address: "Veliefendi, 74. Sk. 14-26c, 34025 Zeytinburnu / İstanbul",
  addressDetail: "Zeytinburnu Kültür ve Sanat Merkezi Yakını, Veliefendi Mahallesi",
  phone: "(0212) 664 95 40",
  whatsappPhone: "902126649540",
  workingHours: {
    weekdays: "10:00 - 22:00",
    saturday: "10:00 - 22:00",
    sunday: "11:00 - 21:30"
  },
  isOpenNow: true,
  plusCode: "XWV2+RM Zeytinburnu, İstanbul",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.666491753995!2d28.9016609!3d40.9946168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb0a446a7017%3A0x8ad52900376fce49!2sDeveli%20Etli%20Pide!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
};

export const menuCategories = [
  { id: "all", name: "Tüm Lezzetler" },
  { id: "civikli", name: "Meşhur Develi Cıvıklısı" },
  { id: "pideler", name: "Taş Fırın Pideler" },
  { id: "corba_tatli", name: "Çorba & Tatlılar" },
  { id: "icecekler", name: "Soğuk İçecekler" }
];

export const menuItems = [
  {
    id: 1,
    category: "civikli",
    name: "Meşhur Develi Cıvıklısı (Zırh Kuşbaşılı)",
    price: 469,
    description: "Kayseri Develi yöresine has, zırh zırh doğranmış dananın ve koyunun özel etleri, domates, yeşil biber ve baharatlarla harmanlanarak incecik çıtır taş fırın hamurunda pişirilir.",
    tags: ["İmza Lezzet", "Kayseri Tescilli", "Taş Fırın"],
    isPopular: true,
    image: "gallery/gmaps_real_16.jpg"
  },
  {
    id: 2,
    category: "civikli",
    name: "Develi Cıvıklısı (Kıymalı)",
    price: 449,
    description: "Geleneksel meşe odunu taş fırınında yüksek ateşte pişen, taze doğranmış domates ve ince biber aromalı kıymalı Develi usulü çıtır pide.",
    tags: ["Çıtır Hamur", "Geleneksel"],
    isPopular: false,
    image: "gallery/gmaps_real_2.jpg"
  },
  {
    id: 3,
    category: "pideler",
    name: "Develi Özel Köy Peynirli Pide",
    price: 449,
    description: "Kayseri yayla köy peynirleri ve özel tereyağı dokunuşuyla hazırlanan, içi yumuşacık kenarları çıtır özel peynirli pide.",
    tags: ["Vejetaryen", "Köy Peynirli"],
    isPopular: true,
    image: "gallery/gmaps_real_24.jpg"
  },
  {
    id: 4,
    category: "pideler",
    name: "Karışık Taş Fırın Pide",
    price: 489,
    description: "Zırh kuşbaşı et, özel kıyma harcı ve erimiş kaşar peynirinin muazzam uyumu. Bol malzemeli gurme lezzet.",
    tags: ["Bol Malzeme", "Kaşarlı & Etli"],
    isPopular: true,
    image: "gallery/gmaps_real_5.jpg"
  },
  {
    id: 5,
    category: "pideler",
    name: "Kavurmalı Kaşarlı Pide",
    price: 499,
    description: "Özel Rize tipi döküm kavurma ve uzayan taze kaşar peyniri ile taş fırında pişen nefis pideniz.",
    tags: ["Gurme", "Kavurmalı"],
    isPopular: false,
    image: "gallery/gmaps_real_14.jpg"
  },
  {
    id: 6,
    category: "corba_tatli",
    name: "Meşhur Develi Tahinli & Cevizli Pide",
    price: 499,
    description: "Kayseri'nin asırlık tatlı geleneği. Taş fırında karamelleşen çifte kavrulmuş susam tahini ve üzerine bol iri kıyım ceviz.",
    tags: ["Efsane Tatlı", "Tahin & Ceviz"],
    isPopular: true,
    image: "gallery/tahinli_cevizli_pide.jpg"
  },
  {
    id: 7,
    category: "corba_tatli",
    name: "Geleneksel Süzme Mercimek Çorbası",
    price: 180,
    description: "Tereyağlı sosu, kızarmış kruton ekmeği ve taze limon dilimiyle servis edilen sıcacık ev usulü süzme mercimek çorbası.",
    tags: ["Sıcak Başlangıç"],
    isPopular: false,
    image: "gallery/mercimek_corbasi.jpg"
  },
  {
    id: 8,
    category: "corba_tatli",
    name: "Antep Fıstıklı Çıtır Katmer",
    price: 280,
    description: "Taş fırında pişen, içinde bol hakiki Gaziantep boz fıstığı ve süt kaymağı bulunan çıtır katmer tatlısı.",
    tags: ["Çıtır Katmer"],
    isPopular: false,
    image: "gallery/gmaps_real_20.jpg"
  },
  {
    id: 9,
    category: "icecekler",
    name: "Özel Yayık Ayranı (Köpüklü)",
    price: 65,
    description: "Bakır maşrapada sunulan, doğal yoğurttan hazırlanan bol köpüklü ferahlatıcı geleneksel yayık ayranı.",
    tags: ["Bakır Maşrapa", "Doğal Yoğurt"],
    isPopular: true,
    image: "gallery/yayik_ayrani.jpg"
  },
  {
    id: 10,
    category: "icecekler",
    name: "Acılı / Acısız Şalgam Suyu",
    price: 65,
    description: "Adana usulü cam şişede sunulan serinletici lezzetli şalgam suyu.",
    tags: ["Cam Şişe"],
    isPopular: false,
    image: "gallery/salgam_suyu.jpg"
  }
];

export const galleryPhotos = [
  { id: 1, src: "gallery/gmaps_real_1.jpg", title: "Zeytinburnu Salon Ön Cephesi", category: "Restoran" },
  { id: 2, src: "gallery/gmaps_real_21.jpg", title: "Geleneksel Meşe Odunu Taş Fırınımız", category: "Restoran" },
  { id: 3, src: "gallery/gmaps_real_16.jpg", title: "Çıtır Kıymalı Develi Pidesi Servisi", category: "Pide" },
  { id: 4, src: "gallery/gmaps_real_24.jpg", title: "Özel Köy Peynirli Pidemiz", category: "Pide" },
  { id: 5, src: "gallery/gmaps_real_5.jpg", title: "Karışık Taş Fırın Gurme Pide", category: "Pide" },
  { id: 6, src: "gallery/gmaps_real_11.jpg", title: "Masada Sıcak Pide ve Meze İkramı", category: "Sofra" },
  { id: 7, src: "gallery/gmaps_real_14.jpg", title: "Biberli Özel Pide", category: "Pide" },
  { id: 8, src: "gallery/tahinli_cevizli_pide.jpg", title: "Cevizli ve Tahinli Tatlı Pidemiz", category: "Tatlı" },
  { id: 9, src: "gallery/gmaps_real_19.jpg", title: "Samimi ve Hijyenik Salonumuz", category: "Restoran" },
  { id: 10, src: "gallery/gmaps_real_18.jpg", title: "Geleneksel Tırnak Pidesi", category: "Pide" },
  { id: 11, src: "gallery/gmaps_real_20.jpg", title: "Antep Fıstıklı Süt Kaymaklı Katmer", category: "Tatlı" },
  { id: 12, src: "gallery/gmaps_real_4.jpg", title: "Pide ve Ayran İkramı", category: "İçecek" },
  { id: 14, src: "gallery/gmaps_real_15.jpg", title: "Zeytinburnu Salon Cephesi", category: "Restoran" },
  { id: 15, src: "gallery/gmaps_real_25.jpg", title: "Develi Pide Gece Görünümü", category: "Restoran" }
];

export const customerReviews = [
  {
    id: 1,
    name: "Ahmet Yılmaz",
    rating: 5,
    date: "1 hafta önce",
    comment: "Kayseri'ye gitmiş kadar olduk! Taş fırından çıkan Develi Cıvıklısı'nın hamuru pamuk gibi ve kenarları çıtır çıtır. Zırh etinin lezzeti harika. Zeytinburnu'ndaki en iyi pideci.",
    source: "Google Haritalar Doğrulanmış Müşteri"
  },
  {
    id: 2,
    name: "Selin Şahin",
    rating: 5,
    date: "2 hafta önce",
    comment: "Tahinli ve cevizli pideyi mutlaka ama mutlaka deneyin. Yemek sonrası mükemmel bir tatlı seçeneği. Aile ortamı çok temiz ve çalışanlar çok güler yüzlü.",
    source: "Google Haritalar Doğrulanmış Müşteri"
  },
  {
    id: 3,
    name: "Murat Demir",
    rating: 5,
    date: "1 ay önce",
    comment: "Paket siparişim fırından yeni çıkmış gibi sıcacık ve çıtırlığını kaybetmeden geldi. Peynirli pide ve mercimek çorbası çok başarılıydı. Teşekkürler!",
    source: "Google Haritalar Doğrulanmış Müşteri"
  },
  {
    id: 4,
    name: "Hakan Öztürk",
    rating: 5,
    date: "2 ay önce",
    comment: "Gerçek odun ateşinde taş fırın lezzeti. Malzemeden hiç kaçınmamışlar, etlerin kokusu ve tazeliği mükemmel. Fiyatlar lezzete göre gayet makul.",
    source: "Google Haritalar Doğrulanmış Müşteri"
  }
];
