
import { createContext, useState } from 'react';


export const AppContext = createContext();


export const AppProvider = ({ children }) => {

  const [step, setStep] = useState(1);
  
  
  const [userType, setUserType] = useState("");
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    code: "",
    phone: ""
  });

  
  const handleSelect = (type) => {
    setUserType(type); 
    setStep(2); 
  };

  
  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev, 
      [field]: value 
    }));
  };

  
  return (
    <AppContext.Provider value={{
      step,       
      setStep,     
      userType,    
      handleSelect,
      formData,    
      updateFormData 
    }}>
      {children}  
    </AppContext.Provider>
  );
};