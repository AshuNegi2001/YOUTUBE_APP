import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import WatchPage from "./components/WatchPage";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import FilterPage from "./components/FilterPage";




const AppLayout = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet /> {/* I passed Outlet here because In createBrowserRouter I passed body as children that why I used here Outlet component.*/}
      </Provider>
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>, // I passed <AppLayout /> here, because I have to pass routing to <Header /> because of search filter.
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
            
          },
          {
            path: "watch",
            element: <WatchPage />,
            
          },
          {
            path: "filter",
            element: <FilterPage />,
            
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
