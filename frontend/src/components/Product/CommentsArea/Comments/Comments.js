import React from 'react';
import {
  Container,
  TextArea,
  ButtonArea,
  Tags,
  ContentComments,
} from './style';
import Comment from '../CommentItem/CommentItem';
import Fernanda from '../../../../assets/photos/userphoto.png';
import Vendedor from '../../../../assets/photos/fotoVendedor.png';

export default function Comments(props) {
  return (
    <Container>
      <h1>Perguntas e respostas</h1>
      <TextArea>
        <textarea placeholder="Faça uma pergunta"></textarea>
        <ButtonArea>
          <div></div>
          <input type="button" value="Enviar" />
        </ButtonArea>
      </TextArea>

      <Tags>
        <button>Prazo</button>
        <button>Estado do produto</button>
        <button>Entrega</button>
        <button>Experimentar</button>
      </Tags>

      <ContentComments>
        <Comment
          nome="Ferdinanda"
          cidade="Fortaleza-CE"
          fotoComprador={Fernanda}
          fotoVendedor={Vendedor}
          pergunta="Tem algum problema?"
          resposta="Parece que foi fabricado ontem, novinha"
          tag="#estado"
        />
        <Comment
          nome="Fernanda"
          cidade="Fortaleza-CE"
          fotoComprador={Fernanda}
          fotoVendedor={Vendedor}
          pergunta="Tem algum problema?"
          resposta="Parece que foi fabricado ontem, novinha."
          tag="#estado"
        />
        <Comment
          nome="Fernanda"
          cidade="Fortaleza-CE"
          fotoComprador={Fernanda}
          fotoVendedor={Vendedor}
          pergunta="Tem algum problema?"
          resposta="Parece que foi fabricado ontem, novinha"
          tag="#estado"
        />
      </ContentComments>
    </Container>
  );
}
