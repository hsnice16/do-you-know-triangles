export const inputHasValidValue = (inputState) => {
  return inputState !== "" && Number(inputState) > 0;
};
