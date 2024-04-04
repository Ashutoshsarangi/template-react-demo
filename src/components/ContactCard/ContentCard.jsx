import { useTranslation } from "react-i18next";

const ContentCard = ({ imageSrc, name, phoneNo }) => {
  const { t } = useTranslation();
  return (
    <div className="m-3 p-3 border-lime-100 shadow">
      <div className="text-end">
        <a href="tel:phoneNo">
          <i class="fa-solid fa-phone h-[50px] w-[50px] text-blue-400 text-xl p-3 border border-blue-400 rounded-full shadow-2xl"></i>
        </a>
      </div>
      <div className="flex justify-center">
        <img src={imageSrc} className="h-[250px] w-[250px] rounded-full" />
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl text-slate-600">
          {name} ({phoneNo})
        </h2>
        <p className="mb-3 text-slate-500">{t("feel_free_reach_out_us")}</p>
      </div>
    </div>
  );
};

export default ContentCard;
