import { useTranslation } from "react-i18next";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import AppWidget from "../../components/AppWidget/AppWidget";
import { useProgressiveImg } from "../../hooks/useProgressiveImg";
import performanceLow from "../../assets/performance/performance_low.png";
import performanceHigh from "../../assets/performance/performance_high.png";
import Stage from "../../assets/stage.png";
import StageMini from "../../assets/stage_mini.png";
import { ourFeatures, ourServices } from "./Dashboard.constants";

const Dashboard = ({ showPanel, setShowPanel }) => {
  const { t } = useTranslation();
  const [src, { blur }] = useProgressiveImg(performanceLow, performanceHigh);
  const [srcStage, { blurStage }] = useProgressiveImg(StageMini, Stage);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-white p-3 shadow m-1 mb-3 flex justify-between flex-col dark:bg-slate-700">
        <img
          src={srcStage}
          alt="This is related to State of our Service"
          style={{
            filter: blurStage ? "blur(20px)" : "none",
            transition: blurStage ? "none" : "filter 0.3s ease-out",
          }}
        />
      </div>
      <AppWidget
        t={t}
        title="web_Applications"
        routeLink="/projects/web"
        routeText="view_web_Applications"
        icon="chrome"
        noOfApps="10"
      />
      <ServiceCard
        t={t}
        ourServices={ourServices}
        title="services"
        viewMoreLink="/offer"
      />

      <AppWidget
        t={t}
        title="android_Applications"
        routeLink="/projects/mobile"
        routeText="view_android_Applications"
        icon="android"
        noOfApps="5"
      />
      <ServiceCard
        t={t}
        ourServices={ourFeatures}
        title="features"
        viewMoreLink="/feature"
      />
      <div className="bg-white p-3 shadow m-1 mb-3 flex justify-between flex-col dark:bg-slate-700">
        <img
          src={src}
          alt="This is related to performance of this website"
          style={{
            filter: blur ? "blur(20px)" : "none",
            transition: blur ? "none" : "filter 0.3s ease-out",
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
