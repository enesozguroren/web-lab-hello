# Web LAB-2 - Semantik HTML ve Erişilebilirlik (a11y)

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