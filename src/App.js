import './App.css';
import ItemGrid from './components/ItemGrid';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <>
    <div class = "sidenav">
        <Sidebar />
    </div>
    <div class = "main">
      <ItemGrid />
    </div>
    </>
  );
}

export default App;