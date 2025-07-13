import * as yup from "yup";
import { ERORR_MESSAGE } from "../../../constant/errorMessage";
export const validator = yup.object().shape({
  email: yup
    .string()
    .email(ERORR_MESSAGE.VALID_EMAIL)
    .matches(/^[^\sа-яА-ЯёЁ]*$/, ERORR_MESSAGE.VALID_SYMBOLS),
  password: yup
    .string()
    .min(4, ERORR_MESSAGE.MIN)
    .max(20, ERORR_MESSAGE.MAX)
    .matches(/^[^\sа-яА-ЯёЁ]*$/, ERORR_MESSAGE.VALID_SYMBOLS),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], ERORR_MESSAGE.REPEAT_PASS)
    .matches(/^[^\sа-яА-ЯёЁ]*$/, ERORR_MESSAGE.VALID_SYMBOLS),
});
