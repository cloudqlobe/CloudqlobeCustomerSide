import { useEffect, useState } from "react";
import CarrierLoginPage from "./forms/carrier";
import CustomerLoginPage from "./forms/customer";

const Loginpagemain = ({ FormType }) => {
  const [loginType, setLoginType] = useState(FormType || "customer");

  useEffect(() => {
    if (FormType) {
      setLoginType(FormType);
    }
  }, [FormType]);

  return (
        <div >
            {loginType === "customer" ? (
                <CustomerLoginPage />
            ) : (
                <CarrierLoginPage />
            )}

        </div>
  );
};

export default Loginpagemain;