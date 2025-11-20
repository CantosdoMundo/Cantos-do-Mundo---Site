"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const destinations = [
    {
        id: 1,
        title: "Patagônia",
        subtitle: "O silêncio que fala",
        description: "Geleiras milenares, montanhas imponentes e lagos de águas cristalinas. Uma jornada de reconexão com a natureza selvagem.",
        duration: "10-14 dias",
        videos: [
            "/Vídeo Patagonia/6155783_Mountains Snow Woman Back Shot_By_Alejandro_Campollo_Artlist_HD.mp4",
            "/Vídeo Patagonia/6155798_Mountains Argentina Woman Standing_By_Alejandro_Campollo_Artlist_HD.mp4"
        ],
        whatsappMessage: "Olá! Gostaria de saber mais sobre o roteiro para a Patagônia 🏔️"
    },
    {
        id: 2,
        title: "Toscana",
        subtitle: "Sabores da história",
        description: "Vinhedos dourados, vilas medievais e a essência da dolce vita. Uma experiência sensorial inesquecível.",
        duration: "7-10 dias",
        videos: [
            "/Vídeo Toscana/265670_Italy Hills Church Aerial_By_Maks_Art_Artlist_HD.mp4",
            "/Vídeo Toscana/6161871_Mare Countryside Woman Girl_By_Feelm_Artlist_HD.mp4"
        ],
        whatsappMessage: "Olá! Tenho interesse no roteiro pela Toscana 🍷"
    },
    {
        id: 3,
        title: "Turquia",
        subtitle: "Onde Oriente encontra Ocidente",
        description: "Balões na Capadócia, mesquitas históricas e praias paradisíacas. Uma fusão mágica de culturas e paisagens.",
        duration: "8-12 dias",
        videos: [
            "/Vídeos Turquia/357447_Sightseeing Rock Formation Flight Balloon_By_Wind_Collective_Artlist_HD.mp4",
            "/Vídeos Turquia/196818_City Drone Mosque Aerial_By_Timelab_Pro_Artlist_HD.mp4"
        ],
        whatsappMessage: "Olá! Quero conhecer o roteiro para a Turquia 🎈"
    },
];

function DestinationCard({ dest, index }) {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.4 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (videoRef.current) {
            if (isVisible) {
                const playPromise = videoRef.current.play();
                if (playPromise !== undefined) {
                    playPromise.catch((error) => {
                        console.log("Autoplay prevented:", error);
                    });
                }
            } else {
                videoRef.current.pause();
            }
        }
    }, [isVisible]);

    const handleVideoEnded = () => {
        if (dest.videos && dest.videos.length > 1) {
            setCurrentVideoIndex((prev) => (prev + 1) % dest.videos.length);
        }
    };

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group cursor-pointer"
        >
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Background Video (always mounted for instant playback) */}
                {dest.videos ? (
                    <div className="absolute inset-0">
                        <video
                            key={currentVideoIndex}
                            ref={videoRef}
                            preload="auto"
                            muted
                            playsInline
                            webkit-playsinline="true"
                            onEnded={handleVideoEnded}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        >
                            <source src={dest.videos[currentVideoIndex]} type="video/mp4" />
                        </video>
                        {/* Loading State / Fallback (visible only if video hasn't loaded, though preload helps) */}
                        <div className="absolute inset-0 bg-gradient-to-br from-canto-da-terra to-terracota -z-10" />
                    </div>
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-horizonte to-terracota" />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* Duration Badge */}
                    {dest.duration && (
                        <div className="mb-4">
                            <span className="inline-block bg-brisa/20 backdrop-blur-sm border border-brisa/40 text-brisa px-3 py-1 rounded-full text-xs font-sans font-medium">
                                {dest.duration}
                            </span>
                        </div>
                    )}

                    <p className="font-sans text-duna text-sm uppercase tracking-wider mb-2">
                        {dest.subtitle}
                    </p>
                    <h3 className="font-serif text-4xl text-brisa mb-3">{dest.title}</h3>
                    <p className="font-sans text-brisa/90 text-sm mb-6 leading-relaxed">
                        {dest.description}
                    </p>

                    {/* WhatsApp Button */}
                    <a
                        href="https://wa.me/message/L7NFE5AFYVTZH1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block w-full border border-brisa/50 text-brisa font-sans font-medium py-3 px-6 rounded-full hover:bg-brisa hover:text-horizonte transition-all duration-300 text-center uppercase tracking-widest text-xs hover:shadow-lg backdrop-blur-sm"
                    >
                        Solicitar Roteiro Personalizado
                    </a>
                </div>
            </div>
        </motion.div>
    );
}

export default function Destinations() {
    return (
        <section id="destinos" className="py-24 md:py-32 bg-brisa relative overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply">
                <Image
                    src="/images/map-bg.svg"
                    alt="Mapa Mundi"
                    fill
                    className="object-cover object-center"
                />
            </div>
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Separator */}
                <div className="flex items-center justify-center mb-20">
                    <div className="h-px bg-gradient-to-r from-transparent via-canto-da-terra/30 to-transparent w-24 md:w-48"></div>
                    <div className="mx-6 relative w-6 h-6 opacity-40 grayscale">
                        <Image
                            src="/images/bird.svg"
                            alt="Divisor"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-canto-da-terra/30 to-transparent w-24 md:w-48"></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-canto-da-terra font-sans font-medium tracking-wider uppercase text-sm">
                        Roteiros Exclusivos
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-horizonte mt-2 mb-4">
                        Nossos Destinos
                    </h2>
                    <p className="font-sans text-text-main/80 text-lg max-w-2xl mx-auto">
                        Roteiros curados com sensibilidade para quem busca mais do que apenas visitar um lugar.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <DestinationCard key={dest.id} dest={dest} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
