"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    });

    const scrollToSection = (e, sectionId) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-brisa/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="relative h-16 w-80">
                    <Image
                        src="/images/logo-horizontal-2.svg"
                        alt="Cantos do Mundo"
                        fill
                        className="object-contain object-left"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="#destinos" onClick={(e) => scrollToSection(e, '#destinos')} className={`transition-colors font-sans font-medium ${isScrolled ? "text-horizonte hover:text-terracota" : "text-brisa/90 hover:text-duna"}`}>
                        Destinos
                    </Link>
                    <Link href="#sobre" onClick={(e) => scrollToSection(e, '#sobre')} className={`transition-colors font-sans font-medium ${isScrolled ? "text-horizonte hover:text-terracota" : "text-brisa/90 hover:text-duna"}`}>
                        Sobre
                    </Link>
                    <Link
                        href="https://wa.me/message/L7NFE5AFYVTZH1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-terracota text-brisa px-6 py-2 rounded-full hover:bg-canto-da-terra transition-colors font-sans font-medium"
                    >
                        Fale Conosco
                    </Link>
                </nav>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-50"
                    aria-label="Menu"
                >
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className={`w-6 h-0.5 transition-colors ${isScrolled || isMobileMenuOpen ? "bg-horizonte" : "bg-brisa"}`}
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className={`w-6 h-0.5 transition-colors ${isScrolled || isMobileMenuOpen ? "bg-horizonte" : "bg-brisa"}`}
                    />
                    <motion.span
                        animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className={`w-6 h-0.5 transition-colors ${isScrolled || isMobileMenuOpen ? "bg-horizonte" : "bg-brisa"}`}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brisa/95 backdrop-blur-md overflow-hidden"
                    >
                        <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            <Link
                                href="#destinos"
                                onClick={(e) => scrollToSection(e, '#destinos')}
                                className="text-horizonte hover:text-terracota transition-colors font-sans font-medium text-lg"
                            >
                                Destinos
                            </Link>
                            <Link
                                href="#sobre"
                                onClick={(e) => scrollToSection(e, '#sobre')}
                                className="text-horizonte hover:text-terracota transition-colors font-sans font-medium text-lg"
                            >
                                Sobre
                            </Link>
                            <Link
                                href="https://wa.me/message/L7NFE5AFYVTZH1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-terracota text-brisa px-6 py-3 rounded-full hover:bg-canto-da-terra transition-colors font-sans font-medium text-center"
                            >
                                Fale Conosco
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
