import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path={"/"}
            element={<App/>}
        />
    )
)

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error("No root element found");
}
const root = ReactDOM.createRoot(rootElement);

root.render(
    <RouterProvider router={router}/>
);
