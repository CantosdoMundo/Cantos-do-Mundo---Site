import Image from "next/image";

// O mesmo divisor da home: duas linhas finas e o pássaro da marca em cinza.
export default function SectionSeparator({ className = "mb-20" }) {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <div className="h-px bg-gradient-to-r from-transparent via-canto-da-terra/30 to-transparent w-24 md:w-48"></div>
            <div className="mx-6 relative w-6 h-6 opacity-40 grayscale">
                <Image src="/images/bird.svg" alt="" fill className="object-contain" />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-canto-da-terra/30 to-transparent w-24 md:w-48"></div>
        </div>
    );
}

export function MapBackground({ opacity = "opacity-[0.03]", position = "object-center" }) {
    return (
        <div className={`absolute inset-0 pointer-events-none ${opacity} mix-blend-multiply`}>
            <Image src="/images/map-bg.svg" alt="" fill className={`object-cover ${position}`} />
        </div>
    );
}
