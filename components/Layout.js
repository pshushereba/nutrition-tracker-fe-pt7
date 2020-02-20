import NTHeader from './Header.js';

export default ({ children }) => {
  return (
    <>
      <NTHeader />
      <div className="antialiased text-gray-900 flex flex-col items-center justify-center min-h-screen">
        {children}
      </div>
    </>
  );
};
