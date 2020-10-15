import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Link, useHistory,useParams } from 'react-router-dom';
import { Form as Unform } from '@unform/web';
import {
  Container,
  Title,
  ContentAbout,
  CollumnOne,
  CollumnTwo,
  ContentPhoto,
  ContentAction,
  Button,
  ContentResume,
  Modal,
  Paper,
  TitleModal,
  ButtonGroup,
  Load
} from './style';
import File from '../../components/File';
import Input from '../../components/Input';
import Select from '../../components/Select/';
import { useEffect } from 'react';
import api from '../../services/api';
import Confirm from '../../assets/icons/success.svg';
import Spinner from '../../assets/exclamacao.svg';

function EditAnnouncement() {
  const { pathId } = useParams();
  const [isLoad, setIsLoad] = useState(true);

  const history = useHistory();

  const idUser = useSelector((user) => user.user.idUser);
  const name = useSelector((user) => user.user.name);
  const username = useSelector((user) => user.user.username);
  const email = useSelector((user) => user.user.email);
  const senha = useSelector((user) => user.user.senha);
  const cpf = useSelector((user) => user.user.cpf);
  const telefone = useSelector((user) => user.user.telefone);
  const picpay = useSelector((user) => user.user.picpay);

  const [draft, setDraft] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [idAnnouncement, setIdAnnouncement] = useState('');
  const [announcement, setAnnouncement] = useState();
  const [categoryAnnouncement, setCategoryAnnouncement] = useState();
  const [styleAnnouncement, setStyleAnnouncement] = useState();
  const [paymentAnnouncement, setPaymentAnnouncement] = useState();
  const [deliveryAnnouncement, setDeliveryAnnouncement] = useState();
  const [announcementPhoto1, setAnnouncementPhoto1] = useState();
  const [announcementPhoto2, setAnnouncementPhoto2] = useState();
  const [announcementPhoto3, setAnnouncementPhoto3] = useState();






  useEffect(() =>{
    const loadAnnouncement = async() =>{
      const {data} = await api.get(`/announcements/${pathId}`);
      setAnnouncement(data[0]);
      if(idUser && (idUser !== data[0].idOwner)){
        history.push('/');
      }
      const category = await api.get(`/categories/${data[0].idCategory}`);
      setCategoryAnnouncement({label: category.data[0].name, value: category.data[0].idCategory});
      const style = await api.get(`/styles/${data[0].idStyle}`);
      setStyleAnnouncement({label: style.data[0].name, value: style.data[0].idStyle});
      const payment = await api.get(`/payments/${data[0].paymentType}`);
      setPaymentAnnouncement({label: payment.data[0].type, value: payment.data[0].paymentType});
      const delivery = await api.get(`/deliveries/${data[0].deliveryType}`);
      setDeliveryAnnouncement({label: delivery.data[0].type, value: delivery.data[0].deliveryType});
      const photos = await api.get(`/photosannouncement/${data[0].idAnnouncement}`);
      console.log(photos.data[0]);
      if(photos.data[0].originalname.length === 1){
        setAnnouncementPhoto1(photos.data[0].originalname[0]);
      setIsLoad(false);

      }else if(photos.data[0].originalname.length === 2){
        setAnnouncementPhoto1(photos.data[0].originalname[0]);
        setAnnouncementPhoto2(photos.data[0].originalname[1]);
      setIsLoad(false);

      }else{
        setAnnouncementPhoto1(photos.data[0].originalname[0]);
        setAnnouncementPhoto2(photos.data[0].originalname[1]);
        setAnnouncementPhoto3(photos.data[0].originalname[2]);
      setIsLoad(false);

      }
    }
    const getCategory = async () => {
      const { data } = await api.get('/categories');

      const category = data.map((d) => {
        return { label: d.name, value: d.idCategory };
      });
      setCategories(category);
    };
    const getStyle = async () => {
      const { data } = await api.get('/styles/');
      const style = data.map((d) => {
        return { label: d.name, value: d.idStyle };
      });
      setStyles(style);
    };
    const getPaymentType = async () => {
      const { data } = await api.get('/payments/');
      const payment = data.map((d) => {
        return {
          label: d.type,
          value: d.idPayment,
        };
      });
      setPayments(payment);
    };
    const getDeliveryType = async () => {
      const { data } = await api.get('/deliveries');
      const delivery = data.map((d) => {
        return {
          label: d.type,
          value: d.idDelivery,
        };
      });
      setDeliveries(delivery);
    };
    getStyle();
    getCategory();
    getPaymentType();
    getDeliveryType();
    loadAnnouncement();
  },[isLoad, announcementPhoto1, announcementPhoto2,announcementPhoto3]);

  if (!idUser) {
    history.push('/login');
  }


  async function handleSubmit(data) {
    if (
      (data.category ||
        data.color ||
        data.delivery ||
        data.payment ||
        data.size ||
        data.state ||
        data.style ||
        data.tryon) === '' ||
      data.image1 === undefined
    ) {
      setSubmit(false);
      setDraft(false);
      alert(
        'Ops! Parece que há informações faltando, da mais uma olhadinha aí',
      );
    } else {
      const price = Number(data.price.split(' ')[1]);
      const frete = Number(data.frete.split(' ')[1]);
      const imagesAnnouncement = new FormData();
      imagesAnnouncement.append('image', data.image1);
      if (data.image2 !== undefined) {
        imagesAnnouncement.append('image', data.image2);
      }
      if (data.image3 !== undefined) {
        imagesAnnouncement.append('image', data.image3);
      }
      if (draft === true) {
        setSubmit(false);
        const announcement = await api.put(`/announcements/${pathId}`, {
          idAnnouncement: pathId,
          title: data.title,
          color: data.color,
          size: data.size,
          state: data.state,
          description: data.description,
          tryOn: data.tryon,
          initPrice: price,
          idOwner: idUser,
          nameOwner: name,
          idStyle: data.style,
          idCategory: data.category,
          deliveryType: data.delivery,
          priceDelivery: frete,
          paymentType: data.payment,
          idStatus: '51f68a38-c8f0-4088-a40e-7b380dab6bd0',
        });
        setIdAnnouncement(announcement.data.idAnnouncement);
        await api.put(
          `/photosannouncement/${pathId}`,
          imagesAnnouncement,
        );
        setIsSend(true);
      }
      if (submit === true) {
        setDraft(false);
        const announcement = await api.put(`/announcements/${pathId}`, {
          idAnnouncement: pathId,
          title: data.title,
          color: data.color,
          size: data.size,
          state: data.state,
          description: data.description,
          tryOn: data.tryon,
          initPrice: price,
          idOwner: idUser,
          nameOwner: name,
          telOwner: telefone,
          idStyle: data.style,
          idCategory: data.category,
          deliveryType: data.delivery,
          priceDelivery: frete,
          paymentType: data.payment,
          idStatus: 'a7249f2f-da3c-4312-8269-4d20aa326dcc',
        });
        setIdAnnouncement(announcement.data.idAnnouncement);

        await api.put(
          `/photosannouncement/${pathId}`,
          imagesAnnouncement,
        );
        setIsSend(true);
      }
    }
  }
  const [categories, setCategories] = useState();
  const [styles, setStyles] = useState();
  const [payments, setPayments] = useState();
  const [deliveries, setDeliveries] = useState();

  const state = [
    {
      label: 'Novo',
      value: 'Novo',
    },
    {
      label: 'Usado',
      value: 'Usado',
    },
  ];
  const color = [
    {
      label: 'Amarelo',
      value: 'Amarelo',
    },
    {
      label: 'Azul',
      value: 'Azul',
    },
    {
      label: 'Branco',
      value: 'Branco',
    },
    {
      label: 'Cinza',
      value: 'Cinza',
    },
    {
      label: 'Laranja',
      value: 'Laranja',
    },
    {
      label: 'Preto',
      value: 'Preto',
    },
    {
      label: 'Rosa',
      value: 'Rosa',
    },
    {
      label: 'Roxo',
      value: 'Roxo',
    },
    {
      label: 'Verde',
      value: 'Verde',
    },
    {
      label: 'Vermelho',
      value: 'Vermelho',
    },
    {
      label: 'Outro',
      value: 'Outro',
    },
  ];
  const size = [
    {
      label: 'Superior',
      options: [
        { label: 'PP', value: 'PP' },
        { label: 'P', value: 'P' },
        { label: 'M', value: 'M' },
        { label: 'G', value: 'G' },
        { label: 'GG', value: 'GG' },
        { label: 'XG', value: 'XG' },
        { label: 'XGG', value: 'XGG' },
      ],
    },
    {
      label: 'Inferior',
      options: [
        { label: '-34', value: '-34' },
        { label: '34-35', value: '34-35' },
        { label: '36-37', value: '36-37' },
        { label: '38-39', value: '38-39' },
        { label: '40-41', value: '40-41' },
        { label: '42-43', value: '42-43' },
        { label: '44-45', value: '44-45' },
        { label: '46-47', value: '46-47' },
        { label: '48-49', value: '48-49' },
        { label: '50-51', value: '50-51' },
        { label: '52+', value: '52+' },
      ],
    },
  ];
  const tryon = [
    {
      label: 'Sim',
      value: true,
    },
    { label: 'Não', value: false },
  ];
  useEffect(() => {

  }, []);

  const showModalDone = () => {
    return (
      <Modal>
        <Paper>
          <TitleModal>
            Anúncio editado!
          </TitleModal>
          <img src={Confirm} alt="" />
          <ButtonGroup>
            <Link to={`/`}>
              <Button
                border="transparent"
                background="transparent"
                color="#569CCD"
              >
                Voltar
              </Button>
            </Link>

            <Link to={`/anuncio/${pathId}`}>
              <Button border="transparent" background="#569CCD" color="#fff">
                Ver anúncio
              </Button>
            </Link>
          </ButtonGroup>
        </Paper>
      </Modal>
    );
  };


  return (
    <>
      {isSend ? showModalDone() : <></>}
    {isLoad ?
    <Modal>
      <Load src={Spinner} alt="Loading"/>
    </Modal>
  :
  <>
      {announcement  &&
      categoryAnnouncement &&
      styleAnnouncement &&
      paymentAnnouncement &&
      deliveryAnnouncement &&
       <Container>
       <Title>Editar anúncio</Title>

       <Unform
         onSubmit={handleSubmit}
         style={{
           display: 'flex',
           width: '100%',
           justifyContent: 'space-between',
         }}
       >
         <CollumnOne>
           <ContentPhoto>
             <File
             defaultImage={announcementPhoto1 && `http://localhost:3333/files/announcement/${announcementPhoto1}`}
             name="image1" width="70%" height="307px" />
             <ContentResume>
               {announcementPhoto2 ?
               <File
               defaultImage={`http://localhost:3333/files/announcement/${announcementPhoto2}`}
                name="image2" width="100%" height="25%" />
                :
                <File name="image2" width="100%" height="25%" />

                }

              {announcementPhoto3 ?
               <File
               defaultImage={`http://localhost:3333/files/announcement/${announcementPhoto3}`}
                name="image2" width="100%" height="25%" /> :
                <File name="image2" width="100%" height="25%" />
                }
             </ContentResume>
           </ContentPhoto>
         </CollumnOne>
         <CollumnTwo>
           <ContentAbout>
             <Input
              defaultValue={announcement.title}
               fSize="14px"
               labelText="Título"
               name="title"
               type="text"
               color="#569CCD"
               placeholder="Ex. : Camiseta tie dye"
               size="80%"
               required={true}
               input="input"
             />
             <Select
               labelText="Categoria"
               options={categories}
               defaultValue={{ label: categoryAnnouncement.label, value: categoryAnnouncement.value }}
               placeholder="Selecione"
               fSize="14px"
               name="category"
               size="105%"
             />
           </ContentAbout>
           <ContentAbout>
             <Input
              defaultValue={announcement.description}
               fSize="14px"
               labelText="Descrição"
               name="description"
               type="textarea"
               color="#569CCD"
               placeholder="Fala aí um pouquinho sobre o produto, se tem algum aspecto especial, aquele glow que a audiência gosta..."
               required={true}
               size="100%"
               input="textarea"
             />
           </ContentAbout>
           <ContentAbout>
             <Select
               defaultValue={{ label: announcement.size, value: announcement.size }}
               labelText="Tamanho"
               placeholder="Selecione"
               options={size}
               fSize="14px"
               size="80%"
               name="size"
             />
             <Select
               defaultValue={{ label: announcement.color, value: announcement.color }}
               labelText="Cor"
               placeholder="Selecione"
               options={color}
               fSize="14px"
               size="80%"
               name="color"
             />
             <Select
               defaultValue={{ label: announcement.state, value: announcement.state }}
               labelText="Condição"
               placeholder="Selecione"
               options={state}
               fSize="14px"
               size="80%"
               name="state"
             />
             <Select
               defaultValue={{ label: styleAnnouncement.label, value: styleAnnouncement.value }}
               labelText="Estilo"
               placeholder="Selecione"
               options={styles}
               fSize="14px"
               size="108%"
               name="style"
             />
           </ContentAbout>
           <ContentAbout>
             <Select
               defaultValue={{ label: (announcement.tryOn ? 'Sim' : 'Não'), value: (announcement.tryOn ? true : false) }}
               labelText="Pode experimentar?"
               placeholder="Selecione"
               options={tryon}
               fSize="14px"
               name="tryon"
               size="80%"
             />
             <Input
              defaultValue={announcement.offert ? announcement.valueOffert : announcement.initPrice}

               fSize="14px"
               labelText="Preço"
               name="price"
               type="text"
               color="#569CCD"
               placeholder="R$ 00,00"
               size="80%"
               required={true}
               input="input"
               mask="R$ 99.99"
               maskPlaceholder={null}
             />
             <Select
               defaultValue={{ label: paymentAnnouncement.label, value: paymentAnnouncement.value }}
               labelText="Tipo de pagamento"
               placeholder="Selecione"
               options={payments}
               fSize="14px"
               name="payment"
               size="105%"
             />
           </ContentAbout>
           <ContentAbout>
             <Select
              defaultValue={{ label: deliveryAnnouncement.label, value: deliveryAnnouncement.value }}
               labelText="Tipo de entrega"
               placeholder="Selecione"
               options={deliveries}
               fSize="14px"
               name="delivery"
               size="80%"
             />
             <Input
              defaultValue={announcement.priceDelivery}

               fSize="14px"
               labelText="Frete (estimativa)"
               name="frete"
               type="text"
               color="#569CCD"
               placeholder="R$ 00,00"
               size="50%"
               required={true}
               input="input"
               mask="R$ 99.99"
               maskPlaceholder={null}
             />
           </ContentAbout>
           <ContentAction>
             <Button
               border="transparent"
               color="#EA5254"
               background="transparent"
             >
               Cancelar
             </Button>

             <Button
               border="transparent"
               background="transparent"
               color="#569CCD"
               onClick={() => (setDraft(true), setSubmit(false))}
             >
               Salvar como rasunho
             </Button>

             <Button
               border="transparent"
               background="#569CCD"
               color="white"
               size="20%"
               onClick={() => (setSubmit(true), setDraft(false))}
             >
               Publicar
             </Button>
           </ContentAction>
         </CollumnTwo>
       </Unform>
     </Container>

      }
      </>
      }
     </>
  );
}

export default EditAnnouncement;
