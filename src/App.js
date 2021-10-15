// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar'
import Planets from './components/Planets';
import People from './components/People';
import {QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient()

function App() {
  const [page, setPage] = useState('planets');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar setPage={setPage} />
        <div className="content">
          { page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
