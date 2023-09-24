import { Button, TextField } from '@mui/material'
import './AddCategoria.css'

import { useState } from 'react'
import axios from 'axios'

export default function AddCategoria(props) {

    const [campoTitulo, setCampoTitulo] = useState()
    const [campoDescricao, setCampoDescricao] = useState()
    const [campoCor, setCampoCor] = useState()
    const [campoid, setCampoId] = useState()


    let addCateg = {
        id: campoid,
        titulo: campoTitulo,
        cor: campoCor,
        descricao: campoDescricao
    }
    function enviar() {
        axios.post(`http://localhost:3000/categorias`, addCateg)
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
        setCampoTitulo('')
        setCampoDescricao('')
        setCampoCor('')
        setCampoId('')
    }

    return (
        <main className='containerAddCategoria'>
            <h1>Adicionar Categoria</h1>
            <div>
                <TextField fullWidth id="filled-basic" label="Título" variant="filled" margin="normal" value={campoTitulo} onChange={(e) => setCampoTitulo(e.target.value)} />
                <TextField fullWidth id="filled-basic" label="Descrição" variant="filled" multiline minRows={4} margin="normal" value={campoDescricao} onChange={(e) => setCampoDescricao(e.target.value)} />
                <TextField fullWidth id="filled-basic" type={"color"} label="Título" variant="filled" margin="normal" value={campoCor} onChange={(e) => setCampoCor(e.target.value)} />
                <TextField fullWidth id="filled-basic" label="Código de segurança" variant="filled" margin="normal" value={campoid} onChange={(e) => setCampoId(e.target.value)} />
                <div className='buttonContainer'>
                    <div className='groupButtons'>
                        <Button variant="contained" onClick={enviar}>Salvar</Button>
                        <Button variant="contained" onClick={limpar} color='inherit'>Limpar</Button>
                    </div>
                    <Button variant="contained" onClick={props.voltarPagina} color='inherit'>Voltar</Button>
                </div>
            </div>

        </main>
    )
}