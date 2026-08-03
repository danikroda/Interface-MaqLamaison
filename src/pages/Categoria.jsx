import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CategoriaScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // A mesma lista da Home para puxar o nome correto
  const categorias = [
    { id: "fornos-tempera", nome: "Fornos de Têmpera" },
    { id: "mesas-corte", nome: "Mesas de Corte" },
    { id: "lapidadoras", nome: "Lapidadoras / Bilateral" },
    { id: "bizeladoras", nome: "Bizeladoras" },
    { id: "furadeiras", nome: "Furadeiras / Centro de Usinagem" },
    { id: "lavadoras", nome: "Lavadoras" },
    { id: "fornos-laminacao", nome: "Fornos de Laminação (EVA / PVB)" },
    { id: "movimentacao", nome: "Movimentação / Estocagem" },
    { id: "itens-diversos", nome: "Itens Diversos" },
    { id: "industrias", nome: "Indústrias Temperadoras (À Venda)" },
  ];

  const categoriaAtual = categorias.find((cat) => cat.id === id);
  const whatsappLink = "https://wa.me/5543996773333";

  // Rola para o topo sempre que a página carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!categoriaAtual) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7]">
        <h1 className="text-3xl font-bold text-[#2C2825]">Categoria não encontrada</h1>
        <button onClick={() => navigate("/")} className="mt-6 px-8 py-3 bg-[#C29B4A] text-[#2C2825] font-bold uppercase rounded">
          Voltar ao Início
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#FDFBF7]" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Nav Principal (Simplificada para a página interna) */}
      <nav className="sticky top-0 z-50 w-full px-6 md:px-12 py-3 shadow-xl bg-[#2C2825] border-b border-[#48423C]">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-4">
          <div className="flex items-center justify-center cursor-pointer py-1" onClick={() => navigate('/')}>
            
              <img src="/logo.svg" alt="Logo" className="h-16 w-auto object-contain" />
            
          </div>
          
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('/')} className="text-[#C29B4A] font-bold uppercase text-sm hover:text-white transition-colors">
              ➔ Voltar ao Início
            </button>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="bg-[#C29B4A] text-[#2C2825] px-6 py-2 rounded font-bold shadow-sm hover:bg-[#9E7A31] hover:text-white transition-all text-sm">
              WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Título da Categoria */}
      <header className="w-full bg-[#E8E2D6] py-16 text-center shadow-inner">
        <h1 className="text-4xl md:text-5xl font-black uppercase text-[#2C2825]" style={{ fontFamily: "'Fraunces', serif" }}>
          {categoriaAtual.nome}
        </h1>
        <p className="mt-4 text-[#6A625A] text-lg">Confira as opções disponíveis para este maquinário.</p>
      </header>

      {/* Grid de Produtos (Espaço para você preencher depois) */}
      <main className="w-full max-w-7xl mx-auto px-6 py-20 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Card de Exemplo */}
           <div className="bg-white rounded-lg shadow-md border border-[#E8E2D6] overflow-hidden flex flex-col">
              <div className="w-full h-48 bg-gray-200">
                 <img src="/foto-forno.jpg" alt="Exemplo" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                 <h3 className="text-xl font-bold text-[#2C2825] mb-4 uppercase">Máquina Exemplo 01</h3>
                 <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full bg-[#2C2825] text-white py-3 rounded font-bold text-sm uppercase hover:bg-[#C29B4A] transition-colors">
                   Consultar Preço
                 </a>
              </div>
           </div>
           {/* Fim do Card de Exemplo */}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#2C2825] text-white/60 py-10 mt-auto text-center text-sm">
        © 2026 Maq La Maison Intermediações. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default CategoriaScreen;