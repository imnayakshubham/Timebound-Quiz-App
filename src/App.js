import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound/PageNotFound';
import { HomePage } from './components/Home/HomePage';
import { Navbar } from './components/Navbar/Navbar';
import { Quiz } from './components/Quiz/Quiz';
import { Result } from './components/Result/Result';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<>
          <Navbar />
          <HomePage />
        </>}></Route>
        <Route path='/quiz' element={<Quiz />}></Route>
        <Route path='/result' element={<Result />}></Route>
        <Route path='*' element={<><PageNotFound /></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
