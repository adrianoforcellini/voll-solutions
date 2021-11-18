import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Chat from "./pages/Chat"
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login/>}>
      </Route>
      <Route path="/chat" element={<Chat/>}>
      </Route>
      </Routes>
  </BrowserRouter>
  )
}

export default App
