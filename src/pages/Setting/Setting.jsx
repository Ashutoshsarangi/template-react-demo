import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Setting = (props) => {
  const [val, SetVal] = useState("NA");
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleOnChange = (e) => {
    SetVal(e.target.value);
    i18n.changeLanguage(e.target.value);
    navigate("/dashboard");
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl static">
      <div className="card-body">
        <h2 className="card-title">Change Language</h2>
        <select value={val} onChange={(e) => handleOnChange(e)}>
          <option value="NA">Select Language</option>
          <option value="en">English</option>
          <option value="el">Greek</option>
        </select>
      </div>
    </div>
  );
};

export default Setting;
