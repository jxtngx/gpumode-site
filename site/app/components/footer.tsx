import ArrowIconUp from '@/app/components/ui/arrowIconUp'

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://discord.gg/gpumode"
          >
            <ArrowIconUp/>
            <p className="ml-2 h-7">Discord</p>
          </a>
        </li>
        <li>
          <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/gpu-mode"
          >
            <ArrowIconUp/>
            <p className="ml-2 h-7">GitHub</p>
          </a>
        </li>
        <li>
          <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.youtube.com/@gpumode"
          >
            <ArrowIconUp/>
            <p className="ml-2 h-7">YouTube</p>
          </a>
        </li>
        <li>
          <a
              className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/gpu-mode/resource-stream"
          >
            <ArrowIconUp/>
            <p className="ml-2 h-7">Resources</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © {new Date().getFullYear()} GPU Mode
      </p>
    </footer>
  )
}
