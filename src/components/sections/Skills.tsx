export default function Skills() {
  const skills = [
    "Python", "Linux", "Cisco Packet Tracer", "Wireshark", 
    "Git", "Docker", "VS Code", "React", "TypeScript", "Tailwind CSS"
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Yetenekler & Araçlar</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map(skill => (
            <span 
              key={skill} 
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-3 rounded-xl shadow-sm text-gray-800 dark:text-gray-200 font-medium hover:scale-105 transition-transform"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}