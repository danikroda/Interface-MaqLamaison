import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

/* Aparece suavemente quando entra na tela (scroll reveal) */
const Reveal = ({ children, className = "", as: Tag = "div", delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
};

/* Numeração-assinatura: algarismo serifado itálico + filete dourado */
const Eyebrow = ({ n, center = false }) => (
  <div className={`eyebrow ${center ? "eyebrow--center" : ""}`}>
    {center && <span className="eyebrow-rule" />}
    <span className="eyebrow-num">{n}</span>
    <span className="eyebrow-rule" />
  </div>
);

const HomeScreen = () => {
  const navigate = useNavigate();

  const categorias = [
    { id: "fornos-tempera", nome: "Fornos de Têmpera", imagem: "/foto-forno.jpg", pdf: "/catalogo-forno.pdf" },
    { id: "mesas-corte", nome: "Mesas de Corte", imagem: "/foto-mesa.jpg", pdf: "/catalogo-mesa.pdf" },
    { id: "lapidadoras", nome: "Lapidadoras / Bilateral", imagem: "/foto-lapidadora.jpg", pdf: "/catalogo-lapidadora.pdf" },
    { id: "bizeladoras", nome: "Bizeladoras", imagem: "/foto-bizeladora.jpg", pdf: "/catalogo-bizeladora.pdf" },
    { id: "furadeiras", nome: "Furadeiras / Centro de Usinagem", imagem: "/foto-furadeira.jpg", pdf: "/catalogo-furadeira.pdf" },
    { id: "lavadoras", nome: "Lavadoras", imagem: "/foto-lavadora.jpg", pdf: "/catalogo-lavadora.pdf" },
    { id: "fornos-laminacao", nome: "Fornos de Laminação (EVA / PVB)", imagem: "/foto-laminacao.jpg", pdf: "/catalogo-laminacao.pdf" },
    { id: "movimentacao", nome: "Movimentação / Estocagem", imagem: "/foto-movimentacao.jpg", pdf: "/catalogo-movimentacao.pdf" },
    { id: "itens-diversos", nome: "Itens Diversos", imagem: "/foto-diversos.jpg", pdf: "/catalogo-diversos.pdf" },
    { id: "industrias", nome: "Indústrias Temperadoras (À Venda)", imagem: "/foto-industria.jpg", pdf: "/catalogo-industria.pdf" },
  ];

  const diferenciais = [
    { titulo: "Negociações seguras", texto: "Conduzimos cada etapa com transparência e responsabilidade." },
    { titulo: "Procedência confiável", texto: "Trabalhamos com equipamentos que fazem sentido para o mercado." },
    { titulo: "Experiência real", texto: "Anos de atuação no setor de vidro float." },
    { titulo: "Rede de contatos", texto: "Conectamos oportunidades com quem realmente compra." },
    { titulo: "Acompanhamento completo", texto: "Você não negocia sozinho em nenhum momento." },
    { titulo: "Atendimento consultivo", texto: "Entendemos sua necessidade antes de oferecer qualquer solução." }
  ];

  const passos = [
    { n: "01", titulo: "Contato inicial", texto: "Você fala conosco pelo WhatsApp e apresenta sua necessidade." },
    { n: "02", titulo: "Análise", texto: "Avaliamos o cenário e identificamos as melhores oportunidades." },
    { n: "03", titulo: "Intermediação", texto: "Conectamos as partes e acompanhamos a negociação." },
    { n: "04", titulo: "Fechamento", texto: "Tudo acontece com segurança, clareza e suporte profissional." }
  ];

  const irParaCategoria = (id) => navigate(`/categoria/${id}`);
  const whatsappLink = "https://wa.me/5543996773333";

  return (
    <div
      className="maq-shell w-full min-h-screen flex flex-col"
      style={{ backgroundColor: "#FBF7EF", colorScheme: "light" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,800;0,900;1,500;1,700&family=Inter:wght@400;500;600;700;800&display=swap');

        .maq-shell {
          font-family: 'Inter', system-ui, sans-serif;
          --ink: #211811;
          --ink-2: #33261A;
          --ink-3: #2B2019;
          --gold: #C9A227;
          --gold-light: #E3C36B;
          --ember: #BD5B2E;
          --ember-light: #E08B4E;
          --cream: #FBF7EF;
          --cream-dim: #F2E9D8;
          --text-soft: #5B4C3D;
          --border-warm: #E7DAC0;
        }
        html { scroll-behavior: smooth; }
        .maq-shell h1, .maq-shell h2, .maq-shell h3, .maq-shell .font-serif-display {
          font-family: 'Fraunces', serif;
        }

        .eyebrow { display:flex; align-items:center; gap:14px; margin-bottom:14px; }
        .eyebrow--center { justify-content:center; }
        .eyebrow-num { font-family:'Fraunces',serif; font-style:italic; font-weight:800; font-size:1.05rem; letter-spacing:.14em; color: var(--gold); }
        .eyebrow-rule { height:1px; width:44px; flex:0 0 auto; background: linear-gradient(90deg, var(--gold), transparent); }
        .eyebrow--center .eyebrow-rule:first-child { background: linear-gradient(90deg, transparent, var(--gold)); }
        .eyebrow:not(.eyebrow--center) .eyebrow-rule { flex:1 1 auto; max-width:80px; }

        .reveal { opacity:0; transform: translateY(26px); transition: opacity .7s ease, transform .7s ease; }
        .reveal-visible { opacity:1; transform:none; }

        @keyframes heroIn { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform:none; } }
        .hero-item { opacity:0; animation: heroIn .8s ease forwards; }
        .hero-item:nth-child(1){ animation-delay:.05s; }
        .hero-item:nth-child(2){ animation-delay:.18s; }
        .hero-item:nth-child(3){ animation-delay:.30s; }
        .hero-item:nth-child(4){ animation-delay:.42s; }

        @keyframes driftGradient { 0% { background-position: 0% 50%; } 100% { background-position: 100% 50%; } }
        .hero-gradient {
          background: linear-gradient(120deg, var(--ember) 0%, #CE8A3E 45%, var(--gold) 100%);
          background-size: 200% 200%;
          animation: driftGradient 14s ease-in-out infinite alternate;
        }
        @keyframes glow { 0%,100% { opacity:.35; } 50% { opacity:.6; } }
        .hero-glow {
          position:absolute; border-radius:9999px; filter: blur(60px);
          background: radial-gradient(circle, rgba(255,214,140,0.55), transparent 70%);
          animation: glow 6s ease-in-out infinite;
        }

        .cor-primaria { background-color: var(--ink); }
        .texto-primario { color: var(--ink); }
        .cor-dourada { color: var(--gold); }

        .cat-item { transition: all .2s ease; border-bottom: 1px solid var(--border-warm); }
        .cat-item:hover { background-color: var(--cream-dim); color: var(--ember); padding-left: 1.25rem; }

        .cat-header { position:relative; overflow:hidden; }
        .cat-header::after {
          content:""; position:absolute; top:0; right:0;
          border-style:solid; border-width:0 30px 30px 0;
          border-color: transparent var(--gold) transparent transparent;
        }

        .card-lift { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease; }
        .card-lift:hover { transform: translateY(-4px); box-shadow: 0 14px 32px -12px rgba(33,24,17,0.25); }

        .btn-glow { transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease; }
        .btn-glow:hover { transform: translateY(-2px); }

        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(37,211,102,0.45); }
          70% { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
        }
        .whatsapp-float { animation: pulseRing 2.8s ease-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .hero-item, .hero-gradient, .hero-glow, .whatsapp-float {
            animation: none !important; transition: none !important; opacity:1 !important; transform:none !important;
          }
        }
      `}</style>

      {/* Faixa de Contato Topo */}
      <div className="w-full text-xs text-[var(--text-soft)] py-2 px-6 md:px-12 flex justify-between bg-white border-b border-[var(--border-warm)]">
        <span>📞 +55 (43) 9 9677-3333 | vendas@maqlamaison.com.br</span>
        <div className="flex gap-4">
          <a href="#oportunidades" className="hover:text-[var(--ember)] font-semibold transition-colors">Ver Equipamentos</a>
        </div>
      </div>

      {/* Nav Principal */}
      <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-6 md:px-12 py-4 shadow-md bg-white border-b border-gray-100">
        <div className="flex items-center gap-4 w-full max-w-7xl mx-auto">
          <button className="text-[var(--ink)] text-2xl md:hidden">☰</button>

          <div className="flex items-center justify-center cursor-pointer" onClick={() => navigate('/')}>
             {/* Logo Oficial Inserida Aqui */}
             <img src="/logo.png" alt="Logo Maq La Maison" className="h-16 w-auto object-contain" />
          </div>

          <div className="flex-1 max-w-2xl mx-6 hidden md:flex items-center bg-gray-50 border border-gray-200 rounded-md overflow-hidden">
            <span className="px-3 text-[var(--text-soft)]">🔍</span>
            <input
              type="text"
              placeholder="Buscar máquinas, fornos, mesas..."
              className="w-full py-2 px-2 bg-transparent outline-none text-gray-700"
            />
          </div>

          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-glow hidden md:flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 font-semibold shadow-sm">
            Falar no WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full hero-gradient flex items-center justify-center relative overflow-hidden min-h-[400px]">
        <div className="hero-glow w-72 h-72 -top-10 -left-10"></div>
        <div className="hero-glow w-96 h-96 bottom-0 right-0"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-20"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between text-white">
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="hero-item text-4xl md:text-5xl font-black uppercase italic drop-shadow-lg leading-tight mb-4">
              Intermediação Profissional
            </h1>
            <p className="hero-item text-xl md:text-2xl font-light mb-2">
              Compra e venda de máquinas semi-novas e usadas para o setor de vidro float.
            </p>
            <p className="hero-item text-lg font-semibold text-white/95 mb-8 font-serif-display italic">
              Sua confiança é a nossa maior conquista.
            </p>
            <div className="hero-item flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-glow bg-green-600 hover:bg-green-700 px-8 py-3 rounded text-sm font-bold uppercase text-center shadow-lg">
                Falar no WhatsApp
              </a>
              <a href="#oportunidades" className="btn-glow bg-[var(--cream)] text-[var(--ink)] hover:bg-white px-8 py-3 rounded text-sm font-bold uppercase text-center shadow-lg">
                Ver Oportunidades
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Menu Lateral + Institucional */}
      <main className="w-full max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8">

        {/* Sidebar Esquerda: Categorias */}
        <Reveal as="aside" className="w-full md:w-1/4 flex-shrink-0">
          <div className="cat-header cor-primaria text-white p-4 font-bold uppercase tracking-wider text-sm rounded-t flex justify-between items-center">
            Equipamentos
          </div>
          <ul className="bg-white border-l border-r border-b border-[var(--border-warm)] shadow-sm rounded-b overflow-hidden">
            {categorias.map((cat) => (
              <li
                key={cat.id}
                onClick={() => irParaCategoria(cat.id)}
                className="cat-item p-3.5 text-sm font-medium text-gray-700 cursor-pointer uppercase flex justify-between items-center group"
              >
                {cat.nome}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity cor-dourada">➔</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 bg-[var(--ink-2)] text-white p-5 rounded shadow-sm">
            <h3 className="font-bold uppercase text-sm mb-3 cor-dourada">Nossos Serviços</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">✓ Assessoria em Layout de Nova Fábrica</li>
              <li className="flex items-center gap-2">✓ Parceria com Equipes Técnicas</li>
            </ul>
          </div>
        </Reveal>

        {/* Conteúdo Direito: Quem Somos, O que fazemos, Para Quem É */}
        <div className="w-full md:w-3/4 flex flex-col gap-8">

          <Reveal className="card-lift bg-white p-8 rounded shadow-sm border-t-4 border-[var(--gold)]">
            <Eyebrow n="01" />
            <h2 className="text-3xl font-bold texto-primario mb-4">Quem Somos</h2>
            <h3 className="text-xl text-[var(--text-soft)] mb-4 font-medium italic font-serif-display">Experiência que gera confiança em cada negociação.</h3>
            <p className="text-[var(--text-soft)] leading-relaxed mb-4">
              Somos uma empresa familiar com forte atuação no mercado de intermediação de máquinas para o setor de vidro float. Ao longo dos anos, construímos uma reputação baseada em negociações seguras, transparentes e bem conduzidas.
            </p>
            <p className="text-[var(--text-soft)] leading-relaxed font-semibold">
              Aqui, cada oportunidade é tratada com seriedade, responsabilidade e foco em resultados reais para quem compra e para quem vende.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={80} className="card-lift bg-[var(--ink)] text-white p-8 rounded shadow-sm relative overflow-hidden">
              <Eyebrow n="02" />
              <h2 className="text-2xl font-bold mb-4 cor-dourada">O que Fazemos</h2>
              <h3 className="text-lg mb-4 font-medium">Intermediação completa para quem busca segurança</h3>
              <p className="text-white/70 leading-relaxed text-sm">
                Atuamos na divulgação, intermediação e assessoria na compra e venda de equipamentos semi-novos e usados. Mais do que conectar partes, garantimos que cada negociação aconteça com clareza, procedência e confiança. Nosso papel é reduzir riscos e facilitar decisões.
              </p>
            </Reveal>

            <Reveal delay={160} className="card-lift bg-[var(--cream-dim)] p-8 rounded shadow-sm border border-[var(--border-warm)] relative">
              <Eyebrow n="03" />
              <h2 className="text-2xl font-bold mb-4 texto-primario">Para Quem É</h2>
              <p className="text-sm font-semibold text-[var(--text-soft)] mb-3">Empresas que valorizam boas negociações:</p>
              <ul className="space-y-2 text-sm text-gray-700 font-medium mb-4">
                <li>🔹 Vidraçarias</li>
                <li>🔹 Distribuidoras de vidro plano e temperado</li>
                <li>🔹 Temperadoras</li>
                <li>🔹 Empresas do setor de esquadrias de vidro</li>
                <li>🔹 Investidores do segmento</li>
              </ul>
            </Reveal>
          </div>

        </div>
      </main>

      {/* Seção 04: Diferenciais */}
      <section className="w-full bg-[var(--ink)] py-16 border-y-4 border-[var(--gold)]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <Eyebrow n="04" center />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Nossos Diferenciais</h2>
            <p className="text-white/70 mb-12 text-lg">Por que negociar com a La Maison?</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {diferenciais.map((dif, index) => (
              <Reveal key={index} delay={index * 70} className="card-lift bg-[var(--ink-3)] p-6 rounded border border-white/10 hover:border-[var(--gold)]">
                <h4 className="cor-dourada font-bold text-lg mb-2">{dif.titulo}</h4>
                <p className="text-white/70 text-sm">{dif.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 05: Como Funciona */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <Eyebrow n="05" center />
            <h2 className="text-3xl md:text-4xl font-bold texto-primario mb-2">Como Funciona</h2>
            <p className="text-[var(--text-soft)] mb-12 text-lg">Um processo simples, seguro e eficiente.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {passos.map((passo, index) => (
              <Reveal key={index} delay={index * 90} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[var(--ink)] text-white flex items-center justify-center text-2xl font-black shadow-lg mb-4 border-2 border-[var(--gold)] font-serif-display">
                  {passo.n}
                </div>
                <h4 className="font-bold text-lg texto-primario mb-2">{passo.titulo}</h4>
                <p className="text-[var(--text-soft)] text-sm leading-relaxed">{passo.texto}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 06: Oportunidades Disponíveis */}
      <section id="oportunidades" className="w-full bg-[var(--cream-dim)] py-16 border-t border-[var(--border-warm)]">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-12">
             <Eyebrow n="06" center />
             <h2 className="text-3xl md:text-4xl font-bold texto-primario mb-2">Oportunidades Disponíveis</h2>
             <p className="text-[var(--text-soft)]">Se alguma oportunidade fizer sentido para o seu negócio, fale diretamente conosco.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((cat, index) => (
              <Reveal key={cat.id} delay={(index % 3) * 70} className="card-lift bg-white rounded shadow-sm border border-[var(--border-warm)] flex flex-col justify-between overflow-hidden">
                
                <div className="w-full h-48 bg-gray-200 border-b border-[var(--border-warm)] relative">
                   <img src={cat.imagem} alt={cat.nome} className="w-full h-full object-cover" />
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="mb-6 text-center">
                     <h3 className="text-lg font-bold texto-primario uppercase">{cat.nome}</h3>
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <a href={cat.pdf} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 text-[var(--ink)] border border-[var(--ink)] hover:bg-[var(--cream-dim)] transition-colors py-2.5 rounded font-bold text-xs uppercase">
                      📄 VER CATÁLOGO (PDF)
                    </a>
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-glow w-full bg-[var(--ink)] hover:bg-[var(--ember)] text-white text-center py-3 rounded font-bold text-sm uppercase">
                      TENHO INTERESSE
                    </a>
                  </div>
                </div>

              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Seção 07 e 08: Confiança e Contato Final */}
      <section className="w-full bg-white py-20 text-center px-6">
         <Reveal>
           <h2 className="text-4xl md:text-5xl font-black texto-primario mb-6 italic drop-shadow-sm font-serif-display">
             "Sua confiança é a nossa maior conquista."
           </h2>
           <p className="text-[var(--text-soft)] text-lg max-w-2xl mx-auto mb-12">
             Nosso nome foi construído ao longo dos anos com base em seriedade, transparência e resultados. Cada negociação é tratada como um compromisso com o cliente. Se você deseja vender ou encontrar uma oportunidade com segurança, fale conosco agora.
           </p>
           <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn-glow inline-block bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-lg font-black text-xl uppercase shadow-xl border-b-4 border-green-800">
              FALAR NO WHATSAPP
           </a>
         </Reveal>
      </section>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 z-50 text-3xl"
      >
        <span className="sr-only">WhatsApp</span>
        💬
      </a>

      {/* Footer */}
      <footer className="w-full bg-[var(--ink)] text-white/60 pt-16 pb-8 mt-auto font-sans">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* Coluna 1: Logo e Descrição */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center">
                 {/* Logo Oficial Inserida Aqui */}
                 <div className="bg-white p-2 rounded-lg inline-block">
                   <img src="/logo.png" alt="Logo Maq La Maison" className="h-16 w-auto object-contain" />
                 </div>
              </div>
              <p className="text-sm leading-relaxed max-w-sm mt-2">
                Intermediação profissional na compra e venda de máquinas para o setor de vidro float.
              </p>
            </div>

            {/* Coluna 2: Contato */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[var(--gold)] font-bold text-[13px] tracking-[0.2em] uppercase">Contato</h4>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  +55 (43) 9 9677-3333
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  vendas@maqlamaison.com.br
                </li>
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                  WhatsApp
                </li>
              </ul>
            </div>

            {/* Coluna 3: Redes Sociais */}
            <div className="flex flex-col gap-6">
              <h4 className="text-[var(--gold)] font-bold text-[13px] tracking-[0.2em] uppercase">Redes Sociais</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="btn-glow w-10 h-10 border border-white/15 rounded flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="btn-glow w-10 h-10 border border-white/15 rounded flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="btn-glow w-10 h-10 border border-white/15 rounded flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </a>
                <a href="#" className="btn-glow w-10 h-10 border border-white/15 rounded flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
                </a>
                <a href="#" className="btn-glow w-10 h-10 border border-white/15 rounded flex items-center justify-center hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>

          </div>

          <hr className="border-white/10 mb-8" />

          <div className="w-full text-xs text-white/40 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p>
              © 2026 Maq La Maison Intermediações. Todos os direitos reservados. Por <span className="text-[var(--gold)] font-semibold">Agência Konkah</span>
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;