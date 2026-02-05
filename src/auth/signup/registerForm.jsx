import { useEffect, useState } from "react";
import CustomerRegisterFlow from "./forms/customerForm";
import VendorRegisterForm from "./forms/carrierForm";

const ModernRegisterFlow = ({ FormType }) => {
    const [registrationType, setRegistrationType] = useState(FormType || "customer");

    useEffect(() => {
        if (FormType) {
            setRegistrationType(FormType);
        }
    }, [FormType]);

    return (
        <div >
            {registrationType === "customer" ? (
                <CustomerRegisterFlow />
            ) : (
                <VendorRegisterForm />
            )}

        </div>
    );
};

export default ModernRegisterFlow;