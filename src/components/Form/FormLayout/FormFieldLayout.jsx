export const FormFieldLayout = ({
  htmlFor,
  type,
  name,
  children,
  error,
  register,
}) => {
  return (
    <>
      <label htmlFor={htmlFor}>{children}</label>
      <input
        id={htmlFor}
        type={type}
        {...register(name)}
        className="bg-white mb-1 mt-1 p-1 rounded w-full"
      />
      {error && <p className="text-xs text-red-600">{error}</p>}
    </>
  );
};
