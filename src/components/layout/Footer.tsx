export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 py-8 text-center border-t border-gray-200 dark:border-gray-800">
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Enes Özgür Ören. Tüm hakları saklıdır.
      </p>
    </footer>
  );
}