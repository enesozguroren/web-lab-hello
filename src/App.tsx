function App() {
  return (
    <div className="app-container">
      
      {/* Uygulama-3: Ana içeriğe atla bağlantısı (Skip Navigation) eklendi */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      {/* Uygulama-1: Header ve Navigasyon */}
      <header>
        {/* Sayfanın ana başlığı eklendi (Hiyerarşi kuralı) */}
        <h1>Enes Özgür Ören - Kişisel Portföy</h1>
        
        {/* Uygulama-3: aria-label zaten kodunda mevcuttu, korundu */}
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* Uygulama-1: Ana İçerik Alanı */}
      <main id="main-content">
        
        {/* Uygulama-2: Hakkımda Bölümü ve Profil Fotoğrafı */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img src="profil.jpg" alt="Enes Özgür Ören'in vesikalık fotoğrafı" />
            <figcaption>Enes Özgür Ören</figcaption>
          </figure>
          <p>Yazılım Mühendisliği 3. sınıf öğrencisiyim. Network, siber güvenlik ve web teknolojileri alanlarında kendimi geliştiriyorum.</p>
        </section>

        {/* Uygulama-2: Projelerim Bölümü ve Proje Görselleri */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          <article>
            <h3>Web LAB-1: Hello Project</h3>
            <img src="lab1.png" alt="Web LAB-1 Hello projesinin tarayıcıdaki ekran görüntüsü" />
            <p>Vite, React ve TypeScript kullanılarak oluşturulmuş ilk laboratuvar uygulaması.</p>
          </article>

          <article>
            <h3>Siber Vatan Çalışmaları</h3>
            <img src="siber.png" alt="Siber güvenlik ağ analizi çalışmalarını gösteren ekran görüntüsü" />
            <p>Siber Vatan programı kapsamında yapılan ağ analizi ve güvenlik testleri.</p>
          </article>
        </section>

        {/* İletişim bölümü iskelet olarak kalmaya devam ediyor */}
        {/* Uygulama-4: Doğrulamalı İletişim Formu */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* novalidate: Tarayıcı doğrulamalarını kapatır, biz yöneteceğiz */}
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  minLength={2} 
                  aria-describedby="name-error" 
                />
                {/* role="alert": Ekran okuyucu hatayı anında okur */}
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  aria-describedby="email-error" 
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seciniz --</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  required 
                  minLength={10} 
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>

      </main>
      
      {/* Uygulama-1: Footer */}
      <footer>
        <p>&copy; 2026 Enes Özgür Ören. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;