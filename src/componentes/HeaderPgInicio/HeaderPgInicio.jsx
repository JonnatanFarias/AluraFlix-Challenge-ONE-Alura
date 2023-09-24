import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HeaderPgInicio.css';

export default function HeaderPgInicio() {
    const [video, setVideo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("https://64c46d9b67cfdca3b660c40a.mockapi.io/produto/aluraFlix/13")
            .then((response) => {
                setVideo(response.data);
            })
            .catch((erro) => {
                setError(erro);
            });
    }, []);

    if (error) {
        return <div>Erro ao buscar dados da API: {error.message}</div>;
    }

    const estiloH1 = {
        backgroundColor: video ? (video.categoriaId === "frontend" ? "corFrontend" : "default-color") : 'default-color',
    };

    return (
        <div className="inicial">
            <img className="background" src={video ? video.capa : ''} alt="Capa video" />
            <div className="containerInicial">
                <div className="headerInicial">
                    <div className="headerSobre">
                        <h1 style={estiloH1}>
                            {video ? video.categoriaId : 'Título Padrão'}
                        </h1>
                        <h2>{video ? video.descricao : 'Título Padrão'}</h2>
                        <p>{/*video ? video.descricao : 'Descrição Padrão'*/}</p>
                    </div>
                    <div className="headerImg">
                        <img src={video ? video.capa : ''} alt="Capa video" />
                    </div>
                </div>
            </div>
        </div>
    );
}
