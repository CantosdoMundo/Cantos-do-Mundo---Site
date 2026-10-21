import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionSeparator, { MapBackground } from "@/components/SectionSeparator";
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
            className={`text-[10px] font-sans tracking-wide ${claro ? "text-brisa/60" : "text-text-main/40"} hover:underline`}
        >
            Foto: {c.autor} ({c.licenca})
        </a>
    );
}

function Titulo({ eyebrow, children, center = true }) {
    return (
        <div className={`${center ? "text-center" : ""} mb-16`}>
            <span className="text-canto-da-terra font-sans font-medium tracking-wider uppercase text-sm">{eyebrow}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-horizonte mt-2">{children}</h2>
        </div>
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

            {/* Capa: mesma linguagem do hero da home, foto inteira e escurecimento só embaixo */}
            <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black">
                <img src={d.capa.src} alt={d.capa.alt} className="absolute inset-0 h-full w-full object-cover object-[50%_60%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/30" />
                <div className="relative z-10 container mx-auto h-full px-4 flex flex-col justify-end pb-20 md:pb-24">
                    <span className="font-sans text-duna text-sm uppercase tracking-[0.25em]">
                        Guia da Curadoria · {d.pais}
                    </span>
                    <h1 className="font-serif text-brisa text-6xl md:text-8xl mt-3 leading-none">{d.nome}</h1>
                    <p className="font-script text-duna text-3xl md:text-4xl mt-5">{d.chamada}</p>
                    <div className="mt-8">
                        <Credito c={d.capa.credito} claro />
                    </div>
                </div>
            </section>

            {/* Introdução + o essencial */}
            <section className="py-24 md:py-32 bg-brisa relative overflow-hidden">
                <MapBackground />
                <div className="container mx-auto px-4 relative z-10">
                    <SectionSeparator />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                        <div>
                            <span className="text-canto-da-terra font-sans font-medium tracking-wider uppercase text-sm">
                                Sobre o destino
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl text-horizonte mt-2 mb-8">{d.titulo}</h2>
                            <div className="space-y-6 text-lg text-text-main/80 font-sans leading-relaxed">
                                {d.introducao.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-8 md:pt-14 border-t md:border-t-0 md:border-l border-canto-da-terra/10 md:pl-12">
                            {d.essencial.map((e) => (
                                <div key={e.rotulo}>
                                    <dt className="font-sans text-xs uppercase tracking-wider text-canto-da-terra">{e.rotulo}</dt>
                                    <dd className="font-serif text-2xl text-horizonte mt-2">{e.valor}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </section>

            {/* Quando ir: foto de inverno + estações */}
            <section className="py-24 md:py-32 bg-brisa relative overflow-hidden">
                <MapBackground opacity="opacity-[0.02]" />
                <div className="container mx-auto px-4 relative z-10">
                    <SectionSeparator />
                    <Titulo eyebrow="Quando ir">Cada estação, uma {d.nome} diferente</Titulo>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
                        <div className="lg:col-span-2">
                            <div className="relative h-[420px] lg:h-full min-h-[420px] rounded-3xl overflow-hidden shadow-xl">
                                <img src={d.inverno.src} alt={d.inverno.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <p className="absolute bottom-6 left-6 right-6 font-script text-brisa text-3xl">A neve chega em junho.</p>
                            </div>
                            <Credito c={d.inverno.credito} />
                        </div>
                        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {d.epocas.map((e) => (
                                <article key={e.periodo} className="rounded-3xl bg-white/60 border border-canto-da-terra/10 p-8">
                                    <p className="font-sans text-xs uppercase tracking-wider text-canto-da-terra">{e.periodo}</p>
                                    <h3 className="font-serif text-2xl text-horizonte mt-2 mb-3">{e.titulo}</h3>
                                    <p className="font-sans text-text-main/75 leading-relaxed">{e.texto}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experiências: cards no formato dos destinos da home */}
            <section className="py-24 md:py-32 bg-brisa relative overflow-hidden">
                <MapBackground />
                <div className="container mx-auto px-4 relative z-10">
                    <SectionSeparator />
                    <Titulo eyebrow="Cantos únicos">O que viver em {d.nome}</Titulo>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {d.experiencias.map((x) => (
                            <article key={x.nome} className="group">
                                <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                                    <img
                                        src={x.foto.src}
                                        alt={x.foto.alt}
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <h3 className="font-serif text-3xl text-brisa mb-3">{x.nome}</h3>
                                        <p className="font-sans text-brisa/90 text-sm leading-relaxed">{x.texto}</p>
                                    </div>
                                </div>
                                <div className="mt-2 px-2">
                                    <Credito c={x.foto.credito} />
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Roteiro */}
            <section className="py-24 md:py-32 bg-brisa relative overflow-hidden">
                <MapBackground opacity="opacity-[0.02]" />
                <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                    <SectionSeparator />
                    <div className="text-center mb-14">
                        <span className="text-canto-da-terra font-sans font-medium tracking-wider uppercase text-sm">Seu roteiro</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-horizonte mt-2 mb-4">{d.roteiro.titulo}</h2>
                        <p className="font-sans text-text-main/70 text-lg">{d.roteiro.nota}</p>
                    </div>
                    <ol className="space-y-1">
                        {d.roteiro.dias.map((x) => (
                            <li key={x.dia} className="flex gap-6 items-baseline border-b border-canto-da-terra/10 py-4">
                                <span className="font-script text-terracota text-3xl w-28 shrink-0 whitespace-nowrap">{x.dia}</span>
                                <span className="font-sans text-text-main/80 text-lg">{x.texto}</span>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* Perguntas frequentes */}
            <section className="py-24 md:py-32 bg-brisa relative overflow-hidden">
                <MapBackground />
                <div className="container mx-auto px-4 relative z-10 max-w-3xl">
                    <SectionSeparator />
                    <Titulo eyebrow="Dúvidas">Perguntas frequentes sobre {d.nome}</Titulo>
                    <div className="divide-y divide-canto-da-terra/10">
                        {d.faq.map((f) => (
                            <details key={f.p} className="group py-6">
                                <summary className="font-serif text-xl md:text-2xl text-horizonte cursor-pointer list-none flex justify-between gap-6">
                                    {f.p}
                                    <span className="text-canto-da-terra group-open:rotate-45 transition-transform shrink-0">+</span>
                                </summary>
                                <p className="font-sans text-text-main/80 text-lg leading-relaxed mt-4">{f.r}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fechamento no mesmo tom da home */}
            <section className="pb-28 md:pb-36 bg-brisa relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <SectionSeparator className="mb-16" />
                    <p className="font-sans text-terracota text-xs uppercase tracking-[0.25em] mb-4">Vamos montar a sua?</p>
                    <h2 className="font-script text-canto-da-terra text-5xl md:text-7xl leading-[1.15] mb-6">
                        {d.nome} do seu jeito
                    </h2>
                    <p className="font-sans text-text-main/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Conte para a nossa curadoria quem vai, quando e o que vocês sonham viver. A gente desenha o
                        roteiro a partir daí.
                    </p>
                    <a
                        href={WHATSAPP}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-canto-da-terra text-brisa font-sans font-medium py-4 px-10 rounded-full hover:bg-terracota transition-all duration-300 uppercase tracking-[0.15em] text-xs shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Solicitar roteiro personalizado
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
