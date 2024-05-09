import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import MoviePage from "./pages/MoviePage";
import AnimePage from "./pages/AnimePage";
import SerialPage from "./pages/SerialPage";
import CartoonMoviePage from "./pages/CartoonMoviePage";
import CardDetails from "./pages/CardDetails/CardDetails";
import CartoonSeriesPage from "./pages/CartoonSeriesPage";

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/tailwind-light/theme.css";

import "../src/normalize.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route
          path="/details/:id/:season?/:episode?"
          element={<CardDetails />}
        />
        <Route path="/:page?/:page?" element={<MainPage />} />
        <Route path="/movies/:page?" element={<MoviePage />} />
        <Route path="/series/:page?" element={<SerialPage />} />
        <Route path="/cartoons/:page?" element={<CartoonMoviePage />} />
        <Route path="/cartoon-series/:page?" element={<CartoonSeriesPage />} />
        <Route path="/anime/:page?" element={<AnimePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
