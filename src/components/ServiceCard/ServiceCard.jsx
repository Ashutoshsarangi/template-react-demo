import { Link } from "react-router-dom";

const ServiceCard = ({
  t,
  ourServices,
  title,
  viewMoreLink,
  showView = true,
}) => {
  return (
    <div className="bg-white p-3 shadow m-1 mb-3 flex justify-between flex-col">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-slate-600">{t(title)}</span>
        <Link to="/price" className="hover:text-blue-700 text-orange-500">
          {t("get_an_estimation")}
          <i className="fa-solid fa-arrow-right ml-3"></i>
        </Link>
      </div>
      <ul className="text-slate-600 space-y-2 mt-3 p-3 text-xl list-decimal ml-2">
        {ourServices.map((service) => (
          <li key={service.id}>{t(service.title)}</li>
        ))}
      </ul>
      {showView && (
        <div className="text-end">
          <Link
            to={viewMoreLink}
            className="hover:text-blue-700 text-orange-500"
          >
            {t("view_more")} <i className="fa-solid fa-arrow-right ml-3"></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
