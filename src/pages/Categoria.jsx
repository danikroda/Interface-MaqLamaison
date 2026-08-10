import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { categoriasBase, produtosBase } from "../data";

const CategoriaScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Estados
  const [busca, setBusca] = useState("");
  const [resultadosBusca, setResultadosBusca] = useState([]);

  // Controle do Modal e do Carrossel de Imagens
  const [produtoModal, setProdutoModal] = useState(null);
  const [imagemIndexModal, setImagemIndexModal] = useState(0);

  const categoriaAtual = categoriasBase.find((cat) => cat.id === id);
  const produtosDaCategoria = produtosBase.filter((p) => p.categoriaId === id);
  const whatsappLink = "https://wa.me/5543996773333";

  useEffect(() => {
    window.scrollTo(0, 0);
    const produtoIdUrl = searchParams.get("produto");
    if (produtoIdUrl) {
      const prod = produtosBase.find((p) => p.id === produtoIdUrl);
      if (prod) abrirModal(prod);
    }
  }, [id, searchParams]);

  useEffect(() => {
    if (busca.length > 2) {
      const filtrados = produtosBase.filter(
        (p) =>
          p.nome.toLowerCase().includes(busca.toLowerCase()) ||
          p.descricao.toLowerCase().includes(busca.toLowerCase()),
      );
      setResultadosBusca(filtrados);
    } else {
      setResultadosBusca([]);
    }
  }, [busca]);

  const irParaProduto = (catId, prodId) => {
    setBusca("");
    navigate(`/categoria/${catId}?produto=${prodId}`);
  };

  const abrirModal = (prod) => {
    setProdutoModal(prod);
    setImagemIndexModal(0); // Sempre abre na primeira imagem
  };

  const fecharModal = () => {
    setProdutoModal(null);
    navigate(`/categoria/${id}`, { replace: true });
  };

  // Funções do Carrossel (com trava de segurança)
  const proximaImagem = () => {
    if (produtoModal) {
      const imagens = produtoModal.imagens || [produtoModal.imagem];
      setImagemIndexModal((prev) =>
        prev === imagens.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const imagemAnterior = () => {
    if (produtoModal) {
      const imagens = produtoModal.imagens || [produtoModal.imagem];
      setImagemIndexModal((prev) =>
        prev === 0 ? imagens.length - 1 : prev - 1,
      );
    }
  };

  if (!categoriaAtual) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FDFBF7]">
        <h1 className="text-3xl font-bold text-[#2C2825]">
          Categoria não encontrada
        </h1>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-8 py-3 bg-[#C29B4A] text-[#2C2825] font-bold uppercase rounded"
        >
          Voltar ao Início
        </button>
      </div>
    );
  }

  // Prepara as imagens do modal com segurança
  const imagensModal = produtoModal
    ? produtoModal.imagens || [produtoModal.imagem]
    : [];

  return (
    <div
      className="w-full min-h-screen flex flex-col bg-[#FDFBF7]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Nav Principal */}
      <nav className="sticky top-0 z-50 w-full px-6 md:px-12 py-3 shadow-xl bg-[#2C2825] border-b border-[#48423C]">
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto gap-4">
          <div
            className="flex items-center justify-center cursor-pointer py-1 flex-shrink-0"
            onClick={() => navigate("/")}
          >
            <img
              src="/logo.svg"
              alt="Logo Maq La Maison"
              className="h-16 w-auto object-contain"
            />
          </div>

          <div className="hidden md:flex flex-col items-end gap-4 w-full">
            <div className="relative flex items-center bg-[#3A3530] border border-[#48423C] rounded-md overflow-visible w-full max-w-md focus-within:border-[#C29B4A] z-50">
              <div className="px-3 flex items-center justify-center text-white/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar máquinas..."
                className="w-full py-2 px-2 bg-transparent outline-none text-[#FDFBF7] text-sm placeholder-white/40"
              />
              {resultadosBusca.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white border border-[#E8E2D6] shadow-2xl rounded-md overflow-y-auto max-h-72 z-50">
                  <div className="p-2 bg-[#F4EFE6] text-[#3A3530] text-xs font-bold uppercase tracking-wider border-b border-[#E8E2D6]">
                    Resultados:
                  </div>
                  {resultadosBusca.map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => irParaProduto(prod.categoriaId, prod.id)}
                      className="p-3 border-b border-[#E8E2D6] hover:bg-[#F4EFE6] cursor-pointer transition-colors flex flex-col gap-1"
                    >
                      <h4 className="font-bold text-[#2C2825] text-sm leading-tight">
                        {prod.nome}
                      </h4>
                      <div className="flex justify-between items-center text-xs text-[#6A625A]">
                        <span>{prod.medida}</span>
                        <span className="font-bold text-[#9E7A31]">
                          {prod.valor}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-8">
              <button
                onClick={() => navigate("/")}
                className="text-[#C29B4A] font-bold uppercase text-xs hover:text-white transition-colors tracking-wider"
              >
                ➔ Voltar ao Início
              </button>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#C29B4A] text-[#2C2825] px-6 py-2 rounded font-bold shadow-sm hover:bg-[#9E7A31] hover:text-white text-sm transition-all"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Título da Categoria */}
      <header className="w-full bg-[#E8E2D6] py-16 text-center shadow-inner border-b border-[#DBC07A]">
        <h1
          className="text-4xl md:text-5xl font-black uppercase text-[#2C2825]"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          {categoriaAtual.nome}
        </h1>
        <p className="mt-4 text-[#6A625A] text-lg font-medium">
          Equipamentos disponíveis nesta categoria.
        </p>
      </header>

      {/* Grid de Produtos */}
      <main className="w-full max-w-7xl mx-auto px-6 py-20 flex-1">
        {produtosDaCategoria.length === 0 ? (
          <div className="text-center py-20 text-[#6A625A] text-xl">
            Nenhuma máquina cadastrada nesta categoria ainda.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosDaCategoria.map((prod) => (
              <div
                key={prod.id}
                className="bg-white rounded-lg shadow-md border border-[#E8E2D6] overflow-hidden flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-full h-56 bg-gray-200 border-b border-[#E8E2D6] relative overflow-hidden">
                  {/* Na grade mantemos object-cover para padronizar as caixinhas */}
                  <img
                    src={prod.imagens ? prod.imagens[0] : prod.imagem}
                    alt={prod.nome}
                    className="w-full h-full object-cover text-transparent group-hover:scale-105 transition-transform duration-500"
                  />

                  <span className="absolute top-4 right-4 bg-[#2C2825] text-white text-xs font-bold px-3 py-1 rounded shadow-md uppercase">
                    {prod.tipo}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#2C2825] mb-2 uppercase leading-tight">
                      {prod.nome}
                    </h3>
                    <p className="text-[#6A625A] text-sm font-medium mb-4 flex flex-col gap-1">
                      <span>📏 {prod.medida}</span>
                      <span className="text-[#9E7A31] font-bold text-base mt-2">
                        {prod.valor}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={() => abrirModal(prod)}
                    className="w-full bg-[#F4EFE6] text-[#2C2825] border border-[#DBC07A] py-3 rounded font-bold text-sm uppercase hover:bg-[#C29B4A] transition-colors mt-4"
                  >
                    Ver Detalhes Completos
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* JANELA MODAL CORRIGIDA */}
      {produtoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          {/* Adicionado max-h-[90vh] para o modal não estourar a tela */}
          <div className="bg-white w-full max-w-5xl max-h-[90vh] rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row relative animate-[heroIn_0.3s_ease-out]">
            {/* Botão Fechar */}
            <button
              onClick={fecharModal}
              className="absolute top-4 right-4 z-20 bg-[#2C2825] text-white w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-600 transition-colors shadow-lg"
            >
              ✕
            </button>

            {/* Carrossel de Imagens no Modal - CORRIGIDO PARA OBJECT-CONTAIN */}
            <div className="w-full md:w-1/2 h-64 md:h-auto bg-[#E8E2D6] relative group flex items-center justify-center overflow-hidden">
              <img
                src={imagensModal[imagemIndexModal] || imagensModal[0]}
                alt={`${produtoModal.nome} - Imagem ${imagemIndexModal + 1}`}
                // Mudança principal aqui: object-contain garante que a imagem apareça inteira sem vazar
                className="w-full h-full object-contain max-h-[85vh] p-2"
              />

              {/* Setas do Carrossel */}
              {imagensModal.length > 1 && (
                <>
                  <button
                    onClick={imagemAnterior}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-[#2C2825]/70 hover:bg-[#C29B4A] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 shadow-md"
                  >
                    ❮
                  </button>
                  <button
                    onClick={proximaImagem}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#2C2825]/70 hover:bg-[#C29B4A] text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 shadow-md"
                  >
                    ❯
                  </button>

                  {/* Bolinhas indicadoras */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-3 py-1.5 rounded-full">
                    {imagensModal.map((_, index) => (
                      <span
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${index === imagemIndexModal ? "bg-[#C29B4A] scale-110" : "bg-white/60"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Informações Completas */}
            <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto max-h-[90vh]">
              <span className="text-[#9E7A31] font-bold text-xs uppercase tracking-widest mb-2">
                {produtoModal.tipo}
              </span>
              <h2
                className="text-3xl font-black text-[#2C2825] mb-4 uppercase"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {produtoModal.nome}
              </h2>

              <div className="flex flex-col gap-2 mb-6 p-4 bg-[#F4EFE6] rounded-md border border-[#E8E2D6]">
                <span className="text-sm text-[#6A625A]">
                  <strong>Medida Útil:</strong> {produtoModal.medida}
                </span>
                <span className="text-lg text-[#9E7A31] font-black">
                  Valor: {produtoModal.valor}
                </span>
              </div>

              <div className="text-sm text-[#6A625A] leading-relaxed mb-8 flex-1 whitespace-pre-wrap">
                <strong className="text-[#2C2825] block mb-2">
                  Descrição Técnica e Observações:
                </strong>
                {produtoModal.descricao}
              </div>

              <a
                href={`https://wa.me/5543996773333?text=Olá! Tenho interesse na máquina: *${produtoModal.nome}* (${produtoModal.medida}). Pode me passar mais informações?`}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-[#2C2825] text-white py-4 rounded font-bold text-sm uppercase hover:bg-[#C29B4A] hover:text-[#2C2825] transition-all shadow-lg mt-auto"
              >
                TENHO INTERESSE (WHATSAPP)
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="w-full bg-[#2C2825] text-white/60 py-10 mt-auto text-center text-sm border-t border-[#3A3530]">
        © 2026 Maq La Maison Intermediações. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default CategoriaScreen;
