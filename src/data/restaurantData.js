// CONCEPT PAGE DATA. The contact details below are placeholders, not real.
//
// This site was built as an unsolicited pitch. The restaurant it is modelled on
// has not commissioned it, has not approved it and does not know it exists, so
// nothing here may be a working way to reach them or to find them: no real
// phone number, no street address, no Plus Code, no Google Maps embed pinned to
// their listing. The rating and review count were scraped from that listing and
// are gone for the same reason.
//
// The phone number uses the Turkish 555 reserve range, which never routes to a
// person. Same convention as `mikron-teknik/src/data/icerik.js` and
// `mevcut-digital/src/data/vitrin.ts`.

export const restaurantInfo = {
  name: "Develi Etli Pide & Taş Fırın Salonu",
  subtitle: "Zırhtan Fırına Asırlık Kayseri Lezzeti",
  address: "Zeytinburnu / İstanbul",
  addressDetail: "Örnek konum bilgisidir",
  phone: "(0212) 555 01 84",
  whatsappPhone: "902125550184",
  workingHours: {
    weekdays: "10:00 - 22:00",
    saturday: "10:00 - 22:00",
    sunday: "11:00 - 21:30"
  },
  isOpenNow: true,

  // Sample figures, not the restaurant's real Google rating.
  rating: 4.7,
  reviewCount: "40+"
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

// SAMPLE REVIEWS. Invented names, invented comments, written to show the layout.
// These were previously labelled as verified Google Maps reviews of a real
// restaurant that never agreed to appear here. Do not repopulate from a scrape.
export const customerReviews = [
  {
    id: 1,
    name: "A. Y.",
    rating: 5,
    date: "Örnek yorum",
    comment: "Hamuru ince, kenarları çıtır çıtır geldi. Sıcak servis edilmesi de fark yaratıyor.",
    source: "Örnek müşteri yorumu"
  },
  {
    id: 2,
    name: "S. Ş.",
    rating: 5,
    date: "Örnek yorum",
    comment: "Tatlı olarak tahinli pideyi denedik, yemek sonrası için iyi bir seçim. Salon temizdi.",
    source: "Örnek müşteri yorumu"
  },
  {
    id: 3,
    name: "M. D.",
    rating: 5,
    date: "Örnek yorum",
    comment: "Paket siparişte çıtırlığını kaybetmemişti. Çorba da yanında sıcak geldi.",
    source: "Örnek müşteri yorumu"
  },
  {
    id: 4,
    name: "H. Ö.",
    rating: 4,
    date: "Örnek yorum",
    comment: "Akşam saatlerinde biraz beklemek gerekti ama pidenin lezzeti beklemeye değdi.",
    source: "Örnek müşteri yorumu"
  }
];
