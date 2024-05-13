import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Media } from "./types";
import Navbar from "./components/Navbar";
import { CardsContext } from "./hooks/useCards";
import CardsGridPage from "./pages/CardsGridPage";
import CardDetails from "./pages/CardDetails/CardDetails";

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";

import "../src/normalize.css";

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
    </CardsContext.Provider>
  );
};

export default App;
