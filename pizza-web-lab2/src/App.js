import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Slider from './components/Slider';


function App() {
  return (
    <div style={{ backgroundColor: '#333333' }}>
      <Header />
      <Slider />
      <Menu />
      <Footer/>
    </div>
  );
}
export default App;
