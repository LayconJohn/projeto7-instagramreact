import styled from 'styled-components';

import { IoIosHome } from 'react-icons/io';
import { BiSearch } from 'react-icons/bi';
import { AiOutlinePlusCircle, AiOutlineHeart } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';

export default function BarraMobile() {
    return (
        <BarraInferior>
            <IoIosHome />
            <BiSearch />
            <AiOutlinePlusCircle />
            <AiOutlineHeart />
            <BsPerson />
        </BarraInferior>
    )
}


const BarraInferior = styled.div`
    width: 100%;
    height: 54px;
    background-color: white;
    border: 1px solid #DBDBDB;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    display: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5px;

    @media(max-width: 614px) {
        display: inherit;
    }
`;