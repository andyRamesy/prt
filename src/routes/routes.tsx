import { Route, Routes } from "react-router-dom";
import pageData from "./routesData";
import { IRouteData } from "./routesData";

const Router = () => {
  const pagesRoutes = pageData.map(
    ({ path, title, component, key }: IRouteData) => {
      return <Route key={key} path={`/${path}`} element={component} />;
    }
  );

  return <Routes>{pagesRoutes}</Routes>;
};

export default Router;
