import Footer from "../Footer"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../Layout/Header";

export default ({ children }) => {
  const [hideFooter, setHideFooter] = useState(false)
  const Router = useRouter()
  
  useEffect(() => {
    const frameWidth = window.innerWidth
    Router.pathname === "/createProfile" && frameWidth <= 500 && setHideFooter(true)
    Router.pathname === "/signup" && frameWidth <= 500 && setHideFooter(true)
    Router.pathname === "/login" && frameWidth <= 500 && setHideFooter(true)
    Router.pathname === "/" && frameWidth <= 500 && setHideFooter(true)
  }, [])
  
  return (
      <div className="flex flex-col h-screen">
        <Header/>
        <div className="antialiased flex-1 text-gray-900 flex flex-col items-center justify-center px-3 m-auto">
          {children}
        </div>
        {!hideFooter && <Footer />}
      </div>
  );
};