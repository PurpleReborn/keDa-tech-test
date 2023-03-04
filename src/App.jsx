import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Example from "./screens/Example";
import Home from "./screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/soal-1",
    element: <Example/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
