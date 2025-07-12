export const FormFieldLayout = ({
  type,
  name,
  value,
  children,
  className = "",
  onChange,
  onBlur,
}) => {
  return (
    <>
      <label htmlFor={name}>{children}</label>
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
};
