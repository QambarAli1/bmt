"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Heart, Phone, ChevronDown } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Mission", href: "/about#mission" },
      { label: "Our Team", href: "/about#team" },
      { label: "Impact Report", href: "/about#impact" },
    ],
  },
  {
    label: "Services",
    href: "/#services",
    children: [
      { label: "Blood Donation", href: "/blood-donation" },
      { label: "Medical Camps", href: "/#services" },
      { label: "Emergency Care", href: "/#services" },
      { label: "Ambulance", href: "/#services" },
    ],
  },
  { label: "Gallery", href: "/#gallery" },
  { label: "Events", href: "/#events" },
  { label: "Contact", href: "/contact" },
];

function DropdownItem({ link, isScrolled }: { link: typeof navLinks[number]; isScrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when mouse fully leaves the wrapper (including the dropdown panel)
  const handleMouseLeave = () => setOpen(false);
  const handleMouseEnter = () => {
    if (link.children) setOpen(true);
  };

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={link.href}
        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isScrolled
            ? "text-slate-700 dark:text-slate-200 hover:text-primary-700 dark:hover:text-teal-400 hover:bg-primary-50 dark:hover:bg-primary-900/30"
            : "text-white hover:text-white hover:bg-white/15"
        }`}
      >
        {link.label}
        {link.children && (
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""} ${
              isScrolled ? "opacity-60" : "opacity-80"
            }`}
          />
        )}
      </Link>

      {link.children && (
        <AnimatePresence>
          {open && (
            // The outer div starts right at top-full (no gap) and has invisible padding-top
            // so the mouse can travel from the trigger into the panel without leaving the container
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.97 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute top-full left-0 pt-2 w-52 z-50"
            >
              {/* Solid panel — never inherits transparency from the hero overlay */}
              <div className="rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                {/* Coloured top accent strip */}
                <div className="h-1 w-full bg-gradient-to-r from-primary-600 to-teal-500" />
                {link.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-primary-50 dark:hover:bg-primary-900/40 hover:text-primary-700 dark:hover:text-teal-400 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    {child.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change (resize/nav)
  useEffect(() => {
    if (!mobileOpen) setExpandedMobile(null);
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "shadow-lg backdrop-blur-xl bg-white/95 dark:bg-slate-950/95 border-b border-slate-200 dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      {/* Top info bar */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 bg-primary-900 text-white text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3 h-3" />
            Emergency: +92-5812-920920
          </span>
          <span className="opacity-40">|</span>
          <span className="opacity-75">Registered NGO · Gilgit-Baltistan, Pakistan</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/#donate" className="text-teal-300 hover:text-white transition-colors font-semibold">
            Donate Now
          </a>
          <span className="opacity-40">|</span>
          <a href="/blood-donation" className="text-red-300 hover:text-white transition-colors font-semibold">
            Donate Blood
          </a>
        </div>
      </div>

      {/* Main nav row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 max-w-7xl mx-auto">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div
            className={`rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 ${
              isScrolled
                ? "bg-white shadow-md ring-1 ring-slate-200 dark:ring-slate-700 dark:bg-slate-800"
                : "bg-white/15 backdrop-blur-sm"
            }`}
          >
            <Image
              src="/logo.png"
              alt="Baltistan Medical Trust"
              width={52}
              height={40}
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="leading-tight hidden sm:block">
            <p
              className={`font-bold text-sm md:text-base font-heading transition-colors duration-300 ${
                isScrolled ? "text-primary-900 dark:text-white" : "text-white"
              }`}
            >
              Baltistan
            </p>
            <p
              className={`text-xs font-medium tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-teal-600 dark:text-teal-400" : "text-teal-200"
              }`}
            >
              Medical Trust
            </p>
          </div>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <DropdownItem key={link.label} link={link} isScrolled={isScrolled} />
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={`p-2 rounded-lg transition-all duration-200 ${
              isScrolled
                ? "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                : "text-white/80 hover:text-white hover:bg-white/15"
            }`}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            href="/#donate"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-700 to-teal-600 hover:from-primary-800 hover:to-teal-700 transition-all shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5"
          >
            <Heart className="w-4 h-4 fill-white" />
            Donate
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                : "text-white hover:bg-white/15"
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 shadow-2xl"
          >
            <div className="px-4 py-4 space-y-0.5">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    /* Parent with accordion */
                    <button
                      onClick={() =>
                        setExpandedMobile(expandedMobile === link.label ? null : link.label)
                      }
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expandedMobile === link.label ? "rotate-180 text-primary-600 dark:text-teal-400" : "opacity-50"
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center px-3 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Accordion children */}
                  <AnimatePresence>
                    {link.children && expandedMobile === link.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-3 mt-1 mb-1 border-l-2 border-primary-200 dark:border-primary-800 pl-3 space-y-0.5">
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-primary-700 dark:hover:text-teal-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Mobile bottom actions */}
              <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                <a
                  href="tel:+92-5812-920920"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Emergency: +92-5812-920920
                </a>
                <Link
                  href="/#donate"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-700 to-teal-600 shadow-lg"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  Donate Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
