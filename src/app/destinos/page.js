import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionSeparator, { MapBackground } from "@/components/SectionSeparator";
import { destinos } from "@/content/destinos";

export const metadata = {
    title: "Guias de destino | Cantos do Mundo",
    description: "Guias da Curadoria Cantos do Mundo: melhor época, roteiros e dicas para cada destino.",
    alternates: { canonical: "/destinos" },
};

export default function DestinosPage() {
    return (
        <main className="min-h-screen bg-brisa">
            <Header />
            <section className="bg-horizonte pt-44 pb-24 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
                    <img src="/images/map-bg.svg" alt="" className="h-full w-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="font-sans text-duna text-sm uppercase tracking-[0.25em]">Guias da Curadoria</span>
                    <h1 className="font-serif text-brisa text-5xl md:text-6xl mt-3 max-w-3xl mx-auto">
                        Para onde o seu próximo canto do mundo vai te levar?
                    </h1>
                </div>
            </section>
            <section className="py-24 md:py-32 bg-brisa relative overflow-hidden">
                <MapBackground />
                <div className="container mx-auto px-4 relative z-10">
                    <SectionSeparator />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinos.map((d) => (
                            <a key={d.slug} href={`/destinos/${d.slug}`} className="group">
                                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                    <img
                                        src={d.capa.src}
                                        alt={d.capa.alt}
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <p className="font-sans text-duna text-sm uppercase tracking-wider mb-2">{d.pais}</p>
                                        <h2 className="font-serif text-4xl text-brisa mb-3">{d.nome}</h2>
                                        <p className="font-sans text-brisa/90 text-sm mb-6 leading-relaxed">{d.chamada}</p>
                                        <span className="inline-block w-full border border-brisa/50 text-brisa font-sans font-medium py-3 px-6 rounded-full group-hover:bg-brisa group-hover:text-horizonte transition-all duration-300 text-center uppercase tracking-widest text-xs">
                                            Ler o guia
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
