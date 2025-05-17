// ایمپورت هوک‌های مورد نیاز
import { useContext, useState } from "react";
// ایمپورت Context
import { AppContext } from "../context/AppContext";

function CustomRoll() {
  // state برای مقدار انتخاب شده (admin یا customer)
  const [value, setValue] = useState("");
  
  // دریافت تابع handleSelect از Context
  const { handleSelect } = useContext(AppContext);

  // تابع ادامه دادن به مرحله بعد
  const handleContinue = () => {
    if (value) handleSelect(value); // فراخوانی تابع Context
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ width: "100%", maxWidth: "400px", textAlign: "right" }}>
        <h5 className="mb-4 fw-bold">نوع حساب را انتخاب کنید:</h5>

        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="radio"
            name="accountType"
            id="customer"
            value="customer"
            checked={value === "customer"}
            onChange={(e) => setValue(e.target.value)}
          />
          <label className="form-check-label" htmlFor="customer">
            کاستومر
          </label>
        </div>

        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="radio"
            name="accountType"
            id="admin"
            value="admin"
            checked={value === "admin"}
            onChange={(e) => setValue(e.target.value)}
          />
          <label className="form-check-label" htmlFor="admin">
            ادمین
          </label>
        </div>

        <button
          className="btn btn-primary w-100"
          onClick={handleContinue}
          disabled={!value}
        >
          ادامه
        </button>
      </div>
    </div>
  );
}

export default CustomRoll;