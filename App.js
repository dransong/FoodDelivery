import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { LuncheonetteScreen } from "./src/features/luncheonette/screens/luncheonette.screen";
export default function App() {
  return (
    <>
      <LuncheonetteScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
