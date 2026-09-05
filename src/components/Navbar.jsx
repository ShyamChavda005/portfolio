import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header 
            className="sticky top-0 z-50 bg-[#0B1120]/75 backdrop-blur-md border-b border-slate-800/60 w-full transition-all"
            style={{ 
                position: "sticky", 
                top: 0, 
                backdropFilter: "blur(12px)", 
                WebkitBackdropFilter: "blur(12px)" 
            }}
        >
            <div className="max-w-5xl mx-auto px-6 py-3 sm:py-4 flex justify-between md:justify-center items-center">
                
                <span className="md:hidden text-slate-100 font-semibold text-lg tracking-tight">
                    Shyam Chavda
                </span>

                <nav className="hidden md:flex items-center gap-12 py-5 text-lg font-medium text-slate-400">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="hover:text-blue-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 focus:outline-none transition-colors cursor-pointer"
                    aria-label="Toggle Navigation Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <nav 
                    className="md:hidden bg-[#0B1120]/95 backdrop-blur-md border-b border-slate-800/80 px-6 py-4 flex flex-col gap-4 text-slate-300 text-base font-medium"
                    style={{ 
                        backdropFilter: "blur(12px)", 
                        WebkitBackdropFilter: "blur(12px)" 
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="hover:text-blue-400 transition-colors py-1"
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}

export default Navbar;