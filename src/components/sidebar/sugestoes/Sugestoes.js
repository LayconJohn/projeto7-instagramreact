import styled from 'styled-components';
import { useState, useEffect } from 'react';

function SugestaoPerfil( {fotoSugestao, nickSugestao, statusSugestao} ) {
    
    return (
        <Sugestao> 
            <PerfilSugestao>
                <img src={fotoSugestao} alt={nickSugestao}/>
                <div>
                    <h4>{nickSugestao}</h4> 
                    <p>{statusSugestao}</p>
                </div>
            </PerfilSugestao>
            <h5>Seguir</h5>
        </Sugestao>
    )
}

export default function Sugestoes(){
    //Estado
    const [sugestoes, setSugestoes] = useState([]);

    //Logic
    useEffect( () => {
        setSugestoes([
            {
                fotoSugestao: "https://nntheblog.b-cdn.net/wp-content/uploads/2022/06/%F0%9D%97%A6%F0%9D%97%B5%F0%9D%97%B6%F0%9D%97%BB%F0%9D%97%BC-%F0%9D%97%94%F0%9D%97%AF%F0%9D%98%82%F0%9D%97%BF%F0%9D%97%AE%F0%9D%97%BA%F0%9D%97%B2-2-1024x1024.jpg",
                nickSugestao: "shino.amburame",
                statusSugestao: "Segue Você"
            },
            {
                fotoSugestao: "https://i.pinimg.com/564x/7c/66/6c/7c666cac7f5c1766d7890cad62c56217.jpg",
                nickSugestao: "iruka.sensei",
                statusSugestao: "Novo no Instagram"
            },
            {
                fotoSugestao: "https://criticalhits.com.br/wp-content/uploads/2019/04/tenten-01.jpg",
                nickSugestao: "tenten",
                statusSugestao: "Segue Você"
            },
            {
                fotoSugestao: "https://nerdhits.com.br/wp-content/uploads/2021/08/konohamaru-oitavo-hokage-boruto-1200x720.jpg",
                nickSugestao: "Konohamaru",
                statusSugestao: "Novo no Instagram"
            },
            {
                fotoSugestao: "https://kanto.legiaodosherois.com.br/w760-h398-cfill/wp-content/uploads/2021/07/legiao_Elq0d3VO1Nmp.png.webp",
                nickSugestao: "kiba",
                statusSugestao: "Segue Você"
            },
        ])
    }, [] )
    return (
        <>
            <Sugestao>
                <p>Sugestões para você</p>
                <h4>Ver tudo</h4>
            </Sugestao>
            <>
                { sugestoes.map( (sugestao, index) => {
                    return <SugestaoPerfil 
                        fotoSugestao={sugestao.fotoSugestao}
                        nickSugestao={sugestao.nickSugestao}
                        statusSugestao={sugestao.statusSugestao}
                    />
                }) }
            </>
        </>
    )
}

const Sugestao = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin-top: 17px;

    p {
        color: #8E8E8E;
        font-weight: 400;
        margin: 0;
    }

    h4 {
        color: #262626;
        font-weight: 600;
        margin: 0;
    }

    h5 {
        color: #139EF2;
        font-weight: 500;
        cursor: pointer;
    }
`;

const PerfilSugestao = styled.div`
    display: flex;

    img {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        object-fit: contain;
        margin-right: 11px;
        cursor: pointer;
        scale: 0.95;
        transition: all ease 0.8s;
    }

    img:hover {
        scale: 1;
    }

`;

