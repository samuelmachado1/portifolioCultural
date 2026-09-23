import { useEffect, useState } from "react";

function basePath() {
  return import.meta.env.BASE_URL.replace(/\/$/, "");
}

export function toPath(path: string) {
  const base = basePath();
  const [pathname, search = ""] = path.split("?");
  const normalized =
    pathname === "/" || pathname === ""
      ? "/"
      : pathname.startsWith("/")
        ? pathname
        : `/${pathname}`;
  return `${base}${normalized}${search ? `?${search}` : ""}`;
}

export function currentRoute() {
  const base = basePath();
  let path = window.location.pathname;
  if (base && path.startsWith(base)) path = path.slice(base.length);
  if (!path.startsWith("/")) path = `/${path}`;
  const clean = path.replace(/\/$/, "");
  return clean || "/";
}

export function navigate(to: string) {
  window.history.pushState({}, "", toPath(to));
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function useRoute() {
  const [route, setRoute] = useState(currentRoute);

  useEffect(() => {
    const sync = () => setRoute(currentRoute());
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  return route;
}
