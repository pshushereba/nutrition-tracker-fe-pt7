import AppHeader from "./AppHeader";
import Footer from "./Footer.js"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default ({ children }) => {
  const [mobileSignUp, setMobileSignUp] = useState(false)
  const Router = useRouter()
  
  useEffect(() => {
    const frameWidth = window.innerWidth
    Router.pathname === "/signup" && frameWidth <= 500 && setMobileSignUp(true)
    Router.pathname === "/login" && frameWidth <= 500 && setMobileSignUp(true)
  }, [])
  
  return (
    <>
      <AppHeader />
      <div className="antialiased text-gray-900 flex flex-col items-center justify-center px-3 overflow-scroll">
        {children}
      </div>
      {!mobileSignUp && <Footer />}
    </>
  );
};