import './App.css';
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'

function App() {
  return (
    <div className="App">
        <Navbar link_1="home" link_2="services" link_3="About" link_4="FAQ"/>
        <Footer />
    </div>
  );
}

export default App;
