import './App.css';
import LocalStorage from './Component/LocalStorage';
import SessonStorage from './Component/SessonStorage';

function App() {
  return (
    <div>
      <div className="container border rounded border-primary mt-5 bg-info">
        <h1 className='text-center text-dark'>SessonStorage</h1>
        <SessonStorage />
      </div>
      <div className="container border rounded border-dark  mt-5 bg-primary">
        <h1 className='text-center text-light'>LocalStorage</h1>
        <LocalStorage />
      </div>
    </div>
  );
}

export default App;
