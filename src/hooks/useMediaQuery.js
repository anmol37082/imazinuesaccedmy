"use client";

import { useSyncExternalStore } from "react";

function subscribeToMediaQuery(query, onStoreChange) {
  const mediaQuery = window.matchMedia(query);
  mediaQuery.addEventListener("change", onStoreChange);

  return () => mediaQuery.removeEventListener("change", onStoreChange);
}

function getMediaQuerySnapshot(query) {
  return window.matchMedia(query).matches;
}

export default function useMediaQuery(query) {
  return useSyncExternalStore(
    (onStoreChange) => subscribeToMediaQuery(query, onStoreChange),
    () => getMediaQuerySnapshot(query),
    () => false
  );
}
