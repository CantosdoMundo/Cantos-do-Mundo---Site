"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="relative h-[65dvh] md:h-[100dvh] flex items-center justify-center overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                webkit-playsinline="true"
                className="absolute inset-0 w-full h-full object-contain md:object-cover object-center"
            >
                <source src="/Vídeo Institucional/CANTOS DO MUNDO - FINAL.mp4" type="video/mp4" />
            </video>

            {/* Decorative Circle */}
            <div className="absolute top-20 right-10 w-96 h-96 bg-duna/10 rounded-full blur-3xl z-10" />
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-terracota/10 rounded-full blur-3xl z-10" />

            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-10" />

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">

                {/* Bird Icon */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-8 relative w-28 h-28 md:w-36 md:h-36 drop-shadow-2xl"
                >
                    <Image
                        src="/images/bird.svg"
                        alt="Cantos do Mundo Bird"
                        fill
                        className="object-contain"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="font-script text-2xl md:text-3xl text-brisa mb-6 max-w-2xl mx-auto drop-shadow-lg"
                >
                    Viagens com alma — roteiros curados com sensibilidade.
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="font-serif text-5xl md:text-7xl text-brisa mb-10 leading-tight drop-shadow-2xl"
                >
                    Cada canto do mundo,
                    <br />
                    um novo você.
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col md:flex-row gap-4 items-center"
                >
                    <a
                        href="#destinos"
                        className="inline-block bg-brisa/10 backdrop-blur-sm border-2 border-brisa text-brisa px-10 py-4 rounded-full hover:bg-brisa hover:text-canto-da-terra transition-all duration-300 uppercase tracking-widest text-sm font-bold shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                        Descobrir
                    </a>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white transition-all duration-300 uppercase tracking-widest text-sm font-bold border border-white/30 hover:border-white/50"
                    >
                        <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play size={14} fill="currentColor" />
                        </div>
                        Assista o Vídeo
                    </button>
                </motion.div>
            </div>

            {/* Video Modal - Replace 'VIDEO_ID' with actual YouTube ID */}
            <VideoModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                videoId="LXb3EKWsInQ" // Placeholder: Costa Rica 4K
            />
        </section>
    );
}
