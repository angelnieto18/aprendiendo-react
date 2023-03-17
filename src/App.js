import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar
                link_1="home"
                link_2="services"
                link_3="About"
                link_4="FAQ"
            />
            <Footer />
        </div>
    );
}

export default App;
