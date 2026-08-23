# React Todo / Görev Yönetimi Uygulaması 📝

Bu proje, **"Web Geliştirme; Yapay Zeka Proje Yönergesi"** ödev gereksinimlerine birebir uygun olarak geliştirişmiş, modüler ve responsive bir **Yapılacaklar Listesi (Todo App)** uygulamasıdır.

---

## 🚀 Öne Çıkan Özellikler

Uygulama temel 4 CRUD operasyonunu ve kullanıcı deneyimini artıran ek özellikleri eksiksiz olarak sunar:

- ➕ **Görev Ekleme (Create):** Kullanıcı yeni görev başlığını yazarak listeye anında ekleyebilir.
- 📋 **Görev Listeleme (Read):** Eklenen görevler estetik Bootstrap 5 kart yapısında görüntülenir.
- ✏️ **Görev Güncelleme (Update):** 
  - **Metin Düzenleme:** Satır içi (inline) düzenleme modu ile görev başlığı güncellenebilir.
  - **Durum Değiştirme:** Checkbox ile görev tamamlandı/tamamlanmadı olarak işaretlenebilir.
- 🗑️ **Görev Silme (Delete):** "Sil" butonu ile görev hem arayüzden hem de `LocalStorage` üzerinden kalıcı olarak silinir.
- 📊 **Görev Sayısı Özeti:** Toplam, Tamamlanan ve Bekleyen görev sayıları ile dinamik ilerleme çubuğu.
- 🔍 **Filtreleme:** "Tümü", "Tamamlanan" ve "Bekleyen" butonları ile görevleri filtreleme.
- 💬 **Boş Liste Mesajı (Empty State):** Liste boş olduğunda kullanıcıya gösterilen bilgilendirici görsel mesaj.
- 💾 **Kalıcı Veri Saklama (LocalStorage):** Sayfa yenilense veya tarayıcı kapatılsa dahi görevler korunur.

---

## 🛠️ Kullanılan Teknolojiler

- **React 18** (Functional Components, Custom Hooks)
- **Vite** (Hızlı derleme ve geliştirme sunucusu)
- **Bootstrap 5** (Stillendirme ve responsive arayüz bileşenleri)
- **LocalStorage API** (Kalıcı veri yönetimi)

---

## 📁 Proje Klasör Yapısı

```
react-todo-app/
├── public/
├── src/
│   ├── components/       # Yeniden kullanılabilir UI bileşenleri
│   │   ├── TodoForm.jsx      # Görev ekleme input & buton bileşeni
│   │   ├── TodoItem.jsx      # Tekil görev kartı (Düzenle/Sil/Checkbox)
│   │   ├── TodoList.jsx      # Görev listesi & Boş durum mesajı
│   │   ├── TodoFilter.jsx    # Filtreleme buton grubu
│   │   └── TodoSummary.jsx   # Özet sayaç kartları & ilerleme çubuğu
│   ├── pages/            # Sayfa bileşenleri
│   │   └── Home.jsx          # Ana sayfa düzeni ve bileşen birleşimi
│   ├── interfaces/       # Veri modeli tip belgelendirmeleri
│   │   └── todoTypes.js      # JSDoc Todo tip tanımları
│   ├── hooks/            # Özel React hook'ları
│   │   ├── useLocalStorage.js # LocalStorage durum yönetimi hook'u
│   │   └── useTodos.js        # Görev CRUD ve filtreleme mantığı hook'u
│   ├── App.jsx           # Kök uygulama bileşeni
│   ├── main.jsx          # Uygulama giriş noktası ve Bootstrap CSS importu
│   └── index.css         # Özel tema ve animasyon stilleri
├── .gitignore            # Git takibinden hariç tutulan dosyalar (node_modules, dist)
├── index.html            # HTML5 şablonu
├── netlify.toml          # Netlify otomatik dağıtım (deploy) ayarları
├── package.json          # Proje bağımlılıkları ve npm betikleri
├── README.md             # Proje dokümantasyonu
└── vite.config.js        # Vite konfigürasyonu
```

---

## ⚙️ Kurulum ve Çalıştırma Adımları

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edin:

### 1. Bağımlılıkları Yükleyin
Proje kök dizininde terminali açın ve gerekli paketleri yükleyin:
```bash
npm install
```

### 2. Geliştirme Sunucusunu Başlatın
Uygulamayı yerel geliştirme sunucusunda (localhost) çalıştırmak için:
```bash
npm run dev
```
Tarayıcınız otomatik olarak `http://localhost:3000` adresinde açılacaktır.

### 3. Üretim Derlemesi Alın (Build)
Netlify veya benzeri sunucular için üretim paketini derlemek isterseniz:
```bash
npm run build
```
Derlenmiş dosyalar `dist/` klasöründe oluşacaktır.

---

## 🌐 Netlify Dağıtımı (Deployment)

Proje root dizininde yer alan `netlify.toml` dosyası sayesinde Netlify üzerinde sıfır konfigürasyon ile canlıya alınabilir:
- **Build command:** `npm run build`
- **Publish directory:** `dist`
