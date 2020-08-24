import React from 'react';
import './Comments.css';
import Comment from './CommentItem';
import Fernanda from '../../../assets/photos/userphoto.png';
import Vendedor from '../../../assets/photos/fotoVendedor.png';

export default function Comments(props) {
  return (
    <div className="comments">
      <h1>Perguntas e respostas</h1>
      <div className="area-texto">
        <textarea placeholder="Faça uma pergunta"></textarea>
        <div className="botao">
          <div></div>
          <input type="button" value="Enviar" />
        </div>
      </div>

      <div className="tags">
        <button>Prazo</button>
        <button>Estado do produto</button>
        <button>Entrega</button>
        <button>Experimentar</button>
      </div>

      <div className="comentarios">
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
      </div>
    </div>
  );
}
