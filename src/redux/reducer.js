import { USER_PRESENT } from "./action";
export const userPresentInfo = (userPresent = false, action) => {
  switch (action.type) {
    case USER_PRESENT:
      return action.payload;
    default:
      return userPresent;
  }
};
