export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black/50 px-6 py-10 text-gray-400 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-4 text-sm md:flex-row md:items-center">
        <p>Montassar Nawara - Backend and AI Engineer</p>
        <div className="flex flex-wrap items-center gap-4">
          <a href="mailto:montasar.nawara@gmail.com" className="transition hover:text-white">
            montasar.nawara@gmail.com
          </a>
          <a href="https://github.com/Montassarnawara" target="_blank" rel="noreferrer" className="transition hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/montassar-nawara-963a87350" target="_blank" rel="noreferrer" className="transition hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
