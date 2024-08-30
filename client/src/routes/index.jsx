import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../components/phase-zero/Main";
import NavBar from "../components/phase-one/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />, 
        children: [
            {
                path : "navbar",
                element : <NavBar />
            }
        ]
      },
    ],
  },
]);

export default router;
