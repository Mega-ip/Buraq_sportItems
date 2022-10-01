import "./App.css";
import Header from "./MainView/Header/Header";
import Leftbar from "./MainView/Leftbar/Leftbar";
import Footer from "./MainView/Footer/Footer";

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* container */}
      {/* left bar */}
      <Leftbar />
      {/* small footer */}
      <Footer/>

    </div>
  );
}

export default App;
