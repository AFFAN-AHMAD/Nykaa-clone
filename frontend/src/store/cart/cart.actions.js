import axios from "axios";
import {
  ADD_TO_CART_ERROR,
  ADD_TO_CART_LOADING,
  ADD_TO_CART_SUCCESS,
  GET_ITEM_CART_ERROR,
  GET_ITEM_CART_LOADING,
  GET_ITEM_CART_SUCCESS,
  GET_SINGLE_ITEM_CART_ERROR,
  GET_SINGLE_ITEM_CART_LOADING,
  GET_SINGLE_ITEM_CART_SUCCESS,
  REMOVE_FROM_CART_ERROR,
  REMOVE_FROM_CART_LOADING,
  REMOVE_FROM_CART_SUCCESS,
  UPDATE_CART_ERROR,
  UPDATE_CART_LOADING,
  UPDATE_CART_SUCCESS,
} from "./cart.types";

export const getItemApi = () => (dispatch) => {
  dispatch({ type: GET_ITEM_CART_LOADING });

  axios
    .get("https://nykaclonebymyteam.herokuapp.com/cart")
    .then((res) => {
      return dispatch({ type: GET_ITEM_CART_SUCCESS, payload: res.data });
    })
    .catch((r) => dispatch({ type: GET_ITEM_CART_ERROR }));
};

export const getSingleItemApi = (id) => (dispatch) => {
  dispatch({ type: GET_SINGLE_ITEM_CART_LOADING });

  axios
    .get(`https://nykaclonebymyteam.herokuapp.com/cart/${id}`)
    .then((res) => {
      return dispatch({ type: GET_SINGLE_ITEM_CART_SUCCESS, payload: res.data });
    })
    .catch((r) => dispatch({ type: GET_SINGLE_ITEM_CART_ERROR }));
};

export const addCartApi = (item) => (dispatch) => {
  dispatch({ type: ADD_TO_CART_LOADING });

  axios
    .post("https://nykaclonebymyteam.herokuapp.com/cart", {
      name: item.name,
      gram: item.gram,
      image: item.images[0],
      price: item.price,
      quantity: 1,
      id: item.id,
    })
    .then((res) => {
      return dispatch({ type: ADD_TO_CART_SUCCESS, payload: res.data.data });
    })

    .catch((r) => dispatch({ type: ADD_TO_CART_ERROR }));
};

export const removeCartApi = (id) => (dispatch) => {
  dispatch({ type: REMOVE_FROM_CART_LOADING });

  axios
    .delete(`https://nykaclonebymyteam.herokuapp.com/cart/${id}`)
    .then((res) => dispatch({ type: REMOVE_FROM_CART_SUCCESS, payload: id }))

    .catch((r) => dispatch({ type: REMOVE_FROM_CART_ERROR }));
};

export const updateCartApi = (id, quantity) => (dispatch) => {
  dispatch({ type: UPDATE_CART_LOADING });
  axios
    .put(`https://nykaclonebymyteam.herokuapp.com/cart/${id}`, {
      quantity,
    })
    .then((res) => {
      return dispatch({ type: UPDATE_CART_SUCCESS, payload: { id, quantity } });
    })
    .then((res) => dispatch(getItemApi()))

    .catch((r) => dispatch({ type: UPDATE_CART_ERROR }));
};
