export const FormFieldLayout = ({
  htmlFor,
  type,
  name,
  children,
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
    </>
  );
};
