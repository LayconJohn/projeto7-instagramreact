import styled from 'styled-components';

import { BsInstagram } from 'react-icons/bs';

import { BiPaperPlane } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { ImCompass2 } from 'react-icons/im';

export default function Topo() {
    return (
        <TopoDesktop>
            <Logo>
                <BsInstagram />
            </Logo>
            <Busca placeholder='Pesquisar'/>
            <Botoes>
                <BiPaperPlane />
                <AiOutlineHeart />
                <BsPerson />
                <ImCompass2 />
            </Botoes>
        </TopoDesktop>
    )
}

const TopoDesktop = styled.div`
    width: 100%;
    height: 54px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
`;

const Logo = styled.div`
    width: 20px;
    height: 20px;
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