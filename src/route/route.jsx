import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Todo from "../pages/Todo/Todo";
import Pricing from "../pages/Pricing/Pricing";
import ErrorPage from "../pages/Error/Error";
import Contact from "../pages/Contact/Contact";
import Datatable from "../pages/DataTable/Datatable";
import Projects from "../pages/Projects/Projects";
import Mobile from "../pages/Mobile/Mobile";
import Web from "../pages/Web/Web";
import Offer from "../pages/Offer/Offer";
import FeaturePage from "../pages/FeaturePage/FeaturePage";
import TermsAndCondition from "../pages/TermsAndCondition/TermsAndCondition";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "projects",
        children: [
          {
            index: true, // 1st Child dedicated to his with an idex true this is for absolute path
            element: <Projects />,
          },
          {
            path: "web",
            element: <Web />,
          },
          {
            path: "mobile",
            element: <Mobile />,
          },
        ],
      },
      {
        path: "offer",
        element: <Offer />,
      },
      {
        path: "feature",
        element: <FeaturePage />,
      },
      {
        path: "price",
        element: <Pricing />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "terms-and-condition",
        element: <TermsAndCondition />,
      },
    ],
  },
]);
