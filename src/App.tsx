function App() {
  return (
    <div className="app-container">
      
      {/* Uygulama-3 & 5: Ana içeriğe atla bağlantısı (Skip Navigation) */}
      <a href="#main-content" className="skip-link">
        Ana icerige atla
      </a>

      {/* Uygulama-1 & 5: Header ve Navigasyon */}
      <header>
        <h1>Enes Özgür Ören - Kişisel Portföy</h1>
        
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* Uygulama-1 & 5: Ana İçerik Alanı */}
      <main id="main-content">
        
        {/* Uygulama-2 & 5: Hakkımda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          <figure>
            <img src="profil.jpg" alt="Enes Özgür Ören'in vesikalık fotoğrafı" />
            <figcaption>Enes Özgür Ören</figcaption>
          </figure>
          <p>Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Network, siber güvenlik ve web teknolojileri alanlarında kendimi geliştiriyorum.</p>
          
          {/* Uygulama-5: Kullandığım Teknolojiler Listesi Eklendi */}
          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>React & TypeScript</li>
            <li>HTML5 & CSS3</li>
            <li>Ağ Güvenliği & CCNA</li>
          </ul>
        </section>

        {/* Uygulama-2 & 5: Projelerim Bölümü */}
        <section id="projeler">
          <h2>Projelerim</h2>
          
          <article>
            <h3>Web LAB-1: Hello Project</h3>
            <img src="lab1.png" alt="Web LAB-1 Hello projesinin tarayıcıdaki ekran görüntüsü" />
            <p>Vite, React ve TypeScript kullanılarak oluşturulmuş ilk laboratuvar uygulaması.</p>
            <p><strong>Teknolojiler:</strong> React, TypeScript, Git</p>
          </article>

          <article>
            <h3>Siber Vatan Çalışmaları</h3>
            <img src="siber.png" alt="Siber güvenlik ağ analizi çalışmalarını gösteren ekran görüntüsü" />
            <p>Siber Vatan programı kapsamında yapılan ağ analizi ve güvenlik testleri.</p>
            {/* Uygulama-5: Kullanılan teknolojiler eklendi */}
            <p><strong>Teknolojiler:</strong> Wireshark, Ağ Analizi Araçları, Linux</p>
          </article>
        </section>

        {/* Uygulama-4 & 5: Doğrulamalı İletişim Formu */}
        <section id="iletisim">
          <h2>Iletisim</h2>
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
      
      {/* Uygulama-1 & 5: Footer */}
      <footer>
        <p>&copy; 2026 Enes Özgür Ören. Tüm hakları saklıdır.</p>
        {/* Uygulama-5: Sosyal Medya Bağlantıları Eklendi */}
        <ul>
          <li><a href="https://github.com/enesozguroren" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;