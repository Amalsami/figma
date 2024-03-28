import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      // children: [{
      //   path: "",
      //   element: <HomePage />,
      // }]
    },
  ]
)
function App() {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
