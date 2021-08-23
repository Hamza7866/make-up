import "./css/app.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skincare from "./components/Skincare";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Skincare title="Top Products" />
    </>
  );
}

export default App;
