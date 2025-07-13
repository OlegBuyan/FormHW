import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email обязателен")
    .email("Введите корректный email")
    .matches(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/, "Неверный формат email"),
  password: yup
    .string()
    .required("Пароль обязателен")
    .min(3, "Минимум 3 символа")
    .max(20, "Максимум 20 символов")
    .matches(/^[^\sа-яА-ЯёЁ]*$/, "Недопустимые символы"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .required("Повтор пароля обязателен"),
});
