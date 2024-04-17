import { Link } from "react-router-dom";
import GaugeComponent from "react-gauge-component";

const AppWidget = ({ t, title, routeLink, routeText, icon, noOfApps }) => {
  return (
    <div className="bg-white w-2xl p-5 h-30 shadow m-1 flex justify-between flex-col dark:bg-slate-700">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-slate-600 dark:text-white">
          {t(title)}
        </span>
        <Link
          to={routeLink}
          className="hover:text-orange-500 text-blue-700 font-bold text-xl dark:text-white"
        >
          {t(routeText)}
          <i className="fa-solid fa-arrow-right ml-3"></i>
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <div className="stat-value text-blue-700 dark:text-white dark:border-slate-200 ">
            {/* <CountUp end={noOfApps} duration={10} />+ */}
            <GaugeComponent
              type="semicircle"
              arc={{
                width: 0.2,
                padding: 0.005,
                cornerRadius: 1,
                // gradient: true,
                subArcs: [
                  {
                    limit: 5,
                    color: "#c71602",
                    showTick: true,
                  },
                  {
                    limit: 10,
                    color: "#f0844a",
                    showTick: true,
                  },
                  {
                    limit: 15,
                    color: "#fff426",
                    showTick: true,
                  },
                  {
                    limit: 20,
                    color: "#09e657",
                    showTick: true,
                  },
                  {
                    color: "#039135",
                  },
                ],
              }}
              pointer={{
                color: "#bebdbf",
                length: 0.8,
                width: 15,
              }}
              labels={{
                valueLabel: {
                  formatTextValue: (value) => value + "+",
                  style: {
                    fontSize: "55px",
                    fill: "#3a1aed",
                    textShadow: "none",
                    fontWeight: "600",
                  },
                },
                tickLabels: {
                  type: "outer",
                  valueConfig: {
                    formatTextValue: (value) => value + "+",
                    fontSize: 10,
                  },
                },
              }}
              value={noOfApps}
              minValue={0}
              maxValue={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppWidget;
