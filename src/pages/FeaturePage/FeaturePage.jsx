import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { faqs } from "./FAQ.constants";

const FeaturePage = (props) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-3 shadow m-1 mb-3 flex justify-between flex-col">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-slate-600">FAQ</span>
        <Link
          to="/price"
          className="p-2 m-2 ml-0 pl-0 hover:text-violet-700 text-orange-500"
        >
          Get Estimation
          <i className="fa-solid fa-arrow-right ml-3"></i>
        </Link>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          return (
            <div
              key={faq.id}
              className="collapse collapse-plus bg-base-200 static"
            >
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-xl font-medium static">
                {t(`${faq.id}.title`)}
              </div>
              <div className="collapse-content">
                <p>{t(`${faq.id}.description`)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturePage;
