import styled from "styled-components";
import { useState, useEffect} from "react";

import { CgChevronRightO } from "react-icons/cg";

function Story( {imagem, nome} ) {
    return (
        <PerfilStory>
            <Foto>
                <img src={imagem}/>
            </Foto>
            <p>{nome}</p>
        </PerfilStory>
    )
}

export default function Stories() {
    //Estado
    const [fotos, setFotos] = useState([]);

    //logic
    useEffect( () => {
        setFotos([
            {foto: "https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg", nome: "narutin"},
            {foto: "https://ovicio.com.br/wp-content/uploads/2020/08/20200817-sasuke-1131819-555x555.jpeg", nome: "Sasuke"},
            {foto: "https://kanto.legiaodosherois.com.br/w1200-h628-cfill/wp-content/uploads/2021/12/legiao_3CIEFBoT2l4S.jpg.jpeg", nome: "Kakashi"},
            {foto:"https://tm.ibxk.com.br/2022/01/27/27142800431312.jpg", nome: "Hinata"},
            {foto: "https://nerdhits.com.br/wp-content/uploads/2021/12/shikamaru-4.jpg", nome: "Shikamaru"},
            {foto: "https://nerdhits.com.br/wp-content/uploads/2021/05/cosplay-itachi-uchiha-naruto.jpg", nome: "Itachi"},
            {foto: "https://observatoriodegames.uol.com.br/wp-content/uploads/2021/06/Jiraya-1024x576.jpg", nome: "Jiraya"},
            {foto: "https://criticalhits.com.br/wp-content/uploads/2022/01/AN_Nagato-768x432.jpg", nome: "Nagato"},
            {foto: "https://criticalhits.com.br/wp-content/uploads/2020/09/madara-uchiha.jpg", nome: "Madara"},
            {foto: "https://s.aficionados.com.br/imagens/saiba-tudo-sobre-sakura-haruno_t.jpg", nome: "Sakura"},
            {foto: "https://sm.ign.com/t/ign_br/screenshot/default/might-guy_8j6d.h960.png", nome: "Guy"},
            {foto: "https://criticalhits.com.br/wp-content/uploads/2021/12/minato-kunai-01-1.jpg", nome: "Minato"},
            {foto: "https://static.quizur.com/i/b/5baeab11ac2ef9.504135985baeab119ecff4.32027449.png", nome: "Ino"},
            {foto: "https://uploads.spiritfanfiction.com/historias/capas/202102/a-irma-de-naruto-imagine-gaara-x-sn-21764412-240220212213.jpg", nome: "Gaara"},
            {foto: "https://i.pinimg.com/originals/16/10/2d/16102da5b2d11cc231aaf4ea0dde7e79.jpg", nome: "Temari"},
            {foto: "https://kanto.legiaodosherois.com.br/w1200-h628-cfill/wp-content/uploads/2021/08/legiao_1Z8cAwrxGKBI.png.jpeg", nome: "Tsunade"}
    ])
    }, [])

    return (
        <AreaStories>
            {fotos.map( perfil => {
                return <Story imagem={perfil.foto} nome={perfil.nome}/>
            })}
            
            <Seta> <CgChevronRightO /> </Seta>
        </AreaStories>
    )
}

const AreaStories = styled.div`
    margin-top: 80px;
    height: 118px;
    width: 614px;
    display: flex;
    align-items: center;
    border-radius: 3px;
    border: 1px solid #DBDBDB;
    overflow: hidden;
    position: relative;

`;

const Foto = styled.div`
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-image: url('https://s3-alpha-sig.figma.com/img/8cb6/0898/9f2503b711cd47b99c12c4a6ba9373c5?Expires=1658707200&Signature=T83VKeQ4-zuOanxIiP1XK7WjIQh2xxBfq-l1dYdbXfviDD71qh~~8tgq~IuPM-noKL~F0nnGmCSZ7b7m79qRj0rr1pOaWGp1skZiid7oi9wQOZmkOSlCCrOqNFJ4ZjzyHkd68l6g6hboQCRmJdZxE~tNx782H5Tuf08cwOj35-s5tz1a1v6fANQpExzwKtlCXuNhDH3oc0LhKJ~O-qzMcvTqdeF7WF4dzmVJ1VzWHiWtHF~l4eKMKgpgMgAw6beYX1BP89wz-LToEG9tVpDwYfQTxt7YVdv97Hg0-qPcqHL5cnDcI9Ojp9UtYyVBucb521OT0zvaK952qyYZgBPQVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA');
    margin-left: 10px;
    scale: 0.9;
    transition: all ease 0.5s;

    &:hover{
        scale: 1;
    }

    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        margin: 0 4px;
        object-fit: cover;
    }
`;

const PerfilStory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-size: 12px;
        color: #262626;
        font-weight: 400;
        text-align: center;
        margin-left: 5px;
    }
`; 

const Seta = styled.div`
    position: absolute;
    right: 8px;
    top: 46px;
    color: gray;
    object-fit: cover;
    scale: 0.95;

    &:hover {
        scale: 1.2;
    }

    ion-icon {
        width: 26px;
        height: 26px;
    }
`;