import { FormFieldLayout } from "./FormFieldLayout";
import { FormBtnLayout } from "./FormBtnLayout";
import { FormMessage } from "./FormMessage ";

export const FormLayout = ({
  onSubmit,
  register,
  errors,
  submitBtnRef,
  isDisabled,
  isFormDone,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-xs bg-gray-200 m-auto items-center gap-2 p-10 relative"
    >
      <FormMessage
        isFormDone={isFormDone}
        fieldError={
          errors?.email?.message ||
          errors?.password?.message ||
          errors?.repeatPassword?.message
        }
      />

      <FormFieldLayout
        htmlFor="email"
        type="email"
        name="email"
        register={register}
      >
        Введите email
      </FormFieldLayout>

      <FormFieldLayout
        htmlFor="password"
        type="password"
        name="password"
        register={register}
      >
        Введите пароль
      </FormFieldLayout>

      <FormFieldLayout
        htmlFor="repeatPassword"
        type="password"
        name="repeatPassword"
        register={register}
      >
        Повторите пароль
      </FormFieldLayout>

      <FormBtnLayout
        ref={submitBtnRef}
        disabled={isDisabled}
        className={
          isDisabled
            ? "bg-gray-500 shadow-lg shadow-gray-500/50 p-3 rounded-2xl text-white"
            : "bg-cyan-500 shadow-lg shadow-cyan-500/50 p-3 rounded-2xl"
        }
      >
        Зарегистрировать
      </FormBtnLayout>
    </form>
  );
};
