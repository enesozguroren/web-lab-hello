# CSS Kararları

## 1. Breakpoint Seçimi
Projeyi Mobile-First yaklaşımıyla geliştirdiğim için temel CSS kurallarını mobil ekranlara (0-639px) göre yazdım. İçeriğin yatay düzene geçebilmesi ve okunabilirliğin korunması için tablet kırılım noktasını 640px, masaüstü kırılım noktasını ise 1024px olarak belirledim.

## 2. Layout Tercihleri
Header ve navigasyon çubuğu için, elemanları tek bir eksende hizalamak ve aralarındaki boşluğu (gap) kolayca yönetmek amacıyla **Flexbox** kullandım. Proje kartlarında ise, sütun sayısının ekran genişliğine göre `auto-fit` ile otomatik ayarlanması ve media query yazmaya gerek bırakmaması sebebiyle **CSS Grid**'i tercih ettim.

## 3. Design Tokens
Tasarım tutarlılığını sağlamak için `:root` seçicisi altında renk, boşluk (spacing) ve border-radius değerlerimi değişken (custom properties) olarak tanımladım. Fluid typography için `clamp()` fonksiyonunu kullanarak fontların `rem` ve `vw` birimleriyle ekran genişliğine göre akıcı bir şekilde ölçeklenmesini sağladım.

## 4. Responsive Stratejiler
Önce mobil ekranlar için temel iskeleti kurdum, ardından `min-width` media query'leri ile tablet ve masaüstü düzenlerini ekleyerek (Progresif geliştirme) tasarımı genişlettim. Görsellerin dışarı taşmasını engellemek ve orantısını korumak için `max-width: 100%` ve `object-fit: cover` özelliklerini standart hale getirdim.