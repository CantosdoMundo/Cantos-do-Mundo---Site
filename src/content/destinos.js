// Guias de destino da Curadoria. Conteúdo informativo: sem preço fixo e sem promessa de
// disponibilidade, para nunca desatualizar nem prometer o que a agência não esteja vendendo.
// Cada guia vira /destinos/<slug>, com FAQ estruturado para Google e buscas por IA.

const credito = (autor, licenca, url) => ({ autor, licenca, url });

export const destinos = [
    {
        slug: "bariloche",
        nome: "Bariloche",
        pais: "Argentina",
        titulo: "Bariloche: neve, lagos e a Patagônia sem pressa",
        resumo:
            "Guia da Curadoria Cantos do Mundo para Bariloche: melhor época para neve, quantos dias ficar, roteiro dia a dia, passeios e documentos para brasileiros.",
        chamada: "Neve, lagos e um silêncio que fica com você.",
        capa: {
            src: "/images/destinos/bariloche/destino.jpg",
            alt: "Pôr do sol sobre montanhas nevadas no Cerro Otto, em Bariloche",
            credito: credito(
                "Brandon Antonio Segura Torres e Priscilla Vieto Bonilla",
                "CC BY-SA 4.0",
                "https://commons.wikimedia.org/wiki/File:Ecosistemas_nevados_en_el_Cerro_Otto_de_Bariloche,_Argentina.jpg"
            ),
        },
        essencial: [
            { rotulo: "Melhor época para neve", valor: "Julho a setembro" },
            { rotulo: "Dias ideais", valor: "6 a 8 dias" },
            { rotulo: "Como chegar", valor: "Voo com conexão em Buenos Aires ou São Paulo" },
            { rotulo: "Documento", valor: "RG ou passaporte" },
        ],
        introducao: [
            "San Carlos de Bariloche fica às margens do lago Nahuel Huapi, aos pés dos Andes, na Patagônia argentina. É o destino de neve mais procurado pelos brasileiros, mas vale o ano todo: no inverno, pistas de esqui e paisagens brancas; na primavera e no verão, lagos azul-turquesa, trilhas e bosques.",
            "Do centro, quase tudo fica a menos de uma hora: o Cerro Catedral, o Circuito Chico, o porto de onde saem os barcos para a Isla Victoria e a estrada dos Sete Lagos.",
        ],
        epocas: [
            {
                periodo: "Junho a setembro",
                titulo: "Inverno e neve",
                texto: "Temporada de esqui no Cerro Catedral. Julho e agosto concentram a neve e o movimento (férias escolares). Setembro costuma ter neve nos cerros com menos gente.",
            },
            {
                periodo: "Outubro a dezembro",
                titulo: "Primavera",
                texto: "Dias mais longos, montanhas ainda com neve no topo e flores nas margens dos lagos. Boa época para trilhas e passeios de barco.",
            },
            {
                periodo: "Janeiro a março",
                titulo: "Verão",
                texto: "Clima ameno, praias de lago, caiaque e a Rota dos Sete Lagos no seu melhor.",
            },
            {
                periodo: "Abril e maio",
                titulo: "Outono",
                texto: "Bosques dourados e avermelhados, cidade tranquila. Para quem quer paisagem e silêncio.",
            },
        ],
        experiencias: [
            {
                nome: "Cerro Catedral",
                texto: "O maior centro de esqui da América do Sul, a cerca de 20 km do centro. Teleféricos até o alto, aulas para iniciantes e restaurantes com vista para os Andes.",
                foto: {
                    src: "/images/destinos/bariloche/catedral.jpg",
                    alt: "Base do Cerro Catedral coberta de neve",
                    credito: credito("Boscos", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Basecat.JPG"),
                },
            },
            {
                nome: "Circuito Chico e Llao Llao",
                texto: "O passeio clássico: Punto Panorámico, a península do Llao Llao, Bahía López e a Colonia Suiza. Lagos e montanhas em cada curva.",
                foto: {
                    src: "/images/destinos/bariloche/chico_a.jpg",
                    alt: "Península do Llao Llao entre os lagos de Bariloche",
                    credito: credito("Fernando", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Llao_Llao_Peninsula.jpg"),
                },
            },
            {
                nome: "Isla Victoria e Bosque de Arrayanes",
                texto: "Navegação pelo Nahuel Huapi saindo de Puerto Pañuelo até um bosque de arrayanes, árvores de tronco cor de canela.",
                foto: {
                    src: "/images/destinos/bariloche/arrayanes.jpg",
                    alt: "Troncos cor de canela no Bosque de Arrayanes",
                    credito: credito(
                        "Nicolás (Seno de Reloncaví, Chile)",
                        "CC BY-SA 2.0",
                        "https://commons.wikimedia.org/wiki/File:Bosque_de_arrayanes_(29463403005).jpg"
                    ),
                },
            },
            {
                nome: "Cerro Campanario",
                texto: "Um teleférico curto leva a um dos mirantes mais bonitos da região, com vista para lagos e ilhas. Ao pôr do sol é inesquecível.",
                foto: {
                    src: "/images/destinos/bariloche/campanario.jpg",
                    alt: "Pôr do sol sobre o lago Nahuel Huapi",
                    credito: credito(
                        "Emilio Küffer",
                        "CC BY-SA 2.0",
                        "https://commons.wikimedia.org/wiki/File:Atardecer_sobre_el_Nahuel_Huapi_(25105053239).jpg"
                    ),
                },
            },
            {
                nome: "Rota dos Sete Lagos",
                texto: "Um dia de estrada entre lagos espelhados e bosques andinos até Villa La Angostura e San Martín de los Andes.",
                foto: {
                    src: "/images/destinos/bariloche/lagos_a.jpg",
                    alt: "Estrada da Rota dos Sete Lagos entre montanhas",
                    credito: credito("Albasmalko", "Domínio público", "https://commons.wikimedia.org/wiki/File:CAMINO_DE_LOS_SIETE_LAGOS.JPG"),
                },
            },
            {
                nome: "Chocolates e cervejas artesanais",
                texto: "A Rua Mitre e suas chocolaterias, e a rota cervejeira perto do lago Moreno, com vista para as montanhas.",
                foto: {
                    src: "/images/destinos/bariloche/lago_moreno.jpg",
                    alt: "Montanha refletida no lago, no Circuito Chico",
                    credito: credito(
                        "Laurian Verré",
                        "CC BY-SA 3.0",
                        "https://commons.wikimedia.org/wiki/File:Argentina_Bariloche_CircuitoChico.jpg"
                    ),
                },
            },
        ],
        roteiro: {
            titulo: "Roteiro-exemplo de 7 noites",
            nota: "Cada roteiro da Cantos é montado sob medida. Este é só um ponto de partida.",
            dias: [
                { dia: "Dia 1", texto: "Chegada, traslado ao hotel e fim de tarde no Centro Cívico com chocolate quente." },
                { dia: "Dia 2", texto: "Circuito Chico: Punto Panorámico, Llao Llao, Bahía López e almoço na Colonia Suiza." },
                { dia: "Dia 3", texto: "Dia inteiro de neve no Cerro Catedral, com aula de esqui opcional." },
                { dia: "Dia 4", texto: "Navegação à Isla Victoria e ao Bosque de Arrayanes." },
                { dia: "Dia 5", texto: "Manhã livre e pôr do sol no Cerro Campanario." },
                { dia: "Dia 6", texto: "Rota dos Sete Lagos até Villa La Angostura." },
                { dia: "Dia 7", texto: "Dia livre: rota cervejeira, chocolates e compras na Rua Mitre." },
                { dia: "Dia 8", texto: "Traslado ao aeroporto e volta para casa." },
            ],
        },
        faq: [
            {
                p: "Qual a melhor época para ver neve em Bariloche?",
                r: "Entre julho e setembro. Julho e agosto têm neve mais garantida e mais movimento por causa das férias; setembro costuma ter neve nos cerros com menos gente.",
            },
            {
                p: "Quantos dias ficar em Bariloche?",
                r: "Entre 6 e 8 dias dá para conhecer os passeios principais sem correria: Cerro Catedral, Circuito Chico, Isla Victoria, Cerro Campanario e a Rota dos Sete Lagos.",
            },
            {
                p: "Brasileiro precisa de passaporte para ir a Bariloche?",
                r: "Não. Brasileiros podem entrar na Argentina com RG em bom estado e emitido há menos de 10 anos, ou com passaporte válido. As regras podem mudar, então confirme nos canais oficiais antes de viajar.",
            },
            {
                p: "Como chegar a Bariloche saindo do Brasil?",
                r: "De avião, normalmente com conexão em Buenos Aires ou São Paulo, até o aeroporto de Bariloche (BRC). Em algumas épocas há voos diretos de cidades brasileiras.",
            },
            {
                p: "Bariloche é bom para viajar em casal?",
                r: "Sim. Hotéis com vista para o lago, jantares à beira do Nahuel Huapi e o pôr do sol no Cerro Campanario fazem de Bariloche um dos destinos favoritos para lua de mel e pedidos de casamento.",
            },
            {
                p: "Quanto custa uma viagem para Bariloche?",
                r: "Depende da época, do hotel e dos passeios. Como cada roteiro é montado sob medida, a Curadoria Cantos do Mundo envia uma proposta personalizada pelo WhatsApp.",
            },
        ],
    },
];

export function getDestino(slug) {
    return destinos.find((d) => d.slug === slug);
}
