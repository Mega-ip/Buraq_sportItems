import "./App.css";
import Header from "./MainView/Header/Header";
import Leftbar from "./MainView/Leftbar/Leftbar";
import Footer from "./MainView/Footer/Footer";
import CardItem from "./Genral/CardItem/CardItem";
function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* container */}
      <CardItem />
      {/* left bar */}
      <Leftbar />
      {/* small footer */}
      <Footer />
    </div>
  );
}

// I have to make the header and the left bar is responsive

export default App;
