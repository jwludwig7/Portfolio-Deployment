import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Main } from './Views/Main';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/jl' replace/>}/>
        <Route path='jl' element={<Main/>}/>
      </Routes>
    </>
  );
}

export default App;
