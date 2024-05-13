import { useEffect } from "react";
import ReactGA from "react-ga4";

export function useTitle(title: string) {
  useEffect(() => {
    document.title = title;
    ReactGA.send({
      hintType: "pageview",
      page: window.location.pathname,
    });
  }, []);
}
