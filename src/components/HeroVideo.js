"use client";

export default function HeroVideo() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background Video - Scaled to eliminate black bars */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
            >
                <source src="/Vídeo Institucional/CANTOS DO MUNDO - FINAL.mp4" type="video/mp4" />
            </video>

            {/* Very subtle dark overlay just for depth */}
            <div className="absolute inset-0 bg-black/10" />
        </section>
    );
}
