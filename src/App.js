import AppEntrega from "./Componentes/AppEntrega";
import Cardapio from "./Componentes/Cardapio";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Navbar from "./Componentes/Navbar";
import Slider from "./Componentes/Slider";

function App() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <AppEntrega/>
      <Cardapio/>
      <Footer/>
    </div>
  );
}

export default App;
