import { BrowserRouter, Routes, Route } from "react-router-dom";
// Ajuste o caminho abaixo se o nome do seu arquivo ou pasta for diferente
import HomeScreen from "./pages/Home"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Quando o usuário acessar a raiz do site ("/"), renderiza a HomeScreen */}
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;