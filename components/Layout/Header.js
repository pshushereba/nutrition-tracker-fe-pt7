import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div className="flex w-full py-4 bg-mobileFoot">
      <h1 className="flex-1 text-2xl font-medium pl-20">Nutrivurv</h1>
      <span className="flex flex-1 justify-center">
        <ul className="flex items-center">
          <a className="px-5">Log Food +</a>
          <a className="px-5">Settings</a>
          <a className="px-5 cursor-pointer">Sign Out</a>
        </ul>
      </span>
    </div>
  );
};

export default Header;
