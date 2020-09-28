import React, { useState } from 'react';
import InputMask from 'react-input-mask';
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
} from './style';
import File from '../../components/File';
import Input from '../../components/Input';
import Select from '../../components/Select/';
import { useEffect } from 'react';
import api from '../../services/api';

function CreateAnnouncement() {
  const [draft, setDraft] = useState(false);
  const [submit, setSubmit] = useState(false);

  function handleSubmit(data) {
    if (
      (data.category ||
        data.color ||
        data.delivery ||
        data.payment ||
        data.size ||
        data.state ||
        data.style ||
        data.tryon) === ''
    ) {
      setSubmit(false);
      setDraft(false);
      alert(
        'Ops! Parece que há informações faltando, da mais uma olhadinha aí',
      );
    } else {
      const price = Number(data.price.split(' ')[1]);
      const frete = Number(data.frete.split(' ')[1]);

      if (draft === true) {
        setSubmit(false);
        api.post('/announcements', {
          title: data.title,
          color: data.color,
          size: data.size,
          photos: ['default.png'],
          state: data.state,
          description: data.description,
          tryOn: data.tryon,
          initPrice: price,
          idOwner: localStorage.getItem('idUser'),
          idStyle: data.style,
          idCategory: data.category,
          deliveryType: data.delivery,
          priceDelivery: frete,
          paymentType: data.payment,
          idStatus: '51f68a38-c8f0-4088-a40e-7b380dab6bd0',
        });
      }
      if (submit === true) {
        setDraft(false);
        api.post('/announcements', {
          title: data.title,
          color: data.color,
          size: data.size,
          photos: ['default.png'],
          state: data.state,
          description: data.description,
          tryOn: data.tryon,
          initPrice: price,
          idOwner: localStorage.getItem('idUser'),
          idStyle: data.style,
          idCategory: data.category,
          deliveryType: data.delivery,
          priceDelivery: frete,
          paymentType: data.payment,
          idStatus: 'a7249f2f-da3c-4312-8269-4d20aa326dcc',
        });
      }
      console.log(data);
    }
  }
  const [categories, setCategories] = useState();
  const [styles, setStyles] = useState();
  const [payments, setPayments] = useState();
  const [deliveries, setDeliveries] = useState();

  const state = [
    {
      label: 'Novo',
      value: 'novo',
    },
    {
      label: 'Usado',
      value: 'usado',
    },
  ];
  const color = [
    {
      label: 'Amarelo',
      value: 'amarelo',
    },
    {
      label: 'Azul',
      value: 'azul',
    },
    {
      label: 'Branco',
      value: 'branco',
    },
    {
      label: 'Cinza',
      value: 'cinza',
    },
    {
      label: 'Laranja',
      value: 'laranja',
    },
    {
      label: 'Preto',
      value: 'preto',
    },
    {
      label: 'Rosa',
      value: 'rosa',
    },
    {
      label: 'Roxo',
      value: 'roxo',
    },
    {
      label: 'Verde',
      value: 'verde',
    },
    {
      label: 'Vermelho',
      value: 'vermelho',
    },
    {
      label: 'Outro',
      value: 'outro',
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
    const getCategory = async () => {
      const { data } = await api.get('/categories');
      const category = data.map((d) => {
        return { label: d.name, value: d.idCategory };
      });
      setCategories(category);
    };
    const getStyle = async () => {
      const { data } = await api.get('/styles');
      const style = data.map((d) => {
        return { label: d.name, value: d.idStyle };
      });
      setStyles(style);
    };
    const getPaymentType = async () => {
      const { data } = await api.get('/payments');
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
  }, []);

  return (
    <>
      <Container>
        <Title>Criar anúncio</Title>

        <Unform
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <CollumnOne>
            <File name="images" />
          </CollumnOne>
          <CollumnTwo>
            <ContentAbout>
              <Input
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
                placeholder="Selecione"
                fSize="14px"
                name="category"
                size="105%"
              />
            </ContentAbout>
            <ContentAbout>
              <Input
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
                labelText="Tamanho"
                placeholder="Selecione"
                options={size}
                fSize="14px"
                size="80%"
                name="size"
              />
              <Select
                labelText="Cor"
                placeholder="Selecione"
                options={color}
                fSize="14px"
                size="80%"
                name="color"
              />
              <Select
                labelText="Condição"
                placeholder="Selecione"
                options={state}
                fSize="14px"
                size="80%"
                name="state"
              />
              <Select
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
                labelText="Pode experimentar?"
                placeholder="Selecione"
                options={tryon}
                fSize="14px"
                name="tryon"
                size="80%"
              />
              <Input
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
                labelText="Tipo de entrega"
                placeholder="Selecione"
                options={deliveries}
                fSize="14px"
                name="delivery"
                size="80%"
              />
              <Input
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
    </>
  );
}

export default CreateAnnouncement;
