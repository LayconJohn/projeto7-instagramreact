import styled from 'styled-components';

import { BsInstagram } from 'react-icons/bs';

import { BiPaperPlane } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { ImCompass2 } from 'react-icons/im';

export default function Topo() {
    return (
        <>
        <TopoDesktop>
            <Logo>
                <BsInstagram />
                <Imagem src='https://s3-alpha-sig.figma.com/img/87c6/33a9/9dce01a659bf8734fb74ef287da3147f?Expires=1658707200&Signature=I3Hw5INW89bQpJi1cksB8WvSWGysaGB2grB8~FQXnsFycBYcAwY~kSB2zO9TY9ikPeLsJz3H6IxpAB5tGdaopf48VKmKas8CGftN0-tmKDAtCy869zLLWsstAR~UAv4cwRza~Uwv6yrg-C~ynaEC0Pt5foLHsAFuOi4Tbz8t-FgCRYe7eu1EwW0T-9wl6g2Eeswzb5qVlTu8X3bPZxOlKGCZ89Gf7-Gyw2yGxpPKaWt3oZZ9FmebEG0YWxmwDhZ7SSBl3sfTmNWbllvVCN53og4m6ERfQ-sEKQIe1CKdbky~IzJ3Bxbh3VBVKjIdeyzq-oWUlmHPqsrNaYSSz1CLpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'/>
            </Logo>
            <Busca placeholder='Pesquisar'/>
            <Botoes>
                <Icone> <BiPaperPlane /> </Icone>
                <Icone> <AiOutlineHeart /> </Icone>
                <Icone> <BsPerson /> </Icone>
                <Icone> <ImCompass2 /> </Icone>
            </Botoes>
        </TopoDesktop>
        </>
    )
}

const TopoDesktop = styled.div`
    width: 100%;
    height: 54px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 215px;
    box-sizing: border-box;
    box-shadow: 0px 2px rgba(0, 0, 0, 0.05);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;

    @media(max-width: 935px) {
        padding: 0px 10px;
    }

    @media(max-width: 614px) {
        display: none;
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Imagem = styled.img`
    width: 103px;
    height: 30px;
    margin-left: 25px;
`;

const Busca = styled.input`
  width: 215px;
  height: 20px;
  border: 2px solid #dbdbdb;
  border-radius: 3px;
  background-color: #f2efef;
  display: flex;
  text-align: center;
`;

const Botoes = styled.div`
    display: flex;
`;

const Icone = styled.div`
    margin-right: 20px; 
    scale: 0.9;
    transition: all ease 0.5s;

    &:hover {
        scale: 1;
    }
`;