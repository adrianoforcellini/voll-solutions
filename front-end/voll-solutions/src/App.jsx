import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './pages/Chat/Chat';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route path='/chat' element={<Chat />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
