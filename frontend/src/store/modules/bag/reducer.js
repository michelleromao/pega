import { Reducer } from 'redux';
import produce from 'immer';
import api from '../../../services/api';

const INITIAL_STATE = {
  idBag: null,
  idBuyer: null,
  announcements: [],
  idPayment: 'd51c243e-8adb-41fb-8093-b9241be23665',
  value: null,
  idCupom: null,
  totalValue: null,
};

const bag = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'ADD_PRODUCT_TO_BAG': {
        const { announcement } = action.payload;
        const product = {
          idAnnouncement: announcement.idAnnouncement,
          title: announcement.title,
          color: announcement.color,
          size: announcement.size,
          state: announcement.state,
          description: announcement.description,
          tryOn: announcement.tryOn,
          initPrice: announcement.initPrice,
          idOwner: announcement.idOwner,
          idStyle: announcement.idStyle,
          idCategory: announcement.idCategory,
          deliveryType: announcement.deliveryType,
          priceDelivery: announcement.priceDelivery,
          paymentType: announcement.paymentType,
          idStatus: announcement.idStatus,
          offert: announcement?.offert,
          valueOffert: announcement?.valueOffert,
        };
        const productInBagIndex = draft.announcements.findIndex(
          (item) => item.idAnnouncement === product.idAnnouncement,
        );
        if (productInBagIndex >= 0) {
          alert('Opa! Esse produto já está na sua sacola :)');
          return draft;
        } else {
          if (announcement?.offert === true) {
            draft.announcements.push(product);
            draft.totalValue += product.valueOffert;
            draft.value += product.valueOffert;
          } else {
            draft.announcements.push(product);
            draft.totalValue += product.initPrice;
            draft.value += product.initPrice;
          }
        }

        break;
      }
      case 'REMOVE_PRODUCT_TO_BAG': {
        const { idAnnouncement } = action.payload;
        const productInBagIndex = draft.announcements.findIndex(
          (item) => item.idAnnouncement === idAnnouncement,
        );
        const productToRemove = state.announcements[productInBagIndex];
        console.log('productInBagIndex');
        console.log(productInBagIndex);

        if (productToRemove?.offert === true) {
          draft.totalValue -= productToRemove.valueOffert;
          draft.value -= productToRemove.valueOffert;
        } else {
          draft.totalValue -= productToRemove.initPrice;
          draft.value -= productToRemove.initPrice;
        }
        draft.announcements.splice(productInBagIndex, 1);

        break;
      }
      case 'BUY_PRODUCTS_IN_BAG': {
        const { user } = action.payload;
        draft.idBuyer = user;

        const idAnnouncements = state.announcements.map((a) => {
          return a.idAnnouncement;
        });
        api
          .post('/bags', {
            idBuyer: draft.idBuyer,
            announcements: idAnnouncements,
            idPayment: draft.idPayment,
            value: draft.value,
            idCupom: draft.idCupom,
            totalValue: draft.totalValue,
          })
          .then((response) => {
            draft.idBag = response.data.idBag;
          });

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default bag;
