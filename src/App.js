import Header from "components/header";
import { BrowserRouter } from "react-router-dom";
import Router from "routes";

function App() {
  return (
    <BrowserRouter basename="/react-team-space-dashboard">
      <div className="app">
        <Header />
        <main className="content">
          <Router />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
