# Web LAB

## 🚀 Son Güncellemeler (LAB-5: TypeScript & State Mantığı)

[cite_start]Bu projede geleneksel DOM manipülasyonu yerine modern React state yönetimi ve tip güvenliği entegre edilmiştir [cite: 857-859]:

* [cite_start]**🛡️ TypeScript Entegrasyonu:** `interface` ve `type` kullanılarak veri modelleri tanımlandı, derleme zamanı tip güvenliği sağlandı [cite: 600-602].
* [cite_start]**📡 Fetch API & Async/Await:** Yerel JSON dosyasından asenkron olarak proje verileri çekildi [cite: 198-210].
* [cite_start]**🚦 Error Handling:** `try/catch/finally` bloklarıyla ağ veya veri hatalarına karşı güvenli hata yönetimi uygulandı [cite: 366-369].
* [cite_start]**🔄 State Yönetimi:** Filtreleme (arama, kategori) ve sıralama işlemleri React state üzerinden anlık olarak (DOM'a dokunmadan) gerçekleştirildi [cite: 902-942].

## 🚀 Son Güncellemeler (LAB-4: Tailwind CSS & UI Component Mimarisi)

Bu projede modern web geliştirme standartları doğrultusunda aşağıdaki Tailwind CSS entegrasyonları yapılmıştır:

* **🌬️ Utility-First CSS:** Tailwind CSS v4 kurularak hızlı ve tutarlı arayüz geliştirme altyapısı sağlandı.
* **🧩 Component Mimarisi:** Tekrar kullanılabilir React bileşenleri (Button, Input, Card, Alert) ve çoklu varyant desteği eklendi.
* **🎨 UI Kit:** Geliştirilen tüm bileşenlerin (en az 8 varyant) sergilendiği özel bir tasarım sistemi sayfası oluşturuldu.
* **🌓 Dark Mode:** `dark:` öneki kullanılarak, kullanıcı kontrollü karanlık tema entegrasyonu yapıldı.
* **📱 Responsive Tasarım:** Tailwind'in `sm:`, `md:`, `lg:` önekleriyle mobil öncelikli (mobile-first) uyumlu yapı kuruldu.
 
## 🚀 Son Güncellemeler (LAB-3: Modern CSS & Responsive Layout)

Bu proje, modern web standartlarına uygun olarak aşağıdaki mimari yaklaşımlarla geliştirilmiştir:

* **📱 Mobile-First Tasarım:** Kapsamlı Media Query kullanımıyla mobil, tablet ve masaüstü cihazlara %100 uyumlu tam responsive arayüz.
* **📐 Flexbox & CSS Grid:** Navigasyon ve araç çubuklarında tek boyutlu esnek hizalama (Flexbox), proje kartlarında ise otomatik ölçeklenen (`auto-fit`) iki boyutlu ızgara sistemi (Grid).
* **🎨 Design Tokens (Tasarım Jetonları):** Renk paleti, boşluk (spacing) ve border-radius gibi UI kararlarının tek merkezden (`:root` değişkenleri) yönetildiği sürdürülebilir CSS mimarisi.
* **🔤 Fluid Typography (Akıcı Tipografi):** `clamp()` fonksiyonu kullanılarak ekran genişliğine göre kademesiz ve yumuşak bir şekilde ölçeklenen erişilebilir metinler.

## Hakkında
Bu proje, Web Tasarımı ve Programlama dersi LAB-2 kapsamında Semantik HTML5 etiketleri ve erişilebilirlik (accessibility/a11y) standartlarına uygun olarak geliştirilmiş kişisel portföy sayfasıdır.

## Geliştirici
* **Ad Soyad:** Enes Özgür Ören
* **Öğrenci No:** 235541026

## Kullanılan Teknolojiler
* Semantic HTML5
* CSS3
* React (Vite & TypeScript)

## Erişilebilirlik (a11y) Başarıları
* `Tab` tuşu ile tam klavye gezinimi (Keyboard Navigation) ve "Ana içeriğe atla" (Skip-link) bağlantısı eklendi.
* Tüm form elemanları `aria-describedby` ve `role="alert"` ile ekran okuyuculara (Screen Readers) tam uyumlu hale getirildi.
* Doğru başlık (Heading) hiyerarşisi (`h1` -> `h2` -> `h3`) ve görsel `alt` metinleri uygulandı.
* **Google Lighthouse Erişilebilirlik Puanı:** 100 

## Ekran Görüntüsü (Lighthouse Raporu)
![Lighthouse Raporu](Lighthouse%20Raporu.png)

## Kurulum

```bash
npm install
npm run dev