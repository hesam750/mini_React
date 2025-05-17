import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Register() {
  const { 
    userType,     
    setStep,      
    updateFormData 
  } = useContext(AppContext);

  const handleNext = () => setStep(3); 
  const handleBack = () => setStep(1); 

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
      <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "450px", textAlign: "right" }}>
        
        <h5 className="mb-4 fw-bold">
          ثبت‌نام برای {userType === "admin" ? "ادمین" : "کاستومر"}
        </h5>

        <form className="mb-3">
          {userType === "admin" ? (
            <>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="نام مدیر" 
                  onChange={(e) => updateFormData('name', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="ایمیل سازمانی" 
                  onChange={(e) => updateFormData('email', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="کد پرسنلی" 
                  onChange={(e) => updateFormData('employeeCode', e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-3">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="نام کامل" 
                  onChange={(e) => updateFormData('name', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="ایمیل شخصی" 
                  onChange={(e) => updateFormData('email', e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input 
                  type="tel" 
                  className="form-control" 
                  placeholder="شماره تماس" 
                  onChange={(e) => updateFormData('phone', e.target.value)}
                />
              </div>
            </>
          )}
        </form>

        <button onClick={handleNext} className="btn btn-primary w-100">
          ثبت‌نام
        </button>

        <button
          type="button"
          onClick={handleBack}
          className="btn btn-danger mt-2 w-25"
        >
          بازگشت
        </button>
      </div>
    </div>
  );
}

export default Register;