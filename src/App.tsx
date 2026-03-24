import { useState, useEffect } from "react";
import './App.css';
import type { Project, Category, SortField, SortOrder } from "./types/project";
import { fetchProjects } from "./services/projectService";
import { applyFilters } from "./utils/projectHelpers";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import Alert from "./components/Alert";

export default function App() {
  // --- STATE (DURUM) YÖNETİMİ ---
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- VERİ ÇEKME (API İSTEĞİ) ---
  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // --- TÜRETİLMİŞ VERİ (Filtreleme ve Sıralama) ---
  const filtered = applyFilters(projects, search, category, sortField, sortOrder);
  const categories: (Category | "all")[] = ["all", "frontend", "fullstack", "backend"];

  // --- UI (KULLANICI ARAYÜZÜ) ---
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300 p-4 md:p-8">
      
      {/* Tema Değiştirme Butonu */}
      <button 
        onClick={() => document.documentElement.classList.toggle('dark')} 
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-full shadow-lg hover:scale-110 transition-transform" 
        aria-label="Tema degistir"
      >
        <span className="dark:hidden">🌙</span>
        <span className="hidden dark:inline">☀️</span>
      </button>

      <div className="max-w-6xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projelerim
        </h1>

        {/* HATA DURUMU */}
        {error && (
          <Alert variant="error" title="Hata" className="mb-6">
            {error}
          </Alert>
        )}

        {/* FİLTRELER VE ARAMA BÖLÜMÜ */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center">
          
          <div className="flex-1 w-full md:w-auto">
            <Input 
              id="search" 
              placeholder="Proje ara (Örn: React, E-Ticaret)..." 
              value={search} 
              onChange={(e: any) => setSearch(e.target.value)} 
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <Button 
                key={cat} 
                variant={category === cat ? "primary" : "ghost"} 
                size="sm" 
                onClick={() => setCategory(cat)}
              >
                {cat === "all" ? "Tümü" : cat.toUpperCase()}
              </Button>
            ))}
          </div>

          <div className="flex gap-2">
            <select 
              value={sortField} 
              onChange={e => setSortField(e.target.value as SortField)} 
              className="border border-gray-300 rounded-lg px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="year">Yıl</option>
              <option value="title">Başlık</option>
            </select>

            <Button 
              variant="secondary" 
              size="sm" 
              onClick={() => setSortOrder(o => o === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? "A-Z (Artan)" : "Z-A (Azalan)"}
            </Button>
          </div>
        </div>

        {/* YÜKLENİYOR DURUMU */}
        {loading && (
          <p className="text-center text-gray-500 my-12 text-lg">
            Projeler yükleniyor...
          </p>
        )}

        {/* BOŞ SONUÇ DURUMU */}
        {!loading && filtered.length === 0 && !error && (
          <p className="text-center text-gray-500 my-12 text-lg">
            Eşleşen proje bulunamadı.
          </p>
        )}

        {/* PROJE KARTLARI GRİDİ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <Card 
              key={project.id} 
              variant="elevated" 
              title={project.title} 
              image={project.image} 
              imageAlt={`${project.title} ekran görüntüsü`}
            >
              <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span 
                    key={t} 
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-4 font-semibold">
                {project.year} &middot; {project.category.toUpperCase()}
              </p>
            </Card>
          ))}
        </div>

        {/* SONUÇ SAYISI BİLGİSİ */}
        {!loading && !error && (
          <p className="text-sm text-gray-500 mt-8 text-center font-medium">
            {filtered.length} / {projects.length} proje gösteriliyor
          </p>
        )}
      </div>
    </div>
  );
}