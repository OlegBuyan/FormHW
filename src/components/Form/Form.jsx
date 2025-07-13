import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormLayout } from "./FormLayout/FormLayout";
import { schema } from "./formFunction/schema";
import { sendDate } from "./formFunction/data";

export const Form = () => {
  const submitBtnRef = useRef(null);
  const [isFormDone, setIsFormDone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  if (isValid) {
    setTimeout(() => {
      submitBtnRef.current.focus();
    }, 0);
  }

  const onSubmit = (data) => {
    sendDate(data);
    setIsFormDone(true);
    reset();
    setTimeout(() => {
      setIsFormDone(false);
    }, 1000);
  };

  return (
    <FormLayout
      register={register}
      errors={errors}
      submitBtnRef={submitBtnRef}
      onSubmit={handleSubmit(onSubmit)}
      isFormDone={isFormDone}
      isDisabled={!isValid}
    />
  );
};
