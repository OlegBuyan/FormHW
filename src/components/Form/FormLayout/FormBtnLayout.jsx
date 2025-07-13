export const FormBtnLayout = ({
  className = "",
  type,
  disabled,
  children,
  ref,
}) => {
  return (
    <button ref={ref} className={className} disabled={disabled} type={type}>
      {children}
    </button>
  );
};
