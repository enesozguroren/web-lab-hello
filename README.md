# Web LAB-2 - Semantik HTML ve Erişilebilirlik (a11y)
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
* **Google Lighthouse Erişilebilirlik Puanı:** 100 💯

## Ekran Görüntüsü (Lighthouse Raporu)
![Lighthouse Raporu](Lighthouse%20Raporu.png)

## Kurulum

```bash
npm install
npm run dev
