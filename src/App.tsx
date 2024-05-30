import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Providers from "./components/Providers";
import CardsGridPage from "./pages/CardsGridPage";
import SidebarButton from "./components/SidebarButton";
import CardDetails from "./pages/CardDetails";

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";

import "../src/normalize.css";

const App = () => {
  return (
    <Providers>
      <BrowserRouter>
        <div
          style={{
            background: "#18181B",
            height: "100dvh",
          }}
          className="flex flex-column">
          <Navbar />
          <Sidebar />
          <SidebarButton />
          <div
            style={{
              paddingTop: "14rem",
            }}
            className="hidden md:block"></div>
          <Routes>
            <Route
              index
              element={<CardsGridPage mediaType="all" title="Home" />}
            />
            <Route
              path="/all/:page?"
              element={<CardsGridPage mediaType="all" title="Home" />}
            />
            <Route
              path="/movies/:page?"
              element={<CardsGridPage mediaType="movies" title="Movies" />}
            />
            <Route
              path="/series/:page?"
              element={<CardsGridPage mediaType="series" title="Series" />}
            />
            <Route
              path="/cartoons/:page?"
              element={<CardsGridPage mediaType="cartoons" title="Cartoons" />}
            />
            <Route
              path="/cartoon-series/:page?"
              element={
                <CardsGridPage
                  mediaType="cartoon-series"
                  title="Cartoon Series"
                />
              }
            />
            <Route
              path="/anime/:page?"
              element={<CardsGridPage mediaType="anime" title="Anime" />}
            />
            <Route path="/details/:id" element={<CardDetails />}>
              <Route path=":season" element={<CardDetails />}>
                <Route path=":episode" element={<CardDetails />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Providers>
  );
};

export default App;
