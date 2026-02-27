import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }
  }, [pathname, hash]);

  return null;
}
