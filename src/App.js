import "./App.css";
import Header from "./components/Header/Header";
// import Contact from "./components/Contact/Conindex";
import Footer from "./components/Footer/Footer";
import Count from "./components/Count";
import Wecreate from "./components/Wecreated";
import Services from "./components/Services";
import First from "./components/First";
import Clients from "./components/clients";
import Getstart from "./components/GetStart";

function App() {
  return (
    <div className="App">
      <Header />
      <Count />
      <Wecreate />
      <Services />
      <First />
      {/* <Contact /> */}
      <Getstart />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;