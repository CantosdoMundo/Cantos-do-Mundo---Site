"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Experiências em vez de destinos fixos: a curadoria não desatualiza,
// e o site nunca promete um destino específico que a agência não esteja vendendo.
const destinations = [
    {
        id: 1,
        title: "Neve & Montanha",
        subtitle: "O silêncio das alturas",
        description: "Montanhas que impõem respeito, ar limpo, o branco que acalma. Para quem precisa se reencontrar longe do barulho.",
        videos: [
            "/Vídeo Patagonia/6155783_Mountains Snow Woman Back Shot_By_Alejandro_Campollo_Artlist_HD.mp4",
            "/Vídeo Patagonia/6155798_Mountains Argentina Woman Standing_By_Alejandro_Campollo_Artlist_HD.mp4"
        ],
    },
    {
        id: 2,
        title: "Mar & Descanso",
        subtitle: "O tempo que desacelera",
        description: "Dias sem pressa, o som da água, o sol sem hora para acabar. O descanso de verdade, do jeito que você merece.",
        videos: [
            "/Vídeo Toscana/6161871_Mare Countryside Woman Girl_By_Feelm_Artlist_HD.mp4",
            "/Vídeo Toscana/716072_Tuscany Buildings Village Town_By_Cristian_Baitg_Schreiweis_Artlist_HD.mp4"
        ],
    },
    {
        id: 3,
        title: "Cidades & Cultura",
        subtitle: "Histórias em cada esquina",
        description: "Arquitetura, sabores e ruas com memória. Para quem viaja com curiosidade e volta com histórias para contar.",
        videos: [
            "/Vídeos Turquia/196818_City Drone Mosque Aerial_By_Timelab_Pro_Artlist_HD.mp4",
            "/Vídeos Turquia/357447_Sightseeing Rock Formation Flight Balloon_By_Wind_Collective_Artlist_HD.mp4"
        ],
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
            {
                threshold: 0.2,
                rootMargin: "100px"
            }
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
    }, [isVisible, currentVideoIndex]);

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
                            preload="metadata"
                            muted
                            playsInline
                            webkit-playsinline="true"
                            loop={dest.videos.length === 1}
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
                        Roteiros sob medida
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-horizonte mt-2 mb-4">
                        Que viagem o seu momento pede?
                    </h2>
                    <p className="font-sans text-text-main/80 text-lg max-w-2xl mx-auto">
                        Não trabalhamos com pacotes prontos. Partimos do que você sente
                        vontade de viver — e desenhamos o roteiro a partir daí.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {destinations.map((dest, index) => (
                        <DestinationCard key={dest.id} dest={dest} index={index} />
                    ))}
                </div>

                {/* Fechamento — qualquer destino */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="mt-24 md:mt-28 text-center"
                >
                    <p className="font-sans text-terracota text-xs uppercase tracking-[0.25em] mb-4">
                        Para qualquer canto do mundo
                    </p>
                    <h3 className="font-script text-canto-da-terra text-5xl md:text-7xl leading-[1.15] mb-6">
                        Sonha com um lugar que ainda não está aqui?
                    </h3>
                    <p className="font-sans text-text-main/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Estes são apenas começos de conversa. Desenhamos roteiros do
                        Nordeste brasileiro ao outro lado do planeta — conte para onde o
                        seu coração aponta.
                    </p>
                    <a
                        href="https://wa.me/message/L7NFE5AFYVTZH1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-canto-da-terra text-brisa font-sans font-medium py-4 px-10 rounded-full hover:bg-terracota transition-all duration-300 uppercase tracking-[0.15em] text-xs shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Montar meu roteiro
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
