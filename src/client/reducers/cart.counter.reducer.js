export function cartCounter(state = 0, action) {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "ADD_TO_CART":
      return state + 1;
    case "REMOVE_TO_CART":
      return state - 1;
    default:
      return state;
  }
}
