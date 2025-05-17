
import { AppProvider } from './context/AppContext';

import CustomerRoll from './components/CustomRoll';
import Register from './components/Register';
import Codev from './components/Codev';
import { AppContext } from './context/AppContext';
import { useContext } from 'react';


function App() {
  return (
   
    <AppProvider>
      <AppContent /> 
    </AppProvider>
  );
}


function AppContent() {

  const { step } = useContext(AppContext);

  return (
    <div>
     
      {step === 1 && <CustomerRoll />} 
      {step === 2 && <Register />}    
      {step === 3 && <Codev />}       
    </div>
  );
}

export default App;