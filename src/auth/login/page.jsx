import { useRef, useState } from "react";
import Navbar from "../../public/Components/Navbar";
import Footer from "../../public/Components/Footer";
import Register from "../../public/Components/Register";
import Loginpagemain from "./loginForm";
import SecurityPanelLayout from "./loginHeader";

const LoginPage = () => {
  const loginRef = useRef(null);
  const [formType, setFormType] = useState("customer"); // ⭐ SOURCE OF TRUTH

  const handleScrollToLogin = (type) => {
    console.log(type);
    
    setFormType(type); // ⭐ update form type
    if (loginRef.current) {
      loginRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />
      <SecurityPanelLayout onLoginClick={handleScrollToLogin} selectedType={formType} />

      {/* Add ref here */}
      <div ref={loginRef}>
        <Loginpagemain FormType={formType} />
      </div>

      <Register />
      <Footer />
    </>
  );
};

export default LoginPage;
