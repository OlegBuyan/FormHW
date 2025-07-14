export const FormLayout = ({ onSubmit, children }) => {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-xs bg-gray-200 m-auto items-center gap-2 p-10 relative"
    >
      {children}
    </form>
  );
};
