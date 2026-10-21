import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { destinos, getDestino } from "@/content/destinos";
import { notFound } from "next/navigation";

const WHATSAPP = "https://wa.me/message/L7NFE5AFYVTZH1";

export function generateStaticParams() {
    return destinos.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const d = getDestino(slug);
    if (!d) return {};
    return {
        title: `${d.titulo} | Cantos do Mundo`,
        description: d.resumo,
        alternates: { canonical: `/destinos/${d.slug}` },
        openGraph: {
            title: d.titulo,
            description: d.resumo,
            url: `https://cantosdomundotur.com.br/destinos/${d.slug}`,
            images: [{ url: d.capa.src, alt: d.capa.alt }],
            locale: "pt_BR",
            type: "article",
        },
    };
}

function Credito({ c, claro = false }) {
    return (
        <a
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-[11px] font-sans ${claro ? "text-brisa/70" : "text-horizonte/60"} hover:underline`}
        >
            Foto: {c.autor} ({c.licenca})
        </a>
    );
}

function dadosEstruturados(d) {
    const url = `https://cantosdomundotur.com.br/destinos/${d.slug}`;
    return [
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: d.faq.map((f) => ({
                "@type": "Question",
                name: f.p,
                acceptedAnswer: { "@type": "Answer", text: f.r },
            })),
        },
        {
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: d.roteiro.titulo + " em " + d.nome,
            description: d.resumo,
            url,
            touristType: ["Casais", "Famílias", "Viajantes que buscam neve"],
            itinerary: {
                "@type": "ItemList",
                itemListElement: d.roteiro.dias.map((x, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: `${x.dia}: ${x.texto}`,
                })),
            },
            provider: {
                "@type": "TravelAgency",
                name: "Cantos do Mundo Experiências e Turismo",
                url: "https://cantosdomundotur.com.br",
            },
        },
    ];
}

export default async function DestinoPage({ params }) {
    const { slug } = await params;
    const d = getDestino(slug);
    if (!d) notFound();

    return (
        <main className="min-h-screen bg-brisa">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados(d)) }}
            />
            <Header />

            {/* Capa */}
            <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden">
                <img src={d.capa.src} alt={d.capa.alt} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />
                <div className="relative z-10 container mx-auto h-full px-4 flex flex-col justify-end pb-16">
                    <p className="font-sans text-duna uppercase tracking-[0.2em] text-sm mb-3">
                        Guia da Curadoria · {d.pais}
                    </p>
                    <h1 className="font-script text-brisa text-7xl md:text-8xl leading-none">{d.nome}</h1>
                    <p className="font-serif text-brisa text-2xl md:text-3xl mt-4 max-w-2xl">{d.chamada}</p>
                    <div className="mt-6">
                        <Credito c={d.capa.credito} claro />
                    </div>
                </div>
            </section>

            {/* O essencial */}
            <section className="container mx-auto px-4 -mt-10 relative z-20">
                <dl className="grid grid-cols-2 md:grid-cols-4 gap-px bg-duna/40 rounded-2xl overflow-hidden shadow-lg">
                    {d.essencial.map((e) => (
                        <div key={e.rotulo} className="bg-brisa p-6">
                            <dt className="font-sans text-xs uppercase tracking-wider text-terracota">{e.rotulo}</dt>
                            <dd className="font-serif text-horizonte text-xl mt-2">{e.valor}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* Introdução */}
            <section className="container mx-auto px-4 py-20 max-w-3xl">
                <h2 className="font-serif text-terracota text-4xl mb-8">{d.titulo}</h2>
                {d.introducao.map((p, i) => (
                    <p key={i} className="font-sans text-horizonte text-lg leading-relaxed mb-5">{p}</p>
                ))}
            </section>

            {/* Quando ir */}
            <section className="bg-horizonte py-20">
                <div className="container mx-auto px-4">
                    <p className="font-script text-duna text-4xl mb-2">Quando ir</p>
                    <h2 className="font-serif text-brisa text-4xl mb-12">Cada estação, uma Bariloche diferente</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {d.epocas.map((e) => (
                            <article key={e.periodo} className="rounded-2xl bg-white/10 p-6">
                                <p className="font-sans text-xs uppercase tracking-wider text-duna">{e.periodo}</p>
                                <h3 className="font-serif text-brisa text-2xl mt-2 mb-3">{e.titulo}</h3>
                                <p className="font-sans text-brisa/85 leading-relaxed">{e.texto}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experiências */}
            <section className="container mx-auto px-4 py-20">
                <p className="font-script text-terracota text-4xl mb-2">Cantos únicos</p>
                <h2 className="font-serif text-horizonte text-4xl mb-12">O que viver em {d.nome}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {d.experiencias.map((x) => (
                        <article key={x.nome}>
                            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                                <img src={x.foto.src} alt={x.foto.alt} loading="lazy" className="h-full w-full object-cover" />
                            </div>
                            <Credito c={x.foto.credito} />
                            <h3 className="font-serif text-terracota text-2xl mt-3 mb-2">{x.nome}</h3>
                            <p className="font-sans text-horizonte leading-relaxed">{x.texto}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Roteiro */}
            <section className="bg-[#F4E9D3] py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <p className="font-script text-terracota text-4xl mb-2">Seu roteiro</p>
                    <h2 className="font-serif text-horizonte text-4xl mb-3">{d.roteiro.titulo}</h2>
                    <p className="font-sans text-horizonte/80 mb-10">{d.roteiro.nota}</p>
                    <ol className="space-y-4">
                        {d.roteiro.dias.map((x) => (
                            <li key={x.dia} className="flex gap-6 items-baseline border-b border-terracota/20 pb-4">
                                <span className="font-script text-terracota text-3xl w-28 shrink-0 whitespace-nowrap">{x.dia}</span>
                                <span className="font-sans text-horizonte text-lg">{x.texto}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Perguntas frequentes */}
            <section className="container mx-auto px-4 py-20 max-w-3xl">
                <h2 className="font-serif text-horizonte text-4xl mb-10">Perguntas frequentes sobre {d.nome}</h2>
                <div className="divide-y divide-duna">
                    {d.faq.map((f) => (
                        <details key={f.p} className="group py-5">
                            <summary className="font-serif text-terracota text-xl cursor-pointer list-none flex justify-between gap-4">
                                {f.p}
                                <span className="text-horizonte group-open:rotate-45 transition-transform">+</span>
                            </summary>
                            <p className="font-sans text-horizonte leading-relaxed mt-3">{f.r}</p>
                        </details>
                    ))}
                </div>
            </section>

            {/* Chamada */}
            <section className="bg-terracota py-16">
                <div className="container mx-auto px-4 text-center">
                    <p className="font-script text-duna text-4xl">Vamos montar a sua?</p>
                    <h2 className="font-serif text-brisa text-3xl md:text-4xl mt-3 mb-8">
                        Conte para a nossa curadoria como você imagina essa viagem.
                    </h2>
                    <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brisa text-terracota font-sans font-medium px-8 py-4 rounded-full hover:bg-duna transition-colors"
                    >
                        Falar com a Curadoria no WhatsApp
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
