import './App.css';
import Footer from './Component/Footer';
import MainContent from './Component/MainContent';
import NavBar from './Component/NavBar';
import SideBar from './Component/SideBar';

function App() {

  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
