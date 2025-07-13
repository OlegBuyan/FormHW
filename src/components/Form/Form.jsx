import { useState, useRef } from "react";
import { FormLayout } from "./FormLayout/FormLayout";
import {
  validationOnBlur,
  validator,
  isFormIncomplete,
} from "./formFunction/validators";
import { sendDate } from "./formFunction/data";

export const Form = () => {
  const submitBtnRef = useRef(null);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [isFormDone, setisFormDone] = useState(false);

  const [fieldError, setFieldError] = useState(null);

  const { email, password, repeatPassword } = formData;

  const isDisabled = fieldError !== null || isFormIncomplete(formData);

  const onChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });

    setisFormDone(false);

    return setFieldError(
      validator(target.value, target.name, password, submitBtnRef)
    );
  };

  const onBlur = ({ target }) =>
    setFieldError(validationOnBlur(target.value, target.name, repeatPassword));

  const onSubmit = (event) => {
    event.preventDefault();
    return (
      sendDate({ email, password }),
      setisFormDone(true),
      setFormData({
        email: "",
        password: "",
        repeatPassword: "",
      })
    );
  };

  return (
    <FormLayout
      isFormDone={isFormDone}
      isDisabled={isDisabled}
      submitBtnRef={submitBtnRef}
      formData={formData}
      setFormData={setFormData}
      fieldError={fieldError}
      email={email}
      password={password}
      repeatPassword={repeatPassword}
      onBlur={onBlur}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};
