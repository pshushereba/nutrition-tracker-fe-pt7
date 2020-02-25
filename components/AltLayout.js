import AltHeader from './AltHeader.js';

export default ({ children }) => {
  return (
    <>
      <AltHeader />
      <div className="antialiased text-gray-900 flex flex-col items-center justify-center px-3">
        {children}
      </div>
    </>
  );
};