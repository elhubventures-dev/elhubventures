"use client";

import { useEffect } from "react";

const STORAGE_KEY = "elhub-theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const theme = stored === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  return children;
}

export function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  window.localStorage.setItem(STORAGE_KEY, next);
  return next;
}

export function getTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}
