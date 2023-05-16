import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/ROUTES";
import BasicForm from "./BasicForm";

const routes=createBrowserRouter(ROUTES);

function App() {
  return (
<>
<RouterProvider router={routes}/>
<BasicForm/>
</>
  );
}

export default App;
