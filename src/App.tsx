function App() {
  return (
    <div className="app-container">
      {/* Uygulama-1: Header ve Navigasyon [cite: 104, 105] */}
      <header>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkimda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">Iletisim</a></li>
          </ul>
        </nav>
      </header>

      {/* Uygulama-1: Ana İçerik Alanı [cite: 116, 153] */}
      <main id="main-content">
        
        {/* Hakkımda Bölümü [cite: 113, 122] */}
        <section id="hakkimda">
          <h2>Hakkimda</h2>
          {/* İlerleyen adımlarda buraya içerik eklenecek [cite: 123] */}
        </section>

        {/* Projeler Bölümü [cite: 125, 127] */}
        <section id="projeler">
          <h2>Projelerim</h2>
          {/* İlerleyen adımlarda buraya projeler eklenecek [cite: 129] */}
        </section>

        {/* İletişim Bölümü [cite: 134, 135] */}
        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* İlerleyen adımlarda buraya form eklenecek [cite: 136] */}
        </section>

      </main>

      {/* Uygulama-1: Footer [cite: 148, 149] */}
      <footer>
        <p>&copy; 2026 Enes Özgür Ören. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;