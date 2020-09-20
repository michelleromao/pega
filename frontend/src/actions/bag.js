import { createAction } from '@reduxjs/toolkit';

import api from '../services/api';
import {
    ADD_TO_BAG, 
    REMOVE_FROM_BAG,
} from '../constants/index';

export const addToBag = createAction(ADD_TO_BAG);
export const removeFromBag = createAction(REMOVE_FROM_BAG);


// export function addToBag(payload) {
//     return {
//         type: ADD_TO_BAG,
//         payload: payload
//     };

// }

// export function removeFromBag(payload) {
//     return {
//         type: REMOVE_FROM_BAG,
//         payload: payload
//     };

// }

