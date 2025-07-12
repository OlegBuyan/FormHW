export const FormMessage = ({ fieldError, isFormDone }) => {
  if (fieldError !== null) {
    return (
      <div className="absolute text-xs w-xs text-center top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-700">
        {fieldError}
      </div>
    );
  } else if (isFormDone) {
    return (
      <div className="absolute text-xs w-xs text-center top-5 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-700">
        {"Регистрация успешна"}
      </div>
    );
  }
};
