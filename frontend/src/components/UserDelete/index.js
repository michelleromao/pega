import React, {useState, useHistory} from 'react'
import {Exclusao, Title, CTAModal, Ends, Modal, Paper, CTA, InfoExclusao, FinalizarExclusao, Text, TextRed, User, UserInfos, CTAExclusao} from './style'
import Fernanda from '../../assets/photos/userphoto.png'
import { propTypes } from 'react-input-mask/lib/react-input-mask.development'
import { Link } from 'react-router-dom'
import ContaRemovida from '../../pages/ContaRemovida'

export default function UserDelete (props) {
    
    const [opinion, setOpinion] = useState(false)
    const [ends, setEnds] = useState(false)
    const [modal, setModal] = useState(false)

    function formExclusao (e) {
        e.preventDefault()
        setModal(true)
    }

    const showModalExclusao = () => {
        return (
          <Modal>
            <Paper>
            <h4>Você confirma que está excluindo a sua conta permanentemente?</h4>
                <CTAModal>
                    <Link onClick={() => setModal(false)}>Cancelar</Link>
                    <button>Confirmar</button>
                </CTAModal>
            </Paper>
          </Modal>
        );
      };

    return (
        <>
        { modal ? showModalExclusao() : <></> }
        <>

            <Exclusao>                
                <Title>
                    <h4>Excluir conta</h4>
                    <Link to="/painel">Nem, fui enganadx!</Link>
                </Title>
                {
                    opinion ? 
                    <>
                    <form onSubmit={formExclusao}>
                    <h5>Será que você poderia ajudar a gente a entender o motivo da despedida?
                    É rapidinho!</h5>
                    <label class="radio-item">
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                        Já tenho outra conta
                    </label>
                    <label class="radio-item">
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                        Não estou vendendo bem
                    </label>
                    <label id="radio-item">
                        <input type="radio" checked="checked" name="radio" />
                        <span class="checkmark"></span>
                        Outro
                    </label> 
                    <textarea placeholder="Conte pra gente"></textarea>
                    
                    <CTA>
                        <Link>Cancelar</Link>
                        <button type="submit">Enviar</button>
                    </CTA>
                               
                    </form>

                    </> 
                    :
                    <>

                    <InfoExclusao>
                    <TextRed>Poxa, {props.user}, achei que a gente tivesse uma conexão especial. Pegou,
curtiu e seguiu em frente. Depois aparece pedindo pra voltar.</TextRed>
                    <Text>Brincadeira! Aqui todo mundo é maduro. Mas a gente tem que te avisar que, se você excluir sua conta,
todos os seus dados na plataforma serão deletados permanentemente.</Text>
                </InfoExclusao>

                <FinalizarExclusao>
                    <User>
                        <img src={Fernanda}></img>
                        <UserInfos>
                            <p>{props.nomeUsuario}</p>                        
                            <span>{props.arroba}</span>
                        </UserInfos>
                    </User>
                    <CTAExclusao>                       
                        <button onClick={() => setOpinion(!opinion)}>Excluir sua conta</button>                
                        <p>Tudo acabado entre nós</p>
                    </CTAExclusao>
                </FinalizarExclusao>
                    </>

                }
                
            </Exclusao>
        </>
            
        </>
    )
}