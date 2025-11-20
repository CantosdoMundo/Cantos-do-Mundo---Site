"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const videoRef = React.useRef(null);

    const handlePlay = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <section id="sobre" className="py-24 md:py-32 bg-brisa relative overflow-hidden">
            {/* Map Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply">
                <Image
                    src="/images/map-bg.svg"
                    alt="Mapa Mundi"
                    fill
                    className="object-cover object-bottom"
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image/Video Column */}
                    <div className="relative aspect-[9/16] h-auto md:h-[600px] md:aspect-auto rounded-3xl overflow-hidden shadow-2xl bg-white group">
                        {/* Custom Poster (Visible on Mobile and Desktop) */}
                        {!isPlaying && (
                            <div
                                onClick={handlePlay}
                                className="flex absolute inset-0 z-20 bg-white/5 items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
                            >
                                <div className="relative w-32 h-32 opacity-80 transition-transform duration-500 group-hover:scale-110">
                                    <Image
                                        src="/images/bird.svg"
                                        alt="Capa do Vídeo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* Play Button Icon Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-canto-da-terra/80 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg group-hover:bg-canto-da-terra transition-colors">
                                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )}

                        <video
                            ref={videoRef}
                            className="w-full h-full object-contain"
                            controls
                            playsInline
                            webkit-playsinline="true"
                            preload="metadata"
                            muted
                            onPlay={() => setIsPlaying(true)}
                        >
                            <source src="/Vídeo Quem somos/Historia Cantos do Mundo - Reels.mp4" type="video/mp4" />
                            Seu navegador não suporta vídeos.
                        </video>
                    </div>

                    {/* Content Column */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-canto-da-terra font-sans font-medium tracking-wider uppercase text-sm">Sobre Nós</span>
                            <h2 className="font-serif text-5xl text-horizonte mt-2 mb-6">Viagens com Alma</h2>
                        </div>

                        <div className="space-y-6 text-lg text-text-main/80 font-sans leading-relaxed">
                            <p>
                                A Cantos do Mundo nasceu em 2018 do desejo de transformar o ato de viajar em uma experiência profunda e pessoal. Não vendemos apenas passagens e hotéis; criamos jornadas que tocam o coração.
                            </p>
                            <p>
                                Acreditamos que cada viagem é uma oportunidade de reconexão — consigo mesmo, com o outro e com a natureza. Nossa curadoria é feita com sensibilidade, buscando aqueles lugares especiais que ainda guardam sua essência.
                            </p>
                        </div>

                        {/* Pillars */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-canto-da-terra/10">
                            <div>
                                <h3 className="font-serif text-xl text-canto-da-terra mb-2">Curadoria</h3>
                                <p className="text-sm text-text-main/70">Seleção minuciosa de destinos e parceiros.</p>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl text-canto-da-terra mb-2">Consultoria</h3>
                                <p className="text-sm text-text-main/70">Atendimento humano e personalizado.</p>
                            </div>
                            <div>
                                <h3 className="font-serif text-xl text-canto-da-terra mb-2">Cuidado</h3>
                                <p className="text-sm text-text-main/70">Acompanhamento em cada etapa da jornada.</p>
                            </div>
                        </div>

                        <div className="pt-6">
                            <p className="font-script text-3xl text-terracota">
                                "Viajar é trocar a roupa da alma."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
