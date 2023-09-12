import Home from "../Pages/HomeFeed/Home";
import Kyc from "../Pages/KYC/Kyc";
import Privacy from "../Pages/privacy-policy/Privacy";
import Responsible_Gaming from "../Pages/responsible-Gaming/Responsible_Gaming";
import Terms_and_condition from "../Pages/terms-And-Condition/Terms_and_condition";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/responsible-gaming",
    element: <Responsible_Gaming />,
  },
  {
    path: "/terms-and-condition",
    element: <Terms_and_condition />,
  },
  {
    path: "/privacy-policy",
    element: <Privacy />,
  },
  {
    path: "/kyc",
    element: <Kyc />,
  },
];

export default routes;
