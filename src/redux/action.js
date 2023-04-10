// export const USER_PRESENT = "USER_PRESENT";
// export const resourceData = (value) => ({
//   type: USER_PRESENT,
//   payload: value,
// });
export const COUNTER = "COUNTER";
export const ADD = "ADD";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
export const INITIAL_LOAD = "INITIAL_LOAD";
export const SET_PRODUCTS = "SET_PRODUCTS";
//here I am getting all the data on the initial load of the page
//this is the action creator which will be called when fetchProducts action will be called
export const setProducts = (products = null) => {
  if (products) {
    return {
      type: SET_PRODUCTS,
      payload: products,
    };
  }
};

export const fetchProducts = () => {
  return async function (dispatch) {
    const res = await fetch(
      "https://repulsive-leotard-fly.cyclic.app/allresource"
    );
    const data = await res.json();
    dispatch(setProducts(data));
  };
};
export const initialLoad = () => {
  fetch("https://repulsive-leotard-fly.cyclic.app/allresource")
    .then((res) => res.json())
    .then((data) => {
      return {
        type: INITIAL_LOAD,
        payload: data,
      };
    });
};

export const valueChanged = (value) => ({
  type: COUNTER,
  payload: value,
});
export const addData = (
  id,
  username,
  email,
  designation,
  password,
  today,
  billable,
  nonbillable
) => ({
  type: ADD,
  payload: {
    id,
    username,
    email,
    designation,
    password,
    today,
    billable,
    nonbillable,
  },
});
export const updateData = (
  id,
  username,
  email,
  designation,
  password,
  today,
  billable,
  nonbillable
) => ({
  type: UPDATE,
  payload: {
    id,
    username,
    email,
    designation,
    password,
    today,
    billable,
    nonbillable,
  },
});
export const deleteData = (id) => ({
  type: DELETE,
  payload: {
    id,
  },
});
