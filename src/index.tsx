import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

import { Bar } from "@nivo/bar";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const data = new Array(300)
  .fill(0)
  .map((_, i) => ({ id: i, value: Math.random().toString() }));

function App() {
  return <Bar width={500} height={300 * 20} data={data} layout="horizontal" />;
}
