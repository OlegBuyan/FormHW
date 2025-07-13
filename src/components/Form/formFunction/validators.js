import { ERORR_MESSAGE } from "../../../constant";

export const validator = (value, name, password, submitBtnRef) => {
  let newError = null;
  if (/[а-яёА-ЯЁ\s]/.test(value)) {
    newError = ERORR_MESSAGE.VALID_SYMBOLS;
  } else if (value.length > 20) {
    newError = ERORR_MESSAGE.MAX;
  } else if (name === `repeatPassword` && password !== value) {
    newError = ERORR_MESSAGE.VALID_PASS;
  } else if (!newError && name === `repeatPassword` && password === value) {
    setTimeout(() => {
      submitBtnRef.current.focus();
    }, 0);
  }
  return newError;
};

export const validationOnBlur = (value, name, repeatPassword) => {
  let newError = null;
  if (value.length < 3) {
    newError = ERORR_MESSAGE.MIN;
  } else if (name === `password` && repeatPassword !== value) {
    newError = ERORR_MESSAGE.REPEAT_PASS;
  }

  if (name === `email` && !/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(value)) {
    newError = ERORR_MESSAGE.VALID_EMAIL;
  }
  return newError;
};
export const isFormIncomplete = (formData) =>
  Object.values(formData).some((value) => value.trim() === "");
