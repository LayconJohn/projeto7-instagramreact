import styled from 'styled-components';

import Topo from './components/topo/Topo';

export default function App() {

    return (
        <Tela>
            <Topo />

        </Tela>
    )
}

const Tela = styled.div`
    background-color: blueviolet;
`;