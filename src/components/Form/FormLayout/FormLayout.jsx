import { FormFieldLayout } from "./FormFieldLayout";
import { FormBtnLayout } from "./FormBtnLayout";
import { FormMessage } from "./FormMessage ";
export const FormLayout = ({
  onSubmit,
  fieldError,
  onBlur,
  submitBtnRef,
  isDisabled,
  onChange,
  isFormIncomplete,
  isFormDone,
  ...props
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-xs bg-gray-200  m-auto items-center gap-2 p-10 relative"
    >
      <FormMessage isFormDone={isFormDone} fieldError={fieldError} />

      <FormFieldLayout
        htmlFor={"email"}
        type={"email"}
        name={"email"}
        className="bg-white mb-4 mt-2"
        value={props.email}
        onChange={onChange}
        onBlur={onBlur}
      >
        {"Введите email"}
      </FormFieldLayout>
      <FormFieldLayout
        htmlFor={"password"}
        type={"password"}
        name={"password"}
        className="bg-white mb-4 mt-2"
        value={props.password}
        onChange={onChange}
        onBlur={onBlur}
      >
        {"Введите пароль"}
      </FormFieldLayout>
      <FormFieldLayout
        htmlFor={"repeatPassword"}
        type={"password"}
        name={"repeatPassword"}
        className="bg-white mb-4 mt-2"
        value={props.repeatPassword}
        onChange={onChange}
        onBlur={onBlur}
      >
        {"Повторите пароль"}
      </FormFieldLayout>
      <FormBtnLayout
        ref={submitBtnRef}
        className={
          isDisabled
            ? "bg-gray-500 shadow-lg shadow-gray-500/50 p-3 rounded-2xl text-white"
            : "bg-cyan-500 shadow-lg shadow-cyan-500/50 p-3 rounded-2xl"
        }
        type={"submit"}
        disabled={isDisabled}
      >
        {"Зарегистрировать"}
      </FormBtnLayout>
    </form>
  );
};
