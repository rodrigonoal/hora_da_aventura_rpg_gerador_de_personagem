const proezas = [
    {
        "nome": "Armas improvisadas",
        "descricao": "Você é capaz de lutar com qualquer coisa que esteja a seu alcance: uma cadeira, um bolo e até mesmo uma meia é uma arma terrível em suas mãos. Sempre que puder usar os objetos que rodeiam você ou tirar coisas de sua sacola ou mochila para se defender, pode usar Jeitinho no lugar de Confusão para a ação de atacar.",
        "atributo": "Jeitinho"
    },
    {
        "nome": "Arma incorporada",
        "descricao": "A personagem tem uma arma incorporada em seu corpo ou em sua armadura: pode ser uma espada retrátil em seu braço, um rifle laser no ombro ou qualquer coisa que vier a sua mente. Para usar sua arma incorporada, a personagem usa Jeitinho no lugar de Confusão, mas com as modificações habituais da arma.",
        "atributo": "Jeitinho",
        "especifica": true
    },
    {
        "nome": "Bem equipado",
        "descricao": "Você está sempre preparado para qualquer situação. Adicione +1 a qualquer teste da ação de equipar-se.",
        "atributo": "Jeitinho"
    },
    {
        "nome": "Blindado",
        "descricao": "Você tem partes metálicas que protegem seus pontos fracos, talvez porque você é um robô blindado ou um ciborgue, ou porque você sempre usa uma armadura mecanizada. Reduz em um nível de saúde todo o dano sofrido, exceto dano mágico.",
        "atributo": "Jeitinho"
    },
    {
        "nome": "Boas ideias",
        "descricao": "Você tem ideias muito boas para invenções novas. Você recebe +2 nas ações de inventar.",
        "atributo": "Jeitinho"
    },
    {
        "nome": "Desmontar",
        "descricao": "Você é bom em reduzir os objetos a seus componentes: sabe que parafuso tirar ou qual peça tem que empurrar para desmontar objetos de todo tipo. Você pode usar Jeitinho no lugar de Músculos para ações de soltar-se, bloquear e quebrar.",
        "atributo": "Jeitinho",
        "poderosa": true
    },
    {
        "nome": "Disco rígido",
        "descricao": "Seu cérebro é mecânico ou eletrônico e é capaz de gravar a informação que você recebe para consultá-la depois. Você pode usar Jeitinho no lugar de Cachola em todas as ações de lembrar.",
        "atributo": "Jeitinho"
    },
    {
        "nome": "Dispositivo de camuflagem",
        "descricao": "Você tem um mecanismo de ocultação que muda a cor para confundir você com o ambiente, o que cria um campo de distorção para impedir que os demais o vejam ou alguma outra coisa bacana de ficção científica. Você pode usar Jeitinho no lugar de Falastrice em ações de esconder.",
        "atributo": "Jeitinho"
    },
    {
        "nome": "Equipamento mágico",
        "descricao": "Quando você faz uma ação de equipar-se e tem sucessos magníficos, pode usá-los para que o objeto conseguido tenha proezas mágicas. Você precisa de um para que o objeto tenha uma proeza mágica e dois para que tenha uma proeza mágica poderosa. Você pode usar os sucessos magníficos como se usam habitualmente na ação de equipar-se ou combiná-los com o anterior como preferir.",
        "atributo": "Jeitinho"
    },
    {
        "nome": "Gambiarra",
        "descricao": "Você é um mestre no remendo de coisas quebradas. Em qualquer ação de reparar, você tem sucesso com 3 ou mais no lugar de com o 4 ou mais habitual.",
        "atributo": "Jeitinho"
    },
    {
        "nome": "Gênio Inventor",
        "atributo": "Jeitinho",
        "descricao": "Você é incrível inventando um certo tipo de coisa. Pode ser que seja um gênio na fabricação de armas, fazendo armaduras ou projetando e construindo foguetes espaciais. Escolha um tipo de treco e, quando faz uma ação de inventar para eles, recebe um sucesso automático na ação correspondente.",
        "especifica": true
    },
    {
        "nome": "Inventor rápido",
        "atributo": "Jeitinho",
        "descricao": "Você é muito rápido inventando coisas e máquinas para usos muito variados. Gastando um ponto de Herói, você pode fazer uma ação de inventar em um turno no lugar de requerer uma cena. Você pode converter essa proeza em poderosa se eliminar o gasto de um ponto de Herói."
    },
    {
        "nome": "Improvisar",
        "descricao": "Você ama fazer experiências caseiras e improvisar no decorrer dos acontecimentos, sem ir muito fundo no conhecimento dos fundamentos científicos, mas comprovando por tentativa e erro quais coisas funcionam e quais não. Você pode usar Jeitinho no lugar de Cachola em ações de ciência, estudar e saber.",
        "atributo": "Jeitinho",
        "poderosa": true
    },
    {
        "nome": "Olhos de robô",
        "descricao": "Você tem olhos de robô ou uns óculos bacanas desses de ficção científica. Você pode usar Jeitinho no lugar de Esperteza nas ações de buscar e perceber e nas reações à ação de ocultar.",
        "atributo": "Jeitinho",
        "poderosa": true
    },
    {
        "nome": "Partes mecânicas",
        "descricao": "Você é parte robô, ou usa uma armadura parcial com partes automatizadas: pode ser que suas pernas sejam mecânicas ou que use uma placa peitoral com braços movidos por roldanas ou válvulas a vapor. Você pode usar Jeitinho no lugar de Músculos em três ações relacionadas com as suas partes mecânicas. Por exemplo, se são as pernas, as ações poderiam ser cair, correr e saltar; enquanto que, se são os braços, poderiam ser prender, empurrar e levantar.",
        "atributo": "Jeitinho",
        "poderosa": true,
        "especifica": true
    },
    {
        "atributo": "Jeitinho",
        "nome": "Provedor",
        "descricao": "Você sempre tem o que os demais precisam. Quando faz uma ação de equipar-se para conseguir um objeto que não sirva para nada para você, mas que seja útil para outra personagem, você recebe um sucesso automático."
    },
    {
        "atributo": "Jeitinho",
        "nome": "Reatores",
        "descricao": "A personagem tem incorporado a si motores a jato, discos magnéticos ou outro mecanismo que permitem que você voe. Ao voar, você pode se mover duas áreas no lugar de uma usando um movimento e ignorar qualquer obstáculo que normalmente precisaria de uma ação de cair, saltar ou escalar."
    },
    {
        "atributo": "Jeitinho",
        "nome": "Remendar",
        "descricao": "Você é rapidíssimo fazendo com que os aparatos estragados funcionem de novo. Você pode fazer a ação de reparar em um turno no lugar de uma cena, mas se o fizer, a coisa que você reparar só funcionará durante um turno antes de voltar a se estragar. Com sucessos magníficos, você pode aumentar o tempo de funcionamento antes que seja necessário voltar a repará-la: um: três turnos, dois: uma cena, três: o resto da história."
    },
    {
        "atributo": "Confusão",
        "nome": "Ameaçador",
        "descricao": "Sua personagem tem um semblante violento que dá muito medo. Você pode usar Confusão no lugar de Teimosia nas ações de assustar."
    },
    {
        "atributo": "Confusão",
        "nome": "Armado",
        "descricao": "Você sempre vai bem preparado para o combate. Quando você faz uma ação de equipar-se para tirar armas ou outros objetos úteis para a luta de sua mochila, pode usar Confusão no lugar de Jeitinho."
    },
    {
        "atributo": "Confusão",
        "nome": "Contra-ataque",
        "descricao": "Quando você reage diante de uma ação de ataque corpo a corpo e superá-la com ao menos um sucesso magnífico, pode fazer imediatamente uma ação de ataque gratuito contra a mesma personagem que atacou você. Na dita ação, você lança tantos dados quanto sucessos magníficos tiver obtido em sua defesa. Você pode converter essa proeza em poderosa se o contra-ataque for feito com a sua pontuação completa de Confusão."
    },
    {
        "atributo": "Confusão",
        "nome": "Dança de guerra",
        "descricao": "Quando você se prepara para um combate, pode fazer uma dança guerreira para afastar de si todos os testes ruins. Você pode usar Confusão no lugar de Maneirice em ações de dançar se você realizá-la para se preparar para uma luta."
    },
    {
        "atributo": "Confusão",
        "nome": "Estratégia",
        "descricao": "A personagem tem um talento especial para dirigir os outros em combate. Você pode fazer ações de animar com Confusão no lugar de Maneirice quando estiverem em uma situação de combate. Se tiver sucesso, a personagem em estado inspirado recebe +1 adicional."
    },
    {
        "atributo": "Confusão",
        "nome": "Forças da fraqueza",
        "descricao": "Você é capaz de arranjar forças para lutar nos momentos mais desesperadores. Você recebe +1 em Confusão quando só tiver um nível de saúde sem riscar e +2 quando todos os seus níveis de saúde estiverem riscados."
    },
    {
        "atributo": "Confusão",
        "nome": "Gelítsu",
        "descricao": "Você é um especialista na antiga arte ninja do gelítsu. Isso permite que você invoque armas ninja de gelo para usar em combate. Você pode usar Confusão no lugar de Jeitinho para equipar-se com armas ninja de gelo que são criadas do nada. Você pode criar espadas, estrelas, nunchakus e esse tipo de coisas, sempre de gelo e com a capacidade de causar o estado congelado (usando um sucesso magnífico para isso) nos alvos que sejam atingidos.",
        "magica": true
    },
    {
        "atributo": "Confusão",
        "nome": "Grito de guerra",
        "descricao": "Em combate, você pode dar uivos horripilantes para intimidar os seus inimigos. Você pode usar Confusão no lugar de Teimosia nas ações de assustar quando está no meio de uma briga."
    },
    {
        "atributo": "Confusão",
        "nome": "Histórias de Guerra",
        "descricao": "Você sempre tem mil histórias sobre escaramuças e batalhas de que participou para contar. Quando você conta um causo sobre elas, pode usar Confusão no lugar de Contatos em ações de impressionar."
    },
    {
        "atributo": "Confusão",
        "nome": "Inimigo preferido",
        "descricao": "Você conhece bem um tipo de criatura e sabe quais são seus pontos fracos e como vencer os de seu tipo. Escolha um tipo de criatura (vampiros, pessoas doces, ogros, cães, unicórnios...) e, nas ações de ataques contra seres desse tipo, você vai ter sucesso se tirar 3 ou mais em seus dados.",
        "especifica": true
    },
    {
        "atributo": "Confusão",
        "nome": "Insensível",
        "descricao": "A personagem é realmente difícil de ser afetada pela dor. Ignora o estado aturdido sempre que recebê-lo.",
        "poderosa": true
    },
    {
        "atributo": "Confusão",
        "nome": "Instintos de combate",
        "descricao": "Em situações de perigo, seus sentidos se aguçam. Quando você está envolvido em um combate, pode usar Confusão no lugar de Esperteza em ações de perceber e nas reações de espreitar."
    },
    {
        "atributo": "Confusão",
        "nome": "Investida",
        "descricao": "Se você tiver sucesso em uma ação de atacar corpo a corpo, pode gastar um ponto de Herói para fazer imediatamente uma ação gratuita de empurrar. Você pode converter essa proeza em poderosa se ignorar o gasto do ponto de Herói."
    },
    {
        "atributo": "Confusão",
        "nome": "Letal",
        "descricao": "Você é especialmente perigoso com uma arma concreta (espada, pistola de raios, remo ou o que quiser). Quando você tem sucesso em uma ação de ataque com essa arma, inflige ao alvo um nível adicional de dano.",
        "poderosa": true,
        "especifica": true
    },
    {
        "atributo": "Confusão",
        "nome": "Lutador",
        "descricao": "A personagem é um lutador especialista que sabe como imobilizar seus inimigos. Você pode usar Confusão no lugar de Músculos nas ações e reações de prender e de soltar-se.",
        "poderosa": true
    },
    {
        "atributo": "Confusão",
        "nome": "Medir forças",
        "descricao": "Você tem um bom olho para saber que tipo de lutador são os combatentes. Quando você tiver visto uma personagem lutar, pode usar Confusão no lugar de Contatos em ações de fichar."
    },
    {
        "atributo": "Confusão",
        "nome": "Ninja",
        "descricao": "Você é um mestre nas técnicas ninjas de ocultação. Sempre que você fizer ações de espreitar ou esconder no meio de um combate, pode usar Confusão no lugar de Falastrice."
    },
    {
        "atributo": "Confusão",
        "nome": "Preciso",
        "descricao": "Ao combater, você sabe como encontrar as áreas desprotegidas do seu inimigo e se aproveitar para causar mais dano. Seus ataques ignoram qualquer redução de dano devido a uma armadura, mas não as que são produzidas pelo efeito de proezas. Gastando um ponto de Herói, seu ataque também pode ignorar a redução de dano das proezas «Duro» e «Resistente»."
    },
    {
        "atributo": "Confusão",
        "nome": "Treinado",
        "descricao": "Você é especialmente hábil com uma arma a sua escolha (por exemplo: espada, machado, baixo-machado, saco de laranjas, as mãos limpas). Em todas as ações de atacar com essa arma, você adiciona um dado a seus testes.",
        "especifica": true
    },
    {
        "atributo": "Confusão",
        "nome": "Veterano",
        "descricao": "Você pode usar Confusão no lugar de Cachola para ações de saber relacionadas com as armas, as armaduras, a guerra e as coisas de combate em geral."
    },

    {
        "atributo": "Músculos",
        "nome": "Acrobático",
        "descricao": "A personagem é boa girando e dando piruetas para saltar ou controlar quedas. Recebe +1 nas ações de escalar, saltar e cair.",
        "poderosa": true
    },
    {
        "atributo": "Músculos",
        "nome": "Agarrão poderoso",
        "descricao": "A personagem tem mãos (ou tentáculos, ou pinças) muito fortes. Recebe +1 nas ações de prender e +1 nas reações contra a ação de soltar-se desde que mantenha o agarrão com seu corpo e não use uma corda ou algo parecido."
    },
    {
        "atributo": "Músculos",
        "nome": "Alterações",
        "descricao": "A personagem pode transformar partes de seu corpo (normalmente as extremidades) em armas ou outros objetos simples: chaves, alavancas, molas, etc. A personagem pode usar Músculos no lugar de Jeitinho em ações de equipar-se quando precisar de objetos simples. Esses «objetos» continuam unidos à personagem e com um movimento se transformam novamente nas partes do seu corpo.",
        "magica": true
    },
    {
        "atributo": "Músculos",
        "nome": "Armas naturais",
        "descricao": "A personagem tem garras, dentes afiados, tentáculos constritores ou outra parte do corpo especialmente dotada para fazer dodói. Quando a personagem faz um ataque bem-sucedido sem armas, adiciona um nível de saúde extra ao dano causado.",
        "poderosa": true
    },
    {
        "atributo": "Músculos",
        "nome": "Asas",
        "descricao": "Você tem asas que permitem que você alce voo. Você ignora qualquer obstáculo que normalmente iria requerer uma ação de cair, saltar ou escalar."
    },
    {
        "atributo": "Músculos",
        "nome": "Barbatanas",
        "descricao": "Você tem nadadeiras nos pés ou nas mãos que permitem que você se mova na água com uma facilidade assombrosa. Você não precisa da ação de nadar para se mover pela água, mas, para você, mover-se nesse meio é tão natural quanto andar."
    },
    {
        "atributo": "Músculos",
        "nome": "Bruto",
        "descricao": "A personagem pode lutar sem armas usando sua força bruta. Use o atributo Músculos no lugar de Confusão nas ações de atacar e nas reações ante essa mesma ação sempre que estiver desarmado."
    },
    {
        "atributo": "Músculos",
        "nome": "Duro",
        "descricao": "A personagem aguenta o dano melhor que os demais. Ignora a perda de um nível de saúde de cada ataque: os ataques que provoquem a perda de um nível de saúde são ignorados, os que causam a perda de dois níveis de saúde só causam a perda de um, os que causam a perda de três só provocam a perda de dois níveis de saúde, etc.",
        "poderosa": true
    },
    {
        "nome": "Elástico",
        "descricao": "Você é capaz de esticar seus braços, suas pernas e o resto de seu corpo à vontade, até uma área de distância. Você pode fazer ações e movimentos que normalmente só poderiam ser realizados em sua área (como atacar com uma espada ou pegar um bolo) a uma área de distância. Além disso, você pode se mover entre as áreas em que há um obstáculo que normalmente requerem saltar ou escalar usando um movimento no lugar de uma ação.",
        "atributo": "Músculos",
        "magica": true
    },
    {
        "atributo": "Músculos",
        "nome": "Encaixar",
        "descricao": "A personagem sabe como encaixar um bom golpe. Usa Músculos no lugar de Confusão como reação a qualquer ação de atacar de um ataque que não seja mágico. Quando você o fizer, ignora qualquer efeito de um estado da personagem sobre as reações a ações de ataque. Por exemplo, a personagem não sofreria nenhuma penalidade em sua reação diante de um ataque por estar em estado imobilizado e continuaria podendo ter uma reação diante de uma ação de atacar apesar de estar em estado paralisado."
    },
    {
        "atributo": "Músculos",
        "nome": "Escorregadio",
        "descricao": "A personagem sabe como se mover para evitar ser presa. Você ganha +1 nas ações de soltar-se e também nas reações diante de uma ação de prender."
    },
    {
        "atributo": "Músculos",
        "nome": "Fugidio",
        "descricao": "Você é um alvo difícil em combate, sabe como se movimentar para que seus inimigos não consigam alcançar você. Você recebe +1 na reação diante das ações de ataque e 1 sucesso automático nas suas ações de esquivar."
    },
    {
        "atributo": "Músculos",
        "nome": "Fundir",
        "magica": true,
        "descricao": "O corpo da personagem é capaz de gerar armas e outros objetos a partir de seu sangue, seus ossos, sua pele ou o que for. O objeto criado se desprende de seu corpo e a personagem perde um nível de saúde que só se recuperará quando fundir novamente o objeto com ele, sendo que a personagem tem que estar em contato com o objeto e usar um movimento. A personagem pode usar Músculos no lugar de Jeitinho em ações de equipar-se sempre que não estiver tratando de conseguir um objeto muito complexo. Certamente pode fazer uma chave ou uma espada, mas não pode fazer uma lanterna ou um livro de receitas."
    },
    {
        "nome": "Guelras",
        "atributo": "Músculos",
        "descricao": "A personagem tem guelras e pode respirar sob a água como se fosse ar. Não tem que segurar a respiração (página 95) quando está debaixo d’água"
    },
    {
        "nome": "Incansável",
        "atributo": "Músculos",
        "descricao": "Não tem quem canse a sua personagem. Ignora o estado cansado sempre que recebê-lo. Além disso, não precisa fazer nenhuma ação de segurar para resistir à fadiga ou ao sono.",
        "poderosa": true
    },
    {
        "nome": "Imune",
        "descricao": "Você é totalmente imune a um tipo de dano muito específico, como por exemplo das espadas, dos relâmpagos, ao fogo mágico ou ao veneno de cobra. Ignora todos os níveis de saúde perdidos por esse tipo de dano.",
        "atributo": "Músculos",
        "poderosa": true,
        "especifica": true
    },
    {
        "nome": "Massivo",
        "descricao": "A personagem tem o corpo pesado, gordo ou denso. Em todo caso, é difícil de mover. Você pode usar Músculos no lugar de Confusão nas ações de empurrar e, além disso, você recebe +1 em suas reações contra essa mesma ação.",
        "atributo": "Músculos"
    },
    {
        "nome": "Mudança de Tamanho",
        "descricao": "Você pode mudar de tamanho usando um movimento para cada categoria que quiser mudar. Assim, passar de pequeno a médio custa um movimento, mas passar de pequeno a grande precisa de dois movimentos. Se quiser mudar mais de duas categorias de tamanho, você vai precisar de mais de um turno, embora se você gastar um ponto de Herói, pode trocar todas as categorias de tamanho que quiser com um único movimento. Ao mudar de tamanho, você recebe todas as modificações do seu novo tamanho (página 125). Se você se tornar menor e perder níveis de saúde, o dano que você tiver se distribui entre seus novos níveis, então pode ficar fora de combate.",
        "atributo": "Músculos",
        "magica": true
    },
    {
        "atributo": "Músculos",
        "nome": "Músculos temíveis",
        "descricao": "A personagem está tão musculosa que dá medinho. Você pode usar Músculos no lugar de Teimosia nas ações de assustar."
    },
    {
        "atributo": "Músculos",
        "nome": "Pânico explosivo",
        "descricao": "Quando a personagem recebe o estado assustado, sua ação seguinte é explodir, causando dano a todos os que se encontra em sua área, a não ser que gastem um ponto de Herói. Isso funciona como uma ação de atacar com Músculos no lugar de Confusão que afeta todas as personagens na área. Depois de explodir, a personagem perde todos os seus níveis de saúde até a cena seguinte.",
        "magica": true
    },
    {
        "atributo": "Músculos",
        "nome": "Poses",
        "descricao": "Você sabe como tirar partido de seu corpo para impressionar a galera. A personagem pode usar Músculos no lugar de Maneirice nas ações de flertar."
    },
    {
        "atributo": "Músculos",
        "nome": "Regeneração",
        "descricao": "A personagem se cura de todo dano extremamente rápido, exceto do dano de um tipo concreto que deve ser especificado (por exemplo as armas cortantes, a magia, o fogo). A cada turno, a personagem recupera um nível de saúde, exceto se for do tipo especificado. Na ficha de personagem, você pode riscar com uma cor diferente ou marcar de alguma forma especial o dano de tipo especial para diferenciá-lo do restante.",
        "magica": true,
        "poderosa": true,
        "especifica": true
    },
    {
        "poderosa": true,
        "especifica": true,
        "atributo": "Músculos",
        "nome": "Resistente",
        "descricao": "Você é especialmente resistente a um tipo específico de dano: as coisas que cortam, as que espetam, as porretadas, a magia, o fogo, os venenos, o frio... Você reduz em dois níveis de saúde toda perda proveniente desse tipo de dano, então você ignora qualquer ataque do tipo indicado que faça com que você perca um nível ou dois de saúde, e reduz em dois a quantidade de níveis perdidos em qualquer outro caso."
    },
    {
        "magica": true,
        "poderosa": true,
        "atributo": "Músculos",
        "nome": "Toque mágico",
        "descricao": "A personagem tem um toque especial: poderia ser de fogo, de gelo, paralisante, etc. Se a personagem tocar outra, mediante uma ação de ataque ou de submeter, além de todos os efeitos normais da ação, pode usar um sucesso magnífico para colocar o alvo em um estado relacionado com o seu toque: queimando, congelado, paralisado..."
    },
    {
        "atributo": "Músculos",
        "nome": "Vigoroso",
        "descricao": "Você é um osso duro de roer: tem um nível adicional de saúde. No lugar das quatro caixas de costume, sua personagem tem cinco caixas."
    },
    {
        "nome": "Pulador",
        "descricao": "A personagem tem as pernas fortes, o traseiro de borracha ou alguma outra característica que a torna uma grande saltadora. Obtém um sucesso automático em qualquer ação de saltar.",
        "atributo": "Músculos"
    },

    {
        "atributo": "Cachola",
        "nome": "Aplicado",
        "descricao": "Você pode pensar em aplicações geniais da ciência o tempo todo. Você pode usar Cachola no lugar de Jeitinho em todas as ações de inventar."
    },
    {
        "nome": "Ataque mental",
        "magica": true,
        "atributo": "Cachola",
        "descricao": "Você tem a capacidade mágica de causar dano aos demais com o poder da mente. Você pode atacar com ele a um máximo de duas áreas de distância usando seu atributo Cachola no lugar de Confusão."
    },
    {
        "nome": "Dedutivo",
        "atributo": "Cachola",
        "poderosa": true,
        "descricao": "Você aplica a sua capacidade de raciocinar na forma que percebe ao seu redor. Você pode usar Cachola no lugar de Esperteza nas ações de buscar e de perceber, e também nas reações ante as ações de espreitar e esconder."
    },
    {
        "nome": "Efeito dominó",
        "atributo": "Cachola",
        "descricao": "Você vê facilmente como as coisas se conectam e isso permite que você produza grandes efeitos a partir de pequenas causas: tirando um parafuso cai uma cadeira que empurra uma mesa move um armário que... Você pode fazer ações de bloquear com Cachola no lugar de Músculos."
    },
    {
        "nome": "Erudito",
        "atributo": "Cachola",
        "descricao": "Você é um especialista em uma área concreta do conhecimento. Pode ser geografia, heráldica, botânica ou o que vier a sua mente. Nesse campo, você sabe um monte e recebe um sucesso automático em qualquer ação de saber que tenha a ver com ele.",
        "poderosa": true
    },
    {
        "nome": "Hipnose",
        "atributo": "Cachola",
        "descricao": "A personagem tem a capacidade de hipnotizar os outros para que sigam suas ordens. A hipnose requer um foco que o alvo deve olhar fixamente (podem ser os olhos do hipnotizador, um medalhão, um prisma luminoso, etc). Hipnotizar é uma ação de convencer, mas que se realiza com Cachola no lugar de Maneirice e que, além de seu efeito normal, deixa o alvo em estado concentrado (página 119) na ação em que foi dirigido durante um turno. Os sucessos magníficos podem ser usados para estender a duração do estado concentrado: um sucesso mangífico por três turnos, dois sucessos magníficos por uma cena, três sucessos magníficos pelo resto da história.",
        "magica": true
    },
    {
        "nome": "Jargão científico",
        "atributo": "Cachola",
        "descricao": "Com seu papo furado científico, você pode fazer com que as maiores mentiras colem. Você pode usar Cachola no lugar de Falastrice em todas as ações de enganar. Quando o fizer, você pode usar sucessos magníficos para colocar o alvo no estado confuso no lugar do estado crédulo."
    },
    {
        "nome": "Leitura mental",
        "atributo": "Cachola",
        "magica": true,
        "descricao": "Sua personagem pode ler a mente dos outros. É como uma ação de fichar, mas a personagem usa Cachola e o alvo reage com Teimosia. Além disso, a dificuldade é sempre 2. Se o leitor de mentes tiver sucesso, pode fazer uma pergunta ao alvo, que terá que responder com sinceridade. Cada sucesso magnífico permite uma pergunta adicional."
    },
    {
        "poderosa": true,
        "magica": true,
        "nome": "Mão mágica",
        "atributo": "Cachola",
        "descricao": "Você pode usar o poder da sua mente para mover objetos a distância. Você pode usar essa proeza para realizar movimentos do tipo pegar ou largar um objeto, mas com um alcance de até uma área de distância. Além disso, você pode fazer as ações de empurrar, levantar e prender sobre objetos até uma área de distância usando Cachola no lugar de Músculos e a ação de lançar usando Cachola no lugar de Confusão."
    },
    {
        "atributo": "Cachola",
        "nome": "Médico",
        "descricao": "Você sabe tudo sobre a anatomia e enfermidades das pessoas doces, das pessoas casas e dos demais habitantes da Terra de Ooo. Você recebe +2 nas ações de curar."
    },
    {
        "nome": "Mente científica",
        "atributo": "Cachola",
        "descricao": "Você entende perfeitamente que a magia é só um outro tipo de ciência, então você pode usar Cachola no lugar de Teimosia para reagir diante de um encantamento mágico. Além disso, você pode usar Cachola em ações de curar destinadas a eliminar estados produzidos pela magia."
    },
    {
        "atributo": "Cachola",
        "nome": "Meticuloso",
        "descricao": "A personagem é tremendamente organizada e cuidadosa quando faz uma busca. Pode usar Cachola no lugar de Esperteza em todas as ações de buscar."
    },
    {
        "nome": "Razoável",
        "atributo": "Cachola",
        "descricao": "Você é muito bom argumentando e justificando suas explicações. Você pode usar Cachola no lugar de Maneirice nas ações de convencer."
    },
    {
        "nome": "Telepatia",
        "atributo": "Cachola",
        "descricao": "A personagem é capaz de se comunicar psiquicamente sem precisar falar, apenas transmitindo seus pensamentos. Pode fazer ações sociais sem a necessidade de falar, inclusive se estiver em estado paralisado (o que normalmente impede de fazer ações sociais) com um alcance de duas áreas.",
        "magica": true,
        "poderosa": true
    },

    {
        "nome": "Autoridade",
        "atributo": "Contatos",
        "descricao": "Você é uma eminência em um campo concreto que deve especificar. Poderia ser a ciência, a magia, as festas, as masmorras ou o que vier a sua mente. Quando o contexto for adequado para o campo que especificou, você pode usar Contatos no lugar de Maneirice em ações de animar e, além disso, recebe +1 no teste.",
        "especifica": true
    },
    {
        "nome": "Bom partido",
        "atributo": "Contatos",
        "descricao": "Você é o noivo ou a noiva que qualquer um desejaria ter. Você pode usar Contatos no lugar de Maneirice em ações de flertar, mas se a personagem sobre quem usa a ação tiver um estado enamorado (de outra personagem), você recebe –2."
    },
    {
        "nome": "Crível",
        "atributo": "Contatos",
        "descricao": "As pessoas o consideram digno de confiança, então muitas vezes acreditam no que você diz. Você pode usar Contatos no lugar de Falastrice em ações de enganar."
    },
    {
        "nome": "Discreto",
        "atributo": "Contatos",
        "descricao": "A personagem é a típica figura que você está acostumado a ver sem dar-lhe importância, como se fosse parte do ambiente, como um mordomo inglês. A personagem pode usar Contatos no lugar de Falastrice em ações de esconder."
    },
    {
        "atributo": "Contatos",
        "nome": "Família grande",
        "descricao": "A personagem tem um montão de parentes em todas as partes: irmãos, primos e primos de segundo grau estão espalhados por toda a Terra de Ooo. Se a personagem fizer uma ação de contatar para buscar uma personagem genérica de uma profissão específica (um soldado, um mago, um cientista), pode falar que tem um familiar que se dedica a isso e receber +2 na ação de contatar."
    },
    {
        "atributo": "Contatos",
        "nome": "Festeiro",
        "descricao": "A personagem é a alma da festa: sempre recebe a atenção dos demais nos eventos sociais e sabe como ser divertido, misterioso ou o que for. Você recebe um sucesso automático nas ações sociais quando acontecem em uma festa."
    },
    {
        "atributo": "Contatos",
        "nome": "Infame",
        "descricao": "Só o seu nome já causa medo aos que o escutam. Você pode usar Contatos no lugar de Teimosia nas ações de assustar."
    },
    {
        "atributo": "Contatos",
        "nome": "Influente",
        "descricao": "A personagem «conhece alguém que conhece alguém» e isso lhe permite ter acesso a lugares exclusivos ou lugares de acesso restrito. Você recebe um sucesso automático em qualquer ação de convencer destinada a entrar de penetra em um lugar em que se supõe que você não deveria estar."
    },
    {
        "atributo": "Contatos",
        "nome": "Jeito com as pessoas",
        "descricao": "Você conhece bem os defeitos e fraquezas de cada um. Em qualquer ação de fichar, você tem sucesso com 3 ou mais no lugar de com o 4 ou mais habitual."
    },
    {
        "atributo": "Contatos",
        "nome": "Legal",
        "descricao": "Sua personagem tem um estilo bacana, é um dos que criam tendência por sua forma de se vestir, de andar, seus hobbies ou o que for. Você obtém um sucesso automático em qualquer ação de impressionar."
    },
    {
        "atributo": "Contatos",
        "nome": "Popular",
        "especifica": true,
        "descricao": "Você é famosinho em sua vizinhança e evidentemente uma referência. Você deve especificar o grupo de personagens entre quem você é popular: poderiam ser as pessoas doces, os aventureiros, os músicos ou o que vier a sua mente. Quando você usa ações de convencer, pode afetar todos os presentes desse grupo com um único teste."
    },
    {
        "atributo": "Contatos",
        "nome": "Reputação",
        "descricao": "As pessoas conhecem você e valorizam seu julgamento. Você pode usar Contatos no lugar de Maneirice nas ações de convencer."
    },
    {
        "atributo": "Contatos",
        "nome": "Respeitável",
        "descricao": "Você é uma personalidade na Terra de Ooo, ostenta um cargo de poder e as pessoas o respeitam. Você recebe +2 nas reações diante de ações de convencer e enganar."
    },
    {
        "atributo": "Contatos",
        "nome": "Viajante",
        "descricao": "Sua personagem é um perfeito viajante que esteve em mil lugares e conhece sua história e costumes. Você pode usar Contatos no lugar de Cachola em ações de saber quando se referem a temas de história, geografia, lendas, etc."
    },

    {
        "atributo": "Esperteza",
        "nome": "Astuto",
        "descricao": "A personagem aprende mais rápido do que o normal. Ao final de cada sessão de jogo, além da experiência que lhe é correspondente (página 90), a personagem recebe um ponto extra."
    },
    {
        "atributo": "Esperteza",
        "nome": "Atento",
        "descricao": "A personagem está especialmente atenta a tudo o que acontece ao seu redor. Recebe +1 em todas as ações de perceber e em todas as reações de espreitar. Além disso, se a personagem receber um estado surpreso, pode ignorá-lo imediatamente gastando um ponto de Herói sem importar a sua duração.",
        "poderosa": true
    },
    {
        "atributo": "Esperteza",
        "nome": "Autodidata",
        "poderosa": true,
        "descricao": "A personagem é boa aprendendo por conta própria. Você pode usar Esperteza no lugar de Cachola em ações de ciência, estudar e saber."
    },
    {
        "atributo": "Esperteza",
        "nome": "Chef",
        "descricao": "A personagem é um excelente cozinheiro, capaz de fazer os pratos mais seletos e deliciosos. Você recebe um sucesso automático em todas as ações de cozinhar."
    },
    {
        "atributo": "Esperteza",
        "nome": "Copiador",
        "descricao": "A imitação não tem segredos para a personagem. Nas ações de imitar, seus sucessos magníficos adicionam um dado extra ao teste sem ter que converter-se em sucessos normais."
    },
    {
        "atributo": "Esperteza",
        "nome": "Detectar o mal",
        "magica": true,
        "descricao": "Você pode usar uma ação de fichar com Esperteza no lugar de Contatos para avaliar se as personagens em sua área são confiáveis. Isso afetará todas as personagens que você quiser dentro da dita distância. Os alvos podem reagir com Teimosia. Essa proeza não detectará se alguém é um ladrão, um bandido ou um mentirosinho, só detectará o mal primordial como o dos vampiros, dos monstros ou dos demônios."
    },
    {
        "atributo": "Esperteza",
        "nome": "Engenhoso",
        "descricao": "A personagem tem ideias estupendas para construir trecos. Você pode usar Esperteza no lugar de Jeitinho em ações de inventar."
    },
    {
        "atributo": "Esperteza",
        "nome": "Incrédulo",
        "descricao": "A personagem é muito desconfiada e é difícil fazê-la se enganar. Nas reações diante de ações de distrair e enganar, tem sucesso com 3 ou mais."
    },
    {
        "atributo": "Esperteza",
        "nome": "Inquietante",
        "descricao": "A personagem tem uma aura perturbadora e que deixa as demais nervosas e faz com que ajam estranhamente. A personagem pode usar Esperteza no lugar de Teimosia em ações de assustar. Se tiver sucesso, pode escolher que o alvo ganhe um estado esquisitão no lugar de estado assustado."
    },
    {
        "atributo": "Esperteza",
        "nome": "Intuitivo",
        "descricao": "A personagem tem uma forte intuição, o que a ajuda a detectar coisas escondidas. Nas ações de buscar e nas reações de esconder, tem sucesso com 3 ou mais no lugar de com o 4 ou mais habitual."
    },
    {
        "atributo": "Esperteza",
        "nome": "Jóquei",
        "descricao": "A personagem é um ginete magnífico, e é ótimo montando a cavalo, em unicórnio voador ou o que for colocado em sua frente. Obtém um sucesso automático em qualquer ação de montar."
    },
    {
        "atributo": "Esperteza",
        "nome": "Olfato aguçado",
        "descricao": "Você tem um olfato muito apurado, o que o ajuda a seguir rastros e permite cheirar coisas a distância. Você pode cheirar coisas a um máximo de duas áreas de distância e recebe +1 nas ações de buscar, rastrear ou perceber quando forem sobre odores. Você também tem +1 nas reações diante de ações de espreitar e esconder se puder usar o olfato (tem o vento a favor e coisas assim)."
    },
    {
        "atributo": "Esperteza",
        "nome": "Olho crítico",
        "descricao": "Você tem um bom olho para se dar conta de como as pessoas são. Você pode usar Esperteza no lugar de Contatos nas ações de fichar se tiver diante de si a personagem alvo."
    },
    {
        "atributo": "Esperteza",
        "nome": "Pontaria",
        "descricao": "Em ações de atacar com armas que tenham um alcance maior que corpo a corpo, a personagem pode usar Esperteza no lugar de Confusão. Além disso, os obstáculos entre as áreas não aumentam a dificuldade de seus ataques."
    },
    {
        "atributo": "Esperteza",
        "nome": "Raios oculares",
        "magica": true,
        "descricao": "Você é capaz de lançar raios pelos olhos. Isso permite que você faça ações de atacar com Esperteza no lugar de Confusão (só quando usa sua visão de raios) e atacar a uma área de distância. Gastando um ponto de Herói, você pode usar seus raios oculares para se defender também: nesse caso, use Esperteza como reação diante de uma ação de atacar."
    },
    {
        "atributo": "Esperteza",
        "nome": "Rápido",
        "descricao": "Uma personagem rápida é sempre a primeira a agir (se várias personagens tiverem essa proeza, todos agem antes do resto e usam as regras normais de iniciativa entre elas para ver em que ordem agem). Além disso, gastando um ponto de Herói, a personagem pode fazer uma ação ou movimento extra em seu turno."
    },
    {
        "atributo": "Esperteza",
        "nome": "Ver fraqueza",
        "descricao": "Você sabe encontrar os pontos fracos dos objetos para escangalhá-los sem a necessidade de recorrer à força bruta. Você pode usar Esperteza no lugar de Músculos em ações de soltar-se (contra amarras, não contra outra personagem), bloquear e quebrar.",
        "poderosa": true
    },

    {
        "atributo": "Falastrice",
        "nome": "Autoengano",
        "descricao": "Você é capaz de acreditar em suas próprias mentiras. Você pode usar Falastrice no lugar de Teimosia para ações de concentrar-se."
    },
    {
        "atributo": "Falastrice",
        "nome": "Dissimulado",
        "descricao": "Sua personagem é muito boa passando despercebida e agindo sem ser vista. Você recebe +1 nas ações de esconder."
    },
    {
        "atributo": "Falastrice",
        "nome": "Egocêntrico",
        "descricao": "Você é muito dado a pensar em você mesmo e em seu próprio benefício e a se esquecer dos demais. Você ganha a opção de fazer ações de animar ou cantar sobre si mesmo usando Falastrice no lugar de Maneirice."
    },
    {
        "atributo": "Falastrice",
        "nome": "Escapista",
        "descricao": "Sua personagem é um mestre nos truques do escapismo e sabe mil e uma formas de se livrar de amarras, algemas, grilhões e coisas assim. Quando fizer uma ação de soltar-se para se livrar de cordas, correntes e similares (mas não para escapar da captura de outra personagem), você pode usar Falastrice no lugar de Músculos e, além disso, recebe +1."
    },
    {
        "atributo": "Falastrice",
        "nome": "Fanfarrão",
        "descricao": "Você é bom fingindo que é o que, na verdade, não é. Você pode usar Falastrice no lugar de Contatos em ações de impressionar."
    },
    {
        "atributo": "Falastrice",
        "nome": "Farsante",
        "descricao": "Sua personagem é um perfeito mentiroso, o que faz com que para ela, seja facílimo mentir. Nas ações de enganar, você tem sucesso com 3 ou mais no lugar de com o 4 ou mais habitual."
    },
    {
        "atributo": "Falastrice",
        "nome": "Fintar",
        "descricao": "Você é especialista em enganar a seus oponentes ameaçando com seus movimentos. Você pode usar Falastrice no lugar de Músculos nas ações de esquivar e no lugar de Confusão nas reações diante de ações de ataques e lançar."
    },
    {
        "atributo": "Falastrice",
        "nome": "Flutuar",
        "poderosa": true,
        "descricao": "A personagem desliza suavemente sobre o solo sem precisar andar, ainda que não possa voar nem subir muito alto. Você pode usar Falastrice no lugar de Músculos nas ações de cair, correr ou esquivar."
    },
    {
        "atributo": "Falastrice",
        "nome": "Furtivo",
        "descricao": "Sua personagem é especialista em mover-se despercebido e aproveitar distrações dos demais para atacá-los traiçoeiramente. Sempre que uma personagem estiver em estado distraído ou concentrado, ou sempre que sua personagem estiver em estado escondido, você pode usar Falastrice no lugar de Confusão para atacar e, além disso, você recebe +1."
    },
    {
        "atributo": "Falastrice",
        "nome": "Gabar-se",
        "descricao": "A sua personagem gosta de exagerar suas virtudes e sabe como usar isso para seduzir a outros. Você pode usar Falastrice no lugar de Maneirice em ações de flertar."
    },
    {
        "atributo": "Falastrice",
        "nome": "Incorpóreo",
        "poderosa": true,
        "magica": true,
        "descricao": "A personagem é incorpórea ou pode se tornar incorpórea à vontade com um movimento. Em seu estado incorpóreo, a personagem não pode ser alvo de ações físicas, mas pode fazê-las normalmente."
    },
    {
        "atributo": "Falastrice",
        "nome": "Inflar-se",
        "descricao": "A personagem pode se inflar como um baiacu, ou fingir de algum jeito que é mais perigosa do que realmente é. Devido a isso, você pode fazer ações de assustar com Falastrice no lugar de Teimosia."
    },
    {
        "atributo": "Falastrice",
        "nome": "Ligeiro",
        "descricao": "A personagem tem dedos ágeis e é muito descarada, uma combinação muito útil para se apossar do que não é dela. Nas ações de roubar, você tem sucesso com 3 ou mais no lugar de com o 4 ou mais normal."
    },
    {
        "atributo": "Falastrice",
        "nome": "Massageador de Ego",
        "descricao": "Sua personagem gosta de dizer às demais o que elas querem ouvir. Você pode usar Falastrice no lugar de Maneirice em ações de animar."
    },
    {
        "atributo": "Falastrice",
        "nome": "Rei do Drama",
        "descricao": "A personagem é especialista em se deleitar em seus problemas e no quão mal as coisas lhe saem. Cada vez que fizer um teste em cujo resultado final não obtenha nenhum sucesso, ganha um ponto de Herói."
    },
    {
        "atributo": "Falastrice",
        "nome": "Sigiloso",
        "descricao": "Você é muito silencioso, portanto recebe +1 nas ações de espreitar."
    },
    {
        "atributo": "Falastrice",
        "nome": "Substituidor",
        "descricao": "A personagem tem a capacidade de se disfarçar e se fazer passar por outros. Precisa dedicar uma cena preparando seu disfarce e o colocando e só pode tentar substituir a personagens que conheça e que sejam de seu mesmo tamanho. Cada vez que alguém que conheça o substituído se encontre pela primeira vez com a personagem, ela terá que fazer uma ação de enganar para não ser descoberta. Se a personagem fizer algo esquisito ou impróprio para a personagem que substitui, precisará fazer outra ação de enganar para manter a farsa. Você pode converter essa proeza em poderosa ou mágica se, para se disfarçar, a personagem só precisa dedicar um movimento em seu turno no lugar de uma cena completa."
    },
    {
        "atributo": "Falastrice",
        "nome": "Tagarela",
        "descricao": "Você é muito falador e persuade os demais com o seu papo furado incessante. Você pode usar Falastrice no lugar de Maneirice nas ações de convencer. Além disso, quando o fizer, no lugar do estado crédulo você pode colocar o alvo em um estado confuso."
    },
    {
        "atributo": "Falastrice",
        "nome": "Teleporte",
        "descricao": "A personagem é capaz de se transportar de um lugar para outro a qualquer distância usando só um movimento. O teleporte funciona entre dois pontos quaisquer sempre que se cumpra uma determinada condição que o jogador deve especificar com a aprovação do mestre ao escolher essa proeza. Por exemplo, poderia ser necessário que a personagem tenha estado previamente no lugar a que quer ir ou que alguém que está nesse lugar a tenha chamado. Para poder se teleportar, a personagem deve gastar um ponto de Herói).",
        "magica": true,
        "poderosa": true
    },
    {
        "atributo": "Falastrice",
        "nome": "Trapaceiro",
        "descricao": "Sua personagem é especialmente hábil distorcendo as regras dos jogos a seu favor e tirando proveito de distrações de seus oponentes. Você pode usar Falastrice no lugar de Esperteza nas ações de jogar e, além disso, você recebe +2 no teste. Claro, se você falhar na ação, não só não ganha o jogo, mas descobrem que você está trapaceando."
    },
    {
        "atributo": "Falastrice",
        "nome": "Trambiqueiro",
        "descricao": "Sua personagem é muito boa fazendo com que os demais prestem atenção em detalhes irrelevantes. Nas ações de distrair, você tem sucesso com 3 ou mais no lugar de com o 4 ou mais habitual."
    },
    {
        "atributo": "Maneirice",
        "nome": "Amigável",
        "descricao": "Sabe essas pessoas que se dão bem com todos e têm um montão de amigos? Sua personagem é uma delas. Quando faz uma ação de contatar para buscar uma personagem de um certo perfil (ou alguém específico), você pode usar Maneirice no lugar de Contatos para localizar um amigo seu que descasque o seu abacaxi."
    },
    {
        "atributo": "Maneirice",
        "nome": "Apaixonado",
        "descricao": "Sua personagem põe muita energia e paixão quando se esforça, e sabe como dar o melhor de si mesma. Quando você gasta um ponto de Herói para adicionar dados a uma ação, adiciona três dados no lugar dos dois habituais."
    },
    {
        "atributo": "Maneirice",
        "nome": "Canção mágica",
        "magica": true,
        "descricao": "Sua voz ou sua capacidade de tocar um instrumento são mágicas. Isso faz com que a música que você pro - duz seja especial. Em ações de cantar, seus sucessos magníficos adicionam um dado extra ao teste sem ter que converter-se em sucessos normais e, além disso, você pode usar a dita ação para colocar o estado que quiser. Assim, você poderia fazer uma canção que deixa a audiência em estado apaixonado ou cegado."
    },
    {
        "atributo": "Maneirice",
        "nome": "Don Juan",
        "descricao": "A personagem é muito atraente e simpática a primeira vista e acha fácil fazer conquistas rápidas. A primeira vez que você tentar uma ação de flertar contra uma personagem, recebe +3 na ação. No entanto, tendo ou não sucesso, se você tentar flertar novamente com essa personagem no futuro, recebe –1."
    },
    {
        "atributo": "Maneirice",
        "nome": "Empatia animal",
        "descricao": "A personagem tem uma boa sintonia com os animais, como se pudesse entender suas motivações e sentimentos. Pode fazer ações sociais sobre animais irracionais como se fossem personagens inteligentes. Além disso, você pode usar Maneirice no lugar de Esperteza em ações de cavalgar."
    },
    {
        "atributo": "Maneirice",
        "nome": "Encantador",
        "descricao": "A personagem tem um magnetismo irresistível. Como não acreditar nela? Você pode usar Maneirice no lugar de Falastrice em todas as ações de enganar."
    },
    {
        "atributo": "Maneirice",
        "nome": "Enganador",
        "descricao": "A personagem sabe como usar a sua simpatia para distrair os incautos e levar o que não é seu. Você pode usar Maneirice no lugar de Falastrice em ações de roubar."
    },
    {
        "atributo": "Maneirice",
        "nome": "Entusiasta",
        "descricao": "A personagem tem um entusiasmo realmente contagiante que faz com que seja uma animadora natural. Adicione +2 a todas as ações de animar que a personagem fizer."
    },
    {
        "atributo": "Maneirice",
        "nome": "Esponjoso",
        "descricao": "A personagem é molinha, flexível, com um aspecto fofo. Isso faz com que seja resistente a danos de porretadas, quedas, golpes, esmagamento e similares. Todo dano físico desse tipo se reduz à metade, arredondando para baixo. Isso não inclui o dano de coisas cortantes (como espadas), que espetam (como flechas), fogo, gelo, etc, mas protege do dano que seja fundamentalmente contundente: queda de rochas, maças, bordões, socos, pontapés...",
        "poderosa": true
    },
    {
        "atributo": "Maneirice",
        "nome": "Lábia",
        "descricao": "Você é de uma linguagem vivaz, pode comer os miolos das pessoas com as suas histórias. Você ganha +1 nas ações de convencer."
    },
    {
        "atributo": "Maneirice",
        "nome": "Líder",
        "descricao": "A personagem tem talento de liderança. Cada vez que você fizer uma ação de animar a outra personagem para uma certa ação, recebe o estado inspirado para essa mesma ação para você mesmo."
    },
    {
        "atributo": "Maneirice",
        "nome": "Metamorfo",
        "magica": true,
        "especifica": true,
        "descricao": "A personagem tem a capacidade de se transformar em um tipo de coisa ou de animais que deve especificar. Por exemplo, poderia ser capaz de se transformar em utensílios de cozinha, em animais de granja, em embalagens ou aves de rapina. Para se transformar, a personagem deve usar um movimento e pagar um ponto de Herói, desse modo ganha o tamanho e os atributos próprios daquilo em que se está transformando, a critério do mestre. Recuperar sua forma normal requer outro movimento, mas não tem custo algum."
    },
    {
        "atributo": "Maneirice",
        "nome": "Muito legal",
        "descricao": "A personagem é tão legal que custa às demais vê-la como um perigo e atacá-la. Você pode usar Maneirice no lugar de Confusão para as reações diante de ações de atacar e lançar."
    },
    {
        "atributo": "Maneirice",
        "nome": "Negociador",
        "descricao": "Você é um mestre do regateio, das permutas e das pechinchas, daqueles que sempre conseguem o melhor preço ou um trato vantajoso para si. Sempre que usar uma ação de convencer para chegar a um acordo de compra e venda ou negócios com outra personagem, obtém um sucesso automático."
    },
    {
        "atributo": "Maneirice",
        "nome": "Poeta",
        "descricao": "Você gosta de falar em verso, o que diverte e confunde igualmente aqueles que o escutam. Quando faz ações de convencer ou enganar, cada sucesso magnífico adiciona um dado a seu teste sem se converter em um sucesso normal se você estiver falando em verso. Atenção, o jogador tem que falar em verso por sua personagem para que isso funcione!"
    },
    {
        "atributo": "Maneirice",
        "nome": "Reconfortar",
        "descricao": "A personagem é única dizendo palavras de ânimo, mimando e, de modo geral, fazendo com que os outros se sintam bem. Você pode usar Maneirice no lugar de Cachola em ações de curar destinadas a outros. Para curar a si mesmo, você vai ter que continuar usando Cachola."
    },
    {
        "atributo": "Maneirice",
        "nome": "Sedutor",
        "descricao": "Você tem um encanto irresistível. Você recebe +1 em todas as ações de flertar."
    },
    {
        "atributo": "Maneirice",
        "nome": "Sorriso torto",
        "descricao": "A personagem tem um encanto estranho que causa uma sensação ruim. Você pode usar Maneirice no lugar de Teimosia para as ações de assustar."
    },
    {
        "atributo": "Maneirice",
        "nome": "Voz melodiosa",
        "descricao": "A personagem tem uma voz doce e aveludada ou grave e ressonante, mas em todo caso, muito musical. Você recebe +2 em qualquer ação de cantar."
    },
    {
        "atributo": "Teimosia",
        "nome": "Azedo",
        "descricao": "A personagem tem um caráter complicado e é difícil de lidar com ela. Recebe um sucesso automático nas reações diante de ações de convencer ou flertar."
    },
    {
        "atributo": "Teimosia",
        "nome": "Aterrorizar",
        "magica": true,
        "especifica": true,
        "descricao": "Seja mudando seu aspecto ou de algum outro modo mágico, você é capaz de aterrorizar a outras personagens. Você tem sucesso com 3 ou mais em qualquer ação de assustar e, se tiver sucesso, pode deixar o alvo paralisado pelo medo no lugar de assustado."
    },
    {
        "atributo": "Teimosia",
        "nome": "Birrento",
        "descricao": "A personagem é cheia de caprichos e se enraivece quando não consegue o que quer. Quando você falha em uma ação, pode escolher receber o estado furioso. Se no teste da falha no tiver nenhum sucesso, então você recebe obrigatoriamente o estado furioso."
    },
    {
        "atributo": "Teimosia",
        "nome": "Cabeçudo",
        "descricao": "A personagem tem a cabeça dura e é muito difícil de se convencer. Adiciona +2 a todas as reações contra a ação de convencer e contra qualquer ação mágica para obriga-la a agir contra a vontade, como às correspondentes das proezas enfeitiçar, hipnose e raio enfeitiçante."
    },
    {
        "atributo": "Teimosia",
        "nome": "Chapéu mágico",
        "magica": true,
        "descricao": "A personagem tem um chapéu mágico (ou uma mochila, um saco, uns bolsos) de onde pode tirar à vontade os objetos de que precisa. Você pode usar Teimosia no lugar de Jeitinho em ações de equipar-se enquanto tiver o seu chapéu (ou o que for). Se for roubado ou perder o chapéu, você recebe um ponto de Herói e, eventualmente, ele vai voltar para você ou você vai conseguir outro parecido."
    },
    {
        "atributo": "Teimosia",
        "nome": "Controle mental",
        "poderosa": true,
        "magica": true,
        "descricao": "A personagem pode controlar a outros. É como uma ação de prender, mas tanto a ação quanto a reação são feitas com Teimosia. Quem controla decide o que fará quem é controlado em seu turno: isso é considerado um movimento para a personagem que controla e o controlado só pode evitar isso gastando um ponto de Herói, e nesse caso fica imóvel em seu turno. Enquanto está controlado, uma personagem só pode fazer ações de soltar-se, mas com Teimosia."
    },
    {
        "atributo": "Teimosia",
        "nome": "Curador",
        "magica": true,
        "descricao": "O toque, a saliva, o canto ou outra coisa da personagem tem a capacidade mágica de curar. Você pode usar Teimosia no lugar de Cachola para ações de curar e, além disso, você pode curar estados produzidos por magia."
    },
    {
        "atributo": "Teimosia",
        "nome": "Elemental",
        "poderosa": true,
        "especifica": true,
        "descricao": "A personagem é um elemental, uma forma viva de um dos elementos: fogo, água (e gelo), terra ou ar (ou qualquer outro se parece bom para o mestre). Como tal, está vinculada à escola de magia correspondente (página 85) e pode convocar, controlar ou expulsar usando encantamentos da dita escola. É feita do material de seu elemento, de modo que seu contato produz o estado apropriado; por exemplo, queimando para o elemento de fogo. É muito resistente ao dano que provenha deste elemento: reduz em dois níveis de saúde o dano de qualquer ataque desse tipo, mas em troca, é muito vulnerável ao elemento contrário e sofre dano dobrado de ataques dessa fonte. A critério do mestre, a personagem poderia ter outras capacidades relacionadas a seu elemento. Por exemplo, um elemental de fogo poderia ficar mais forte comendo carvão, um de água poderia fluir por espaços pequenos, um de terra poderia se endurecer para resistir ao dano e um de ar poderia voar."
    },
    {
        "atributo": "Teimosia",
        "nome": "Enfeitiçar",
        "descricao": "A personagem tem a capacidade e enfeitiçar às demais para que façam algo específico (dançar, saltar, atacar) tocando sua flauta, dizendo palavras mágicas, esfregando o umbigo ou como for. Ao escolher a proeza, você deve especificar como enfeitiça aos demais e o que fazem as personagens enfeitiçadas. Enfeitiçar é como uma ação de convencer, mas com Teimosia no lugar de Maneirice. Afeta a todas as personagens que estejam na mesma área que a personagem que enfeitiça e que sejam suscetíveis à ação (vejam-na tocar o umbigo ou ouçam-na tocar a flauta). Tem dificuldade 0, de modo que depende sobretudo da reação das personagens afetadas. Se a ação de enfeitiçar tem sucesso, as personagens afetadas ficam em estado enfeitiçado (página 122) para a ação apropriada durante um turno. Com sucessos magníficos, você pode estender a duração da ação: um: três turnos, dois: uma cena ou três a aventura toda.",
        "poderosa": true,
        "especifica": true,
        "magica": true
    },
    {
        "atributo": "Teimosia",
        "nome": "Forma monstruosa",
        "descricao": "A personagem tem uma segunda forma de aspecto monstruoso. Pode ser que seja um licantropo ou um vampiro capaz de se converter em algo terrível. Mudar de forma é um movimento e em sua forma monstruosa a personagem recebe +1 em Músculos, +1 em Confusão, +1 a qualquer uso da ação de assustar e –1 em Maneirice e em Falastrice.",
        "magica": true
    },
    {
        "atributo": "Teimosia",
        "nome": "Forma monstruosa gigante",
        "descricao": "A personagem pode adotar uma forma monstruosa gigante, como um ser viscoso com tentáculos e bocas por toda parte ou um bagulho horrível cheio de olhos. Mudar para a sua forma monstruosa gigante requer usar um movimento. Na dita forma, a personagem recebe +2 em Músculos, +1 em Confusão, +2 a qualquer uso da ação assustar e –2 em Maneirice e em Falastrice, além das modificações próprias do tamanho gigante (página 126).",
        "magica": true,
        "poderosa": true
    },
    {
        "atributo": "Teimosia",
        "nome": "Imbatível",
        "descricao": "A força de vontade da personagem faz com que seja excepcionalmente resistente a dano. A personagem dispõe de um nível de saúde adicional."
    },
    {
        "atributo": "Teimosia",
        "nome": "Incômodo",
        "descricao": "A personagem sabe como ser uma chateação e exasperar às demais com suas manias e costumes incômodos. Você pode usar Teimosia no lugar de Falastrice em ações de distrair e, se preferir, pode colocar um estado confuso no lugar de concentrado nas ditas ações."
    },
    {
        "atributo": "Teimosia",
        "nome": "Insistente",
        "descricao": "A personagem não se rende facilmente ante ao fracasso quando tem um objetivo. Quando falha em uma ação, pode escolher receber o estado concentrado para a dita ação até que consiga ter sucesso nela."
    },
    {
        "atributo": "Teimosia",
        "nome": "Intimidador",
        "descricao": "Você pode usar Teimosia no lugar de Maneirice nas ações de convencer, mas se o fizer e tiver sucessos magníficos, a personagem afetada fica assustada no lugar de convencida."
    },
    {
        "atributo": "Teimosia",
        "nome": "Invisibilidade",
        "magica": true,
        "poderosa": true,
        "descricao": "A personagem pode ficar invisível à vontade. Invertendo um movimento e gastando um ponto de Herói, a personagem ganha imediatamente o estado escondido. Se aplicam as regras normais do dito estado, de modo que, se perdê-lo pelo motivo que for, a personagem volta a ser visível. As ações de buscar para encontrar a personagem invisível (e, portanto, desfazer sua invisibilidade) têm dificuldade 3."
    },
    {
        "atributo": "Teimosia",
        "nome": "Irascível",
        "descricao": "A personagem se zanga com facilidade. Sempre que for receber um estado assustado, confuso, para baixo ou decepcionado, pode trocá-lo, se quiser, por um estado furioso."
    },
    {
        "atributo": "Teimosia",
        "nome": "Lançar raios",
        "descricao": "Você é capaz de lançar raios de energia mágica, de fogo, de gelo, de eletricidade ou do que vier a sua mente. Você pode lançar raios com as mãos, com o chifre ou com o que quiser. Isso permite que você faça ações de lançar com Teimosia no lugar de Confusão com um alcance de uma área. Além disso, você pode produzir estados relacionados com a natureza dos seus raios, por exemplo, pode colocar o estado queimando se você lança fogo ou cegado se você lança luz.",
        "poderosa": true,
        "magica": true
    },
    {
        "atributo": "Teimosia",
        "nome": "Mago",
        "descricao": "A personagem é membro de uma das oito escolas de magia: fogo, gelo, rocha, ar, vida, morte, dimensional ou mental. Como o mago que é, você poderá fazer encantamentos da sua escola e terá acesso a lugares secretos como a Cidade dos Magos. Consulte a página 54 para saber mais sobre encantamentos e magia.",
        "magica": true,
        "especifica": true,
        "poderosa": true
    },
    {
        "atributo": "Teimosia",
        "nome": "Maldição",
        "magica": true,
        "poderosa": true,
        "especifica": true,
        "descricao": "A personagem transmite algum tipo de maldição, normalmente ligada a relacionar-se com ele. Por exemplo, sua mordidinha poderia transformar em um habitante da Terra do Caroço (página 186) ou seu abraço em um lobo do abraço (página 166). A maldição normalmente será uma mudança indesejada e definitiva, ainda que sempre haverá um período de tempo em que se pode evitar que a mudança se complete ou que se torne irreversível. O jogador deve determinar com o mestre no que consiste a maldição, como se transmite e como pode ser revertida ou detida. Em qualquer caso, a maldição deveria ser algo que o resto das personagens quer evitar a todo custo, nunca um acontecimento desejável."
    },
    {
        "atributo": "Teimosia",
        "nome": "Mandão",
        "descricao": "A personagem gosta de dar ordens e que os demais façam o que ela diz. Você pode fazer ações de animar com Teimosia no lugar de Maneirice."
    },
    {
        "atributo": "Teimosia",
        "nome": "Olhos de mago",
        "magica": true,
        "descricao": "ocê tem olhos de mago, o que lhe permite ver movimentos mágicos e todo o tipo de loucuras místicas, como o Mundo Espiritual (página 191). Quando houver magia envolvida, você pode usar Teimosia no lugar de Esperteza para ações de buscar e perceber ou para reações de esconder ou espreitar. Mas, cuidado, às vezes é difícil distinguir se o que você vê existe na realidade ou só no plano mágico."
    },
    {
        "atributo": "Teimosia",
        "nome": "Persistente",
        "descricao": "A personagem é inacessível ao desalento e não lhe importa olhar umas mil vezes no mesmo lugar quando faz uma busca. Você pode usar Teimosia no lugar de Esperteza nas ações de buscar."
    },
    {
        "atributo": "Teimosia",
        "nome": "Portal",
        "magica": true,
        "poderosa": true,
        "descricao": "A personagem é capaz de abrir um portal para outra dimensão, por exemplo, para a Terra do Caroço ou para a Terra dos Mortos. Abrir o portal requer o gasto de um movimento e o gasto de um ponto de Herói e, ainda que por ele possam atravessar todas as personagens que quiserem, o portal só permanece aberto por três turnos depois que um personagem atravessá-lo, ou uma cena, caso ninguém o atravesse."
    },
    {
        "atributo": "Teimosia",
        "nome": "Possessão",
        "descricao": "A personagem pode possuir o corpo de outros. Para possuir a outra personagem, você deve ter sucesso em uma ação de prender, mas usando Teimosia no lugar de Músculos tanto para a ação quanto para a reação. Se você tiver sucesso, o corpo da sua personagem desaparece no interior do corpo do alvo como se estivesse fundido com ele. A partir desse momento, você age usando o alvo como se fosse sua personagem, usando todos os atributos e proezas dele. Além disso, você pode usar suas próprias proezas de Cachola, Esperteza, Maneirice e Teimosia, assim como as pontuações dos ditos atributos, no lugar dos do alvo, se preferir. O alvo, por sua parte, só pode tentar uma ação de soltar- -se por cena, usando Teimosia no lugar de Músculos, embora se gastar um ponto de Herói pode fazer uma tentativa adicional. O dano que venha a sofrer o corpo que você possui não afeta realmente a sua personagem, embora caso perca o último nível de saúde, você é imediatamente expulso dele.",
        "magica": true,
        "poderosa": true
    },
    {
        "atributo": "Teimosia",
        "nome": "Raio enfeitiçante",
        "magica": true,
        "especifica": true,
        "poderosa": true,
        "descricao": "Você pode lançar um raio enfeitiçante que obriga o afetado a fazer uma ação a sua escolha (cantar, esconder- -se, engolir...). A ação que produz seu raio enfeitiçante deve ser especificada quando escolher essa proeza. Seu raio funciona como uma ação de lançar com duas áreas de alcance, mas tanto a ação quanto a reação são feitas com Teimosia no lugar de Confusão. Se você acerta, no lugar de causar dano, o alvo recebe um estado enfeitiçado (página 122) com a ação correspondente durante um turno. Se você tiver sucessos magníficos em seu teste, você pode estender a duração da ação: um: três turnos, dois: uma cena ou três a aventura toda."
    },
    {
        "atributo": "Teimosia",
        "nome": "Rebelde",
        "descricao": "A personagem é indomável e tem que ser sempre contrária às demais. Quando outra personagem fizer uma ação sobre você que possa influenciar na sua forma de agir (por exemplo, convencer ou inspirar), você tem que repetir todos os sucessos que tiver no teste dela e ficar com o segundo resultado."
    },
    {
        "atributo": "Teimosia",
        "nome": "Sugar energia",
        "descricao": "A personagem é capaz de absorver a energia vital dos demais. Para ativar essa proeza, você deve gastar um ponto de Herói, mas isso permitirá que a utilize quantas vezes quiser durante toda uma cena. É tratada como uma ação de prender, mas tanto a ação quanto a reação são feitas com Teimosia. Cada personagem «preso» desse modo ganha o estado inconsciente no lugar do imobilizado enquanto sua energia fica dentro da personagem que a tenha absorvido. Para cada personagem absorvida desse modo, o sugador ganha um nível de saúde adicional que se soma a seus níveis normais de saúde.",
        "poderosa": true,
        "magica": true
    },
    {
        "atributo": "Teimosia",
        "nome": "Transformação",
        "descricao": "A personagem tem a capacidade de transformar as demais em um objeto (ou tipo de objeto), animal ou planta ao tocá-los. Por exemplo, poderia transformá- -las em frutas, em partes do corpo, em gatos ou em instrumentos musicais. Para conseguir, tem que gastar um ponto de Herói e superar uma ação de prender, mas tanto ela quanto seu alvo fazem o teste com Teimosia no lugar de Músculos. Se tiver sucesso, o alvo se transforma em um objeto ou animal indicado durante um turno. Com sucessos magníficos pode incrementar a duração da transformação: um: três turnos, dois: uma cena, três: o resto da história. A personagem transformada ganha qualquer estado que seja apropriado para sua nova forma (por exemplo, os objetos inanimados estarão paralisados) e seus atributos em destaque podem mudar a critério do mestre para que se adaptem à nova forma que tem. A personagem transformada pode fazer ações de soltar-se com dificuldade 3 para recuperar sua forma normal, mas com Teimosia no lugar de Músculos.",
        "magica": true,
        "especifica": true
    },
    {
        "atributo": "Teimosia",
        "nome": "Translúcido",
        "poderosa": true,
        "magica": true,
        "descricao": "A personagem é translúcida ou pode ficar em estado translúcido à vontade usando um movimento. Enquanto se encontrar nesse estado, a personagem recebe +1 nas ações de espreitar, esconder (somente para esconder a si) e assustar. Também recebe +1 nas reações diante de ações de atacar."
    },
    {
        "atributo": "Teimosia",
        "nome": "Troca cromática",
        "magica": true,
        "descricao": "A personagem tem o poder de trocar a cor das coisas lançando raios de cores que as transformam. Usar esse poder é considerado um movimento, a não ser que se use contra uma personagem, em cujo caso deve ser tratado como uma ação de lançar em que se usa Teimosia tanto para a ação quanto para resistir. Se tiver sucesso, no lugar do dano, a personagem troca de cor. Dependendo das circunstâncias, mudar de cor pode gerar um estado apropriado na personagem. Por exemplo, poderia ganhar estado escondido se a cor é a mesma que a do entorno, fazendo com que se camufle. Ou poderia ganhar para baixo se a cor deprime a personagem pelo motivo que for."
    },
    {
        "atributo": "Teimosia",
        "nome": "Valente",
        "descricao": "Você é difícil de amedrontar e não se deixa assustar facilmente pelas coisas assustadoras. Adicione um sucesso automático em qualquer reação diante de uma ação de assustar e você pode usar o dito sucesso automático para anular um magnífico. Se você tiver o defeito medo, o benefício dessa proeza não se aplica ante o objeto do seu medo."
    },
    {
        "atributo": "Teimosia",
        "nome": "Voar",
        "magica": true,
        "descricao": "Você tem a capacidade mágica de voar. Você é capaz de se mover duas áreas no lugar de uma usando um movimento e, além disso, ignora qualquer obstáculo que normalmente precisaria de uma ação de cair, saltar ou escalar."
    }
];

module.exports = proezas;