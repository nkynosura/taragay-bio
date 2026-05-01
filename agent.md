# TARAGAY-BİO Proje Bağlamı ve Yapay Zeka Geliştirici Rehberi (Agent Context)

Bu doküman, yapay zeka kodlama asistanlarının (AI Coding Agents) TARAGAY-BİO projesini hızlıca kavraması, doğru terminolojiyi kullanması, mevcut kod ve klasör yapısına sadık kalarak yazılım-donanım entegrasyonu mantığına uygun üretim yapması için hazırlanmıştır. Geliştirme yapmadan önce bu dosyayı referans alın.

---

## 1. Proje Özeti ve Bilimsel Amaç

**TARAGAY-BİO**, "Mikro Yerçekimi Ortamı için Otonom Fotobiyoreaktör ve Tarım Modülü"dür.
Ay ve Mars gibi derin uzay görevlerinde astronotların besin ihtiyacını karşılamak için Yerinde Kaynak Kullanımı (ISRU) ve Biyorejeneratif Yaşam Destek Sistemleri (BLSS) prensiplerine göre geliştirilmiştir.

*   **Problem:** Mikro yerçekiminde bitkiler *gravitropizm* (yerçekimine yönelim) yeteneğini kaybeder ve *otomorfogenez* adı verilen rastgele, stresli bir kök büyümesi (hücresel kaos) sergiler.
*   **Çözüm:** Sistem, iki eksenli **Random Positioning Machine (RPM)** prensibiyle çalışır. Deney haznesini rastgele hızlarda döndürerek yerçekimi vektörünün zamansal ortalamasını sıfıra yaklaştırır ve "işlevsel ağırlıksızlık" simüle eder (Earth 1.0g, Moon 0.16g, Mars 0.38g, ISS microG).
*   **Donanım Özellikleri:** Otonom su püskürtme, programlanabilir LED ışıklandırma, mikro dozaj pompaları ve otonom çevre kontrolü (Sıcaklık, Nem, CO2, pH).

## 2. Teknoloji Yığını (Tech Stack)

Bu proje modern bir web uygulamasıdır ve aşağıdaki teknolojilerle inşa edilmiştir:
*   **Framework:** Next.js (App Router) ve React (v19)
*   **Stil ve Tasarım:** Tailwind CSS (v4)
*   **Bileşen Kütüphanesi:** Radix UI Primitives tabanlı (Shadcn UI benzeri yapı)
*   **İkonlar:** `lucide-react`
*   **Grafik ve Veri Görselleştirme:** `recharts`
*   **Paket Yöneticisi:** npm

## 3. Tasarım Dili ve UI/UX Prensipleri

Yeni bileşenler oluştururken mutlaka aşağıdaki tasarım diline sadık kalın:
*   **Tema:** Koyu (Dark) tema ağırlıklı.
*   **Estetik:** 'Cyber-Lab' / Uzay Teknolojisi estetiği. Cam efekti (Glassmorphism), transparan arka planlar (`bg-card/70 backdrop-blur`), neon veya parlak uyarı göstergeleri.
*   **Ana Vurgu Rengi:** Projenin kurumsal rengi olan **`#86bc25`** (Kurumsal Yeşil). Butonlar, aktif sekmeler, vurgular ve ana grafik renkleri her zaman bu renk olmalıdır. `globals.css` içinde `--primary` olarak tanımlanmıştır.
*   **Mikro Animasyonlar:** RPM motorunun dönüşünü simüle eden spin animasyonları, durum bildirimlerinde pulse (yanıp sönme) efektleri (`animate-ping`).

## 4. Kullanıcı Rolleri

Uygulamanın mantığı role-based (rol tabanlı) olarak tasarlanmıştır. Aktif iki ana yönetici vardır:
*   **Musa Seyidoğlu:** Makine Mühendisliği (Lisans 4. Sınıf). Görevi: Mekanik tasarım, teknik çizim ve sistem mimarisi. (Admin)
*   **Nisa Nur Keklik:** Endüstri Mühendisliği (Lisans 2. Sınıf). Görevi: Sistem analizi, operasyon, süreç yönetimi ve proje geliştirme. (Admin)

## 5. Klasör ve Kod Yapısı

Proje kök dizininde yer alan önemli klasörlerin görevleri:

*   **`/app`:** Next.js App Router yapısıdır.
    *   `layout.tsx`: Kök layout ve metadata ayarları.
    *   `page.tsx`: Ana uygulama (Single Page Application gibi çalışır). Tüm panellerin (dashboard, raporlar, telemetri vs.) durum yönetimini (state) ve geçişlerini yöneten ana merkezdir.
    *   `globals.css`: Tailwind importları ve sistem genelindeki renk değişkenlerinin (CSS Variables) tutulduğu dosya.
*   **`/components/bioreactor`:** TARAGAY-BİO donanımına özgü yazılmış tüm UI modülleri burada yer alır:
    *   `header.tsx` & `sidebar.tsx`: Navigasyon ve üst bilgi barı.
    *   `control-panel.tsx`: RPM ayarları, sulama sıklığı, besin dozajı vb. parametreleri yöneten panel.
    *   `camera-feed.tsx`: Canlı biyoreaktör kamerası ve anlık sensör değerleri.
    *   `data-table.tsx` & `gravity-simulation.tsx` & `plant-selection.tsx`: Alt modüller.
    *   `reports-page.tsx`: Analitik grafiklerin (Recharts) ve CSV export işlemlerinin olduğu modül.
    *   `telemetry-page.tsx`: Gerçek zamanlı sistem loglarının aktığı "Data Logger" / Terminal paneli.
    *   `help-page.tsx`: Sistem kalibrasyon rehberi ve SSS.
    *   `profile-page.tsx`: Kullanıcı eğitim ve yetki bilgilerini gösteren profil ekranı.
*   **`/components/ui`:** Radix tabanlı, genel amaçlı UI bileşenleri (Accordion vb.).
*   **`/public`:** Statik dosyalar (Örn: `taragay-logo.png`).

## 6. AI Agent'lar İçin Geliştirme Kuralları (Best Practices)

Bir özellik eklerken veya hata çözerken şu kuralları takip et:
1.  **Tek Bir Merkezi Dosyayı Hedefle:** `app/page.tsx` çok kapsamlı bir state tutucudur. Sensör verisi (sıcaklık, nem, rpm) burada simüle edilir ve alt bileşenlere prop olarak aktarılır. Veri akışını (data flow) bozmamaya özen göster.
2.  **Stilleri Bozma:** Tasarımda `bg-[#86bc25]` veya `text-primary` sınıfları projenin can damarıdır. Yeni sayfa yaparken Tailwind classes ile `rounded-xl border border-border bg-card/70 backdrop-blur` gibi sınıfları kullanarak "cam efekti" stilini mutlaka koru.
3.  **Terminolojiye Dikkat Et:** "Sıradan bir bitki kutusu" terimleri kullanma; "Otonom Fotobiyoreaktör", "Mikro Yerçekimi Simülasyonu", "RPM Kinematiği", "Otomorfogenez" gibi teknik terimler kullan. Log üreteceksen (Örn: Telemetry sayfasında) "Motor torku normalize edildi", "Termal dengeleme protokolü devreye alındı" gibi profesyonel mesajlar oluştur.
4.  **Hazır İkonları Kullan:** `lucide-react` kütüphanesini kullanarak tasarımları zenginleştir.
5.  **Dışa Aktarma (Export):** Komponentleri `export function ComponentName` yapısıyla oluştur (`export default` yerine isimlendirilmiş export kullanılması tercih edilmiştir).
