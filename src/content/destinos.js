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
        titulo: "Foz do Iguaçu: as Cataratas dos dois lados da fronteira",
        resumo:
            "Guia da Curadoria Cantos do Mundo para Foz do Iguaçu: melhor época, quantos dias ficar, roteiro dia a dia, os dois lados das Cataratas, Parque das Aves, Itaipu e documentos.",
        chamada: "Um rugido de água que você sente no peito.",
        capa: {
            src: "/images/destinos/foz-do-iguacu/capa.jpg",
            alt: "Garganta do Diabo, a maior queda das Cataratas do Iguaçu",
            credito: credito("PREENCHER", "PREENCHER", "PREENCHER"),
        },
        inverno: {
            src: "/images/destinos/foz-do-iguacu/quando-ir.jpg",
            alt: "Quedas das Cataratas do Iguaçu cercadas pela mata",
            credito: credito("PREENCHER", "PREENCHER", "PREENCHER"),
            legenda: "As Cataratas impressionam o ano inteiro.",
        },
        essencial: [
            { rotulo: "Melhor época", valor: "O ano todo; primavera e outono mais agradáveis" },
            { rotulo: "Dias ideais", valor: "3 a 4 dias" },
            { rotulo: "Como chegar", valor: "Voo até o aeroporto de Foz (IGU)" },
            { rotulo: "Documento", valor: "RG ou passaporte para o lado argentino" },
        ],
        introducao: [
            "Foz do Iguaçu fica no oeste do Paraná, na Tríplice Fronteira entre Brasil, Argentina e Paraguai. É a casa das Cataratas do Iguaçu, um conjunto de quedas d'água no meio da mata atlântica, protegido por parques nacionais dos dois lados da fronteira.",
            "Do lado brasileiro está a vista panorâmica; do argentino, as passarelas que levam até a beira das quedas. Somando o Parque das Aves, a usina de Itaipu e o pôr do sol no Marco das Três Fronteiras, é um dos destinos mais completos do Brasil para casais e famílias.",
        ],
        epocas: [
            {
                periodo: "Dezembro a março",
                titulo: "Verão",
                texto: "Calor intenso e, em geral, mais água nas quedas. É alta temporada de férias, então vale reservar hotel e passeios com antecedência.",
            },
            {
                periodo: "Abril a junho",
                titulo: "Outono",
                texto: "Temperaturas mais amenas e menos movimento. Ótima época para caminhar pelas trilhas com calma.",
            },
            {
                periodo: "Julho e agosto",
                titulo: "Inverno",
                texto: "Dias secos e frescos, ótimos para passear. Julho tem férias escolares e mais gente nos parques.",
            },
            {
                periodo: "Setembro a novembro",
                titulo: "Primavera",
                texto: "Clima agradável e natureza em plena cor. Uma das melhores combinações de conforto e paisagem.",
            },
        ],
        experiencias: [
            {
                nome: "Cataratas, lado brasileiro",
                texto: "Uma trilha de pouco mais de 1 km com mirantes para o conjunto das quedas, terminando numa passarela sobre o rio, de frente para a Garganta do Diabo.",
                foto: {
                    src: "/images/destinos/foz-do-iguacu/lado-brasileiro.jpg",
                    alt: "Vista panorâmica das Cataratas a partir do lado brasileiro",
                    credito: credito("PREENCHER", "PREENCHER", "PREENCHER"),
                },
            },
            {
                nome: "Garganta del Diablo",
                texto: "No lado argentino, um trem ecológico e passarelas sobre o rio Iguaçu levam até a borda da maior queda. Prepare-se para a névoa e o barulho.",
                foto: {
                    src: "/images/destinos/foz-do-iguacu/garganta.jpg",
                    alt: "Passarela diante da Garganta del Diablo, no lado argentino",
                    credito: credito("PREENCHER", "PREENCHER", "PREENCHER"),
                },
            },
            {
                nome: "Barco até as quedas",
                texto: "Um passeio de bote que sobe o rio e chega bem perto das Cataratas. Você vai se molhar: é parte da graça.",
                foto: {
                    src: "/images/destinos/foz-do-iguacu/barco.jpg",
                    alt: "Barco se aproximando das quedas do Iguaçu",
                    credito: credito("PREENCHER", "PREENCHER", "PREENCHER"),
                },
            },
            {
                nome: "Parque das Aves",
                texto: "Ao lado da entrada do parque nacional, viveiros onde você caminha entre tucanos, araras e flamingos. Encanta todas as idades.",
                foto: {
                    src: "/images/destinos/foz-do-iguacu/aves.jpg",
                    alt: "Tucano no Parque das Aves",
                    credito: credito("PREENCHER", "PREENCHER", "PREENCHER"),
                },
            },
            {
                nome: "Usina de Itaipu",
                texto: "Uma das maiores hidrelétricas do mundo, na fronteira com o Paraguai. A visita panorâmica mostra o tamanho da barragem de perto.",
                foto: {
                    src: "/images/destinos/foz-do-iguacu/itaipu.jpg",
                    alt: "Vertedouro da barragem de Itaipu",
                    credito: credito("PREENCHER", "PREENCHER", "PREENCHER"),
                },
            },
            {
                nome: "Marco das Três Fronteiras",
                texto: "O encontro dos rios Iguaçu e Paraná, com Argentina e Paraguai do outro lado. O lugar certo para o pôr do sol.",
                foto: {
                    src: "/images/destinos/foz-do-iguacu/marco.jpg",
                    alt: "Marco das Três Fronteiras à beira do rio",
                    credito: credito("PREENCHER", "PREENCHER", "PREENCHER"),
                },
            },
        ],
        roteiro: {
            titulo: "Roteiro-exemplo de 3 noites",
            nota: "Cada roteiro da Cantos é montado sob medida. Este é só um ponto de partida.",
            dias: [
                { dia: "Dia 1", texto: "Chegada, check-in e pôr do sol no Marco das Três Fronteiras." },
                { dia: "Dia 2", texto: "Cataratas do lado brasileiro pela manhã, passeio de barco até as quedas e Parque das Aves à tarde." },
                { dia: "Dia 3", texto: "Dia inteiro no lado argentino, com as passarelas da Garganta del Diablo." },
                { dia: "Dia 4", texto: "Usina de Itaipu pela manhã e traslado ao aeroporto." },
            ],
        },
        faq: [
            {
                p: "Quantos dias ficar em Foz do Iguaçu?",
                r: "De 3 a 4 dias. Assim cabem os dois lados das Cataratas, o Parque das Aves e Itaipu sem correria.",
            },
            {
                p: "Qual a melhor época para visitar Foz do Iguaçu?",
                r: "O destino funciona o ano todo. Outono e primavera têm o clima mais agradável. No verão as quedas costumam ter mais água, mas faz muito calor e é alta temporada.",
            },
            {
                p: "Vale a pena conhecer os dois lados das Cataratas?",
                r: "Sim. O lado brasileiro mostra a vista panorâmica, e o argentino leva você para perto das quedas, com passarelas que chegam até a Garganta del Diablo. São experiências complementares.",
            },
            {
                p: "Precisa de passaporte para ir ao lado argentino?",
                r: "Não. Brasileiros entram na Argentina com RG em bom estado ou passaporte válido. Menores sem um dos pais precisam de autorização de viagem. Confirme as regras atuais nos canais oficiais antes de viajar.",
            },
            {
                p: "Foz do Iguaçu é um bom destino para crianças?",
                r: "Um dos melhores do Brasil. As trilhas são curtas e acessíveis, e o Parque das Aves encanta todas as idades.",
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
