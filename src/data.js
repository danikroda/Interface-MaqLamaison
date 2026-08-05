export const categoriasBase = [
  { id: "fornos-tempera", nome: "Fornos de Têmpera", nomeCurto: "Fornos Têmpera", imagem: "public/Fornos/Forno-de-Tempera.webp", pdf: "/catalogo-forno.pdf" },
  { id: "mesas-corte", nome: "Mesas de Corte", nomeCurto: "Mesas de Corte", imagem: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=400&auto=format&fit=crop", pdf: "/catalogo-mesa.pdf" },
  { id: "lapidadoras", nome: "Lapidadoras / Bilateral", nomeCurto: "Lapidadoras", imagem: "https://images.unsplash.com/photo-1565514020179-0c6a9b9a896d?q=80&w=400&auto=format&fit=crop", pdf: "/catalogo-lapidadora.pdf" },
  { id: "bizeladoras", nome: "Bizeladoras", nomeCurto: "Bizeladoras", imagem: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=400&auto=format&fit=crop", pdf: "/catalogo-bizeladora.pdf" },
  { id: "furadeiras", nome: "Furadeiras / Centro de Usinagem", nomeCurto: "C. de Usinagem", imagem: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400&auto=format&fit=crop", pdf: "/catalogo-furadeira.pdf" },
  { id: "lavadoras", nome: "Lavadoras", nomeCurto: "Lavadoras", imagem: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=400&auto=format&fit=crop", pdf: "/catalogo-lavadora.pdf" },
  { id: "fornos-laminacao", nome: "Fornos de Laminação (EVA / PVB)", nomeCurto: "F. Laminação", imagem: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400&auto=format&fit=crop", pdf: "/catalogo-laminacao.pdf" },
  { id: "movimentacao", nome: "Movimentação / Estocagem", nomeCurto: "Movimentação", imagem: "https://images.unsplash.com/photo-1586528116311-ad8ed745eb33?q=80&w=400&auto=format&fit=crop", pdf: "/catalogo-movimentacao.pdf" },
  { id: "itens-diversos", nome: "Itens Diversos", nomeCurto: "Itens Diversos", imagem: "https://images.unsplash.com/photo-1505098936968-30113b2e75e3?q=80&w=400&auto=format&fit=crop", pdf: "/catalogo-diversos.pdf" },
  { id: "industrias", nome: "Indústrias Temperadoras (À Venda)", nomeCurto: "Indústrias", imagem: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop", pdf: "/catalogo-industria.pdf" },
];

export const produtosBase = [
  // VERTICAIS
  {
    id: "a", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS", tipo: "Vertical", medida: "1200mm X 2500mm", valor: "R$ 120.000,00",
    descricao: "Área Útil de têmpera = 3,00 M2. Têmpera vidros de 6mm a 19mm. Feito Upgrade do Software, sendo moderno e simplificado. Instalado um inversor Siemens. Controle de temperatura por zonas. Desenvolvido melhorias práticas para facilidade de trabalho. Consumo aproximado de 175 KW. “Cliente comprou um Forno horizontal”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/forno-tamglass-1200-1.jpeg"]
  },
  {
    id: "b", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS 2001", tipo: "Vertical", medida: "1600mm X 2700mm", valor: "R$ 155.000,00",
    descricao: "Área Útil de têmpera = 4,32 M2. (Em Funcionamento). Têmpera vidros de 6mm a 19mm. Roda com disjuntor de 200 Amperes. Necessita de um Transformador de 75KVA. “Cliente comprou um Forno horizontal”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/forno-tempera-tamglass-2001-1.jpeg",
             "/public/Fornos/forno-tempera-tamglass-2001-2.jpeg"
    ]
  },
  // HORIZONTAIS
  {
    id: "c", categoriaId: "fornos-tempera", nome: "Forno de Têmpera CIFEL 2006/08", tipo: "Horizontal", medida: "1700mm X 3200mm", valor: "R$ 295.000,00",
    descricao: "Área Útil de têmpera = 5,44 M2. (Parado há 3 Anos. Precisa de alguns componentes. Faltando a mesa de entrada e de saída. Faltam 04 roletes de sílica). Têmpera vidros de 6mm a 19mm. “Cliente comprou outro equipamento.” OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/forno-de-tempera-CIFEL-2006-1.jpeg",
              "/public/Fornos/forno-de-tempera-CIFEL-2006-2.jpeg"
    ]
  },
  {
    id: "d", categoriaId: "fornos-tempera", nome: "Forno de Têmpera CIFEL 2011 (Série 3)", tipo: "Horizontal", medida: "1900mm X 3200mm", valor: "R$ 630.000,00",
    descricao: "Área Útil de têmpera = 6,08 M2. (Parado). Têmpera vidros de 6mm a 19mm. “Cliente não está utilizando”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/forno-de-tempera-CIFEL-2011-1.jpeg",
              "/public/Fornos/forno-de-tempera-CIFEL-2011-2.jpeg"
    ]
  },
  {
    id: "e", categoriaId: "fornos-tempera", nome: "Forno de Têmpera MAGFORT 2012", tipo: "Horizontal", medida: "2000mm X 3600mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 7,20 M2. (Trabalhando). Têmpera vidros de 6 a 10mm. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. Sob Programação de Entrega: (A Combinar previsão de disponibilidade). Sob confirmação de unidade disponível em estoque.",
    imagens: ["/public/Fornos/forno-de-tempera-MAGFORT-2012-1.jpeg",
             "/public/Fornos/forno-de-tempera-MAGFORT-2012-2.jpeg"
    ]
  },
  {
    id: "f", categoriaId: "fornos-tempera", nome: "Forno de Têmpera CIFEL 2017", tipo: "Horizontal", medida: "2000mm X 3800mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 7,60 M2. (Trabalhando). Têmpera vidros de 6 a 19mm. Software Marca TAMGLASS. “Irão encerrar as atividades”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "g", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2017", tipo: "Horizontal", medida: "2750mm X 2200mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 6,05 M2. (Parado). Têmpera vidros de 6mm a 19mm. “Cliente não está mais utilizando, pois tem outro maior”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "h", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS 2002", tipo: "Horizontal", medida: "2100mm X 3600mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 7,56 M2. (Trabalhando). Têmpera vidros de 6 a 19mm. Software Marca MAINZ. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. PRAZO DE ENTREGA: Até 7 Meses, após a confirmação da Compra. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "i", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2014", tipo: "Horizontal", medida: "2400mm X 3800mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 9,12 M2. (Parado). Têmpera vidros de 4mm a 19mm sendo 4 e 5mm parcial. “Encerrou as atividades da fábrica”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "j", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2010", tipo: "Horizontal", medida: "2300mm X 3800mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 8,74 M2. (Parado). Têmpera vidros de 4mm a 19mm. Vidros 4 e 5mm em área parcial. Acompanha Mezanino. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "k", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2009", tipo: "Horizontal", medida: "2300mm X 3800mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 8,74 M2. (Trabalhando). Têmpera vidros de 6 a 19mm. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "l", categoriaId: "fornos-tempera", nome: "Forno de Têmpera GLASTON 2010", tipo: "Horizontal", medida: "2400mm X 4200mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 10,08 M2. (Parado). Têmpera vidros de 6mm a 19mm. “Cliente desativou o equipamento”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "m", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS 2010", tipo: "Horizontal", medida: "2400mm X 4200mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 10,08 M2. (Parado). Têmpera vidros de 4mm a 19mm, sendo os vidros de 4 e 5mm em área parcial útil. Equipamento foi todo revisado. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "n", categoriaId: "fornos-tempera", nome: "Forno de Têmpera GLASTON 2012", tipo: "Horizontal", medida: "2400mm X 4200mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 10,08 M2. (Parado). Têmpera vidros de 6 a 19mm. Possui Sistema de Convecção e estrutura de Mezanino para ventilador. “Cliente comprou um forno maior”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "o", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2014", tipo: "Horizontal", medida: "2400mm X 4400mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 10,56 M2. (Trabalhando). Têmpera vidros de 6 a 19mm, sendo vidros 4mm e 5mm em área parcial útil. “Cliente está vendendo para comprar um maior”. OBS: Todas as despesas por conta da compradora. PRAZO DE ENTREGA: Em até 5 a 7 meses, após a confirmação da compra. Sob confirmação de unidade disponível para venda.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "p", categoriaId: "fornos-tempera", nome: "Forno de Têmpera GLASTON 2016", tipo: "Horizontal", medida: "2400mm X 4200mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 10,08 M2. (Parado). Têmpera vidros de 4 a 19mm, sendo os vidros 4mm e 5mm em área parcial útil. Possui Sistema Convecção Forçada. “Cliente desativou sua fábrica”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "q", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS 1990/2026", tipo: "Horizontal", medida: "2400mm X 3600mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 8,64 M2. (Parado/desmontado). Têmpera vidros de 4 a 19mm, sendo vidros 4mm e 5mm em área parcial útil. Foi reformado geral, pois foi todo desmontado e todo revisado. Realizado um upgrade para um Novo CLP e Software SGlass ano 2026. “Cliente comprou um forno mais novo e o fabricante revisou todo o equipamento.” OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "r", categoriaId: "fornos-tempera", nome: "Forno de Têmpera TAMGLASS 2001/2026", tipo: "Horizontal", medida: "2200mm X 4400mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 9,68 M2. (Parado). Têmpera vidros de 4 a 19mm, sendo vidros 4mm e 5mm em área parcial útil. Foi reformado geral, pois foi todo desmontado e todo revisado. (Fibras Novas, resistências Novas). Realizado um upgrade para um Novo CLP e Software SGlass ano 2026. Possui Novo sistema de convecção forçada. “Cliente comprou um forno mais novo e o fabricante revisou todo o equipamento.” OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "s", categoriaId: "fornos-tempera", nome: "Forno de Têmpera SGLASS 2019", tipo: "Horizontal", medida: "2700mm X 5100mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 13,77 M2. Têmpera vidros de 6 a 19mm. Equipamento foi muito pouco utilizado. “Cliente comprou um forno maior (JUMBO)”. OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "t", categoriaId: "fornos-tempera", nome: "Forno de Têmpera GLASTON FTF 2450", tipo: "Horizontal", medida: "2400mm X 5000mm", valor: "Sob Consulta",
    descricao: "Área Útil de têmpera = 12,00 M2. (Parado/desmontado). Têmpera vidros de 6 a 19mm. Possui Sistema Convecção Forçada (Atende a vidros Lowe de até 0,08 de emissividade ou superior). OBS: Todas as despesas por conta da compradora. A PRONTA ENTREGA: Carregamento a combinar. Sob confirmação de unidade disponível em estoque.",
    imagens: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
  }
];