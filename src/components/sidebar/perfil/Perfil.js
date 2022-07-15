import styled from 'styled-components';

export default function Perfil() {
    return (
        <>
            <AreaPerfil>
                <FotoPerfil src="https://criticalhits.com.br/wp-content/uploads/2021/02/boruto-anime-pxp-910x512.jpg" alt="boruto"/>
                <NickPerfil>
                    <h4>borutin</h4>
                    <p>Boruto Uzumaki</p>
                </NickPerfil>
            </AreaPerfil>
            <BordaHorizontal></BordaHorizontal>
        </>
    )
}

const AreaPerfil = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 4px;
`;

const FotoPerfil = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 28px;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.5);
    cursor: pointer;
`;

const NickPerfil = styled.div`
    font-size: 14px;
    margin-left: 17px;

    h4 {
        color: #262626;
        font-weight: 600;
        margin: 0;
    }

    p {
        color: #8E8E8E;
        font-weight: 300;
        margin: 0;
    }
`;

const BordaHorizontal = styled.div`
    width: 100%;
    height: 9px;
    margin-top: 11px;
    margin-bottom: 4px;
`;