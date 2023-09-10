import "./styles.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}
