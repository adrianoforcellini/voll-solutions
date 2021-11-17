import { useState, useEffect } from 'react'
import { io } from 'socket.io-client';

function App() {
  const [response, setResponse] = useState("");
  const ENDPOINT = "http://localhost:3000";

  useEffect(() => {
    const socket = io(ENDPOINT);
  }, []);

  return (
    <div>
    </div>
  );
}


export default App
