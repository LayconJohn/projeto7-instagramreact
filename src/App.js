import styled from 'styled-components';

import Topo from './components/topo/Topo';
import Stories from './components/principal/stories/Stories';
import Feed from './components/principal/feed/Feed';

export default function App() {

    return (
        <Tela>
            <Topo />
            <ConteudoPrincipal>
                <Stories />
                <Feed />
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