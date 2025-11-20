"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
    {
        id: 1,
        type: "image",
        src: "/Feedbacks Clientes/feedback-1.jpeg",
        alt: "Feedback Cliente 1"
    },
    {
        id: 2,
        type: "image",
        src: "/Feedbacks Clientes/feedback-2.jpeg",
        alt: "Feedback Cliente 2"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 md:py-32 bg-brisa relative overflow-hidden">
            {/* Map Background (Subtle) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] mix-blend-multiply">
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
                        Depoimentos
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl text-horizonte mt-2 mb-6">
                        O carinho de quem viajou
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="rounded-3xl shadow-lg border border-canto-da-terra/10 transition-all duration-500 hover:scale-105 hover:z-50 hover:shadow-2xl cursor-zoom-in overflow-hidden relative bg-gray-100"
                        >
                            <div className="relative h-[500px] w-full">
                                {/* Blurred Background to fill space */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-cover blur-xl opacity-50 scale-110"
                                    />
                                </div>

                                {/* Main Image - Fully Visible */}
                                <div className="absolute inset-0 p-4">
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        className="object-contain drop-shadow-xl"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
