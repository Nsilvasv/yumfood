import AppEntrega from "./Componentes/AppEntrega";
import Cardapio from "./Componentes/Cardapio";
import Favoritos from "./Componentes/Favoritos";
import Header from "./Componentes/Header";
import Slider from "./Componentes/Slider";

function App() {
  return (
    <div>
      <Header/>
      <Slider/>
      <AppEntrega/>
      <Favoritos/>
      <Cardapio/>
    </div>
  );
}

export default App;
