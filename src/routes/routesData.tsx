import { Key, ReactNode } from "react";
import { Welcome, About, Experience, Contact } from "../components";

export interface IRouteData {
  key: Key | null | undefined;
  path: String;
  component: ReactNode;
  title: String;
}

const pageData: IRouteData[] = [
  {
    key: 0,
    path: "/",
    component: <Welcome />,
    title: "Welcome",
  },
  {
    key: 1,
    path: "about",
    component: <About />,
    title: "about",
  },
  {
    key: 2,
    path: "experience",
    component: <Experience />,
    title: "experience",
  },
  {
    key: 3,
    path: "contact",
    component: <Contact />,
    title: "contact",
  },
];

export default pageData;
