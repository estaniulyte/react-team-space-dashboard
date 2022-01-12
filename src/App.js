import Header from "components/header";
import { BrowserRouter } from "react-router-dom";
import Router from "routes";

function App() {
  return (
    <BrowserRouter basename="/react-team-space-dashboard">
      <div className="app">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
