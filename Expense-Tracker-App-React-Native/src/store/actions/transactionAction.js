import {ADD_TRANSACTION, DELETE_TRANSACTION} from './types';

export const addTransaction = (newTransaction) => (dispatch) => {
  dispatch({type: ADD_TRANSACTION, payload: newTransaction});
};

export const deleteTransaction = (id) => (dispatch) => {
  dispatch({type: DELETE_TRANSACTION, payload: id});
};
