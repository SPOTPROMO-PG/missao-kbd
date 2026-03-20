// quizzes.js — quizzes reais por KBD (marca -> kbd -> perguntas)
// Estrutura: QUIZZES[marcaId][kbdId] = [ { pergunta, alternativas, gabarito, justificativa } ]

const QUIZZES = {
  "always": {
    "kbd1": [
      {
        "pergunta": "Qual é a execução obrigatória do KBD de Always no modo campo?",
        "alternativas": [
          "A) Garantir 50% da gôndola de absorventes com versões Suave",
          "B) Garantir 70% da gôndola de Always com versões Suave",
          "C) Garantir 70% da gôndola total da categoria com versões Secas",
          "D) Garantir 80% da gôndola de Always com qualquer versão da marca"
        ],
        "gabarito": "B",
        "justificativa": "O objetivo é ter 70% da gôndola de Always com versões Suave, medição em centímetros, considerando apenas absorventes Always e sem contar protetores diários; também traz o que entra como “Suave” e o que não pode ser considerado."
      },
      {
        "pergunta": "Qual é a forma correta de medir o KBD de Always Suave?",
        "alternativas": [
          "A) Por número de frentes",
          "B) Por quantidade de pacotes",
          "C) Em centímetros",
          "D) Por blocos visuais, sem medir"
        ],
        "gabarito": "C",
        "justificativa": "O objetivo é ter 70% da gôndola de Always com versões Suave, medição em centímetros, considerando apenas absorventes Always e sem contar protetores diários; também traz o que entra como “Suave” e o que não pode ser considerado."
      },
      {
        "pergunta": "Qual dos itens abaixo não deve ser contado na leitura do KBD de Always?",
        "alternativas": [
          "A) Always Ultra Suave",
          "B) Always Cobertura Suave",
          "C) Protetor diário Always",
          "D) Always Suave Noturno"
        ],
        "gabarito": "C",
        "justificativa": "O objetivo é ter 70% da gôndola de Always com versões Suave, medição em centímetros, considerando apenas absorventes Always e sem contar protetores diários; também traz o que entra como “Suave” e o que não pode ser considerado."
      },
      {
        "pergunta": "Em uma execução de gôndola, qual situação está correta segundo o guia?",
        "alternativas": [
          "A) Misturar versões Suave e Secas sem bloco, desde que sejam da marca Always",
          "B) Contar protetores diários como parte da execução Suave",
          "C) Medir por frentes, desde que a marca esteja bem exposta",
          "D) Considerar apenas absorventes Always e focar nas versões Suave"
        ],
        "gabarito": "D",
        "justificativa": "O objetivo é ter 70% da gôndola de Always com versões Suave, medição em centímetros, considerando apenas absorventes Always e sem contar protetores diários; também traz o que entra como “Suave” e o que não pode ser considerado."
      },
      {
        "pergunta": "Qual alternativa contém apenas versões que contam como “Suave” no KBD de Always?",
        "alternativas": [
          "A) Always Suave, Always Ultra Suave, Always Cobertura Suave e Always Suave Noturno",
          "B) Always Seca, Always Ultra Suave, protetor diário e Always Suave",
          "C) Always Cobertura Suave, Always Seca Noturno, protetor diário e Always Ultra",
          "D) Always Suave, protetor diário, Always Suave Noturno e Always Seca"
        ],
        "gabarito": "C",
        "justificativa": "O objetivo é ter 70% da gôndola de Always com versões Suave, medição em centímetros, considerando apenas absorventes Always e sem contar protetores diários; também traz o que entra como “Suave” e o que não pode ser considerado."
      }
    ]
  },
  "downy": {
    "kbd1": [
      {
        "pergunta": "Qual é a execução obrigatória para validar o KBD de Downy no Ponto Extra (Brisa)?",
        "alternativas": [
          "A) Ter qualquer ponto natural de Downy com no mínimo 2 versões",
          "B) Ter Ponto Extra de Downy com as versões obrigatórias",
          "C) Ter apenas Brisa de Verão no ponto extra",
          "D) Ter qualquer versão de Downy exposta fora da gôndola"
        ],
        "gabarito": "B",
        "justificativa": ""
      },
      {
        "pergunta": "Quais canais são elegíveis para esse KBD?",
        "alternativas": [
          "A) C&C, NMR/GMR, CLUB, LASA e HFS",
          "B) C&C, DPP, PERFUMARIA e HFS",
          "C) NMR/GMR, CLUB, DPP e PERFUMARIA",
          "D) Apenas C&C, CLUB e LASA"
        ],
        "gabarito": "A",
        "justificativa": ""
      },
      {
        "pergunta": "Para que o ponto extra seja considerado válido, quais versões precisam estar juntas OBRIGATORIAMENTE?",
        "alternativas": [
          "A) Brisa Suave e Verão Tropical",
          "B) Brisa de Verão e Brisa Intenso",
          "C) Brisa Intenso e Brisa Suave",
          "D) Verão Tropical e qualquer outra versão de Downy"
        ],
        "gabarito": "B",
        "justificativa": ""
      },
      {
        "pergunta": "Qual das situações abaixo invalida a execução do KBD?",
        "alternativas": [
          "A) Ter Brisa de Verão, Brisa Intenso e Brisa Suave no ponto extra",
          "B) Montar o ponto extra em um canal elegível",
          "C) Ter Brisa de Verão e Brisa Suave e Verão Tropical no ponto extra",
          "D) Expor Verão Tropical junto das versões obrigatórias"
        ],
        "gabarito": "C",
        "justificativa": ""
      },
      {
        "pergunta": "Qual alternativa representa corretamente as versões obrigatórias do KBD de Ponto Extra (Brisa)?",
        "alternativas": [
          "A) Brisa de Verão + Brisa Intenso + Brisa Suave ou Verão Tropical",
          "B) Brisa Suave + Verão Tropical + Brisa Intenso",
          "C) Brisa de Verão + Brisa Suave + Verão Tropical",
          "D) Brisa Intenso + Brisa Suave + Verão Tropical"
        ],
        "gabarito": "A",
        "justificativa": ""
      }
    ],
    "kbd2": [
      {
        "pergunta": "Qual é a execução obrigatória do KBD Downy | Bloco Azul (50%)?",
        "alternativas": [
          "A) Garantir 40% do espaço de Downy com versões coloridas",
          "B) Garantir 50% do espaço de Downy com Bloco Azul",
          "C) Garantir 50% da gôndola total da categoria com qualquer versão de Downy",
          "D) Garantir 70% do espaço de Downy com Brisa de Verão"
        ],
        "gabarito": "B",
        "justificativa": "garantir 50% do espaço de Downy com Bloco Azul, medir em centímetros pela fórmula cm Bloco Azul / cm Total Downy, considerar como bloco as versões Brisa de Verão, Brisa Intenso e Brisa Suave, não contar versões fora do bloco, considerar as versões disponíveis na loja, e os canais válidos são todos, exceto DPP e Perfumaria. Em caso de ruptura, a substituição deve ser por versões do mesmo bloco."
      },
      {
        "pergunta": "Como deve ser feita a medição correta desse KBD?",
        "alternativas": [
          "A) Pela quantidade de frentes de Downy azul",
          "B) Pela quantidade de SKUs disponíveis",
          "C) Em centímetros: cm Bloco Azul / cm Total Downy",
          "D) Em blocos visuais, sem necessidade de medir"
        ],
        "gabarito": "C",
        "justificativa": "garantir 50% do espaço de Downy com Bloco Azul, medir em centímetros pela fórmula cm Bloco Azul / cm Total Downy, considerar como bloco as versões Brisa de Verão, Brisa Intenso e Brisa Suave, não contar versões fora do bloco, considerar as versões disponíveis na loja, e os canais válidos são todos, exceto DPP e Perfumaria. Em caso de ruptura, a substituição deve ser por versões do mesmo bloco."
      },
      {
        "pergunta": "Quais versões fazem parte do Bloco Azul?",
        "alternativas": [
          "A) Brisa de Verão, Brisa Intenso e Brisa Suave",
          "B) Brisa de Verão, Alfazema e Lírios",
          "C) Brisa Intenso, Verão Tropical e Frescor da Primavera",
          "D) Brisa Suave, Verão Tropical e Alfazema"
        ],
        "gabarito": "A",
        "justificativa": "garantir 50% do espaço de Downy com Bloco Azul, medir em centímetros pela fórmula cm Bloco Azul / cm Total Downy, considerar como bloco as versões Brisa de Verão, Brisa Intenso e Brisa Suave, não contar versões fora do bloco, considerar as versões disponíveis na loja, e os canais válidos são todos, exceto DPP e Perfumaria. Em caso de ruptura, a substituição deve ser por versões do mesmo bloco."
      },
      {
        "pergunta": "Qual situação abaixo está incorreta segundo o guia?",
        "alternativas": [
          "A) Considerar as versões disponíveis na loja no momento da leitura",
          "B) Medir o espaço de Downy em centímetros",
          "C) Contar versões fora do Bloco Azul para completar o percentual",
          "D) Substituir por versões do mesmo bloco em caso de ruptura"
        ],
        "gabarito": "C",
        "justificativa": "garantir 50% do espaço de Downy com Bloco Azul, medir em centímetros pela fórmula cm Bloco Azul / cm Total Downy, considerar como bloco as versões Brisa de Verão, Brisa Intenso e Brisa Suave, não contar versões fora do bloco, considerar as versões disponíveis na loja, e os canais válidos são todos, exceto DPP e Perfumaria. Em caso de ruptura, a substituição deve ser por versões do mesmo bloco."
      },
      {
        "pergunta": "Em quais canais esse KBD é válido?",
        "alternativas": [
          "A) Apenas C&C, NMR/GMR e CLUB",
          "B) Todos os canais, exceto DPP e Perfumaria",
          "C) Apenas LASA, HFS e DPP",
          "D) Somente Perfumaria e DPP"
        ],
        "gabarito": "B",
        "justificativa": "garantir 50% do espaço de Downy com Bloco Azul, medir em centímetros pela fórmula cm Bloco Azul / cm Total Downy, considerar como bloco as versões Brisa de Verão, Brisa Intenso e Brisa Suave, não contar versões fora do bloco, considerar as versões disponíveis na loja, e os canais válidos são todos, exceto DPP e Perfumaria. Em caso de ruptura, a substituição deve ser por versões do mesmo bloco."
      }
    ],
    "kbd3": [
      {
        "pergunta": "Qual é a execução obrigatória do KBD Downy | Bloco Colorido (40%)?",
        "alternativas": [
          "A) Garantir 50% do espaço de Downy com qualquer versão colorida",
          "B) Garantir 40% do espaço de Downy com o Bloco Colorido",
          "C) Garantir 40% da gôndola total da categoria com Downy",
          "D) Garantir 70% do espaço de Downy com Verão Tropical"
        ],
        "gabarito": "B",
        "justificativa": "garantir 40% do espaço de Downy com o Bloco Colorido, medir em centímetros pela fórmula cm Bloco Colorido / cm Total Downy, considerar como bloco as versões Alfazema, Lírios, Verão Tropical e Frescor da Primavera, não contar versões fora do bloco, sempre considerar as versões disponíveis na loja, e os canais elegíveis são C&C, NMR/GMR, CLUB, LASA e HFS. Em caso de ruptura, a substituição deve ser por versões do mesmo bloco."
      },
      {
        "pergunta": "Como deve ser feita a medição correta desse KBD?",
        "alternativas": [
          "A) Pela quantidade de frentes do bloco",
          "B) Pela soma dos SKUs coloridos disponíveis",
          "C) Em centímetros: cm Bloco Colorido / cm Total Downy",
          "D) Pela presença visual do bloco na gôndola"
        ],
        "gabarito": "C",
        "justificativa": "garantir 40% do espaço de Downy com o Bloco Colorido, medir em centímetros pela fórmula cm Bloco Colorido / cm Total Downy, considerar como bloco as versões Alfazema, Lírios, Verão Tropical e Frescor da Primavera, não contar versões fora do bloco, sempre considerar as versões disponíveis na loja, e os canais elegíveis são C&C, NMR/GMR, CLUB, LASA e HFS. Em caso de ruptura, a substituição deve ser por versões do mesmo bloco."
      },
      {
        "pergunta": "Quais versões fazem parte do Bloco Colorido?",
        "alternativas": [
          "A) Alfazema, Lírios, Verão Tropical e Frescor da Primavera",
          "B) Brisa de Verão, Brisa Intenso, Brisa Suave e Verão Tropical",
          "C) Alfazema, Brisa Suave, Lírios e Frescor da Primavera",
          "D) Lírios, Brisa Intenso, Verão Tropical e Alfazema"
        ],
        "gabarito": "A",
        "justificativa": "garantir 40% do espaço de Downy com o Bloco Colorido, medir em centímetros pela fórmula cm Bloco Colorido / cm Total Downy, considerar como bloco as versões Alfazema, Lírios, Verão Tropical e Frescor da Primavera, não contar versões fora do bloco, sempre considerar as versões disponíveis na loja, e os canais elegíveis são C&C, NMR/GMR, CLUB, LASA e HFS. Em caso de ruptura, a substituição deve ser por versões do mesmo bloco."
      },
      {
        "pergunta": "Qual das situações abaixo está incorreta segundo o guia?",
        "alternativas": [
          "A) Considerar as versões disponíveis em loja no momento da leitura",
          "B) Substituir por versões do mesmo bloco em caso de ruptura",
          "C) Contar versões fora do Bloco Colorido para completar o percentual",
          "D) Medir o espaço de Downy em centímetros"
        ],
        "gabarito": "A",
        "justificativa": "garantir 40% do espaço de Downy com o Bloco Colorido, medir em centímetros pela fórmula cm Bloco Colorido / cm Total Downy, considerar como bloco as versões Alfazema, Lírios, Verão Tropical e Frescor da Primavera, não contar versões fora do bloco, sempre considerar as versões disponíveis na loja, e os canais elegíveis são C&C, NMR/GMR, CLUB, LASA e HFS. Em caso de ruptura, a substituição deve ser por versões do mesmo bloco."
      },
      {
        "pergunta": "Em quais canais esse KBD é elegível?",
        "alternativas": [
          "A) Todos os Canais",
          "B) Apenas C&C e NMR/GMR",
          "C) C&C, NMR/GMR, CLUB e LASA",
          "D) Somente DPP, HFS e Perfumaria"
        ],
        "gabarito": "C",
        "justificativa": "garantir 40% do espaço de Downy com o Bloco Colorido, medir em centímetros pela fórmula cm Bloco Colorido / cm Total Downy, considerar como bloco as versões Alfazema, Lírios, Verão Tropical e Frescor da Primavera, não contar versões fora do bloco, sempre considerar as versões disponíveis na loja, e os canais elegíveis são C&C, NMR/GMR, CLUB, LASA e HFS. Em caso de ruptura, a substituição deve ser por versões do mesmo bloco."
      }
    ]
  },
  "pantene": {
    "kbd1": [
      {
        "pergunta": "Qual é a execução obrigatória do KBD Pantene – Bond Repair (20%)?",
        "alternativas": [
          "A) Garantir 20% do espaço total da categoria cabelos para Pantene",
          "B) Garantir 20% do espaço de Pantene para Bond Repair",
          "C) Garantir 40% do espaço de Pantene para Bond Repair",
          "D) Garantir 20% da gôndola total com packs de Bond Repair"
        ],
        "gabarito": "B",
        "justificativa": "garantir 20% do espaço de Pantene para Bond Repair, medir em centímetros, excluir packs e Rio/Cachoeira Dourada, considerar apenas Pantene Bond Repair, e a recomendação é manter Bond Repair na metade de cima da gôndola. O KBD vale para todos os canais."
      },
      {
        "pergunta": "Como deve ser feita a medição correta desse KBD?",
        "alternativas": [
          "A) Por frentes",
          "B) Por quantidade de SKUs",
          "C) Em centímetros",
          "D) Por número de produtos expostos"
        ],
        "gabarito": "C",
        "justificativa": "garantir 20% do espaço de Pantene para Bond Repair, medir em centímetros, excluir packs e Rio/Cachoeira Dourada, considerar apenas Pantene Bond Repair, e a recomendação é manter Bond Repair na metade de cima da gôndola. O KBD vale para todos os canais."
      },
      {
        "pergunta": "O que deve ser excluído da leitura desse KBD?",
        "alternativas": [
          "A) Apenas packs",
          "B) Apenas Rio/Cachoeira Dourada",
          "C) Packs e Rio/Cachoeira Dourada",
          "D) Todas as versões de tratamento Pantene"
        ],
        "gabarito": "C",
        "justificativa": "garantir 20% do espaço de Pantene para Bond Repair, medir em centímetros, excluir packs e Rio/Cachoeira Dourada, considerar apenas Pantene Bond Repair, e a recomendação é manter Bond Repair na metade de cima da gôndola. O KBD vale para todos os canais."
      },
      {
        "pergunta": "Qual alternativa está correta sobre o que conta nesse KBD?",
        "alternativas": [
          "A) Somar Bond Repair e Rio/Cachoeira Dourada",
          "B) Somar apenas Pantene Bond Repair, sem packs e sem Rio/Cachoeira",
          "C) Contar qualquer tratamento Pantene que esteja no topo da gôndola",
          "D) Contar Bond Repair apenas se estiver em ponto extra"
        ],
        "gabarito": "B",
        "justificativa": "garantir 20% do espaço de Pantene para Bond Repair, medir em centímetros, excluir packs e Rio/Cachoeira Dourada, considerar apenas Pantene Bond Repair, e a recomendação é manter Bond Repair na metade de cima da gôndola. O KBD vale para todos os canais."
      },
      {
        "pergunta": "Qual situação abaixo está incorreta segundo o guia?",
        "alternativas": [
          "A) Medir o espaço de Bond Repair em centímetros",
          "B) Aplicar o KBD em todos os canais",
          "C) Contar packs para ajudar a completar o percentual",
          "D) Recomendar Bond Repair na metade de cima da gôndola"
        ],
        "gabarito": "C",
        "justificativa": "garantir 20% do espaço de Pantene para Bond Repair, medir em centímetros, excluir packs e Rio/Cachoeira Dourada, considerar apenas Pantene Bond Repair, e a recomendação é manter Bond Repair na metade de cima da gôndola. O KBD vale para todos os canais."
      }
    ],
    "kbd2": [
      {
        "pergunta": "Qual é a execução obrigatória do KBD Pantene – Top Versões (40%)?",
        "alternativas": [
          "A) Garantir 20% do espaço de Pantene para Top Versões",
          "B) Garantir 40% do espaço de Pantene para Top Versões",
          "C) Garantir 40% do espaço da categoria cabelos para Pantene",
          "D) Garantir 50% do espaço de Pantene para Bond Repair"
        ],
        "gabarito": "B",
        "justificativa": "garantir 40% do espaço de Pantene para Top Versões, medir em centímetros, excluir packs e Rio/Cachoeira Dourada, considerar como Top Versões a soma de Bambu + Colágeno + Biotinamina B3, e a recomendação é executar na metade de cima da gôndola. O KBD vale para todos os canais."
      },
      {
        "pergunta": "Como deve ser feita a medição correta desse KBD?",
        "alternativas": [
          "A) Por frentes",
          "B) Por número de SKUs",
          "C) Em centímetros",
          "D) Por quantidade de embalagens"
        ],
        "gabarito": "C",
        "justificativa": "garantir 40% do espaço de Pantene para Top Versões, medir em centímetros, excluir packs e Rio/Cachoeira Dourada, considerar como Top Versões a soma de Bambu + Colágeno + Biotinamina B3, e a recomendação é executar na metade de cima da gôndola. O KBD vale para todos os canais."
      },
      {
        "pergunta": "Quais versões compõem as Top Versões de Pantene nesse KBD?",
        "alternativas": [
          "A) Bond Repair, Bambu e Colágeno",
          "B) Bambu, Colágeno e Biotinamina B3",
          "C) Colágeno, Óleo Pantene e Biotinamina B3",
          "D) Bambu, Rio Dourado e Biotinamina B3"
        ],
        "gabarito": "B",
        "justificativa": "garantir 40% do espaço de Pantene para Top Versões, medir em centímetros, excluir packs e Rio/Cachoeira Dourada, considerar como Top Versões a soma de Bambu + Colágeno + Biotinamina B3, e a recomendação é executar na metade de cima da gôndola. O KBD vale para todos os canais."
      },
      {
        "pergunta": "O que deve ser excluído da leitura desse KBD?",
        "alternativas": [
          "A) Apenas packs",
          "B) Apenas Rio/Cachoeira Dourada",
          "C) Packs e Rio/Cachoeira Dourada",
          "D) Todas as linhas de tratamento Pantene fora da metade superior"
        ],
        "gabarito": "C",
        "justificativa": "garantir 40% do espaço de Pantene para Top Versões, medir em centímetros, excluir packs e Rio/Cachoeira Dourada, considerar como Top Versões a soma de Bambu + Colágeno + Biotinamina B3, e a recomendação é executar na metade de cima da gôndola. O KBD vale para todos os canais."
      },
      {
        "pergunta": "Qual situação abaixo está incorreta segundo o guia?",
        "alternativas": [
          "A) Somar Bambu, Colágeno e Biotinamina B3",
          "B) Medir o espaço em centímetros",
          "C) Contar packs para ajudar a completar o percentual",
          "D) Aplicar o KBD em todos os canais"
        ],
        "gabarito": "C",
        "justificativa": "garantir 40% do espaço de Pantene para Top Versões, medir em centímetros, excluir packs e Rio/Cachoeira Dourada, considerar como Top Versões a soma de Bambu + Colágeno + Biotinamina B3, e a recomendação é executar na metade de cima da gôndola. O KBD vale para todos os canais."
      }
    ],
    "kbd3": [
      {
        "pergunta": "Qual é a execução obrigatória do KBD Pantene – Óleo?",
        "alternativas": [
          "A) Executar 2 frentes de Óleo Pantene na gôndola",
          "B) Executar no mínimo 2 pontos de contato com Óleo Pantene",
          "C) Executar 2 checkouts com Óleo Pantene",
          "D) Executar 2 SKUs de Óleo Pantene no ponto natural"
        ],
        "gabarito": "B",
        "justificativa": "executar no mínimo 2 pontos de contato com Óleo Pantene, podendo incluir checkout/balcão, clipstrip, ilha, ponta de gôndola e display. O checkout vale apenas 1 ponto, não pode contar ponto natural, e os canais CLUB e HFS não são elegíveis. Também conta como clipstrip quando houver gôndola de finalizadores com Óleo Pantene, desde que esteja fora do ponto natural."
      },
      {
        "pergunta": "Quais formatos podem ser considerados como pontos de contato válidos para esse KBD?",
        "alternativas": [
          "A) Apenas checkout e ponta de gôndola",
          "B) Checkout/balcão, clipstrip, ilha, ponta de gôndola e display",
          "C) Apenas display e ponto natural",
          "D) Checkout, gôndola natural e ilha"
        ],
        "gabarito": "B",
        "justificativa": "executar no mínimo 2 pontos de contato com Óleo Pantene, podendo incluir checkout/balcão, clipstrip, ilha, ponta de gôndola e display. O checkout vale apenas 1 ponto, não pode contar ponto natural, e os canais CLUB e HFS não são elegíveis. Também conta como clipstrip quando houver gôndola de finalizadores com Óleo Pantene, desde que esteja fora do ponto natural."
      },
      {
        "pergunta": "Qual das situações abaixo não pode ser considerada correta?",
        "alternativas": [
          "A) Ter Óleo Pantene em clipstrip e em ilha",
          "B) Ter Óleo Pantene em display e ponta de gôndola",
          "C) Contar 2 checkouts como 2 pontos de contato",
          "D) Executar Óleo Pantene fora do ponto natural"
        ],
        "gabarito": "C",
        "justificativa": "executar no mínimo 2 pontos de contato com Óleo Pantene, podendo incluir checkout/balcão, clipstrip, ilha, ponta de gôndola e display. O checkout vale apenas 1 ponto, não pode contar ponto natural, e os canais CLUB e HFS não são elegíveis. Também conta como clipstrip quando houver gôndola de finalizadores com Óleo Pantene, desde que esteja fora do ponto natural."
      },
      {
        "pergunta": "Como deve ser tratada uma gôndola de finalizadores com Óleo Pantene, segundo o guia?",
        "alternativas": [
          "A) Deve ser lida como ponto natural",
          "B) Deve ser desconsiderada",
          "C) Deve ser lida como clipstrip",
          "D) Deve contar apenas em canal CLUB"
        ],
        "gabarito": "C",
        "justificativa": "executar no mínimo 2 pontos de contato com Óleo Pantene, podendo incluir checkout/balcão, clipstrip, ilha, ponta de gôndola e display. O checkout vale apenas 1 ponto, não pode contar ponto natural, e os canais CLUB e HFS não são elegíveis. Também conta como clipstrip quando houver gôndola de finalizadores com Óleo Pantene, desde que esteja fora do ponto natural."
      },
      {
        "pergunta": "Em quais canais esse KBD não é elegível?",
        "alternativas": [
          "A) C&C e LASA",
          "B) NMR/GMR e CLUB",
          "C) CLUB e HFS",
          "D) HFS e DPP"
        ],
        "gabarito": "C",
        "justificativa": "executar no mínimo 2 pontos de contato com Óleo Pantene, podendo incluir checkout/balcão, clipstrip, ilha, ponta de gôndola e display. O checkout vale apenas 1 ponto, não pode contar ponto natural, e os canais CLUB e HFS não são elegíveis. Também conta como clipstrip quando houver gôndola de finalizadores com Óleo Pantene, desde que esteja fora do ponto natural."
      }
    ],
    "kbd4": [
      {
        "pergunta": "Qual é a execução obrigatória do KBD Pantene – Rio/Cachoeira Dourada?",
        "alternativas": [
          "A) Executar tratamentos de Pantene apenas em ponto extra",
          "B) Executar tratamentos de Pantene em Rio ou Cachoeira Dourada",
          "C) Executar qualquer versão de Pantene com 14 frentes ou mais",
          "D) Executar somente Óleo Pantene na gôndola"
        ],
        "gabarito": "B",
        "justificativa": "executar tratamentos de Pantene em Rio ou Cachoeira Dourada na gôndola de cabelos; Cachoeira Dourada só vale quando tiver menos de 14 frentes; e o KBD é válido em todos os canais, exceto CLUB. O guia também deixa claro que não pode considerar CLUB e não pode executar Cachoeira com 14 ou mais frentes."
      },
      {
        "pergunta": "Em qual local essa execução deve acontecer, segundo o guia?",
        "alternativas": [
          "A) Na área de checkout",
          "B) Na ponta de gôndola",
          "C) Na gôndola de Cabelos (Pantene)",
          "D) Em clipstrip obrigatoriamente"
        ],
        "gabarito": "C",
        "justificativa": "executar tratamentos de Pantene em Rio ou Cachoeira Dourada na gôndola de cabelos; Cachoeira Dourada só vale quando tiver menos de 14 frentes; e o KBD é válido em todos os canais, exceto CLUB. O guia também deixa claro que não pode considerar CLUB e não pode executar Cachoeira com 14 ou mais frentes."
      },
      {
        "pergunta": "Quando a execução pode ser considerada como Cachoeira Dourada?",
        "alternativas": [
          "A) Quando tiver exatamente 14 frentes",
          "B) Quando tiver 14 frentes ou mais",
          "C) Quando tiver menos de 14 frentes",
          "D) Quando tiver qualquer quantidade de frentes"
        ],
        "gabarito": "C",
        "justificativa": "executar tratamentos de Pantene em Rio ou Cachoeira Dourada na gôndola de cabelos; Cachoeira Dourada só vale quando tiver menos de 14 frentes; e o KBD é válido em todos os canais, exceto CLUB. O guia também deixa claro que não pode considerar CLUB e não pode executar Cachoeira com 14 ou mais frentes."
      },
      {
        "pergunta": "Qual das situações abaixo não atende a definição do KBD?",
        "alternativas": [
          "A) Executar Rio Dourado com tratamentos Pantene",
          "B) Executar Cachoeira Dourada com menos de 14 frentes",
          "C) Executar Cachoeira Dourada com 14 ou mais frentes",
          "D) Executar na gôndola de cabelos"
        ],
        "gabarito": "C",
        "justificativa": "executar tratamentos de Pantene em Rio ou Cachoeira Dourada na gôndola de cabelos; Cachoeira Dourada só vale quando tiver menos de 14 frentes; e o KBD é válido em todos os canais, exceto CLUB. O guia também deixa claro que não pode considerar CLUB e não pode executar Cachoeira com 14 ou mais frentes."
      },
      {
        "pergunta": "Qual canal não é elegível para esse KBD?",
        "alternativas": [
          "A) C&C",
          "B) NMR/GMR",
          "C) HFS",
          "D) CLUB"
        ],
        "gabarito": "D",
        "justificativa": "executar tratamentos de Pantene em Rio ou Cachoeira Dourada na gôndola de cabelos; Cachoeira Dourada só vale quando tiver menos de 14 frentes; e o KBD é válido em todos os canais, exceto CLUB. O guia também deixa claro que não pode considerar CLUB e não pode executar Cachoeira com 14 ou mais frentes."
      }
    ]
  },
  "pampers": {
    "kbd1": [
      {
        "pergunta": "Qual é a execução obrigatória desse KBD?",
        "alternativas": [
          "A) Ter um ponto extra de Pampers com 100% dos produtos em tamanho G",
          "B) Executar ponto extra de Pampers com pelo menos 50% de fraldas XG, XXG ou XXXG",
          "C) Executar ponto natural de Pampers com tamanhos variados",
          "D) Ter os três tamanhos grandes obrigatoriamente no ponto extra"
        ],
        "gabarito": "B",
        "justificativa": "executar Ponto Extra de Pampers com pelo menos 50% de fraldas XG, XXG ou XXXG. Os canais elegíveis são C&C, NMR/GMR, CLUB e LASA. O guia também deixa claro que não é obrigatório ter os três tamanhos, que HFS e Perfumaria não são elegíveis, e que pode haver concorrência no mesmo ponto extra, desde que Pampers com tamanhos grandes esteja executado."
      },
      {
        "pergunta": "Quais canais são elegíveis para esse KBD?",
        "alternativas": [
          "A) C&C, NMR/GMR, CLUB e LASA",
          "B) C&C, HFS, CLUB e Perfumaria",
          "C) NMR/GMR, HFS, LASA e DPP",
          "D) Apenas C&C e NMR/GMR"
        ],
        "gabarito": "A",
        "justificativa": "executar Ponto Extra de Pampers com pelo menos 50% de fraldas XG, XXG ou XXXG. Os canais elegíveis são C&C, NMR/GMR, CLUB e LASA. O guia também deixa claro que não é obrigatório ter os três tamanhos, que HFS e Perfumaria não são elegíveis, e que pode haver concorrência no mesmo ponto extra, desde que Pampers com tamanhos grandes esteja executado."
      },
      {
        "pergunta": "O que o guia diz sobre os tamanhos XG, XXG e XXXG?",
        "alternativas": [
          "A) É obrigatório ter os três tamanhos juntos",
          "B) Basta ter um dos tamanhos grandes para já valer, desde que cumpra a regra",
          "C) Só vale se tiver XXG e XXXG juntos",
          "D) O tamanho XG não conta como tamanho grande"
        ],
        "gabarito": "B",
        "justificativa": "executar Ponto Extra de Pampers com pelo menos 50% de fraldas XG, XXG ou XXXG. Os canais elegíveis são C&C, NMR/GMR, CLUB e LASA. O guia também deixa claro que não é obrigatório ter os três tamanhos, que HFS e Perfumaria não são elegíveis, e que pode haver concorrência no mesmo ponto extra, desde que Pampers com tamanhos grandes esteja executado."
      },
      {
        "pergunta": "Qual das situações abaixo não pode ser considerada correta?",
        "alternativas": [
          "A) Ter concorrência no mesmo ponto extra, desde que Pampers tamanhos grandes esteja executado",
          "B) Validar a execução em canal HFS",
          "C) Ter no ponto extra fraldas Pampers XG ocupando pelo menos metade do espaço",
          "D) Montar o ponto extra em canal LASA"
        ],
        "gabarito": "B",
        "justificativa": "executar Ponto Extra de Pampers com pelo menos 50% de fraldas XG, XXG ou XXXG. Os canais elegíveis são C&C, NMR/GMR, CLUB e LASA. O guia também deixa claro que não é obrigatório ter os três tamanhos, que HFS e Perfumaria não são elegíveis, e que pode haver concorrência no mesmo ponto extra, desde que Pampers com tamanhos grandes esteja executado."
      },
      {
        "pergunta": "Qual alternativa representa corretamente uma execução válida?",
        "alternativas": [
          "A) Ponto extra de Pampers em C&C com 50% ou mais de XG/XXG/XXXG",
          "B) Ponto natural de Pampers em HFS com tamanhos RN e P",
          "C) Ponto extra em Perfumaria com qualquer tamanho de Pampers",
          "D) Ponto extra de Pampers com exigência obrigatória dos três tamanhos grandes"
        ],
        "gabarito": "A",
        "justificativa": "executar Ponto Extra de Pampers com pelo menos 50% de fraldas XG, XXG ou XXXG. Os canais elegíveis são C&C, NMR/GMR, CLUB e LASA. O guia também deixa claro que não é obrigatório ter os três tamanhos, que HFS e Perfumaria não são elegíveis, e que pode haver concorrência no mesmo ponto extra, desde que Pampers com tamanhos grandes esteja executado."
      }
    ],
    "kbd2": [
      {
        "pergunta": "Como deve ser feita a medição correta do KBD Pampers – Pants?",
        "alternativas": [
          "A) Por frentes de Pampers Pants",
          "B) Em centímetros: cm Pants / cm Total Pampers",
          "C) Por quantidade de pacotes Pants na loja",
          "D) Por número de tamanhos disponíveis"
        ],
        "gabarito": "B",
        "justificativa": "edir em centímetros pela fórmula cm Pants / cm Total Pampers, somando apenas as versões Ajuste Total, Super Pants, PC Pants e Splashers; considerar somente as versões que existem na loja; e o objetivo varia por canal/região, então deve ser consultada a tabela do guia. Se não houver cadastro/ruptura de Total Pants, o KBD fica não válido e deve ser marcado como não executando."
      },
      {
        "pergunta": "Quais versões contam para esse KBD?",
        "alternativas": [
          "A) Ajuste Total, Super Pants, PC Pants e Splashers",
          "B) Ajuste Total, Premium Care, Confort Sec e Splashers",
          "C) Super Pants, Premium, XXG e Splashers",
          "D) Apenas Ajuste Total e Super Pants"
        ],
        "gabarito": "A",
        "justificativa": "edir em centímetros pela fórmula cm Pants / cm Total Pampers, somando apenas as versões Ajuste Total, Super Pants, PC Pants e Splashers; considerar somente as versões que existem na loja; e o objetivo varia por canal/região, então deve ser consultada a tabela do guia. Se não houver cadastro/ruptura de Total Pants, o KBD fica não válido e deve ser marcado como não executando."
      },
      {
        "pergunta": "O que deve ser feito quando não houver cadastro ou houver ruptura de Total Pants na loja?",
        "alternativas": [
          "A) Validar com qualquer versão Pampers disponível",
          "B) Substituir por Premium e seguir a leitura",
          "C) Considerar o KBD não válido e marcar como não executando",
          "D) Medir apenas o total da categoria e estimar o percentual"
        ],
        "gabarito": "C",
        "justificativa": "edir em centímetros pela fórmula cm Pants / cm Total Pampers, somando apenas as versões Ajuste Total, Super Pants, PC Pants e Splashers; considerar somente as versões que existem na loja; e o objetivo varia por canal/região, então deve ser consultada a tabela do guia. Se não houver cadastro/ruptura de Total Pants, o KBD fica não válido e deve ser marcado como não executando."
      },
      {
        "pergunta": "Qual das situações abaixo está incorreta segundo o guia?",
        "alternativas": [
          "A) Somar apenas as versões Pants",
          "B) Considerar apenas versões que existem na loja",
          "C) Ignorar o objetivo por região/canal",
          "D) Medir em centímetros"
        ],
        "gabarito": "C",
        "justificativa": "edir em centímetros pela fórmula cm Pants / cm Total Pampers, somando apenas as versões Ajuste Total, Super Pants, PC Pants e Splashers; considerar somente as versões que existem na loja; e o objetivo varia por canal/região, então deve ser consultada a tabela do guia. Se não houver cadastro/ruptura de Total Pants, o KBD fica não válido e deve ser marcado como não executando."
      },
      {
        "pergunta": "Sobre o objetivo desse KBD, qual alternativa está correta?",
        "alternativas": [
          "A) O objetivo é fixo para todos os canais",
          "B) O objetivo só muda entre marcas concorrentes",
          "C) O objetivo por canal deve ser consultado na tabela do guia",
          "D) O objetivo é sempre 50% em São Paulo"
        ],
        "gabarito": "C",
        "justificativa": "edir em centímetros pela fórmula cm Pants / cm Total Pampers, somando apenas as versões Ajuste Total, Super Pants, PC Pants e Splashers; considerar somente as versões que existem na loja; e o objetivo varia por canal/região, então deve ser consultada a tabela do guia. Se não houver cadastro/ruptura de Total Pants, o KBD fica não válido e deve ser marcado como não executando."
      }
    ],
    "kbd3": [
      {
        "pergunta": "Como deve ser feita a medição correta desse KBD?",
        "alternativas": [
          "A) Por frentes de Pampers Premium",
          "B) Em centímetros: cm Pants + Premium / cm Total Pampers",
          "C) Pela quantidade de pacotes Pants e Premium",
          "D) Pela soma dos tamanhos disponíveis"
        ],
        "gabarito": "B",
        "justificativa": "medir em centímetros pela fórmula cm Pants + Premium / cm Total Pampers; somar apenas Ajuste Total, Super Pants, PC Pants, Splashers e Premium; considerar apenas as versões que existem na loja; o objetivo por canal deve ser consultado na tabela; e, se não houver cadastro/ruptura de Total Pants, o KBD fica não válido. O guia também reforça que não pode aplicar fora do Sul nem contar versões fora do grupo Pants + Premium."
      },
      {
        "pergunta": "Quais versões entram no cálculo desse KBD?",
        "alternativas": [
          "A) Ajuste Total, Super Pants, PC Pants, Splashers e Premium",
          "B) Ajuste Total, Premium Care, Confort Sec e Splashers",
          "C) Super Pants, Premium, RN e P",
          "D) Apenas Pants e Confort Sec"
        ],
        "gabarito": "A",
        "justificativa": "medir em centímetros pela fórmula cm Pants + Premium / cm Total Pampers; somar apenas Ajuste Total, Super Pants, PC Pants, Splashers e Premium; considerar apenas as versões que existem na loja; o objetivo por canal deve ser consultado na tabela; e, se não houver cadastro/ruptura de Total Pants, o KBD fica não válido. O guia também reforça que não pode aplicar fora do Sul nem contar versões fora do grupo Pants + Premium."
      },
      {
        "pergunta": "Qual das situações abaixo torna a leitura incorreta?",
        "alternativas": [
          "A) Considerar apenas versões que existem na loja",
          "B) Consultar o objetivo na tabela por canal",
          "C) Aplicar o KBD em lojas fora da região Sul",
          "D) Somar Pants + Premium no cálculo"
        ],
        "gabarito": "C",
        "justificativa": "medir em centímetros pela fórmula cm Pants + Premium / cm Total Pampers; somar apenas Ajuste Total, Super Pants, PC Pants, Splashers e Premium; considerar apenas as versões que existem na loja; o objetivo por canal deve ser consultado na tabela; e, se não houver cadastro/ruptura de Total Pants, o KBD fica não válido. O guia também reforça que não pode aplicar fora do Sul nem contar versões fora do grupo Pants + Premium."
      },
      {
        "pergunta": "O que deve ser feito se não houver cadastro ou houver ruptura de Total Pants?",
        "alternativas": [
          "A) Validar com Premium apenas",
          "B) Considerar o KBD não válido e marcar como não executando",
          "C) Substituir por qualquer versão Pampers",
          "D) Medir só o Premium e seguir normalmente"
        ],
        "gabarito": "B",
        "justificativa": "medir em centímetros pela fórmula cm Pants + Premium / cm Total Pampers; somar apenas Ajuste Total, Super Pants, PC Pants, Splashers e Premium; considerar apenas as versões que existem na loja; o objetivo por canal deve ser consultado na tabela; e, se não houver cadastro/ruptura de Total Pants, o KBD fica não válido. O guia também reforça que não pode aplicar fora do Sul nem contar versões fora do grupo Pants + Premium."
      },
      {
        "pergunta": "Qual alternativa está correta segundo o guia?",
        "alternativas": [
          "A) Pode contar versões fora do grupo Pants + Premium para ajudar no percentual",
          "B) O KBD vale para qualquer região, desde que tenha Premium",
          "C) O objetivo por canal deve ser consultado na tabela do guia",
          "D) Premium entra apenas como material de apoio e não no cálculo"
        ],
        "gabarito": "C",
        "justificativa": "medir em centímetros pela fórmula cm Pants + Premium / cm Total Pampers; somar apenas Ajuste Total, Super Pants, PC Pants, Splashers e Premium; considerar apenas as versões que existem na loja; o objetivo por canal deve ser consultado na tabela; e, se não houver cadastro/ruptura de Total Pants, o KBD fica não válido. O guia também reforça que não pode aplicar fora do Sul nem contar versões fora do grupo Pants + Premium."
      }
    ],
    "kbd4": [
      {
        "pergunta": "Qual é a execução obrigatória desse KBD?",
        "alternativas": [
          "A) Executar qualquer material de Pampers na gôndola",
          "B) Executar materiais de Vale Night na gôndola + material com ícone de mamadeira",
          "C) Executar apenas fraldas Pampers Vale Night no ponto natural",
          "D) Executar ponto extra com qualquer comunicação da marca"
        ],
        "gabarito": "B",
        "justificativa": "executar materiais de Vale Night na gôndola + material com ícone de mamadeira. Os materiais válidos são faixa, fita, precificador, wobbler e cartaz. Os canais elegíveis são C&C, NMR/GMR, CLUB, LASA, HFS e Perfumaria, e DPP não é elegível. O guia também deixa claro que não pode executar sem comunicação e sem o ícone de mamadeira."
      },
      {
        "pergunta": "Quais materiais são válidos para esse KBD?",
        "alternativas": [
          "A) Cubo, topo de ilha, display e faixa",
          "B) Faixa, fita, precificador, wobbler e cartaz",
          "C) Apenas wobbler e cartaz",
          "D) Clipstrip, faixa, cartaz e display"
        ],
        "gabarito": "B",
        "justificativa": "executar materiais de Vale Night na gôndola + material com ícone de mamadeira. Os materiais válidos são faixa, fita, precificador, wobbler e cartaz. Os canais elegíveis são C&C, NMR/GMR, CLUB, LASA, HFS e Perfumaria, e DPP não é elegível. O guia também deixa claro que não pode executar sem comunicação e sem o ícone de mamadeira."
      },
      {
        "pergunta": "Qual canal não é elegível para esse KBD?",
        "alternativas": [
          "A) HFS",
          "B) CLUB",
          "C) Perfumaria",
          "D) DPP"
        ],
        "gabarito": "D",
        "justificativa": "executar materiais de Vale Night na gôndola + material com ícone de mamadeira. Os materiais válidos são faixa, fita, precificador, wobbler e cartaz. Os canais elegíveis são C&C, NMR/GMR, CLUB, LASA, HFS e Perfumaria, e DPP não é elegível. O guia também deixa claro que não pode executar sem comunicação e sem o ícone de mamadeira."
      },
      {
        "pergunta": "Qual das situações abaixo não pode ser considerada correta?",
        "alternativas": [
          "A) Executar faixa de Vale Night com ícone de mamadeira na gôndola",
          "B) Executar wobbler e cartaz de Vale Night com comunicação correta",
          "C) Executar material de Vale Night sem comunicação ou sem ícone de mamadeira",
          "D) Validar a execução em canal LASA"
        ],
        "gabarito": "C",
        "justificativa": "executar materiais de Vale Night na gôndola + material com ícone de mamadeira. Os materiais válidos são faixa, fita, precificador, wobbler e cartaz. Os canais elegíveis são C&C, NMR/GMR, CLUB, LASA, HFS e Perfumaria, e DPP não é elegível. O guia também deixa claro que não pode executar sem comunicação e sem o ícone de mamadeira."
      },
      {
        "pergunta": "Qual alternativa representa corretamente o que conta nesse KBD?",
        "alternativas": [
          "A) Qualquer um dos materiais Vale Night na gôndola, com comunicação + ícone de mamadeira",
          "B) Apenas ponto extra com cubo e topo de ilha",
          "C) Qualquer material Pampers, mesmo sem ícone de mamadeira",
          "D) Apenas precificador, desde que esteja no checkout"
        ],
        "gabarito": "A",
        "justificativa": "executar materiais de Vale Night na gôndola + material com ícone de mamadeira. Os materiais válidos são faixa, fita, precificador, wobbler e cartaz. Os canais elegíveis são C&C, NMR/GMR, CLUB, LASA, HFS e Perfumaria, e DPP não é elegível. O guia também deixa claro que não pode executar sem comunicação e sem o ícone de mamadeira."
      }
    ],
    "kbd5": [
      {
        "pergunta": "Qual é a execução correta para validar esse KBD?",
        "alternativas": [
          "A) Executar materiais de Vale Night na gôndola natural",
          "B) Executar ponto extra com materiais de Vale Night + material com ícone de mamadeira",
          "C) Executar apenas cartaz de Vale Night no checkout",
          "D) Executar qualquer ponto extra de Pampers, mesmo sem comunicação"
        ],
        "gabarito": "B",
        "justificativa": ""
      },
      {
        "pergunta": "Qual é o canal elegível para esse KBD?",
        "alternativas": [
          "A) Somente FARMA (DPP)",
          "B) HFS",
          "C) C&C",
          "D) CLUB e LASA"
        ],
        "gabarito": "A",
        "justificativa": ""
      },
      {
        "pergunta": "Quais materiais são válidos para esse KBD?",
        "alternativas": [
          "A) Faixa, fita, wobbler e cartaz",
          "B) Apenas cubo e topo de ilha",
          "C) Clipstrip, display, faixa e precificador",
          "D) Cubo, precificador, wobbler, cartaz e topo de ilha"
        ],
        "gabarito": "D",
        "justificativa": ""
      },
      {
        "pergunta": "Qual das situações abaixo não pode ser considerada correta?",
        "alternativas": [
          "A) Usar topo de ilha como um dos materiais válidos",
          "B) Executar ponto extra em FARMA com cubo e comunicação correta",
          "C) Validar a execução em canal fora de DPP",
          "D) Executar ponto extra com cartaz e ícone de mamadeira"
        ],
        "gabarito": "C",
        "justificativa": ""
      },
      {
        "pergunta": "Qual alternativa representa corretamente o que conta nesse KBD?",
        "alternativas": [
          "A) Qualquer material Pampers em qualquer canal",
          "B) Ponto extra com comunicação Vale Night e ícone de mamadeira",
          "C) Ponto extra sem ícone, desde que tenha cartaz",
          "D) Qualquer ponto natural de Pampers com boa exposição"
        ],
        "gabarito": "B",
        "justificativa": ""
      }
    ]
  },
  "secret": {
    "kbd1": [
      {
        "pergunta": "Qual é a execução obrigatória desse KBD?",
        "alternativas": [
          "A) Executar no mínimo 2 bandejas de Secret por loja",
          "B) Executar 1 bandeja de Secret nas prateleiras superiores",
          "C) Executar 2 bandejas de qualquer desodorante da categoria",
          "D) Executar 2 bandejas de Secret apenas em roll-on"
        ],
        "gabarito": "A",
        "justificativa": "garantir 2 bandejas de Secret na loja. Esse KBD vale apenas para os canais FARMA (DPP) e HFS. A lâmina também traz como recomendação posicionar as bandejas nas prateleiras superiores. Portanto, os pontos centrais para avaliação são: quantidade mínima de bandejas, canal elegível e diferença entre regra obrigatória e recomendação de execução."
      },
      {
        "pergunta": "Em quais canais esse KBD é elegível?",
        "alternativas": [
          "A) C&C e CLUB",
          "B) DPP e HFS",
          "C) LASA e NMR/GMR",
          "D) DPP e Perfumaria"
        ],
        "gabarito": "B",
        "justificativa": "garantir 2 bandejas de Secret na loja. Esse KBD vale apenas para os canais FARMA (DPP) e HFS. A lâmina também traz como recomendação posicionar as bandejas nas prateleiras superiores. Portanto, os pontos centrais para avaliação são: quantidade mínima de bandejas, canal elegível e diferença entre regra obrigatória e recomendação de execução."
      },
      {
        "pergunta": "O que o guia traz como recomendação de execução?",
        "alternativas": [
          "A) Bandejas na parte inferior da gôndola",
          "B) Bandejas no checkout",
          "C) Bandejas nas prateleiras superiores",
          "D) Bandejas apenas na área de sprays"
        ],
        "gabarito": "C",
        "justificativa": "garantir 2 bandejas de Secret na loja. Esse KBD vale apenas para os canais FARMA (DPP) e HFS. A lâmina também traz como recomendação posicionar as bandejas nas prateleiras superiores. Portanto, os pontos centrais para avaliação são: quantidade mínima de bandejas, canal elegível e diferença entre regra obrigatória e recomendação de execução."
      },
      {
        "pergunta": "Qual das situações abaixo não atende ao KBD?",
        "alternativas": [
          "A) Loja DPP com 2 bandejas de Secret",
          "B) Loja HFS com 2 bandejas de Secret",
          "C) Loja fora de DPP/HFS com 2 bandejas de Secret",
          "D) Loja DPP com bandejas de Secret nas prateleiras superiores"
        ],
        "gabarito": "C",
        "justificativa": "garantir 2 bandejas de Secret na loja. Esse KBD vale apenas para os canais FARMA (DPP) e HFS. A lâmina também traz como recomendação posicionar as bandejas nas prateleiras superiores. Portanto, os pontos centrais para avaliação são: quantidade mínima de bandejas, canal elegível e diferença entre regra obrigatória e recomendação de execução."
      },
      {
        "pergunta": "O que conta para validar esse KBD?",
        "alternativas": [
          "A) Apenas 1 bandeja bem posicionada",
          "B) Bandejas de Secret, com mínimo de 2",
          "C) Qualquer bandeja da categoria desodorantes",
          "D) Apenas produtos Secret na área de sprays"
        ],
        "gabarito": "B",
        "justificativa": "garantir 2 bandejas de Secret na loja. Esse KBD vale apenas para os canais FARMA (DPP) e HFS. A lâmina também traz como recomendação posicionar as bandejas nas prateleiras superiores. Portanto, os pontos centrais para avaliação são: quantidade mínima de bandejas, canal elegível e diferença entre regra obrigatória e recomendação de execução."
      }
    ],
    "kbd2": [
      {
        "pergunta": "Qual é a execução obrigatória desse KBD?",
        "alternativas": [
          "A) Executar Secret com pelo menos 10 frentes ou 2 bandejas",
          "B) Executar Secret com pelo menos 15 frentes na gôndola ou 3 bandejas",
          "C) Executar 3 bandejas de qualquer desodorante da categoria",
          "D) Executar 15 frentes apenas em lojas DPP"
        ],
        "gabarito": "B",
        "justificativa": "executar Secret em bloco de pelo menos 15 frentes na gôndola ou com 3 bandejas de Secret. Os canais elegíveis são C&C, NMR/GMR, CLUB, LASA e Perfumaria. A lâmina também deixa claro o que não pode: considerar DPP e HFS, que não são elegíveis, e validar execução com menos de 15 frentes ou menos de 3 bandejas. O ponto central desse KBD é entender que existem duas formas válidas de execução: por bloco em gôndola ou por bandejas."
      },
      {
        "pergunta": "Quais canais são elegíveis para esse KBD?",
        "alternativas": [
          "A) DPP e HFS",
          "B) Apenas C&C e CLUB",
          "C) C&C, NMR/GMR, CLUB, LASA e Perfumaria",
          "D) Somente HFS, LASA e DPP"
        ],
        "gabarito": "C",
        "justificativa": "executar Secret em bloco de pelo menos 15 frentes na gôndola ou com 3 bandejas de Secret. Os canais elegíveis são C&C, NMR/GMR, CLUB, LASA e Perfumaria. A lâmina também deixa claro o que não pode: considerar DPP e HFS, que não são elegíveis, e validar execução com menos de 15 frentes ou menos de 3 bandejas. O ponto central desse KBD é entender que existem duas formas válidas de execução: por bloco em gôndola ou por bandejas."
      },
      {
        "pergunta": "Qual das situações abaixo atende corretamente ao KBD?",
        "alternativas": [
          "A) Loja HFS com 3 bandejas de Secret",
          "B) Loja DPP com 15 frentes de Secret",
          "C) Loja NMR/GMR com 3 bandejas de Secret",
          "D) Loja HFS com 15 frentes de Secret"
        ],
        "gabarito": "C",
        "justificativa": "executar Secret em bloco de pelo menos 15 frentes na gôndola ou com 3 bandejas de Secret. Os canais elegíveis são C&C, NMR/GMR, CLUB, LASA e Perfumaria. A lâmina também deixa claro o que não pode: considerar DPP e HFS, que não são elegíveis, e validar execução com menos de 15 frentes ou menos de 3 bandejas. O ponto central desse KBD é entender que existem duas formas válidas de execução: por bloco em gôndola ou por bandejas."
      },
      {
        "pergunta": "Qual situação abaixo não pode ser considerada correta?",
        "alternativas": [
          "A) Executar 15 frentes de Secret em C&C",
          "B) Executar 3 bandejas de Secret em CLUB",
          "C) Executar 14 frentes de Secret em Perfumaria",
          "D) Executar 15 frentes de Secret em NMR/GMR"
        ],
        "gabarito": "C",
        "justificativa": "executar Secret em bloco de pelo menos 15 frentes na gôndola ou com 3 bandejas de Secret. Os canais elegíveis são C&C, NMR/GMR, CLUB, LASA e Perfumaria. A lâmina também deixa claro o que não pode: considerar DPP e HFS, que não são elegíveis, e validar execução com menos de 15 frentes ou menos de 3 bandejas. O ponto central desse KBD é entender que existem duas formas válidas de execução: por bloco em gôndola ou por bandejas."
      },
      {
        "pergunta": "O que conta para validar esse KBD?",
        "alternativas": [
          "A) Bloco de Secret com 15 frentes na gôndola ou 3 bandejas de Secret",
          "B) Apenas 3 bandejas nas prateleiras superiores",
          "C) Apenas 15 frentes em canal HFS",
          "D) Qualquer exposição de Secret com boa visibilidade"
        ],
        "gabarito": "A",
        "justificativa": "executar Secret em bloco de pelo menos 15 frentes na gôndola ou com 3 bandejas de Secret. Os canais elegíveis são C&C, NMR/GMR, CLUB, LASA e Perfumaria. A lâmina também deixa claro o que não pode: considerar DPP e HFS, que não são elegíveis, e validar execução com menos de 15 frentes ou menos de 3 bandejas. O ponto central desse KBD é entender que existem duas formas válidas de execução: por bloco em gôndola ou por bandejas."
      }
    ]
  },
  "oral-b": {
    "kbd1": [
      {
        "pergunta": "Qual é a execução obrigatória desse KBD?",
        "alternativas": [
          "A) Garantir 60% do espaço de cremes Oral-B com versões de branqueamento",
          "B) Garantir 60% da gôndola total da categoria com Oral-B",
          "C) Garantir 50% do espaço de escovas Oral-B com itens 3D White",
          "D) Garantir 60% das frentes de cremes dentais com qualquer pasta branca"
        ],
        "gabarito": "A",
        "justificativa": "garantir 60% do espaço de cremes Oral-B com versões de branqueamento, medindo em centímetros pela fórmula cm Branqueamento / cm Total Cremes Oral-B. Os canais válidos são todos. A lâmina também define exatamente quais versões entram no cálculo: 3DW Brilliant Fresh, 3Dwhite Mineral Clean, 3Dwhite Perfection, Extra Branco e Extra Branco Carvão. O que não pode é contar pastas que não são de branqueamento e medir por frentes em vez de cm."
      },
      {
        "pergunta": "Como deve ser feita a medição correta desse KBD?",
        "alternativas": [
          "A) Por número de SKUs de branqueamento",
          "B) Em centímetros: cm Branqueamento / cm Total Cremes Oral-B",
          "C) Por quantidade de frentes brancas na gôndola",
          "D) Por quantidade de embalagens expostas"
        ],
        "gabarito": "B",
        "justificativa": "garantir 60% do espaço de cremes Oral-B com versões de branqueamento, medindo em centímetros pela fórmula cm Branqueamento / cm Total Cremes Oral-B. Os canais válidos são todos. A lâmina também define exatamente quais versões entram no cálculo: 3DW Brilliant Fresh, 3Dwhite Mineral Clean, 3Dwhite Perfection, Extra Branco e Extra Branco Carvão. O que não pode é contar pastas que não são de branqueamento e medir por frentes em vez de cm."
      },
      {
        "pergunta": "Qual das opções abaixo conta como versão válida de branqueamento?",
        "alternativas": [
          "A) Pasta Oral-B infantil",
          "B) 3Dwhite Perfection",
          "C) Qualquer creme com embalagem clara",
          "D) Pasta de proteção de gengiva"
        ],
        "gabarito": "B",
        "justificativa": "garantir 60% do espaço de cremes Oral-B com versões de branqueamento, medindo em centímetros pela fórmula cm Branqueamento / cm Total Cremes Oral-B. Os canais válidos são todos. A lâmina também define exatamente quais versões entram no cálculo: 3DW Brilliant Fresh, 3Dwhite Mineral Clean, 3Dwhite Perfection, Extra Branco e Extra Branco Carvão. O que não pode é contar pastas que não são de branqueamento e medir por frentes em vez de cm."
      },
      {
        "pergunta": "Qual situação abaixo está incorreta segundo o guia?",
        "alternativas": [
          "A) Considerar Extra Branco Carvão como versão válida",
          "B) Medir em centímetros o espaço de branqueamento",
          "C) Contar pastas que não são de branqueamento para completar o percentual",
          "D) Aplicar o KBD em qualquer canal"
        ],
        "gabarito": "C",
        "justificativa": "garantir 60% do espaço de cremes Oral-B com versões de branqueamento, medindo em centímetros pela fórmula cm Branqueamento / cm Total Cremes Oral-B. Os canais válidos são todos. A lâmina também define exatamente quais versões entram no cálculo: 3DW Brilliant Fresh, 3Dwhite Mineral Clean, 3Dwhite Perfection, Extra Branco e Extra Branco Carvão. O que não pode é contar pastas que não são de branqueamento e medir por frentes em vez de cm."
      },
      {
        "pergunta": "Qual alternativa representa corretamente um grupo de versões válidas desse KBD?",
        "alternativas": [
          "A) Extra Branco, 3Dwhite Perfection e 3DW Brilliant Fresh",
          "B) Pasta infantil, Extra Branco e Mineral Clean",
          "C) 3Dwhite Perfection, enxaguante Oral-B e Extra Branco",
          "D) Extra Branco Carvão, pasta de gengiva e 3DW Brilliant Fresh"
        ],
        "gabarito": "A",
        "justificativa": "garantir 60% do espaço de cremes Oral-B com versões de branqueamento, medindo em centímetros pela fórmula cm Branqueamento / cm Total Cremes Oral-B. Os canais válidos são todos. A lâmina também define exatamente quais versões entram no cálculo: 3DW Brilliant Fresh, 3Dwhite Mineral Clean, 3Dwhite Perfection, Extra Branco e Extra Branco Carvão. O que não pode é contar pastas que não são de branqueamento e medir por frentes em vez de cm."
      }
    ],
    "kbd2": [
      {
        "pergunta": "Qual é a execução obrigatória desse KBD?",
        "alternativas": [
          "A) Executar 2 pontos extras/pontos de contato de escovas Oral-B",
          "B) Executar 2 frentes de escovas Oral-B na gôndola",
          "C) Executar 1 ponto de contato e 1 checkout",
          "D) Executar 2 pontos no ponto natural"
        ],
        "gabarito": "A",
        "justificativa": "executar pelo menos 2 pontos extras/pontos de contato de escovas Oral-B. O guia deixa claro que ClipStrip é válido, mas não pode ser ponto natural nem checkout. Os canais válidos são todos. A lâmina também traz como itens foco sugeridos: Indicator+2, tamanhos grandes e 3DW, embora possa executar outros itens de Oral-B. O ponto principal aqui é validar se a pessoa entendeu a diferença entre ponto adicional válido e ponto que não pode ser contado."
      },
      {
        "pergunta": "Qual das opções abaixo pode ser considerada válida para esse KBD?",
        "alternativas": [
          "A) Checkout",
          "B) Ponto natural",
          "C) ClipStrip",
          "D) Gôndola principal de escovas"
        ],
        "gabarito": "C",
        "justificativa": "executar pelo menos 2 pontos extras/pontos de contato de escovas Oral-B. O guia deixa claro que ClipStrip é válido, mas não pode ser ponto natural nem checkout. Os canais válidos são todos. A lâmina também traz como itens foco sugeridos: Indicator+2, tamanhos grandes e 3DW, embora possa executar outros itens de Oral-B. O ponto principal aqui é validar se a pessoa entendeu a diferença entre ponto adicional válido e ponto que não pode ser contado."
      },
      {
        "pergunta": "Qual situação abaixo não atende ao KBD?",
        "alternativas": [
          "A) Ter 2 pontos adicionais de escovas Oral-B fora do ponto natural",
          "B) Ter 1 ilha e 1 ponta com escovas Oral-B",
          "C) Ter 1 ClipStrip e 1 ponta de gôndola",
          "D) Ter 1 ponto natural e 1 checkout com escovas Oral-B"
        ],
        "gabarito": "D",
        "justificativa": "executar pelo menos 2 pontos extras/pontos de contato de escovas Oral-B. O guia deixa claro que ClipStrip é válido, mas não pode ser ponto natural nem checkout. Os canais válidos são todos. A lâmina também traz como itens foco sugeridos: Indicator+2, tamanhos grandes e 3DW, embora possa executar outros itens de Oral-B. O ponto principal aqui é validar se a pessoa entendeu a diferença entre ponto adicional válido e ponto que não pode ser contado."
      },
      {
        "pergunta": "Sobre os canais elegíveis, qual alternativa está correta?",
        "alternativas": [
          "A) Apenas C&C e NMR/GMR",
          "B) Todos os canais são válidos",
          "C) Apenas canais sem checkout",
          "D) Todos, exceto DPP"
        ],
        "gabarito": "B",
        "justificativa": "executar pelo menos 2 pontos extras/pontos de contato de escovas Oral-B. O guia deixa claro que ClipStrip é válido, mas não pode ser ponto natural nem checkout. Os canais válidos são todos. A lâmina também traz como itens foco sugeridos: Indicator+2, tamanhos grandes e 3DW, embora possa executar outros itens de Oral-B. O ponto principal aqui é validar se a pessoa entendeu a diferença entre ponto adicional válido e ponto que não pode ser contado."
      },
      {
        "pergunta": "Quais são exemplos de itens foco sugeridos na lâmina?",
        "alternativas": [
          "A) Escovas infantis, enxaguantes e fio dental",
          "B) Indicator+2, tamanhos grandes e 3DW",
          "C) Apenas 3DW e pastas branqueadoras",
          "D) Indicator+2, cremes dentais e enxaguantes"
        ],
        "gabarito": "B",
        "justificativa": "executar pelo menos 2 pontos extras/pontos de contato de escovas Oral-B. O guia deixa claro que ClipStrip é válido, mas não pode ser ponto natural nem checkout. Os canais válidos são todos. A lâmina também traz como itens foco sugeridos: Indicator+2, tamanhos grandes e 3DW, embora possa executar outros itens de Oral-B. O ponto principal aqui é validar se a pessoa entendeu a diferença entre ponto adicional válido e ponto que não pode ser contado."
      }
    ],
    "kbd3": [
      {
        "pergunta": "Qual é a execução obrigatória desse KBD?",
        "alternativas": [
          "A) Executar 2 pontos de contato com escovas Oral-B",
          "B) Garantir 60% do espaço com escovas premium",
          "C) Organizar a gôndola de escovas Oral-B conforme o layout BIPE/BIP",
          "D) Separar escovas apenas por cor de embalagem"
        ],
        "gabarito": "C",
        "justificativa": "executar a gôndola de escovas Oral-B conforme o layout BIPE. Os canais válidos são todos. O guia diz que o que conta é o layout BIPE aplicado na gôndola, com organização por blocos/segmentos conforme o guia BIPE. O que não pode é executar sem seguir o layout ou misturar segmentos sem lógica de BIPE. Aqui o foco não é quantidade, e sim padronização correta da organização da gôndola."
      },
      {
        "pergunta": "O que conta para validar esse KBD?",
        "alternativas": [
          "A) Layout BIPE/BIP aplicado na gôndola de escovas",
          "B) Qualquer organização visualmente bonita",
          "C) Escovas agrupadas por preço",
          "D) Mistura de segmentos desde que complete espaço"
        ],
        "gabarito": "A",
        "justificativa": "executar a gôndola de escovas Oral-B conforme o layout BIPE. Os canais válidos são todos. O guia diz que o que conta é o layout BIPE aplicado na gôndola, com organização por blocos/segmentos conforme o guia BIPE. O que não pode é executar sem seguir o layout ou misturar segmentos sem lógica de BIPE. Aqui o foco não é quantidade, e sim padronização correta da organização da gôndola."
      },
      {
        "pergunta": "Qual das situações abaixo não pode ser considerada correta?",
        "alternativas": [
          "A) Aplicar a organização por blocos conforme o guia BIPE",
          "B) Seguir a lógica de segmentos da marca",
          "C) Misturar segmentos sem lógica de BIPE",
          "D) Executar o layout na gôndola de escovas"
        ],
        "gabarito": "C",
        "justificativa": "executar a gôndola de escovas Oral-B conforme o layout BIPE. Os canais válidos são todos. O guia diz que o que conta é o layout BIPE aplicado na gôndola, com organização por blocos/segmentos conforme o guia BIPE. O que não pode é executar sem seguir o layout ou misturar segmentos sem lógica de BIPE. Aqui o foco não é quantidade, e sim padronização correta da organização da gôndola."
      },
      {
        "pergunta": "Sobre os canais válidos, qual alternativa está correta?",
        "alternativas": [
          "A) Apenas CLUB e LASA",
          "B) Todos os canais",
          "C) Apenas C&C, NMR/GMR e HFS",
          "D) Todos, exceto DPP e Perfumaria"
        ],
        "gabarito": "B",
        "justificativa": "executar a gôndola de escovas Oral-B conforme o layout BIPE. Os canais válidos são todos. O guia diz que o que conta é o layout BIPE aplicado na gôndola, com organização por blocos/segmentos conforme o guia BIPE. O que não pode é executar sem seguir o layout ou misturar segmentos sem lógica de BIPE. Aqui o foco não é quantidade, e sim padronização correta da organização da gôndola."
      },
      {
        "pergunta": "Qual alternativa representa melhor a lógica desse KBD?",
        "alternativas": [
          "A) O mais importante é aumentar a quantidade de escovas na loja",
          "B) O KBD mede quantas frentes cada escova tem",
          "C) O KBD depende de pontos extras e checkout",
          "D) O KBD avalia se a gôndola está organizada por blocos/segmentos conforme BIPE"
        ],
        "gabarito": "D",
        "justificativa": "executar a gôndola de escovas Oral-B conforme o layout BIPE. Os canais válidos são todos. O guia diz que o que conta é o layout BIPE aplicado na gôndola, com organização por blocos/segmentos conforme o guia BIPE. O que não pode é executar sem seguir o layout ou misturar segmentos sem lógica de BIPE. Aqui o foco não é quantidade, e sim padronização correta da organização da gôndola."
      }
    ]
  },
  "gillette": {
    "kbd1": [
      {
        "pergunta": "Como deve ser feita a medição correta desse KBD?",
        "alternativas": [
          "A) Em centímetros na gôndola masculina",
          "B) Pela quantidade de embalagens vendidas",
          "C) Por ganchos: ganchos Sistemas / ganchos total Gillette Masculina",
          "D) Por número de SKUs de Gillette"
        ],
        "gabarito": "C",
        "justificativa": "garantir um percentual de ganchos de Sistemas dentro da gôndola Gillette Masculina, medindo por ganchos na fórmula ganchos Sistemas / ganchos total Gillette Masculina. O objetivo varia por canal: C&C = 25% e demais canais elegíveis = 35%. DPP não é elegível. O guia também define que Sistemas são cargas e aparelhos conectáveis: Mach3, Fusion e Proshield. Não pode medir em centímetros, misturar descartáveis no cálculo nem considerar DPP."
      },
      {
        "pergunta": "Quais produtos entram como Sistemas nesse KBD?",
        "alternativas": [
          "A) Mach3, Fusion e Proshield",
          "B) Apenas Mach3 e Presto3",
          "C) Todos os descartáveis Gillette",
          "D) Apenas cargas Mach3 c/8"
        ],
        "gabarito": "A",
        "justificativa": "garantir um percentual de ganchos de Sistemas dentro da gôndola Gillette Masculina, medindo por ganchos na fórmula ganchos Sistemas / ganchos total Gillette Masculina. O objetivo varia por canal: C&C = 25% e demais canais elegíveis = 35%. DPP não é elegível. O guia também define que Sistemas são cargas e aparelhos conectáveis: Mach3, Fusion e Proshield. Não pode medir em centímetros, misturar descartáveis no cálculo nem considerar DPP."
      },
      {
        "pergunta": "Qual alternativa está correta sobre a meta por canal?",
        "alternativas": [
          "A) C&C 35% e DPP 25%",
          "B) C&C 25% e demais canais elegíveis 35%",
          "C) Todos os canais 25%",
          "D) CLUB 25% e C&C 35%"
        ],
        "gabarito": "B",
        "justificativa": "garantir um percentual de ganchos de Sistemas dentro da gôndola Gillette Masculina, medindo por ganchos na fórmula ganchos Sistemas / ganchos total Gillette Masculina. O objetivo varia por canal: C&C = 25% e demais canais elegíveis = 35%. DPP não é elegível. O guia também define que Sistemas são cargas e aparelhos conectáveis: Mach3, Fusion e Proshield. Não pode medir em centímetros, misturar descartáveis no cálculo nem considerar DPP."
      },
      {
        "pergunta": "Qual das situações abaixo não pode ser considerada correta?",
        "alternativas": [
          "A) Medir por ganchos na gôndola Gillette Masculina",
          "B) Contar Fusion no cálculo de Sistemas",
          "C) Considerar descartáveis junto com Sistemas",
          "D) Aplicar 35% nos canais elegíveis fora de C&C"
        ],
        "gabarito": "C",
        "justificativa": "garantir um percentual de ganchos de Sistemas dentro da gôndola Gillette Masculina, medindo por ganchos na fórmula ganchos Sistemas / ganchos total Gillette Masculina. O objetivo varia por canal: C&C = 25% e demais canais elegíveis = 35%. DPP não é elegível. O guia também define que Sistemas são cargas e aparelhos conectáveis: Mach3, Fusion e Proshield. Não pode medir em centímetros, misturar descartáveis no cálculo nem considerar DPP."
      },
      {
        "pergunta": "Qual canal não é elegível para esse KBD?",
        "alternativas": [
          "A) LASA",
          "B) DPP",
          "C) C&C",
          "D) NMR/GMR"
        ],
        "gabarito": "B",
        "justificativa": "garantir um percentual de ganchos de Sistemas dentro da gôndola Gillette Masculina, medindo por ganchos na fórmula ganchos Sistemas / ganchos total Gillette Masculina. O objetivo varia por canal: C&C = 25% e demais canais elegíveis = 35%. DPP não é elegível. O guia também define que Sistemas são cargas e aparelhos conectáveis: Mach3, Fusion e Proshield. Não pode medir em centímetros, misturar descartáveis no cálculo nem considerar DPP."
      }
    ],
    "kbd2": [
      {
        "pergunta": "Qual é a execução obrigatória desse KBD?",
        "alternativas": [
          "A) Executar 2 pontos de contato fora do ponto natural e fora do checkout",
          "B) Executar 2 checkouts com Mach3",
          "C) Executar 2 pontos no ponto natural de Gillette",
          "D) Executar 2 frentes de Mach3 na gôndola"
        ],
        "gabarito": "A",
        "justificativa": "executar pelo menos 2 pontos de contato com itens de Mach3 ou Presto3, sempre fora do ponto natural e fora do checkout. O que conta são os tamanhos grandes (4 unidades ou mais) e também packs. Os canais elegíveis são todos, exceto CLUB. O guia deixa claro que não pode contar ponto natural, contar checkout ou executar itens fora da lista de tamanhos grandes/packs."
      },
      {
        "pergunta": "Quais itens contam para esse KBD?",
        "alternativas": [
          "A) Qualquer item Gillette, desde que esteja exposto",
          "B) Apenas aparelhos conectáveis",
          "C) Mach3 ou Presto3 em tamanhos grandes (4 un+) ou packs",
          "D) Somente Mach3 com 8 unidades"
        ],
        "gabarito": "C",
        "justificativa": "executar pelo menos 2 pontos de contato com itens de Mach3 ou Presto3, sempre fora do ponto natural e fora do checkout. O que conta são os tamanhos grandes (4 unidades ou mais) e também packs. Os canais elegíveis são todos, exceto CLUB. O guia deixa claro que não pode contar ponto natural, contar checkout ou executar itens fora da lista de tamanhos grandes/packs."
      },
      {
        "pergunta": "Qual canal não é elegível para esse KBD?",
        "alternativas": [
          "A) HFS",
          "B) CLUB",
          "C) NMR/GMR",
          "D) LASA"
        ],
        "gabarito": "B",
        "justificativa": "executar pelo menos 2 pontos de contato com itens de Mach3 ou Presto3, sempre fora do ponto natural e fora do checkout. O que conta são os tamanhos grandes (4 unidades ou mais) e também packs. Os canais elegíveis são todos, exceto CLUB. O guia deixa claro que não pode contar ponto natural, contar checkout ou executar itens fora da lista de tamanhos grandes/packs."
      },
      {
        "pergunta": "Qual das situações abaixo não atende ao KBD?",
        "alternativas": [
          "A) Ter 2 pontos extras com packs de Presto3",
          "B) Ter 2 pontos adicionais com Mach3 4 un+",
          "C) Contar 1 ponto natural e 1 checkout",
          "D) Executar 2 pontos fora do checkout"
        ],
        "gabarito": "C",
        "justificativa": "executar pelo menos 2 pontos de contato com itens de Mach3 ou Presto3, sempre fora do ponto natural e fora do checkout. O que conta são os tamanhos grandes (4 unidades ou mais) e também packs. Os canais elegíveis são todos, exceto CLUB. O guia deixa claro que não pode contar ponto natural, contar checkout ou executar itens fora da lista de tamanhos grandes/packs."
      },
      {
        "pergunta": "O que o guia proíbe nesse KBD?",
        "alternativas": [
          "A) Usar pontos adicionais fora da gôndola",
          "B) Contar checkout e ponto natural",
          "C) Executar packs de Mach3",
          "D) Trabalhar tamanhos grandes de Presto3"
        ],
        "gabarito": "B",
        "justificativa": "executar pelo menos 2 pontos de contato com itens de Mach3 ou Presto3, sempre fora do ponto natural e fora do checkout. O que conta são os tamanhos grandes (4 unidades ou mais) e também packs. Os canais elegíveis são todos, exceto CLUB. O guia deixa claro que não pode contar ponto natural, contar checkout ou executar itens fora da lista de tamanhos grandes/packs."
      }
    ],
    "kbd3": [
      {
        "pergunta": "Qual é a execução obrigatória desse KBD?",
        "alternativas": [
          "A) Executar 2 frentes de aparelho Mach3",
          "B) Executar no mínimo 2 ganchos de carga Mach3 com 8 unidades",
          "C) Executar 2 packs de Presto3 em qualquer canal",
          "D) Executar 2 ganchos de qualquer carga Gillette"
        ],
        "gabarito": "B",
        "justificativa": "executar no mínimo 2 ganchos de Carga Mach3 com 8 unidades, com leitura feita por ganchos. O canal elegível é somente FARMA. O guia deixa claro que não pode ler esse KBD fora de FARMA e não pode esquecer que o item correto é a carga Mach3 com 8 unidades. O foco aqui é bem objetivo: produto certo, quantidade certa de ganchos e canal certo."
      },
      {
        "pergunta": "Como deve ser feita a leitura correta desse KBD?",
        "alternativas": [
          "A) Em centímetros",
          "B) Por número de checkouts",
          "C) Por ganchos",
          "D) Por quantidade de lojas atendidas"
        ],
        "gabarito": "C",
        "justificativa": "executar no mínimo 2 ganchos de Carga Mach3 com 8 unidades, com leitura feita por ganchos. O canal elegível é somente FARMA. O guia deixa claro que não pode ler esse KBD fora de FARMA e não pode esquecer que o item correto é a carga Mach3 com 8 unidades. O foco aqui é bem objetivo: produto certo, quantidade certa de ganchos e canal certo."
      },
      {
        "pergunta": "Qual é o canal elegível para esse KBD?",
        "alternativas": [
          "A) Somente FARMA",
          "B) CLUB e LASA",
          "C) Todos os canais",
          "D) HFS e DPP"
        ],
        "gabarito": "A",
        "justificativa": "executar no mínimo 2 ganchos de Carga Mach3 com 8 unidades, com leitura feita por ganchos. O canal elegível é somente FARMA. O guia deixa claro que não pode ler esse KBD fora de FARMA e não pode esquecer que o item correto é a carga Mach3 com 8 unidades. O foco aqui é bem objetivo: produto certo, quantidade certa de ganchos e canal certo."
      },
      {
        "pergunta": "Qual das situações abaixo não pode ser considerada correta?",
        "alternativas": [
          "A) Ter 2 ganchos de carga Mach3 c/8 em FARMA",
          "B) Medir o KBD por ganchos",
          "C) Validar o KBD em canal fora de FARMA",
          "D) Focar especificamente na carga Mach3 com 8 unidades"
        ],
        "gabarito": "C",
        "justificativa": "executar no mínimo 2 ganchos de Carga Mach3 com 8 unidades, com leitura feita por ganchos. O canal elegível é somente FARMA. O guia deixa claro que não pode ler esse KBD fora de FARMA e não pode esquecer que o item correto é a carga Mach3 com 8 unidades. O foco aqui é bem objetivo: produto certo, quantidade certa de ganchos e canal certo."
      },
      {
        "pergunta": "O que conta para validar esse KBD?",
        "alternativas": [
          "A) Qualquer carga Gillette com boa visibilidade",
          "B) Aparelho Mach3 e Fusion no mesmo gancho",
          "C) Carga Mach3 c/8 com no mínimo 2 ganchos",
          "D) Dois ganchos de descartáveis Gillette"
        ],
        "gabarito": "C",
        "justificativa": "executar no mínimo 2 ganchos de Carga Mach3 com 8 unidades, com leitura feita por ganchos. O canal elegível é somente FARMA. O guia deixa claro que não pode ler esse KBD fora de FARMA e não pode esquecer que o item correto é a carga Mach3 com 8 unidades. O foco aqui é bem objetivo: produto certo, quantidade certa de ganchos e canal certo."
      }
    ]
  },
  "venus": {
    "kbd1": [
      {
        "pergunta": "Como deve ser feita a medição correta desse KBD?",
        "alternativas": [
          "A) Em centímetros na gôndola feminina",
          "B) Por ganchos: ganchos Sistemas Venus / ganchos total da categoria",
          "C) Pela quantidade de SKUs da marca",
          "D) Pela soma das frentes de Venus"
        ],
        "gabarito": "B",
        "justificativa": "garantir 20% de ganchos de Sistemas na gôndola de lâminas femininas. A leitura é feita por ganchos, pela lógica ganchos Sistemas Venus / ganchos total da categoria. Os canais elegíveis são C&C, NMR/GMR, LASA e HFS. O guia define como sistemas válidos Venus Pele Sensível, Venus Íntima Sistema e Venus Spa. Não pode medir em centímetros, não pode contar itens fora dessa lista e não pode considerar canais não elegíveis."
      },
      {
        "pergunta": "Quais versões entram como sistemas válidos nesse KBD?",
        "alternativas": [
          "A) Venus Pele Sensível, Venus Íntima Sistema e Venus Spa",
          "B) Venus Suave, Venus Spa e Venus Descartável",
          "C) Apenas Venus Pele Sensível e Venus Suave",
          "D) Qualquer item Venus exposto na categoria"
        ],
        "gabarito": "A",
        "justificativa": "garantir 20% de ganchos de Sistemas na gôndola de lâminas femininas. A leitura é feita por ganchos, pela lógica ganchos Sistemas Venus / ganchos total da categoria. Os canais elegíveis são C&C, NMR/GMR, LASA e HFS. O guia define como sistemas válidos Venus Pele Sensível, Venus Íntima Sistema e Venus Spa. Não pode medir em centímetros, não pode contar itens fora dessa lista e não pode considerar canais não elegíveis."
      },
      {
        "pergunta": "Qual é a meta desse KBD?",
        "alternativas": [
          "A) 35% dos ganchos da categoria",
          "B) 50% dos ganchos de Venus",
          "C) 20% de ganchos de Sistemas",
          "D) 20% do espaço em centímetros"
        ],
        "gabarito": "C",
        "justificativa": "garantir 20% de ganchos de Sistemas na gôndola de lâminas femininas. A leitura é feita por ganchos, pela lógica ganchos Sistemas Venus / ganchos total da categoria. Os canais elegíveis são C&C, NMR/GMR, LASA e HFS. O guia define como sistemas válidos Venus Pele Sensível, Venus Íntima Sistema e Venus Spa. Não pode medir em centímetros, não pode contar itens fora dessa lista e não pode considerar canais não elegíveis."
      },
      {
        "pergunta": "Qual das situações abaixo não pode ser considerada correta?",
        "alternativas": [
          "A) Medir por ganchos",
          "B) Aplicar em HFS",
          "C) Contar itens fora da lista de sistemas válidos",
          "D) Considerar Venus Spa no cálculo"
        ],
        "gabarito": "C",
        "justificativa": "garantir 20% de ganchos de Sistemas na gôndola de lâminas femininas. A leitura é feita por ganchos, pela lógica ganchos Sistemas Venus / ganchos total da categoria. Os canais elegíveis são C&C, NMR/GMR, LASA e HFS. O guia define como sistemas válidos Venus Pele Sensível, Venus Íntima Sistema e Venus Spa. Não pode medir em centímetros, não pode contar itens fora dessa lista e não pode considerar canais não elegíveis."
      },
      {
        "pergunta": "Qual alternativa está correta sobre os canais elegíveis?",
        "alternativas": [
          "A) DPP, HFS e CLUB",
          "B) C&C, NMR/GMR, LASA e HFS",
          "C) Todos os canais",
          "D) Apenas DPP e HFS"
        ],
        "gabarito": "B",
        "justificativa": "garantir 20% de ganchos de Sistemas na gôndola de lâminas femininas. A leitura é feita por ganchos, pela lógica ganchos Sistemas Venus / ganchos total da categoria. Os canais elegíveis são C&C, NMR/GMR, LASA e HFS. O guia define como sistemas válidos Venus Pele Sensível, Venus Íntima Sistema e Venus Spa. Não pode medir em centímetros, não pode contar itens fora dessa lista e não pode considerar canais não elegíveis."
      }
    ],
    "kbd2": [
      {
        "pergunta": "Qual é a execução obrigatória desse KBD?",
        "alternativas": [
          "A) Executar 2 checkouts com Venus",
          "B) Executar 2 pontos de contato fora do ponto natural e fora do checkout",
          "C) Executar 2 frentes de Venus na gôndola",
          "D) Executar 1 ponto natural e 1 ponto adicional"
        ],
        "gabarito": "B",
        "justificativa": "executar pelo menos 2 pontos de contato fora do ponto natural e fora do checkout. O guia orienta priorizar Venus Pele Sensível e Venus Suave. Os canais elegíveis são DPP e HFS. Não pode contar ponto natural, não pode contar checkout e não pode executar em canais fora de DPP/HFS."
      },
      {
        "pergunta": "Quais itens o guia orienta priorizar?",
        "alternativas": [
          "A) Venus Pele Sensível e Venus Suave",
          "B) Venus Spa e Venus Íntima Sistema",
          "C) Apenas Venus Pele Sensível",
          "D) Qualquer item Venus da categoria"
        ],
        "gabarito": "A",
        "justificativa": "executar pelo menos 2 pontos de contato fora do ponto natural e fora do checkout. O guia orienta priorizar Venus Pele Sensível e Venus Suave. Os canais elegíveis são DPP e HFS. Não pode contar ponto natural, não pode contar checkout e não pode executar em canais fora de DPP/HFS."
      },
      {
        "pergunta": "Em quais canais esse KBD é válido?",
        "alternativas": [
          "A) Todos os canais, exceto CLUB",
          "B) C&C e NMR/GMR",
          "C) DPP e HFS",
          "D) LASA e CLUB"
        ],
        "gabarito": "C",
        "justificativa": "executar pelo menos 2 pontos de contato fora do ponto natural e fora do checkout. O guia orienta priorizar Venus Pele Sensível e Venus Suave. Os canais elegíveis são DPP e HFS. Não pode contar ponto natural, não pode contar checkout e não pode executar em canais fora de DPP/HFS."
      },
      {
        "pergunta": "Qual das situações abaixo não atende ao KBD?",
        "alternativas": [
          "A) Ter 2 pontos adicionais com Venus em HFS",
          "B) Ter 2 pontos adicionais com Venus em DPP",
          "C) Contar 1 ponto natural e 1 checkout",
          "D) Executar fora do checkout em canal elegível"
        ],
        "gabarito": "C",
        "justificativa": "executar pelo menos 2 pontos de contato fora do ponto natural e fora do checkout. O guia orienta priorizar Venus Pele Sensível e Venus Suave. Os canais elegíveis são DPP e HFS. Não pode contar ponto natural, não pode contar checkout e não pode executar em canais fora de DPP/HFS."
      },
      {
        "pergunta": "O que o guia proíbe nesse KBD?",
        "alternativas": [
          "A) Priorizar Venus Pele Sensível",
          "B) Executar em DPP e HFS",
          "C) Contar ponto natural e checkout",
          "D) Fazer dois pontos adicionais"
        ],
        "gabarito": "C",
        "justificativa": "executar pelo menos 2 pontos de contato fora do ponto natural e fora do checkout. O guia orienta priorizar Venus Pele Sensível e Venus Suave. Os canais elegíveis são DPP e HFS. Não pode contar ponto natural, não pode contar checkout e não pode executar em canais fora de DPP/HFS."
      }
    ],
    "kbd3": [
      {
        "pergunta": "Qual é a execução obrigatória desse KBD?",
        "alternativas": [
          "A) Executar qualquer item Venus no checkout",
          "B) Executar apenas o aparelho Venus Pele Sensível na região de checkout",
          "C) Executar cargas de Venus Pele Sensível no checkout",
          "D) Executar Venus Spa em 60% da gôndola"
        ],
        "gabarito": "B",
        "justificativa": "na região de CKO, executar apenas o aparelho Venus Pele Sensível. A meta é ter pelo menos 60% dos CKOs com P&G com esse produto. Os canais elegíveis são todos, exceto CLUB. O guia também deixa claro que não pode executar carga em vez de aparelho, não pode contar CKOs sem produtos P&G e não pode aplicar em CLUB."
      },
      {
        "pergunta": "Qual é a meta desse KBD?",
        "alternativas": [
          "A) Pelo menos 60% dos CKOs com P&G com Venus Pele Sensível",
          "B) Pelo menos 20% dos ganchos da categoria",
          "C) Pelo menos 2 checkouts por loja",
          "D) 100% dos checkouts da loja com Venus"
        ],
        "gabarito": "A",
        "justificativa": "na região de CKO, executar apenas o aparelho Venus Pele Sensível. A meta é ter pelo menos 60% dos CKOs com P&G com esse produto. Os canais elegíveis são todos, exceto CLUB. O guia também deixa claro que não pode executar carga em vez de aparelho, não pode contar CKOs sem produtos P&G e não pode aplicar em CLUB."
      },
      {
        "pergunta": "Qual das situações abaixo não pode ser considerada correta?",
        "alternativas": [
          "A) Contar CKOs sem produtos P&G",
          "B) Executar aparelho Venus Pele Sensível",
          "C) Aplicar fora de CLUB",
          "D) Medir a presença em checkout com P&G"
        ],
        "gabarito": "A",
        "justificativa": "na região de CKO, executar apenas o aparelho Venus Pele Sensível. A meta é ter pelo menos 60% dos CKOs com P&G com esse produto. Os canais elegíveis são todos, exceto CLUB. O guia também deixa claro que não pode executar carga em vez de aparelho, não pode contar CKOs sem produtos P&G e não pode aplicar em CLUB."
      },
      {
        "pergunta": "Qual item realmente conta nesse KBD?",
        "alternativas": [
          "A) Carga Venus Pele Sensível",
          "B) Qualquer aparelho Venus",
          "C) Apenas o aparelho Venus Pele Sensível",
          "D) Venus Íntima Sistema no checkout"
        ],
        "gabarito": "C",
        "justificativa": "na região de CKO, executar apenas o aparelho Venus Pele Sensível. A meta é ter pelo menos 60% dos CKOs com P&G com esse produto. Os canais elegíveis são todos, exceto CLUB. O guia também deixa claro que não pode executar carga em vez de aparelho, não pode contar CKOs sem produtos P&G e não pode aplicar em CLUB."
      },
      {
        "pergunta": "Sobre os canais elegíveis, qual alternativa está correta?",
        "alternativas": [
          "A) Apenas DPP e HFS",
          "B) Todos os canais, exceto CLUB",
          "C) Somente CLUB e DPP",
          "D) Apenas C&C, NMR/GMR e LASA"
        ],
        "gabarito": "B",
        "justificativa": "na região de CKO, executar apenas o aparelho Venus Pele Sensível. A meta é ter pelo menos 60% dos CKOs com P&G com esse produto. Os canais elegíveis são todos, exceto CLUB. O guia também deixa claro que não pode executar carga em vez de aparelho, não pode contar CKOs sem produtos P&G e não pode aplicar em CLUB."
      }
    ]
  }
};

window.QUIZZES = QUIZZES;
