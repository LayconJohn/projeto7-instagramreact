import { useState, useEffect} from 'react';
import styled from 'styled-components';

import Post from './Post'

export default function Feed() {
    //Estado
    const [posts, setPosts] = useState([]);

    //Logic
    useEffect( () => {
        setPosts([
            {
                fotoPerfil: "https://criticalhits.com.br/wp-content/uploads/2021/12/minato-kunai-01-1.jpg",
                nomePerfil: "minato",
                fotoPost: "http://pm1.narvii.com/6266/ab14424b2fe11a66e4eaeae095074fdcd5d8b027_00.jpg",
                fotoCurtida: "https://kanto.legiaodosherois.com.br/w1200-h628-cfill/wp-content/uploads/2021/12/legiao_3CIEFBoT2l4S.jpg.jpeg",
                nomeCurtida: "kakashi",
                curtidas: "100",
                liked: false
            },
            {
                fotoPerfil: "https://tm.ibxk.com.br/2022/01/27/27142800431312.jpg",
                nomePerfil: "hinata",
                fotoPost: "https://nerdhits.com.br/wp-content/uploads/2021/07/clone-do-naruto-hinata-1200x900.jpg",
                fotoCurtida: "https://nerdhits.com.br/wp-content/uploads/2021/05/cosplay-itachi-uchiha-naruto.jpg",
                nomeCurtida: "Itachi",
                curtidas: "176",
                liked: false
            },
            {
                fotoPerfil: "https://pm1.narvii.com/6367/4908dce28d82101bfa92724982827845bf4995f0_hq.jpg",
                nomePerfil: "tio do rámen",
                fotoPost: "https://forum-narutopt.oasgames.com/api/editor/get-img?img_name=editor%252F2020-05-25%252F0eb630d5336122fd1074f21f230e2a04",
                fotoCurtida: "https://nerdhits.com.br/wp-content/uploads/2021/05/cosplay-itachi-uchiha-naruto.jpg",
                nomeCurtida: "Itachi",
                curtidas: "1.000.000",
                liked: false 
            },
        ])
    }, []);

    //render
    return (
        <Posts>
            {posts.map( (postDetalhe, index) => {
                return <Post 
                    fotoPerfil={postDetalhe.fotoPerfil}
                    nomePerfil={postDetalhe.nomePerfil}
                    fotoPost={postDetalhe.fotoPost}
                    fotoCurtida={postDetalhe.fotoCurtida}
                    nomeCurtida={postDetalhe.nomeCurtida}
                    curtidas={postDetalhe.curtidas}
                    posts={posts}
                    setPosts={setPosts}
                    liked={postDetalhe.liked}
                />
            })}
        </Posts>
    )
}

const Posts = styled.div`
    width: 614px;
    height: 100px;
`;