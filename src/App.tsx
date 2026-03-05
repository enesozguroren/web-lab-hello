import './App.css';

function App() {

  return (

    <div className="app-container">

     

      {/* Uygulama-3: Ana içeriğe atla bağlantısı */}

      <a href="#main-content" className="skip-link">

        Ana icerige atla

      </a>



      {/* Uygulama-4: Header ve Navigasyon (Flexbox) */}

      <header>

        <h1 className="site-title">Enes Özgür Ören - Kişisel Portföy</h1>

       

        <nav aria-label="Ana navigasyon">

          <ul>

            <li><a href="#hakkimda">Hakkimda</a></li>

            <li><a href="#projeler">Projeler</a></li>

            <li><a href="#iletisim">Iletisim</a></li>

          </ul>

        </nav>

      </header>



      <main id="main-content">

       

        {/* Hakkımda Bölümü */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          
          {/* UYGULAMA-7: Responsive düzen için about-content kapsayıcısı eklendi */}
          <div className="about-content">
            <figure>
              <img src="profil.jpg" alt="Enes Özgür Ören'in vesikalık fotoğrafı" />
              <figcaption>Enes Özgür Ören</figcaption>
            </figure>
            
            <div>
              <p>Fırat Üniversitesi Yazılım Mühendisliği 3. sınıf öğrencisiyim. Network, siber güvenlik ve web teknolojileri alanlarında kendimi geliştiriyorum.</p>
              
              <h3>Kullandığım Teknolojiler</h3>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>React & TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Ağ Güvenliği & CCNA</li>
              </ul>
            </div>
          </div>
        </section>



        {/* Projelerim Bölümü */}

        <section id="projeler">

          <h2>Projelerim</h2>

         

          {/* Uygulama-6 İçin Hazırlık: Projeler grid kapsayıcısı içine alındı */}

          <div className="project-grid">

            <article className="project-card">

              <img src="lab1.png" alt="Web LAB-1 Hello projesinin tarayıcıdaki ekran görüntüsü" />

              <h3>Web LAB-1: Hello Project</h3>

              <p>Vite, React ve TypeScript kullanılarak oluşturulmuş ilk laboratuvar uygulaması.</p>

              <ul className="skill-tags">

                <li>React</li>

                <li>TypeScript</li>

                <li>Git</li>

              </ul>

            </article>



            <article className="project-card">

              <img src="siber.png" alt="Siber güvenlik ağ analizi çalışmalarını gösteren ekran görüntüsü" />

              <h3>Siber Vatan Çalışmaları</h3>

              <p>Siber Vatan programı kapsamında yapılan ağ analizi ve güvenlik testleri.</p>

              <ul className="skill-tags">

                <li>Wireshark</li>

                <li>Ağ Analizi Araçları</li>

                <li>Linux</li>

              </ul>

            </article>

          </div>

        </section>



        {/* İletişim Bölümü */}

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

     

      <footer>

        <p>&copy; 2026 Enes Özgür Ören. Tüm hakları saklıdır.</p>

        <ul>

          <li><a href="https://github.com/enesozguroren" target="_blank" rel="noopener noreferrer">GitHub</a></li>

          <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>

        </ul>

      </footer>

    </div>

  );

}

export default App;
