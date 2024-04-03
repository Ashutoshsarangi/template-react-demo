import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useSidePanel from "../../context/sidepanel.context";
import "./SidePanel.css";

const SidePanel = () => {
  const { showPanel, setShowPanel } = useSidePanel();
  const { t } = useTranslation();
  const handleMenuClick = (e) => {
    if (e.view.innerWidth <= 1024) {
      setShowPanel(!showPanel);
    }
  };

  return (
    <div
      id="sidePanel"
      className={`shadow h-full bg-slate-800 lg:block min-w-[270px] text-slate-200 border-slate-100 xl:min-w-[360px] ${
        showPanel ? "block fixed top-0 left-0" : "hidden"
      }`}
    >
      <div className="p-4">
        <div className="lg:hidden flex items-center mb-4 justify-between cursor-pointer">
          <h2 className="text-xl font-semibold ">
            <Link to="/dashboard">Ashu Tech Solutions</Link>
          </h2>
          <i
            className="fa-solid fa-arrow-left h-[30px] w-[30px] bg-slate-500 pl-2 rounded-full text-xl text-white"
            onClick={() => setShowPanel(!showPanel)}
          ></i>
        </div>

        <ul
          className="menu text-l xl:text-xl "
          onClick={(e) => handleMenuClick(e)}
        >
          <li>
            <Link to="/dashboard">{t("dashboard")}</Link>
          </li>
          <li>
            <details open>
              <summary>
                <Link to="/projects">{t("projects")}</Link>
              </summary>
              <ul className="border-l">
                <li>
                  <Link to="/projects/web">{t("web_applications")}</Link>
                </li>
                <li>
                  <Link to="/projects/mobile">{t("mobile_applications")}</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/offer">{t("we_offer")}</Link>
          </li>
          <li>
            <Link to="/feature">{t("frequently_asked_questions")}</Link>
          </li>
          <li>
            <Link to="/price">{t("price")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("contact_us")}</Link>
          </li>
          <li>
            <Link to="/setting">{t("setting")}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
