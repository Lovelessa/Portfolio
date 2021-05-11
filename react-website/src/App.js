import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar'
import {BrowserRouter as Router} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
