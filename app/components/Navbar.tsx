export default function Navbar() {
    return (
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-medium tracking-tight">
            Solomon Bell
          </a>
  
          <nav className="flex gap-6 text-sm text-neutral-300">
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
    );
  }
