import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import MainPage from "./pages/MainPage";
import MoviePage from "./pages/MoviePage";
import SerialPage from "./pages/SerialPage";
import CartoonMoviePage from "./pages/CartoonMoviePage";
import AnimePage from "./pages/AnimePage";
import CardDetails from "./pages/CardDetails/CardDetails";
import Navbar from "./components/Navbar";

import "primeflex/primeflex.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
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
        <Route path="/anime/:page?" element={<AnimePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
