export const Capitalize = (str) => {
  if (typeof str !== "string") {
    /*
    Has to handle an unexpected type

    1. Throw error
    throw new Error("invalid string");

    2. Return a defaulted value
    return undefined;
    */
  }

  return str.toUpperCase();
};
