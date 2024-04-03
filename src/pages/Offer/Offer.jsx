import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

const allOffers = [
  { title: "web_app_development", id: 111111 },
  { title: "android_mobile_app_development", id: 111112 },
  { title: "figma_design", id: 111113 },
  { title: "graphics_design_rest", id: 111114 },
  { title: "ios_app_development", id: 111115 },
  { title: "backend_node_development", id: 111116 },
  { title: "hire_as_developer", id: 111117 },
  { title: "hire_as_ui_designer", id: 111118 },
  { title: "hire_as_graphics_designer", id: 111119 },
  { title: "hire_as_Tutor", id: 111120 },
];

const Offer = (props) => {
  const { t } = useTranslation();
  return (
    <ServiceCard
      t={t}
      ourServices={allOffers}
      title="all_features"
      showView={false}
    />
    // <div className="bg-white p-3 shadow m-1 mb-3 flex justify-between flex-col">
    //   <div className="flex justify-between">
    //     <span className="text-2xl font-bold text-slate-600">
    //       Types Of Application We Deliver
    //     </span>
    //     <Link
    //       to="/price"
    //       className="btn bg-orange-500 hover:text-slate-100 hover:bg-blue-500"
    //     >
    //       Get An Estimation <i className="fa-solid fa-arrow-right ml-3"></i>
    //     </Link>
    //   </div>
    //   <ul className="text-slate-600 space-y-2 mt-3 p-3 text-xl list-decimal">
    //     <li>Web Application Development</li>
    //     <li>Android Mobile Application Development</li>
    //     <li>IOS Mobile Application Development (Coming Soon..)</li>
    //     <li>Back-End Server Development (Coming Soon...)</li>
    //     <li>Figma UI Design</li>
    //     <li>Graphics Design / Baner / Logo / Business Card</li>
    //     <li>Hire As a Developer (Part Time)</li>
    //     <li>Hire as UI Designer (Figma) (Part Time)</li>
    //     <li>Hire as Graphics Designer (Part Time)</li>
    //     <li className="list-none bottom-10"></li>
    //   </ul>
    // </div>
  );
};

export default Offer;
