import './App.css';
import ImageContain from './components/ImageContain';

function App() {

  const style = {
    "fontFamily": "'Inspiration'",
    "fontSize": "100px",
    "margin": "0"
  }

  return (
    <div className="App">
      <h1 style={style}>Give me Hair</h1>
      <ImageContain />
    </div>
  );
}

export default App;
