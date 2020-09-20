import { createReducer } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import React from 'react'
import {addToBag} from '../actions/bag'
import Image1 from  '../assets/photos/productsmall1.png'
import Image2 from  '../assets/photos/productsmall2.png'

import {
    ADD_TO_BAG, 
    REMOVE_FROM_BAG,
} from '../constants/index';

const products =  [{
  id: 1,
  state: "Usado",
  size: "M",
  owner: "Joao",
  photos: "",
  title: "Camiseta Tom Astronauta",
  color: "Azul",
  price: 30.00,
  offert: true,
  promo: 29.99,
  image: Image1,
}, 
{
  id: 2,
  state: "Usado",
  size: "M",
  owner: "Joao",
  photos: "",
  title: "Camiseta Stranger Things",
  color: "Azul",
  price: 25.00,
  offert: true,
  promo: 20.00,
  image: Image2,
}]

export const bagInitialState = {
  
    idBag: 1,
    buyer: 1,
    products: products,
    idPayment: null,
    value: 0,
    idCupom: "",
    totalValue: 49.99,
};


export const reducerBag = (state = bagInitialState, action) => {
  let new_state = {...state}; 

  switch (action.type) {
    
    case ADD_TO_BAG:
      console.log("ADD_TO_BAG")
      new_state.products.push({
        id: action.payload.id,
        state: action.payload.state,
        size: action.payload.size,
        owner: action.payload.owner,
        title: action.payload.title,
        color: action.payload.color,
        price: action.payload.price,
        offert: action.payload.offert,
        promo: action.payload.promo,
        image: Image2,
      });
      new_state.totalValue += action.payload.price;
      return new_state;

    case REMOVE_FROM_BAG:
      console.log("REMOVE_FROM_BAG")
      const index = new_state.bags.products.findIndex((product) => product.id === action.payload.id);
      new_state.products.splice(index, 1);
      return new_state;

    default:
      return new_state;
  };
};

