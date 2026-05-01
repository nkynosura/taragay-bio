# TARAGAY-BİO

**Mikro Yerçekimi Ortamı için Otonom Fotobiyoreaktör ve Tarım Modülü** 🌌🌱

TARAGAY-BİO, Ay ve Mars gibi derin uzay görevlerinde astronotların besin ihtiyacını karşılamak için **Yerinde Kaynak Kullanımı (ISRU)** ve **Biyorejeneratif Yaşam Destek Sistemleri (BLSS)** prensiplerine göre tasarlanmış otonom bir akıllı sera donanımı ve yer kontrol istasyonu arayüzüdür.

## 🚀 Proje Amacı ve Bilimsel Temeller

Mikro yerçekiminde bitkiler *gravitropizm* (yerçekimine yönelim) yeteneğini kaybeder ve *otomorfogenez* adı verilen rastgele, stresli bir büyüme (hücresel kaos) sergiler. TARAGAY-BİO, bu problemi **Random Positioning Machine (RPM)** prensibiyle çözer. İki eksenli dönme simülasyonu sayesinde yerçekimi vektörünün zamansal ortalamasını sıfıra yaklaştırarak "işlevsel ağırlıksızlık" yaratır veya spesifik gezegen/uydu yerçekimlerini (Ay 0.16g, Mars 0.38g) simüle eder.

### 🌟 Temel Özellikler
*   **RPM Kinematik Kontrolü:** İki eksenli motor kontrolü ile mikro yerçekimi simülasyonu.
*   **Otonom Çevre Kontrolü:** Sıcaklık, nem, CO2 ve pH seviyelerinin anlık izlenmesi ve dengelenmesi.
*   **Canlı Telemetri ve Veri Kaydı (Data Logger):** Biyoreaktörden gelen donanım verilerinin ve uyarıların kronolojik "Terminal" izlemesi.
*   **Akıllı Raporlama:** Biyokütle tahmini, kök yönelim sapması analizleri ve PDF/CSV dışa aktarım seçenekleri.

---

## 💻 Teknoloji Yığını

Bu depo, donanımın uzaktan yönetilmesini sağlayan modern **Web Dashboard (Yer Kontrol İstasyonu)** yazılımını içermektedir.

*   **Framework:** Next.js (App Router), React 19
*   **Stil Dili:** Tailwind CSS v4
*   **Arayüz Bileşenleri:** Radix UI (Shadcn mimarisi)
*   **İkonlar & Grafikler:** Lucide React, Recharts
*   **Tasarım Konsepti:** Cyber-Lab estetiği, Glassmorphism, Dark Theme, Vurgu Rengi: `#86bc25`

---

## 🛠️ Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

1. **Depoyu Klonlayın:**
   ```bash
   git clone <repo-url>
   cd taragay_bio
   ```

2. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
   ```

4. **Erişim:** Tarayıcınızda `http://localhost:3000` adresine gidin.

---

## 👥 Takım ve Roller

Proje aşağıdaki çekirdek ekip tarafından geliştirilmektedir:

*   **Musa Seyidoğlu** - Makine Mühendisliği (Lisans 4. Sınıf)
    *   *Sorumluluklar:* Mekanik tasarım, teknik çizim, sistem mimarisi ve RPM stabilizasyonu.
*   **Nisa Nur Keklik** - Endüstri Mühendisliği (Lisans 2. Sınıf)
    *   *Sorumluluklar:* Sistem analizi, operasyon, süreç yönetimi, arayüz organizasyonu ve proje geliştirme.

---

## 📁 Proje Klasör Yapısı

*   **`/app`:** Next.js ana uygulama dizini. Uygulamanın state (durum) yönetimi ağırlıklı olarak `page.tsx` üzerinden yürütülür.
*   **`/components/bioreactor`:** TARAGAY-BİO'ya özel olarak yazılmış, "Cyber-Lab" konseptindeki otonom modüller (Control Panel, Telemetry Timeline, Raporlar, Kameralar).
*   **`/components/ui`:** Radix tabanlı genel amaçlı bileşenler.
*   **`/public`:** Proje logoları ve statik varlıklar.

---
*TARAGAY-BİO, uzay tarımı ve sürdürülebilir kapalı döngü yaşam sistemleri için geliştirilmiş vizyoner bir projedir.* 🌱✨
