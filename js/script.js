document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. DADOS (MOLDES DO ARQUIVO)
    // ==========================================
            const MEMORIAS = [
        {
            id: 1, 
            fase: 'infantil', 
            etapa: 'Pré-escola (2014)', 
            titulo: 'O Primeiro Dia',
            imagem: 'assets/img/13.jpeg', 
            texto: 'O cheirinho de cola bastão e o frio na barriga de ficar sem a mamãe. Lembro de chorar no portão, mas minutos depois já estava rindo com um desenho na mão. Foi ali, com a mochila quase maior que as minhas costas, que aprendi a dividir os primeiros lápis de cor e a fazer as primeiras amizades.'
        },
        {
            id: 2, 
            fase: 'fundamental', 
            etapa: 'Fundamental (2015-2019)', 
            titulo: 'Anos de Descoberta', 
            imagem: 'assets/img/12.jpeg', 
            texto: 'A época das feiras de ciências, dos trabalhos em grupo e das brincadeiras no pátio até o sinal bater. Cada prova que parecia impossível e cada livro novo que eu descobria foram me moldando. Foi nessa fase que o esforço diário começou a virar orgulho, e o recreio virou o melhor momento do dia.'
        },
        {
            id: 3, 
            fase: 'medio', 
            etapa: 'Ensino Médio (2024-2026)', 
            titulo: 'Início do Terceirão', 
            imagem: 'assets/img/11.jpeg', 
            texto: 'A foto que resume o caos perfeito do nosso terceirão. Entre a lousa verde ao fundo, as carteiras arrastadas e alguém deitado no chão no meio da bagunça, a gente percebeu que a pressão dos estudos fica muito mais leve quando estamos todos juntos. Um bando de amigos rindo da própria sorte antes da rotina de simulados começar.'
        },
        {
            id: 4, 
            fase: 'medio', 
            etapa: 'Ensino Médio (Formatura)', 
            titulo: 'O Último Sinal',
            imagem: 'assets/img/8.jpeg', 
            texto: 'O aperto no peito do último dia de aula. A farda deixou de ser obrigação e virou lembrança. Olhar para trás e ver tudo o que passamos juntos — as vitórias, os apuros e as risadas — faz a gente entender que o apito final do Ensino Médio é apenas a linha de fundo para a próxima grande jogada da vida.'
        }
    ];
     const REDACOES = [
        { 
            id: 1, 
            titulo: 'Mudanças climáticas e a crise hídrica no Brasil', 
            tema: 'Quando a seca encontra a enchente: impactos sociais e econômicos das mudanças no ciclo hidrológico', 
            cat: 'Meio Ambiente', 
            texto: "Em 'Morte e Vida Severina', João Cabral de Melo Neto mostra a trajetória de um retirante e seu motivo para deixar o sertão: a seca, implacável. Entretanto tal dor não ficou restrita ao passado. Hoje em dia o clima está cada vez mais maluco, ora há 'secas históricas' ora têm 'chuvas devastadoras'. E essa situação caótica retrata uma realidade preocupante, tanto para as cidades, que não estão preparadas para receber temporais, quanto para o campo, que sofre com a estiagem.\n\nOcorre que, quando chove, as cidades já estão completamente impermeabilizadas por conta do concreto. As ruas acabam virando riachos em questão de minutos, pois o asfalto não permite que a água penetre na terra. Isso lembra muito o filme 'O Dia Depois de Amanhã', porém sem a 'ficção científica'. É a 'realidade'! Além disso, quem mais sofre é justamente quem é mais vulnerável, como, por exemplo, as famílias pobres, que não só perdem seus móveis como também sua dignidade, que são arrastadas pela enxurrada.\n\nNão diferente do que acontece no campo. O agricultor familiar começa o seu dia ao amanhecer e vê sua plantação morrer de sede. Isso reflete diretamente nas feiras, supermercados e na própria alimentação das pessoas. Com a redução na produção, os preços saltam abruptamente. Isso gera aquele temido 'efeito dominó' na economia. Mesmo o forte agronegócio brasileiro vem sofrendo prejuízos financeiros.\n\nPortanto, não podemos ficar alheios aos novos desastres que estão por vir. O governo precisa investir fortemente em rede de drenagem nas cidades e construir reservatórios para captar a água da chuva. No campo, o pequeno produtor precisa de ajuda financeira para não desistir de produzir. E no lar, o que podemos fazer é economizar água. A crise é grande, mas o que nos protege é, principalmente, a união." 
        },
        { 
            id: 2, 
            titulo: 'Canetas emagrecedoras e a pressão estética', 
            tema: 'A estética como imperativo: riscos e implicações do uso indiscriminado de canetas emagrecedoras', 
            cat: 'Sociedade', 
            texto: "Na obra literária 'O Cortiço' de Aluízio Azevedo, o autor denuncia como a obsessão pelo padrão pode levar o ser humano à destruição. Infelizmente esse clássico se transformou num tipo de manual de instrução que se usa nas redes sociais modernas: O 'Corpo Perfeito'. De forma tão obsessiva que jovens estão colocando suas vidas em risco usando canetas emagrecedoras sem nenhum acompanhamento médico.\n\nO espelho, que deveria ser nosso amigo, hoje se tornou o nosso pior inimigo. Vivemos numa era de filtros e fotos editadas em que nada jamais será bom o suficiente. E assim entra em cena a caneta mágica. Uma espécie de atalho que é vendida pelos influencers e que a academia não consegue dar. O problema é que nada disso é divulgado nos bastidores, onde podem ocorrer falência de órgãos, dores abdominais terríveis e efeitos colaterais que danificam o organismo por dentro.\n\nO pior veneno é o que vem da psique. Como no mito Grego de Sísifo, que foi condenado a rolar uma pedra sempre morro acima para sempre, os jovens também rolam eternamente e nunca chegam a satisfação. Na busca pelo 'Corpo Ideal' eles caem numa armadilha que dobra sua mente. A ansiedade toma conta profundamente e a depressão se instala. A saúde é mutilada porque ninguém percebe que o padrão das telas é impossível de alcançar.\n\nPara frear essa epidemia é necessário que a Anvisa seja severa no combate ao comércio ilegal e fiscalize as farmácias. Mas a verdadeira solução é educacional. As escolas precisam se engajar nessa causa e proporcionar espaço para que os psicólogos possam conversar com os alunos sobre autoestima e diversidade corporal. É necessário que a sociedade aprenda a valorizar a saúde e não a ditadura da magreza." 
        },
        { 
            id: 3, 
            titulo: 'Deepfakes e desinformação na era da IA', 
            tema: 'O uso da Inteligência Artificial e as deepfakes: o que é real e o que é fictício na vida online?', 
            cat: 'Tecnologia', 
            texto: "O filme 'Blade Runner' é um clássico do cinema que conta a história do personagem Deckard que tem como missão perseguir androides idênticos aos humanos. No final dos anos 80 aquela era ficção, mas hoje o futuro de Deckard é presente graças à Inteligência Artificial. As deepfakes (vídeos/ áudios) são tão realistas que passam a ser indistinguíveis de verdadeiros. Estamos em um labirinto onde a distinção entre verdadeiro e falso é quase impossível.\n\nA primeira vítima dessa realidade é a confiança. Jean Baudrillard já dizia que 'era de simulacros'. O simulacro substituiu o real. A realidade é que em poucos segundos podemos criar um vídeo em que determinado político diz qualquer idiotice, um áudio em que um parente fala alguma coisa. O cidadão comum, sem conhecimento de tecnologias de ponta, diante das telas se vê indefeso, desamparado, sem saber em quem e em quê confiar.\n\nAs deepfakes não só criam caos político, como também movimentam outra máquina: a do crime. Família, voz de familiares são usadas para extorquir dinheiro de idosos, numa crueldade sem antecedentes. O criminoso faz uso da bondade e do carinho da vítima, levando consigo toda a economia de uma vida. Deixando um rastro de traumas.\n\nÉ preciso reagir. O Congresso deve criar leis duras que criminalizem a deepfake maliciosa como crime grave. As plataformas digitais devem criar selos e algoritmos para identificar as falsificações. E nada é mais poderoso do que a educação. É nas escolas que o jovem precisa aprender o ofício de detetive digital. Sempre questionando a origem e nunca compartilhando o que está em frente." 
        },
        { 
            id: 4, 
            titulo: 'Bets e o endividamento dos jovens', 
            tema: 'Da diversão ao endividamento: efeitos socioeconômicos das bets na vida de jovens brasileiros', 
            cat: 'Sociedade', 
            texto: "Na obra 'O Jogador' de Fiódor Dostoiéfski é retratada a degradação do homem em função do seu vício em apostas. Mais de um século depois, essa tragédia ganhou novas características no mundo contemporâneo. As plataformas de apostas online trouxeram consigo um novo contexto onde não só a tragédia se reinventou mas também trouxe consigo um alto retorno financeiro. Embora disfarçadas como entretenimento, elas estão esvaziando e prejudicando a sanidade mental de milhares de jovens no Brasil.\n\nEm primeiro lugar, essas empresas possuem um excelente trabalho de marketing. Em parceria com influencers muito conhecidos, que possuem carros de luxo e determinado estilo de vida, elas trazem a ilusão de que é possível ganhar dinheiro facilmente com um simples clique. O jovem que anseia pela ascensão social investe seu dinheiro na plataforma sem se dar conta de que o mecanismo do jogo está programado para sempre favorecer a empresa que o explora.\n\nQuando o jovem vai ficando sem dinheiro, a realidade bate na porta. O que começou como um simples hobby torna-se um círculo vicioso de endividamento. Sem suporte de rede, muitos recorrem aos agiotas colocando-se à mercê de suas ameaças e vivendo num estado permanente de stress. A depressão se instala e o que deveria ser um espaço seguro, o lar, torna-se um espaço de conflito.\n\nPortanto, medidas precisam ser tomadas urgentemente para que esse cenário seja revertido. É inaceitável que o governo federal permita que propagandas dessas empresas sejam exibidas em canais destinados ao público jovem. Além disso, o que estava previsto no papel precisa sair dele. A educação financeira precisa ser implementada nas escolas como matéria obrigatória. Só assim será possível reverter esse quadro. Os alunos precisam aprender a importância do trabalho e do perigo do endividamento." 
        },
        { 
            id: 5, 
            titulo: 'Inclusão digital no Brasil', 
            tema: 'Inclusão digital no Brasil: caminhos e desafios na sociedade contemporânea', 
            cat: 'Tecnologia', 
            texto: "No livro 'A Máquina de Fazer Espanhóis', de Valter Hugo Mãe, o envelhecimento é retratado pela solidão que acompanha os idosos em seu asilo. Atualmente, no Brasil, os idosos não são os únicos a sofrerem solidão. Uma nova forma de solidão está sendo criada a exclusão digital.\n\nA falta de estrutura é o primeiro obstáculo e o mais fácil de ser observado. Embora exista o Marco Civil da Internet (Lei 12.965/2014), que garante o direito ao acesso à internet, esta lei não chega aos becos das periferias e às regiões rurais. Assim, sem acesso à fibra ótica ou a um bom sinal de celular, o cidadão torna-se alheio ao mundo, pois não consegue realizar um curso a distância ou se candidatar a uma vaga de emprego, visto que tudo hoje é feito na internet.\n\nO segundo obstáculo é o conhecimento. O educador Marshall McLuhan dizia que 'o meio é a mensagem'. Hoje, aqueles que não dominam este meio não são compreendidos. Ter um celular nas mãos não é suficiente; o que importa é saber utilizá-lo com segurança. Muitas pessoas não sabem reconhecer um golpe, realizar uma pesquisa segura ou acessar um site governamental. A tecnologia, sem o conhecimento digital, torna-se perigosa e alienante.\n\nPara que isso mude, o Estado tem que fornecer, gratuitamente, acesso rápido à internet às comunidades carentes. As escolas também devem incluir no currículo a 'cidadania digital'. A internet não pode ser um muro que divide quem tem daquele que não tem; ela deve ser uma ponte para um futuro melhor." 
        },
        { 
            id: 6, 
            titulo: 'Cultura fitness e transtornos corporais', 
            tema: 'Cultura fitness: bem-estar ou busca por estética inatingível?', 
            cat: 'Saúde', 
            texto: "No filme Gattaca, é exposto um futuro em que o homem se modifica geneticamente para se tornar 'perfeito'. Hoje, esse ideal de perfeição deixou de ser geneticamente construído e deslocou-se para o espelho. A cultura fitness transformou-se numa ditadura nas redes sociais e o que era suposto ser uma luta pelo corpo saudável virou uma verdadeira obsessão que está adoecendo a mente e o corpo de milhares de jovens.\n\nEntre a saúde e a doença existe uma linha muito tênue. Inicialmente, o indivíduo resolve frequentar a academia para ficar mais saudável. Logo, o local que seria de liberdade passa a ser uma rotina de presídio. Enquanto no conto 'O Espelho' de Machado de Assis o personagem se pergunta quem ele realmente é, atualmente, o valor do jovem é determinado apenas pela definição muscular. O cansaço extenuante e seus limites são ignorados na ânsia por um shape que é vendido nas redes sociais.\n\nEssa pressão incessante leva à destruição irreparável. Comparam-se com modelos e atletas que muitas vezes são editados ou usam anabolizantes. O resultado é uma profunda frustração. Os consultórios de médicos estão cada vez mais cheios de jovens com lesões, problemas renais, distúrbios alimentares graves como a vigorexia. Tudo isso em virtude de um esforço para se enquadrar num padrão que é impossível de alcançar.\n\nPor fim, é urgente que se repense o conceito de saúde. As escolas devem recuperar a alegria do esporte. E isto é feito não para criar um corpo esteticamente belo, mas para trabalhar em equipe e garantir o bem-estar. Os profissionais de saúde devem chamar atenção para os perigos dos distúrbios alimentares. A verdadeira beleza é a constância, o equilíbrio e principalmente o amor próprio." 
        },
        { 
            id: 7, 
            titulo: 'Direitos indígenas e demarcação de terras', 
            tema: 'Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil', 
            cat: 'Sociedade', 
            texto: "“A Terra é nossa única morada; ela é nossa única casa e vocês [brancos] estão destruindo a casa.” Essa é a frase da obra A Queda do Céu, de autoria de Davi Kopenawa, xamã e líder indígena. Porém, além de ser um problema histórico que o Brasil precisa enfrentar, a questão da demarcação de terras vai muito além de papel.\n\nO que impulsiona esse ciclo de destruição é a avidez do mercado. A filósofa Adela Cortina cunhou o termo “aporofobia” para falar do medo e repúdio que a sociedade tem do mais pobre dentre nós. E no nosso caso, os indígenas são das principais vítimas. Assim, as invasões de garimpeiros e do agronegócio vêm destruindo suas terras, mata e rios em prol do lucro fácil. A terra indígena deixa de ser um direito para ser um obstáculo no caminho do “progresso”.\n\nE assim como a violência do campo, também há falta de respeito nas políticas públicas. O sistema de saúde e educação para essas comunidades é precário e sem respeito às suas tradições. Ignoram sua medicina ancestral e suas línguas, dificultando ainda mais a inclusão deles. É uma sociedade que tenta apagar a cultura dos primeiros habitantes.\n\nPortanto, o Estado precisa ser enérgico na garantia da cidadania dos indígenas. O poder público precisa investir mais nos órgãos responsáveis pela fiscalização, como a FUNAI, para que possam punir os invasores. Ainda, é preciso, também, que a lei 11.645/08, que determina o ensino da cultura indígena nas escolas, deixe de ser letra morta. O Brasil só será um país justo quando a história dos primeiros habitantes for respeitada e valorizada." 
        },
        { 
            id: 8, 
            titulo: 'Algoritmos, bolhas e autonomia individual', 
            tema: 'Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea', 
            cat: 'Tecnologia', 
            texto: "Em A Sociedade do Espetáculo, Guy Debord já denunciava que todo o direto se transformara em representação. Hoje, os algoritmos das redes sociais são os verdadeiros diretores do espetáculo e criam bolhas nas quais estamos presos e que limitam a nossa percepção de mundo, reduzindo-nos a meros consumidores.\n\nO primeiro problema é o limitamento da visão. Como afirmou Eli Pariser, ativista, a Câmera de Eco é o nome que ele cunhou para designar o fato de que os algoritmos nos mostram, basicamente, aquilo com o qual concordamos. O perigo é que acabamos nos isolando em guetos virtuais. Assim, a sociedade se polariza, criando a sensação de que todos pensam igual a mim. O debate democrático acaba.\n\nO segundo problema é a forte indução ao consumo. Como diz o termo Capitalismo de Vigilância, cunhado pela economista Shoshana Zuboff, nossos dados são ouro. Influencers digitais vendem vidas perfeitas, viagens, roupas etc. Fomentam a insatisfação contínua. Compramos o que não precisamos, simplesmente para sermos iguais às imagens que estão nas telas. O ter passa a ser mais importante do que o ser.\n\nA saída desta bolha passa pela escola. A educação midiática precisa ensinar o aluno a questionar os algoritmos e a consumir criticamente. Também é necessário que o poder público exija transparência das plataformas quanto aos critérios de filtragem de conteúdo. A tecnologia não pode ser uma corda invisível, mas sim uma aliada da liberdade." 
        },
        { 
            id: 9, 
            titulo: 'Preservação do patrimônio histórico', 
            tema: 'Os desafios para a preservação dos monumentos históricos no Brasil contemporâneo', 
            cat: 'Cultura', 
            texto: "Em 'O Nome da Rosa', Umberto Eco narra um incêndio intencional que destrói toda uma biblioteca com o objetivo de destruir conhecimento tido como perigoso. No Brasil, a história vem sendo destruída aos poucos, pelo descaso e falta de investimentos. Monumentos históricos são abandonados e o que resta de nossa memória é devorado pela especulação imobiliária.\n\nO mais simbólico desse cenário trágico é o fato de ter sido o Museu Nacional do Rio de Janeiro incendiado. Séculos de coleta de um acervo foram reduzidos à cinzas pela falta de manutenção e investimento do poder público. Igrejas, prédios antigos e centros culturais estão abandonados e são corroídos pelo tempo e violência das ruas.\n\nAlém do descaso oficial, outro problema presente é a falta de uma educação patrimonial. Quando a população não sabe a história de um velho casarão, não lhe dá valor e até mesmo o depreda. Além disso, o crescimento da construção civil pressiona para a demolição de bens históricos, em nome de um progresso que limpa a identidade local. As cidades vão perdendo sua alma.\n\nPara que isso mude é necessário que haja parceria entre o governo e a iniciativa privada na recuperação desses edifícios e transformação em centros culturais dinâmicos. Além disso, as escolas devem levar seus alunos a conhecer museus e lugares históricos. É importante que a história não seja esquecida, mas sim experimentada e respeitada por todos." 
        },
        { 
            id: 10, 
            titulo: 'Exploração espacial e desigualdade', 
            tema: 'Exploração espacial no século XXI: desafios para a conciliação entre avanço científico e responsabilidade social', 
            cat: 'Ciência', 
            texto: "No filme 'Interestelar' é mostrado como a humanidade precisa de um novo planeta para viver, pois o planeta Terra está fadado a tornar-se um lugar inabitável. Fora das telas, a exploração do espaço não é muito diferente do que é mostrado no longa. Hoje, a exploração do espaço mais parece um jogo de bilionários que gastam fortunas para ir 'passear' nas estrelas, quando milhões de pessoas precisam de um simples prato de comida.\n\nA questão é que o mundo inverteu seus valores. Segundo Hans Jonas, no seu 'Princípio Responsabilidade', a tecnologia existe para defender a vida humana. Sendo assim, gastar bilhões para ir ao espaço 'de passeata', quando metade do planeta não tem sequer saneamento básico, é algo imoral. A ciência, que deveria ser usada para curar as doenças, é usada para atender a vaidade e o ego de alguns poucos.\n\nAlém disso, a exploração desordenada do espaço também acarreta outro problema de contaminação ambiental. Satélites inativos e detritos prejudicam as redes de comunicação mundo afora. O que era suposto ser um espaço de cooperação entre as nações transformou-se em uma arena de disputa comercial e de interesses particulares, pois não há um governo global forte.\n\nPortanto, para que a ciência seja justa, a ONU precisa criar tratados rigorosos que regularizem a exploração do espaço. Alguns lucros obtidos com a mineração de asteroides devem ser direcionados para fundos de combate à pobreza terrestre. O espaço é fascinante, mas o que precisamos salvar é o nosso planeta." 
        },
        { 
            id: 11, 
            titulo: 'Conservação da fauna brasileira', 
            tema: 'Espécies em extinção e equilíbrio ecológico: desafios para a conservação da fauna brasileira', 
            cat: 'Meio Ambiente', 
            texto: "Em 'O Chamado da Floresta', Jack London mostra o processo de reavivamento dos instintos selvagens do cão Buck, que descobre a beleza da natureza. Porém, na realidade brasileira, a natureza é quem está lutando pela sua própria sobrevivência frente ao avanço do homem. O desmatamento, as queimadas e o tráfico de animais silvestres têm levado à destruição da fauna do país e consequentemente ao desequilíbrio de todo o ecossistema.\n\nPrimeiramente, o principal vilão desse cenário é a destruição dos habitats dos animais. As invasões das florestas pelas cidades e áreas de plantação tiram os animais de seu lar e de sua fonte de alimento. E a Teoria do Caos mostra que a perda de apenas uma espécie pode desencadear um efeito dominó em toda a cadeia alimentar. E a produção de alimentos não fica de fora dessa reação, pois ela depende dos polinizadores.\n\nAlém disso, o tráfico de animais é outro problema que fere abertamente a fauna. Milhões de aves e macacos são capturados e vendidos nas feiras ilegais. Muitos não suportam a viagem até o mercado negro e aqueles que chegam vivos são mantidos em miseráveis cativeiros. A falta de fiscalização e a impunidade permitem que esse negocio criminoso continue rendendo lucro.\n\nPortanto, o Estado deve utilizar a tecnologia a seu favor. Os drones e satélites podem ajudar a monitorar essas regiões remotas. Além de adotar penas mais rígidas contra os criminosos. A educação ambiental e incentivo ao ecoturismo são fundamentais para mostrar às comunidades locais que a natureza preservada é muito mais valiosa do que a exploração ilegal." 
        },
        { 
            id: 12, 
            titulo: 'Migração e acolhimento de refugiados', 
            tema: 'Migração e acolhimento: desafios da convivência em contextos globais', 
            cat: 'Sociedade', 
            texto: "O Diário de Anne Frank narra a história de uma adolescente que viveu nos esgotos evitando ser descoberta, pois poderia ser presa só por ser. Atualmente milhões de refugiados passam pelo mesmo sentimento de angústia, fugindo de guerras e perseguições. Um dos maiores desafios da sociedade atual é o acolhimento de refugiados que chegam à nação. É preciso haver equilíbrio entre a empatia e o preconceito.\n\nPrimeiro, a xenofobia é o grande desafio. Vários imigrantes que chegam à nação em busca da paz são recebidos com ódio. Eles não falam a mesma língua, não conseguem reconhecer seus diplomas e acabam sendo empregados em trabalhos informais e precários. São vistos como uma ameaça ao seu emprego, mesmo que venham com uma enorme carga de riqueza cultural e mão de obra.\n\nAlém disso, a falta de políticas públicas agrava a situação desses refugiados. Muitos chegam com traumas profundos causados pela guerra e não são acompanhados psicologicamente. Os centros de abrigo estão super lotados e as famílias têm condições sub-humanas. O Estado muitas vezes não consegue garantir a mínima dignidade dos que chegam.\n\nPortanto, o governo deve facilitar a concessão de documentos e fazer programas de qualificação profissional, para que haja realmente integração. A mídia e as escolas devem se responsabilizar também, combatendo a desinformação e mostrando que a diversidade é uma riqueza. O único caminho para que haja uma verdadeira sociedade civilizada é o acolhimento humanitário." 
        },
        { 
            id: 13, 
            titulo: 'Eventos climáticos extremos', 
            tema: 'El Niño e mudanças climáticas: desafios para a preparação da sociedade diante de eventos extremos', 
            cat: 'Meio Ambiente', 
            texto: "Na película 'O Dia Depois de Amanhã' vemos a humanidade em luta contra o advento súbito de uma nova era glacial. O que é ficção hoje não estará longe de ser um desastre. Com o El Niño e as mudanças climáticas, o Brasil tem enfrentado, de um lado, secas históricas, e de outro, enchentes devastadoras. A cidade não está preparada para a ira da natureza.\n\nO grande problema é falta de planejamento nas cidades. Sem terra para o escoamento da água, sem sistema de drenagem, toda vez que chove temos uma tragédia. E a Defesa Civil muitas vezes fica registrando quantas pessoas morreram, quantos ficaram desabrigados, sem fazer nada para evitar que isso aconteça.\n\nEssa crise climática é também uma questão de justiça social. Populações mais pobres, levadas pela especulação imobiliária, acabam sendo levadas para áreas de risco, como encostas e margens de rios. Quando chove, tudo o que eles têm vai embora. A mudança climática impacta mais aqueles que já estão na condição de vulnerabilidade.\n\nA melhor maneira de se enfrentar a adversidade é prevenção. É preciso que o poder público invista na criação de cidades resilientes, com boa infraestrutura e sistema de alerta eficiente. Também deve criar um fundo nacional de adaptação climática, que venha ajudar as vítimas de desastres. A natureza não pode ser controlada, mas podemos nos preparar para enfrentá-la." 
        },
        { 
            id: 14, 
            titulo: 'Caminhos para combater a intolerância religiosa', 
            tema: 'Respeito no Brasil', 
            cat: 'Sociedade', 
            texto: "No livro “O Auto da Compadecida”, de Ariano Suassuna, é retratado um Brasil de contradições, marcado pelo sincretismo das diferentes crenças e pela busca pelo perdão. Na verdade, a formação da cultura brasileira é fruto do sincretismo, porém a intolerância religiosa ainda é uma realidade cruel. Além disso, o preconceito contra a religião de matriz africana, como o Candomblé e a Umbanda, ataca a nossa própria história.\n\nA origem desse problema está no passado brasileiro, quando as religiões dos negros, principalmente Candomblé e Umbanda, foram marginalizadas e demonizadas, devido à escravidão. Consequentemente, elas são as maiores vítimas, pois o desrespeito pela religião do próximo é uma forma de tentar eliminar a identidade de um povo.\n\nAlém disso, a impunidade é também cúmplice dos agressores. A falta de denúncia da sociedade e a leniência do sistema penal fazem com que a violência contra a intolerância religiosa seja considerada uma questão menor. A negligência do Estado deixa essas comunidades abandonadas. É necessário que a fé de cada indivíduo seja considerada um direito inalienável.\n\nPortanto, medidas são necessárias para combater esse mal. O Ministério Público deve criar delegacias especializadas no crime de ódio. Por outro lado, a escola também é um espaço importante para combater a intolerância religiosa, educando sobre as diferentes religiões desde a infância. Dessa maneira, o respeito será construído da melhor forma possível. Somente quando a fé de todas as pessoas não for ameaçada, a liberdade de culto será um direito pleno." 
        },
        { 
            id: 15, 
            titulo: 'Agro forte, futuro sustentável', 
            tema: 'Produção e natureza', 
            cat: 'Agro', 
            texto: "Na obra 'A Revolução dos Bichos', de George Orwell, os animais se unem para lutar por um mundo melhor, mas acabam sendo explorados por aqueles que deveriam defendê-los. Da mesma forma, a natureza é explorada até a exaustão, pois ela é a responsável pelo nosso alimento. Hoje, o grande desafio é manter o Brasil como potência agrícola sem destruir o meio ambiente.\n\nOs agrotóxicos, usados em demasia, e o desmatamento são os grandes vilões desta destruição. O solo, assim como os rios, estão contaminados. A saúde das pessoas também sofre consequências desta ganância. O que os produtores não percebem é que, destruindo a natureza, eles causam um desequilíbrio ambiental prejudicial à própria produtividade agrícola. A falta de chuva prejudica a lavoura.\n\nA ciência já mostrou que é possível desenvolver a agricultura de forma sustentável. Com a Agroecologia e a Integração Lavoura-Pecuária-Floresta (ILPF), é possível recuperar o solo degradado e aumentar a produtividade. O agricultor precisa entender que a floresta nativa não é um empecilho, mas sim uma aliada que garante a disponibilidade de água e de chuvas.\n\nPara que este futuro se torne realidade, o governo deve incentivar com créditos mais baratos e isenção de impostos quem aderir às práticas verdes. A assistência técnica no campo deve ajudar com informações e tecnologias ao produtor. Agro forte é aquele que respeita a terra e garante a sobrevivência das futuras gerações." 
        },
        { 
            id: 16, 
            titulo: 'O respeito às diferenças', 
            tema: 'Superação de conflitos', 
            cat: 'Sociedade', 
            texto: "Os mutantes, personagens de quadrinhos dos X-men, são perseguidos e temidos apenas por serem diferentes. Essa história foi criada para abordar as minorias, mas, na verdade, ela retrata o mundo em que vivemos. Um mundo cheio de diversidades, que só gera conflitos devido ao etnocentrismo e ao medo do outro. Dessa forma, o respeito à diferença já não é mais uma virtude, mas um requisito para a sobrevivência da sociedade.\n\nO preconceito advém da ignorância. A crença numa ideia de que determinada cultura ou crença é melhor do que outras leva à exclusão social de negros, indígenas, pessoas LGBTQI+, mulheres etc. Esse pensamento restrito gera violência (física e simbólica), impedindo o progresso da sociedade. Afinal, todos são diferentes, mas todos têm os mesmos direitos.\n\nO principal instrumento para superar esse problema é a empatia. O conceito africano de Ubuntu diz que 'eu sou porque nós somos'. Isso significa que eu só sou humano porque o meu próximo também o é. Para isso, é necessário que haja escuta ativa, diálogo e não julgamento. Quando se escuta a história do outro, que é diferente, vê-se que ele sonha e tem medos iguais aos seus. Assim, o que é diferente não é mais um obstáculo, mas sim a maior riqueza de nossa nação.\n\nA escola e o Estado têm um papel fundamental nesse processo. A educação precisa se tornar, desde a infância, um local onde a diversidade seja celebrada. E o Estado precisa ser severo nos crimes de ódio. Dessa forma, podemos construir uma sociedade onde a diferença não seja mais um problema, mas a grande riqueza." 
        },
        { 
            id: 17, 
            titulo: 'Obsolescência programada e lixo eletrônico', 
            tema: 'Sustentabilidade', 
            cat: 'Tecnologia', 
            texto: "No livro 'Neuromancer', de William Gibson, é apresentado um cenário futurístico repleto de tecnologia, porém com uma grande quantidade de lixo cibernético. Hoje esse cenário não está tão distante da realidade. Devido à obsolescência programada que consiste na diminuição proposital da vida útil dos produtos feita pela indústria o mundo vira uma enorme lixeira eletrônica e a natureza vem sendo poluída.\n\nEsse tipo de sistema é baseado no consumismo desenfreado. Assim que uma nova versão de celular é lançada, milhões do antigo (ainda em bom estado) vão para o lixo. Como mostra o documentário 'Comprar, Tirar, Comprar', as empresas trabalham para que o produto dure o mínimo possível. Além disso, esses celulares possuem em sua composição elevados teores de metais pesados, como mercúrio e chumbo, muito tóxicos.\n\nAlém da poluição, celulares e computadores possuem ouro, prata e cobre, que deveriam ser reciclados. Por falta de informação e poucos pontos de coleta, eles vão parar nos lixões comuns prejudicando a natureza e a economia.\n\nO governo deve exigir que a indústria faça a chamada logística reversa - coleta do que é velho para reciclagem. As escolas devem trabalhar a educação do consumo consciente. O nosso futuro depende das nossas escolhas." 
        }
    ];
    // ==========================================
    // 2. RENDERIZAR MEMÓRIAS (ÁLBUM DE RECORTES)
    // ==========================================
    const gridMemorias = document.getElementById('grid-memorias');
    const botoesFiltro = document.querySelectorAll('.btn-filtro');

    function renderizarMemorias(fase = 'todas') {
        gridMemorias.innerHTML = '';
        const lista = fase === 'todas' ? MEMORIAS : MEMORIAS.filter(m => m.fase === fase);
        
        lista.forEach(m => {
            const card = document.createElement('article');
            card.className = 'card-memoria';
            card.innerHTML = `
                <div class="memoria-foto">
                    <img src="${m.imagem}" alt="${m.titulo}" onerror="this.src='https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop'">
                </div>
                <span class="memoria-ano">${m.id < 10 ? '0'+m.id : m.id}</span>
                <span class="memoria-etapa">${m.etapa}</span>
                <h3 class="memoria-titulo">${m.titulo}</h3>
                <p class="memoria-texto">${m.texto}</p>
            `;
            gridMemorias.appendChild(card);
        });
    }

    botoesFiltro.forEach(btn => {
        btn.addEventListener('click', (e) => {
            botoesFiltro.forEach(b => b.classList.remove('ativa'));
            e.target.classList.add('ativa');
            renderizarMemorias(e.target.dataset.fase);
        });
    });

    renderizarMemorias(); // Init

    // ==========================================
    // 3. RENDERIZAR REDAÇÕES (TICKETS)
    // ==========================================
    const gridRedacoes = document.getElementById('grid-redacoes');
    const buscaInput = document.getElementById('busca-input');
    const contadorRedacoes = document.getElementById('contador-redacoes');

    function renderizarRedacoes(termoBusca = '') {
        gridRedacoes.innerHTML = '';
        const termo = termoBusca.toLowerCase();
        
        const filtradas = REDACOES.filter(r => 
            r.titulo.toLowerCase().includes(termo) || 
            r.tema.toLowerCase().includes(termo)
        );

        contadorRedacoes.textContent = `${filtradas.length} DOCUMENTOS`;

        if (filtradas.length === 0) {
            gridRedacoes.innerHTML = '<p style="font-family: var(--font-sub); font-size: 1.2rem;">NENHUM DOCUMENTO ENCONTRADO.</p>';
            return;
        }

        filtradas.forEach(r => {
            const card = document.createElement('article');
            card.className = 'lauda-card';
            card.onclick = () => abrirModal(r);
            
            let tituloHTML = r.titulo;
            if (termo) {
                const regex = new RegExp(`(${termo})`, 'gi');
                tituloHTML = r.titulo.replace(regex, '<mark>$1</mark>');
            }

            card.innerHTML = `
                <div class="lauda-topo">
                    <span>Nº ${String(r.id).padStart(2, '0')}</span>
                    <span>${r.cat}</span>
                </div>
                <h3 class="lauda-titulo">${tituloHTML}</h3>
                <p class="lauda-tema">${r.tema}</p>
            `;
            gridRedacoes.appendChild(card);
        });
    }

    let timeout;
    buscaInput.addEventListener('input', (e) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => renderizarRedacoes(e.target.value), 300);
    });

    renderizarRedacoes(); // Init

    // ==========================================
    // 4. MODAL DOCUMENTO E LEITOR DE ÁUDIO
    // ==========================================
    const modal = document.getElementById('modal');
    const modalFechar = document.getElementById('modal-fechar');
    const btnAudio = document.getElementById('btn-audio');
    const synth = window.speechSynthesis;
    let utterance = null;

    function abrirModal(r) {
        document.getElementById('modal-num').textContent = String(r.id).padStart(2, '0');
        document.getElementById('modal-cat').textContent = r.cat;
        document.getElementById('modal-titulo').textContent = r.titulo;
        document.getElementById('modal-tema').textContent = r.tema;
        document.getElementById('modal-texto').textContent = r.texto || 'Texto não preenchido.';
        
        modal.classList.add('ativo');
        document.body.style.overflow = 'hidden';

        if(synth) {
            // Remove emojis ou caracteres estranhos para a leitura ficar limpa
            const textoLimpo = (r.texto || r.titulo).replace(/[^\w\sÀ-ÿ.,!?-]/gi, '');
            utterance = new SpeechSynthesisUtterance(textoLimpo);
            utterance.lang = 'pt-BR';
            utterance.rate = 1.1;
        }
    }

    function fecharModal() {
        modal.classList.remove('ativo');
        document.body.style.overflow = '';
        if(synth) {
            synth.cancel(); 
            btnAudio.classList.remove('lendo');
            btnAudio.innerHTML = '▶ OUVIR LAUDA';
        }
    }

    modalFechar.addEventListener('click', fecharModal);
    modal.querySelector('.modal-fundo').addEventListener('click', fecharModal);
    
    btnAudio.addEventListener('click', () => {
        if(!synth) return alert('Seu navegador não suporta leitura em áudio.');
        
        if(synth.speaking) {
            synth.cancel();
            btnAudio.classList.remove('lendo');
            btnAudio.innerHTML = '▶ OUVIR LAUDA';
        } else {
            synth.speak(utterance);
            btnAudio.classList.add('lendo');
            btnAudio.innerHTML = '⏹ PARAR ÁUDIO';
            
            utterance.onend = () => {
                btnAudio.classList.remove('lendo');
                btnAudio.innerHTML = '▶ OUVIR LAUDA';
            };
        }
    });

    // ==========================================
    // 5. TEMA (PAPEL CLARO / PAPEL ESCURO)
    // ==========================================
    const temaBtn = document.getElementById('tema-btn');
    const html = document.documentElement;
    
    temaBtn.addEventListener('click', () => {
        const novoTema = html.getAttribute('data-theme') === 'claro' ? 'escuro' : 'claro';
        html.setAttribute('data-theme', novoTema);
        localStorage.setItem('tema-luiz', novoTema);
    });
});