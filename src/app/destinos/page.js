import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
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
            <section className="bg-horizonte pt-40 pb-20">
                <div className="container mx-auto px-4">
                    <p className="font-script text-duna text-4xl mb-2">Guias da Curadoria</p>
                    <h1 className="font-serif text-brisa text-5xl max-w-2xl">
                        Para onde o seu próximo canto do mundo vai te levar?
                    </h1>
                </div>
            </section>
            <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {destinos.map((d) => (
                    <Link key={d.slug} href={`/destinos/${d.slug}`} className="group">
                        <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                            <img
                                src={d.capa.src}
                                alt={d.capa.alt}
                                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        <p className="font-sans text-xs uppercase tracking-wider text-terracota mt-4">{d.pais}</p>
                        <h2 className="font-serif text-horizonte text-3xl mt-1">{d.nome}</h2>
                        <p className="font-sans text-horizonte/80 mt-2">{d.chamada}</p>
                    </Link>
                ))}
            </section>
            <Footer />
        </main>
    );
}
