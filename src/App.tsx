import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Media } from "./types";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";
import AnimePage from "./pages/AnimePage";
import SerialPage from "./pages/SerialPage";
import { CardsContext } from "./hooks/useCards";
import CartoonMoviePage from "./pages/CartoonMoviePage";
import CardDetails from "./pages/CardDetails/CardDetails";
import CartoonSeriesPage from "./pages/CartoonSeriesPage";

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";

import "../src/normalize.css";
import Menu from "./components/Menu";
import CardsGridPage from "./pages/CardsGridPage";

const App = () => {
  const [cards, setCards] = useState<Media[]>([]);
  const [countOfPages, setCountOfPages] = useState(0);

  return (
    <CardsContext.Provider
      value={{ cards, setCards, countOfPages, setCountOfPages }}>
      <BrowserRouter>
        <Navbar />
        <div
          style={{
            background: "#18181B",
            paddingTop: "8rem",
          }}>
          <Routes>
            <Route index element={<CardsGridPage mediaType="all" />} />
            <Route
              path="/all/:page?"
              element={<CardsGridPage mediaType="all" />}
            />
            <Route
              path="/movies/:page?"
              element={<CardsGridPage mediaType="movies" />}
            />
            <Route
              path="/series/:page?"
              element={<CardsGridPage mediaType="series" />}
            />
            <Route
              path="/cartoons/:page?"
              element={<CardsGridPage mediaType="cartoons" />}
            />
            <Route
              path="/cartoon-series/:page?"
              element={<CardsGridPage mediaType="cartoon-series" />}
            />
            <Route
              path="/anime/:page?"
              element={<CardsGridPage mediaType="anime" />}
            />
            <Route path="/details/:id" element={<CardDetails />}>
              <Route path=":season" element={<CardDetails />}>
                <Route path=":episode" element={<CardDetails />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CardsContext.Provider>
  );
};

export default App;
