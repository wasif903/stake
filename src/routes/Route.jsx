import Home from "../Pages/HomeFeed/Home";
import Privacy from "../Pages/privacy-policy/Privacy";
import Responsible_Gaming from "../Pages/responsible-Gaming/Responsible_Gaming";

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
    path: "/privacy-policy",
    element: <Privacy />,
  },
];

export default routes;
