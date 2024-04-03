import { Link } from "react-router-dom";

const AppWidget = ({ t, title, routeLink, routeText, icon, noOfApps }) => {
  return (
    <div className="bg-white w-2xl p-5 h-30 shadow m-1 flex justify-between flex-col">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-slate-600">{t(title)}</span>
        <Link to={routeLink} className="hover:text-blue-700 text-orange-500">
          {t(routeText)}
          <i className="fa-solid fa-arrow-right ml-3"></i>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="stat-value text-blue-700">{noOfApps}+</div>
        </div>
        <i className={`text-blue-700 fab fa-${icon} text-2xl`}></i>
      </div>
    </div>
  );
};

export default AppWidget;
