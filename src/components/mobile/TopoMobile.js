import styled from 'styled-components';

import { BsInstagram } from 'react-icons/bs';
import { BiPaperPlane } from 'react-icons/bi';

export default function TopoMobile() {
    return (
        <TopoParaMobile>
            <BsInstagram />
            <Imagem src='https://s3-alpha-sig.figma.com/img/87c6/33a9/9dce01a659bf8734fb74ef287da3147f?Expires=1658707200&Signature=I3Hw5INW89bQpJi1cksB8WvSWGysaGB2grB8~FQXnsFycBYcAwY~kSB2zO9TY9ikPeLsJz3H6IxpAB5tGdaopf48VKmKas8CGftN0-tmKDAtCy869zLLWsstAR~UAv4cwRza~Uwv6yrg-C~ynaEC0Pt5foLHsAFuOi4Tbz8t-FgCRYe7eu1EwW0T-9wl6g2Eeswzb5qVlTu8X3bPZxOlKGCZ89Gf7-Gyw2yGxpPKaWt3oZZ9FmebEG0YWxmwDhZ7SSBl3sfTmNWbllvVCN53og4m6ERfQ-sEKQIe1CKdbky~IzJ3Bxbh3VBVKjIdeyzq-oWUlmHPqsrNaYSSz1CLpA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'/>
            <Icone> <BiPaperPlane /> </Icone>
        </TopoParaMobile>
    )
}

const TopoParaMobile = styled.div`
    width: 100%;
    height: 54px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    box-sizing: border-box;
    box-shadow: 0px 2px rgba(0, 0, 0, 0.05);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    display: none;
    
    @media(max-width: 614px) {
        display: inherit;
    }
`;

const Imagem = styled.img`
    width: 103px;
    height: 30px;
    margin-left: 25px;
`;

const Icone = styled.div`
    margin-right: 20px; 
    scale: 0.9;
    transition: all ease 0.5s;

    &:hover {
        scale: 1;
    }
`;