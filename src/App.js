import styled from 'styled-components';

import Topo from './components/topo/Topo';
import Stories from './components/principal/stories/Stories';

export default function App() {

    return (
        <Tela>
            <Topo />
            <ConteudoPrincipal>
                <Stories />
            </ConteudoPrincipal>
        </Tela>
    )
}

const Tela = styled.div`
    box-sizing: border-box;
`;

const ConteudoPrincipal = styled.div`
    margin-left: 215px;
`;