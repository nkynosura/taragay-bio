================================================================================
TARAGAY-BIO BİYOREAKTÖR KONTROL PORTALI - UI/UX DESIGN SYSTEM DOCUMENT
Tarih: Mayıs 2026
Versiyon: 1.0
Hazırlayanlar: Musa Seyidoğlu, Nisa Nur Keklik
================================================================================

1. PROJE ÖZETİ VE TASARIM VİZYONU
--------------------------------------------------------------------------------
TARAGAY-BIO, mikro yerçekimi ortamında tohum gelişimini inceleyen otonom bir 
fotobiyoreaktördür. Bu kontrol portalı, sistemin "Yer Kontrol İstasyonu" (Ground 
Control Station) olarak işlev görür. 
Tasarım Vizyonu: "Cyber-Lab" / Uzay Teknolojisi estetiği. Karanlık, profesyonel,
veriye odaklanan (data-driven), modern ve güven veren bir arayüz.

2. RENK PALETİ (COLOR PALETTE)
--------------------------------------------------------------------------------
Tasarım "Dark Mode" (Karanlık Tema) üzerine kuruludur.

# Ana Marka Renkleri (Brand Colors)
- TGY Primary Green : #86bc25 (Logo yeşili, ana butonlar, aktif sekmeler, vurgular)
- TGY Dark Green    : #2c4212 (Yeşilin arka plan geçişleri veya hover durumları)

# Arka Plan Renkleri (Background Colors)
- App Background    : #121212 (Ana ekranın en alt katmanı, tam karanlık)
- Card Background   : #1e1e1e (Paneller, kartlar ve widget arka planları)
- Glassmorphism     : rgba(30, 30, 30, 0.6) (Arka planı bulanıklaştıran cam efekti)
- Border/Line       : #2d2d2d (Kartları birbirinden ayıran ince çizgiler)

# Semantik Renkler (Durum ve Sensör Renkleri)
- Sıcaklık (Isı)    : #e9904d (Turuncu - Termal veriler ve ısı uyarıları)
- Nem/Su            : #4d90e9 (Mavi - Su seviyesi, nem ve sulama modülleri)
- Hata/Kritik Uyarı : #ef4444 (Kırmızı - Sensör kopması, eşik aşımı)
- Başarılı/Aktif    : #10b981 (Zümrüt Yeşili - Sistem aktif, komut başarılı)
- Pasif/Kapalı      : #6b7280 (Gri - Pasif butonlar, inaktif sensörler)

# Tipografi Renkleri (Text Colors)
- Ana Metin (Title) : #ffffff (Tam beyaz, başlıklar ve önemli sayılar)
- İkincil Metin     : #9ca3af (Açık gri, alt başlıklar, etiketler ve birimler)
- TGY Green Metin   : #86bc25 (Aktif sayfa isimleri veya önemli başarı mesajları)

3. TİPOGRAFİ (TYPOGRAPHY)
--------------------------------------------------------------------------------
- Ana Font (UI, Başlıklar, Kartlar): 'Inter' veya 'Roboto' (Sade, okunabilir, Sans-serif).
- Kod/Telemetri Fontu: 'Fira Code', 'JetBrains Mono' veya 'Courier New' (Zaman
  çizelgesi, loglar ve teknik veri akışları için Monospace).

# Boyutlandırma (Sizing)
- H1 (Sayfa Başlığı) : 24px, Semi-Bold
- H2 (Kart Başlığı)  : 16px, Medium, Uppercase (Örn: CANLI KAMERA BESLEMESİ)
- Ana Değerler       : 32px, Bold (Örn: 24.6°C, 1176 ppm)
- Paragraf/Normal    : 14px, Regular
- Küçük Metin/Birim  : 12px, Light (Örn: ppm, % oranı, tarih logları)

4. UI/UX PRENSİPLERİ VE BİLEŞENLER (COMPONENTS)
--------------------------------------------------------------------------------
- Köşe Yuvarlama (Border Radius): Tüm kartlarda ve butonlarda yumuşak köşeler 
  kullanılmalı. (Genellikle 'rounded-xl' veya 12px-16px). Keskin köşelerden kaçınılmalı.
- Gölgelendirme (Shadows): Dark mode olduğu için derinlik, gölgelerden ziyade
  ince kenarlıklar (borders) ve arka plan renk tonlarındaki farklılıklarla verilmeli.
- Cam Efekti (Glassmorphism): Kamera paneli veya üzerine binen bildirim/telemetri
  panellerinde arkaplanı bulanıklaştıran 'backdrop-blur-md' efekti uygulanmalı.
- Etkileşim (Hover & Active): 
  * Butonlara gelindiğinde parlaklık hafifçe artmalı (opacity %90).
  * Yerçekimi modları (Dünya, Ay, Mars) seçildiğinde kutu etrafında #86bc25
    renkli kalın bir border (ring) oluşmalı.

5. SAYFA HİYERARŞİSİ (PAGE HIERARCHY)
--------------------------------------------------------------------------------
- Sidebar (Sol Menü): Logo alanı, Anasayfa, Raporlar, Profil, Yardım.
- Topbar (Üst Bilgi): Sayfa başlığı, Gece/Gündüz modu ikonu, Bildirimler (Çan), 
  Kullanıcı Dropdown Menüsü (Profil Özeti ve Çıkış).
- Main Layout (Ana İçerik): 3 veya 4 sütunlu grid yapısı. 
  * Sol: Seçimler (Bitki ve Yerçekimi).
  * Orta: Görüntü (Video feed) ve Ana Sensörler (Sıcaklık/Nem).
  * Sağ: Kontroller (Sulama, RPM motoru) ve Tablolar.

6. İKONOGRAFİ (ICONOGRAPHY)
--------------------------------------------------------------------------------
- İkon Kütüphanesi: 'Lucide-React' veya 'Heroicons' (Lineer, içi boş, ince ikonlar).
- Sık Kullanılan İkonlar: 
  * Thermometer (Sıcaklık)
  * Droplet (Nem/Su)
  * Wind/Cloud (CO2)
  * Flask/Activity (pH / Bilimsel veriler)
  * RotateCcw / Activity (Motor dönüşü / RPM)
  * User (Profil)

================================================================================
SON. Bu belge TARAGAY-BIO geliştirme ekibi ve Yapay Zeka (AI) asistanları için 
referans kaynağıdır.
================================================================================