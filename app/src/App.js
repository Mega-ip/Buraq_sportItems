import { Fragment } from "react";
import "./App.css";
import Header from "./MainView/Header/Header";
import Leftbar from "./MainView/Leftbar/Leftbar";
import Footer from "./MainView/Footer/Footer";
import Container from "./MainView/Container/Container";
import { Routes, Route } from "react-router-dom";
import Login from "./MainView/Login/Login";
import AboutUs from "./MainView/AboutUs/AboutUs";
import ContactUs from "./MainView/ContactUs/ContactUs";
function App() {
  function Home() {
    return (
      <Fragment>
        <Leftbar />
        {/* container */}
        <Container />
      </Fragment>
    );
  }

  function LoginPage() {
    return (
      <Fragment>
        <Login />
      </Fragment>
    );
  }

  function AboutUsPage() {
    return (
      <Fragment>
        <AboutUs />
      </Fragment>
    );
  }

  function ContactUsPage() {
    return (
      <Fragment>
        <ContactUs />
      </Fragment>
    );
  }
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* header */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="/about_us" element={<AboutUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

// I have to make the header and the left bar is responsive

export default App;
