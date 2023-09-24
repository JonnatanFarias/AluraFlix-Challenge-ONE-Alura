import React, { useState } from 'react';
import { Button, MenuItem, TextField } from '@mui/material';
import './AddVideo.css';
import axios from 'axios';

export default function AddVideo(props) {
  const [campoTitulo, setCampoTitulo] = useState('');
  const [campoLinkVideo, setCampoLinkVideo] = useState('');
  const [campoCapa, setCampoCapa] = useState('');
  const [campoCategoria, setCampoCategoria] = useState('');
  const [campoDescricao, setCampoDescricao] = useState('');
  const [campoId, setCampoId] = useState('');

  const categorias = [
    { id: 1, titulo: 'Front end' },
    { id: 2, titulo: 'Back end' },
    { id: 3, titulo: 'Banco de dados' },
    { id: 4, titulo: 'Mobile' },
    { id: 5, titulo: 'Dev Ops' },
    { id: 6, titulo: 'Full Stack' },
    { id: 7, titulo: 'Programação' },
    // Adicione mais categorias conforme necessário
  ];

  // Função para encontrar o nome da categoria com base no ID
  const findCategoriaNome = (categoriaId) => {
    const categoria = categorias.find((cat) => cat.id === categoriaId);
    return categoria ? categoria.titulo : '';
  };

  let video = {
    id: campoId,
    titulo: campoTitulo,
    link: campoLinkVideo,
    capa: campoCapa,
    categoriaId: findCategoriaNome(campoCategoria),
    descricaoId: `O melhor do ${findCategoriaNome(campoCategoria)}`,
    descricao: campoDescricao,
  };

  function submit() {
    axios
      .post('https://64c46d9b67cfdca3b660c40a.mockapi.io/produto/aluraFlix', video)
      .then((response) => {
        console.log('Novo vídeo adicionado com sucesso:', response.data);
        // Faça o que for necessário após o sucesso da requisição
      })
      .catch((error) => {
        console.error('Erro ao adicionar novo vídeo:', error);
        // Lide com o erro de alguma forma
      });
  }

  function limpar() {
    setCampoTitulo('');
    setCampoLinkVideo('');
    setCampoCapa('');
    setCampoCategoria('');
    setCampoDescricao('');
    setCampoId('');
  }

  return (
    <main className="containerAddVideo">
      <h1>Adicionar Video</h1>
      <div>
        <TextField
          fullWidth
          id="filled-basic"
          color="info"
          label="Título"
          variant="filled"
          margin="normal"
          value={campoTitulo}
          onChange={(e) => setCampoTitulo(e.target.value)}
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Link do vídeo"
          variant="filled"
          margin="normal"
          value={campoLinkVideo}
          onChange={(e) => setCampoLinkVideo(e.target.value)}
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Link da imagem do vídeo"
          variant="filled"
          margin="normal"
          value={campoCapa}
          onChange={(e) => setCampoCapa(e.target.value)}
        />
        <TextField
          select
          fullWidth
          id="filled-basic"
          label="Escolha uma categoria"
          variant="filled"
          margin="normal"
          value={campoCategoria}
          onChange={(e) => setCampoCategoria(e.target.value)}
        >
          {categorias.map((catg) => (
            <MenuItem key={catg.id} value={catg.id}>
              {catg.titulo}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          fullWidth
          id="filled-basic"
          label="Descrição"
          variant="filled"
          multiline
          minRows={4}
          margin="normal"
          value={campoDescricao}
          onChange={(e) => setCampoDescricao(e.target.value)}
        />
        <TextField
          fullWidth
          id="filled-basic"
          label="Código de segurança"
          variant="filled"
          margin="normal"
          value={campoId}
          onChange={(e) => setCampoId(e.target.value)}
        />
        {/* Exibir o nome da categoria com base no ID selecionado */}
        <TextField
          fullWidth
          id="categoriaNome"
          label="Categoria Selecionada"
          variant="filled"
          margin="normal"
          value={findCategoriaNome(campoCategoria)}
          disabled
        />
      </div>
      <div className="buttonsContainer">
        <div className="groupButtons">
          <Button variant="contained" onClick={submit}>
            Salvar
          </Button>
          <Button variant="contained" onClick={limpar} color="inherit">
            Limpar
          </Button>
        </div>

        <div className="groupButtons">
          <Button variant="contained" color="inherit" onClick={props.voltarPagina}>
            Voltar a página
          </Button>
          {/* <Button variant="contained"  onClick={props.proximaPagina}>Nova Categoria</Button>*/}
        </div>
      </div>
    </main>
  );
}
