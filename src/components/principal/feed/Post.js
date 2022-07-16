import styled from 'styled-components';
import { useState } from 'react';

import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { BiPaperPlane } from 'react-icons/bi';
import { BsBookmark, BsThreeDots } from 'react-icons/bs';

export default function Post( { 
    fotoPerfil,
    nomePerfil, 
    fotoPost, 
    fotoCurtida, 
    nomeCurtida, 
    curtidas,
    posts,
    setPosts,
    liked   
} ) {

    //State
    const [like, setLike] = useState(liked)

    //logic
    function curtirPost(){
        if (liked) {
            setPosts({...posts, liked: false});
        } else {
            setPosts({...posts, liked: true});
        }

    }

    //render
    return (
        <Postagem>
            <TituloPost>
                <FotoPerfil src={fotoPerfil} alt={nomePerfil} />
                <h4> {nomePerfil} </h4>
                <Opcoes> <BsThreeDots /> </Opcoes>               
            </TituloPost>
            <FotoPost src={fotoPost} alt={nomePerfil} />
            <BotoesPost>
                <BotaoCurtir liked={like} onClick={ () => setLike(!like)}> <AiOutlineHeart /> </BotaoCurtir>
                <span> <FaRegComment /> </span>
                <span> <BiPaperPlane /> </span>
                <div> <BsBookmark /> </div>
            </BotoesPost>
            <Curtidas> 
                <img src={fotoCurtida} alt={nomeCurtida} />
                <p> Curtido por </p> <span>{nomeCurtida}</span>  <p>e</p> <span>outras {curtidas} pessoas</span> 
            </Curtidas>
        </Postagem>
    )
}

const Postagem = styled.div`
    border: 1px solid #DBDBDB;
    width: 100%;
    height: 749px;
    margin-bottom: 60px;
`;

const TituloPost = styled.div`
    display: flex;
    position: relative;
    align-items: center;

    h4 {
        color: #262626;
        font-size: 14px;
        font-weight: 500;
        transition: all ease 0.5s;
        cursor: pointer;
    }

    h4:hover {
        font-weight: 600;
    }
`;

const FotoPerfil = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 16px;
    object-fit: cover;
    margin-left: 17px;
    margin-right: 15px;
    cursor: pointer;
`;

const Opcoes = styled.div`
    position: absolute;
    right: 28px;
    top: 27px;
    scale: 0.8;
    transition: all ease 0.4s;

    &:hover {
        scale: 1;
    }
`;

const BotoesPost = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    span {
        margin-left: 17px;
        margin-top: 14px;
        cursor: pointer;
    }

    div {
        position: absolute;
        right: 17px;
        top: 14px;
    }
`;

const BotaoCurtir = styled.span`
    margin-left: 17px;
    margin-top: 14px;
    color: ${props => props.liked ? "red" : ""};
    scale: 0.95;

    &:hover {
        scale: 1;
    }

    &:active {
        transform: translateY(1px);
    }

`;

const FotoPost = styled.img`
    width: 612px;
    height: 612px;
    object-fit: cover;
`;

const Curtidas = styled.div`
    display: flex;
    align-items: center;


    img {
        width: 20px;
        height: 20px;
        border-radius: 10px;
        object-fit: contain;
        margin-left: 17px;
        border: 1px solid rgba(0, 0, 0, 0.2);
    }

    p{
        font-size: 14px;
        font-weight: 300;
        margin-left: 2px;   
    }

    span {
        font-size: 14px;
        font-weight: bold;
    }
`;