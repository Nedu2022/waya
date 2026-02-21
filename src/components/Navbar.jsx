import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
  {
    label: "API Documentation",
    href: "https://wayabank.ng/api-docs",
    external: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleScrollTo = (e, href, external) => {
    if (external) return;

    e.preventDefault();
    setOpen(false);

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: "smooth",
        });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3 bg-white/85 backdrop-blur-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleScrollTo(e, "#", false)}
            className="relative z-[51] flex items-center gap-2"
          >
            <img src="/logo-dark.svg" alt="WayaBank" className="h-8" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href, link.external)}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="relative group px-4 py-2 text-[0.9375rem] font-semibold text-slate-600 transition-colors duration-300 hover:text-primary"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-[2px] bg-primary rounded-full scale-x-0 origin-center transition-transform duration-300 ease-[0.16,1,0.3,1] group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wayabank.ng/login"
              className="px-5 py-2.5 text-sm font-semibold text-slate-700
                      rounded-xl hover:bg-slate-50 transition-all duration-200"
            >
              Login
            </a>
            <a
              href="https://wayabank.ng/register"
              className="px-5 py-2.5 text-sm font-semibold text-white
                      bg-primary rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_12px_rgba(255,107,0,0.2)]
                      hover:bg-primary-hover hover:shadow-[0_2px_4px_rgba(0,0,0,0.06),0_8px_24px_rgba(255,107,0,0.3)]
                      hover:-translate-y-0.5 transition-all duration-300"
            >
              Register
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-[51] w-12 h-12 flex flex-col items-center justify-center 
                       bg-white/50 backdrop-blur-md border border-slate-200/50 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
            aria-label="Menu"
          >
            <div className="relative w-5 h-[14px]">
              <span
                className={`absolute left-0 w-full h-[2px] bg-dark rounded-full transition-all duration-400 ease-[0.16,1,0.3,1] ${
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-[2px] bg-dark rounded-full transition-all duration-400 ease-[0.16,1,0.3,1] top-1/2 -translate-y-1/2 ${
                  open ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`absolute left-0 w-full h-[2px] bg-dark rounded-full transition-all duration-400 ease-[0.16,1,0.3,1] ${
                  open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Premium Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background decorative blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

            <div className="flex-1 flex flex-col justify-center px-8 pt-20 pb-12 overflow-y-auto z-10">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href, link.external)}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center justify-between py-2 text-[1.75rem] font-extrabold text-dark
                               hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.1,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <span>{link.label}</span>
                    <span className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-primary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6"></polyline>
                      </svg>
                    </span>
                  </motion.a>
                ))}
              </div>

              <motion.div
                className="flex flex-col gap-4 mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <a
                  href="https://wayabank.ng/login"
                  className="w-full text-center py-4 text-lg font-bold text-dark
                              border-2 border-slate-200 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  Login
                </a>
                <a
                  href="https://wayabank.ng/register"
                  className="w-full text-center py-4 text-lg font-bold text-white
                              bg-primary rounded-2xl shadow-[0_8px_24px_rgba(255,107,0,0.25)] hover:bg-primary-hover hover:-translate-y-1 transition-all duration-300"
                >
                  Create Free Account
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
