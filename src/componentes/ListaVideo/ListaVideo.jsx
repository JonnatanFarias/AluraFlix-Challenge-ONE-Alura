import React from 'react';
import CapaVideo from '../CapaVideo/CapaVideo';
import './ListaVideo.css';

export default function ListaVideo({ categoria }) {
  const estiloH1 = {
    backgroundColor: categoria.length > 0 ? categoria[0].cor : 'default-color',
  };

  return (
    <section className='sectionInicial'>
      <div className='temaVideo'>
        <h2 style={estiloH1}>{categoria.length > 0 ? categoria[0].categoriaId : 'Título da Categoria'}</h2>
        <p style={estiloH1}>{categoria[0].descricaoId}</p>
      </div>
      <div className='listaVideo'>
        {categoria.map((video) => (
          <div key={video.id}>
            <CapaVideo capa={video.capa} link={video.link} />
          </div>
        ))}
      </div>
    </section>
  );
}
