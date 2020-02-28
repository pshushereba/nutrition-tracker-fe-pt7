import AppHeader from "./AppHeader";

export default ({ children }) => {
  return (
    <>
      <AppHeader />
      <div className="antialiased text-gray-900 flex flex-col items-center justify-center px-3">
        {children}
      </div>
    </>
  );
};