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
            src: "/images/destinos/bariloche/capa.jpg",
            alt: "Península do Llao Llao e o lago Nahuel Huapi, em Bariloche",
            credito: credito("Fernando", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Llao_Llao_Peninsula.jpg"),
        },
        inverno: {
            src: "/images/destinos/bariloche/destino.jpg",
            alt: "Pôr do sol sobre os pinheiros nevados do Cerro Otto",
            credito: credito(
                "Brandon Antonio Segura Torres e Priscilla Vieto Bonilla",
                "CC BY-SA 4.0",
                "https://commons.wikimedia.org/wiki/File:Ecosistemas_nevados_en_el_Cerro_Otto_de_Bariloche,_Argentina.jpg"
            ),
            legenda: "A neve chega em junho.",
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
                    alt: "Vista do Llao Llao a partir do Punto Panorámico",
                    credito: credito("Alexrebolledo", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Llao_Llao_desde_punto_panor%C3%A1mico.JPG"),
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
    {
        slug: "gramado",
        nome: "Gramado",
        pais: "Serra Gaúcha · Brasil",
        titulo: "Gramado e Serra Gaúcha: frio, vinho e charme europeu",
        resumo:
            "Guia da Curadoria Cantos do Mundo para Gramado, Canela e a Serra Gaúcha: melhor época, Natal Luz, quantos dias ficar, roteiro dia a dia, vinícolas e dicas.",
        chamada: "Frio na serra, vinho na taça e tempo para os dois.",
        capa: {
            src: "/images/destinos/gramado/capa.jpg",
            alt: "Cascata do Caracol caindo entre a mata, em Canela",
            credito: credito("Tiago Fioreze", "CC BY-SA 3.0", "https://commons.wikimedia.org/wiki/File:Caracol_falls_(2_April_2008).jpg"),
        },
        inverno: {
            src: "/images/destinos/gramado/inverno.jpg",
            alt: "Centro de Gramado iluminado à noite",
            credito: credito(
                "Felipe Valduga",
                "CC BY 2.0",
                "https://commons.wikimedia.org/wiki/File:Light_trails_in_Centro_de_Gramado_at_night_(25415341663).jpg"
            ),
            legenda: "Gramado à noite tem outro encanto.",
        },
        essencial: [
            { rotulo: "Melhor época", valor: "Inverno (jun–ago) e Natal Luz (out–jan)" },
            { rotulo: "Dias ideais", valor: "4 a 5 dias" },
            { rotulo: "Como chegar", valor: "Voo até Porto Alegre + 2h de estrada" },
            { rotulo: "Fica a", valor: "115 km de Porto Alegre" },
        ],
        introducao: [
            "Gramado e Canela ficam na Serra Gaúcha, a cerca de 115 km de Porto Alegre. Arquitetura de inspiração europeia, ruas floridas, chocolate artesanal e fondue fazem da região um dos destinos mais procurados do Brasil, especialmente por casais e famílias.",
            "Dá para combinar a viagem com o Vale dos Vinhedos, em Bento Gonçalves, a pouco mais de uma hora e meia de estrada, para um roteiro completo de vinho, gastronomia e natureza.",
        ],
        epocas: [
            {
                periodo: "Junho a agosto",
                titulo: "Inverno",
                texto: "A temporada mais charmosa: frio de verdade, lareira, fondue e chocolate quente. Julho é o mês mais cheio, por causa das férias escolares.",
            },
            {
                periodo: "Outubro a janeiro",
                titulo: "Natal Luz",
                texto: "A cidade inteira iluminada, desfiles e espetáculos de Natal. É uma das épocas mais disputadas: vale reservar com antecedência.",
            },
            {
                periodo: "Setembro a novembro",
                titulo: "Primavera",
                texto: "Hortênsias e jardins floridos, clima ameno e menos movimento. Ótima para passear a pé e conhecer as vinícolas.",
            },
            {
                periodo: "Janeiro a abril",
                titulo: "Verão e vindima",
                texto: "Dias longos e frescos na serra. De janeiro a março acontece a colheita da uva no Vale dos Vinhedos.",
            },
        ],
        experiencias: [
            {
                nome: "Lago Negro",
                texto: "Um lago cercado de pinheiros, com pedalinhos em forma de cisne e trilha à beira d'água. Um dos cartões-postais de Gramado.",
                foto: {
                    src: "/images/destinos/gramado/lago-negro.jpg",
                    alt: "Pedalinhos em forma de cisne no Lago Negro",
                    credito: credito("Yeuxpapilon", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Lago_Negro_Gramado.jpg"),
                },
            },
            {
                nome: "Rua Coberta e centro",
                texto: "Cafés, restaurantes de fondue, chocolaterias e lojas no centro de Gramado, que se percorre todo a pé.",
                foto: {
                    src: "/images/destinos/gramado/rua-coberta.jpg",
                    alt: "Rua Coberta de Gramado com mesas e jardins",
                    credito: credito("Larissa Fraga", "CC BY 3.0", "https://commons.wikimedia.org/wiki/File:Rua_Coberta_-_Gramado_-_panoramio.jpg"),
                },
            },
            {
                nome: "Catedral de Pedra",
                texto: "A igreja em estilo gótico, toda em pedra basáltica, no centro de Canela, a 8 km de Gramado.",
                foto: {
                    src: "/images/destinos/gramado/catedral.jpg",
                    alt: "Catedral de Pedra de Canela sob céu azul",
                    credito: credito("Rosanetur", "CC BY 2.0", "https://commons.wikimedia.org/wiki/File:Catedral_de_Pedra,_Canela_RS.jpg"),
                },
            },
            {
                nome: "Cascata do Caracol",
                texto: "Uma queda de mais de 100 metros no meio da mata, no Parque do Caracol, em Canela. Há mirante, trilha e bondinho aéreo.",
                foto: {
                    src: "/images/destinos/gramado/caracol.jpg",
                    alt: "Cascata do Caracol vista do alto do vale",
                    credito: credito("Dalton Scavassa", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Cascata_Caracol_-_Canela_RS.jpg"),
                },
            },
            {
                nome: "Vale dos Vinhedos",
                texto: "Vinícolas familiares e grandes, com degustação e almoço entre os parreirais, em Bento Gonçalves.",
                foto: {
                    src: "/images/destinos/gramado/vinhedos.jpg",
                    alt: "Parreirais e vinícola no Vale dos Vinhedos",
                    credito: credito(
                        "MTur Destinos / Renato Soares",
                        "Domínio público",
                        "https://commons.wikimedia.org/wiki/File:RenatoSoares_Vale_dos_Vinhedos_Bento_Goncalves_RS_(40913617852).jpg"
                    ),
                },
            },
            {
                nome: "Natal Luz",
                texto: "De outubro a janeiro, Gramado vira cenário de Natal, com luzes, desfiles e espetáculos.",
                foto: {
                    src: "/images/destinos/gramado/natal-luz.jpg",
                    alt: "Decoração do Natal Luz iluminando o centro de Gramado",
                    credito: credito("Larissa Fraga", "CC BY 3.0", "https://commons.wikimedia.org/wiki/File:Natal_Luz_-_Gramado_-_panoramio.jpg"),
                },
            },
        ],
        roteiro: {
            titulo: "Roteiro-exemplo de 4 noites",
            nota: "Cada roteiro da Cantos é montado sob medida. Este é só um ponto de partida.",
            dias: [
                { dia: "Dia 1", texto: "Chegada a Porto Alegre, traslado à serra e noite de fondue no centro de Gramado." },
                { dia: "Dia 2", texto: "Lago Negro pela manhã, Rua Coberta, chocolaterias e o centro a pé." },
                { dia: "Dia 3", texto: "Canela: Catedral de Pedra e Parque do Caracol, com a cascata e o bondinho." },
                { dia: "Dia 4", texto: "Dia no Vale dos Vinhedos com degustação e almoço entre os parreirais." },
                { dia: "Dia 5", texto: "Manhã livre para as últimas compras e traslado de volta a Porto Alegre." },
            ],
        },
        faq: [
            {
                p: "Qual a melhor época para ir a Gramado?",
                r: "Depende do que você procura: o inverno (junho a agosto) para o frio e o clima de serra, e o Natal Luz (outubro a janeiro) para a cidade iluminada. Primavera e verão são mais tranquilos e ótimos para as vinícolas.",
            },
            {
                p: "Quantos dias ficar em Gramado?",
                r: "De 4 a 5 dias dá para conhecer Gramado e Canela com calma. Com o Vale dos Vinhedos, o ideal é somar um ou dois dias.",
            },
            {
                p: "Como chegar a Gramado?",
                r: "O aeroporto mais próximo é o de Porto Alegre. De lá são cerca de 115 km, perto de duas horas de estrada, de traslado ou carro alugado.",
            },
            {
                p: "Neva em Gramado?",
                r: "É raro. A neve na Serra Gaúcha acontece em poucos dias de alguns invernos e não dá para programar a viagem por ela. O que é garantido no inverno é o frio e o clima de montanha.",
            },
            {
                p: "Dá para conhecer Gramado e o Vale dos Vinhedos na mesma viagem?",
                r: "Sim. O Vale dos Vinhedos, em Bento Gonçalves, fica a cerca de uma hora e meia de Gramado e cabe bem num roteiro de 5 ou 6 dias.",
            },
            {
                p: "Quanto custa uma viagem para Gramado?",
                r: "Depende da época, do hotel e dos passeios. Como cada roteiro é montado sob medida, a Curadoria Cantos do Mundo envia uma proposta personalizada pelo WhatsApp.",
            },
        ],
    },
    {
        slug: "foz-do-iguacu",
        nome: "Foz do Iguaçu",
        pais: "Paraná · Brasil",
        titulo: "Foz do Iguaçu: as cataratas pelos dois lados da fronteira",
        resumo:
            "Guia da Curadoria Cantos do Mundo para Foz do Iguaçu: melhor época, quantos dias ficar, lado brasileiro e argentino das Cataratas, Itaipu, Parque das Aves, documentos e roteiro dia a dia.",
        chamada: "Água, mata e arco-íris, pelos dois lados da fronteira.",
        capa: {
            src: "/images/destinos/foz/capa.jpg",
            alt: "Cataratas do Iguaçu com a passarela sobre o rio, no lado brasileiro",
            credito: credito("Pribruder", "CC0", "https://commons.wikimedia.org/wiki/File:Cataratas_do_Igua%C3%A7u_(2022).jpg"),
        },
        inverno: {
            src: "/images/destinos/foz/cataratas.jpg",
            alt: "Arco-íris sobre a Garganta do Diabo, vista do lado brasileiro",
            credito: credito(
                "Josep M. Gracia",
                "CC BY-SA 4.0",
                "https://commons.wikimedia.org/wiki/File:IG_-_Devil%27s_Throat_from_the_Brazilian_side_of_Iguazu_Falls,_2023.jpg"
            ),
            legenda: "Em dia de sol, o arco-íris aparece.",
        },
        essencial: [
            { rotulo: "Melhor época", valor: "O ano todo; mais água no verão" },
            { rotulo: "Dias ideais", valor: "3 a 4 noites" },
            { rotulo: "Como chegar", valor: "Voo até Foz do Iguaçu (IGU)" },
            { rotulo: "Lado argentino", valor: "RG (menos de 10 anos) ou passaporte" },
        ],
        introducao: [
            "Foz do Iguaçu fica no oeste do Paraná, onde Brasil, Argentina e Paraguai se encontram. As Cataratas do Iguaçu, dentro de parques nacionais dos dois lados da fronteira, são o motivo da viagem: centenas de quedas no meio da Mata Atlântica, com a Garganta do Diabo no centro de tudo.",
            "A gente sempre recomenda conhecer os dois lados. O brasileiro mostra a vista panorâmica; o argentino coloca você em cima e embaixo das quedas. Somando Itaipu, o Parque das Aves e o pôr do sol no Marco das Três Fronteiras, é uma viagem curta e cheia, ótima para famílias e casais.",
        ],
        epocas: [
            {
                periodo: "Dezembro a março",
                titulo: "Verão",
                texto: "Calor forte e úmido, chuvas frequentes e, em geral, as cataratas mais cheias. Janeiro concentra o movimento das férias.",
            },
            {
                periodo: "Abril e maio",
                titulo: "Outono",
                texto: "O calor diminui, o movimento cai e ainda costuma haver bom volume de água. Uma das épocas mais agradáveis para caminhar pelas trilhas.",
            },
            {
                periodo: "Junho a agosto",
                titulo: "Inverno",
                texto: "Época mais seca: dias amenos, noites frias e menos água nas quedas, que ficam mais desenhadas e com menos névoa. Julho tem férias escolares.",
            },
            {
                periodo: "Setembro a novembro",
                titulo: "Primavera",
                texto: "As chuvas voltam, a temperatura sobe e o volume das quedas tende a crescer. Bom equilíbrio entre clima e paisagem.",
            },
        ],
        experiencias: [
            {
                nome: "Trilha das Cataratas",
                texto: "No lado brasileiro, cerca de 1,5 km de caminhada entre mirantes, com a vista panorâmica das quedas do lado argentino. Tem escadas, e o ônibus do parque leva até o início.",
                foto: {
                    src: "/images/destinos/foz/trilha.jpg",
                    alt: "Sequência de quedas d'água no meio da mata, com arco-íris",
                    credito: credito("Jerzystrzelecki", "CC BY 3.0", "https://commons.wikimedia.org/wiki/File:Iguazu_Falls(js)10.jpg"),
                },
            },
            {
                nome: "Passarela e Espaço Naipi",
                texto: "O fim da trilha: uma passarela sobre o rio, de frente para a Garganta do Diabo, e o elevador panorâmico do Espaço Naipi. Prepare-se para sair molhado.",
                foto: {
                    src: "/images/destinos/foz/passarela.jpg",
                    alt: "Passarela sobre o rio Iguaçu diante das quedas, no lado brasileiro",
                    credito: credito("Bruno Lenharo", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Passarela_das_cataratas_do_Igua%C3%A7u.jpg"),
                },
            },
            {
                nome: "Garganta del Diablo, lado argentino",
                texto: "No Parque Nacional Iguazú, o Tren Ecológico de la Selva leva até a passarela que termina em cima da Garganta del Diablo. Os circuitos Superior e Inferior completam o dia, por cima e por baixo das quedas.",
                foto: {
                    src: "/images/destinos/foz/garganta.jpg",
                    alt: "Garganta del Diablo vista do mirante do lado argentino",
                    credito: credito(
                        "Luca Galuzzi",
                        "CC BY-SA 2.5",
                        "https://commons.wikimedia.org/wiki/File:Garganta_del_Diablo_or_Devil_Throat_Iguazu_Falls_Argentina_Luca_Galuzzi_2005.JPG"
                    ),
                },
            },
            {
                nome: "Usina de Itaipu",
                texto: "A hidrelétrica binacional no rio Paraná, entre Brasil e Paraguai. Há a visita panorâmica, o circuito especial por dentro da usina e, em alguns dias, a barragem iluminada à noite.",
                foto: {
                    src: "/images/destinos/foz/itaipu.jpg",
                    alt: "Barragem da usina de Itaipu com o vertedouro",
                    credito: credito(
                        "Deni Williams",
                        "CC BY 2.0",
                        "https://commons.wikimedia.org/wiki/File:Usina_Hidroel%C3%A9trica_Itaipu_Binacional_-_Itaipu_Dam_(17173517650).jpg"
                    ),
                },
            },
            {
                nome: "Parque das Aves",
                texto: "Ao lado da entrada do Parque Nacional do Iguaçu, viveiros dentro da mata para ver de perto tucanos, araras e outras aves da Mata Atlântica. As crianças adoram.",
                foto: {
                    src: "/images/destinos/foz/parque-das-aves.jpg",
                    alt: "Tucano-toco pousado em um tronco, no Parque das Aves",
                    credito: credito("Julio Cesar R. Lopes", "CC BY-SA 4.0", "https://commons.wikimedia.org/wiki/File:Tucano_parque_das_aves_2015.jpg"),
                },
            },
            {
                nome: "Marco das Três Fronteiras",
                texto: "O ponto onde os rios Iguaçu e Paraná se encontram e dividem Brasil, Argentina e Paraguai. Vá no fim da tarde: o pôr do sol é o programa, e o espaço tem gastronomia e espetáculo.",
                foto: {
                    src: "/images/destinos/foz/tres-fronteiras.jpg",
                    alt: "Encontro dos rios Iguaçu e Paraná na Tríplice Fronteira",
                    credito: credito(
                        "Phillip Capper",
                        "CC BY 2.0",
                        "https://commons.wikimedia.org/wiki/File:Confluence_of_the_Iguazu_and_Parana_rivers,_Puerto_Iguazu,_Misiones,_Argentina,_6th._Jan._2011_-_Flickr_-_PhillipC.jpg"
                    ),
                },
            },
        ],
        roteiro: {
            titulo: "Roteiro-exemplo de 4 noites",
            nota: "Cada roteiro da Cantos é montado sob medida. Este é só um ponto de partida.",
            dias: [
                { dia: "Dia 1", texto: "Chegada, traslado ao hotel e pôr do sol no Marco das Três Fronteiras." },
                { dia: "Dia 2", texto: "Lado brasileiro: Trilha das Cataratas, passarela e Espaço Naipi. À tarde, o Parque das Aves, logo ao lado." },
                { dia: "Dia 3", texto: "Lado argentino: trem até a Garganta del Diablo e os circuitos Superior e Inferior." },
                { dia: "Dia 4", texto: "Itaipu pela manhã e tarde livre, com compras em Ciudad del Este, no Paraguai, para quem quiser." },
                { dia: "Dia 5", texto: "Traslado ao aeroporto e volta para casa." },
            ],
        },
        faq: [
            {
                p: "Qual a melhor época para ir a Foz do Iguaçu?",
                r: "As cataratas valem o ano todo. No verão e na primavera, com mais chuva, costumam estar mais cheias; no inverno o clima é seco e ameno, com menos água. O volume depende das chuvas na bacia do rio e varia bastante de um ano para o outro.",
            },
            {
                p: "Quantos dias ficar em Foz do Iguaçu?",
                r: "De 3 a 4 noites dá para conhecer os dois lados das cataratas, Itaipu, o Parque das Aves e o Marco das Três Fronteiras sem correria.",
            },
            {
                p: "Qual documento preciso para visitar o lado argentino?",
                r: "RG em bom estado e emitido há menos de 10 anos, ou passaporte válido. A CNH não é aceita para cruzar a fronteira. As regras podem mudar, então confirme nos canais oficiais antes de viajar.",
            },
            {
                p: "Como chegar a Foz do Iguaçu saindo de Porto Alegre?",
                r: "De avião, até o Aeroporto Internacional de Foz do Iguaçu (IGU), com voo direto ou com conexão, conforme a época e a companhia. O aeroporto fica no caminho das Cataratas, perto do Parque Nacional.",
            },
            {
                p: "Vale a pena conhecer os dois lados das Cataratas?",
                r: "Sim, e a gente sempre recomenda. O lado brasileiro mostra a vista panorâmica, em meio dia de visita. O lado argentino pede um dia inteiro e leva você para perto das quedas, até a Garganta del Diablo.",
            },
            {
                p: "Quanto custa uma viagem para Foz do Iguaçu?",
                r: "Depende da época, do hotel e dos passeios. Como cada roteiro é montado sob medida, a Curadoria Cantos do Mundo envia uma proposta personalizada pelo WhatsApp.",
            },
        ],
    },
];

export function getDestino(slug) {
    return destinos.find((d) => d.slug === slug);
}
