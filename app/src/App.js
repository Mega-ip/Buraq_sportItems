import "./App.css";
import Header from "./MainView/Header/Header";
import Leftbar from "./MainView/Leftbar/Leftbar";
function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* container */}
      {/* left bar */}
      <Leftbar />
      {/* small footer */}
    </div>
  );
}

export default App;
