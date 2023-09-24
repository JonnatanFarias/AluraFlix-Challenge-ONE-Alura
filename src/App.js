
import { useState } from 'react';
import Footer from './componentes/Footer/Footer';
import Header from './componentes/Header/Header';
import AddCategoria from './paginas/AddCategoria/AddCategoria';
import AddVideo from './paginas/AddVideo/AddVideo';
import Inicial from './paginas/Inicial/Inicial';

function App() {

  const [pagina, setPagina] = useState(1)

  function mudarPagina() {
    setPagina(pagina + 1)
  }

  function voltarPagina() {
    setPagina(pagina - 1)
  }

  function renderizar() {
    switch (pagina) {
      case 1: return <Inicial />;
      case 2: return <AddVideo proximaPagina={mudarPagina} voltarPagina={voltarPagina} />;
      case 3: return <AddCategoria voltarPagina={voltarPagina} />;
      default: return <Inicial />;
    }
  }

  return (
    <>
      <Header pagina={mudarPagina} btnInicial={pagina} />

      {renderizar()}
      <Footer />
    </>
  );
}

export default App;
