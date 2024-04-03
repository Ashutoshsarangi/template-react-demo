import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WebPackages from "../../components/WebPackages/WebPackages";
import {
  webStarterPackages,
  webStandardPackages,
  webPrimiumPackages,
  webAdvancedPackages,
  webEnterPrisePackages,
} from "./Pricing.constants";

const Pricing = (props) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-3 shadow m-1 mb-3 flex justify-between flex-col">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-slate-600">{t("price")}</span>
        <Link
          to="/feature"
          className="p-2 m-2 ml-0 pl-0 hover:text-violet-700 text-orange-500"
        >
          {t("faq_full")}
          <i className="fa-solid fa-arrow-right ml-3"></i>
        </Link>
      </div>
      <div className="space-y-3 mt-5">
        <div className="collapse collapse-plus bg-base-200 static">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium static">
            {t("web_Applications_full")}
          </div>
          <div className="collapse-content">
            <div className="grid lg:grid-cols-3 md:grid-cols-2">
              <WebPackages
                id="web-starter"
                t={t}
                packages={webStarterPackages}
                extraClasses="bg-orange-300"
                title="Starter"
                price="249"
              />
              <WebPackages
                id="web-standard"
                t={t}
                packages={webStandardPackages}
                extraClasses="bg-orange-400"
                title="Standard"
                price="599"
              />
              <WebPackages
                id="web-advance"
                t={t}
                packages={webAdvancedPackages}
                extraClasses="bg-orange-500"
                title="Advanced"
                price="899"
              />
              <WebPackages
                id="web-premium"
                t={t}
                packages={webPrimiumPackages}
                extraClasses="bg-blue-600 text-white"
                title="Premium"
                price="1199"
              />
              <WebPackages
                id="web-enterprise"
                t={t}
                packages={webEnterPrisePackages}
                extraClasses="bg-blue-800 text-white"
                title="Enterprise"
                price="1499"
              />
            </div>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 static">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            {t("android_Applications_full")}
          </div>
          <div className="collapse-content">
            <p>{t("coming_soon")}</p>
          </div>
        </div>
        {/* <div className="collapse collapse-plus bg-base-200 static">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">Figma Design</div>
          <div className="collapse-content">
            <p>Comming Soon...</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 static">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Graphics Design
          </div>
          <div className="collapse-content">
            <p>Comming Soon...</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
