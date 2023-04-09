// import { USER_PRESENT } from "./action";
// export const userPresentInfo = (userPresent = false, action) => {
//   switch (action.type) {
//     case USER_PRESENT:
//       return action.payload;
//     default:
//       return userPresent;
//   }
// };
import { COUNTER, ADD, UPDATE, DELETE } from "./action";
export const renderPage = (count = 0, action) => {
  switch (action.type) {
    case COUNTER:
      return (count = count + 1);
    default:
      return count;
  }
};
export const addData = (oldValues = [], action) => {
  switch (action.type) {
    case ADD:
      return [...oldValues, action.payload];
    case UPDATE:
      return oldValues.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            username: action.payload.username,
            email: action.payload.email,
            designation: action.payload.designation,
          };
        }
        return item;
      });
    // return [...oldValues, action.payload];
    case DELETE:
      const duplicateArray = oldValues.filter(
        (item) => item.id === action.payload.id
      );
      duplicateArray.pop();
      return [
        ...duplicateArray,
        ...oldValues.filter((item) => item.id !== action.payload.id),
      ];
    default:
      return oldValues;
  }
};
