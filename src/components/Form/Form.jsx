import { useState, useRef } from "react";
import { FormLayout } from "./FormLayout/FormLayout";
import { validationOnBlur, validator } from "./formFunction/validators";
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

  const isFormIncomplete = Object.values(formData).some(
    (value) => value.trim() === ""
  );

  const isDisabled = fieldError !== null || isFormIncomplete;

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
      onBlur={onBlur}
      onChange={onChange}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
      email={email}
      password={password}
      repeatPassword={repeatPassword}
      fieldError={fieldError}
      isFormIncomplete={isFormIncomplete}
    />
  );
};
