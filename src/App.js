import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Planets from './components/Planets';
import People from './components/People';

function App() {
  const [page, setPage] = useState('planets');

  return (
    <div className="App">

      <Navbar setPage={setPage} />

      <div className="content">
        { page === 'planets' ? <Planets /> : <People />}
      </div>

    </div>
  );
}

export default App;
