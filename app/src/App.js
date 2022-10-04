import "./App.css";
import Header from "./MainView/Header/Header";
import Leftbar from "./MainView/Leftbar/Leftbar";
import Footer from "./MainView/Footer/Footer";
import Container from "./MainView/Container/Container";
function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* left bar */}
      <Leftbar />
      {/* container */}
      <Container />
      {/* small footer */}
      <Footer />
    </div>
  );
}

// I have to make the header and the left bar is responsive

export default App;
