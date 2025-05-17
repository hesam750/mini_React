// ایمپورت هوک useContext
import { useContext } from "react";
// ایمپورت Context
import { AppContext } from "../context/AppContext";

function Codev() {
  // دریافت مقادیر و توابع مورد نیاز از Context
  const { 
    setStep,    // تابع تغییر مرحله
    formData    // داده‌های فرم
  } = useContext(AppContext);

  // تابع برگشت به مرحله قبل
  const handleBack = () => setStep(2);

  // تابع ارسال فرم
  const handleSubmit = () => {
    console.log('Form data submitted:', formData);
    // اینجا می‌توان داده‌ها را به سرور ارسال کرد
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light px-3">
      <div className="card shadow-sm p-4 w-100" style={{ maxWidth: "400px", textAlign: "right" }}>
        <h5 className="mb-4 fw-bold">کد تأیید را وارد کنید:</h5>
        
        {/* فیلد ورود کد تأیید */}
        <input
          type="text"
          className="form-control mb-4 text-center fs-5"
          placeholder="123456"
          maxLength="6"
        />
        
        {/* دکمه‌های ناوبری */}
        <button onClick={handleSubmit} className="btn btn-success w-100">تأیید</button>
        <br />
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

export default Codev;