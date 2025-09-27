import { useRoutes } from "react-router-dom";
import { TestPage } from "./pages/TestPage.tsx";

export const AppRouter = () => {
  const element = useRoutes([
    { path: "/", element: <TestPage /> },
    { path: "test1", element: <div>test1</div> },
  ]);
  return element;
};
