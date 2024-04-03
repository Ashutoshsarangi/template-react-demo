import { useTranslation } from "react-i18next";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import AppWidget from "../../components/AppWidget/AppWidget";

const ourServices = [
  { title: "web_app_development", id: 1111 },
  { title: "android_mobile_app_development", id: 1112 },
  { title: "figma_design", id: 1113 },
  { title: "graphics_design_rest", id: 1114 },
];

const ourFeatures = [
  { title: "single_page_application", id: 11111 },
  { title: "responsive_design", id: 11112 },
  { title: "progressive_web_apps", id: 11113 },
  { title: "image_optimization", id: 11114 },
];

const Dashboard = ({ showPanel, setShowPanel }) => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServiceCard
        t={t}
        ourServices={ourServices}
        title="services"
        viewMoreLink="/offer"
      />
      <AppWidget
        t={t}
        title="web_Applications"
        routeLink="/projects/web"
        routeText="view_web_Applications"
        icon="chrome"
        noOfApps="10"
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
    </div>
  );
};

export default Dashboard;
