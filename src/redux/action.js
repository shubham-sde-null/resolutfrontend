// export const USER_PRESENT = "USER_PRESENT";
// export const resourceData = (value) => ({
//   type: USER_PRESENT,
//   payload: value,
// });
export const COUNTER = "COUNTER";
export const ADD = "ADD";
export const UPDATE = "UPDATE";
export const DELETE = "DELETE";
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
