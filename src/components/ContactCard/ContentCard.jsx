import { useTranslation } from "react-i18next";

const ContentCard = ({ imageSrc, name, phoneNo }) => {
  const { t } = useTranslation();
  return (
    <div className="m-3 p-3 border-lime-100 shadow">
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
