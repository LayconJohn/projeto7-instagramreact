import styled from 'styled-components';

import Topo from './components/topo/Topo';
import Stories from './components/principal/stories/Stories';
import Feed from './components/principal/feed/Feed';
import Perfil from './components/sidebar/perfil/Perfil';
import Sugestoes from './components/sidebar/sugestoes/Sugestoes';

import TopoMobile from './components/mobile/TopoMobile';
import BarraMobile from './components/mobile/BarraMobile';

export default function App() {

    return (
        <Tela>
            <Topo />
            <TopoMobile />
            <ConteudoPrincipal>
                <Stories />
                <Feed />
            </ConteudoPrincipal>
            <BordaSeparadora></BordaSeparadora>
            <Sidebar>
                <Perfil />
                <Sugestoes />
            </Sidebar>
            <BarraMobile />
        </Tela>
    )
}

const Tela = styled.div`
    box-sizing: border-box;
    display: flex;
`;

const ConteudoPrincipal = styled.div`
    margin-left: 215px;

    @media(max-width: 935px) {
        margin: 0 auto;
    }
`;

const Sidebar = styled.div`
    width: 213px;
    position: fixed;
    top: 88px;
    left: 858px;

    @media(max-width: 935px) {
        display: none;
    }
`;

const BordaSeparadora = styled.div`
    width: 28px;
    height: 85px;
`;