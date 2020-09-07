import React from 'react';
import {
  Container,
  ContentProfile,
  ContentName,
  ContentDialogue,
  Answer,
  Tag,
  Ask,
} from './style';

export default function CommentItem(props) {
  return (
    <Container className="comentario">
      <ContentProfile>
        <img src={props.fotoComprador}></img>
        <ContentName>
          <p>{props.nome}</p>
          <span>{props.cidade}</span>
        </ContentName>
      </ContentProfile>
      <ContentDialogue>
        <Ask id="pergunta">{props.pergunta}</Ask>
        <Answer>
          R. {props.resposta} <img src={props.fotoVendedor} alt="" />
        </Answer>
      </ContentDialogue>
      <Tag>{props.tag}</Tag>
    </Container>
  );
}
