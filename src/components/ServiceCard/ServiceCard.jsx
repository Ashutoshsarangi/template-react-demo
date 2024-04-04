import { Link } from "react-router-dom";

const ServiceCard = ({
  t,
  ourServices,
  title,
  viewMoreLink,
  showView = true,
}) => {
  return (
    <div className="bg-white p-3 shadow m-1 mb-3 flex justify-between flex-col dark:bg-slate-700">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-slate-600 dark:text-white">
          {t(title)}
        </span>
        <Link
          to="/price"
          className="hover:text-orange-500 text-blue-700 font-bold text-xl  dark:text-white"
        >
          {t("get_an_estimation")}
          <i className="fa-solid fa-arrow-right ml-3"></i>
        </Link>
      </div>
      <ul className="text-slate-600 space-y-2 mt-3 p-3 text-xl list-decimal ml-2 dark:text-white">
        {ourServices.map((service) => (
          <li key={service.id}>{t(service.title)}</li>
        ))}
      </ul>
      {showView && (
        <div className="text-end">
          <Link
            to={viewMoreLink}
            className="hover:text-orange-500 text-blue-700 font-bold text-xl dark:text-white"
          >
            {t("view_more")} <i className="fa-solid fa-arrow-right ml-3"></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
